/* Módulo 3 · Sección 9 — Ecuaciones exponenciales y logarítmicas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s09", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 21,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Ecuaciones exponenciales y logarítmicas",
    objetivo: "Resolver ecuaciones que involucran exponenciales y logaritmos usando inyectividad, propiedades y cambios de variable, verificando siempre el dominio y descartando soluciones extrañas.",
    conexion: "Ya conoces la exponencial y el logaritmo como funciones inversas. Ahora usaremos esa relación para despejar exponentes y para transformar ecuaciones logarítmicas en ecuaciones algebraicas.",
    fuente: "Clase 17 · Guía 8 · I8 · Stewart §4.5 · Mickenberg Cap. 8",
    prerrequisitos: ["Función exponencial", "Función logaritmo", "Leyes de los logaritmos", "Ecuaciones cuadráticas"],
    teoria: [
      { tipo: "texto", html: "<p>Una ecuación exponencial tiene la incógnita en el exponente, como $3^{x+2}=7$. Una ecuación logarítmica tiene la incógnita dentro de un logaritmo, como $\\log(3x+2)=\\log(x-4)+1$. Para resolverlas se usan dos ideas: la <b>inyectividad</b> de estas funciones y la relación <b>inversa</b> entre exponencial y logaritmo.</p>" },
      { tipo: "teorema", titulo: "Inyectividad de la exponencial", html: "<p>Sea $a>0$, $a\\neq 1$. Entonces</p>$$a^x=a^y\\;\\Longleftrightarrow\\;x=y.$$<p>Esto permite igualar exponentes cuando ambos lados tienen la misma base. Si las bases son distintas, se aplica logaritmo a ambos lados.</p>" },
      { tipo: "teorema", titulo: "Inyectividad del logaritmo", html: "<p>Sea $a>0$, $a\\neq 1$. Para $x,y>0$,</p>$$\\log_a(x)=\\log_a(y)\\;\\Longleftrightarrow\\;x=y.$$<p>La condición $x,y>0$ no es un detalle: si se omite, aparecen soluciones que no pertenecen al dominio.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si dos potencias con la misma base son iguales, los exponentes son iguales. Y si dos logaritmos con la misma base son iguales, los argumentos son iguales. Son dos formas de «cancelar» la misma función a ambos lados.</div>" },
      { tipo: "definicion", titulo: "Estrategia para ecuaciones exponenciales", html: "<ol><li>Si es posible, escribir ambos lados como una potencia de la misma base y usar inyectividad.</li><li>Si no, aislar la exponencial y aplicar $\\ln$ (o $\\log$) a ambos lados.</li><li>Si aparece una exponencial repetida, hacer un cambio de variable $t=e^x$ o $t=a^x$ y resolver la ecuación algebraica.</li><li>Verificar la solución en la ecuación original.</li></ol>" },
      { tipo: "definicion", titulo: "Estrategia para ecuaciones logarítmicas", html: "<ol><li>Determinar el dominio: todos los argumentos deben ser positivos.</li><li>Usar las leyes de los logaritmos para combinar o expandir.</li><li>Igualar argumentos si hay un solo logaritmo de cada lado, o aplicar la exponencial correspondiente.</li><li>Resolver la ecuación algebraica resultante.</li><li>Descartar toda solución que no pertenezca al dominio original.</li></ol>" },
      { tipo: "nota", titulo: "Soluciones extrañas (Stewart §4.5)", html: "<p>Al aplicar una función no inyectiva o al combinar logaritmos, el dominio puede ampliarse y aparecer valores que satisfacen la ecuación transformada pero no la original. Por ejemplo, $\\log(x+2)+\\log(x-1)=1$ exige $x>1$; la ecuación cuadrática asociada puede entregar un valor menor que $1$, que debe rechazarse.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Solución gráfica de 3^(x+2)=7", funciones: [ { f: function (x) { return Math.pow(3, x + 2); }, desde: -4, hasta: 1, label: "y=3^(x+2)", color: "#1e5eff" }, { f: function (x) { return 7; }, desde: -4, hasta: 1, label: "y=7", color: "#e17055", dash: "dash" } ], series: [ { x: [-0.2288], y: [7], label: "x≈-0,229", mode: "markers", color: "#8e44ad" } ], asintotas: [ { tipo: "horizontal", y: 0, color: "#00b894" } ], xlabel: "x", ylabel: "y", rangeX: [-4, 1], rangeY: [-0.5, 12] } },
      { tipo: "tabla", titulo: "Herramientas según el tipo de ecuación", headers: ["Ecuación", "Herramienta principal", "Cuidado"], rows: [["$a^{f(x)}=a^{g(x)}$", "Igualar exponentes", "Misma base y $a>0$, $a\\neq 1$"], ["$a^{f(x)}=b$", "Aplicar $\\ln$", "Aislar primero la exponencial"], ["$Ae^{2x}+Be^x+C=0$", "Cambio $t=e^x$", "$t>0$ siempre"], ["$\\log_a f(x)=\\log_a g(x)$", "Igualar argumentos", "Exigir $f(x),g(x)>0$"], ["$\\log_a f(x)=b$", "Aplicar $a^{(\\cdot)}$", "Verificar el dominio"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una ecuación exponencial se resuelve «bajando» el exponente con logaritmo; una ecuación logarítmica se resuelve «subiendo» el argumento con exponencial. En ambos casos, la verificación no es un adorno: es parte de la solución.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Exponencial con bases distintas",
        enunciado: "<p>Resuelva $3^{x+2}=7$.</p>",
        concepto: "No se puede escribir $7$ como potencia entera de $3$, así que se aplica logaritmo natural a ambos lados y se usa $\\ln(a^b)=b\\ln a$.",
        desarrollo: [
          "<b>Paso 1.</b> Aplicamos $\\ln$ en ambos lados: $\\ln(3^{x+2})=\\ln 7$.",
          "<b>Paso 2.</b> Por la ley de la potencia: $(x+2)\\ln 3=\\ln 7$.",
          "<b>Paso 3.</b> Dividimos por $\\ln 3$ (que no es cero): $x+2=\\dfrac{\\ln 7}{\\ln 3}$.",
          "<b>Paso 4.</b> Despejamos: $x=\\dfrac{\\ln 7}{\\ln 3}-2$.",
          "<b>Paso 5.</b> Aproximamos: $\\ln 7\\approx 1,94591$ y $\\ln 3\\approx 1,09861$, luego $x\\approx 1,77124-2=-0,22876$.",
          "<b>Verificación.</b> $3^{-0,22876+2}=3^{1,77124}\\approx 7$, como se ve en la gráfica."
        ],
        respuesta: "$x=\\dfrac{\\ln 7}{\\ln 3}-2\\approx -0,229$."
      },
      {
        titulo: "Factor común exponencial",
        enunciado: "<p>Resuelva $3xe^x+x^2e^x=0$.</p>",
        concepto: "Se factoriza $e^x$ y se usa que la exponencial nunca es cero; luego se resuelve la ecuación algebraica que queda.",
        desarrollo: [
          "<b>Paso 1.</b> Factorizamos $e^x$: $e^x(3x+x^2)=0$.",
          "<b>Paso 2.</b> Dentro del paréntesis factorizamos $x$: $e^x\\,x(3+x)=0$.",
          "<b>Paso 3.</b> Como $e^x>0$ para todo $x\\in\\R$, el factor $e^x$ nunca se anula.",
          "<b>Paso 4.</b> Entonces $x=0$ o $3+x=0$.",
          "<b>Paso 5.</b> Las soluciones son $x=0$ y $x=-3$. Ambas son válidas porque no hay restricciones de dominio adicionales."
        ],
        respuesta: "$x=0$ o $x=-3$."
      },
      {
        titulo: "Logaritmos con cambio de base implícito",
        enunciado: "<p>Resuelva $\\log(3x+2)=\\log(x-4)+1$, donde $\\log$ es logaritmo en base $10$.</p>",
        concepto: "Se usa $1=\\log 10$ para escribir todo con logaritmos en la misma base, se combinan y se igualan argumentos; después se verifica el dominio.",
        desarrollo: [
          "<b>Paso 1 (dominio).</b> Se necesita $3x+2>0$ y $x-4>0$. La segunda condición es la más fuerte: $x>4$.",
          "<b>Paso 2.</b> Escribimos $1=\\log 10$. Entonces $\\log(3x+2)=\\log(x-4)+\\log 10$.",
          "<b>Paso 3.</b> Por la ley del producto: $\\log(3x+2)=\\log\\big(10(x-4)\\big)$.",
          "<b>Paso 4.</b> Como $\\log$ es inyectiva, igualamos argumentos: $3x+2=10x-40$.",
          "<b>Paso 5.</b> Resolvemos: $42=7x$, luego $x=6$.",
          "<b>Paso 6 (verificación).</b> $x=6>4$ cumple el dominio. Además $\\log(20)=\\log(2)+1$, que es cierto porque $\\log(20)=\\log(2\\cdot 10)=\\log 2+\\log 10$."
        ],
        respuesta: "$x=6$."
      }
    ],
    ejercicios: [
      {
        titulo: "Bases distintas",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $2^{x+1}=3^x$.</p>",
        concepto: "Se aplica logaritmo a ambos lados y se agrupa la incógnita usando la ley de la potencia.",
        pista: "Aplique $\\ln$ y use $\\ln(2^{x+1})=(x+1)\\ln 2$.",
        desarrollo: [
          "Aplicamos $\\ln$: $(x+1)\\ln 2=x\\ln 3$.",
          "Desarrollamos: $x\\ln 2+\\ln 2=x\\ln 3$.",
          "Agrupamos: $\\ln 2=x(\\ln 3-\\ln 2)$.",
          "Entonces $x=\\dfrac{\\ln 2}{\\ln 3-\\ln 2}$.",
          "Aproximando: $x\\approx\\dfrac{0,69315}{1,09861-0,69315}=\\dfrac{0,69315}{0,40546}\\approx 1,7095$."
        ],
        respuesta: "$x=\\dfrac{\\ln 2}{\\ln 3-\\ln 2}\\approx 1,710$."
      },
      {
        titulo: "Cambio de variable exponencial",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $e^{2x}-3e^x+2=0$.</p>",
        concepto: "Se reconoce una estructura cuadrática con $t=e^x$; como $t>0$, se descartan valores no positivos.",
        pista: "Sea $t=e^x$. Entonces $e^{2x}=t^2$.",
        desarrollo: [
          "Sea $t=e^x>0$. La ecuación queda $t^2-3t+2=0$.",
          "Factorizamos: $(t-1)(t-2)=0$, luego $t=1$ o $t=2$. Ambos son positivos.",
          "Si $t=1$: $e^x=1$, entonces $x=\\ln 1=0$.",
          "Si $t=2$: $e^x=2$, entonces $x=\\ln 2\\approx 0,6931$.",
          "Verificación: para $x=0$, $1-3+2=0$; para $x=\\ln 2$, $e^{2\\ln 2}=4$ y $3e^{\\ln 2}=6$, luego $4-6+2=0$."
        ],
        respuesta: "$x=0$ o $x=\\ln 2$."
      },
      {
        titulo: "Dos logaritmos en base 2",
        dificultad: "basico",
        enunciado: "<p>Resuelva $\\log_2(x)+\\log_2(x-3)=2$.</p>",
        concepto: "Se combina el producto de logaritmos, se aplica la exponencial en base $2$ y se verifica el dominio.",
        pista: "El dominio exige $x>0$ y $x-3>0$. Luego $\\log_2(x(x-3))=2$.",
        desarrollo: [
          "Dominio: $x>0$ y $x-3>0$, es decir, $x>3$.",
          "Combinamos: $\\log_2\\big(x(x-3)\\big)=2$.",
          "Aplicamos exponencial en base $2$: $x(x-3)=2^2=4$.",
          "Entonces $x^2-3x-4=0$, que factoriza como $(x-4)(x+1)=0$.",
          "Soluciones algebraicas: $x=4$ o $x=-1$.",
          "Verificamos el dominio: $x=4$ cumple $x>3$; $x=-1$ no cumple. Descartamos $x=-1$."
        ],
        respuesta: "$x=4$."
      },
      {
        titulo: "Solución extraña",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $\\log(x+2)+\\log(x-1)=1$ e identifique si aparece alguna solución extraña.</p>",
        concepto: "La combinación de logaritmos exige argumentos positivos; la ecuación cuadrática puede producir una raíz fuera del dominio original.",
        pista: "Dominio: $x>1$. Combine y use $1=\\log 10$.",
        desarrollo: [
          "Dominio: $x+2>0$ y $x-1>0$, luego $x>1$.",
          "Combinamos: $\\log\\big((x+2)(x-1)\\big)=1=\\log 10$.",
          "Igualamos argumentos: $(x+2)(x-1)=10$.",
          "Desarrollamos: $x^2+x-2=10$, o sea $x^2+x-12=0$.",
          "Factorizamos: $(x+4)(x-3)=0$, luego $x=-4$ o $x=3$.",
          "Verificamos: $x=3$ cumple $x>1$; $x=-4$ no cumple, y además $\\log(-2)$ no está definido.",
          "Por lo tanto, $x=-4$ es una solución extraña y debe descartarse."
        ],
        respuesta: "$x=3$; la raíz $x=-4$ es extraña porque no pertenece al dominio."
      },
      {
        titulo: "Interés compuesto",
        dificultad: "intermedio",
        enunciado: "<p>Un capital de $\\$1.000$ se invierte al $5\\%$ anual compuesto. ¿En cuántos años se duplica? Use $C(t)=1000(1,05)^t$.</p>",
        concepto: "Se plantea una ecuación exponencial, se aísla la potencia y se aplica logaritmo para despejar el tiempo.",
        pista: "Divida por $1000$ y aplique $\\ln$.",
        desarrollo: [
          "Planteamos $1000(1,05)^t=2000$.",
          "Dividimos por $1000$: $(1,05)^t=2$.",
          "Aplicamos $\\ln$: $t\\ln(1,05)=\\ln 2$.",
          "Despejamos: $t=\\dfrac{\\ln 2}{\\ln 1,05}$.",
          "Calculamos: $\\ln 2\\approx 0,69315$ y $\\ln 1,05\\approx 0,04879$, luego $t\\approx 14,21$ años."
        ],
        respuesta: "Aproximadamente $14,2$ años (en la práctica, se completa el año $15$)."
      }
    ],
    erroresComunes: [
      "Aplicar logaritmo sin aislar antes la exponencial, o repartir el logaritmo sobre una suma.",
      "Olvidar que $e^x>0$ y aceptar una solución $t\\le 0$ al resolver una ecuación cuadrática en $t=e^x$.",
      "No determinar el dominio de la ecuación logarítmica antes de transformarla.",
      "Aceptar una raíz que anula o hace negativo el argumento de un logaritmo.",
      "Confundir $\\log(x^2)=2\\log x$ con una identidad válida para todo $x$; solo vale para $x>0$."
    ],
    checklist: [
      "Sé igualar exponentes cuando ambos lados tienen la misma base.",
      "Sé aplicar logaritmo para resolver $a^{f(x)}=b$ y despejar correctamente.",
      "Sé hacer cambios de variable en ecuaciones tipo $Ae^{2x}+Be^x+C=0$.",
      "Sé determinar el dominio de una ecuación logarítmica antes de resolverla.",
      "Sé combinar logaritmos y aplicar la exponencial correspondiente.",
      "Sé detectar y explicar una solución extraña."
    ],
    autoevaluacion: [
      { pregunta: "Si $2^{x}=8$, entonces $x$ vale:", opciones: ["$2$", "$3$", "$4$", "$\\ln 8$"], correcta: 1, explicacion: "$8=2^3$, y por inyectividad $x=3$." },
      { pregunta: "Al resolver $e^{2x}-5e^x+6=0$ con $t=e^x$, se obtiene:", opciones: ["$t=2$ o $t=3$", "$t=-2$ o $t=-3$", "$t=1$ o $t=6$", "$t=0$ o $t=5$"], correcta: 0, explicacion: "$t^2-5t+6=(t-2)(t-3)=0$; ambas raíces son positivas y válidas." },
      { pregunta: "El dominio de la ecuación $\\log(x-2)+\\log(x)=1$ es:", opciones: ["$x>0$", "$x>2$", "$x\\ge 2$", "$\\R$"], correcta: 1, explicacion: "Se necesita $x-2>0$ y $x>0$; la condición más fuerte es $x>2$." },
      { pregunta: "Para resolver $5^{x}=12$ conviene:", opciones: ["Igualar exponentes", "Aplicar $\\ln$ a ambos lados", "Elevar al cuadrado", "Multiplicar por $5$"], correcta: 1, explicacion: "Como $12$ no es una potencia entera de $5$, se aplica logaritmo: $x=\\ln 12/\\ln 5$." },
      { pregunta: "Si al resolver una ecuación logarítmica aparece $x=-3$ y el dominio exige $x>1$, entonces:", opciones: ["Es solución válida", "Hay dos soluciones", "Debe descartarse", "Se acepta solo si es entera"], correcta: 2, explicacion: "Toda solución debe pertenecer al dominio original; $x=-3$ no lo cumple." },
      { pregunta: "$\\log_3(x)=2$ equivale a:", opciones: ["$x=3^2=9$", "$x=2^3=8$", "$x=3\\cdot 2=6$", "$x=\\ln 2/\\ln 3$"], correcta: 0, explicacion: "Por definición, $\\log_3 x=2$ significa $3^2=x$." }
    ],
    resumen: [
      "Las funciones exponencial y logaritmo son inyectivas, lo que permite igualar exponentes o argumentos cuando las bases coinciden.",
      "Para ecuaciones exponenciales se usan bases comunes, logaritmos o cambios de variable; para logarítmicas, se combinan las leyes y se aplica la exponencial.",
      "Siempre hay que verificar el dominio: las soluciones extrañas aparecen cuando la ecuación transformada pierde las restricciones originales."
    ],
    referencias: [
      { titulo: "Clase 17 — Función logaritmo y ecuaciones (PDF)", ruta: "recursos/clases/clase-17.pdf" },
      { titulo: "Guía 8 — Logaritmo y exponencial (PDF)", ruta: "recursos/guias/guia-08-logaritmo-exponencial.pdf" },
      { titulo: "I8 2026 — Interrogación 8 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2026-1/i8-mat1107.pdf" },
      { titulo: "Stewart, Precálculo (Cap. 4.5)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
