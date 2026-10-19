import json, subprocess, time, urllib.request, sys
import websocket

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ROOT = r"C:\Users\Alan Gornall\Desktop\MAT1107-completo\docs"
PORT = 9225
Udd = r"C:\Users\Alan Gornall\AppData\Local\Temp\opencode\chrome_mat1107_interact"

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

def ev(expr):
    r = send("Runtime.evaluate", {"expression": expr, "returnByValue": True, "awaitPromise": True})
    return r.get("result", {}).get("result", {}).get("value")

send("Page.enable")
send("Runtime.enable")
url = "file:///" + ROOT.replace("\\", "/").replace(" ", "%20") + "/index.html#/m01_s04"
send("Page.navigate", {"url": url})
time.sleep(2)

print("Titulo:", ev("document.querySelector('.section-head h2').textContent"))
print("Ejercicios renderizados:", ev("document.querySelectorAll('.ex').length"))
print("Botones revelar:", ev("document.querySelectorAll('.runbtn').length"))

# revelar primer ejercicio
print("Antes revelar, solucion oculta:", ev("document.getElementById(document.querySelector('.runbtn').getAttribute('data-target')).hasAttribute('hidden')"))
ev("document.querySelector('.runbtn').click()")
time.sleep(0.5)
print("Despues revelar, solucion oculta:", ev("document.getElementById(document.querySelector('.runbtn').getAttribute('data-target')).hasAttribute('hidden')"))
print("Texto resultado:", (ev("document.getElementById(document.querySelector('.runbtn').getAttribute('data-target')).innerText") or "")[:120].replace("\n", " | "))

# quiz: responder primera pregunta (eligiendo la correcta)
print("Quiz preguntas:", ev("document.querySelectorAll('.quiz-q').length"))
ev("(function(){var q=document.querySelector('.quiz-q');var c=parseInt(q.querySelector('.opt').getAttribute('data-correct'),10);q.querySelectorAll('.opt')[c].click();})()")
time.sleep(0.3)
print("Pregunta marcada:", ev("document.querySelector('.quiz-q').classList.contains('answered')"))
print("Alternativa correcta marcada:", ev("document.querySelector('.quiz-q .opt.correct') !== null"))
print("Feedback visible:", ev("!document.querySelector('.quiz-q .quiz-fb').hasAttribute('hidden')"))
print("Puntaje:", ev("document.querySelector('.quiz-score').textContent"))

# marcar ejercicio
ev("document.querySelector('.markbtn').click()")
time.sleep(0.2)
print("Boton marcar activo:", ev("document.querySelector('.markbtn').classList.contains('on')"))

# tema
ev("document.querySelector('#theme-toggle').click()")
time.sleep(0.4)
print("Tema oscuro:", ev("document.documentElement.getAttribute('data-theme')"))

# busqueda
ev("document.querySelector('#theme-toggle').click()")
time.sleep(0.2)
ev("document.querySelector('#search').value='inducción'; document.querySelector('#search').dispatchEvent(new Event('input'))")
time.sleep(0.3)
print("Resultados busqueda:", ev("document.querySelectorAll('#search-results .sec-link').length"))
print("Primer resultado:", ev("(document.querySelector('#search-results .sec-link')||{}).textContent"))

# navegacion pager
ev("document.querySelector('.pager button[data-nav]').click()")
time.sleep(1.2)
print("Navego a:", ev("document.querySelector('.section-head h2').textContent"))

# revisar titulos de graficos sin LaTeX crudo
ev("document.querySelector('#search').value=''; document.querySelector('#search').dispatchEvent(new Event('input'))")
time.sleep(0.2)
print("Graficos con $ en titulo:", ev("Array.prototype.filter.call(document.querySelectorAll('.gtitle'), function(t){return t.textContent.indexOf('$')!==-1;}).length"))

ws.close()
proc.terminate()
try:
    proc.wait(timeout=5)
except Exception:
    proc.kill()
