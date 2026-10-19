/* Módulo 5 · Sección 4 — Técnicas de cálculo de límites */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s04", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 29,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Técnicas de cálculo de límites",
    objetivo: "Seleccionar y aplicar técnicas algebraicas —dividir por la mayor potencia, factorizar, amplificar por el conjugado, usar $|a_n|\\to 0$ y acotar— para calcular límites de sucesiones sin recurrir cada vez a la definición $\\varepsilon$-$N$.",
    conexion: "Ya conoces las propiedades y operaciones con límites, además de los límites de referencia como $1/n^p\\to 0$. Ahora combinaremos esas herramientas en una batería de técnicas para enfrentar expresiones más complicadas, especialmente cocientes, raíces y sumas con muchos términos.",
    fuente: "Clase 24A · Guía 10 · Interrogación 6 2025 · Stewart §13.4",
    prerrequisitos: ["Álgebra de límites", "Límites de referencia 1/nᵖ → 0", "Racionalización con conjugado", "Teorema del sándwich"],
    teoria: [
      { tipo: "texto", html: "<p>La definición $\\varepsilon$-$N$ sirve para <b>demostrar</b> límites, pero calcularlos con ella en cada ejercicio sería como construir una casa ladrillo por ladrillo cada vez. En la práctica reconocemos la <b>forma</b> de la expresión y aplicamos una técnica adecuada. Esta sección es un pequeño recetario: cada técnica tiene una situación típica en la que funciona.</p><p>La clave está en transformar la expresión original en otra equivalente donde aparezcan límites conocidos, normalmente potencias de $1/n$ que tienden a cero.</p>" },
      { tipo: "teorema", titulo: "Técnica 1: dividir por la mayor potencia", html: "<p>Para un cociente de polinomios $\\frac{P(n)}{Q(n)}$, se divide numerador y denominador por $n^d$, donde $d$ es el grado de $Q$. Luego se usa $\\frac{1}{n^k}\\to 0$ para $k\\ge 1$.</p><p>Si $P(n)=a_kn^k+\\cdots$ y $Q(n)=b_dn^d+\\cdots$, con $a_k,b_d\\neq 0$, entonces:</p><ul><li>Si $k<d$: $\\displaystyle\\lim\\frac{P(n)}{Q(n)}=0$.</li><li>Si $k=d$: $\\displaystyle\\lim\\frac{P(n)}{Q(n)}=\\frac{a_k}{b_d}$.</li><li>Si $k>d$: el cociente no converge; crece sin cota en valor absoluto.</li></ul><p><b>Ejemplo corto.</b> $$\\frac{3n^2-2n}{n^2+5}=\\frac{3-\\frac{2}{n}}{1+\\frac{5}{n^2}}\\longrightarrow\\frac{3}{1}=3.$$</p>" },
      { tipo: "teorema", titulo: "Técnica 2: factorizar y cancelar", html: "<p>Cuando numerador y denominador comparten un factor, se factoriza y se cancela antes de tomar el límite. En sucesiones suele aparecer al comparar polinomios que tienen una raíz común.</p><p><b>Ejemplo corto.</b> Para $n\\ge 2$,</p>$$\\frac{n^2-n}{n^2-1}=\\frac{n(n-1)}{(n-1)(n+1)}=\\frac{n}{n+1}\\longrightarrow 1.$$<p>La cancelación es válida porque $n-1\\neq 0$ cuando $n\\ge 2$. Conviene decirlo: no se puede cancelar un factor que podría ser cero.</p>" },
      { tipo: "teorema", titulo: "Técnica 3: amplificar por el conjugado", html: "<p>Para expresiones con diferencia de raíces, como $\\sqrt{A_n}-\\sqrt{B_n}$, se multiplica y divide por el conjugado $\\sqrt{A_n}+\\sqrt{B_n}$:</p>$$\\sqrt{A_n}-\\sqrt{B_n}=\\frac{A_n-B_n}{\\sqrt{A_n}+\\sqrt{B_n}}.$$<p>Esto convierte la diferencia en un cociente donde la raíz quedó en el denominador. Después se divide por la potencia adecuada de $n$.</p><p><b>Ejemplo corto.</b> $$\\sqrt{n^2+1}-n=\\frac{(n^2+1)-n^2}{\\sqrt{n^2+1}+n}=\\frac{1}{\\sqrt{n^2+1}+n}\\longrightarrow 0.$$</p>" },
      { tipo: "teorema", titulo: "Técnica 4: usar |aₙ| → 0", html: "<p>Si $\\displaystyle\\lim_{n\\to\\infty}|a_n|=0$, entonces $\\displaystyle\\lim_{n\\to\\infty}a_n=0$.</p><p><b>Demostración.</b> Observa que $|a_n-0|=|a_n|$. Si $|a_n|\\to 0$, entonces para todo $\\varepsilon>0$ existe $N$ tal que, si $n>N$, $|a_n|<\\varepsilon$. Es exactamente la definición de $a_n\\to 0$. $\\blacksquare$</p><p><b>Ejemplo corto.</b> $$\\left|\\frac{(-1)^n}{n}\\right|=\\frac{1}{n}\\longrightarrow 0\\quad\\Longrightarrow\\quad\\frac{(-1)^n}{n}\\longrightarrow 0.$$</p><p><b>Cuidado:</b> el resultado es específico para límite $0$. De $|a_n|\\to 3$ no se sigue que $a_n\\to 3$; por ejemplo, $a_n=3(-1)^n$ cumple $|a_n|=3$ pero no converge.</p>" },
      { tipo: "teorema", titulo: "Técnica 5: acotar y usar el sándwich", html: "<p>Si se puede demostrar que</p>$$0\\le |b_n|\\le c_n\\quad\\text{para }n\\text{ grande,}$$<p>y además $c_n\\to 0$, entonces $b_n\\to 0$ por el teorema del sándwich. Esta técnica es especialmente útil cuando la expresión tiene muchos términos o factores.</p><p><b>Ejemplo corto.</b> Para $n\\ge 1$,</p>$$0<\\frac{n!}{n^n}=\\frac{1}{n}\\cdot\\frac{2}{n}\\cdot\\frac{3}{n}\\cdots\\frac{n}{n}\\le\\frac{1}{n},$$<p>porque cada factor $\\frac{k}{n}\\le 1$. Como $\\frac{1}{n}\\to 0$, se concluye que $\\frac{n!}{n^n}\\to 0$.</p>" },
      { tipo: "tabla", titulo: "Límites de referencia para combinar", headers: ["Expresión", "Límite", "Comentario"], rows: [["$c$", "$c$", "Sucesión constante"], ["$\\frac{1}{n^p}$, $p>0$", "$0$", "Base de casi todas las técnicas"], ["$x^n$, $|x|<1$", "$0$", "Decaimiento geométrico"], ["$\\sqrt[n]{n}$", "$1$", "Aparece en la Guía 10"], ["$\\sqrt[n]{p}$, $p>0$", "$1$", "Se prueba con Bernoulli y sándwich"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> primero mira la forma de la expresión. ¿Es un cociente de polinomios? Divide por la mayor potencia. ¿Hay una resta de raíces? Multiplica por el conjugado. ¿Hay un factor que oscila acotado? Sepáralo y usa que $1/n\\to 0$. ¿Hay muchos términos o productos? Acota por algo simple que también tienda a cero. Si nada funciona, vuelve a la definición o busca un sándwich.</div>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "√(n²+1) − n se acerca a 0", terminos: [0.4142135624, 0.2360679775, 0.1622776602, 0.1231056256, 0.0990195136, 0.0827625303, 0.0710678119, 0.0622577483, 0.0553851381, 0.0498756211, 0.0453610172, 0.0416305603], limite: 0, label: "aₙ = √(n²+1) − n", ylabel: "aₙ" } },
      { tipo: "nota", titulo: "La técnica aparece en evaluaciones (I6 2025)", html: "<p>En la Interrogación 6 de 2025 se pidió calcular $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sqrt[3]{n^2+1}}{n+1}$ amplificando por $1/n$, y $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+5n+6}-n)$ amplificando por el conjugado. Son exactamente las técnicas 1 y 3 de esta sección. La pauta de corrección asignaba puntaje explícito a <b>elegir</b> la amplificación correcta, no solo al resultado final.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Raíz cuadrada en el numerador",
        enunciado: "<p>Calcule</p>$$\\lim_{n\\to\\infty}\\frac{\\sqrt{2n^2+1}}{3n-5}.$$",
        concepto: "Se divide numerador y denominador por $n$. Al entrar $n$ en la raíz, se usa $\\sqrt{n^2}=n$ porque $n>0$.",
        desarrollo: [
          "<b>Paso 1.</b> Dividimos por $n$: $$\\frac{\\sqrt{2n^2+1}}{3n-5}=\\frac{\\frac{1}{n}\\sqrt{2n^2+1}}{\\frac{1}{n}(3n-5)}.$$",
          "<b>Paso 2.</b> Para $n>0$, $\\frac{1}{n}\\sqrt{2n^2+1}=\\sqrt{\\frac{2n^2+1}{n^2}}=\\sqrt{2+\\frac{1}{n^2}}$.",
          "<b>Paso 3.</b> El denominador queda $3-\\frac{5}{n}$.",
          "<b>Paso 4.</b> Entonces $$\\frac{\\sqrt{2n^2+1}}{3n-5}=\\frac{\\sqrt{2+\\frac{1}{n^2}}}{3-\\frac{5}{n}}\\longrightarrow\\frac{\\sqrt{2+0}}{3-0}=\\frac{\\sqrt2}{3}.$$"
        ],
        respuesta: "$\\displaystyle\\frac{\\sqrt2}{3}$."
      },
      {
        titulo: "Diferencia de raíces: el conjugado",
        enunciado: "<p>Calcule</p>$$\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+5n+6}-n\\right).$$",
        concepto: "Se amplifica por el conjugado $\\sqrt{n^2+5n+6}+n$ para eliminar la indeterminación y luego se divide por $n$.",
        desarrollo: [
          "<b>Paso 1.</b> Multiplicamos y dividimos por el conjugado: $$\\sqrt{n^2+5n+6}-n=\\frac{(n^2+5n+6)-n^2}{\\sqrt{n^2+5n+6}+n}=\\frac{5n+6}{\\sqrt{n^2+5n+6}+n}.$$",
          "<b>Paso 2.</b> Dividimos numerador y denominador por $n$: $$\\frac{5+\\frac{6}{n}}{\\frac{1}{n}\\sqrt{n^2+5n+6}+1}.$$",
          "<b>Paso 3.</b> Para $n>0$, $\\frac{1}{n}\\sqrt{n^2+5n+6}=\\sqrt{1+\\frac{5}{n}+\\frac{6}{n^2}}$.",
          "<b>Paso 4.</b> Por lo tanto, el límite es $$\\frac{5+0}{\\sqrt{1+0+0}+1}=\\frac{5}{2}.$$"
        ],
        respuesta: "$\\displaystyle\\frac{5}{2}$.",
        grafico: { tipo: "sucesion", titulo: "La diferencia de raíces tiende a 2,5", terminos: [2.4641016151, 2.472135955, 2.4772255751, 2.4807406984, 2.4833147735, 2.4852813742, 2.4868329805, 2.4880884817, 2.4891252931, 2.49], limite: 2.5, label: "aₙ = √(n²+5n+6) − n", ylabel: "aₙ" }
      },
      {
        titulo: "Factorizar antes de calcular",
        enunciado: "<p>Calcule</p>$$\\lim_{n\\to\\infty}\\frac{n^2-n}{n^2-1}.$$",
        concepto: "Se factoriza numerador y denominador para cancelar el factor común $n-1$. La cancelación es válida para $n\\ge 2$.",
        desarrollo: [
          "<b>Paso 1.</b> Factorizamos: $n^2-n=n(n-1)$ y $n^2-1=(n-1)(n+1)$.",
          "<b>Paso 2.</b> Para $n\\ge 2$, $n-1\\neq 0$, así que podemos cancelar: $$\\frac{n(n-1)}{(n-1)(n+1)}=\\frac{n}{n+1}.$$",
          "<b>Paso 3.</b> Dividimos por $n$: $\\frac{n}{n+1}=\\frac{1}{1+\\frac{1}{n}}\\to\\frac{1}{1+0}=1$.",
          "<b>Paso 4.</b> Por lo tanto, el límite es $1$."
        ],
        respuesta: "$1$."
      }
    ],
    ejercicios: [
      {
        titulo: "Cociente cuadrático",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{3n^2-2n+1}{n^2+4n}$.</p>",
        concepto: "Técnica 1: dividir por la mayor potencia del denominador, $n^2$.",
        pista: "Divide cada término por $n^2$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\frac{3n^2-2n+1}{n^2+4n}=\\frac{3-\\frac{2}{n}+\\frac{1}{n^2}}{1+\\frac{4}{n}}.$$",
          "<b>Paso 2.</b> Los términos con $1/n$ y $1/n^2$ tienden a $0$.",
          "<b>Paso 3.</b> El límite es $\\frac{3-0+0}{1+0}=3$."
        ],
        respuesta: "$3$."
      },
      {
        titulo: "Factor común",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+2n}{n^2-n}$.</p>",
        concepto: "Técnica 2: factorizar y cancelar el factor común $n$.",
        pista: "Escribe $n^2+2n=n(n+2)$ y $n^2-n=n(n-1)$.",
        desarrollo: [
          "<b>Paso 1.</b> Para $n\\ge 2$, $$\\frac{n^2+2n}{n^2-n}=\\frac{n(n+2)}{n(n-1)}=\\frac{n+2}{n-1}.$$",
          "<b>Paso 2.</b> Dividimos por $n$: $\\frac{1+\\frac{2}{n}}{1-\\frac{1}{n}}$.",
          "<b>Paso 3.</b> El límite es $\\frac{1+0}{1-0}=1$."
        ],
        respuesta: "$1$."
      },
      {
        titulo: "Conjugado con 5n + 6",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{n^2+5n+6}-n\\right)$.</p>",
        concepto: "Técnica 3: amplificar por el conjugado y luego dividir por $n$.",
        pista: "El conjugado es $\\sqrt{n^2+5n+6}+n$. Al multiplicar, usa $(a-b)(a+b)=a^2-b^2$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\sqrt{n^2+5n+6}-n=\\frac{5n+6}{\\sqrt{n^2+5n+6}+n}.$$",
          "<b>Paso 2.</b> Dividimos por $n$: $$\\frac{5+\\frac{6}{n}}{\\sqrt{1+\\frac{5}{n}+\\frac{6}{n^2}}+1}.$$",
          "<b>Paso 3.</b> Los términos con $1/n$ tienden a $0$, así que el límite es $\\frac{5}{2}$."
        ],
        respuesta: "$\\displaystyle\\frac{5}{2}$."
      },
      {
        titulo: "Conjugado con coeficiente 4",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{4n^2+3n}-2n\\right)$.</p>",
        concepto: "Técnica 3: conjugado. Hay que cuidar el factor $2n$ al calcular $a^2-b^2$.",
        pista: "Multiplica por $\\frac{\\sqrt{4n^2+3n}+2n}{\\sqrt{4n^2+3n}+2n}$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\sqrt{4n^2+3n}-2n=\\frac{(4n^2+3n)-4n^2}{\\sqrt{4n^2+3n}+2n}=\\frac{3n}{\\sqrt{4n^2+3n}+2n}.$$",
          "<b>Paso 2.</b> Dividimos por $n$: $$\\frac{3}{\\sqrt{4+\\frac{3}{n}}+2}.$$",
          "<b>Paso 3.</b> El límite es $\\frac{3}{\\sqrt4+2}=\\frac{3}{4}$."
        ],
        respuesta: "$\\displaystyle\\frac{3}{4}$."
      },
      {
        titulo: "Factorial acotado",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\frac{n!}{n^n}=0$.</p>",
        concepto: "Técnica 5: acotar por una sucesión que tiende a cero y usar el teorema del sándwich.",
        pista: "Escribe $\\frac{n!}{n^n}=\\frac{1}{n}\\cdot\\frac{2}{n}\\cdot\\frac{3}{n}\\cdots\\frac{n}{n}$ y observa que cada factor es menor o igual que $1$.",
        desarrollo: [
          "<b>Paso 1.</b> Para $n\\ge 1$, $$\\frac{n!}{n^n}=\\frac{1\\cdot 2\\cdot 3\\cdots n}{n\\cdot n\\cdot n\\cdots n}=\\frac{1}{n}\\cdot\\frac{2}{n}\\cdot\\frac{3}{n}\\cdots\\frac{n}{n}.$$",
          "<b>Paso 2.</b> Cada factor $\\frac{k}{n}$ con $1\\le k\\le n$ cumple $0<\\frac{k}{n}\\le 1$. Por lo tanto, $$0<\\frac{n!}{n^n}\\le\\frac{1}{n}\\cdot 1\\cdot 1\\cdots 1=\\frac{1}{n}.$$",
          "<b>Paso 3.</b> Como $\\frac{1}{n}\\to 0$, el teorema del sándwich implica que $\\frac{n!}{n^n}\\to 0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n!}{n^n}=0$."
      }
    ],
    erroresComunes: [
      "Separar una raíz de una suma: $\\sqrt{a+b}\\neq\\sqrt a+\\sqrt b$. En particular, $\\sqrt{n^2+1}\\neq n+1$.",
      "Al dividir por $n$ dentro de una raíz, olvidar que $\\frac{1}{n}\\sqrt{A}=\\sqrt{A/n^2}$ para $n>0$.",
      "Equivocarse en el signo del conjugado: se multiplica por $\\sqrt A+\\sqrt B$, no por $\\sqrt A-\\sqrt B$.",
      "Usar $|a_n|\\to L$ para concluir $a_n\\to L$ cuando $L\\neq 0$. El teorema solo es válido para $L=0$.",
      "Acotar por una expresión que no tiende a cero, o acotar solo algunos términos y perder el control del resto."
    ],
    checklist: [
      "Reconozco de inmediato si un cociente de polinomios requiere dividir por la mayor potencia.",
      "Sé factorizar y cancelar factores comunes, indicando por qué el factor no es cero.",
      "Sé amplificar por el conjugado en diferencias con raíces cuadradas.",
      "Puedo usar $|a_n|\\to 0$ para concluir $a_n\\to 0$, y sé cuándo no se aplica.",
      "Sé construir una cota superior simple y aplicar el teorema del sándwich.",
      "Tengo memorizados los límites de referencia $1/n^p\\to 0$ y $x^n\\to 0$ para $|x|<1$."
    ],
    autoevaluacion: [
      { pregunta: "¿Cuál es $\\displaystyle\\lim_{n\\to\\infty}\\frac{5n^2-3}{2n^2+n}$?", opciones: [ "$\\frac52$", "$0$", "$\\frac{5}{2n}$", "No existe" ], correcta: 0, explicacion: "Dividiendo por $n^2$ queda $\\frac{5-3/n^2}{2+1/n}\\to\\frac52$." },
      { pregunta: "Para calcular $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+3n}-n)$, la técnica más directa es:", opciones: [ "Factorizar $n$ en el numerador.", "Amplificar por el conjugado $\\sqrt{n^2+3n}+n$.", "Usar que $\\sqrt{n^2+3n}=n+3$.", "Aplicar la regla del cociente directamente." ], correcta: 1, explicacion: "La diferencia de raíces se resuelve multiplicando y dividiendo por el conjugado, lo que permite cancelar $n^2$." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}(\\sqrt{n^2+n}-n)$ es:", opciones: [ "$0$", "$1$", "$\\infty$", "$\\frac12$" ], correcta: 3, explicacion: "Al multiplicar por el conjugado queda $\\frac{n}{\\sqrt{n^2+n}+n}=\\frac{1}{\\sqrt{1+1/n}+1}\\to\\frac12$." },
      { pregunta: "Si $\\displaystyle\\lim_{n\\to\\infty}|a_n|=0$, entonces:", opciones: [ "$a_n\\to 0$.", "$a_n$ puede no converger.", "$a_n\\to 1$.", "$a_n$ es creciente." ], correcta: 0, explicacion: "La distancia al cero es $|a_n|$, que tiende a cero. Por definición, $a_n\\to 0$." },
      { pregunta: "¿Cuál es $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2-n}{n^2-1}$?", opciones: [ "$0$", "$-1$", "$1$", "$\\infty$" ], correcta: 2, explicacion: "Factorizando, $\\frac{n(n-1)}{(n-1)(n+1)}=\\frac{n}{n+1}\\to 1$." },
      { pregunta: "Para demostrar que $\\frac{n!}{n^n}\\to 0$, la cota más útil es:", opciones: [ "$\\frac{n!}{n^n}\\ge\\frac{1}{n}$", "$\\frac{n!}{n^n}\\le n$", "$\\frac{n!}{n^n}=n!$", "$0<\\frac{n!}{n^n}\\le\\frac{1}{n}$" ], correcta: 3, explicacion: "Cada factor $k/n$ es a lo más $1$, así que el producto es a lo más $1/n$. Como $1/n\\to 0$, se concluye por sándwich." }
    ],
    resumen: [
      "Cada forma algebraica sugiere una técnica: cocientes de polinomios se dividen por la mayor potencia, diferencias de raíces se conjugan y factores comunes se cancelan.",
      "El teorema $|a_n|\\to 0\\Rightarrow a_n\\to 0$ y el sándwich permiten controlar oscilaciones y expresiones con factoriales o sumas.",
      "Antes de calcular conviene identificar la forma de la expresión y transformarla hasta que aparezcan límites de referencia como $1/n^p\\to 0$."
    ],
    referencias: [
      { titulo: "Clase 24A — Cálculo de límites (PDF)", ruta: "recursos/clases/clase-24a.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" },
      { titulo: "Interrogación 6 MAT1107 2025 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin6-mat1107.pdf" },
      { titulo: "Precálculo de Stewart (PDF)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
