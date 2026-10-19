/* Módulo 1 · Sección 7 — Raíces, promedios y completación de cuadrado */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s07", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 7,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Raíces, promedios y completación de cuadrado",
    objetivo: "Operar con raíces cuadradas, comparar los promedios aritmético, geométrico y armónico, y completar cuadrados para reescribir expresiones cuadráticas y resolver inecuaciones.",
    conexion: "Ya sabes resolver inecuaciones con raíces y usar el valor absoluto. Ahora profundizaremos en la raíz cuadrada, en sus aplicaciones a promedios y en una técnica algebraica que será clave para las parábolas.",
    fuente: "Apunte Clase 5 · Guía 2 · Clase 07",
    prerrequisitos: ["Valor absoluto", "Inecuaciones cuadráticas", "Productos notables", "Fracciones y recíprocos"],
    teoria: [
      { tipo: "texto", html: "<p>La raíz cuadrada aparece cada vez que queremos deshacer un cuadrado: al calcular distancias, al resolver $x^2=a$ o al normalizar datos. En esta sección estudiaremos su definición, su relación con el valor absoluto, tres promedios clásicos y la técnica de <b>completación de cuadrado</b>, que permite escribir cualquier cuadrática en una forma donde su mínimo o máximo se ve a simple vista.</p>" },
      { tipo: "definicion", titulo: "Raíz cuadrada", html: "<p>Sea $a\\ge0$. Decimos que $b\\ge0$ es la <b>raíz cuadrada</b> de $a$ si</p>$$b^2=a.$$<p>Se escribe $b=\\sqrt a$. La raíz cuadrada es única: si $b,c\\ge0$ y $b^2=c^2=a$, entonces $b=c$.</p><p><b>Por qué.</b> Si $b\\neq c$, uno es menor que el otro; supongamos $b<c$. Como ambos son no negativos, $b^2<c^2$, lo que contradice $b^2=c^2=a$.</p>" },
      { tipo: "teorema", titulo: "Existencia y propiedades básicas", html: "<p>Todo número no negativo tiene raíz cuadrada. Además:</p><ul><li>$\\sqrt{a^2}=|a|$ para todo $a\\in\\R$.</li><li>Si $0\\le a<b$, entonces $\\sqrt a<\\sqrt b$.</li><li>$\\sqrt{ab}=\\sqrt a\\sqrt b$ y $\\sqrt{\\dfrac ab}=\\dfrac{\\sqrt a}{\\sqrt b}$ para $a,b\\ge0$, $b>0$.</li></ul><p>La primera propiedad es la razón por la que $\\sqrt{(-3)^2}=3$ y no $-3$. La segunda dice que la raíz conserva el orden entre números no negativos.</p>" },
      { tipo: "definicion", titulo: "Tres promedios", html: "<p>Para $a,b>0$ se definen:</p>$$\\mathrm{PA}(a,b)=\\frac{a+b}{2}\\quad\\text{(aritmético)},$$$$\\mathrm{PG}(a,b)=\\sqrt{ab}\\quad\\text{(geométrico)},$$$$\\mathrm{PH}(a,b)=\\frac{2}{\\dfrac1a+\\dfrac1b}=\\frac{2ab}{a+b}\\quad\\text{(armónico)}.$$<p>Cada uno responde a una situación distinta: el aritmético reparte una suma, el geométrico reparte un producto y el armónico aparece al promediar velocidades o rendimientos cuando se recorre la misma distancia a velocidades diferentes.</p>" },
      { tipo: "teorema", titulo: "El orden de los promedios", html: "<p>Para $a,b>0$:</p>$$\\mathrm{PH}(a,b)\\le\\mathrm{PG}(a,b)\\le\\mathrm{PA}(a,b).$$<p>En símbolos:</p>$$\\frac{2}{\\dfrac1a+\\dfrac1b}\\le\\sqrt{ab}\\le\\frac{a+b}{2}.$$<p><b>Demostración de la segunda desigualdad.</b> Partimos de $(\\sqrt a-\\sqrt b)^2\\ge0$. Al desarrollar:</p>$$a-2\\sqrt{ab}+b\\ge0\\Longrightarrow a+b\\ge2\\sqrt{ab}\\Longrightarrow \\frac{a+b}{2}\\ge\\sqrt{ab}.$$<p>La igualdad ocurre si y solo si $a=b$. Para la primera desigualdad se aplica la misma idea a $\\dfrac1a$ y $\\dfrac1b$.</p>" },
      { tipo: "definicion", titulo: "Completación de cuadrado", html: "<p>Completar el cuadrado consiste en escribir una expresión $x^2+bx+c$ en la forma</p>$$(x+h)^2+k.$$<p>El procedimiento es:</p><ol><li>Tomar el coeficiente de $x$, dividirlo por $2$ y elevarlo al cuadrado.</li><li>Sumar y restar ese número.</li><li>Agrupar el trinomio cuadrado perfecto.</li></ol><p>Ejemplo: $x^2-6x+13=x^2-6x+9+4=(x-3)^2+4$. Como $(x-3)^2\\ge0$, esta expresión siempre es mayor o igual que $4$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> la raíz cuadrada es el lado de un cuadrado de área $a$. Los tres promedios son tres formas de resumir dos números: el aritmético es el punto medio, el geométrico es el lado del cuadrado con la misma área que un rectángulo de lados $a$ y $b$, y el armónico aparece al promediar velocidades. Completar el cuadrado es como encontrar el centro de una parábola: una vez escrita como $(x+h)^2+k$, el punto más bajo (o más alto) se lee de inmediato.</div>" },
      { tipo: "tabla", titulo: "Los promedios de 2 y 8", headers: ["Promedio", "Fórmula", "Valor para $a=2$, $b=8$"], rows: [["Aritmético", "$\\dfrac{a+b}{2}$", "$\\dfrac{2+8}{2}=5$"], ["Geométrico", "$\\sqrt{ab}$", "$\\sqrt{16}=4$"], ["Armónico", "$\\dfrac{2ab}{a+b}$", "$\\dfrac{32}{10}=3{,}2$"]] },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Completar el cuadrado revela el mínimo: y = x² − 6x + 13 = (x − 3)² + 4", funciones: [ { f: function (x) { return x * x - 6 * x + 13; }, desde: -1, hasta: 7, label: "y = x²−6x+13", color: "#1e5eff" } ], series: [ { x: [3], y: [4], label: "mínimo (3,4)", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "y", rangeX: [-1, 7], rangeY: [0, 18] } },
      { tipo: "nota", titulo: "Raíces y promedios en el apunte (Apunte Clase 5 · Guía 2)", html: "<p>El apunte de la Clase 5 define la raíz cuadrada, demuestra su unicidad, prueba que $\\sqrt{a^2}=|a|$ y presenta los tres promedios junto con la cadena $\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$. También incluye interpretaciones geométricas: el segmento de altura $\\sqrt{ab}$ en una semicircunferencia y la construcción de $\\sqrt a$ con regla y compás. La Guía 2 pide demostrar $|xy|=|x||y|$ y $\\big||x|-|y|\\big|\\le|x-y|$.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Calcular los tres promedios",
        enunciado: "<p>Para $a=2$ y $b=8$, calcule $\\mathrm{PA}$, $\\mathrm{PG}$ y $\\mathrm{PH}$, y verifique el orden entre ellos.</p>",
        concepto: "Se aplican las definiciones de los tres promedios y se comprueba la desigualdad $\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$.",
        desarrollo: [
          "<b>Paso 1.</b> Aritmético: $\\mathrm{PA}=\\dfrac{2+8}{2}=5$.",
          "<b>Paso 2.</b> Geométrico: $\\mathrm{PG}=\\sqrt{2\\cdot8}=\\sqrt{16}=4$.",
          "<b>Paso 3.</b> Armónico: $\\mathrm{PH}=\\dfrac{2\\cdot2\\cdot8}{2+8}=\\dfrac{32}{10}=3{,}2$.",
          "<b>Paso 4.</b> Comparamos: $3{,}2\\le4\\le5$, es decir, $\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$.",
          "<b>Paso 5.</b> La igualdad no se alcanza porque $a\\neq b$; si ambos fueran $5$, los tres promedios valdrían $5$."
        ],
        respuesta: "$\\mathrm{PA}=5$, $\\mathrm{PG}=4$, $\\mathrm{PH}=3{,}2$; se cumple $3{,}2\\le4\\le5$."
      },
      {
        titulo: "Completar el cuadrado para probar una desigualdad",
        enunciado: "<p>Demuestre que $x^2-6x+13>0$ para todo $x\\in\\R$.</p>",
        concepto: "Se completa el cuadrado para escribir la expresión como una suma de un cuadrado más una constante positiva.",
        desarrollo: [
          "<b>Paso 1.</b> Tomamos el coeficiente de $x$, que es $-6$; lo dividimos por $2$: $-3$; lo elevamos al cuadrado: $9$.",
          "<b>Paso 2.</b> Sumamos y restamos $9$: $x^2-6x+9-9+13$.",
          "<b>Paso 3.</b> Agrupamos: $(x-3)^2+4$.",
          "<b>Paso 4.</b> Como $(x-3)^2\\ge0$ para todo $x$, se sigue que $(x-3)^2+4\\ge4>0$.",
          "<b>Paso 5.</b> Por lo tanto, la expresión es positiva para todo real $x$; su valor mínimo es $4$, alcanzado en $x=3$."
        ],
        respuesta: "$x^2-6x+13=(x-3)^2+4>0$ para todo $x\\in\\R$."
      },
      {
        titulo: "Resolver una inecuación completando el cuadrado",
        enunciado: "<p>Resuelva $x^2-4x-1\\ge0$.</p>",
        concepto: "Se completa el cuadrado para llevar la inecuación a la forma $(x-h)^2\\ge k$ y luego se usa la definición de valor absoluto.",
        desarrollo: [
          "<b>Paso 1.</b> La expresión es $x^2-4x-1$.",
          "<b>Paso 2.</b> El coeficiente de $x$ es $-4$; su mitad es $-2$ y su cuadrado es $4$.",
          "<b>Paso 3.</b> Sumamos y restamos $4$: $x^2-4x+4-4-1=(x-2)^2-5$.",
          "<b>Paso 4.</b> La inecuación queda $(x-2)^2-5\\ge0$, es decir, $(x-2)^2\\ge5$.",
          "<b>Paso 5.</b> Esto equivale a $|x-2|\\ge\\sqrt5$.",
          "<b>Paso 6.</b> Por lo tanto, $x-2\\le-\\sqrt5$ o $x-2\\ge\\sqrt5$.",
          "<b>Paso 7.</b> Despejamos: $x\\le2-\\sqrt5$ o $x\\ge2+\\sqrt5$.",
          "<b>Paso 8.</b> Verificamos con $x=0$: $0-0-1=-1\\ge0$ es falso; con $x=5$: $25-20-1=4\\ge0$, correcto."
        ],
        respuesta: "$S=(-\\infty,2-\\sqrt5]\\cup[2+\\sqrt5,+\\infty)$."
      }
    ],
    ejercicios: [
      {
        titulo: "Evaluar raíces",
        dificultad: "basico",
        enunciado: "<p>Calcule: (a) $\\sqrt{49}$; &nbsp; (b) $\\sqrt{\\dfrac{81}{25}}$; &nbsp; (c) $\\sqrt{(-5)^2}$.</p>",
        concepto: "Se usa la definición de raíz cuadrada y la propiedad $\\sqrt{a^2}=|a|$.",
        pista: "En (c), primero calcula el cuadrado y luego la raíz; o aplica directamente $\\sqrt{a^2}=|a|$.",
        desarrollo: [
          "(a) $\\sqrt{49}=7$, porque $7^2=49$ y $7\\ge0$.",
          "(b) $\\sqrt{\\dfrac{81}{25}}=\\dfrac{\\sqrt{81}}{\\sqrt{25}}=\\dfrac95$.",
          "(c) $\\sqrt{(-5)^2}=\\sqrt{25}=5=|-5|$."
        ],
        respuesta: "(a) $7$; (b) $\\dfrac95$; (c) $5$."
      },
      {
        titulo: "Promedios de 4 y 9",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\mathrm{PA}$, $\\mathrm{PG}$ y $\\mathrm{PH}$ para $a=4$ y $b=9$.</p>",
        concepto: "Se aplican las tres fórmulas y se verifica que el armónico es el menor.",
        pista: "Para el armónico, usa $\\mathrm{PH}=\\dfrac{2ab}{a+b}$.",
        desarrollo: [
          "$\\mathrm{PA}=\\dfrac{4+9}{2}=\\dfrac{13}{2}=6{,}5$.",
          "$\\mathrm{PG}=\\sqrt{4\\cdot9}=\\sqrt{36}=6$.",
          "$\\mathrm{PH}=\\dfrac{2\\cdot4\\cdot9}{4+9}=\\dfrac{72}{13}\\approx5{,}54$.",
          "Se cumple $\\dfrac{72}{13}\\le6\\le\\dfrac{13}{2}$."
        ],
        respuesta: "$\\mathrm{PA}=6{,}5$; $\\mathrm{PG}=6$; $\\mathrm{PH}=\\dfrac{72}{13}$."
      },
      {
        titulo: "Completar el cuadrado y resolver",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $x^2+8x+7\\ge0$ completando el cuadrado.</p>",
        concepto: "Se reescribe la cuadrática como $(x+h)^2+k$ y se resuelve la inecuación resultante.",
        pista: "La mitad de $8$ es $4$ y su cuadrado es $16$.",
        desarrollo: [
          "Sumamos y restamos $16$: $x^2+8x+16-16+7=(x+4)^2-9$.",
          "La inecuación queda $(x+4)^2\\ge9$.",
          "Equivalentemente, $|x+4|\\ge3$.",
          "Entonces $x+4\\le-3$ o $x+4\\ge3$, es decir, $x\\le-7$ o $x\\ge-1$."
        ],
        respuesta: "$S=(-\\infty,-7]\\cup[-1,+\\infty)$."
      },
      {
        titulo: "La desigualdad entre promedios",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que para $a,b>0$ se cumple $\\sqrt{ab}\\le\\dfrac{a+b}{2}$.</p>",
        concepto: "Se usa que el cuadrado de un número real es no negativo y que la raíz conserva el orden entre no negativos.",
        pista: "Parte de $(\\sqrt a-\\sqrt b)^2\\ge0$.",
        desarrollo: [
          "$(\\sqrt a-\\sqrt b)^2\\ge0$.",
          "Desarrollamos: $a-2\\sqrt{ab}+b\\ge0$.",
          "Reordenamos: $a+b\\ge2\\sqrt{ab}$.",
          "Dividimos por $2>0$: $\\dfrac{a+b}{2}\\ge\\sqrt{ab}$.",
          "La igualdad se cumple si y solo si $\\sqrt a=\\sqrt b$, es decir, $a=b$."
        ],
        respuesta: "$\\sqrt{ab}\\le\\dfrac{a+b}{2}$, con igualdad si y solo si $a=b$."
      },
      {
        titulo: "El promedio armónico es el menor",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que para $a,b>0$ se cumple $\\mathrm{PH}(a,b)\\le\\mathrm{PG}(a,b)$.</p>",
        concepto: "Se aplica la desigualdad $\\mathrm{PG}\\le\\mathrm{PA}$ a los números $\\dfrac1a$ y $\\dfrac1b$, y luego se invierte la desigualdad.",
        pista: "Aplica $\\sqrt{uv}\\le\\dfrac{u+v}{2}$ con $u=\\dfrac1a$ y $v=\\dfrac1b$.",
        desarrollo: [
          "Como $a,b>0$, también $\\dfrac1a,\\dfrac1b>0$.",
          "Aplicamos $\\mathrm{PG}\\le\\mathrm{PA}$: $\\sqrt{\\dfrac1a\\cdot\\dfrac1b}\\le\\dfrac{\\dfrac1a+\\dfrac1b}{2}$.",
          "El lado izquierdo es $\\dfrac{1}{\\sqrt{ab}}$; el derecho es $\\dfrac{a+b}{2ab}$.",
          "Como todos los términos son positivos, invertimos y la desigualdad se invierte: $\\sqrt{ab}\\ge\\dfrac{2ab}{a+b}$.",
          "El lado derecho es exactamente $\\mathrm{PH}(a,b)$.",
          "Por lo tanto, $\\mathrm{PH}(a,b)\\le\\mathrm{PG}(a,b)$, con igualdad si y solo si $a=b$."
        ],
        respuesta: "$\\mathrm{PH}(a,b)=\\dfrac{2ab}{a+b}\\le\\sqrt{ab}=\\mathrm{PG}(a,b)$."
      }
    ],
    erroresComunes: [
      "Escribir $\\sqrt{a+b}=\\sqrt a+\\sqrt b$; la raíz no se distribuye sobre la suma.",
      "Simplificar $\\sqrt{x^2}=x$ sin valor absoluto; lo correcto es $\\sqrt{x^2}=|x|$.",
      "Confundir $\\mathrm{PH}$ con $\\dfrac{a+b}{2ab}$; la fórmula correcta es $\\dfrac{2ab}{a+b}$.",
      "Al completar el cuadrado, sumar el cuadrado de la mitad sin restarlo después, cambiando el valor de la expresión.",
      "Aplicar la desigualdad entre promedios sin verificar que $a,b>0$."
    ],
    checklist: [
      "Sé calcular raíces cuadradas exactas y simplificar expresiones con raíces.",
      "Sé explicar por qué $\\sqrt{x^2}=|x|$.",
      "Sé calcular los promedios aritmético, geométrico y armónico.",
      "Sé demostrar y usar la cadena $\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$.",
      "Sé completar el cuadrado en una expresión cuadrática.",
      "Sé usar la completación de cuadrado para resolver una inecuación cuadrática."
    ],
    autoevaluacion: [
      { pregunta: "El valor de $\\sqrt{(-7)^2}$ es:", opciones: ["$-7$", "$7$", "$49$", "$-49$"], correcta: 1, explicacion: "$\\sqrt{(-7)^2}=\\sqrt{49}=7=|{-7}|$." },
      { pregunta: "Si $a=3$ y $b=12$, el promedio geométrico es:", opciones: ["$6$", "$7{,}5$", "$4{,}8$", "$9$"], correcta: 0, explicacion: "$\\mathrm{PG}=\\sqrt{3\\cdot12}=\\sqrt{36}=6$." },
      { pregunta: "La expresión $x^2+10x+27$ se puede escribir como:", opciones: ["$(x+5)^2+2$", "$(x+5)^2+27$", "$(x+10)^2+2$", "$(x+5)^2-2$"], correcta: 0, explicacion: "$x^2+10x+27=x^2+10x+25+2=(x+5)^2+2$." },
      { pregunta: "Para $a,b>0$, el orden correcto de los promedios es:", opciones: ["$\\mathrm{PA}\\le\\mathrm{PG}\\le\\mathrm{PH}$", "$\\mathrm{PH}\\le\\mathrm{PA}\\le\\mathrm{PG}$", "$\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$", "$\\mathrm{PG}\\le\\mathrm{PH}\\le\\mathrm{PA}$"], correcta: 2, explicacion: "El armónico es el menor y el aritmético el mayor; la igualdad ocurre solo si $a=b$." },
      { pregunta: "El mínimo de $f(x)=x^2-6x+13$ es:", opciones: ["$13$", "$4$", "$3$", "$0$"], correcta: 1, explicacion: "$f(x)=(x-3)^2+4$, y el cuadrado es mínimo $0$ cuando $x=3$; el mínimo es $4$." },
      { pregunta: "La solución de $(x-2)^2\\ge5$ es:", opciones: ["$[2-\\sqrt5,2+\\sqrt5]$", "$(-\\infty,2-\\sqrt5]\\cup[2+\\sqrt5,+\\infty)$", "$[2+\\sqrt5,+\\infty)$", "$(-\\infty,2-\\sqrt5]$"], correcta: 1, explicacion: "Equivale a $|x-2|\\ge\\sqrt5$, es decir, $x\\le2-\\sqrt5$ o $x\\ge2+\\sqrt5$." }
    ],
    resumen: [
      "La raíz cuadrada de $a\\ge0$ es el único $b\\ge0$ con $b^2=a$; además $\\sqrt{a^2}=|a|$ y la raíz conserva el orden entre no negativos.",
      "Para $a,b>0$ los promedios cumplen $\\mathrm{PH}\\le\\mathrm{PG}\\le\\mathrm{PA}$, con igualdad solo cuando $a=b$.",
      "Completar el cuadrado reescribe $x^2+bx+c$ como $(x+h)^2+k$, lo que revela el mínimo o máximo y permite resolver inecuaciones cuadráticas."
    ],
    referencias: [
      { titulo: "Apunte Clase 5 — Raíces y promedios (PDF)", ruta: "recursos/apuntes/apunte-clase-05.pdf" },
      { titulo: "Guía 2 — Valor absoluto y raíces (PDF)", ruta: "recursos/guias/guia-02-valor-absoluto-raices.pdf" },
      { titulo: "Clase 07 — Inecuaciones y completación de cuadrado (PDF)", ruta: "recursos/clases/clase-07.pdf" },
      { titulo: "Stewart, Precálculo (raíces y completación de cuadrado)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
