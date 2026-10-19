/* Módulo 2 · Sección 2 — Gráficas, criterio de la recta vertical y funciones por tramos */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m02_s02", modulo: 2, moduloNombre: "Módulo 2 · Funciones y gráficas", orden: 10,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Gráficas, criterio de la recta vertical y funciones por tramos",
    objetivo: "Graficar funciones a partir de una tabla o de una fórmula, aplicar el criterio de la recta vertical para decidir si una curva representa una función y evaluar y graficar funciones definidas por tramos.",
    conexion: "Ya sabes que una función asigna a cada entrada una única salida. Ahora usaremos esa unicidad de forma visual: una curva será gráfica de función si ninguna recta vertical la corta más de una vez.",
    fuente: "Clase 09 · Apunte 10 · Stewart §2.2–2.3 · Mickenberg §3.5",
    prerrequisitos: ["Plano cartesiano", "Dominio y recorrido", "Valor absoluto", "Rectas y parábolas"],
    teoria: [
      {
        tipo: "texto",
        html: "<p>Una gráfica es mucho más que un dibujo: es una forma de guardar toda la información de una función. Mirando la curva podemos reconocer su dominio (sombras sobre el eje $x$), su recorrido (sombras sobre el eje $y$), sus valores máximos y mínimos, y los puntos donde cambia de comportamiento.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Gráfica de una función",
        html: "<p>Dada $f:A\\to B$, la <b>gráfica</b> de $f$ es el conjunto de pares ordenados</p>$$G(f)=\\{(x,f(x)):x\\in A\\}\\subseteq A\\times B.$$<p>Cada punto de la gráfica tiene primera coordenada $x$ y segunda coordenada $y=f(x)$. Recíprocamente, si un punto $(a,b)$ está en la gráfica, entonces $f(a)=b$.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Criterio de la recta vertical",
        html: "<p>Una curva en el plano $xy$ es la gráfica de una función $y=f(x)$ si y solo si <b>ninguna recta vertical</b> la intersecta en más de un punto.</p><p><b>Por qué funciona:</b> una recta vertical $x=a$ reúne todos los puntos con la misma entrada $a$. Si corta la curva en dos puntos $(a,b_1)$ y $(a,b_2)$ con $b_1\\neq b_2$, la entrada $a$ tendría dos salidas distintas. Si no la corta, entonces $a$ no pertenece al dominio.</p>"
      },
      {
        tipo: "html",
        html: "<div class='callout'><b>En palabras simples:</b> pasa una recta vertical imaginaria por todo el dibujo. Si en algún lugar toca la curva dos veces, esa curva no puede ser una función. Si toca a lo más una vez en cada lugar, sí puede serlo.</div>"
      },
      {
        tipo: "nota",
        titulo: "Leer dominio y recorrido desde la gráfica (Clase 09)",
        html: "<p>El <b>dominio</b> se lee proyectando la gráfica sobre el eje $x$; el <b>recorrido</b>, proyectándola sobre el eje $y$. Los extremos cerrados se incluyen; los puntos abiertos (huecos) se excluyen. Por ejemplo, la gráfica de $f(x)=\\sqrt{4-x^2}$ es la mitad superior de la circunferencia $x^2+y^2=4$: su sombra horizontal es $[-2,2]$ y su sombra vertical es $[0,2]$.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Función definida por tramos",
        html: "<p>Una función es <b>por tramos</b> cuando usa reglas distintas en distintos intervalos del dominio. Por ejemplo,</p>$$f(x)=\\begin{cases}x^2, & x\\le1,\\\\ 2x+1, & x>1.\\end{cases}$$<p>Para evaluar, primero se decide en qué tramo cae la entrada y luego se aplica <b>solo</b> esa regla. El dominio es la unión de los intervalos donde está definida cada regla.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Dos funciones por tramos fundamentales",
        html: "<p><b>Valor absoluto:</b></p>$$|x|=\\begin{cases}x, & x\\ge0,\\\\ -x, & x<0.\\end{cases}$$<p><b>Parte entera (piso):</b> $\\lfloor x\\rfloor$ es el mayor entero que es menor o igual que $x$. Por ejemplo, $\\lfloor2{,}7\\rfloor=2$, $\\lfloor3\\rfloor=3$ y $\\lfloor-0{,}3\\rfloor=-1$.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Extremos abiertos, cerrados y saltos",
        html: "<p>En una función por tramos, el valor en un punto de cambio lo decide <b>el tramo que contiene ese punto</b>. Si un tramo usa $x<c$ y otro usa $x\\ge c$, entonces $f(c)$ se calcula con el segundo. En la gráfica, un extremo excluido se dibuja con un <b>círculo abierto</b> y uno incluido con un <b>punto cerrado</b>.</p><p>Puede ocurrir un <b>salto</b>: los dos tramos se acercan a valores distintos al aproximarse al punto de cambio. Eso no impide que la función esté bien definida; solo significa que su gráfica no es continua ahí.</p>"
      },
      {
        tipo: "grafico",
        spec: {
          tipo: "plot2d", titulo: "Función por tramos: f(x)=x² si x≤1; f(x)=2x+1 si x>1",
          funciones: [
            { f: function (x) { return x * x; }, desde: -2.2, hasta: 1, label: "x², x≤1", color: "#1e5eff" },
            { f: function (x) { return 2 * x + 1; }, desde: 1, hasta: 3.5, label: "2x+1, x>1", color: "#00b894" }
          ],
          series: [{ x: [1], y: [1], mode: "markers", label: "f(1)=1", color: "#1e5eff" }],
          puntosAbiertos: [{ x: 1, y: 3, label: "(1,3) abierto", color: "#00b894" }],
          xlabel: "x", ylabel: "y", rangeX: [-2.5, 4], rangeY: [-1, 9]
        }
      },
      {
        tipo: "tabla",
        titulo: "Valores de la función por tramos anterior",
        headers: ["x", "-1", "0", "1", "2"],
        rows: [["f(x)", "1", "0", "1", "5"]]
      },
      {
        tipo: "nota",
        titulo: "Dónde leer más (Stewart §2.2–2.3; Mickenberg §3.5)",
        html: "<p>Stewart trabaja la gráfica de funciones y la información que se obtiene de ella en las secciones 2.2 y 2.3. Mickenberg presenta las gráficas de las funciones reales básicas en la sección 3.5. La Clase 09 y el Apunte 10 insisten en el criterio de la recta vertical y en los ejemplos de valor absoluto y parte entera.</p>"
      }
    ],
    ejemplos: [
      {
        titulo: "Dominio y recorrido desde una semicircunferencia",
        enunciado: "<p>Trace la gráfica de $f(x)=\\sqrt{4-x^2}$ y determine su dominio y su recorrido usando la gráfica.</p>",
        concepto: "La gráfica se obtiene elevando al cuadrado: $y=\\sqrt{4-x^2}$ equivale a $x^2+y^2=4$ con $y\\ge0$. Luego se proyecta sobre los ejes para leer dominio y recorrido.",
        desarrollo: [
          "<b>Paso 1.</b> La raíz exige $4-x^2\\ge0$, es decir, $x^2\\le4$, o sea $-2\\le x\\le2$. Así, el dominio es $[-2,2]$.",
          "<b>Paso 2.</b> Si $y=\\sqrt{4-x^2}$, entonces $y\\ge0$ y $y^2=4-x^2$. Por lo tanto, $x^2+y^2=4$: es la circunferencia de centro $(0,0)$ y radio $2$.",
          "<b>Paso 3.</b> Como $y\\ge0$, tomamos solo la mitad superior de esa circunferencia.",
          "<b>Paso 4.</b> La sombra sobre el eje $x$ va de $-2$ a $2$; la sombra sobre el eje $y$ va de $0$ a $2$.",
          "<b>Paso 5.</b> Por lo tanto, $\\operatorname{Dom}(f)=[-2,2]$ y $\\operatorname{Rec}(f)=[0,2]$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=[-2,2]$ y $\\operatorname{Rec}(f)=[0,2]$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=√(4−x²): mitad superior de x²+y²=4",
          funciones: [{ f: function (x) { return Math.sqrt(4 - x * x); }, desde: -2, hasta: 2, label: "f(x)=√(4−x²)", color: "#1e5eff" }],
          xlabel: "x", ylabel: "y", rangeX: [-3, 3], rangeY: [-1, 3]
        }
      },
      {
        titulo: "Evaluar y graficar por tramos",
        enunciado: "<p>Considere $$f(x)=\\begin{cases}x^2, & x\\le1,\\\\ 2x+1, & x>1.\\end{cases}$$ Calcule $f(-2)$, $f(1)$ y $f(2)$; luego grafique e indique dominio y recorrido.</p>",
        concepto: "Se aplica la definición de función por tramos: primero se ubica la entrada en el intervalo correcto y después se usa la fórmula correspondiente. El punto $x=1$ pertenece al primer tramo porque la condición es $x\\le1$.",
        desarrollo: [
          "<b>Paso 1.</b> Para $x=-2$, como $-2\\le1$, usamos $x^2$: $f(-2)=(-2)^2=4$.",
          "<b>Paso 2.</b> Para $x=1$, como $1\\le1$, usamos $x^2$: $f(1)=1^2=1$. No usamos $2x+1$ porque ese tramo pide $x>1$.",
          "<b>Paso 3.</b> Para $x=2$, como $2>1$, usamos $2x+1$: $f(2)=2(2)+1=5$.",
          "<b>Paso 4.</b> La gráfica es la parábola $y=x^2$ hasta $x=1$ (punto cerrado en $(1,1)$) y la recta $y=2x+1$ para $x>1$ (punto abierto en $(1,3)$).",
          "<b>Paso 5.</b> El dominio es $\\R$. El tramo $x^2$ ya produce todos los valores $[0,+\\infty[$; el tramo $2x+1$ produce valores mayores que $3$, que están contenidos en ese intervalo. Así, $\\operatorname{Rec}(f)=[0,+\\infty[$."
        ],
        respuesta: "$f(-2)=4$, $f(1)=1$, $f(2)=5$; $\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=[0,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "La gráfica tiene un salto en x=1",
          funciones: [
            { f: function (x) { return x * x; }, desde: -2.2, hasta: 1, label: "x², x≤1", color: "#1e5eff" },
            { f: function (x) { return 2 * x + 1; }, desde: 1, hasta: 3.5, label: "2x+1, x>1", color: "#00b894" }
          ],
          series: [{ x: [1], y: [1], mode: "markers", label: "f(1)=1", color: "#1e5eff" }],
          puntosAbiertos: [{ x: 1, y: 3, label: "(1,3) abierto", color: "#00b894" }],
          xlabel: "x", ylabel: "y", rangeX: [-2.5, 4], rangeY: [-1, 9]
        }
      },
      {
        titulo: "El criterio de la recta vertical",
        enunciado: "<p>Decida si las curvas $y=x^2$ y $x=y^2$ representan funciones $y=f(x)$. Justifique con el criterio de la recta vertical.</p>",
        concepto: "El criterio de la recta vertical distingue una gráfica de función de una curva cualquiera. La segunda curva tiene dos valores de $y$ para un mismo $x$ positivo.",
        desarrollo: [
          "<b>Paso 1.</b> La curva $y=x^2$ es una parábola que abre hacia arriba. Cualquier recta vertical $x=a$ la corta en un solo punto, $(a,a^2)$. Por lo tanto, sí es gráfica de una función.",
          "<b>Paso 2.</b> La curva $x=y^2$ es una parábola que abre hacia la derecha. Si tomamos $x=1$, la ecuación queda $1=y^2$, es decir, $y=1$ o $y=-1$.",
          "<b>Paso 3.</b> La recta vertical $x=1$ corta la curva en dos puntos: $(1,1)$ y $(1,-1)$. Eso viola el criterio.",
          "<b>Paso 4.</b> Por lo tanto, $x=y^2$ no define a $y$ como función de $x$ en todo su dominio. Podríamos separarla en dos ramas, $y=\\sqrt{x}$ e $y=-\\sqrt{x}$, pero la curva completa no es una función."
        ],
        respuesta: "$y=x^2$ sí es función; $x=y^2$ no lo es, porque la recta $x=1$ la corta dos veces.",
        grafico: {
          tipo: "plot2d", titulo: "y=x² (función) versus x=y² (no es función de x)",
          funciones: [{ f: function (x) { return x * x; }, desde: -2.2, hasta: 2.2, label: "y=x²", color: "#1e5eff" }],
          series: [
            { x: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map(function (t) { return t * t; }), y: [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2], mode: "lines", label: "x=y²", color: "#e17055" }
          ],
          xlabel: "x", ylabel: "y", rangeX: [-3, 4], rangeY: [-3, 3]
        }
      }
    ],
    ejercicios: [
      {
        titulo: "Evaluar una función por tramos",
        dificultad: "basico",
        enunciado: "<p>Sea $$f(x)=\\begin{cases}2x+1, & x<0,\\\\ x^2, & x\\ge0.\\end{cases}$$ Calcule $f(-2)$, $f(0)$ y $f(3)$.</p>",
        concepto: "Cada entrada se evalúa con el tramo que contiene su valor. El $0$ pertenece al segundo tramo porque la condición es $x\\ge0$.",
        pista: "Revisa el signo de la entrada antes de elegir la fórmula.",
        desarrollo: [
          "Para $x=-2<0$, usamos $2x+1$: $f(-2)=2(-2)+1=-4+1=-3$.",
          "Para $x=0\\ge0$, usamos $x^2$: $f(0)=0^2=0$.",
          "Para $x=3\\ge0$, usamos $x^2$: $f(3)=3^2=9$."
        ],
        respuesta: "$f(-2)=-3$, $f(0)=0$ y $f(3)=9$."
      },
      {
        titulo: "Gráfica con salto",
        dificultad: "basico",
        enunciado: "<p>Grafique $$f(x)=\\begin{cases}-x+2, & x<0,\\\\ x^2, & x\\ge0.\\end{cases}$$ e indique su dominio y recorrido.</p>",
        concepto: "Se grafica cada tramo por separado. En $x=0$ hay un punto abierto en la recta y uno cerrado en la parábola.",
        pista: "La recta $y=-x+2$ llegaría a $(0,2)$, pero ese punto no pertenece al tramo $x<0$.",
        desarrollo: [
          "Para $x<0$ dibujamos la recta $y=-x+2$, que es decreciente y llega al punto abierto $(0,2)$.",
          "Para $x\\ge0$ dibujamos la parábola $y=x^2$, que parte en el punto cerrado $(0,0)$.",
          "El dominio es $\\R$, pues todo número real cae en alguno de los dos tramos.",
          "La recta produce valores mayores que $2$; la parábola produce todos los valores $[0,+\\infty[$.",
          "La unión de ambos recorridos es $[0,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=[0,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=−x+2 si x<0; f(x)=x² si x≥0",
          funciones: [
            { f: function (x) { return -x + 2; }, desde: -2.5, hasta: 0, label: "−x+2, x<0", color: "#1e5eff" },
            { f: function (x) { return x * x; }, desde: 0, hasta: 2.5, label: "x², x≥0", color: "#00b894" }
          ],
          series: [{ x: [0], y: [0], mode: "markers", label: "f(0)=0", color: "#00b894" }],
          puntosAbiertos: [{ x: 0, y: 2, label: "(0,2) abierto", color: "#1e5eff" }],
          xlabel: "x", ylabel: "y", rangeX: [-3, 3], rangeY: [-1, 7]
        }
      },
      {
        titulo: "Reflexión y raíz",
        dificultad: "intermedio",
        enunciado: "<p>Considere $f(x)=2-\\sqrt{x+1}$. Determine dominio, recorrido y trace su gráfica a partir de la gráfica de $y=\\sqrt{x}$.</p>",
        concepto: "La expresión se obtiene de $\\sqrt{x}$ con una traslación horizontal, una reflexión y una traslación vertical. El dominio y el recorrido se pueden leer de la fórmula y de la gráfica.",
        pista: "Escriba $f(x)=-\\sqrt{x+1}+2$ y piense primero en el dominio de la raíz.",
        desarrollo: [
          "La raíz exige $x+1\\ge0$, es decir, $x\\ge-1$. Por lo tanto, $\\operatorname{Dom}(f)=[-1,+\\infty[$.",
          "Como $\\sqrt{x+1}\\ge0$, al multiplicar por $-1$ se obtiene $-\\sqrt{x+1}\\le0$. Sumando $2$: $f(x)\\le2$.",
          "El valor $2$ se alcanza cuando $x+1=0$, es decir, en $x=-1$: $f(-1)=2-0=2$.",
          "Al crecer $x$, la raíz crece sin cota y $f(x)$ se hace tan negativa como queramos.",
          "Así, $\\operatorname{Rec}(f)=]-\\infty,2]$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=[-1,+\\infty[$ y $\\operatorname{Rec}(f)=]-\\infty,2]$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=2−√(x+1)",
          funciones: [{ f: function (x) { return 2 - Math.sqrt(x + 1); }, desde: -1, hasta: 8, label: "f(x)=2−√(x+1)", color: "#8e44ad" }],
          xlabel: "x", ylabel: "y", rangeX: [-2, 9], rangeY: [-2, 3]
        }
      },
      {
        titulo: "Valor absoluto como función por tramos",
        dificultad: "intermedio",
        enunciado: "<p>Escriba $f(x)=|x-3|$ como función por tramos, grafique y determine su dominio y recorrido.</p>",
        concepto: "El valor absoluto se define por tramos según el signo de su argumento. Aquí el argumento $x-3$ cambia de signo en $x=3$.",
        pista: "Separe los casos $x-3\\ge0$ y $x-3<0$.",
        desarrollo: [
          "Si $x-3\\ge0$, es decir, $x\\ge3$, entonces $|x-3|=x-3$.",
          "Si $x-3<0$, es decir, $x<3$, entonces $|x-3|=-(x-3)=-x+3$.",
          "Por lo tanto, $$f(x)=\\begin{cases}-x+3, & x<3,\\\\ x-3, & x\\ge3.\\end{cases}$$",
          "La gráfica son dos rectas que se encuentran en el vértice $(3,0)$ y forman una V.",
          "El dominio es $\\R$ y el valor absoluto nunca es negativo; el mínimo $0$ se alcanza en $x=3$. Así, $\\operatorname{Rec}(f)=[0,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=[0,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=|x−3|",
          funciones: [{ f: function (x) { return Math.abs(x - 3); }, desde: -1, hasta: 7, label: "f(x)=|x−3|", color: "#e6a817" }],
          xlabel: "x", ylabel: "y", rangeX: [-1, 7], rangeY: [-1, 5]
        }
      },
      {
        titulo: "La función parte entera",
        dificultad: "avanzado",
        enunciado: "<p>Considere $f(x)=\\lfloor x\\rfloor$, el mayor entero menor o igual que $x$. Calcule $\\lfloor2{,}7\\rfloor$, $\\lfloor-0{,}3\\rfloor$ y $\\lfloor3\\rfloor$. Luego indique dominio y recorrido y explique por qué su gráfica es una escalera.</p>",
        concepto: "La parte entera es una función por tramos con infinitos tramos. En cada intervalo $[n,n+1[$ toma el valor constante $n$. Es clave recordar que para números negativos el piso baja al entero anterior, no se redondea hacia cero.",
        pista: "Para $-0{,}3$, busca el mayor entero que sea menor o igual que $-0{,}3$.",
        desarrollo: [
          "Como $2\\le2{,}7<3$, el mayor entero menor o igual que $2{,}7$ es $2$: $\\lfloor2{,}7\\rfloor=2$.",
          "Como $-1\\le-0{,}3<0$, el mayor entero menor o igual que $-0{,}3$ es $-1$: $\\lfloor-0{,}3\\rfloor=-1$.",
          "Como $3$ ya es entero, $\\lfloor3\\rfloor=3$.",
          "El dominio es $\\R$: todo número real tiene un piso. El recorrido es $\\Z$, porque la función solo entrega enteros y cada entero $n$ se obtiene en el intervalo $[n,n+1[$.",
          "La gráfica está formada por segmentos horizontales de altura $n$. En cada entero hay un punto cerrado a la izquierda y un punto abierto a la derecha, lo que produce la forma de escalera."
        ],
        respuesta: "$\\lfloor2{,}7\\rfloor=2$, $\\lfloor-0{,}3\\rfloor=-1$, $\\lfloor3\\rfloor=3$; $\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=\\Z$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=⌊x⌋: una escalera",
          series: [
            { x: [-2, -1], y: [-2, -2], mode: "lines", label: "−2", color: "#1e5eff" },
            { x: [-1, 0], y: [-1, -1], mode: "lines", label: "−1", color: "#00b894" },
            { x: [0, 1], y: [0, 0], mode: "lines", label: "0", color: "#e17055" },
            { x: [1, 2], y: [1, 1], mode: "lines", label: "1", color: "#8e44ad" },
            { x: [2, 3], y: [2, 2], mode: "lines", label: "2", color: "#e6a817" }
          ],
          puntosAbiertos: [
            { x: -1, y: -2, label: "", color: "#1e5eff" },
            { x: 0, y: -1, label: "", color: "#00b894" },
            { x: 1, y: 0, label: "", color: "#e17055" },
            { x: 2, y: 1, label: "", color: "#8e44ad" },
            { x: 3, y: 2, label: "", color: "#e6a817" }
          ],
          xlabel: "x", ylabel: "y", rangeX: [-2.5, 3.5], rangeY: [-2.5, 2.8]
        }
      }
    ],
    erroresComunes: [
      "Usar el criterio de la recta horizontal para decidir si una curva es función. El criterio correcto es el de la recta vertical.",
      "Evaluar un punto de cambio con el tramo equivocado. Por ejemplo, en $x=1$ hay que revisar si el tramo dice $x<1$ o $x\\le1$.",
      "Dibujar un punto abierto como si estuviera incluido, o cerrar un extremo que la fórmula excluye.",
      "Unir dos tramos con una línea continua cuando en realidad hay un salto.",
      "Calcular $\\lfloor-0{,}3\\rfloor=0$: el piso de un negativo baja al entero anterior, no se redondea hacia cero."
    ],
    checklist: [
      "Puedo construir una tabla de valores y ubicar los puntos en el plano.",
      "Sé aplicar el criterio de la recta vertical y explicar por qué funciona.",
      "Puedo leer dominio y recorrido proyectando una gráfica sobre los ejes.",
      "Sé evaluar una función por tramos revisando primero el intervalo de la entrada.",
      "Distingo punto abierto de punto cerrado en una gráfica.",
      "Puedo escribir el valor absoluto y la parte entera como funciones por tramos."
    ],
    autoevaluacion: [
      {
        pregunta: "Una curva es gráfica de una función $y=f(x)$ si y solo si:",
        opciones: ["Toda recta horizontal la corta una sola vez.", "Ninguna recta vertical la corta más de una vez.", "Pasa por el origen.", "Es simétrica respecto del eje $y$."],
        correcta: 1,
        explicacion: "El criterio de la recta vertical garantiza que cada entrada $x$ tenga a lo más una salida $y$. El criterio de la recta horizontal se usa para inyectividad, no para decidir si es función."
      },
      {
        pregunta: "Para $$f(x)=\\begin{cases}x^2, & x\\le1,\\\\ 2x+1, & x>1,\\end{cases}$$ el valor $f(1)$ es:",
        opciones: ["$3$", "$1$", "$2$", "No está definido"],
        correcta: 1,
        explicacion: "Como $1\\le1$, se usa el primer tramo: $f(1)=1^2=1$. El valor $3$ sería el límite por la derecha, pero no es el valor de la función en $1$."
      },
      {
        pregunta: "El recorrido de $f(x)=\\sqrt{4-x^2}$ es:",
        opciones: ["$[-2,2]$", "$[0,4]$", "$[0,2]$", "$\\R$"],
        correcta: 2,
        explicacion: "La gráfica es la mitad superior de la circunferencia de radio $2$. La altura varía entre $0$ y $2$, ambos incluidos."
      },
      {
        pregunta: "El valor de $\\lfloor-0{,}2\\rfloor$ es:",
        opciones: ["$0$", "$-0{,}2$", "$-1$", "$1$"],
        correcta: 2,
        explicacion: "El mayor entero menor o igual que $-0{,}2$ es $-1$, pues $-1\\le-0{,}2<0$."
      },
      {
        pregunta: "La curva $x=y^2$ no es gráfica de una función $y=f(x)$ porque:",
        opciones: ["No pasa por el origen.", "La recta vertical $x=1$ la corta en dos puntos.", "Tiene forma de parábola.", "Su dominio es todo $\\R$."],
        correcta: 1,
        explicacion: "En $x=1$ se tiene $y=1$ o $y=-1$. Una misma entrada tendría dos salidas, lo que contradice la definición de función."
      },
      {
        pregunta: "El dominio y recorrido de $f(x)=|x+2|$ son, respectivamente:",
        opciones: ["$\\R$ y $[0,+\\infty[$", "$[-2,+\\infty[$ y $[0,+\\infty[$", "$\\R$ y $[2,+\\infty[$", "$[-2,2]$ y $[0,2]$"],
        correcta: 0,
        explicacion: "El valor absoluto está definido para todo real y nunca es negativo. El mínimo $0$ se alcanza en $x=-2$."
      }
    ],
    resumen: [
      "La gráfica de $f$ es el conjunto de puntos $(x,f(x))$; dominio y recorrido se leen proyectando sobre los ejes $x$ e $y$.",
      "El criterio de la recta vertical decide si una curva es función: ninguna recta vertical puede cortarla más de una vez.",
      "En una función por tramos se elige la fórmula según el intervalo de la entrada; los extremos abiertos y cerrados deben respetarse al graficar."
    ],
    referencias: [
      { titulo: "Clase 09 — Gráficas de funciones (PDF)", ruta: "recursos/clases/clase-09.pdf" },
      { titulo: "Apunte Clase 10 — Gráfica de funciones (PDF)", ruta: "recursos/apuntes/apunte-clase-10.pdf" },
      { titulo: "Guía 4 — Funciones (PDF)", ruta: "recursos/guias/guia-04-funciones.pdf" },
      { titulo: "Stewart, Precálculo, Cap. 2 (PDF)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
