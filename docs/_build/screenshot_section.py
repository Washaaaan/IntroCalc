import json, subprocess, time, urllib.request, sys, base64, os

CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
ROOT = r"C:\Users\Alan Gornall\Desktop\MAT1107-completo\docs"
PORT = 9226
Udd = r"C:\Users\Alan Gornall\AppData\Local\Temp\opencode\chrome_mat1107_shot3"
SID = sys.argv[1] if len(sys.argv) > 1 else "m01_s03"
OUT = sys.argv[2] if len(sys.argv) > 2 else r"C:\Users\Alan Gornall\AppData\Local\Temp\opencode\mat1107_full.png"
W = int(sys.argv[3]) if len(sys.argv) > 3 else 1440
H = int(sys.argv[4]) if len(sys.argv) > 4 else 1200

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
req = urllib.request.Request(base + "/json/new?about:blank", method="PUT")
tab = json.loads(urllib.request.urlopen(req, timeout=5).read())
ws = websocket_connection = __import__("websocket").create_connection(tab["webSocketDebuggerUrl"], timeout=20)
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
send("Emulation.setDeviceMetricsOverride", {"width": W, "height": H, "deviceScaleFactor": 1, "mobile": W < 700})
url = "file:///" + ROOT.replace("\\", "/").replace(" ", "%20") + "/index.html#/" + SID
send("Page.navigate", {"url": url})
time.sleep(2.5)
res = send("Page.captureScreenshot", {"format": "png", "captureBeyondViewport": True})
data = base64.b64decode(res["result"]["data"])
open(OUT, "wb").write(data)
print(OUT, len(data))
ws.close()
proc.terminate()
try:
    proc.wait(timeout=5)
except Exception:
    proc.kill()
