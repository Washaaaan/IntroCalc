/* Módulo 3 · Sección 1 — Polinomios: grado, raíces y gráficas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s01", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 13,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Polinomios: grado, raíces y gráficas",
    objetivo: "Reconocer una función polinómica, determinar su grado y coeficiente principal, calcular sus ceros con su multiplicidad y esbozar su gráfica usando los cortes con los ejes y el comportamiento final.",
    conexion: "En la sección anterior estudiamos la función cuadrática y su parábola. Ahora ampliamos esa misma idea a polinomios de grado mayor, fijándonos en cómo se factorizan y en cómo se ve su gráfica.",
    fuente: "Clase 11 · Apunte 12 · Stewart §3.2 y §3.4 · Mickenberg Cap. 7",
    prerrequisitos: ["Factorización de polinomios", "Función cuadrática y vértice", "Signos de un producto", "Plano cartesiano"],
    teoria: [
      { tipo: "texto", html: "<p>Los polinomios son las funciones más sencillas después de las lineales: se construyen sumando potencias de $x$ multiplicadas por números. A pesar de su apariencia simple, aparecen en economía, física, ingeniería y en casi cualquier modelo que se pueda aproximar con curvas suaves. En esta sección aprenderemos a leer su <b>grado</b>, sus <b>raíces</b> y la forma de su <b>gráfica</b> sin necesidad de hacer una tabla con cientos de valores.</p>" },
      { tipo: "definicion", titulo: "Función polinómica", html: "<p>Una <b>función polinómica</b> es una función de la forma</p>$$P(x)=a_nx^n+a_{n-1}x^{n-1}+\\cdots+a_1x+a_0,$$<p>donde $a_n,a_{n-1},\\dots,a_1,a_0\\in\\R$ son los <b>coeficientes</b> y $a_n\\neq 0$. El número $n$ es el <b>grado</b> del polinomio, $a_n$ es el <b>coeficiente principal</b> y $a_0$ es el <b>término constante</b>. Toda función polinómica tiene dominio $\\R$.</p>" },
      { tipo: "tabla", titulo: "Los primeros grados y sus gráficas", headers: ["Grado", "Forma", "Gráfica"], rows: [["0", "$P(x)=a_0$", "Recta horizontal (constante)"], ["1", "$P(x)=a_1x+a_0$", "Recta inclinada"], ["2", "$P(x)=a_2x^2+a_1x+a_0$", "Parábola"], ["3 o más", "$P(x)=a_nx^n+\\cdots$", "Curva con a lo más $n$ cortes en el eje $x$"]] },
      { tipo: "nota", titulo: "Cómo leer el grado (Stewart §3.2)", html: "<p>El grado se lee después de ordenar el polinomio de mayor a menor potencia: es el exponente más alto que aparece con coeficiente distinto de cero. Por ejemplo, en $P(x)=7-2x^5+4x^2$ el grado es $5$, no $2$, y el coeficiente principal es $-2$. El término constante es $7$.</p>" },
      { tipo: "definicion", titulo: "Cero o raíz de un polinomio", html: "<p>Un número real $c$ es un <b>cero</b> (o <b>raíz</b>) de $P$ si</p>$$P(c)=0.$$<p>Geométricamente, $c$ es la coordenada $x$ del punto donde la gráfica de $P$ corta o toca al eje $x$. Las raíces de $P$ son exactamente las soluciones de la ecuación polinómica $P(x)=0$.</p>" },
      { tipo: "teorema", titulo: "Raíz y factor lineal", html: "<p>Sea $P$ un polinomio y $c\\in\\R$. Entonces</p>$$P(c)=0\\quad\\Longleftrightarrow\\quad (x-c)\\text{ es un factor de }P(x).$$<p>Es decir, si conocemos una raíz, podemos dividir para bajar el grado y encontrar las demás. Esta es la idea central que usaremos en la próxima sección con la división de polinomios.</p>" },
      { tipo: "teorema", titulo: "Comportamiento final", html: "<p>Para $P(x)=a_nx^n+\\cdots+a_0$ con $a_n\\neq 0$, los extremos de la gráfica dependen solo del grado $n$ y del signo de $a_n$:</p><ul><li>Si $n$ es par y $a_n>0$, ambos extremos suben: $P(x)\\to+\\infty$ cuando $x\\to\\pm\\infty$.</li><li>Si $n$ es par y $a_n<0$, ambos extremos bajan: $P(x)\\to-\\infty$ cuando $x\\to\\pm\\infty$.</li><li>Si $n$ es impar y $a_n>0$, baja por la izquierda y sube por la derecha.</li><li>Si $n$ es impar y $a_n<0$, sube por la izquierda y baja por la derecha.</li></ul>" },
      { tipo: "definicion", titulo: "Multiplicidad de una raíz", html: "<p>Si $(x-c)$ aparece exactamente $m$ veces en la factorización de $P$, decimos que $c$ es una raíz de <b>multiplicidad</b> $m$. La multiplicidad controla la forma local de la gráfica:</p><table style='width:100%;border-collapse:collapse;margin-top:8px'><tr><th style='text-align:left;padding:6px'>Multiplicidad</th><th style='text-align:left;padding:6px'>Comportamiento en $x=c$</th></tr><tr><td style='padding:6px'>$m=1$</td><td style='padding:6px'>Cruza el eje $x$ de forma transversal</td></tr><tr><td style='padding:6px'>$m$ par, $m>1$</td><td style='padding:6px'>Toca el eje $x$ y se devuelve</td></tr><tr><td style='padding:6px'>$m$ impar, $m>1$</td><td style='padding:6px'>Cruza el eje $x$, pero achatándose</td></tr></table>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el grado y el coeficiente principal deciden <i>hacia dónde se van</i> los extremos de la curva; las raíces deciden <i>dónde toca el eje horizontal</i>; y la multiplicidad decide si la curva <i>cruza</i> o solo <i>rebota</i> en ese punto.</div>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "P(x) = x³ − 2x² − 4x + 8 = (x − 2)²(x + 2)", funciones: [ { f: function (x) { return x * x * x - 2 * x * x - 4 * x + 8; }, desde: -3.2, hasta: 3.4, label: "P(x)", color: "#1e5eff" } ], series: [ { x: [-2, 2], y: [0, 0], label: "raíces", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "P(x)", rangeX: [-3.5, 3.7], rangeY: [-12, 14] } },
      { tipo: "nota", titulo: "Conexión con el libro (Mickenberg Cap. 7)", html: "<p>Mickenberg presenta los polinomios como expresiones algebraicas que se pueden sumar, multiplicar y factorizar. La factorización es la herramienta que traduce un problema de raíces en un problema de productos iguales a cero: si $P(x)=(x-r_1)(x-r_2)\\cdots$, entonces $P(x)=0$ cuando alguno de los factores es cero. Stewart, en §3.2, agrega la lectura gráfica: grado, coeficiente principal y multiplicidades permiten hacer un bosquejo razonable sin calculadora.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Análisis completo de un polinomio cúbico",
        enunciado: "<p>Considere $P(x)=x^3-2x^2-4x+8$. Determine su grado, su coeficiente principal, sus raíces con multiplicidad y los cortes con el eje $y$. Luego describa su comportamiento final y esboce la gráfica.</p>",
        concepto: "Usamos la definición de grado, la factorización por agrupación y el teorema que relaciona raíces con factores lineales. La multiplicidad se lee en los exponentes de los factores.",
        desarrollo: [
          "<b>Paso 1. Grado y coeficiente principal.</b> El término de mayor potencia es $x^3$, así que el grado es $3$ y el coeficiente principal es $1$. Como el grado es impar y el coeficiente principal es positivo, la gráfica baja por la izquierda y sube por la derecha.",
          "<b>Paso 2. Factorizar por agrupación.</b> Agrupamos los dos primeros y los dos últimos términos: $$x^3-2x^2-4x+8=x^2(x-2)-4(x-2).$$ Aquí usamos la propiedad distributiva para sacar el factor común $(x-2)$: $$P(x)=(x-2)(x^2-4).$$",
          "<b>Paso 3. Factorizar la diferencia de cuadrados.</b> Como $x^2-4=(x-2)(x+2)$, obtenemos $$P(x)=(x-2)^2(x+2).$$",
          "<b>Paso 4. Leer las raíces y su multiplicidad.</b> De $P(x)=0$ se obtiene $x=2$ (multiplicidad $2$) y $x=-2$ (multiplicidad $1$). En $x=2$ la gráfica toca el eje y se devuelve; en $x=-2$ lo cruza.",
          "<b>Paso 5. Corte con el eje $y$.</b> Evaluamos en $x=0$: $P(0)=8$. El punto es $(0,8)$.",
          "<b>Paso 6. Bosquejo.</b> Marcamos $(-2,0)$, $(2,0)$ y $(0,8)$. La curva viene desde $-\\infty$ por la izquierda, cruza en $-2$, sube hasta un máximo local entre $-2$ y $2$, baja y toca el eje en $2$, y luego sube hacia $+\\infty$."
        ],
        respuesta: "$P$ tiene grado $3$, coeficiente principal $1$, raíces $x=-2$ (simple) y $x=2$ (doble); corta el eje $y$ en $(0,8)$.",
        grafico: { tipo: "plot2d", titulo: "P(x) = (x − 2)²(x + 2)", funciones: [ { f: function (x) { return x * x * x - 2 * x * x - 4 * x + 8; }, desde: -3.2, hasta: 3.4, label: "P(x)", color: "#1e5eff" } ], series: [ { x: [-2, 2, 0], y: [0, 0, 8], label: "puntos clave", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "P(x)", rangeX: [-3.5, 3.7], rangeY: [-12, 14] }
      },
      {
        titulo: "Un polinomio de grado 4 con coeficiente principal negativo",
        enunciado: "<p>Analice $Q(x)=-2x^4-x^3+3x^2$: factorice, encuentre sus raíces con multiplicidad y determine el comportamiento final.</p>",
        concepto: "Aplicamos factor común y factorización de un trinomio cuadrático. El signo del coeficiente principal y la paridad del grado determinan los extremos de la gráfica.",
        desarrollo: [
          "<b>Paso 1. Sacar factor común.</b> Todos los términos tienen $x^2$: $$Q(x)=x^2(-2x^2-x+3)=-x^2(2x^2+x-3).$$",
          "<b>Paso 2. Factorizar el trinomio.</b> Buscamos dos números que multiplicados den $2\\cdot(-3)=-6$ y sumados den $1$: son $3$ y $-2$. Así, $$2x^2+x-3=(2x+3)(x-1).$$ Por lo tanto, $$Q(x)=-x^2(2x+3)(x-1).$$",
          "<b>Paso 3. Raíces y multiplicidades.</b> $Q(x)=0$ cuando $x=0$ (multiplicidad $2$), $x=-\\tfrac32$ (multiplicidad $1$) o $x=1$ (multiplicidad $1$).",
          "<b>Paso 4. Comportamiento local.</b> En $x=0$ la gráfica toca el eje y se devuelve (multiplicidad par). En $x=-\\tfrac32$ y en $x=1$ cruza el eje.",
          "<b>Paso 5. Comportamiento final.</b> El grado es $4$ (par) y el coeficiente principal es $-2$ (negativo), así que $Q(x)\\to-\\infty$ tanto cuando $x\\to-\\infty$ como cuando $x\\to+\\infty$.",
          "<b>Paso 6. Corte con el eje $y$.</b> $Q(0)=0$, que coincide con la raíz doble en el origen."
        ],
        respuesta: "$Q(x)=-x^2(2x+3)(x-1)$; raíces $0$ (doble), $-\\tfrac32$ y $1$; ambos extremos de la gráfica bajan hacia $-\\infty$.",
        grafico: { tipo: "plot2d", titulo: "Q(x) = −x²(2x + 3)(x − 1)", funciones: [ { f: function (x) { return -2 * x * x * x * x - x * x * x + 3 * x * x; }, desde: -2.4, hasta: 2.0, label: "Q(x)", color: "#8e44ad" } ], series: [ { x: [-1.5, 0, 1], y: [0, 0, 0], label: "raíces", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "Q(x)", rangeX: [-2.6, 2.2], rangeY: [-22, 6] }
      },
      {
        titulo: "Construir un polinomio desde sus raíces",
        enunciado: "<p>Encuentre un polinomio de grado $4$ cuyas únicas raíces sean $-1$ (simple), $2$ (doble) y $3$ (simple), y que además pase por el punto $(0,-24)$.</p>",
        concepto: "Usamos el teorema del factor al revés: cada raíz $c$ aporta un factor $(x-c)$, y la multiplicidad indica cuántas veces se repite. El punto adicional determina la constante multiplicativa.",
        desarrollo: [
          "<b>Paso 1. Escribir la forma factorizada.</b> Por el teorema del factor, $$P(x)=a(x+1)(x-2)^2(x-3),$$ donde $a$ es una constante distinta de cero. El grado es $1+2+1=4$.",
          "<b>Paso 2. Imponer el punto $(0,-24)$.</b> Evaluamos en $x=0$: $$P(0)=a(0+1)(0-2)^2(0-3)=a\\cdot 1\\cdot 4\\cdot(-3)=-12a.$$",
          "<b>Paso 3. Despejar $a$.</b> Como $P(0)=-24$, se tiene $-12a=-24$, es decir, $a=2$.",
          "<b>Paso 4. Escribir la respuesta.</b> $$P(x)=2(x+1)(x-2)^2(x-3).$$ Verificación: el grado es $4$, las raíces son las pedidas y $P(0)=2\\cdot1\\cdot4\\cdot(-3)=-24$."
        ],
        respuesta: "$P(x)=2(x+1)(x-2)^2(x-3)$."
      }
    ],
    ejercicios: [
      {
        titulo: "Grado y comportamiento final",
        dificultad: "basico",
        enunciado: "<p>Para $P(x)=3x^4-5x^3+2x-7$, indique el grado, el coeficiente principal, el término constante y el comportamiento final.</p>",
        concepto: "Lectura directa de la definición de polinomio y del teorema de comportamiento final.",
        pista: "Ordene mentalmente las potencias y mire solo la más alta para los extremos.",
        desarrollo: [
          "El término de mayor potencia es $3x^4$: el grado es $4$ y el coeficiente principal es $3$.",
          "El término constante es $-7$.",
          "Como el grado es par y el coeficiente principal es positivo, $P(x)\\to+\\infty$ cuando $x\\to-\\infty$ y también cuando $x\\to+\\infty$."
        ],
        respuesta: "Grado $4$; coeficiente principal $3$; término constante $-7$; ambos extremos suben a $+\\infty$."
      },
      {
        titulo: "Raíces y multiplicidades",
        dificultad: "basico",
        enunciado: "<p>Determine las raíces y su multiplicidad para $P(x)=x(x-3)(x+2)$. ¿En cuáles de ellas la gráfica cruza el eje $x$?</p>",
        concepto: "Un producto es cero cuando alguno de sus factores es cero; cada factor lineal aporta una raíz simple.",
        pista: "Iguale cada factor a cero.",
        desarrollo: [
          "$x=0$: factor $x$, multiplicidad $1$.",
          "$x=3$: factor $(x-3)$, multiplicidad $1$.",
          "$x=-2$: factor $(x+2)$, multiplicidad $1$.",
          "Como todas las multiplicidades son impares (en este caso $1$), la gráfica cruza el eje $x$ en las tres raíces."
        ],
        respuesta: "Raíces $0$, $3$ y $-2$, todas simples; la gráfica cruza el eje en las tres."
      },
      {
        titulo: "Factorizar por agrupación",
        dificultad: "intermedio",
        enunciado: "<p>Factorice completamente $P(x)=x^3-3x^2-4x+12$ y encuentre todas sus raíces.</p>",
        concepto: "Factorización por agrupación y diferencia de cuadrados.",
        pista: "Agrupe los dos primeros términos y los dos últimos; busque un factor común binomial.",
        desarrollo: [
          "Agrupamos: $P(x)=x^2(x-3)-4(x-3)$.",
          "Sacamos el factor común $(x-3)$: $P(x)=(x-3)(x^2-4)$.",
          "Factorizamos la diferencia de cuadrados: $x^2-4=(x-2)(x+2)$.",
          "Por lo tanto, $P(x)=(x-3)(x-2)(x+2)$.",
          "Las raíces son $x=3$, $x=2$ y $x=-2$, todas simples."
        ],
        respuesta: "$P(x)=(x-3)(x-2)(x+2)$; raíces $3$, $2$ y $-2$."
      },
      {
        titulo: "Lectura de una gráfica con multiplicidades",
        dificultad: "intermedio",
        enunciado: "<p>Considere $P(x)=-x^3(x-1)^2(x+2)$. Indique grado, coeficiente principal, raíces con multiplicidad y comportamiento final. ¿Qué ocurre en $x=1$?</p>",
        concepto: "La multiplicidad par produce un rebote; la impar produce un cruce. El grado total es la suma de las multiplicidades.",
        pista: "Sume los exponentes de todos los factores para obtener el grado.",
        desarrollo: [
          "El grado es $3+2+1=6$ y el coeficiente principal es $-1$.",
          "Raíces: $x=0$ con multiplicidad $3$ (cruza achatándose), $x=1$ con multiplicidad $2$ (toca y se devuelve) y $x=-2$ con multiplicidad $1$ (cruza).",
          "Como el grado es par y el coeficiente principal es negativo, $P(x)\\to-\\infty$ en ambos extremos.",
          "En $x=1$ la gráfica no cruza el eje: se acerca, lo toca y vuelve al mismo lado."
        ],
        respuesta: "Grado $6$, coeficiente principal $-1$; raíces $0$ (mult. $3$), $1$ (mult. $2$) y $-2$ (mult. $1$); ambos extremos hacia $-\\infty$; en $x=1$ la gráfica rebota."
      },
      {
        titulo: "Polinomio con raíces repetidas",
        dificultad: "avanzado",
        enunciado: "<p>Encuentre un polinomio de grado $4$ que tenga una raíz doble en $x=1$, una raíz doble en $x=-2$ y que cumpla $P(0)=4$.</p>",
        concepto: "Construcción de polinomios a partir de sus raíces y uso de una condición inicial para determinar la constante.",
        pista: "Escriba $P(x)=a(x-1)^2(x+2)^2$ y evalúe en $x=0$.",
        desarrollo: [
          "La forma general es $P(x)=a(x-1)^2(x+2)^2$, con $a\\neq0$.",
          "Evaluamos en $x=0$: $P(0)=a(-1)^2(2)^2=4a$.",
          "La condición $P(0)=4$ da $4a=4$, es decir, $a=1$.",
          "Por lo tanto, $P(x)=(x-1)^2(x+2)^2$.",
          "Verificación: el grado es $4$, las multiplicidades son las pedidas y $P(0)=(-1)^2(2)^2=4$."
        ],
        respuesta: "$P(x)=(x-1)^2(x+2)^2$."
      }
    ],
    erroresComunes: [
      "Creer que el grado es el número de términos. El grado es el mayor exponente con coeficiente no nulo.",
      "Olvidar el signo del coeficiente principal al describir el comportamiento final.",
      "Pensar que toda raíz cruza el eje: si la multiplicidad es par, la gráfica toca y se devuelve.",
      "Factorizar mal una diferencia de cuadrados, por ejemplo escribir $x^2-4=(x-4)(x+1)$.",
      "Confundir el corte con el eje $y$ (evaluar en $x=0$) con las raíces (resolver $P(x)=0$)."
    ],
    checklist: [
      "Puedo identificar el grado, el coeficiente principal y el término constante de un polinomio.",
      "Sé factorizar por agrupación y reconocer diferencias de cuadrados.",
      "Puedo encontrar las raíces y decir su multiplicidad a partir de la forma factorizada.",
      "Sé predecir el comportamiento final usando grado y signo del coeficiente principal.",
      "Puedo esbozar la gráfica marcando raíces, multiplicidades y corte con el eje $y$.",
      "Sé construir un polinomio cuando me dan sus raíces y un punto adicional."
    ],
    autoevaluacion: [
      { pregunta: "El grado del polinomio $P(x)=4x^6-x^2+7$ es:", opciones: ["$2$", "$6$", "$7$", "$4$"], correcta: 1, explicacion: "El mayor exponente con coeficiente no nulo es $6$, y su coeficiente principal es $4$." },
      { pregunta: "Las raíces de $P(x)=(x-1)^2(x+3)$ son:", opciones: ["$1$ y $-3$, ambas simples", "$1$ (doble) y $3$ (simple)", "$1$ (doble) y $-3$ (simple)", "$-1$ (doble) y $3$ (simple)"], correcta: 2, explicacion: "El factor $(x-1)^2$ produce la raíz $1$ con multiplicidad $2$; $(x+3)$ produce la raíz $-3$ con multiplicidad $1$." },
      { pregunta: "El comportamiento final de $P(x)=-2x^4+5x-1$ es:", opciones: ["Ambos extremos hacia $-\\infty$", "Ambos extremos hacia $+\\infty$", "Baja por la izquierda y sube por la derecha", "Sube por la izquierda y baja por la derecha"], correcta: 0, explicacion: "El grado es par y el coeficiente principal es negativo, por lo que ambos extremos van hacia $-\\infty$." },
      { pregunta: "¿Cuál polinomio tiene raíces $-1$, $0$ y $2$?", opciones: ["$x(x-1)(x+2)$", "$(x+1)(x-2)$", "$x(x+1)(x-2)$", "$x(x+1)(x+2)$"], correcta: 2, explicacion: "Cada raíz $c$ aporta un factor $(x-c)$: $(x+1)$, $x$ y $(x-2)$." },
      { pregunta: "Si $c$ es una raíz de multiplicidad par $m>1$, entonces en $x=c$ la gráfica:", opciones: ["Cruza el eje $x$", "Toca el eje $x$ y se devuelve", "Tiene una asíntota vertical", "No toca el eje $x$"], correcta: 1, explicacion: "La multiplicidad par hace que el signo del polinomio no cambie alrededor de la raíz: la curva toca el eje y rebota." },
      { pregunta: "La gráfica de $P(x)=x^3-x$ corta el eje $x$ en:", opciones: ["$0$ solamente", "$1$ y $-1$ solamente", "$-1$, $0$ y $1$", "$0$ y $1$ solamente"], correcta: 2, explicacion: "$x^3-x=x(x^2-1)=x(x-1)(x+1)$, así que las raíces son $-1$, $0$ y $1$." }
    ],
    resumen: [
      "Un polinomio se describe por su grado y su coeficiente principal; esos dos datos determinan el comportamiento final de su gráfica.",
      "Las raíces son las soluciones de $P(x)=0$ y cada una aporta un factor $(x-c)$ tantas veces como indique su multiplicidad.",
      "La multiplicidad decide si la gráfica cruza el eje (impar) o rebota en él (par); con raíces, corte con el eje $y$ y comportamiento final se puede esbozar la curva."
    ],
    referencias: [
      { titulo: "Clase 11 — Funciones polinómicas (PDF)", ruta: "recursos/clases/clase-11.pdf" },
      { titulo: "Apunte Clase 12 — Polinomios (PDF)", ruta: "recursos/apuntes/apunte-clase-12.pdf" },
      { titulo: "Stewart, Precálculo §3.2 — Polynomial Functions and Their Graphs", ruta: "recursos/libros/precalculo-stewart.pdf" },
      { titulo: "Mickenberg, Cap. 7 — Polinomios", ruta: "recursos/libros/precalculo-mickenberg.pdf" }
    ],
  });
})();
