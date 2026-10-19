import json, os, subprocess, time, urllib.request, sys
import websocket

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ROOT = r"C:\Users\Alan Gornall\Desktop\MAT1107-completo\docs"
PORT = 9224
Udd = r"C:\Users\Alan Gornall\AppData\Local\Temp\opencode\chrome_mat1107_test2"

ids = []
for m, n in [(1, 8), (2, 4), (3, 9), (4, 4), (5, 8), (6, 6)]:
    for s in range(1, n + 1):
        ids.append("m%02d_s%02d" % (m, s))

proc = subprocess.Popen([
    CHROME, "--headless=new", "--disable-gpu", "--no-sandbox",
    "--remote-debugging-port=%d" % PORT, "--user-data-dir=" + Udd,
    "--remote-allow-origins=*", "--allow-file-access-from-files", "about:blank"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

base = "http://127.0.0.1:%d" % PORT
for _ in range(60):
    try:
        urllib.request.urlopen(base + "/json/version", timeout=1).read()
        break
    except Exception:
        time.sleep(0.25)
else:
    print("No se pudo iniciar Chrome")
    sys.exit(1)

# crear pestaña
req = urllib.request.Request(base + "/json/new?about:blank", method="PUT")
tab = json.loads(urllib.request.urlopen(req, timeout=5).read())
ws = websocket.create_connection(tab["webSocketDebuggerUrl"], timeout=20)
mid = 0

def send(method, params=None):
    global mid
    mid += 1
    ws.send(json.dumps({"id": mid, "method": method, "params": params or {}}))
    while True:
        msg = json.loads(ws.recv())
        if msg.get("id") == mid:
            return msg

send("Page.enable")
send("Runtime.enable")
send("Log.enable")

problemas = []
for sid in ids:
    url = "file:///" + ROOT.replace("\\", "/").replace(" ", "%20") + "/index.html#/" + sid
    send("Page.navigate", {"url": url})
    time.sleep(1.4)
    expr = r"""
    (function(){
      var head = document.querySelector('.section-head h2');
      var graphs = Array.prototype.map.call(document.querySelectorAll('.graph'), function(g){ return g.innerText || ''; });
      var errs = graphs.filter(function(t){ return /Error al graficar|Gráfico no soportado/.test(t); });
      var mathErr = Array.prototype.map.call(document.querySelectorAll('.katex-error'), function(e){ return e.textContent; });
      var quiz = document.querySelectorAll('.quiz-q').length;
      var ex = document.querySelectorAll('.ex').length;
      return JSON.stringify({titulo: head ? head.textContent : null, graphs: graphs.length, graphErr: errs, mathErr: mathErr, quiz: quiz, ex: ex});
    })()
    """
    res = send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
    val = res.get("result", {}).get("result", {}).get("value")
    if not val:
        problemas.append((sid, "sin resultado de evaluación", str(res)[:200]))
        continue
    data = json.loads(val)
    if not data["titulo"]:
        problemas.append((sid, "no se renderizó la sección", ""))
    if data["graphErr"]:
        problemas.append((sid, "error de gráfico", data["graphErr"]))
    if data["mathErr"]:
        problemas.append((sid, "error de KaTeX", data["mathErr"]))
    if data["quiz"] < 5:
        problemas.append((sid, "pocas preguntas renderizadas", data["quiz"]))
    print("%-8s | %-55s | graf=%2d quiz=%2d ex=%2d" % (sid, (data["titulo"] or "")[:55], data["graphs"], data["quiz"], data["ex"]))

print("\nPROBLEMAS:", len(problemas))
for p in problemas:
    print(p)

ws.close()
proc.terminate()
try:
    proc.wait(timeout=5)
except Exception:
    proc.kill()
