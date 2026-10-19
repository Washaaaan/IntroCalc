const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

global.window = {};
global.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
global.document = { addEventListener() {} };

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  try {
    eval(code);
  } catch (e) {
    console.log("ERROR cargando " + rel + ": " + e.message);
    process.exitCode = 1;
  }
}

load("assets/js/content.js");
load("assets/js/progress.js");

const files = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith(".js")) files.push(path.relative(ROOT, p).replace(/\\/g, "/"));
  }
}
walk(path.join(ROOT, "content"));
files.sort();
for (const f of files) load(f);

const M = global.window.MAT1107;
M.ordenar();
const ord = M.orden;
let problemas = 0;
const ids = new Set();
const refs = new Set();
const esperados = [];
for (const [m, n] of [[1, 8], [2, 4], [3, 9], [4, 4], [5, 8], [6, 6]]) {
  for (let i = 1; i <= n; i++) esperados.push({ id: "m" + String(m).padStart(2, "0") + "_s" + String(i).padStart(2, "0"), modulo: m, orden: esperados.length + 1 });
}
for (let i = 0; i < ord.length; i++) {
  const s = M.secciones[ord[i]];
  const exp = esperados[i];
  if (!exp || exp.id !== s.id) { console.log("ORDEN INESPERADO en posición " + (i + 1) + ": " + s.id); problemas++; }
  if (s.modulo !== exp.modulo) { console.log("MODULO INCORRECTO: " + s.id); problemas++; }
  if (s.orden !== exp.orden) { console.log("ORDEN INTERNO INCORRECTO: " + s.id + " (declara " + s.orden + ", esperado " + exp.orden + ")"); problemas++; }
  if (s.materia !== "MAT1107 · Introducción al Cálculo") { console.log("MATERIA INCORRECTA: " + s.id); problemas++; }
  if (!s.conexion) { console.log("SIN conexion: " + s.id); problemas++; }
  if (!s.resumen || s.resumen.length !== 3) { console.log("RESUMEN distinto de 3: " + s.id); problemas++; }
  if ((s.referencias || []).length < 2) { console.log("POCAS referencias: " + s.id); problemas++; }
  (s.ejercicios || []).forEach(function (e, j) {
    if (["basico", "intermedio", "avanzado"].indexOf(e.dificultad) === -1) { console.log("DIFICULTAD invalida: " + s.id + " #" + (j + 1)); problemas++; }
  });
}
for (const id of ord) {
  const s = M.secciones[id];
  if (ids.has(id)) { console.log("DUPLICADO " + id); problemas++; }
  if (id !== s.id) { console.log("ID INTERNO DISTINTO: archivo " + id + " declara " + s.id); problemas++; }
  ids.add(id);
  if (!s.titulo) { console.log("SIN titulo: " + id); problemas++; }
  if (!s.objetivo) { console.log("SIN objetivo: " + id); problemas++; }
  if (!s.materia || s.materia.indexOf("MAT1107") === -1) { console.log("SIN materia: " + id); problemas++; }
  const ne = (s.ejercicios || []).length;
  const nex = (s.ejemplos || []).length;
  const nq = (s.autoevaluacion || []).length;
  if (ne < 4) { console.log("POCOS ejercicios (" + ne + "): " + id); problemas++; }
  if (nex < 2) { console.log("POCOS ejemplos (" + nex + "): " + id); problemas++; }
  if (nq < 5) { console.log("POCAS preguntas (" + nq + "): " + id); problemas++; }
  (s.ejercicios || []).forEach(function (e, i) {
    if (!e.desarrollo || !e.desarrollo.length) { console.log("EJERCICIO sin desarrollo: " + id + " #" + (i + 1)); problemas++; }
    if (!e.respuesta) { console.log("EJERCICIO sin respuesta: " + id + " #" + (i + 1)); problemas++; }
  });
  (s.ejemplos || []).forEach(function (e, i) {
    if (!e.desarrollo || !e.desarrollo.length) { console.log("EJEMPLO sin desarrollo: " + id + " #" + (i + 1)); problemas++; }
    if (!e.respuesta) { console.log("EJEMPLO sin respuesta: " + id + " #" + (i + 1)); problemas++; }
  });
  (s.autoevaluacion || []).forEach(function (q, i) {
    if (!q.opciones || q.opciones.length < 4) { console.log("QUIZ con pocas opciones: " + id + " #" + (i + 1)); problemas++; }
    if (typeof q.correcta !== "number" || q.correcta < 0 || q.correcta >= (q.opciones || []).length) { console.log("QUIZ correcta invalida: " + id + " #" + (i + 1)); problemas++; }
    if (!q.explicacion) { console.log("QUIZ sin explicacion: " + id + " #" + (i + 1)); problemas++; }
  });
  (s.referencias || []).forEach(function (r) {
    if (r.ruta) refs.add(r.ruta);
  });
}
// detectar barras invertidas simples que producen caracteres de control
function revisarTexto(obj, ruta, id) {
  if (typeof obj === "string") {
    if (/[\x00-\x1f]/.test(obj)) {
      console.log("CARACTER DE CONTROL en " + id + " (" + ruta + "): " + JSON.stringify(obj.slice(0, 120)));
      problemas++;
    }
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach(function (v, i) { revisarTexto(v, ruta + "[" + i + "]", id); });
    return;
  }
  if (obj && typeof obj === "object") {
    Object.keys(obj).forEach(function (k) { revisarTexto(obj[k], ruta + "." + k, id); });
  }
}
for (const id of ord) revisarTexto(M.secciones[id], id, id);

