/* Módulo 1 · Sección 2 — Orden en R: tricotomía y propiedades */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s02", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 2,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Orden en R: tricotomía y propiedades",
    objetivo: "Usar los axiomas de orden para comparar números reales, resolver desigualdades lineales y demostrar propiedades de las desigualdades, incluyendo el efecto de multiplicar por un número negativo.",
    conexion: "Ya conoces los axiomas de cuerpo y sabes operar con números reales. Ahora agregaremos una segunda estructura: la posibilidad de ordenar los números de menor a mayor sobre una recta.",
    fuente: "Clases 02–03 · Apunte Clase 2 · Guía 1",
    prerrequisitos: ["Axiomas de cuerpo", "Operaciones con números reales", "Recta numérica", "Intervalos básicos"],
    teoria: [
      { tipo: "texto", html: "<p>Además de sumar y multiplicar, los números reales se pueden <b>ordenar</b>. Decimos que $a$ es menor que $b$, y escribimos $a<b$, cuando $a$ está a la izquierda de $b$ en la recta numérica. Esta idea tan cotidiana también se puede axiomatizar: basta con cuatro reglas que se suman a los axiomas de cuerpo. El resultado se llama <b>cuerpo ordenado</b>.</p>" },
      { tipo: "definicion", titulo: "Números positivos y la relación menor que", html: "<p>Definimos el conjunto de los números reales positivos como</p>$$\\R^+=\\{x\\in\\R: x>0\\}.$$<p>Escribimos $a<b$ si y solo si $b-a\\in\\R^+$, es decir, si $b-a>0$. También usamos:</p>$$a\\le b \\iff (a<b \\text{ o } a=b),\\qquad a>b \\iff b<a.$$<p>La notación $a\\ge b$ significa $a>b$ o $a=b$.</p>" },
      { tipo: "tabla", titulo: "Los cuatro axiomas de orden", headers: ["Axioma", "Nombre", "Qué dice"], rows: [["O1", "Tricotomía", "Para $a,b\\in\\R$ se cumple exactamente una de estas tres: $a=b$, $a<b$ o $b<a$"], ["O2", "Transitividad", "Si $a<b$ y $b<c$, entonces $a<c$"], ["O3", "Suma de desigualdades", "Si $a<b$, entonces $a+c<b+c$ para todo $c\\in\\R$"], ["O4", "Producto por positivo", "Si $a<b$ y $c>0$, entonces $ac<bc$"]] },
      { tipo: "teorema", titulo: "Los positivos son cerrados bajo suma y producto", html: "<p>Si $a,b\\in\\R^+$, entonces:</p><ol><li>$a+b\\in\\R^+$.</li><li>$ab\\in\\R^+$.</li></ol><p><b>Idea de la demostración.</b> Para (1), de $a>0$ y el axioma O3 se obtiene $a+b>0+b=b$. Como además $b>0$, por transitividad $a+b>0$. Para (2), de $a>0$ y $b>0$, aplicando O4 con el factor positivo $b$ se obtiene $ab>0\\cdot b=0$.</p>" },
      { tipo: "teorema", titulo: "Comparar es mirar una resta", html: "<p>Para $a,b\\in\\R$:</p>$$a<b \\iff b-a>0.$$<p><b>Demostración.</b> Si $a<b$, sumamos $-a$ a ambos lados usando O3:</p>$$a+(-a)<b+(-a)\\Longrightarrow 0<b-a.$$<p>Recíprocamente, si $b-a>0$, sumamos $a$ a ambos lados y obtenemos $b>a$, es decir, $a<b$.</p><p>Esta equivalencia es la herramienta más usada para demostrar desigualdades: basta con probar que cierta diferencia es positiva.</p>" },
      { tipo: "teorema", titulo: "Propiedades de los signos", html: "<p>Para $a,b,c\\in\\R$:</p><ul><li>$a^2\\ge 0$ para todo $a$, y $a^2>0$ si $a\\neq 0$.</li><li>Si $a>0$, entonces $a^{-1}>0$; si $a<0$, entonces $a^{-1}<0$.</li><li>$ab>0$ si y solo si $a$ y $b$ tienen el mismo signo.</li><li>Si $a<b$ y $c<0$, entonces $ac>bc$: <b>al multiplicar por un negativo, la desigualdad se invierte</b>.</li></ul><p>La última propiedad se demuestra así: como $c<0$, se tiene $-c>0$. De $a<b$, O4 da $a(-c)<b(-c)$, es decir, $-ac<-bc$. Sumando $ac+bc$ a ambos lados se concluye $bc<ac$, o sea $ac>bc$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una desigualdad es como una balanza inclinada. Puedes sumar o restar lo mismo a ambos lados sin que la inclinación cambie. También puedes multiplicar por un número positivo. Pero si multiplicas por un número <b>negativo</b>, la balanza se da vuelta: lo que era menor pasa a ser mayor. Ese es el error número uno al resolver inecuaciones.</div>" },
      { tipo: "grafico", spec: { tipo: "recta_numerica", titulo: "Positivos y negativos en la recta real", rango: [-5, 5], intervalos: [ { a: -5, b: 0, abiertoB: true, label: "negativos", color: "#e17055" }, { a: 0, b: 5, abiertoA: true, label: "positivos", color: "#00b894" } ], puntos: [ { x: 0, label: "0", abierto: false } ] } },
      { tipo: "nota", titulo: "Leer el orden en los apuntes (Apunte Clase 2)", html: "<p>El apunte de la Clase 2 demuestra que $\\R^+$ es cerrado y que $a<b$ equivale a $b-a\\in\\R^+$. Esas dos ideas son la base de casi todas las demostraciones de desigualdades del curso. En la Guía 1 encontrarás ejercicios como probar que $n^2\\ge n$ para todo $n\\in\\N$ o que $4ab\\le 1$ cuando $a+b=1$; todos se resuelven escribiendo una diferencia y mostrando que es no negativa.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Resolver una desigualdad lineal con signo negativo",
        enunciado: "<p>Resuelva $-2x+1\\le 5$ e indique el conjunto solución en notación de intervalos.</p>",
        concepto: "Se usan O3 para sumar o restar y O4 para dividir por un número, recordando que al dividir por un negativo la desigualdad se invierte.",
        desarrollo: [
          "<b>Paso 1.</b> Restamos $1$ a ambos lados (axioma O3): $-2x\\le 4$.",
          "<b>Paso 2.</b> Dividimos por $-2$, que es negativo. Por la propiedad de los signos, la desigualdad se invierte: $x\\ge \\dfrac{4}{-2}$.",
          "<b>Paso 3.</b> Calculamos: $x\\ge -2$.",
          "<b>Paso 4.</b> En notación de intervalos, el conjunto solución es $[-2,+\\infty)$.",
          "<b>Paso 5.</b> Verificamos con $x=0$: $-2(0)+1=1\\le 5$, correcto. Con $x=-3$: $6+1=7\\le 5$, falso, y $-3$ no pertenece a $[-2,\\infty)$."
        ],
        respuesta: "$x\\ge -2$, es decir, $S=[-2,+\\infty)$."
      },
      {
        titulo: "Elevar al cuadrado conserva el orden entre positivos",
        enunciado: "<p>Demuestre que si $0<a<b$, entonces $a^2<b^2$.</p>",
        concepto: "Se escribe la diferencia $b^2-a^2$ como producto y se usa que $\\R^+$ es cerrado bajo producto.",
        desarrollo: [
          "<b>Paso 1.</b> Queremos probar que $b^2-a^2>0$.",
          "<b>Paso 2.</b> Factorizamos: $b^2-a^2=(b-a)(b+a)$.",
          "<b>Paso 3.</b> Como $a<b$, se tiene $b-a>0$.",
          "<b>Paso 4.</b> Como $a>0$ y $b>0$, por cierre de $\\R^+$ bajo suma, $b+a>0$.",
          "<b>Paso 5.</b> El producto de dos positivos es positivo: $(b-a)(b+a)>0$.",
          "<b>Paso 6.</b> Por lo tanto $b^2-a^2>0$, es decir, $a^2<b^2$."
        ],
        respuesta: "Si $0<a<b$, entonces $a^2<b^2$."
      },
      {
        titulo: "La desigualdad entre la media aritmética y la geométrica",
        enunciado: "<p>Demuestre que para $a,b>0$ se cumple $\\sqrt{ab}\\le\\dfrac{a+b}{2}$.</p>",
        concepto: "Se usa que todo cuadrado es no negativo y que la raíz cuadrada conserva el orden entre números no negativos.",
        desarrollo: [
          "<b>Paso 1.</b> Partimos de una verdad universal: $(\\sqrt{a}-\\sqrt{b})^2\\ge 0$.",
          "<b>Paso 2.</b> Desarrollamos: $a-2\\sqrt{ab}+b\\ge 0$.",
          "<b>Paso 3.</b> Reordenamos: $a+b\\ge 2\\sqrt{ab}$.",
          "<b>Paso 4.</b> Dividimos por $2>0$: $\\dfrac{a+b}{2}\\ge\\sqrt{ab}$.",
          "<b>Paso 5.</b> La igualdad ocurre exactamente cuando $\\sqrt{a}=\\sqrt{b}$, es decir, cuando $a=b$."
        ],
        respuesta: "$\\sqrt{ab}\\le\\dfrac{a+b}{2}$, con igualdad si y solo si $a=b$."
      }
    ],
    ejercicios: [
      {
        titulo: "Dos desigualdades lineales",
        dificultad: "basico",
        enunciado: "<p>Resuelva: (a) $3x-5<7$; &nbsp; (b) $-3x+6\\ge 12$.</p>",
        concepto: "Se despeja la incógnita usando O3 y O4; en (b) hay que invertir la desigualdad al dividir por un negativo.",
        pista: "Suma o resta primero, y recién al final divide por el coeficiente de $x$.",
        desarrollo: [
          "(a) $3x<12$, entonces $x<4$. Solución: $(-\\infty,4)$.",
          "(b) $-3x\\ge 6$. Al dividir por $-3$ se invierte: $x\\le -2$. Solución: $(-\\infty,-2]$.",
          "Verificación de (b) con $x=-3$: $-3(-3)+6=15\\ge 12$, correcto."
        ],
        respuesta: "(a) $(-\\infty,4)$; (b) $(-\\infty,-2]$."
      },
      {
        titulo: "Signo de un producto",
        dificultad: "basico",
        enunciado: "<p>Determine el signo de $(-3)(5)(-2)(-1)$. Luego, si $ab<0$ y $a>0$, ¿qué signo tiene $b$?</p>",
        concepto: "Se usa que el producto es positivo si hay una cantidad par de factores negativos, y negativo si hay una cantidad impar.",
        pista: "Cuenta los factores negativos. Para la segunda parte, usa la propiedad del signo del producto.",
        desarrollo: [
          "Hay tres factores negativos: $-3$, $-2$ y $-1$. Como $3$ es impar, el producto es negativo.",
          "En efecto: $(-3)(5)=-15$; $(-15)(-2)=30$; $30\\cdot(-1)=-30$.",
          "Si $ab<0$, los factores tienen signos opuestos. Como $a>0$, necesariamente $b<0$."
        ],
        respuesta: "$(-3)(5)(-2)(-1)=-30<0$; además $b<0$."
      },
      {
        titulo: "Todo natural es menor o igual que su cuadrado",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que para todo $n\\in\\N$ se cumple $n^2\\ge n$.</p>",
        concepto: "Se separa el caso $n=1$ y se usa que $n-1\\ge 0$ para $n\\ge 2$, junto con el cierre de $\\R^+$.",
        pista: "Escribe $n^2-n=n(n-1)$ y analiza el signo de cada factor.",
        desarrollo: [
          "Si $n=1$, entonces $n^2=1=n$, así que la desigualdad es una igualdad.",
          "Si $n\\ge 2$, entonces $n>0$ y $n-1>0$.",
          "Por cierre de $\\R^+$ bajo producto, $n(n-1)>0$.",
          "Pero $n(n-1)=n^2-n$, así que $n^2-n>0$, es decir, $n^2>n$.",
          "Juntando ambos casos, $n^2\\ge n$ para todo $n\\in\\N$."
        ],
        respuesta: "$n^2\\ge n$ para todo $n\\in\\N$, con igualdad solo en $n=1$."
      },
      {
        titulo: "Una consecuencia de la suma fija",
        dificultad: "intermedio",
        enunciado: "<p>Sean $a,b\\in\\R$ con $a+b=1$. Demuestre que $4ab\\le 1$.</p>",
        concepto: "Se usa que un cuadrado es no negativo y se reemplaza la suma dada.",
        pista: "Parte de $(a-b)^2\\ge 0$ y desarrolla.",
        desarrollo: [
          "Sabemos que $(a-b)^2\\ge 0$.",
          "Desarrollamos: $a^2-2ab+b^2\\ge 0$.",
          "Sumamos $4ab$ a ambos lados: $a^2+2ab+b^2\\ge 4ab$.",
          "El lado izquierdo es $(a+b)^2$, entonces $(a+b)^2\\ge 4ab$.",
          "Como $a+b=1$, queda $1\\ge 4ab$, es decir, $4ab\\le 1$."
        ],
        respuesta: "$4ab\\le 1$; la igualdad ocurre cuando $a=b=\\dfrac12$."
      },
      {
        titulo: "Suma de un positivo y su recíproco",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que si $x>0$, entonces $x+\\dfrac1x\\ge 2$.</p>",
        concepto: "Se usa el cuadrado de una diferencia y el hecho de que dividir por $x>0$ conserva el orden.",
        pista: "Empieza por $(x-1)^2\\ge 0$ y divide por $x$.",
        desarrollo: [
          "Para todo $x\\in\\R$, $(x-1)^2\\ge 0$.",
          "Desarrollamos: $x^2-2x+1\\ge 0$.",
          "Dividimos por $x>0$; como $x$ es positivo, la desigualdad no cambia: $x-2+\\dfrac1x\\ge 0$.",
          "Sumamos $2$: $x+\\dfrac1x\\ge 2$.",
          "La igualdad se alcanza cuando $(x-1)^2=0$, es decir, $x=1$."
        ],
        respuesta: "$x+\\dfrac1x\\ge 2$ para $x>0$, con igualdad en $x=1$."
      }
    ],
    erroresComunes: [
      "Multiplicar o dividir una desigualdad por un número negativo sin invertir el signo: de $-2x<4$ se sigue $x>-2$, no $x<-2$.",
      "Pensar que $a^2>b^2$ implica $a>b$. Solo es válido si ambos números son positivos; por ejemplo $(-3)^2>2^2$, pero $-3<2$.",
      "Pasar un término al otro lado sin cambiarle el signo: al sumar o restar una misma cantidad en ambos lados, el término cambia de signo al moverlo.",
      "Confundir $a\\le b$ con $a<b$; la primera incluye la igualdad y la segunda no.",
      "Elevar al cuadrado una desigualdad sin comprobar que ambos lados son no negativos."
    ],
    checklist: [
      "Puedo enunciar los cuatro axiomas de orden y explicar qué significa cada uno.",
      "Sé demostrar que $a<b$ equivale a $b-a>0$.",
      "Sé resolver una desigualdad lineal y escribir la solución como intervalo.",
      "Recuerdo invertir el signo de la desigualdad al multiplicar o dividir por un negativo.",
      "Sé demostrar una desigualdad escribiendo una diferencia y mostrando que es no negativa.",
      "Puedo explicar por qué $a^2\\ge 0$ para todo real $a$."
    ],
    autoevaluacion: [
      { pregunta: "Si $a<b$ y $c<0$, entonces:", opciones: ["$ac<bc$", "$ac>bc$", "$ac=bc$", "No se puede comparar $ac$ y $bc$"], correcta: 1, explicacion: "Al multiplicar por un negativo, la desigualdad se invierte: $ac>bc$." },
      { pregunta: "El conjunto solución de $-2x<6$ es:", opciones: ["$x<-3$", "$x>-3$", "$x<3$", "$x>3$"], correcta: 1, explicacion: "Dividimos por $-2$ e invertimos: $x>-3$." },
      { pregunta: "Para todo $a\\in\\R$, se cumple:", opciones: ["$a^2>0$", "$a^2\\ge 0$", "$a^2<0$", "$a^2\\le 0$"], correcta: 1, explicacion: "Todo cuadrado es no negativo. Es estrictamente positivo salvo cuando $a=0$." },
      { pregunta: "Si $ab>0$, entonces necesariamente:", opciones: ["$a>0$ y $b>0$", "$a<0$ y $b<0$", "$a$ y $b$ tienen el mismo signo", "$a$ y $b$ son positivos o ambos nulos"], correcta: 2, explicacion: "Un producto positivo requiere dos factores del mismo signo: ambos positivos o ambos negativos. Ninguno puede ser cero." },
      { pregunta: "Si $0<a<b$, ¿cuál de las siguientes afirmaciones es verdadera?", opciones: ["$\\dfrac1a<\\dfrac1b$", "$\\dfrac1a>\\dfrac1b$", "$a^2>b^2$", "$a-b>0$"], correcta: 1, explicacion: "Al invertir números positivos, el orden se invierte: $\\dfrac1a>\\dfrac1b$. Además $a^2<b^2$ y $a-b<0$." },
      { pregunta: "¿Cuál de estas propiedades NO es un axioma de orden?", opciones: ["Tricotomía", "Transitividad", "Distributividad", "Producto por un positivo"], correcta: 2, explicacion: "La distributividad es un axioma de cuerpo, no de orden. Los axiomas de orden son O1 a O4." }
    ],
    resumen: [
      "El orden en $\\R$ se describe con cuatro axiomas: tricotomía, transitividad, compatibilidad con la suma y con el producto por positivos.",
      "$a<b$ equivale a $b-a>0$; esta equivalencia permite demostrar desigualdades trabajando con diferencias.",
      "Multiplicar o dividir una desigualdad por un número negativo invierte su sentido; es la regla más importante al resolver inecuaciones."
    ],
    referencias: [
      { titulo: "Clase 02 — R es ordenado (PDF)", ruta: "recursos/clases/clase-02.pdf" },
      { titulo: "Clase 03 — Propiedades del orden (PDF)", ruta: "recursos/clases/clase-03.pdf" },
      { titulo: "Apunte Clase 2 — Axiomas de orden (PDF)", ruta: "recursos/apuntes/apunte-clase-02.pdf" },
      { titulo: "Guía 1 — Orden (PDF)", ruta: "recursos/guias/guia-01-orden.pdf" }
    ]
  });
})();
