(function () {
  "use strict";
  const MAT1107 = (window.MAT1107 = window.MAT1107 || {});
  MAT1107.modulos = MAT1107.modulos || {};
  MAT1107.secciones = MAT1107.secciones || {};
  MAT1107.orden = MAT1107.orden || [];

  MAT1107.modulo = function (m) {
    if (!MAT1107.modulos[m.id]) MAT1107.modulos[m.id] = m;
  };

  MAT1107.register = function (s) {
    if (!s || !s.id) throw new Error("Sección sin id");
    if (MAT1107.secciones[s.id]) {
      console.warn("Sección duplicada: " + s.id);
    }
    MAT1107.secciones[s.id] = s;
    // texto auxiliar para el buscador
    var texto = (s.titulo || "") + " " + (s.objetivo || "") + " " + (s.fuente || "") + " " + (s.moduloNombre || "");
    (s.teoria || []).forEach(function (b) {
      texto += " " + (b.titulo || "") + " " + String(b.html || "").replace(/<[^>]+>/g, " ");
    });
    (s.ejemplos || []).forEach(function (e) { texto += " " + (e.titulo || "") + " " + String(e.enunciado || "").replace(/<[^>]+>/g, " "); });
    (s.ejercicios || []).forEach(function (e) { texto += " " + (e.titulo || "") + " " + String(e.enunciado || "").replace(/<[^>]+>/g, " "); });
    (s.autoevaluacion || []).forEach(function (q) { texto += " " + String(q.pregunta || "").replace(/<[^>]+>/g, " "); });
    s._texto = texto.toLowerCase();
    if (MAT1107.orden.indexOf(s.id) === -1) MAT1107.orden.push(s.id);
  };

  MAT1107.ordenar = function () {
    // ordena secciones según modulos/indice si están definidos
    MAT1107.orden.sort(function (a, b) {
      const A = MAT1107.secciones[a], B = MAT1107.secciones[b];
      if (!A || !B) return 0;
      if (A.modulo !== B.modulo) return A.modulo - B.modulo;
      return (A.orden || 0) - (B.orden || 0);
    });
  };
})();