function revisarGrafico(spec, id, ruta) {
  if (!spec || !spec.tipo) return;
  try {
    if (spec.tipo === "plot2d" && spec.funciones) {
      spec.funciones.forEach(function (f, i) {
        if (typeof f.f !== "function") return;
        let validos = 0;
        for (let k = 0; k <= 60; k++) {
          const x = f.desde + (f.hasta - f.desde) * k / 60;
          const y = f.f(x);
          if (typeof y === "number" && isFinite(y)) validos++;
        }
        if (!validos) { console.log("GRAFICO sin valores finitos: " + id + " " + ruta + " funcion " + i); problemas++; }
      });
    }
    if (spec.tipo === "sucesion" && spec.terminos) {
      spec.terminos.forEach(function (v, i) {
        if (typeof v !== "number" || !isFinite(v)) { console.log("SUCESION con valor invalido: " + id + " " + ruta + " #" + (i + 1)); problemas++; }
      });
    }
  } catch (e) {
    console.log("GRAFICO con error: " + id + " " + ruta + " -> " + e.message);
    problemas++;
  }
}
function recorrerGraficos(obj, id, ruta) {
  if (!obj || typeof obj !== "object") return;
  if (obj.tipo && typeof obj.tipo === "string" && (obj.tipo === "plot2d" || obj.tipo === "sucesion" || obj.tipo === "recta_numerica" || obj.tipo === "vectores2d" || obj.tipo === "vectores3d" || obj.tipo === "transformacion2d")) {
    revisarGrafico(obj, id, ruta);
  }
  if (Array.isArray(obj)) {
    obj.forEach(function (v, i) { recorrerGraficos(v, id, ruta + "[" + i + "]"); });
    return;
  }
  Object.keys(obj).forEach(function (k) {
    if (obj[k] && typeof obj[k] === "object") recorrerGraficos(obj[k], id, ruta + "." + k);
  });
}
for (const id of ord) recorrerGraficos(M.secciones[id], id, id);

console.log("Archivos JS cargados: " + files.length);
console.log("Secciones registradas: " + ord.length);
console.log("Módulos: " + Object.keys(M.modulos).sort((a, b) => a - b).join(","));
let totEj = 0, totEx = 0, totQ = 0;
for (const id of ord) {
  totEj += (M.secciones[id].ejercicios || []).length;
  totEx += (M.secciones[id].ejemplos || []).length;
  totQ += (M.secciones[id].autoevaluacion || []).length;
}
console.log("Total ejemplos: " + totEx + " | Total ejercicios: " + totEj + " | Preguntas autoeval: " + totQ);
let faltantes = 0;
for (const r of refs) {
  const real = path.join(ROOT, r.replace(/\//g, path.sep));
  if (!fs.existsSync(real)) { console.log("REFERENCIA FALTANTE: " + r); faltantes++; }
}
console.log("Referencias únicas: " + refs.size + " | faltantes: " + faltantes);
if (faltantes) problemas += faltantes;
console.log(problemas === 0 ? "RESULTADO: OK sin problemas" : "RESULTADO: " + problemas + " problemas");
if (problemas) process.exitCode = 1;
