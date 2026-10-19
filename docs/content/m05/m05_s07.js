/* Módulo 5 · Sección 7 — Teorema del sándwich */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s07", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 32,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Teorema del sándwich",
    objetivo: "Aplicar el teorema del sándwich para calcular límites de sucesiones que quedan atrapadas entre dos sucesiones con el mismo límite, incluyendo expresiones con seno, raíces, potencias y partes enteras.",
    conexion: "Necesitas recordar las propiedades algebraicas de los límites y la definición épsilon-N. El sándwich combina ambas ideas: usaremos la definición para demostrar el teorema y luego lo aplicaremos sin volver a la definición en cada ejemplo.",
    fuente: "Apunte 27 · Guía 10 · Clase 24A · Stewart (sucesiones y límites)",
    prerrequisitos: ["Definición épsilon-N de límite", "Propiedades de las desigualdades", "Sucesiones acotadas", "Valor absoluto"],
    teoria: [
      { tipo: "texto", html: "<p>A veces no sabemos calcular directamente el límite de una sucesión, pero sí podemos <b>encerrarla</b> entre dos sucesiones más simples que tienen el mismo límite. Si la sucesión queda atrapada entre ambas y las dos se acercan al mismo número $L$, entonces ella no tiene más remedio que acercarse también a $L$. Esta idea se llama <b>teorema del sándwich</b>, teorema del emparedado o teorema del apretón.</p>" },
      { tipo: "teorema", titulo: "Teorema del sándwich", html: "<p><b>Teorema.</b> Sean $(a_n)$, $(b_n)$ y $(c_n)$ sucesiones. Supongamos que:</p><ol><li>$a_n\\le c_n\\le b_n$ para todo $n\\ge N_0$ (es decir, desde cierto índice en adelante);</li><li>$\\displaystyle\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}b_n=L$.</li></ol><p>Entonces $$\\lim_{n\\to\\infty}c_n=L.$$</p><p>La condición (1) también puede valer solo para todo $n$ suficientemente grande: lo que importa es que la cadena de desigualdades se mantenga <b>desde algún índice en adelante</b>.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "sin(x)/x atrapada entre −1/x y 1/x", funciones: [ { f: function (x) { return 1 / x; }, desde: 1, hasta: 20, label: "y = 1/x", color: "#e17055" }, { f: function (x) { return -1 / x; }, desde: 1, hasta: 20, label: "y = −1/x", color: "#e17055" }, { f: function (x) { return Math.sin(x) / x; }, desde: 1, hasta: 20, label: "y = sin(x)/x", color: "#1e5eff" } ], xlabel: "x", ylabel: "y", rangeX: [0.5, 20.5], rangeY: [-1.1, 1.1] } },
      { tipo: "teorema", titulo: "Demostración del teorema", html: "<p>Sea $\\varepsilon>0$. Como $a_n\\to L$, existe $N_1$ tal que para todo $n\\ge N_1$ se cumple $|a_n-L|<\\varepsilon$, en particular $$L-\\varepsilon<a_n.$$ Como $b_n\\to L$, existe $N_2$ tal que para todo $n\\ge N_2$ se cumple $|b_n-L|<\\varepsilon$, en particular $$b_n<L+\\varepsilon.$$ Sea $N=\\max\\{N_0,N_1,N_2\\}$. Para todo $n\\ge N$ se tienen simultáneamente las tres condiciones, así que $$L-\\varepsilon<a_n\\le c_n\\le b_n<L+\\varepsilon.$$ Por lo tanto $L-\\varepsilon<c_n<L+\\varepsilon$, es decir, $|c_n-L|<\\varepsilon$. Esto prueba que $c_n\\to L$. $\\blacksquare$</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si dos guardias caminan tomados de la misma correa y el prisionero va entre ellos, los tres terminan en el mismo lugar. Los guardias son $a_n$ y $b_n$; el prisionero es $c_n$. La condición clave es que los dos guardias vayan al <b>mismo</b> destino $L$; si uno va a $1$ y el otro a $2$, no se puede concluir nada sobre el prisionero.</div>" },
      { tipo: "teorema", titulo: "Corolario: acotada por algo que tiende a cero", html: "<p><b>Corolario.</b> Si $(x_n)$ está acotada y $y_n\\to0$, entonces $$x_ny_n\\to0.$$</p><p><b>Demostración.</b> Como $(x_n)$ está acotada, existe $K>0$ tal que $|x_n|\\le K$ para todo $n$. Entonces $$0\\le|x_ny_n|=|x_n||y_n|\\le K|y_n|.$$ La sucesión $K|y_n|$ tiende a $0$, pues $y_n\\to0$. Por el teorema del sándwich, $|x_ny_n|\\to0$. Como $-|x_ny_n|\\le x_ny_n\\le|x_ny_n|$ y ambos extremos tienden a $0$, otra aplicación del sándwich da $x_ny_n\\to0$. $\\blacksquare$</p><p>Este corolario es la razón por la que expresiones como $\\frac{\\sin n}{n}$ o $\\frac{(-1)^n}{n}$ tienden a $0$: son el producto de algo acotado por algo que tiende a $0$.</p>" },
      { tipo: "teorema", titulo: "Corolario del valor absoluto", html: "<p><b>Proposición.</b> Para una sucesión $(x_n)$ y un número real $L$,</p>$$\\lim_{n\\to\\infty}|x_n|=0\\quad\\Longleftrightarrow\\quad\\lim_{n\\to\\infty}x_n=0.$$<p><b>Demostración.</b> Si $x_n\\to0$, entonces $|x_n-0|=||x_n||\\to0$ por definición. Recíprocamente, si $|x_n|\\to0$, como $$-|x_n|\\le x_n\\le|x_n|,$$ y ambos extremos tienden a $0$, el sándwich da $x_n\\to0$. $\\blacksquare$</p><p><b>Advertencia:</b> esto vale <b>solo</b> para límite $0$. De $|x_n|\\to1$ no se deduce $x_n\\to1$: la sucesión $x_n=(-1)^n$ cumple $|x_n|=1\\to1$, pero $x_n$ no converge.</p>" },
      { tipo: "nota", titulo: "Cómo elegir las cotas (Apunte 27)", html: "<p>En la práctica, las cotas suelen salir de desigualdades conocidas:</p><ul><li>$-1\\le\\sin n\\le1$ y $-1\\le\\cos n\\le1$;</li><li>$x-1<\\lfloor x\\rfloor\\le x$ para la parte entera;</li><li>$\\sqrt{n+1}-\\sqrt n=\\dfrac{1}{\\sqrt{n+1}+\\sqrt n}$, que se acota usando $\\sqrt{n+1}+\\sqrt n\\ge2\\sqrt n$;</li><li>$0\\le\\dfrac{3^n}{n!}\\le\\dfrac{27}{2n}$ para $n\\ge3$, usando que $\\dfrac3k\\le1$ para $k\\ge3$.</li></ul><p>La estrategia es siempre la misma: encontrar una cota inferior y una superior <b>del mismo tipo</b> y calcular sus límites.</p>" },
      { tipo: "tabla", titulo: "Sucesiones acotadas útiles", headers: ["Sucesión", "Cota", "Motivo"], rows: [["$\\sin n$", "$-1\\le\\sin n\\le1$", "Recorrido del seno"], ["$\\cos n$", "$-1\\le\\cos n\\le1$", "Recorrido del coseno"], ["$(-1)^n$", "$|(-1)^n|=1$", "Solo toma dos valores"], ["$\\lfloor n/2\\rfloor/n$", "$\\frac12-\\frac1n\\le\\cdot\\le\\frac12$", "Propiedad de la parte entera"], ["$\\frac{n}{n^2+1}$", "$0<\\cdot<\\frac1n$", "Denominador mayor que $n^2$"]] }
    ],
    ejemplos: [
      {
        titulo: "Seno dividido por n",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{\\sin n}{n}.$$</p>",
        concepto: "Se usa el teorema del sándwich con las cotas del seno y el hecho de que $1/n\\to0$.",
        desarrollo: [
          "<b>Paso 1. Acotamos el seno.</b> Para todo $n\\in\\N$, $-1\\le\\sin n\\le1$.",
          "<b>Paso 2. Dividimos por $n>0$.</b> Al dividir una desigualdad por un número positivo, el orden se mantiene: $$-\\frac1n\\le\\frac{\\sin n}{n}\\le\\frac1n.$$",
          "<b>Paso 3. Calculamos los límites de las cotas.</b> $$\\lim_{n\\to\\infty}\\left(-\\frac1n\\right)=0\\qquad\\text{y}\\qquad\\lim_{n\\to\\infty}\\frac1n=0.$$",
          "<b>Paso 4. Aplicamos el sándwich.</b> La sucesión $\\frac{\\sin n}{n}$ está entre dos sucesiones que tienden a $0$. Por lo tanto también tiende a $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin n}{n}=0$",
        grafico: { tipo: "sucesion", titulo: "sin(n)/n se acerca a 0", terminos: [0.8415, 0.4546, 0.047, -0.1892, -0.1918, -0.0466, 0.0939, 0.1237, 0.0458, -0.0544, -0.0906, -0.0447], limite: 0, label: "sin(n)/n", ylabel: "aₙ", rangeY: [-0.5, 0.9], height: 330 }
      },
      {
        titulo: "Una parte entera en el numerador",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{\\lfloor n/2\\rfloor}{n},$$ donde $\\lfloor x\\rfloor$ es la parte entera de $x$.</p>",
        concepto: "Se usa la desigualdad $x-1<\\lfloor x\\rfloor\\le x$ con $x=n/2$, y luego el teorema del sándwich.",
        desarrollo: [
          "<b>Paso 1. Aplicamos la propiedad de la parte entera.</b> Para todo real $x$, $x-1<\\lfloor x\\rfloor\\le x$. Con $x=\\frac n2$: $$\\frac n2-1<\\left\\lfloor\\frac n2\\right\\rfloor\\le\\frac n2.$$",
          "<b>Paso 2. Dividimos por $n>0$.</b> $$\\frac12-\\frac1n<\\frac{\\lfloor n/2\\rfloor}{n}\\le\\frac12.$$",
          "<b>Paso 3. Calculamos los límites de las cotas.</b> $$\\lim_{n\\to\\infty}\\left(\\frac12-\\frac1n\\right)=\\frac12\\qquad\\text{y}\\qquad\\lim_{n\\to\\infty}\\frac12=\\frac12.$$",
          "<b>Paso 4. Concluimos por el sándwich.</b> Ambos extremos tienden a $\\frac12$, así que $$\\frac{\\lfloor n/2\\rfloor}{n}\\to\\frac12.$$"
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{\\lfloor n/2\\rfloor}{n}=\\frac12$",
        grafico: { tipo: "sucesion", titulo: "⌊n/2⌋/n tiende a 1/2", terminos: [0, 0.5, 0.3333, 0.5, 0.4, 0.5, 0.4286, 0.5, 0.4444, 0.5, 0.4545, 0.5], limite: 0.5, label: "⌊n/2⌋/n", ylabel: "aₙ", rangeY: [0, 0.7], height: 330 }
      },
      {
        titulo: "Acotada por una sucesión que tiende a cero",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{n\\left(\\cos^2 n+\\frac13\\sin(n^3)+7\\right)}{n^2+1}.$$</p>",
        concepto: "Se separa el producto en un factor acotado y otro que tiende a cero, y se aplica el corolario del sándwich (acotada por nula).",
        desarrollo: [
          "<b>Paso 1. Identificamos los factores.</b> Sea $$x_n=\\cos^2 n+\\frac13\\sin(n^3)+7,\\qquad y_n=\\frac{n}{n^2+1}.$$ El término general es $x_ny_n$.",
          "<b>Paso 2. Acotamos $x_n$.</b> Como $0\\le\\cos^2 n\\le1$ y $-1\\le\\sin(n^3)\\le1$, $$|x_n|\\le1+\\frac13+7=\\frac{25}{3}<10.$$ Así, $(x_n)$ está acotada.",
          "<b>Paso 3. Calculamos el límite de $y_n$.</b> Dividiendo por $n^2$: $$y_n=\\frac{n}{n^2+1}=\\frac{1/n}{1+1/n^2}\\longrightarrow\\frac{0}{1+0}=0.$$",
          "<b>Paso 4. Aplicamos el corolario.</b> Producto de una sucesión acotada por una que tiende a $0$: $$x_ny_n\\to0.$$",
          "<b>Paso 5. Verificación con sándwich.</b> También se puede escribir $$-10|y_n|\\le x_ny_n\\le10|y_n|,$$ y ambos extremos tienden a $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n\\left(\\cos^2 n+\\frac13\\sin(n^3)+7\\right)}{n^2+1}=0$"
      }
    ],
    ejercicios: [
      {
        titulo: "Coseno sobre n",
        dificultad: "basico",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{\\cos n}{n}.$$</p>",
        concepto: "Se aplica el sándwich con las cotas del coseno o, equivalentemente, el corolario de acotada por nula.",
        pista: "Use $-1\\le\\cos n\\le1$ y divida por $n$.",
        desarrollo: [
          "Para todo $n$, $-1\\le\\cos n\\le1$.",
          "Dividiendo por $n>0$: $-\\frac1n\\le\\frac{\\cos n}{n}\\le\\frac1n$.",
          "Los extremos tienden a $0$, pues $\\pm\\frac1n\\to0$.",
          "Por el teorema del sándwich, $\\frac{\\cos n}{n}\\to0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{\\cos n}{n}=0$"
      },
      {
        titulo: "Seno con un desplazamiento",
        dificultad: "basico",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{2+\\sin n}{n}.$$</p>",
        concepto: "El numerador está acotado entre $1$ y $3$; al dividir por $n$ queda atrapado entre dos sucesiones que tienden a $0$.",
        pista: "De $-1\\le\\sin n\\le1$ se obtiene $1\\le2+\\sin n\\le3$.",
        desarrollo: [
          "Como $-1\\le\\sin n\\le1$, sumando $2$: $1\\le2+\\sin n\\le3$.",
          "Dividiendo por $n>0$: $$\\frac1n\\le\\frac{2+\\sin n}{n}\\le\\frac3n.$$",
          "Los extremos $\\frac1n$ y $\\frac3n$ tienden a $0$.",
          "Por el sándwich, el cociente tiende a $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{2+\\sin n}{n}=0$"
      },
      {
        titulo: "Diferencia de raíces",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt n\\right).$$</p>",
        concepto: "Se racionaliza la diferencia para transformarla en un cociente y luego se acota el denominador por $2\\sqrt n$.",
        pista: "Multiplique y divida por $\\sqrt{n+1}+\\sqrt n$.",
        desarrollo: [
          "<b>Paso 1. Racionalizamos.</b> $$\\sqrt{n+1}-\\sqrt n=\\frac{(n+1)-n}{\\sqrt{n+1}+\\sqrt n}=\\frac{1}{\\sqrt{n+1}+\\sqrt n}.$$",
          "<b>Paso 2. Acotamos el denominador.</b> Como $\\sqrt{n+1}>\\sqrt n$, se tiene $\\sqrt{n+1}+\\sqrt n>2\\sqrt n$. Por lo tanto $$0<\\sqrt{n+1}-\\sqrt n<\\frac{1}{2\\sqrt n}.$$",
          "<b>Paso 3. Límite de la cota.</b> $\\frac{1}{2\\sqrt n}\\to0$, pues $\\sqrt n\\to+\\infty$.",
          "<b>Paso 4. Sándwich.</b> La diferencia está entre $0$ y algo que tiende a $0$; luego tiende a $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\left(\\sqrt{n+1}-\\sqrt n\\right)=0$"
      },
      {
        titulo: "Potencias contra factorial",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $$\\lim_{n\\to\\infty}\\frac{3^n}{n!}=0.$$</p>",
        concepto: "Se acota el factorial comparando factor por factor con $3$, y se aplica el sándwich.",
        pista: "Para $n\\ge3$, escriba $\\frac{3^n}{n!}=\\frac31\\cdot\\frac32\\cdot\\frac33\\cdot\\frac34\\cdots\\frac3n$ y observe que desde el factor $\\frac33$ en adelante cada factor es $\\le1$.",
        desarrollo: [
          "<b>Paso 1. Acotamos para $n\\ge3$.</b> $$\\frac{3^n}{n!}=\\frac31\\cdot\\frac32\\cdot\\prod_{k=3}^{n}\\frac3k.$$ Los dos primeros factores dan $\\frac92$. Para $k\\ge3$, $\\frac3k\\le1$, así que $$\\prod_{k=3}^{n}\\frac3k\\le\\frac3n.$$",
          "<b>Paso 2. Conclusión de la cota.</b> $$0<\\frac{3^n}{n!}\\le\\frac92\\cdot\\frac3n=\\frac{27}{2n}.$$",
          "<b>Paso 3. Límite.</b> $\\frac{27}{2n}\\to0$.",
          "<b>Paso 4. Sándwich.</b> La sucesión queda entre $0$ y una sucesión que tiende a $0$, por lo tanto $\\frac{3^n}{n!}\\to0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{3^n}{n!}=0$"
      },
      {
        titulo: "La raíz n-ésima de n",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que $$\\lim_{n\\to\\infty}\\sqrt[n]{n}=1.$$</p>",
        concepto: "Se escribe $\\sqrt[n]{n}=1+x_n$ con $x_n\\ge0$ y se usa el teorema del binomio para acotar $x_n$ por una expresión que tiende a $0$.",
        pista: "Desarrolle $(1+x_n)^n$ y quédese con el término que contiene $x_n^2$: $\\binom n2x_n^2$.",
        desarrollo: [
          "<b>Paso 1. Definimos $x_n$.</b> Sea $x_n=\\sqrt[n]{n}-1\\ge0$. Entonces $n=(1+x_n)^n$.",
          "<b>Paso 2. Usamos el binomio.</b> Para $n\\ge2$, $$n=(1+x_n)^n\\ge\\binom n2x_n^2=\\frac{n(n-1)}{2}x_n^2,$$ pues todos los términos del desarrollo son no negativos.",
          "<b>Paso 3. Despejamos $x_n$.</b> Dividiendo por $\\frac{n(n-1)}{2}>0$: $$x_n^2\\le\\frac{2}{n-1}.$$ Por lo tanto $$0\\le x_n\\le\\sqrt{\\frac{2}{n-1}}.$$",
          "<b>Paso 4. Sándwich.</b> Como $\\sqrt{\\frac{2}{n-1}}\\to0$, se tiene $x_n\\to0$.",
          "<b>Paso 5. Concluimos.</b> $\\sqrt[n]{n}=1+x_n\\to1$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{n}=1$"
      }
    ],
    erroresComunes: [
      "Aplicar el sándwich cuando las cotas tienen límites distintos. Si $a_n\\to1$ y $b_n\\to2$, no se puede concluir nada sobre $c_n$.",
      "Verificar la desigualdad solo para los primeros términos. El sándwich exige que $a_n\\le c_n\\le b_n$ desde cierto índice en adelante, no necesariamente desde $n=1$.",
      "Invertir el orden de las desigualdades o usar cotas que no encierran a la sucesión por ambos lados.",
      "Creer que toda sucesión acotada converge. La acotación solo ayuda cuando se multiplica por algo que tiende a $0$.",
      "Usar $|x_n|\\to L$ para concluir $x_n\\to L$ con $L\\neq0$. Ese razonamiento solo es válido cuando $L=0$."
    ],
    checklist: [
      "Sé enunciar el teorema del sándwich con sus dos hipótesis.",
      "Sé demostrarlo usando la definición épsilon-N y el máximo de dos índices.",
      "Sé acotar $\\sin n$ y $\\cos n$ y dividir por $n$ para obtener límites $0$.",
      "Sé usar el corolario «acotada por nula tiende a cero».",
      "Sé manejar la parte entera con $x-1<\\lfloor x\\rfloor\\le x$.",
      "Sé racionalizar diferencias de raíces y acotar el denominador para aplicar el sándwich."
    ],
    autoevaluacion: [
      { pregunta: "Si $-\\frac1n\\le a_n\\le\\frac1n$ para todo $n$, entonces $\\lim a_n$ es:", opciones: ["$1$", "$-1$", "$0$", "No existe"], correcta: 2, explicacion: "Ambas cotas tienden a $0$. Por el teorema del sándwich, $a_n\\to0$." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\sin n}{n}$ es:", opciones: ["$0$", "$1$", "$-1$", "No existe"], correcta: 0, explicacion: "Se usa $-1\\le\\sin n\\le1$, de donde $-\\frac1n\\le\\frac{\\sin n}{n}\\le\\frac1n$. Ambos extremos tienden a $0$." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\lfloor n/2\\rfloor}{n}$ es:", opciones: ["$0$", "$\\frac12$", "$1$", "$2$"], correcta: 1, explicacion: "De $\\frac n2-1<\\lfloor n/2\\rfloor\\le\\frac n2$ se obtiene $\\frac12-\\frac1n<\\frac{\\lfloor n/2\\rfloor}{n}\\le\\frac12$; ambos extremos tienden a $\\frac12$." },
      { pregunta: "Si $(b_n)$ está acotada y $c_n\\to0$, entonces $b_nc_n$:", opciones: ["Tiende a $+\\infty$", "Tiende a $0$", "Puede no tener límite", "Tiende a $1$"], correcta: 1, explicacion: "Por el corolario del sándwich, el producto de una sucesión acotada por una que tiende a cero también tiende a cero." },
      { pregunta: "Se sabe que $|a_n|\\to1$. ¿Qué se puede concluir?", opciones: ["$a_n\\to1$", "$a_n\\to-1$", "$a_n\\to0$", "Nada seguro: podría oscilar, como $(-1)^n$"], correcta: 3, explicacion: "El corolario del valor absoluto solo funciona con límite $0$. La sucesión $(-1)^n$ tiene $|(-1)^n|=1$, pero no converge." },
      { pregunta: "Para aplicar el sándwich a $a_n\\le c_n\\le b_n$, la condición esencial sobre los extremos es:", opciones: ["Que $a_n$ y $b_n$ estén acotadas", "Que $a_n$ y $b_n$ tengan el mismo límite", "Que $a_n\\le b_n$ solamente en $n=1$", "Que $c_n$ sea monótona"], correcta: 1, explicacion: "Si los extremos no tienen el mismo límite, la sucesión del medio puede hacer cualquier cosa. La igualdad de los límites es lo que permite concluir." }
    ],
    resumen: [
      "Si una sucesión queda entre dos sucesiones que convergen al mismo número $L$, entonces ella también converge a $L$.",
      "El teorema se demuestra tomando el máximo de los índices que hacen válidas las dos convergencias y usando la cadena $L-\\varepsilon<a_n\\le c_n\\le b_n<L+\\varepsilon$.",
      "Dos consecuencias muy usadas son: acotada por sucesión que tiende a cero da límite cero, y $|x_n|\\to0$ equivale a $x_n\\to0$."
    ],
    referencias: [
      { titulo: "Apunte Clase 27 — Teorema del sándwich (PDF)", ruta: "recursos/apuntes/apunte-clase-27.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" },
      { titulo: "Clase 24A — Técnicas de cálculo de límites (PDF)", ruta: "recursos/clases/clase-24a.pdf" },
      { titulo: "Stewart, Precálculo (sucesiones y límites)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
