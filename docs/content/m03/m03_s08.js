/* Módulo 3 · Sección 8 — Función logaritmo y cambio de base */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s08", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 20,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Función logaritmo y cambio de base",
    objetivo: "Reconocer el logaritmo como inversa de la exponencial, aplicar sus propiedades y leyes, determinar dominios y cambiar de base para comparar y calcular logaritmos.",
    conexion: "La función exponencial es biyectiva de $\\R$ en $]0,\\infty[$. Por eso tiene inversa: esa inversa es el logaritmo. Todo lo que aprendiste sobre inversas y asíntotas se usa ahora.",
    fuente: "Clase 17 · Apunte 18 · Stewart §4.3–4.4 · Mickenberg Cap. 8",
    prerrequisitos: ["Función exponencial", "Función inversa", "Dominio de una función", "Propiedades de potencias"],
    teoria: [
      { tipo: "texto", html: "<p>La exponencial responde la pregunta «¿cuánto vale $e$ elevado a $x$?». El logaritmo responde la pregunta inversa: «¿a qué exponente debo elevar la base para obtener este número?». Esa relación de inversa explica su dominio, su gráfica y su asíntota vertical.</p>" },
      { tipo: "definicion", titulo: "Logaritmo natural", html: "<p>Como $\\exp:\\R\\to]0,\\infty[$, $\\exp(x)=e^x$, es biyectiva, tiene inversa $\\ln:]0,\\infty[\\to\\R$, llamada <b>logaritmo natural</b>:</p>$$y=\\ln(x)\\;\\Longleftrightarrow\\;e^y=x.$$<p>Su dominio es $]0,\\infty[$ y su recorrido es $\\R$.</p>" },
      { tipo: "nota", titulo: "Consecuencias inmediatas (Clase 17)", html: "<p>Para $x>0$ y $t\\in\\R$:</p>$$e^{\\ln x}=x,\\qquad \\ln(e^t)=t.$$<p>En particular, $\\ln(1)=0$ porque $e^0=1$, y $\\ln(e)=1$ porque $e^1=e$. El único cero de $\\ln$ es $x=1$.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "ln(x), log₂(x) y log₁/₂(x)", funciones: [ { f: function (x) { return Math.log(x); }, desde: 0.02, hasta: 8, label: "ln(x)", color: "#1e5eff" }, { f: function (x) { return Math.log(x) / Math.log(2); }, desde: 0.02, hasta: 8, label: "log₂(x)", color: "#00b894" }, { f: function (x) { return Math.log(x) / Math.log(0.5); }, desde: 0.02, hasta: 8, label: "log₁/₂(x)", color: "#e17055" } ], asintotas: [ { tipo: "vertical", x: 0, color: "#8e44ad" } ], xlabel: "x", ylabel: "y", rangeX: [-1, 8.5], rangeY: [-4, 4] } },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el logaritmo es el «detector de exponente». Si $2^5=32$, entonces $\\log_2(32)=5$. La gráfica se pega al eje $y$ por la derecha, pero nunca lo toca: por eso la asíntota vertical es $x=0$.</div>" },
      { tipo: "teorema", titulo: "Leyes de los logaritmos", html: "<p>Para $x,y>0$ y $z\\in\\R$:</p>$$\\ln(xy)=\\ln x+\\ln y,$$$$\\ln\\left(\\frac{x}{y}\\right)=\\ln x-\\ln y,$$$$\\ln(x^z)=z\\ln x.$$<p><b>Idea de la demostración.</b> Si $u=\\ln x$ y $w=\\ln y$, entonces $e^u=x$ y $e^w=y$. Luego $xy=e^ue^w=e^{u+w}$ y, aplicando $\\ln$, se obtiene $\\ln(xy)=u+w=\\ln x+\\ln y$.</p>" },
      { tipo: "nota", titulo: "Errores que hay que evitar", html: "<p>En general, $\\ln(x+y)\\neq\\ln x+\\ln y$ y $\\ln(x-y)\\neq\\dfrac{\\ln x}{\\ln y}$. Las leyes solo valen para productos, cuocientes y potencias, y exigen que todos los argumentos sean positivos.</p>" },
      { tipo: "definicion", titulo: "Logaritmo en base a y cambio de base", html: "<p>Sea $a>0$, $a\\neq 1$. El logaritmo en base $a$ se define por</p>$$\\log_a(x)=\\frac{\\ln x}{\\ln a}.$$<p>Equivalentemente, $y=\\log_a(x)\\Longleftrightarrow a^y=x$. La fórmula del <b>cambio de base</b> permite calcular cualquier logaritmo con la tecla $\\ln$ o $\\log$ de la calculadora:</p>$$\\log_a(x)=\\frac{\\log_b(x)}{\\log_b(a)}.$$" },
      { tipo: "teorema", titulo: "Monotonía y asíntota", html: "<p>La función $\\log_a$ tiene dominio $]0,\\infty[$ y recorrido $\\R$. Su asíntota vertical es $x=0$. Además:</p><ul><li>si $a>1$, $\\log_a$ es estrictamente creciente;</li><li>si $0<a<1$, $\\log_a$ es estrictamente decreciente;</li><li>en ambos casos es biyectiva y su inversa es $a^x$.</li></ul>" },
      { tipo: "nota", titulo: "Dominio antes que propiedades (Stewart §4.3)", html: "<p>Antes de aplicar una ley de logaritmos hay que exigir que cada argumento sea positivo. Por ejemplo, $\\ln(x^2)$ está definido para todo $x\\neq 0$, pero $2\\ln x$ solo para $x>0$. Aunque $\\ln(x^2)=2\\ln|x|$, la igualdad $\\ln(x^2)=2\\ln x$ es falsa para $x<0$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> un logaritmo convierte multiplicaciones en sumas y potencias en multiplicaciones. Esa es la razón por la que sirve para despejar exponentes y para manejar números muy grandes o muy pequeños.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Dominio de un logaritmo con cuadrática",
        enunciado: "<p>Determine el dominio de $f(x)=\\ln(4-x^2)$.</p>",
        concepto: "El argumento del logaritmo debe ser estrictamente positivo; se resuelve una inecuación cuadrática.",
        desarrollo: [
          "<b>Paso 1.</b> Se necesita $4-x^2>0$.",
          "<b>Paso 2.</b> Factorizamos: $(2-x)(2+x)>0$.",
          "<b>Paso 3.</b> Los puntos críticos son $x=-2$ y $x=2$. La parábola $4-x^2$ abre hacia abajo y es positiva entre sus raíces.",
          "<b>Paso 4.</b> Por lo tanto, $-2<x<2$.",
          "<b>Paso 5.</b> El dominio es el intervalo abierto $(-2,2)$; los extremos se excluyen porque en ellos el argumento vale $0$ y $\\ln(0)$ no está definido."
        ],
        respuesta: "$\\operatorname{Dom}(f)=(-2,2)$."
      },
      {
        titulo: "Expandir un logaritmo",
        enunciado: "<p>Expanda $\\log_5\\sqrt{\\dfrac{x-1}{x+1}}$ usando las leyes de los logaritmos e indique el dominio.</p>",
        concepto: "Se combinan la ley de la raíz como potencia, la del cuociente y la del producto, cuidando el dominio.",
        desarrollo: [
          "<b>Paso 1.</b> La raíz cuadrada es una potencia: $\\sqrt{\\dfrac{x-1}{x+1}}=\\left(\\dfrac{x-1}{x+1}\\right)^{1/2}$.",
          "<b>Paso 2.</b> Por la ley de la potencia: $\\log_5\\left(\\dfrac{x-1}{x+1}\\right)^{1/2}=\\dfrac12\\log_5\\left(\\dfrac{x-1}{x+1}\\right)$.",
          "<b>Paso 3.</b> Por la ley del cuociente: $\\dfrac12\\left[\\log_5(x-1)-\\log_5(x+1)\\right]$.",
          "<b>Paso 4.</b> Dominio de la expresión original: se necesita $\\dfrac{x-1}{x+1}>0$. Esto ocurre si $x>1$ o $x<-1$.",
          "<b>Paso 5.</b> Para separar en $\\log_5(x-1)-\\log_5(x+1)$ se necesita $x-1>0$ y $x+1>0$, es decir, $x>1$. Por eso la expansión vale en $(1,\\infty)$; si $x<-1$ habría que usar logaritmos de valores absolutos."
        ],
        respuesta: "$\\dfrac12\\left[\\log_5(x-1)-\\log_5(x+1)\\right]$, válida para $x>1$. La expresión original también está definida para $x<-1$."
      },
      {
        titulo: "Combinar en un solo logaritmo",
        enunciado: "<p>Escriba como un solo logaritmo $4\\log x-\\dfrac13\\log(x^2+1)+2\\log(x-1)$.</p>",
        concepto: "Se usan las leyes en sentido inverso: coeficiente como exponente, suma como producto y resta como cuociente.",
        desarrollo: [
          "<b>Paso 1.</b> Los coeficientes pasan a exponente: $\\log(x^4)-\\log\\left((x^2+1)^{1/3}\\right)+\\log\\left((x-1)^2\\right)$.",
          "<b>Paso 2.</b> La suma de logaritmos es el logaritmo del producto: $\\log\\left(x^4(x-1)^2\\right)-\\log\\left((x^2+1)^{1/3}\\right)$.",
          "<b>Paso 3.</b> La resta es el logaritmo del cuociente: $\\log\\left(\\dfrac{x^4(x-1)^2}{(x^2+1)^{1/3}}\\right)$.",
          "<b>Paso 4.</b> El dominio exige $x>0$ y $x-1>0$, es decir, $x>1$."
        ],
        respuesta: "$\\log\\left(\\dfrac{x^4(x-1)^2}{\\sqrt[3]{x^2+1}}\\right)$, con $x>1$."
      }
    ],
    ejercicios: [
      {
        titulo: "Calcular con cambio de base",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\log_3(20)$ usando logaritmo natural y aproxime a tres decimales.</p>",
        concepto: "Se aplica la fórmula $\\log_a(x)=\\dfrac{\\ln x}{\\ln a}$.",
        pista: "Use la calculadora para $\\ln 20$ y $\\ln 3$.",
        desarrollo: [
          "Por cambio de base: $\\log_3(20)=\\dfrac{\\ln 20}{\\ln 3}$.",
          "Calculamos $\\ln 20\\approx 2,995732$ y $\\ln 3\\approx 1,098612$.",
          "Dividiendo: $\\dfrac{2,995732}{1,098612}\\approx 2,726833$."
        ],
        respuesta: "$\\log_3(20)\\approx 2,727$."
      },
      {
        titulo: "Dominio con logaritmo",
        dificultad: "basico",
        enunciado: "<p>Determine el dominio de $g(x)=\\ln(9-x^2)$.</p>",
        concepto: "El argumento debe ser positivo; se resuelve $9-x^2>0$.",
        pista: "Factorice como diferencia de cuadrados.",
        desarrollo: [
          "Se necesita $9-x^2>0$, es decir, $(3-x)(3+x)>0$.",
          "Los puntos críticos son $-3$ y $3$; la parábola abre hacia abajo y es positiva entre ellos.",
          "Por lo tanto, $-3<x<3$."
        ],
        respuesta: "$\\operatorname{Dom}(g)=(-3,3)$."
      },
      {
        titulo: "Expandir con raíces",
        dificultad: "intermedio",
        enunciado: "<p>Expanda $\\log\\dfrac{\\sqrt{x}\\,\\sqrt{y}}{\\sqrt{z}}$ suponiendo $x,y,z>0$.</p>",
        concepto: "Se combinan las leyes del producto, cuociente y potencia.",
        pista: "Escriba cada raíz como exponente $1/2$.",
        desarrollo: [
          "El cuociente da $\\log(\\sqrt{x}\\sqrt{y})-\\log(\\sqrt{z})$.",
          "El producto da $\\log(\\sqrt{x})+\\log(\\sqrt{y})-\\log(\\sqrt{z})$.",
          "Cada raíz aporta un factor $\\frac12$: $\\dfrac12\\log x+\\dfrac12\\log y-\\dfrac12\\log z$.",
          "Es decir, $\\dfrac12\\left(\\log x+\\log y-\\log z\\right)$."
        ],
        respuesta: "$\\dfrac12\\left(\\log x+\\log y-\\log z\\right)$."
      },
      {
        titulo: "Inversa de una función logarítmica",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f(x)=\\log_2(x-3)+1$. Determine su dominio, recorrido e inversa.</p>",
        concepto: "El logaritmo es la inversa de la exponencial; para despejar se aplica la exponencial en base $2$.",
        pista: "Aísle primero el logaritmo y luego use $2^{\\log_2 u}=u$.",
        desarrollo: [
          "El argumento debe ser positivo: $x-3>0$, luego $\\operatorname{Dom}(f)=(3,\\infty)$.",
          "El recorrido de un logaritmo es $\\R$; sumar $1$ no lo cambia: $\\operatorname{Rec}(f)=\\R$.",
          "Escribimos $y=\\log_2(x-3)+1$, entonces $y-1=\\log_2(x-3)$.",
          "Aplicando exponencial en base $2$: $2^{y-1}=x-3$.",
          "Así $x=2^{y-1}+3$; intercambiando variables, $f^{-1}(x)=2^{x-1}+3$.",
          "El dominio de $f^{-1}$ es $\\R$ y su recorrido es $(3,\\infty)$, como corresponde."
        ],
        respuesta: "$f^{-1}(x)=2^{x-1}+3$, con dominio $\\R$ y recorrido $(3,\\infty)$."
      },
      {
        titulo: "Inversa con dos logaritmos",
        dificultad: "avanzado",
        enunciado: "<p>Sea $f(x)=\\log_2\\big(3\\log(10x)-2\\big)$, donde $\\log$ denota logaritmo en base $10$. Determine el dominio y la inversa de $f$.</p>",
        concepto: "Se deben encadenar dos condiciones de dominio y luego despejar aplicando exponenciales sucesivas, respetando las bases.",
        pista: "Primero $10x>0$; después $3\\log(10x)-2>0$. Para la inversa, aplique $2^{(\\cdot)}$ y luego $10^{(\\cdot)}$.",
        desarrollo: [
          "Dominio: se necesita $10x>0$, es decir, $x>0$.",
          "Además, el argumento del logaritmo externo debe ser positivo: $3\\log(10x)-2>0$, o sea $\\log(10x)>\\dfrac23$.",
          "Como la base $10$ es mayor que $1$, la exponencial es creciente: $10x>10^{2/3}$, luego $x>10^{-1/3}$.",
          "Así, $\\operatorname{Dom}(f)=\\left(10^{-1/3},\\infty\\right)$.",
          "Para la inversa: $y=\\log_2(3\\log(10x)-2)\\Rightarrow 2^y=3\\log(10x)-2$.",
          "Entonces $\\log(10x)=\\dfrac{2^y+2}{3}$, y al aplicar exponencial en base $10$: $10x=10^{(2^y+2)/3}$.",
          "Finalmente $x=10^{(2^y+2)/3-1}$. Intercambiando variables: $f^{-1}(x)=10^{(2^x+2)/3-1}$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\left(10^{-1/3},\\infty\\right)$ y $f^{-1}(x)=10^{(2^x+2)/3-1}$, con dominio $\\R$."
      }
    ],
    erroresComunes: [
      "Calcular $\\ln(0)$ o $\\ln$ de un número negativo; el dominio es $]0,\\infty[$.",
      "Usar $\\ln(x+y)=\\ln x+\\ln y$, que es falso; la ley válida es para el producto.",
      "Simplificar $\\ln(x^2)=2\\ln x$ sin restringir a $x>0$; lo correcto es $2\\ln|x|$.",
      "Olvidar que la base debe cumplir $a>0$ y $a\\neq 1$.",
      "Confundir $\\log_a x$ con $\\dfrac{\\ln a}{\\ln x}$ al cambiar de base."
    ],
    checklist: [
      "Sé explicar que $\\ln$ es la inversa de $e^x$ y escribir la equivalencia $y=\\ln x\\Leftrightarrow e^y=x$.",
      "Sé calcular $\\ln 1$, $\\ln e$, $\\ln(e^t)$ y $e^{\\ln x}$.",
      "Sé aplicar las tres leyes de los logaritmos en ambos sentidos.",
      "Sé determinar el dominio de una expresión logarítmica antes de simplificar.",
      "Sé cambiar de base y calcular logaritmos con la calculadora.",
      "Sé graficar $\\ln x$ y $\\log_a x$ identificando la asíntota vertical y la monotonía según la base."
    ],
    autoevaluacion: [
      { pregunta: "$\\ln(e^3)$ vale:", opciones: ["$3$", "$\\ln 3$", "$1/3$", "$e^3$"], correcta: 0, explicacion: "Por ser funciones inversas, $\\ln(e^t)=t$ para todo real $t$." },
      { pregunta: "El dominio de $\\ln(x-5)$ es:", opciones: ["$\\R$", "$[5,\\infty)$", "$(5,\\infty)$", "$(-\\infty,5)$"], correcta: 2, explicacion: "Se necesita $x-5>0$, es decir, $x>5$." },
      { pregunta: "$\\log_2(8)+\\log_2(4)$ es igual a:", opciones: ["$6$", "$32$", "$\\log_2(12)$", "$5$"], correcta: 3, explicacion: "$\\log_2 8=3$ y $\\log_2 4=2$; la suma es $5$. También $\\log_2(32)=5$." },
      { pregunta: "La asíntota vertical de $y=\\ln(x)$ es:", opciones: ["$x=1$", "$x=0$", "$y=0$", "$y=1$"], correcta: 1, explicacion: "Cuando $x\\to 0^+$, $\\ln x\\to -\\infty$; el eje $y$ es asíntota vertical." },
      { pregunta: "$\\log_5(2)$ expresado con logaritmo natural es:", opciones: ["$5\\ln 2$", "$\\dfrac{\\ln 5}{\\ln 2}$", "$\\dfrac{\\ln 2}{\\ln 5}$", "$\\ln 2-\\ln 5$"], correcta: 2, explicacion: "La fórmula de cambio de base es $\\log_a x=\\dfrac{\\ln x}{\\ln a}$." },
      { pregunta: "Si $0<a<1$, la función $\\log_a(x)$ es:", opciones: ["Constante", "No está definida", "Estrictamente creciente", "Estrictamente decreciente"], correcta: 3, explicacion: "Al invertir una exponencial de base menor que $1$, que decrece, el logaritmo también decrece." }
    ],
    resumen: [
      "El logaritmo natural $\\ln$ es la inversa de $e^x$: $y=\\ln x\\Leftrightarrow e^y=x$, con dominio $]0,\\infty[$ y asíntota vertical $x=0$.",
      "Las leyes $\\ln(xy)=\\ln x+\\ln y$, $\\ln(x/y)=\\ln x-\\ln y$ y $\\ln(x^z)=z\\ln x$ permiten expandir y combinar expresiones, siempre dentro del dominio.",
      "El logaritmo en base $a$ se define por $\\log_a x=\\dfrac{\\ln x}{\\ln a}$; es creciente si $a>1$ y decreciente si $0<a<1$."
    ],
    referencias: [
      { titulo: "Clase 17 — Función logaritmo (PDF)", ruta: "recursos/clases/clase-17.pdf" },
      { titulo: "Apunte Clase 18 (PDF)", ruta: "recursos/apuntes/apunte-clase-18.pdf" },
      { titulo: "Guía 8 — Logaritmo y exponencial (PDF)", ruta: "recursos/guias/guia-08-logaritmo-exponencial.pdf" },
      { titulo: "Stewart, Precálculo (Cap. 4.3–4.4)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
