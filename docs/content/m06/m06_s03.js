/* Módulo 6 · Sección 3 — I4: gráficas de polinomios y racionales */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s03", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 36,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I4: gráficas de polinomios y racionales",
    objetivo: "Esbozar gráficas de polinomios y funciones racionales a partir de ceros, multiplicidades, signos, asíntotas y comportamiento en el infinito, como se exige en la Interrogación 4.",
    conexion: "Necesitas recordar factorización, tabla de signos y transformaciones de funciones. La I4 combina todo eso en un solo bosquejo.",
    fuente: "I4 2020–2026 · Clases 11–12 · Apuntes 13–14",
    prerrequisitos: ["Factorización de polinomios", "Tabla de signos", "Asíntotas verticales y horizontales", "Transformaciones de funciones"],
    teoria: [
      { tipo: "texto", html: "<p>La <b>Interrogación 4</b> pide típicamente <b>esbozar</b> una función: no basta con la forma global, hay que identificar ceros, signos, intersección con el eje $Y$, asíntotas y comportamiento cerca de ellas. Cuando la función es racional, además se analiza si es o no inyectiva con el test de la recta horizontal.</p>" },
      { tipo: "definicion", titulo: "Ceros y multiplicidad", html: "<p>Si $P(x)=a(x-r_1)^{m_1}\\cdots(x-r_k)^{m_k}$, decimos que $r_i$ es una raíz de <b>multiplicidad</b> $m_i$. Cerca de $x=r_i$, el factor $(x-r_i)^{m_i}$ domina el comportamiento:</p><p>si $m_i$ es <b>impar</b>, la gráfica cruza el eje $X$; si $m_i$ es <b>par</b>, la gráfica lo toca y rebota.</p>" },
      { tipo: "teorema", titulo: "Comportamiento en el infinito de un polinomio", html: "<p>Para $P(x)=a_nx^n+\\cdots+a_0$ con $a_n\\neq0$: si $n$ es par, ambos extremos van hacia el mismo lado (el signo de $a_n$); si $n$ es impar, los extremos van hacia lados opuestos. En cualquier caso, para $|x|$ grande manda el término $a_nx^n$.</p>" },
      { tipo: "teorema", titulo: "Asíntotas de una función racional", html: "<p>Sea $r(x)=\\frac{P(x)}{Q(x)}$ con $P,Q$ sin factores comunes.</p><p><b>Verticales:</b> en los ceros de $Q$ que no son ceros de $P$.</p><p><b>Horizontales:</b> si $\\deg P<\\deg Q$, es $y=0$; si $\\deg P=\\deg Q$, es $y=\\frac{a_n}{b_n}$ (cociente de coeficientes principales); si $\\deg P>\\deg Q$, no hay asíntota horizontal (puede haber oblicua).</p>" },
      { tipo: "nota", titulo: "La rutina de bosquejo (Clase 12)", html: "<p>Orden recomendado: <b>(1)</b> dominio y asíntotas verticales; <b>(2)</b> ceros y multiplicidades; <b>(3)</b> intersección con el eje $Y$; <b>(4)</b> asíntota horizontal; <b>(5)</b> tabla de signos; <b>(6)</b> límites laterales cerca de cada asíntota vertical; <b>(7)</b> unir todo en un bosquejo. Escribir la tabla de signos es puntaje directo en la pauta.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una asíntota vertical es una muralla donde la función se dispara a $+\\infty$ o $-\\infty$; una asíntota horizontal es el nivel al que la curva se acerca cuando $x$ se va muy a la derecha o muy a la izquierda. Los ceros dicen dónde la curva corta el eje $X$ y los signos dicen si va por arriba o por abajo.</div>" },
      { tipo: "tabla", titulo: "Lectura rápida de una racional", headers: ["Elemento", "Cómo se calcula", "Ejemplo $r(x)=\\frac{x-1}{(x-3)(x+2)}$"], rows: [["Ceros", "$P(x)=0$", "$x=1$"], ["Eje $Y$", "evaluar en $0$", "$r(0)=\\frac16$"], ["Asíntotas verticales", "ceros de $Q$ no cancelados", "$x=3$, $x=-2$"], ["Asíntota horizontal", "comparar grados", "$y=0$"], ["Signos", "tabla de signos", "$-,\\,+,\\,-,\\,+$"]] },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Bosquejo de r(x) = (x−1)/[(x−3)(x+2)]", funciones: [ { f: function (x) { return (x - 1) / ((x - 3) * (x + 2)); }, desde: -6, hasta: 6, label: "r(x)", color: "#1e5eff" } ], asintotas: [ { tipo: "vertical", x: 3 }, { tipo: "vertical", x: -2 }, { tipo: "horizontal", y: 0 } ], xlabel: "x", ylabel: "y", rangeX: [-6, 6], rangeY: [-5, 5] } }
    ],
    ejemplos: [
      {
        titulo: "I4 2023-1 · P2 — Análisis completo de una función racional",
        enunciado: "<p>Considere $r(x)=\\dfrac{x-1}{x^2-x-6}$.</p><p>(a) Determine ceros, signos e intersección con el eje $Y$. (b) Determine asíntotas verticales y horizontales. (c) Trace la gráfica.</p>",
        concepto: "Se factoriza el denominador, se identifican ceros y asíntotas, y se arma una tabla de signos. La asíntota horizontal se decide comparando grados.",
        desarrollo: [
          "<b>Paso 1. Factorizar.</b> $x^2-x-6=(x-3)(x+2)$, luego $r(x)=\\dfrac{x-1}{(x-3)(x+2)}$.",
          "<b>Paso 2. Cero.</b> El numerador se anula en $x=1$; el denominador no, así que hay un cero en $x=1$.",
          "<b>Paso 3. Intersección con el eje $Y$.</b> $r(0)=\\dfrac{-1}{(-3)(2)}=\\dfrac16$. El punto es $\\left(0,\\frac16\\right)$.",
          "<b>Paso 4. Asíntotas verticales.</b> El denominador se anula en $x=3$ y $x=-2$; el numerador no se anula allí. Esas son las asíntotas verticales.",
          "<b>Paso 5. Asíntota horizontal.</b> El grado del numerador es $1$ y el del denominador es $2$, así que $y=0$.",
          "<b>Paso 6. Tabla de signos.</b> Puntos críticos $-2,1,3$. En $(-\\infty,-2)$ el cociente es negativo; en $(-2,1)$ positivo; en $(1,3)$ negativo; en $(3,\\infty)$ positivo.",
          "<b>Paso 7. Bosquejo.</b> La curva viene desde abajo cerca de $x=-2^-$, sube, corta el eje $Y$ en $\\frac16$, pasa por $(1,0)$ y cae hacia $-\\infty$ cerca de $x=3^-$. A la derecha de $x=3$ viene desde $+\\infty$ y se acerca a $0$."
        ],
        respuesta: "Cero $x=1$; corte en $Y$: $\\left(0,\\frac16\\right)$; asíntotas verticales $x=3$ y $x=-2$; asíntota horizontal $y=0$."
      },
      {
        titulo: "I4 2020-1 · P1 — Polinomio con multiplicidades",
        enunciado: "<p>Esboce la gráfica de $p(x)=2x(x-1)^3(x-2)^2(x-3)$.</p>",
        concepto: "El signo y el comportamiento en cada raíz dependen de la multiplicidad. El grado y el coeficiente principal determinan los extremos de la gráfica.",
        desarrollo: [
          "<b>Paso 1. Grado y extremos.</b> El grado es $1+3+2+1=7$ (impar) y el coeficiente principal es $2>0$. Por lo tanto, cuando $x\\to-\\infty$, $p(x)\\to-\\infty$, y cuando $x\\to+\\infty$, $p(x)\\to+\\infty$.",
          "<b>Paso 2. Raíces y multiplicidades.</b> $x=0$ (simple, cruza), $x=1$ (multiplicidad $3$, cruza aplanándose), $x=2$ (multiplicidad $2$, toca y rebota), $x=3$ (simple, cruza).",
          "<b>Paso 3. Intersección con el eje $Y$.</b> $p(0)=0$.",
          "<b>Paso 4. Signos por intervalos.</b> Los factores de multiplicidad par no cambian el signo. Se obtiene: negativo en $(-\\infty,0)$, positivo en $(0,1)$, negativo en $(1,2)$, negativo en $(2,3)$ y positivo en $(3,\\infty)$.",
          "<b>Paso 5. Bosquejo.</b> Viene desde $-\\infty$, cruza en $0$, sube y cruza en $1$; en $2$ toca el eje y vuelve hacia abajo; en $3$ cruza y se va a $+\\infty$."
        ],
        respuesta: "Grado $7$ con extremos $-\\infty$ y $+\\infty$; cruza en $0,1,3$ y rebota en $2$; signos $-,+,-,-,+$."
      }
    ],
    ejercicios: [
      {
        titulo: "I4 2025-1 · P2 — Racional con asíntota horizontal no nula",
        dificultad: "intermedio",
        enunciado: "<p>Considere $f(x)=\\dfrac{x^2-3x-4}{2x^2+4x}$.</p><p>(a) Determine las asíntotas verticales. (b) Determine la asíntota horizontal. (c) Trace la gráfica. (d) ¿Es $f$ inyectiva? Justifique.</p>",
        concepto: "Se factorizan numerador y denominador; las asíntotas verticales son los ceros no cancelados del denominador y la horizontal se obtiene del cociente de coeficientes principales. La inyectividad se decide con el test de la recta horizontal.",
        pista: "Factorice: $x^2-3x-4=(x-4)(x+1)$ y $2x^2+4x=2x(x+2)$.",
        desarrollo: [
          "<b>Paso 1. Factorizar.</b> $f(x)=\\dfrac{(x-4)(x+1)}{2x(x+2)}$.",
          "<b>Paso 2. Asíntotas verticales.</b> El denominador se anula en $x=0$ y $x=-2$; el numerador no se anula allí. Son asíntotas verticales.",
          "<b>Paso 3. Asíntota horizontal.</b> Numerador y denominador tienen grado $2$; el cociente de coeficientes principales es $\\frac12$. Así, $y=\\frac12$.",
          "<b>Paso 4. Ceros y signos.</b> Ceros en $x=4$ y $x=-1$. La tabla de signos da $+,-,+,-,+$ en $(-\\infty,-2),(-2,-1),(-1,0),(0,4),(4,\\infty)$.",
          "<b>Paso 5. Bosquejo.</b> La curva se acerca a $y=\\frac12$ en ambos extremos, tiene murallas en $x=-2$ y $x=0$, y corta el eje $X$ en $-1$ y $4$.",
          "<b>Paso 6. Inyectividad.</b> $f(-1)=0$ y $f(4)=0$: dos entradas distintas producen la misma salida. Por lo tanto, por el test de la recta horizontal, $f$ no es inyectiva."
        ],
        respuesta: "Asíntotas verticales $x=0$ y $x=-2$; horizontal $y=\\frac12$; $f$ no es inyectiva."
      },
      {
        titulo: "I4 2025-1 · P1 — Transformaciones de $1/x$",
        dificultad: "basico",
        enunciado: "<p>La gráfica de $f(x)=-1-\\dfrac1{2-x}$ se obtiene a partir de $g(x)=\\dfrac1x$ por transformaciones. Identifique las transformaciones en orden y grafique, indicando intersecciones con los ejes.</p>",
        concepto: "Se reescribe la expresión para reconocer traslaciones y reflexiones. Es clave simplificar primero: dos expresiones equivalentes pueden sugerir rutinas distintas.",
        pista: "Observe que $-\\frac1{2-x}=\\frac1{x-2}$, así que $f(x)=\\frac1{x-2}-1$.",
        desarrollo: [
          "<b>Paso 1. Simplificar.</b> $-\\dfrac1{2-x}=\\dfrac1{x-2}$, luego $f(x)=\\dfrac1{x-2}-1$.",
          "<b>Paso 2. Primera transformación.</b> $T_1(x)=g(x-2)=\\dfrac1{x-2}$: traslación de $g$ dos unidades a la derecha.",
          "<b>Paso 3. Segunda transformación.</b> $T_2(x)=T_1(x)-1=\\dfrac1{x-2}-1$: traslación una unidad hacia abajo.",
          "<b>Paso 4. Asíntotas.</b> Vertical $x=2$; horizontal $y=-1$.",
          "<b>Paso 5. Intersecciones.</b> Con el eje $Y$: $f(0)=\\frac1{-2}-1=-\\frac32$. Con el eje $X$: $\\frac1{x-2}-1=0\\Rightarrow x-2=1\\Rightarrow x=3$."
        ],
        respuesta: "$f(x)=\\frac1{x-2}-1$: traslación derecha $2$ y abajo $1$; corta el eje $Y$ en $-\\frac32$ y el eje $X$ en $3$."
      },
      {
        titulo: "I4 2024-1 · P2 — Asíntota vertical con denominador cuadrado",
        dificultad: "intermedio",
        enunciado: "<p>Considere $r(x)=\\dfrac{5x+20}{x^2+10x+25}$ definida en su mayor dominio posible.</p><p>(a) Determine, si existen, sus asíntotas verticales. (b) Determine, si existen, sus asíntotas horizontales.</p>",
        concepto: "Un factor cuadrado en el denominador sigue produciendo asíntota vertical si el numerador no se anula en ese punto. El grado del denominador es mayor, por lo que la horizontal es $y=0$.",
        pista: "Factorice el denominador como $(x+5)^2$ y evalúe el numerador en $-5$.",
        desarrollo: [
          "<b>Paso 1. Factorizar.</b> $r(x)=\\dfrac{5(x+4)}{(x+5)^2}$.",
          "<b>Paso 2. Ceros del denominador.</b> El único es $x=-5$ (doble).",
          "<b>Paso 3. Verificar el numerador.</b> En $x=-5$ el numerador vale $5(-1)=-5\\neq0$, así que no se cancela.",
          "<b>Paso 4. Concluir la vertical.</b> $x=-5$ es asíntota vertical.",
          "<b>Paso 5. Horizontal.</b> $\\deg P=1<\\deg Q=2$, luego $y=0$ es asíntota horizontal."
        ],
        respuesta: "Asíntota vertical $x=-5$; asíntota horizontal $y=0$."
      },
      {
        titulo: "I4 2020-1 · P2 — Racional lineal sobre lineal",
        dificultad: "basico",
        enunciado: "<p>Esboce la gráfica de $f(x)=\\dfrac{x+2}{2x-1}$ indicando asíntota horizontal, asíntota vertical y límites laterales.</p>",
        concepto: "Para una racional con grados iguales, la asíntota horizontal es el cociente de coeficientes principales. La asíntota vertical se estudia con límites laterales.",
        pista: "Divida: $\\frac{x+2}{2x-1}=\\frac12+\\frac{5/2}{2x-1}$.",
        desarrollo: [
          "<b>Paso 1. Asíntota horizontal.</b> Ambos grados son $1$; el cociente de coeficientes principales es $\\frac12$, luego $y=\\frac12$.",
          "<b>Paso 2. Asíntota vertical.</b> $2x-1=0\\Rightarrow x=\\frac12$.",
          "<b>Paso 3. Límites laterales.</b> $f(x)=\\frac12+\\frac{5}{2(2x-1)}$. Si $x\\to\\frac12^+$, el último término tiende a $+\\infty$; si $x\\to\\frac12^-$, a $-\\infty$.",
          "<b>Paso 4. Intersecciones.</b> Eje $X$: $x=-2$. Eje $Y$: $f(0)=-2$."
        ],
        respuesta: "$y=\\frac12$ es asíntota horizontal; $x=\\frac12$ es asíntota vertical, con $+\\infty$ por la derecha y $-\\infty$ por la izquierda."
      },
      {
        titulo: "Examen 2020-1 · P3 — Racional con valor absoluto",
        dificultad: "avanzado",
        enunciado: "<p>Esboce la gráfica de $f(x)=\\dfrac{|x|^3-x^3}{x+1}$.</p>",
        concepto: "Se elimina el valor absoluto por tramos. Para $x\\ge0$ la función se anula; para $x<0$ queda una racional cúbica sobre lineal. Luego se estudian asíntota vertical y comportamiento en el infinito.",
        pista: "Si $x\\ge0$, $|x|^3=x^3$; si $x<0$, $|x|^3=-x^3$.",
        desarrollo: [
          "<b>Paso 1. Caso $x\\ge0$.</b> $|x|^3=x^3$, luego $f(x)=0$ para todo $x\\ge0$ (con $x\\neq-1$, que no afecta).",
          "<b>Paso 2. Caso $x<0$.</b> $|x|^3=-x^3$, luego $f(x)=\\dfrac{-2x^3}{x+1}$.",
          "<b>Paso 3. Asíntota vertical.</b> En $x=-1$ el denominador se anula y el numerador vale $2\\neq0$.",
          "<b>Paso 4. Límites laterales.</b> Si $x\\to-1^+$, $x+1>0$ y $-2x^3>0$, luego $f\\to+\\infty$. Si $x\\to-1^-$, $x+1<0$, luego $f\\to-\\infty$.",
          "<b>Paso 5. Comportamiento en $-\\infty$.</b> $\\dfrac{-2x^3}{x+1}\\sim-2x^2\\to-\\infty$.",
          "<b>Paso 6. Bosquejo.</b> Para $x\\ge0$ la gráfica es el eje $X$; para $x<0$ viene desde $-\\infty$, pasa por $(-1)$ con una muralla y se acerca a $0$ por la izquierda de $0$."
        ],
        respuesta: "$f(x)=0$ si $x\\ge0$; $f(x)=\\frac{-2x^3}{x+1}$ si $x<0$; asíntota vertical $x=-1$ con $+\\infty$ por la derecha y $-\\infty$ por la izquierda."
      },
      {
        titulo: "I2 2025-2 · P3 — Ceros, signos y asíntotas",
        dificultad: "intermedio",
        enunciado: "<p>Determine ceros, signos y asíntotas de $f(x)=\\dfrac{x^2+2x-8}{x^2-4x+3}$ y bosqueje su gráfica.</p>",
        concepto: "Factorización completa, tabla de signos y comparación de grados. Es el formato exacto de la I4 de 2025-2.",
        pista: "Factorice: $x^2+2x-8=(x+4)(x-2)$ y $x^2-4x+3=(x-1)(x-3)$.",
        desarrollo: [
          "<b>Paso 1. Factorizar.</b> $f(x)=\\dfrac{(x+4)(x-2)}{(x-1)(x-3)}$.",
          "<b>Paso 2. Ceros.</b> $x=-4$ y $x=2$.",
          "<b>Paso 3. Asíntotas verticales.</b> $x=1$ y $x=3$.",
          "<b>Paso 4. Asíntota horizontal.</b> Grados iguales, coeficientes principales $1$ y $1$: $y=1$.",
          "<b>Paso 5. Tabla de signos.</b> Puntos críticos $-4,1,2,3$. Signos: $+,-,+,-,+$.",
          "<b>Paso 6. Bosquejo.</b> La curva corta el eje $X$ en $-4$ y $2$, tiene murallas en $1$ y $3$, y se acerca a $y=1$ en ambos extremos."
        ],
        respuesta: "Ceros $x=-4,2$; asíntotas verticales $x=1,3$; horizontal $y=1$; signos $+,-,+,-,+$."
      },
      {
        titulo: "I4 2023-1 · P1(b) — Forma normal y mínimo de una cuadrática",
        dificultad: "basico",
        enunciado: "<p>Sea $\\lambda\\in\\R$. Escriba $f(x)=3x^2+\\lambda x+10$ en forma normal y determine $\\lambda$ para que el valor mínimo de $f$ sea $-2$.</p>",
        concepto: "Completación de cuadrado. El vértice de $a(x-h)^2+k$ es $(h,k)$; si $a>0$, el valor mínimo es $k$.",
        pista: "$f(x)=3\\left(x+\\frac{\\lambda}{6}\\right)^2+10-\\frac{\\lambda^2}{12}$.",
        desarrollo: [
          "<b>Paso 1. Completar el cuadrado.</b> $f(x)=3\\left(x^2+\\frac{\\lambda}{3}x\\right)+10=3\\left(x+\\frac{\\lambda}{6}\\right)^2-\\frac{\\lambda^2}{12}+10$.",
          "<b>Paso 2. Identificar el mínimo.</b> Como $3>0$, el mínimo es $10-\\frac{\\lambda^2}{12}$.",
          "<b>Paso 3. Imponer la condición.</b> $10-\\frac{\\lambda^2}{12}=-2\\Rightarrow\\frac{\\lambda^2}{12}=12\\Rightarrow\\lambda^2=144$.",
          "<b>Paso 4. Resolver.</b> $\\lambda=\\pm12$."
        ],
        respuesta: "$f(x)=3\\left(x+\\frac{\\lambda}{6}\\right)^2+10-\\frac{\\lambda^2}{12}$; $\\lambda=\\pm12$."
      }
    ],
    erroresComunes: [
      "Decidir la asíntota horizontal solo mirando el término de mayor grado sin comparar los grados de numerador y denominador.",
      "Cancelar un factor del denominador y olvidar que el punto sigue fuera del dominio (puede quedar un «hueco», no una asíntota).",
      "Confundir multiplicidad par con «no hay raíz»: una raíz par existe, pero la gráfica rebota.",
      "Olvidar la intersección con el eje $Y$ o calcularla usando un $x$ distinto de $0$.",
      "Afirmar que una racional es inyectiva porque «pasa el test de la recta vertical»; el test de la vertical define función, no inyectividad."
    ],
    checklist: [
      "Factorizo completamente numerador y denominador antes de analizar una racional.",
      "Identifico ceros, multiplicidades y el comportamiento de la gráfica en cada uno.",
      "Calculo asíntotas verticales y horizontales con las reglas de grados.",
      "Construyo una tabla de signos completa y la uso para ubicar las ramas.",
      "Determino los límites laterales cerca de cada asíntota vertical.",
      "Decido inyectividad con el test de la recta horizontal, no con el de la vertical."
    ],
    autoevaluacion: [
      { pregunta: "La asíntota horizontal de $f(x)=\\frac{3x^2+1}{x^2-4}$ es:", opciones: ["$y=3$", "$y=\\frac14$", "no existe", "$y=0$"], correcta: 0, explicacion: "Los grados son iguales; el cociente de coeficientes principales es $\\frac31=3$." },
      { pregunta: "En $p(x)=(x-2)^4(x+1)$, la gráfica en $x=2$:", opciones: ["no está definida", "cruza el eje $X$", "toca el eje $X$ y rebota", "tiene una asíntota vertical"], correcta: 2, explicacion: "La multiplicidad $4$ es par: la gráfica toca el eje y vuelve al mismo lado." },
      { pregunta: "La función $r(x)=\\frac{x-1}{(x-3)(x+2)}$ tiene asíntotas verticales en:", opciones: ["no tiene", "$x=1$ solamente", "$x=-3$ y $x=2$", "$x=3$ y $x=-2$"], correcta: 3, explicacion: "Son los ceros del denominador que no anulan el numerador." },
      { pregunta: "Una función racional con $\\deg P<\\deg Q$ tiene asíntota horizontal:", opciones: ["$y=1$", "$y=0$", "no tiene", "$y=\\frac{a_n}{b_n}$"], correcta: 1, explicacion: "Al crecer $|x|$, el denominador domina y el cociente tiende a $0$." },
      { pregunta: "El polinomio $p(x)=-2x^4+x$ tiene, en $x\\to+\\infty$:", opciones: ["un comportamiento oscilante", "$p(x)\\to+\\infty$", "$p(x)\\to-\\infty$", "$p(x)\\to0$"], correcta: 2, explicacion: "El grado $4$ es par y el coeficiente principal $-2$ es negativo; ambos extremos van a $-\\infty$." },
      { pregunta: "Si $f(x)=\\frac1{x-2}-1$, sus asíntotas son:", opciones: ["$x=2$, $y=1$", "$x=-2$, $y=1$", "$x=-2$, $y=-1$", "$x=2$, $y=-1$"], correcta: 3, explicacion: "La traslación derecha $2$ mueve la vertical a $x=2$; la traslación abajo $1$ mueve la horizontal a $y=-1$." }
    ],
    resumen: [
      "Para polinomios, grado, coeficiente principal y multiplicidades determinan la forma global del bosquejo.",
      "Para racionales, ceros, asíntotas y tabla de signos son los cuatro elementos que siempre hay que exhibir.",
      "Un bosquejo correcto se construye por etapas y cada etapa deja rastro escrito: dominio, ceros, asíntotas, signos y límites laterales."
    ],
    referencias: [
      { titulo: "I4 2025-1 — Interrogación 4 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin4-mat1107.pdf" },
      { titulo: "I2 2025-2 — Pauta Interrogación 2", ruta: "recursos/pruebas/PRUEBAS/2025-2/i2-pauta.pdf" },
      { titulo: "I4 2023-1 — Solución Interrogación 4", ruta: "recursos/pruebas/PRUEBAS/2023-1/i4.pdf" },
      { titulo: "Clase 12 — Funciones racionales y asíntotas", ruta: "recursos/clases/clase-12.pdf" },
      { titulo: "Apunte 13 — Funciones racionales", ruta: "recursos/apuntes/apunte-clase-13.pdf" }
    ]
  });
})();
