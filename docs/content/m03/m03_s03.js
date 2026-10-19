/* Módulo 3 · Sección 3 — Funciones racionales y asíntotas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s03", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 15,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Funciones racionales y asíntotas",
    objetivo: "Determinar el dominio de una función racional, encontrar sus asíntotas verticales, horizontales u oblicuas, y esbozar su gráfica usando cortes con los ejes y signos.",
    conexion: "Ya sabemos encontrar los ceros de un polinomio y dividir polinomios. Una función racional es un cuociente de polinomios, así que sus ceros vienen del numerador y sus problemas de dominio vienen del denominador.",
    fuente: "Clase 12 · Apuntes 13 y 14 · Stewart §3.7 · I4 2024 e I4 2025",
    prerrequisitos: ["Factorización de polinomios", "Ceros y multiplicidad", "División de polinomios", "Tabla de signos"],
    teoria: [
      { tipo: "texto", html: "<p>Las funciones racionales modelan situaciones de proporción inversa, concentración, costo promedio y velocidad. Su gráfica puede tener rectas a las que la curva se acerca indefinidamente: las <b>asíntotas</b>. A diferencia de un polinomio, una función racional puede “explotar” cerca de ciertos valores de $x$ o estabilizarse hacia un valor cuando $x$ se hace muy grande.</p>" },
      { tipo: "definicion", titulo: "Función racional y dominio", html: "<p>Una <b>función racional</b> es de la forma</p>$$f(x)=\\frac{P(x)}{Q(x)},$$<p>donde $P$ y $Q$ son polinomios y $Q(x)$ no es el polinomio nulo. Su dominio es</p>$$\\operatorname{Dom}(f)=\\R\\setminus\\{x\\in\\R:Q(x)=0\\}.$$<p>Es decir, se excluyen todos los valores que anulan el denominador.</p>" },
      { tipo: "definicion", titulo: "Asíntota vertical", html: "<p>La recta $x=a$ es una <b>asíntota vertical</b> de $f$ si $f(x)\\to+\\infty$ o $f(x)\\to-\\infty$ cuando $x$ se acerca a $a$ por la izquierda o por la derecha. En una función racional, los candidatos son los ceros del denominador que <b>no se cancelan</b> con el numerador.</p><p>Si un factor se cancela, en ese valor hay un <b>hueco</b> (punto ausente), no una asíntota vertical.</p>" },
      { tipo: "teorema", titulo: "Asíntotas de una función racional", html: "<p>Sea $f(x)=\\dfrac{a_nx^n+\\cdots+a_0}{b_mx^m+\\cdots+b_0}$, con $a_n\\neq0$ y $b_m\\neq0$. Después de simplificar factores comunes:</p><table style='width:100%;border-collapse:collapse;margin-top:8px'><tr><th style='text-align:left;padding:6px'>Comparación de grados</th><th style='text-align:left;padding:6px'>Asíntota horizontal</th></tr><tr><td style='padding:6px'>$n<m$</td><td style='padding:6px'>$y=0$</td></tr><tr><td style='padding:6px'>$n=m$</td><td style='padding:6px'>$y=\\dfrac{a_n}{b_m}$</td></tr><tr><td style='padding:6px'>$n>m$</td><td style='padding:6px'>No hay asíntota horizontal</td></tr></table><p>Las asíntotas verticales se buscan en los ceros del denominador que no se cancelan.</p>" },
      { tipo: "nota", titulo: "Asíntota oblicua (Stewart §3.7)", html: "<p>Si el grado del numerador es exactamente uno más que el grado del denominador ($n=m+1$), la división de polinomios permite escribir</p>$$f(x)=px+q+\\frac{R(x)}{Q(x)},$$<p>donde el cuociente $px+q$ es una recta. Esa recta es una <b>asíntota oblicua</b>: la curva se le acerca cuando $x\\to\\pm\\infty$. Por ejemplo, $\\dfrac{x^2+1}{x-1}=x+1+\\dfrac{2}{x-1}$ tiene asíntota oblicua $y=x+1$.</p>" },
      { tipo: "texto", html: "<p><b>Receta para graficar una función racional.</b> La clase 12 propone cinco pasos:</p><ol><li><b>Factorizar</b> numerador y denominador.</li><li><b>Intersecciones:</b> ceros del numerador para el eje $x$; evaluar en $x=0$ para el eje $y$ (si $0$ está en el dominio).</li><li><b>Asíntotas verticales:</b> ceros del denominador no cancelados; estudiar el signo a cada lado con valores de prueba.</li><li><b>Asíntota horizontal u oblicua:</b> comparar grados y, si corresponde, dividir.</li><li><b>Trazar:</b> ubicar puntos, asíntotas y signos, y unir las ramas sin cruzar las asíntotas verticales.</li></ol>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el numerador decide <i>dónde la curva corta el eje horizontal</i>; el denominador decide <i>dónde la función no existe y dónde aparecen las murallas verticales</i>; los grados deciden <i>hacia qué altura se estabiliza la curva</i> cuando miramos muy a la derecha o muy a la izquierda.</div>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "r(x) = (x² − 3x − 4)/(2x² + 4x): asíntotas x = −2, x = 0 e y = 1/2", funciones: [ { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: -9, hasta: -2.08, label: "r(x)", color: "#1e5eff" }, { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: -1.92, hasta: -0.08, label: "", color: "#1e5eff" }, { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: 0.08, hasta: 9, label: "", color: "#1e5eff" } ], series: [ { x: [-1, 4], y: [0, 0], label: "cortes con el eje x", mode: "markers", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: -2 }, { tipo: "vertical", x: 0 }, { tipo: "horizontal", y: 0.5 } ], xlabel: "x", ylabel: "r(x)", rangeX: [-9, 9], rangeY: [-8, 8] } },
      { tipo: "nota", titulo: "Dónde aparece en las evaluaciones", html: "<p>La I4 de 2024 pide analizar $r(x)=\\dfrac{5x+20}{x^2+10x+25}=\\dfrac{5(x+4)}{(x+5)^2}$: como el denominador tiene la raíz $x=-5$ y el numerador no, hay asíntota vertical en $x=-5$; como el grado del denominador es mayor, la asíntota horizontal es $y=0$. La I4 de 2025 pide algo similar con $\\dfrac{x^2-3x-4}{2x^2+4x}$ y además pregunta por inyectividad usando el test de la recta horizontal.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Dominio, asíntotas y recorrido de una hipérbola trasladada",
        enunciado: "<p>Considere $r(x)=\\dfrac{3x+5}{x+2}$. Determine su dominio, sus asíntotas, los cortes con los ejes y su recorrido. Esboce la gráfica.</p>",
        concepto: "Cuando el grado del numerador y del denominador son iguales, la asíntota horizontal es el cuociente de los coeficientes principales. La división también permite reescribir la función como una traslación de $1/x$.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> El denominador se anula en $x=-2$, así que $$\\operatorname{Dom}(r)=\\R\\setminus\\{-2\\}.$$",
          "<b>Paso 2. Asíntota vertical.</b> Cerca de $x=-2$ el numerador vale $3(-2)+5=-1\\neq0$, así que la recta $x=-2$ es asíntota vertical.",
          "<b>Paso 3. Asíntota horizontal.</b> Numerador y denominador tienen grado $1$; el cuociente de los coeficientes principales es $\\tfrac31=3$. Por lo tanto, $y=3$ es asíntota horizontal.",
          "<b>Paso 4. Reescribir para entender la forma.</b> Dividimos: $$\\frac{3x+5}{x+2}=3-\\frac{1}{x+2}.$$ Esto muestra que la gráfica es la hipérbola $y=-\\tfrac1x$ trasladada $2$ unidades a la izquierda y $3$ hacia arriba.",
          "<b>Paso 5. Cortes con los ejes.</b> Con el eje $x$: $3x+5=0$, luego $x=-\\tfrac53$. Con el eje $y$: $r(0)=\\tfrac52$.",
          "<b>Paso 6. Recorrido.</b> Como $\\tfrac{1}{x+2}$ toma todos los valores reales distintos de $0$, la expresión $3-\\tfrac{1}{x+2}$ toma todos los valores reales distintos de $3$. Así, $$\\operatorname{Rec}(r)=\\R\\setminus\\{3\\}.$$"
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2\\}$; asíntota vertical $x=-2$; asíntota horizontal $y=3$; cortes $(-\\tfrac53,0)$ y $(0,\\tfrac52)$; recorrido $\\R\\setminus\\{3\\}$.",
        grafico: { tipo: "plot2d", titulo: "r(x) = (3x + 5)/(x + 2)", funciones: [ { f: function (x) { return (3 * x + 5) / (x + 2); }, desde: -9, hasta: -2.08, label: "r(x)", color: "#1e5eff" }, { f: function (x) { return (3 * x + 5) / (x + 2); }, desde: -1.92, hasta: 7, label: "", color: "#1e5eff" } ], series: [ { x: [-1.6667, 0], y: [0, 2.5], label: "cortes", mode: "markers", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: -2 }, { tipo: "horizontal", y: 3 } ], xlabel: "x", ylabel: "r(x)", rangeX: [-9, 7], rangeY: [-6, 10] }
      },
      {
        titulo: "Grados iguales y dos asíntotas verticales",
        enunciado: "<p>Analice $r(x)=\\dfrac{3x^2-2x-1}{2x^2+3x-2}$: factorice, determine dominio, asíntotas y cortes con los ejes.</p>",
        concepto: "Factorizar numerador y denominador permite identificar ceros, asíntotas verticales y posibles cancelaciones. La comparación de grados entrega la asíntota horizontal.",
        desarrollo: [
          "<b>Paso 1. Factorizar el numerador.</b> Buscamos dos números que multiplicados den $3\\cdot(-1)=-3$ y sumados den $-2$: son $-3$ y $1$. Así, $$3x^2-2x-1=(3x+1)(x-1).$$",
          "<b>Paso 2. Factorizar el denominador.</b> $$2x^2+3x-2=(2x-1)(x+2).$$ Verificación: $2x^2+4x-x-2=2x^2+3x-2$.",
          "<b>Paso 3. Dominio y asíntotas verticales.</b> El denominador se anula en $x=\\tfrac12$ y $x=-2$. Ninguno de esos valores anula al numerador, así que no hay cancelaciones. Por lo tanto, $$\\operatorname{Dom}(r)=\\R\\setminus\\left\\{\\tfrac12,-2\\right\\},$$ y las asíntotas verticales son $x=\\tfrac12$ y $x=-2$.",
          "<b>Paso 4. Asíntota horizontal.</b> Ambos polinomios tienen grado $2$; el cuociente de los coeficientes principales es $\\tfrac32$. Por lo tanto, $y=\\tfrac32$.",
          "<b>Paso 5. Cortes con los ejes.</b> Con el eje $x$: $(3x+1)(x-1)=0$, luego $x=-\\tfrac13$ y $x=1$. Con el eje $y$: $r(0)=\\dfrac{-1}{-2}=\\tfrac12$.",
          "<b>Paso 6. Forma de la gráfica.</b> Hay tres regiones separadas por las asíntotas verticales: $(-\\infty,-2)$, $(-2,\\tfrac12)$ y $(\\tfrac12,\\infty)$. En cada una se estudia el signo con un valor de prueba y se dibuja la rama correspondiente."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2,\\tfrac12\\}$; asíntotas verticales $x=-2$ y $x=\\tfrac12$; asíntota horizontal $y=\\tfrac32$; cortes $(-\\tfrac13,0)$, $(1,0)$ y $(0,\\tfrac12)$.",
        grafico: { tipo: "plot2d", titulo: "r(x) = (3x² − 2x − 1)/(2x² + 3x − 2)", funciones: [ { f: function (x) { return (3 * x * x - 2 * x - 1) / (2 * x * x + 3 * x - 2); }, desde: -9, hasta: -2.1, label: "r(x)", color: "#8e44ad" }, { f: function (x) { return (3 * x * x - 2 * x - 1) / (2 * x * x + 3 * x - 2); }, desde: -1.9, hasta: 0.4, label: "", color: "#8e44ad" }, { f: function (x) { return (3 * x * x - 2 * x - 1) / (2 * x * x + 3 * x - 2); }, desde: 0.6, hasta: 9, label: "", color: "#8e44ad" } ], series: [ { x: [-0.3333, 1, 0], y: [0, 0, 0.5], label: "puntos clave", mode: "markers", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: -2 }, { tipo: "vertical", x: 0.5 }, { tipo: "horizontal", y: 1.5 } ], xlabel: "x", ylabel: "r(x)", rangeX: [-9, 9], rangeY: [-8, 10] }
      },
      {
        titulo: "Análisis tipo I4: signos, asíntotas y no inyectividad",
        enunciado: "<p>Considere $r(x)=\\dfrac{x^2-3x-4}{2x^2+4x}$. Determine dominio, asíntotas, cortes con los ejes y signos. ¿Es inyectiva?</p>",
        concepto: "Factorizar permite reconocer los ceros del numerador y del denominador. La tabla de signos organiza la información y el test de la recta horizontal decide la inyectividad.",
        desarrollo: [
          "<b>Paso 1. Factorizar.</b> $$x^2-3x-4=(x-4)(x+1),\\qquad 2x^2+4x=2x(x+2).$$",
          "<b>Paso 2. Dominio y asíntotas verticales.</b> El denominador se anula en $x=0$ y $x=-2$; el numerador no se anula allí. Por lo tanto, $$\\operatorname{Dom}(r)=\\R\\setminus\\{-2,0\\},$$ con asíntotas verticales $x=-2$ y $x=0$.",
          "<b>Paso 3. Asíntota horizontal.</b> Los grados son iguales ($2$ y $2$), y el cuociente de coeficientes principales es $\\tfrac12$. Así, $y=\\tfrac12$.",
          "<b>Paso 4. Cortes.</b> Con el eje $x$: $x=4$ y $x=-1$. Con el eje $y$: no hay, porque $x=0$ no pertenece al dominio.",
          "<b>Paso 5. Tabla de signos.</b> Los puntos críticos son $-2,-1,0,4$. Evaluando un valor en cada intervalo se obtiene: positiva en $(-\\infty,-2)$, negativa en $(-2,-1)$, positiva en $(-1,0)$, negativa en $(0,4)$ y positiva en $(4,\\infty)$.",
          "<b>Paso 6. Inyectividad.</b> Buscamos dos entradas distintas con la misma salida. $r(1)=\\dfrac{1-3-4}{2+4}=\\dfrac{-6}{6}=-1$. También $r\\left(-\\dfrac43\\right)=\\dfrac{\\tfrac{16}{9}+4-4}{\\tfrac{32}{9}-\\tfrac{16}{3}}=\\dfrac{\\tfrac{16}{9}}{-\\tfrac{16}{9}}=-1$. Como $1\\neq-\\tfrac43$ y $r(1)=r\\left(-\\tfrac43\\right)$, la función no es inyectiva. El test de la recta horizontal lo confirma: la recta $y=-1$ corta la gráfica en esos dos puntos."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2,0\\}$; asíntotas $x=-2$, $x=0$ e $y=\\tfrac12$; cortes $(-1,0)$ y $(4,0)$; no es inyectiva.",
        grafico: { tipo: "plot2d", titulo: "r(x) = (x² − 3x − 4)/(2x² + 4x)", funciones: [ { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: -9, hasta: -2.08, label: "r(x)", color: "#00b894" }, { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: -1.92, hasta: -0.08, label: "", color: "#00b894" }, { f: function (x) { return (x * x - 3 * x - 4) / (2 * x * x + 4 * x); }, desde: 0.08, hasta: 9, label: "", color: "#00b894" } ], series: [ { x: [-1, 4], y: [0, 0], label: "raíces", mode: "markers", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: -2 }, { tipo: "vertical", x: 0 }, { tipo: "horizontal", y: 0.5 } ], xlabel: "x", ylabel: "r(x)", rangeX: [-9, 9], rangeY: [-8, 8] }
      }
    ],
    ejercicios: [
      {
        titulo: "Dominio y asíntotas básicas",
        dificultad: "basico",
        enunciado: "<p>Determine el dominio y las asíntotas verticales y horizontales de $f(x)=\\dfrac{x+1}{x^2-9}$.</p>",
        concepto: "El denominador factorizado revela el dominio y las asíntotas verticales; la comparación de grados entrega la asíntota horizontal.",
        pista: "Factorice $x^2-9=(x-3)(x+3)$ y compare grados.",
        desarrollo: [
          "El denominador se anula en $x=3$ y $x=-3$, así que $\\operatorname{Dom}(f)=\\R\\setminus\\{-3,3\\}$.",
          "Como el numerador no se anula en esos valores, hay asíntotas verticales $x=3$ y $x=-3$.",
          "El grado del numerador es $1$ y el del denominador es $2$; como $1<2$, la asíntota horizontal es $y=0$.",
          "Cortes: con el eje $x$, $x=-1$; con el eje $y$, $f(0)=\\dfrac{1}{-9}=-\\dfrac19$."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-3,3\\}$; asíntotas verticales $x=\\pm3$; asíntota horizontal $y=0$."
      },
      {
        titulo: "Un factor que se cancela produce un hueco",
        dificultad: "intermedio",
        enunciado: "<p>Analice $f(x)=\\dfrac{4x^2-1}{2x^2+3x-2}$. Factorice, determine dominio, asíntotas y el hueco si existe.</p>",
        concepto: "Antes de declarar asíntotas verticales hay que simplificar. Un cero común del numerador y del denominador produce un punto ausente, no una asíntota.",
        pista: "Factorice $4x^2-1=(2x-1)(2x+1)$ y el denominador como $(2x-1)(x+2)$.",
        desarrollo: [
          "Factorizamos: $$\\frac{4x^2-1}{2x^2+3x-2}=\\frac{(2x-1)(2x+1)}{(2x-1)(x+2)}.$$",
          "El dominio excluye los ceros del denominador original: $x=\\tfrac12$ y $x=-2$.",
          "Al simplificar para $x\\neq\\tfrac12$, queda $\\dfrac{2x+1}{x+2}$.",
          "En $x=-2$ queda una asíntota vertical, porque el factor $x+2$ no se cancela.",
          "En $x=\\tfrac12$ hay un hueco. Su altura es el valor de la expresión simplificada: $$y=\\frac{2\\cdot\\tfrac12+1}{\\tfrac12+2}=\\frac{2}{\\tfrac52}=\\frac45.$$",
          "La asíntota horizontal es $y=2$, pues los grados son iguales y el cuociente de coeficientes principales es $\\tfrac42=2$."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2,\\tfrac12\\}$; asíntota vertical $x=-2$; asíntota horizontal $y=2$; hueco en $\\left(\\tfrac12,\\tfrac45\\right)$.",
        grafico: { tipo: "plot2d", titulo: "f(x) = (4x² − 1)/(2x² + 3x − 2): asíntota x = −2 y hueco en (1/2, 4/5)", funciones: [ { f: function (x) { return (4 * x * x - 1) / (2 * x * x + 3 * x - 2); }, desde: -9, hasta: -2.1, label: "f(x)", color: "#1e5eff" }, { f: function (x) { return (4 * x * x - 1) / (2 * x * x + 3 * x - 2); }, desde: -1.9, hasta: 0.42, label: "", color: "#1e5eff" }, { f: function (x) { return (4 * x * x - 1) / (2 * x * x + 3 * x - 2); }, desde: 0.58, hasta: 9, label: "", color: "#1e5eff" } ], puntosAbiertos: [ { x: 0.5, y: 0.8, label: "hueco", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: -2 }, { tipo: "horizontal", y: 2 } ], xlabel: "x", ylabel: "f(x)", rangeX: [-9, 9], rangeY: [-6, 8] }
      },
      {
        titulo: "Signos y cortes",
        dificultad: "intermedio",
        enunciado: "<p>Para $r(x)=\\dfrac{x-1}{x^2-4}$, determine dominio, asíntotas, cortes con los ejes y los intervalos donde $r(x)>0$.</p>",
        concepto: "Una tabla de signos con los ceros del numerador y del denominador describe completamente el signo de una función racional.",
        pista: "Los puntos críticos son $-2$, $1$ y $2$.",
        desarrollo: [
          "El denominador se factoriza como $(x-2)(x+2)$: dominio $\\R\\setminus\\{-2,2\\}$.",
          "Asíntotas verticales: $x=-2$ y $x=2$. Como el grado del denominador es mayor, la asíntota horizontal es $y=0$.",
          "Cortes: con el eje $x$, $x=1$; con el eje $y$, $r(0)=\\dfrac{-1}{-4}=\\tfrac14$.",
          "Signos: en $(-\\infty,-2)$ es negativa; en $(-2,1)$ es positiva; en $(1,2)$ es negativa; en $(2,\\infty)$ es positiva.",
          "Por lo tanto, $r(x)>0$ en $(-2,1)\\cup(2,\\infty)$."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2,2\\}$; asíntotas $x=\\pm2$ e $y=0$; cortes $(1,0)$ y $(0,\\tfrac14)$; positiva en $(-2,1)\\cup(2,\\infty)$."
      },
      {
        titulo: "Gráfica completa con dos asíntotas verticales",
        dificultad: "intermedio",
        enunciado: "<p>Analice $r(x)=\\dfrac{2x^2+7x-4}{x^2+x-2}$: factorice, determine dominio, asíntotas y cortes con los ejes.</p>",
        concepto: "Este es el ejemplo 3 de la clase 12. Se factoriza, se comparan grados y se ubican los cortes.",
        pista: "Factorice el numerador como $(2x-1)(x+4)$ y el denominador como $(x+2)(x-1)$.",
        desarrollo: [
          "Numerador: $2x^2+7x-4=(2x-1)(x+4)$.",
          "Denominador: $x^2+x-2=(x+2)(x-1)$.",
          "Dominio: $\\R\\setminus\\{-2,1\\}$; asíntotas verticales $x=-2$ y $x=1$.",
          "Grados iguales: asíntota horizontal $y=\\tfrac21=2$.",
          "Cortes con el eje $x$: $x=\\tfrac12$ y $x=-4$. Corte con el eje $y$: $r(0)=\\dfrac{-4}{-2}=2$.",
          "Con estos datos y una tabla de signos se dibujan las tres ramas de la gráfica."
        ],
        respuesta: "Dominio $\\R\\setminus\\{-2,1\\}$; asíntotas $x=-2$, $x=1$ e $y=2$; cortes $(-4,0)$, $(\\tfrac12,0)$ y $(0,2)$."
      },
      {
        titulo: "Asíntota oblicua",
        dificultad: "avanzado",
        enunciado: "<p>Determine las asíntotas de $f(x)=\\dfrac{x^2+1}{x-1}$. ¿Tiene asíntota horizontal? Justifique.</p>",
        concepto: "Cuando el grado del numerador es uno más que el del denominador, la división entrega una asíntota oblicua y no hay asíntota horizontal.",
        pista: "Divida $x^2+1$ por $x-1$ y escriba el resultado como cociente más resto sobre el divisor.",
        desarrollo: [
          "Dividimos: $x^2+1=(x-1)(x+1)+2$. Por lo tanto, $$f(x)=x+1+\\frac{2}{x-1}.$$",
          "El denominador se anula en $x=1$ y el numerador no, así que $x=1$ es asíntota vertical.",
          "Cuando $x\\to\\pm\\infty$, el término $\\dfrac{2}{x-1}\\to0$, de modo que la gráfica se acerca a la recta $y=x+1$. Esa es la asíntota oblicua.",
          "No hay asíntota horizontal: el grado del numerador ($2$) es mayor que el del denominador ($1$).",
          "Cortes: con el eje $y$, $f(0)=-1$; con el eje $x$ no hay, porque $x^2+1>0$ para todo $x$."
        ],
        respuesta: "Asíntota vertical $x=1$; asíntota oblicua $y=x+1$; no tiene asíntota horizontal."
      }
    ],
    erroresComunes: [
      "Cancelar factores antes de determinar el dominio y olvidar el valor excluido; eso borra el hueco.",
      "Declarar una asíntota vertical en un cero que se cancela con el numerador.",
      "Decir que hay asíntota horizontal cuando el grado del numerador es mayor que el del denominador.",
      "Confundir la asíntota horizontal con el corte con el eje $y$.",
      "Ubicar mal el signo de la función cerca de una asíntota vertical por no probar valores a ambos lados."
    ],
    checklist: [
      "Puedo escribir el dominio de una función racional excluyendo los ceros del denominador.",
      "Sé factorizar y detectar cancelaciones para distinguir asíntotas verticales de huecos.",
      "Puedo decidir la asíntota horizontal comparando los grados y los coeficientes principales.",
      "Sé reconocer cuándo hay asíntota oblicua y calcularla dividiendo.",
      "Puedo encontrar los cortes con los ejes y armar una tabla de signos.",
      "Sé esbozar las ramas de la gráfica sin cruzar las asíntotas verticales."
    ],
    autoevaluacion: [
      { pregunta: "La asíntota horizontal de $f(x)=\\dfrac{3x^2+1}{x^2-4}$ es:", opciones: ["$y=0$", "$y=3$", "$y=\\tfrac14$", "No tiene"], correcta: 1, explicacion: "Los grados son iguales ($2$ y $2$); el cuociente de coeficientes principales es $\\tfrac31=3$." },
      { pregunta: "Para $f(x)=\\dfrac{x+1}{x^2-1}$, las asíntotas verticales son:", opciones: ["$x=1$ y $x=-1$", "$x=1$ solamente", "$x=-1$ solamente", "No tiene"], correcta: 1, explicacion: "Al factorizar, $f(x)=\\dfrac{x+1}{(x-1)(x+1)}=\\dfrac{1}{x-1}$ para $x\\neq-1$. En $x=-1$ hay un hueco; la asíntota vertical es $x=1$." },
      { pregunta: "El dominio de $f(x)=\\dfrac{x-2}{x^2-5x+6}$ es:", opciones: ["$\\R\\setminus\\{2\\}$", "$\\R\\setminus\\{3\\}$", "$\\R\\setminus\\{2,3\\}$", "$\\R$"], correcta: 2, explicacion: "El denominador se factoriza como $(x-2)(x-3)$; se anula en $2$ y $3$, que se excluyen del dominio." },
      { pregunta: "Si el grado del numerador es menor que el del denominador, la asíntota horizontal es:", opciones: ["$y=0$", "$y=1$", "No existe", "La recta $y=x$"], correcta: 0, explicacion: "El cuociente de grados hace que la función tienda a $0$ cuando $x\\to\\pm\\infty$." },
      { pregunta: "La función $f(x)=\\dfrac{x^2+1}{x-1}$ tiene:", opciones: ["Solo asíntota horizontal", "Asíntota oblicua $y=x+1$", "Asíntota oblicua $y=x-1$", "Dos asíntotas horizontales"], correcta: 1, explicacion: "Al dividir, $f(x)=x+1+\\dfrac{2}{x-1}$; el término residual tiende a $0$, así que la asíntota es $y=x+1$." },
      { pregunta: "¿Cuál función tiene asíntota horizontal $y=\\tfrac12$?", opciones: ["$\\dfrac{x^2+3}{2x^2-1}$", "$\\dfrac{x^2+3}{x^2-1}$", "$\\dfrac{2x+1}{x^2+1}$", "$\\dfrac{x+1}{2x^2+1}$"], correcta: 0, explicacion: "En la primera, ambos grados son $2$ y el cuociente de coeficientes principales es $\\tfrac12$." }
    ],
    resumen: [
      "Una función racional es un cuociente de polinomios y su dominio excluye los ceros del denominador.",
      "Las asíntotas verticales nacen en los ceros del denominador que no se cancelan; una cancelación produce un hueco.",
      "La comparación de grados decide la asíntota horizontal, y si el numerador supera en un grado al denominador aparece una asíntota oblicua."
    ],
    referencias: [
      { titulo: "Clase 12 — Funciones racionales (PDF)", ruta: "recursos/clases/clase-12.pdf" },
      { titulo: "Apunte Clase 13 — Funciones racionales (PDF)", ruta: "recursos/apuntes/apunte-clase-13.pdf" },
      { titulo: "Apunte Clase 14 — Funciones racionales (PDF)", ruta: "recursos/apuntes/apunte-clase-14.pdf" },
      { titulo: "I4 2025 — Interrogación 4 con solución", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin4-mat1107.pdf" }
    ],
  });
})();
