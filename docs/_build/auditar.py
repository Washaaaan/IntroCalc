import os, re, glob, json

base = r"C:\Users\Alan Gornall\Desktop\MAT1107-completo\docs"
content = os.path.join(base, "content")
expected = []
for m, n in [(1, 8), (2, 4), (3, 9), (4, 4), (5, 8), (6, 6)]:
    for s in range(1, n + 1):
        expected.append(("m%02d_s%02d" % (m, s), "m%02d" % m))
ids = {}
for f in glob.glob(os.path.join(content, "**", "*.js"), recursive=True):
    t = open(f, encoding="utf-8").read()
    for m in re.finditer(r'\bid\s*:\s*"([^"]+)"', t):
        ids.setdefault(m.group(1), []).append(os.path.relpath(f, base))
print("Archivos JS:", len(glob.glob(os.path.join(content, "**", "*.js"), recursive=True)))
print("IDs declarados:", len(ids))
for eid, folder in expected:
    if eid not in ids:
        print("FALTA:", eid)
    elif len(ids[eid]) > 1:
        print("DUPLICADO:", eid, ids[eid])
for eid, files in ids.items():
    if len(files) > 1:
        print("DUPLICADO:", eid, files)
extra = set(ids) - set(e[0] for e in expected)
if extra:
    print("IDS EXTRA:", sorted(extra))
