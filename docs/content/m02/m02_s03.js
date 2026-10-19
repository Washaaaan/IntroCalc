/* Módulo 2 · Sección 3 — Transformaciones de funciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m02_s03", modulo: 2, moduloNombre: "Módulo 2 · Funciones y gráficas", orden: 11,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Transformaciones de funciones",
    objetivo: "Obtener la gráfica de una función a partir de una gráfica conocida, identificando traslaciones, reflexiones y alargamientos o compresiones, y actualizar correctamente el dominio y el recorrido.",
    conexion: "Ya sabes graficar funciones básicas como $x^2$, $\\sqrt{x}$, $|x|$ y $1/x$. Ahora aprenderás a mover, estirar y reflejar esas gráficas sin tener que calcular punto por punto.",
    fuente: "Clase 10 · Apunte 10 · Apunte 11 · Stewart §2.5 · I4 2025",
    prerrequisitos: ["Gráficas de funciones básicas", "Dominio y recorrido", "Valor absoluto", "Puntos clave de una gráfica"],
    teoria: [
      {
        tipo: "texto",
        html: "<p>Las transformaciones permiten reutilizar una gráfica conocida. Si sabemos cómo se ve $y=f(x)$, entonces $y=f(x-h)+k$, $y=-f(x)$ o $y=2f(x)$ se obtienen moviendo, reflejando o estirando esa misma curva. Esto ahorra tablas de valores y ayuda a reconocer familias de funciones.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Traslaciones verticales y horizontales",
        html: "<p>Sea $c>0$.</p><ul><li>$y=f(x)+c$: la gráfica sube $c$ unidades.</li><li>$y=f(x)-c$: la gráfica baja $c$ unidades.</li><li>$y=f(x-c)$: la gráfica se desplaza $c$ unidades a la <b>derecha</b>.</li><li>$y=f(x+c)$: la gráfica se desplaza $c$ unidades a la <b>izquierda</b>.</li></ul><p>La traslación horizontal parece «al revés» porque el cambio ocurre dentro de la función: para obtener el mismo valor de $f$, la nueva entrada debe compensar el desplazamiento.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Reflexiones",
        html: "<p>Las reflexiones cambian el signo de una coordenada:</p><ul><li>$y=-f(x)$: reflexión respecto del <b>eje $x$</b>; cada punto $(x,y)$ pasa a $(x,-y)$.</li><li>$y=f(-x)$: reflexión respecto del <b>eje $y$</b>; cada punto $(x,y)$ pasa a $(-x,y)$.</li></ul><p>No son lo mismo: $-f(x)$ cambia las alturas, mientras que $f(-x)$ cambia las entradas.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Alargamientos y compresiones",
        html: "<p>Sea $A>0$ y $b>0$.</p><ul><li>$y=Af(x)$: si $A>1$, alarga verticalmente por factor $A$; si $0<A<1$, comprime verticalmente por factor $A$.</li><li>$y=f(bx)$: si $b>1$, comprime horizontalmente por factor $1/b$; si $0<b<1$, alarga horizontalmente por factor $1/b$.</li></ul><p>En vertical multiplicamos las salidas; en horizontal, el factor actúa como recíproco porque estamos cambiando la velocidad con que se recorre la entrada.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Forma general y orden de las transformaciones",
        html: "<p>La forma general es</p>$$y=A\\,f\\big(b(x-h)\\big)+k.$$<p>El parámetro $h$ produce una traslación horizontal, $k$ una vertical, $A$ un cambio vertical (con reflexión si $A<0$) y $b$ un cambio horizontal (con reflexión si $b<0$).</p><p>Un orden seguro para graficar es:</p><ol><li>Reflexiones.</li><li>Alargamientos o compresiones.</li><li>Traslaciones.</li></ol><p>Si la expresión horizontal está escrita como $f(bx-c)$, conviene factorizar $b$: $f\\big(b(x-c/b)\\big)$. Así se ve que la traslación horizontal es $c/b$, no $c$.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Cómo cambian dominio y recorrido",
        html: "<p>Las transformaciones verticales afectan al <b>recorrido</b>: multiplicar por $A$ y luego sumar $k$. Si $A<0$, el orden de los extremos se invierte.</p><p>Las transformaciones horizontales afectan al <b>dominio</b>: si $x$ se reemplaza por $b(x-h)$, resolvemos</p>$$p\\le b(x-h)\\le q$$<p>donde $[p,q]$ es el dominio original. También podemos transformar los puntos extremos directamente.</p>"
      },
      {
        tipo: "html",
        html: "<div class='callout'><b>En palabras simples:</b> una transformación es una instrucción sobre la gráfica. «Súbele 2», «muévela 3 a la derecha», «dale vuelta como un espejo» o «estírala al doble». El dominio y el recorrido se actualizan según lo que hicimos.</div>"
      },
      {
        tipo: "grafico",
        spec: {
          tipo: "plot2d", titulo: "De y=x² a y=(x−2)²+1: derecha 2 y arriba 1",
          funciones: [
            { f: function (x) { return x * x; }, desde: -3, hasta: 3, label: "y=x²", color: "#1e5eff", dash: "dot" },
            { f: function (x) { return (x - 2) * (x - 2) + 1; }, desde: -1, hasta: 5, label: "y=(x−2)²+1", color: "#e17055" }
          ],
          series: [
            { x: [0], y: [0], mode: "markers", label: "vértice (0,0)", color: "#1e5eff" },
            { x: [2], y: [1], mode: "markers", label: "vértice (2,1)", color: "#e17055" },
            { x: [2, 2], y: [-1, 8], mode: "lines", dash: "dash", label: "eje de simetría x=2", color: "#8e44ad" }
          ],
          xlabel: "x", ylabel: "y", rangeX: [-3, 6], rangeY: [-1, 8]
        }
      },
      {
        tipo: "tabla",
        titulo: "Resumen de transformaciones",
        headers: ["Expresión", "Efecto sobre la gráfica"],
        rows: [
          ["$f(x)+k$", "Sube o baja $k$ unidades"],
          ["$f(x-h)$", "Se mueve $h$ unidades a la derecha"],
          ["$-f(x)$", "Reflexión en el eje $x$"],
          ["$f(-x)$", "Reflexión en el eje $y$"],
          ["$Af(x)$", "Alarga o comprime verticalmente"],
          ["$f(bx)$", "Comprime o alarga horizontalmente"]
        ]
      },
      {
        tipo: "nota",
        titulo: "Dónde leer más (Stewart §2.5; Clase 10)",
        html: "<p>Stewart dedica la sección 2.5 a las transformaciones de funciones y a la construcción de gráficas a partir de funciones conocidas. La Clase 10 y el Apunte 10 ordenan las transformaciones en reflexiones, compresiones o alargamientos y traslaciones. El Apunte 11 aplica la misma idea a la función cuadrática y a la raíz cuadrada.</p>"
      }
    ],
    ejemplos: [
      {
        titulo: "Trasladar una parábola",
        enunciado: "<p>A partir de la gráfica de $f(x)=x^2$, describa las transformaciones que producen $g(x)=(x-2)^2+1$. Determine el vértice, el dominio y el recorrido de $g$.</p>",
        concepto: "Se compara $g(x)=(x-2)^2+1$ con la forma $f(x-h)+k$. La expresión interna $x-2$ produce un desplazamiento horizontal a la derecha, y el $+1$ exterior produce un desplazamiento vertical hacia arriba.",
        desarrollo: [
          "<b>Paso 1.</b> Escribimos $g(x)=f(x-2)+1$, con $f(x)=x^2$.",
          "<b>Paso 2.</b> El $-2$ dentro de $f$ mueve la gráfica $2$ unidades a la derecha; el $+1$ fuera la mueve $1$ unidad hacia arriba.",
          "<b>Paso 3.</b> El vértice original $(0,0)$ se transforma en $(0+2,\\,0+1)=(2,1)$.",
          "<b>Paso 4.</b> La parábola sigue abriendo hacia arriba. El dominio no cambia: $\\operatorname{Dom}(g)=\\R$.",
          "<b>Paso 5.</b> El valor mínimo es la coordenada $y$ del vértice, $1$, y se alcanza en $x=2$. Por lo tanto, $\\operatorname{Rec}(g)=[1,+\\infty[$."
        ],
        respuesta: "$g$ se obtiene desplazando $y=x^2$ dos unidades a la derecha y una hacia arriba. Vértice: $(2,1)$; $\\operatorname{Dom}(g)=\\R$ y $\\operatorname{Rec}(g)=[1,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "Parábola original y parábola trasladada",
          funciones: [
            { f: function (x) { return x * x; }, desde: -3, hasta: 3, label: "y=x²", color: "#1e5eff", dash: "dot" },
            { f: function (x) { return (x - 2) * (x - 2) + 1; }, desde: -1, hasta: 5, label: "y=(x−2)²+1", color: "#e17055" }
          ],
          series: [{ x: [2], y: [1], mode: "markers", label: "(2,1)", color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [-3, 6], rangeY: [-1, 8]
        }
      },
      {
        titulo: "Reflexión, estiramiento y traslación de una raíz",
        enunciado: "<p>Describa las transformaciones que llevan de $y=\\sqrt{x}$ a $$h(x)=-2\\sqrt{x+1}+3.$$ Determine el dominio, el recorrido y el punto inicial de la gráfica.</p>",
        concepto: "La función se obtiene aplicando la forma general $A f(x-h)+k$ con $f(x)=\\sqrt{x}$, $A=-2$, $h=-1$ y $k=3$. El signo de $A$ refleja en el eje $x$; su valor absoluto estira verticalmente.",
        desarrollo: [
          "<b>Paso 1.</b> Partimos de $f(x)=\\sqrt{x}$.",
          "<b>Paso 2.</b> $\\sqrt{x+1}$ desplaza la gráfica $1$ unidad a la izquierda (el $+1$ dentro actúa al revés).",
          "<b>Paso 3.</b> Multiplicar por $2$ estira verticalmente al doble: $2\\sqrt{x+1}$.",
          "<b>Paso 4.</b> El signo menos refleja respecto del eje $x$: $-2\\sqrt{x+1}$.",
          "<b>Paso 5.</b> Sumar $3$ sube la gráfica $3$ unidades: $h(x)=-2\\sqrt{x+1}+3$.",
          "<b>Paso 6.</b> La raíz exige $x+1\\ge0$, así que $\\operatorname{Dom}(h)=[-1,+\\infty[$. El punto inicial es $(-1,3)$.",
          "<b>Paso 7.</b> Como $-2\\sqrt{x+1}\\le0$, se tiene $h(x)\\le3$. El máximo $3$ se alcanza en $x=-1$. Por lo tanto, $\\operatorname{Rec}(h)=]-\\infty,3]$."
        ],
        respuesta: "$\\operatorname{Dom}(h)=[-1,+\\infty[$ y $\\operatorname{Rec}(h)=]-\\infty,3]$. La gráfica parte en $(-1,3)$ y baja indefinidamente hacia la derecha.",
        grafico: {
          tipo: "plot2d", titulo: "h(x)=−2√(x+1)+3",
          funciones: [{ f: function (x) { return -2 * Math.sqrt(x + 1) + 3; }, desde: -1, hasta: 7, label: "h(x)=−2√(x+1)+3", color: "#8e44ad" }],
          series: [{ x: [-1], y: [3], mode: "markers", label: "inicio (−1,3)", color: "#8e44ad" }],
          xlabel: "x", ylabel: "y", rangeX: [-2, 8], rangeY: [-5, 4]
        }
      },
      {
        titulo: "Transformaciones con una función desconocida",
        enunciado: "<p>Sea $f:[-2,4]\\to[-2,2]$ una función con recorrido $[-2,2]$. Se define $$g(x)=2-\\frac12 f(-x+3).$$ Determine las transformaciones que llevan de $f$ a $g$, y encuentre el dominio y el recorrido de $g$.</p>",
        concepto: "Se reescribe la expresión como $g(x)=-\\frac12 f(-(x-3))+2$. Cada operación afecta de manera distinta al dominio y al recorrido: lo horizontal cambia el dominio; lo vertical, el recorrido.",
        desarrollo: [
          "<b>Paso 1.</b> Escribimos $g(x)=-\\frac12 f(-(x-3))+2$.",
          "<b>Paso 2.</b> El signo dentro de $f$ produce una reflexión respecto del eje $y$: $f(-x)$.",
          "<b>Paso 3.</b> El $x-3$ dentro produce una traslación $3$ unidades a la derecha.",
          "<b>Paso 4.</b> El factor $\\frac12$ comprime verticalmente por factor $\\frac12$; el signo menos refleja respecto del eje $x$; el $+2$ sube $2$ unidades.",
          "<b>Paso 5.</b> Dominio: como el argumento es $-x+3$ y debe estar en $[-2,4]$, resolvemos $-2\\le-x+3\\le4$. Restando $3$: $-5\\le-x\\le1$; multiplicando por $-1$ se invierte: $5\\ge x\\ge-1$. Así, $\\operatorname{Dom}(g)=[-1,5]$.",
          "<b>Paso 6.</b> Recorrido: como el recorrido de $f$ es $[-2,2]$, al multiplicar por $-\\frac12$ el intervalo se invierte y queda $[-1,1]$. Sumando $2$: $[1,3]$.",
          "<b>Paso 7.</b> Por lo tanto, $\\operatorname{Rec}(g)=[1,3]$."
        ],
        respuesta: "Transformaciones: reflexión en el eje $y$, traslación $3$ a la derecha, compresión vertical por $\\frac12$, reflexión en el eje $x$ y traslación $2$ hacia arriba. $\\operatorname{Dom}(g)=[-1,5]$ y $\\operatorname{Rec}(g)=[1,3]$."
      }
    ],
    ejercicios: [
      {
        titulo: "Identificar una traslación",
        dificultad: "basico",
        enunciado: "<p>Describa las transformaciones que llevan de $y=x^2$ a $y=(x+3)^2-4$. Indique el vértice y el recorrido.</p>",
        concepto: "La forma $(x-h)^2+k$ muestra una traslación horizontal y otra vertical. Aquí $x+3=x-(-3)$, así que la traslación horizontal es hacia la izquierda.",
        pista: "Compare $x+3$ con $x-h$ para reconocer el signo de $h$.",
        desarrollo: [
          "Escribimos $y=(x-(-3))^2-4$. Por lo tanto, $h=-3$ y $k=-4$.",
          "La gráfica se desplaza $3$ unidades a la izquierda y $4$ hacia abajo.",
          "El vértice original $(0,0)$ se convierte en $(-3,-4)$.",
          "La parábola abre hacia arriba, así que el valor mínimo es $-4$.",
          "Por lo tanto, $\\operatorname{Rec}(y)=[-4,+\\infty[$."
        ],
        respuesta: "Vértice $(-3,-4)$; $\\operatorname{Rec}=[-4,+\\infty[$."
      },
      {
        titulo: "Raíz desplazada",
        dificultad: "basico",
        enunciado: "<p>Determine el dominio y el recorrido de $y=\\sqrt{x-2}+1$ a partir de la gráfica de $y=\\sqrt{x}$.</p>",
        concepto: "La expresión $\\sqrt{x-2}$ traslada la raíz $2$ unidades a la derecha; el $+1$ la sube una unidad.",
        pista: "El dominio de la raíz se obtiene pidiendo $x-2\\ge0$.",
        desarrollo: [
          "La raíz exige $x-2\\ge0$, es decir, $x\\ge2$. Así, $\\operatorname{Dom}=[2,+\\infty[$.",
          "La gráfica de $\\sqrt{x}$ parte en $(0,0)$; al desplazarla $2$ a la derecha y $1$ arriba, el nuevo punto inicial es $(2,1)$.",
          "Como $\\sqrt{x-2}\\ge0$, se tiene $y\\ge1$, y el valor $1$ se alcanza en $x=2$.",
          "Por lo tanto, $\\operatorname{Rec}=[1,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}=[2,+\\infty[$ y $\\operatorname{Rec}=[1,+\\infty[$."
      },
      {
        titulo: "Valor absoluto reflejado",
        dificultad: "intermedio",
        enunciado: "<p>Grafique $y=-|x+1|+3$ a partir de $y=|x|$ e indique vértice, dominio y recorrido.</p>",
        concepto: "Se aplican una traslación horizontal a la izquierda, una reflexión en el eje $x$ y una traslación vertical hacia arriba. El vértice de la V se mueve y la V queda invertida.",
        pista: "El vértice de $|x|$ es $(0,0)$. ¿A dónde llega después de los desplazamientos?",
        desarrollo: [
          "La expresión $x+1=x-(-1)$ desplaza la gráfica $1$ unidad a la izquierda.",
          "El signo menos delante de $|x+1|$ refleja la V respecto del eje $x$, dejándola hacia abajo.",
          "El $+3$ sube la gráfica $3$ unidades.",
          "El vértice $(0,0)$ se transforma en $(-1,3)$. La V invertida alcanza su máximo en $3$ y baja sin cota.",
          "El dominio es $\\R$ y $\\operatorname{Rec}=]-\\infty,3]$."
        ],
        respuesta: "Vértice $(-1,3)$; $\\operatorname{Dom}=\\R$ y $\\operatorname{Rec}=]-\\infty,3]$.",
        grafico: {
          tipo: "plot2d", titulo: "y=−|x+1|+3",
          funciones: [{ f: function (x) { return -Math.abs(x + 1) + 3; }, desde: -5, hasta: 3, label: "y=−|x+1|+3", color: "#e17055" }],
          series: [{ x: [-1], y: [3], mode: "markers", label: "vértice (−1,3)", color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [-5, 3], rangeY: [-1, 5]
        }
      },
      {
        titulo: "Dominio y recorrido transformados",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f$ una función con dominio $[-1,3]$ y recorrido $[0,4]$. Determine el dominio y el recorrido de $$g(x)=3f(x-2)-1.$$</p>",
        concepto: "La traslación horizontal cambia el dominio; el estiramiento vertical y la traslación vertical cambian el recorrido.",
        pista: "Si $x-2$ debe estar entre $-1$ y $3$, entonces $x$ debe estar entre $1$ y $5$.",
        desarrollo: [
          "El argumento de $f$ es $x-2$ y debe pertenecer a $[-1,3]$: $-1\\le x-2\\le3$.",
          "Sumando $2$: $1\\le x\\le5$. Por lo tanto, $\\operatorname{Dom}(g)=[1,5]$.",
          "Los valores de $f$ recorren $[0,4]$. Al multiplicar por $3$ se obtiene $[0,12]$.",
          "Al restar $1$ se obtiene $[-1,11]$. Por lo tanto, $\\operatorname{Rec}(g)=[-1,11]$."
        ],
        respuesta: "$\\operatorname{Dom}(g)=[1,5]$ y $\\operatorname{Rec}(g)=[-1,11]$."
      },
      {
        titulo: "Transformaciones de una función racional",
        dificultad: "avanzado",
        enunciado: "<p>La gráfica de $$f(x)=-1-\\frac{1}{2-x}$$ se obtiene a partir de la gráfica de $g(x)=\\frac1x$ mediante transformaciones. Identifique una secuencia de transformaciones, determine el dominio y el recorrido de $f$, y explique qué le ocurre a la asíntota vertical.</p>",
        concepto: "Primero se reescribe la expresión en una forma que muestre las transformaciones respecto de $1/x$. Luego se sigue el movimiento de la asíntota y de los valores que toma la función.",
        pista: "Observe que $-\\dfrac{1}{2-x}=\\dfrac{1}{x-2}$.",
        desarrollo: [
          "<b>Paso 1.</b> Simplificamos: $$f(x)=-1+\\frac{1}{x-2}=\\frac{1}{x-2}-1.$$",
          "<b>Paso 2.</b> Partimos de $g(x)=\\frac1x$. La expresión $\\frac{1}{x-2}$ es una traslación de $2$ unidades a la derecha.",
          "<b>Paso 3.</b> Restar $1$ produce una traslación de $1$ unidad hacia abajo. Así, $f(x)=\\frac{1}{x-2}-1$.",
          "<b>Paso 4.</b> La asíntota vertical original $x=0$ se traslada $2$ unidades a la derecha: ahora es $x=2$. El dominio es $\\R\\setminus\\{2\\}$.",
          "<b>Paso 5.</b> La asíntota horizontal original $y=0$ se traslada $1$ unidad hacia abajo: ahora es $y=-1$. La función nunca toma el valor $-1$, pero se acerca a él. Por lo tanto, $\\operatorname{Rec}(f)=\\R\\setminus\\{-1\\}$."
        ],
        respuesta: "Traslación $2$ unidades a la derecha y $1$ hacia abajo. $\\operatorname{Dom}(f)=\\R\\setminus\\{2\\}$ y $\\operatorname{Rec}(f)=\\R\\setminus\\{-1\\}$; asíntotas $x=2$ e $y=-1$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=1/(x−2)−1",
          funciones: [
            { f: function (x) { return 1 / (x - 2) - 1; }, desde: -4, hasta: 1.85, label: "rama izquierda", color: "#1e5eff" },
            { f: function (x) { return 1 / (x - 2) - 1; }, desde: 2.15, hasta: 8, label: "rama derecha", color: "#1e5eff" }
          ],
          asintotas: [{ tipo: "vertical", x: 2 }, { tipo: "horizontal", y: -1 }],
          xlabel: "x", ylabel: "y", rangeX: [-4, 8], rangeY: [-5, 4]
        }
      }
    ],
    erroresComunes: [
      "Mover al revés en horizontal: $f(x-3)$ se desplaza a la derecha, no a la izquierda.",
      "Confundir $-f(x)$ con $f(-x)$: la primera refleja en el eje $x$; la segunda, en el eje $y$.",
      "Decir que $f(2x)$ estira horizontalmente al doble. En realidad comprime por factor $1/2$.",
      "Olvidar que un factor negativo invierte el orden del recorrido: el máximo puede pasar a ser mínimo.",
      "Cambiar el dominio cuando solo se hizo una transformación vertical, o el recorrido cuando solo se hizo una horizontal."
    ],
    checklist: [
      "Puedo reconocer la forma $A f(b(x-h))+k$ y separar cada parámetro.",
      "Sé si una traslación horizontal va a la derecha o a la izquierda.",
      "Distingo reflexión en el eje $x$ de reflexión en el eje $y$.",
      "Sé si un factor horizontal alarga o comprime, y por qué el factor es recíproco.",
      "Puedo actualizar el dominio y el recorrido después de una transformación.",
      "Puedo graficar una función transformada a partir de su función base sin hacer una tabla completa."
    ],
    autoevaluacion: [
      {
        pregunta: "La gráfica de $y=f(x-3)$ se obtiene de la de $y=f(x)$:",
        opciones: ["Desplazándola $3$ unidades a la izquierda.", "Desplazándola $3$ unidades a la derecha.", "Desplazándola $3$ unidades hacia arriba.", "Comprimiéndola horizontalmente por factor $3$."],
        correcta: 1,
        explicacion: "El cambio está dentro de la función. Para que el argumento valga lo mismo que antes, $x$ debe aumentar en $3$; por eso la gráfica se mueve a la derecha."
      },
      {
        pregunta: "El vértice de $y=(x+1)^2-2$ es:",
        opciones: ["$(1,-2)$", "$(-1,-2)$", "$(-1,2)$", "$(1,2)$"],
        correcta: 1,
        explicacion: "La forma es $(x-h)^2+k$ con $h=-1$ y $k=-2$. El vértice es $(-1,-2)$."
      },
      {
        pregunta: "La transformación $y=-f(x)$ corresponde a:",
        opciones: ["Una reflexión en el eje $y$.", "Una traslación hacia abajo.", "Una reflexión en el eje $x$.", "Una compresión vertical."],
        correcta: 2,
        explicacion: "El signo menos multiplica las salidas: cada $(x,y)$ pasa a $(x,-y)$, que es una reflexión respecto del eje $x$."
      },
      {
        pregunta: "La gráfica de $y=f(2x)$ se obtiene de la de $y=f(x)$:",
        opciones: ["Comprimiéndola horizontalmente por factor $1/2$.", "Estirándola horizontalmente por factor $2$.", "Estirándola verticalmente por factor $2$.", "Desplazándola $2$ unidades a la derecha."],
        correcta: 0,
        explicacion: "Al duplicar la entrada, la función recorre los mismos valores en la mitad del eje $x$. Por eso hay una compresión horizontal por factor $1/2$."
      },
      {
        pregunta: "El dominio de $y=\\sqrt{x-4}+1$ es:",
        opciones: ["$[1,+\\infty[$", "$[4,+\\infty[$", "$[-4,+\\infty[$", "$\\R$"],
        correcta: 1,
        explicacion: "La raíz exige $x-4\\ge0$, es decir, $x\\ge4$. El $+1$ exterior solo mueve la gráfica hacia arriba; no cambia el dominio."
      },
      {
        pregunta: "El recorrido de $y=-2(x-1)^2+5$ es:",
        opciones: ["$[5,+\\infty[$", "$[-5,+\\infty[$", "$]-\\infty,5]$", "$]-\\infty,-5]$"],
        correcta: 2,
        explicacion: "Como $(x-1)^2\\ge0$, se tiene $-2(x-1)^2\\le0$, así que $y\\le5$. El máximo $5$ se alcanza en $x=1$."
      }
    ],
    resumen: [
      "Las traslaciones mueven la gráfica: $f(x)+k$ en vertical y $f(x-h)$ en horizontal, con el signo horizontal actuando al revés.",
      "Las reflexiones cambian de signo una coordenada; los factores $A$ y $b$ alargan o comprimen en vertical y horizontal, respectivamente.",
      "El dominio se actualiza con los cambios horizontales y el recorrido con los verticales; si hay un factor negativo, se invierte el orden de los extremos."
    ],
    referencias: [
      { titulo: "Clase 10 — Transformaciones de funciones (PDF)", ruta: "recursos/clases/clase-10.pdf" },
      { titulo: "Apunte Clase 10 — Gráfica de funciones (PDF)", ruta: "recursos/apuntes/apunte-clase-10.pdf" },
      { titulo: "Apunte Clase 11 — Función cuadrática (PDF)", ruta: "recursos/apuntes/apunte-clase-11.pdf" },
      { titulo: "I4 2025 — Transformaciones (PDF)", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin4-mat1107.pdf" }
    ]
  });
})();
