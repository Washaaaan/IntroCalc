/* Módulo 3 · Sección 7 — Función exponencial */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s07", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 19,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Función exponencial",
    objetivo: "Reconocer la función exponencial y sus transformaciones, describir su dominio, recorrido, monotonía y asíntota, y usarla para modelar crecimiento y decaimiento.",
    conexion: "Vienes de composición e inversa: la exponencial es una función inyectiva con una asíntota horizontal. Esa inyectividad será clave para resolver ecuaciones exponenciales en la sección siguiente.",
    fuente: "Clase 16 · Apunte 17 · Stewart §4.1–4.2 · Mickenberg Cap. 8",
    prerrequisitos: ["Potencia de exponente real", "Transformaciones de gráficas", "Asíntotas", "Función inyectiva"],
    teoria: [
      { tipo: "texto", html: "<p>Hay fenómenos que crecen o decrecen a una tasa proporcional a lo que ya existe: una población, el interés compuesto, una epidemia, la desintegración radiactiva o el enfriamiento de un objeto. La función que modela esa clase de cambios es la <b>función exponencial</b>, cuya variable está en el exponente.</p>" },
      { tipo: "definicion", titulo: "El número e", html: "<p>La constante de Euler $e$ es el número al que se aproxima $\\left(1+\\dfrac1n\\right)^n$ cuando $n$ crece. Su valor es</p>$$e=\\lim_{n\\to\\infty}\\left(1+\\frac1n\\right)^n\\approx 2{,}718281828459045.$$<p>$e$ es irracional, así que su desarrollo decimal no termina ni se repite.</p>" },
      { tipo: "tabla", titulo: "Aproximaciones sucesivas de e", headers: ["$n$", "$(1+1/n)^n$"], rows: [["1", "2"], ["5", "2,48832"], ["10", "2,59374"], ["100", "2,70481"], ["10.000", "2,71815"], ["1.000.000", "2,71828"]] },
      { tipo: "definicion", titulo: "Función exponencial natural", html: "<p>La <b>función exponencial</b> es</p>$$f:\\R\\to\\R,\\qquad f(x)=e^x.$$<p>También se escribe $\\exp(x)$. Para una base $a>0$, $a\\neq 1$, se define $a^x=e^{x\\ln a}$. Su dominio es $\\R$ y su recorrido es $]0,\\infty[$.</p>" },
      { tipo: "teorema", titulo: "Positividad, crecimiento e inyectividad", html: "<p>Para todo $x\\in\\R$ se cumple $e^x>0$; por lo tanto, la exponencial no tiene ceros. Además,</p>$$x<y\\;\\Longrightarrow\\;e^x<e^y,$$<p>es decir, $e^x$ es estrictamente creciente. En consecuencia es inyectiva y su recorrido es $]0,\\infty[$.</p>" },
      { tipo: "teorema", titulo: "Desigualdad fundamental", html: "<p>Para todo $x\\in\\R$,</p>$$e^x\\ge 1+x.$$<p>La igualdad ocurre solo en $x=0$. Geométricamente, la recta $y=1+x$ es tangente a la gráfica de $e^x$ en el punto $(0,1)$ y la gráfica queda siempre por encima de ella.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "eˣ, e⁻ˣ y la recta y=1+x", funciones: [ { f: function (x) { return Math.exp(x); }, desde: -3, hasta: 2.5, label: "f(x)=eˣ", color: "#1e5eff" }, { f: function (x) { return Math.exp(-x); }, desde: -2.5, hasta: 3, label: "g(x)=e⁻ˣ", color: "#00b894" }, { f: function (x) { return 1 + x; }, desde: -3, hasta: 2.5, label: "y=1+x", color: "#e17055", dash: "dash" } ], asintotas: [ { tipo: "horizontal", y: 0, color: "#8e44ad" } ], xlabel: "x", ylabel: "y", rangeX: [-3.2, 3.2], rangeY: [-1, 8] } },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> $e^x$ nunca toca el cero ni se hace negativa; siempre crece y se acerca al eje $x$ por la izquierda. La recta $y=1+x$ es una buena aproximación cerca de $x=0$, pero la exponencial se escapa rápidamente hacia arriba.</div>" },
      { tipo: "nota", titulo: "Transformaciones (Stewart §4.1)", html: "<p>A partir de $y=e^x$ se obtienen otras gráficas:</p><ul><li>$y=e^{-x}$ refleja la gráfica en el eje $y$ (decaimiento);</li><li>$y=e^x+k$ traslada verticalmente $k$ unidades, con asíntota $y=k$;</li><li>$y=e^{x-h}$ traslada horizontalmente $h$ unidades;</li><li>$y=Ae^{kx}$ estira o comprime, y cambia de crecimiento a decaimiento si $k<0$.</li></ul>" },
      { tipo: "definicion", titulo: "Modelos de crecimiento y decaimiento", html: "<p>Una cantidad con crecimiento o decaimiento exponencial se escribe</p>$$P(t)=P_0\\,e^{kt},$$<p>donde $P_0=P(0)$ es el valor inicial y $k$ es la tasa relativa. Si $k>0$ hay crecimiento; si $k<0$, decaimiento. La vida media $T$ (tiempo para reducirse a la mitad) cumple $e^{kT}=\\dfrac12$, es decir, $k=-\\dfrac{\\ln 2}{T}$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> $P_0$ es con cuánto partimos y $k$ dice qué tan rápido cambia. Un $k$ positivo hace que la cantidad se multiplique una y otra vez; un $k$ negativo la hace disminuir hacia cero sin llegar nunca a ser negativa.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Graficar transformaciones de eˣ",
        enunciado: "<p>Describa dominio, recorrido y asíntotas de $g(x)=e^{-x}$ y $h(x)=\\dfrac{10}{1+e^{-x}}$. Grafique $h$.</p>",
        concepto: "Se aplican transformaciones de la gráfica de $e^x$ y se estudia el comportamiento cuando $x\\to\\pm\\infty$.",
        desarrollo: [
          "<b>Paso 1.</b> Para $g(x)=e^{-x}$, el dominio es $\\R$. Como $e^{-x}>0$, el recorrido es $]0,\\infty[$ y la asíntota horizontal es $y=0$.",
          "<b>Paso 2.</b> La gráfica de $g$ es el reflejo de $e^x$ en el eje $y$: es estrictamente decreciente. Cuando $x\\to\\infty$, $e^{-x}\\to 0$; cuando $x\\to -\\infty$, $e^{-x}\\to\\infty$.",
          "<b>Paso 3.</b> Para $h(x)=\\dfrac{10}{1+e^{-x}}$, el denominador $1+e^{-x}$ es siempre mayor que $1$, así que $0<h(x)<10$.",
          "<b>Paso 4.</b> Cuando $x\\to\\infty$, $e^{-x}\\to 0$ y $h(x)\\to\\dfrac{10}{1+0}=10$. Cuando $x\\to -\\infty$, $e^{-x}\\to\\infty$ y $h(x)\\to 0$.",
          "<b>Paso 5.</b> Por lo tanto, el dominio es $\\R$, el recorrido es $]0,10[$ y las asíntotas horizontales son $y=0$ e $y=10$. La función es creciente."
        ],
        respuesta: "$\\operatorname{Dom}(g)=\\R$, $\\operatorname{Rec}(g)=]0,\\infty[$, asíntota $y=0$. $\\operatorname{Dom}(h)=\\R$, $\\operatorname{Rec}(h)=]0,10[$, asíntotas $y=0$ e $y=10$."
      },
      {
        titulo: "Modelo de una epidemia",
        enunciado: "<p>En una ciudad de $10.000$ habitantes, el número de personas infectadas después de $t$ días es $v(t)=\\dfrac{10.000}{5+1245e^{-0,97t}}$. ¿Cuántas personas hay infectadas inicialmente? ¿Qué ocurre a largo plazo?</p>",
        concepto: "Se evalúa el modelo en $t=0$ y se estudia el límite cuando $t\\to\\infty$ para interpretar la asíntota horizontal.",
        desarrollo: [
          "<b>Paso 1.</b> Inicialmente $t=0$: $v(0)=\\dfrac{10.000}{5+1245e^0}=\\dfrac{10.000}{5+1245}$.",
          "<b>Paso 2.</b> Como $5+1245=1250$, se tiene $v(0)=\\dfrac{10.000}{1250}=8$. Hay $8$ personas infectadas al inicio.",
          "<b>Paso 3.</b> A largo plazo, $e^{-0,97t}\\to 0$ cuando $t\\to\\infty$, porque $-0,97<0$.",
          "<b>Paso 4.</b> Entonces el denominador tiende a $5$ y $v(t)\\to\\dfrac{10.000}{5}=2000$.",
          "<b>Paso 5.</b> La asíntota $y=2000$ indica que el modelo predice hasta $2000$ personas infectadas; no toda la ciudad. La curva parte lenta y luego sube con fuerza antes de estabilizarse."
        ],
        respuesta: "$v(0)=8$ personas infectadas; a largo plazo $v(t)\\to 2000$, con asíntota horizontal $y=2000$."
      },
      {
        titulo: "Vida media y decaimiento",
        enunciado: "<p>Una sustancia radiactiva tiene una vida media de $5$ días. Si inicialmente hay $80$ mg, determine la constante $k$ y la cantidad que queda a los $12$ días.</p>",
        concepto: "Se usa el modelo $P(t)=P_0e^{kt}$ y la condición de vida media $P(T)=\\frac{P_0}{2}$.",
        desarrollo: [
          "<b>Paso 1.</b> El modelo es $P(t)=80e^{kt}$.",
          "<b>Paso 2.</b> A los $5$ días queda la mitad: $80e^{5k}=40$, es decir, $e^{5k}=\\dfrac12$.",
          "<b>Paso 3.</b> Tomando logaritmo natural (lo formalizaremos en la sección siguiente): $5k=\\ln\\left(\\dfrac12\\right)=-\\ln 2$.",
          "<b>Paso 4.</b> Entonces $k=-\\dfrac{\\ln 2}{5}\\approx -0,13863$ por día.",
          "<b>Paso 5.</b> A los $12$ días: $P(12)=80e^{-0,13863\\cdot 12}=80e^{-1,66356}$.",
          "<b>Paso 6.</b> Calculamos $e^{-1,66356}\\approx 0,18946$, así que $P(12)\\approx 80\\cdot 0,18946\\approx 15,16$ mg."
        ],
        respuesta: "$k=-\\dfrac{\\ln 2}{5}\\approx -0,1386$ por día; quedan aproximadamente $15,2$ mg a los $12$ días."
      }
    ],
    ejercicios: [
      {
        titulo: "Tabla y comparación de bases",
        dificultad: "basico",
        enunciado: "<p>Complete una tabla para $y=2^x$ e $y=\\left(\\frac12\\right)^x$ con $x=-2,-1,0,1,2,3$ y describa el comportamiento de ambas.</p>",
        concepto: "Se comparan dos exponenciales con bases recíprocas; una crece y la otra decrece.",
        pista: "Recuerde que $\\left(\\frac12\\right)^x=2^{-x}$.",
        desarrollo: [
          "Para $2^x$: $2^{-2}=\\frac14$, $2^{-1}=\\frac12$, $2^0=1$, $2^1=2$, $2^2=4$, $2^3=8$.",
          "Para $\\left(\\frac12\\right)^x$ los valores son los recíprocos: $4$, $2$, $1$, $\\frac12$, $\\frac14$, $\\frac18$.",
          "Ambas tienen dominio $\\R$, recorrido $]0,\\infty[$ y asíntota $y=0$. La primera es estrictamente creciente y la segunda estrictamente decreciente.",
          "Las gráficas son simétricas respecto del eje $y$, porque $\\left(\\frac12\\right)^x=2^{-x}$."
        ],
        respuesta: "$2^x$ crece y $\\left(\\frac12\\right)^x$ decrece; ambas pasan por $(0,1)$ y tienen asíntota $y=0$."
      },
      {
        titulo: "Dominio, recorrido y asíntota",
        dificultad: "basico",
        enunciado: "<p>Determine dominio, recorrido y asíntota horizontal de $f(x)=e^{x-2}+3$.</p>",
        concepto: "Una traslación de $e^x$ mueve la asíntota y el recorrido, pero no cambia el dominio.",
        pista: "Como $e^{x-2}>0$, sumar $3$ desplaza el recorrido.",
        desarrollo: [
          "El exponente $x-2$ está definido para todo real, así que $\\operatorname{Dom}(f)=\\R$.",
          "Como $e^{x-2}>0$ para todo $x$, se tiene $f(x)>3$.",
          "Además, $e^{x-2}$ recorre todo $]0,\\infty[$, por lo que $f$ recorre $]3,\\infty[$.",
          "Cuando $x\\to -\\infty$, $e^{x-2}\\to 0$ y $f(x)\\to 3$. La asíntota horizontal es $y=3$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\R$, $\\operatorname{Rec}(f)=]3,\\infty[$, asíntota $y=3$."
      },
      {
        titulo: "Crecimiento poblacional",
        dificultad: "intermedio",
        enunciado: "<p>Una población se modela por $P(t)=500e^{0,02t}$, con $t$ en años. ¿En cuántos años llegará a $1000$ habitantes?</p>",
        concepto: "Se plantea una ecuación exponencial y se despeja el exponente usando logaritmo.",
        pista: "Divida por $500$ y tome logaritmo natural en ambos lados.",
        desarrollo: [
          "Planteamos $500e^{0,02t}=1000$.",
          "Dividiendo por $500$: $e^{0,02t}=2$.",
          "Tomando $\\ln$: $0,02t=\\ln 2$.",
          "Entonces $t=\\dfrac{\\ln 2}{0,02}\\approx\\dfrac{0,693147}{0,02}\\approx 34,66$ años."
        ],
        respuesta: "Aproximadamente $34,7$ años."
      },
      {
        titulo: "Datación por carbono",
        dificultad: "intermedio",
        enunciado: "<p>El carbono-14 tiene una vida media de $5730$ años. ¿Qué porcentaje del carbono-14 original queda después de $10.000$ años?</p>",
        concepto: "Se usa $P(t)=P_0e^{kt}$ con $k=-\\ln 2/5730$ y se calcula la razón $P(10000)/P_0$.",
        pista: "No necesita el valor de $P_0$; calcule directamente $e^{kt}$.",
        desarrollo: [
          "La constante es $k=-\\dfrac{\\ln 2}{5730}\\approx -0,000120968$ por año.",
          "A los $10.000$ años, la fracción restante es $e^{k\\cdot 10000}=e^{-1,20968}$.",
          "Calculando: $e^{-1,20968}\\approx 0,2983$.",
          "Por lo tanto, queda aproximadamente el $29,8\\%$ del carbono-14 original."
        ],
        respuesta: "Queda aproximadamente el $29,8\\%$."
      },
      {
        titulo: "Recorrido de una exponencial racional",
        dificultad: "avanzado",
        enunciado: "<p>Determine el recorrido de $f(x)=\\dfrac{e^x}{e^x+1}$ y pruebe que es inyectiva.</p>",
        concepto: "Se despeja $e^x$ y se usa que $e^x>0$; esto también muestra la existencia de la inversa.",
        pista: "Escriba $y=\\dfrac{e^x}{e^x+1}$ y despeje $e^x$ en términos de $y$.",
        desarrollo: [
          "Sea $y=f(x)$. Entonces $y(e^x+1)=e^x$, es decir, $ye^x+y=e^x$.",
          "Agrupando: $e^x(y-1)=-y$, o sea $e^x=\\dfrac{y}{1-y}$.",
          "Como $e^x>0$, se necesita $\\dfrac{y}{1-y}>0$. Esto ocurre exactamente cuando $0<y<1$.",
          "Recíprocamente, si $0<y<1$, el valor $x=\\ln\\left(\\dfrac{y}{1-y}\\right)$ está bien definido y satisface $f(x)=y$. Así, el recorrido es $]0,1[$.",
          "Inyectividad: si $f(x_1)=f(x_2)$, entonces $\\dfrac{e^{x_1}}{e^{x_1}+1}=\\dfrac{e^{x_2}}{e^{x_2}+1}$. Al despejar como antes se obtiene $e^{x_1}=e^{x_2}$, y como $e^x$ es inyectiva, $x_1=x_2$."
        ],
        respuesta: "$\\operatorname{Rec}(f)=]0,1[$ y $f$ es inyectiva; de hecho $f^{-1}(y)=\\ln\\left(\\dfrac{y}{1-y}\\right)$."
      }
    ],
    erroresComunes: [
      "Creer que $e^x$ puede ser cero o negativa; su recorrido es $]0,\\infty[$.",
      "Confundir $e^{-x}$ con $-e^x$: la primera es un reflejo en el eje $y$ y sigue siendo positiva.",
      "Olvidar que una traslación vertical cambia la asíntota horizontal.",
      "Aplicar la propiedad $e^{x+y}=e^xe^y$ como si fuera $e^{x+y}=e^x+e^y$.",
      "En un modelo $P(t)=P_0e^{kt}$, interpretar $k$ como el porcentaje de crecimiento sin considerar el signo y las unidades."
    ],
    checklist: [
      "Sé definir $e$ y la función $e^x$.",
      "Sé graficar $e^x$, $e^{-x}$ y traslaciones, identificando la asíntota horizontal.",
      "Sé enunciar dominio, recorrido, monotonía e inyectividad de la exponencial.",
      "Sé usar la desigualdad $e^x\\ge 1+x$ e interpretarla gráficamente.",
      "Sé plantear y resolver un modelo de crecimiento o decaimiento con vida media.",
      "Sé determinar el recorrido de una expresión que involucra $e^x$ despejando la exponencial."
    ],
    autoevaluacion: [
      { pregunta: "El recorrido de $f(x)=e^x$ es:", opciones: ["$\\R$", "$[0,\\infty)$", "$]0,\\infty[$", "$]1,\\infty[$"], correcta: 2, explicacion: "$e^x$ es siempre positiva y toma todos los valores positivos, pero nunca $0$." },
      { pregunta: "La asíntota horizontal de $f(x)=e^x-4$ es:", opciones: ["$y=0$", "$y=-4$", "$y=4$", "$x=-4$"], correcta: 1, explicacion: "Al restar $4$ se traslada la gráfica y su asíntota $y=0$ pasa a $y=-4$." },
      { pregunta: "Si $e^{2x}=e^{6}$, entonces $x$ vale:", opciones: ["$3$", "$6$", "$12$", "$\\ln 6$"], correcta: 0, explicacion: "Por inyectividad de la exponencial, $2x=6$, luego $x=3$." },
      { pregunta: "¿Cuál es el valor de $\\left(1+\\frac1n\\right)^n$ cuando $n$ crece mucho?", opciones: ["$1$", "$2$", "$e$", "$\\infty$"], correcta: 2, explicacion: "Por definición, esa expresión tiende a la constante de Euler $e\\approx 2,71828$." },
      { pregunta: "En $P(t)=P_0e^{kt}$, si $k<0$ entonces:", opciones: ["La cantidad crece", "La cantidad decrece hacia $0$", "La cantidad se hace negativa", "La cantidad es constante"], correcta: 1, explicacion: "Un exponente negativo hace que $e^{kt}\\to 0$ cuando $t\\to\\infty$." },
      { pregunta: "La vida media $T$ de un decaimiento exponencial satisface:", opciones: ["$e^{kT}=2$", "$e^{kT}=\\frac12$", "$kT=0$", "$e^{kT}=1$"], correcta: 1, explicacion: "Vida media significa que queda la mitad de la cantidad inicial." }
    ],
    resumen: [
      "La función exponencial $f(x)=e^x$ tiene dominio $\\R$, recorrido $]0,\\infty[$, es estrictamente creciente e inyectiva, y su asíntota es $y=0$.",
      "Las transformaciones de $e^x$ permiten modelar crecimiento ($k>0$) y decaimiento ($k<0$), cambiando recorrido y asíntota según las traslaciones.",
      "El modelo $P(t)=P_0e^{kt}$ describe fenómenos proporcionales a su tamaño; la vida media se obtiene de $e^{kT}=\\frac12$."
    ],
    referencias: [
      { titulo: "Clase 16 — Función exponencial (PDF)", ruta: "recursos/clases/clase-16.pdf" },
      { titulo: "Apunte Clase 17 (PDF)", ruta: "recursos/apuntes/apunte-clase-17.pdf" },
      { titulo: "Stewart, Precálculo (Cap. 4.1–4.2)", ruta: "recursos/libros/precalculo-stewart.pdf" },
      { titulo: "Mickenberg, Precálculo (Cap. 8)", ruta: "recursos/libros/precalculo-mickenberg.pdf" }
    ]
  });
})();
