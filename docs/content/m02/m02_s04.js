/* Módulo 2 · Sección 4 — Función lineal y cuadrática */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m02_s04", modulo: 2, moduloNombre: "Módulo 2 · Funciones y gráficas", orden: 12,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Función lineal y cuadrática",
    objetivo: "Modelar situaciones con funciones lineales y cuadráticas, interpretar la pendiente y el vértice, y resolver problemas de optimización usando la forma vértice y la fórmula cuadrática.",
    conexion: "Ya sabes graficar rectas y parábolas y reconocer transformaciones. Ahora usaremos esas herramientas para describir funciones lineales y cuadráticas, encontrar sus elementos y resolver problemas de máximos y mínimos.",
    fuente: "Apuntes 10–11 · Guía 6 · Stewart §1.10, §3.1 · Mickenberg §9.1, §9.4 · I4 2023",
    prerrequisitos: ["Pendiente de una recta", "Completación de cuadrado", "Ecuaciones cuadráticas", "Transformaciones de funciones"],
    teoria: [
      {
        tipo: "texto",
        html: "<p>La función lineal describe cambios a <b>razón constante</b>: cada vez que $x$ aumenta una unidad, $y$ cambia siempre lo mismo. La función cuadrática describe cambios que primero disminuyen y luego aumentan (o al revés), y aparece en áreas, ingresos, trayectorias y optimización. Son los dos modelos más usados en las primeras aplicaciones del cálculo.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Función lineal",
        html: "<p>Una <b>función lineal</b> tiene la forma</p>$$f(x)=mx+b,$$<p>donde $m$ es la <b>pendiente</b> y $b$ es la <b>intersección con el eje $y$</b>. Su gráfica es una recta. Si $m>0$, la función es creciente; si $m<0$, es decreciente; si $m=0$, es constante.</p><p>Si $m\\neq0$, $\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=\\R$. Si $m=0$, $\\operatorname{Rec}(f)=\\{b\\}$.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Pendiente y ecuación de la recta",
        html: "<p>Dados dos puntos $(x_1,y_1)$ y $(x_2,y_2)$ con $x_1\\neq x_2$, la pendiente es</p>$$m=\\frac{y_2-y_1}{x_2-x_1}.$$<p>La ecuación punto-pendiente es</p>$$y-y_1=m(x-x_1).$$<p>Una recta vertical tiene ecuación $x=a$; no es gráfica de una función $y=f(x)$ porque una misma entrada tendría infinitas salidas.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Función cuadrática",
        html: "<p>Una <b>función cuadrática</b> tiene la forma</p>$$f(x)=ax^2+bx+c,\\qquad a\\neq0.$$<p>Su gráfica es una <b>parábola</b>. Si $a>0$, abre hacia arriba y tiene un mínimo; si $a<0$, abre hacia abajo y tiene un máximo. El eje de simetría es la recta vertical que pasa por el vértice.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Forma vértice y completación de cuadrado",
        html: "<p>Toda cuadrática puede escribirse en la forma</p>$$f(x)=a(x-h)^2+k,$$<p>donde</p>$$h=-\\frac{b}{2a},\\qquad k=f(h)=c-\\frac{b^2}{4a}.$$<p>El vértice es $(h,k)$. Si $a>0$, el recorrido es $[k,+\\infty[$; si $a<0$, es $]-\\infty,k]$. La recta $x=h$ es el eje de simetría.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Raíces e intersecciones con el eje x",
        html: "<p>Las raíces de $ax^2+bx+c=0$ se obtienen con la fórmula cuadrática:</p>$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}.$$<p>El <b>discriminante</b> $\\Delta=b^2-4ac$ decide cuántas raíces reales hay:</p><ul><li>$\\Delta>0$: dos raíces reales distintas.</li><li>$\\Delta=0$: una raíz real doble (el vértice está en el eje $x$).</li><li>$\\Delta<0$: ninguna raíz real; la parábola no corta el eje $x$.</li></ul>"
      },
      {
        tipo: "teorema",
        titulo: "Optimización con cuadráticas",
        html: "<p>En muchos problemas de área, ingreso o altura, la cantidad que se quiere maximizar o minimizar es cuadrática. Una vez escrita en la forma $A(x)=a(x-h)^2+k$, el vértice entrega de inmediato el valor óptimo: $k$ es el máximo si $a<0$ y el mínimo si $a>0$.</p><p>No olvides restringir $x$ a los valores que tengan sentido en el problema (longitudes positivas, capacidad máxima, tiempo no negativo, etc.).</p>"
      },
      {
        tipo: "html",
        html: "<div class='callout'><b>En palabras simples:</b> la recta avanza siempre con la misma inclinación. La parábola se dobla y tiene una cima o un valle; el vértice es el punto más alto o más bajo. Para optimizar, buscamos ese vértice.</div>"
      },
      {
        tipo: "grafico",
        spec: {
          tipo: "plot2d", titulo: "f(x)=x²−4x+3: vértice (2,−1) y raíces 1 y 3",
          funciones: [{ f: function (x) { return x * x - 4 * x + 3; }, desde: -1, hasta: 5, label: "f(x)=x²−4x+3", color: "#1e5eff" }],
          series: [
            { x: [2], y: [-1], mode: "markers", label: "vértice (2,−1)", color: "#e17055" },
            { x: [1, 3], y: [0, 0], mode: "markers", label: "raíces 1 y 3", color: "#00b894" },
            { x: [2, 2], y: [-3, 5], mode: "lines", dash: "dash", label: "eje de simetría x=2", color: "#8e44ad" }
          ],
          xlabel: "x", ylabel: "y", rangeX: [-1, 5], rangeY: [-3, 5]
        }
      },
      {
        tipo: "tabla",
        titulo: "Lineal versus cuadrática",
        headers: ["Aspecto", "f(x)=mx+b", "f(x)=ax²+bx+c"],
        rows: [
          ["Gráfica", "Recta", "Parábola"],
          ["Dominio", "$\\R$", "$\\R$"],
          ["Recorrido", "$\\R$ si $m\\neq0$", "$[k,+\\infty[$ si $a>0$; $]-\\infty,k]$ si $a<0$"],
          ["Punto especial", "Pendiente $m$", "Vértice $(h,k)$"],
          ["Crecimiento", "Constante", "Cambia en el vértice"]
        ]
      },
      {
        tipo: "nota",
        titulo: "Dónde leer más (Stewart §1.10 y §3.1; Guía 6)",
        html: "<p>Stewart repasa rectas en la sección 1.10 y funciones cuadráticas en la 3.1. Mickenberg trabaja la línea recta en 9.1 y la parábola en 9.4. La Guía 6 contiene problemas de optimización de áreas e ingresos, además de ejercicios de vértice.</p>"
      }
    ],
    ejemplos: [
      {
        titulo: "Recta que pasa por dos puntos",
        enunciado: "<p>Encuentre la función lineal cuya gráfica pasa por $(2,5)$ y $(6,13)$. Determine su dominio, su recorrido y su crecimiento.</p>",
        concepto: "Con dos puntos calculamos la pendiente mediante la fórmula de la clase y luego usamos la ecuación punto-pendiente. La pendiente indica cuánto cambia $y$ por cada unidad que aumenta $x$.",
        desarrollo: [
          "<b>Paso 1.</b> Calculamos la pendiente: $$m=\\frac{13-5}{6-2}=\\frac{8}{4}=2.$$",
          "<b>Paso 2.</b> Usamos el punto $(2,5)$: $y-5=2(x-2)$.",
          "<b>Paso 3.</b> Desarrollamos: $y-5=2x-4$, luego $y=2x+1$.",
          "<b>Paso 4.</b> Verificamos con el otro punto: $2(6)+1=13$. La ecuación es correcta.",
          "<b>Paso 5.</b> Como $m=2>0$, la función es creciente. $\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=\\R$."
        ],
        respuesta: "$f(x)=2x+1$, creciente; $\\operatorname{Dom}(f)=\\R$ y $\\operatorname{Rec}(f)=\\R$.",
        grafico: {
          tipo: "plot2d", titulo: "Recta por (2,5) y (6,13)",
          funciones: [{ f: function (x) { return 2 * x + 1; }, desde: 0, hasta: 7, label: "y=2x+1", color: "#1e5eff" }],
          series: [{ x: [2, 6], y: [5, 13], mode: "markers", label: "puntos dados", color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [0, 7], rangeY: [0, 15]
        }
      },
      {
        titulo: "Forma vértice de una cuadrática",
        enunciado: "<p>Escriba $f(x)=5x^2-30x+49$ en forma vértice. Determine el vértice, el eje de simetría, el recorrido y la orientación de la parábola.</p>",
        concepto: "Completamos el cuadrado para pasar de la forma general a $a(x-h)^2+k$. El coeficiente $a=5$ es positivo, así que la parábola abre hacia arriba y el vértice entrega el mínimo.",
        desarrollo: [
          "<b>Paso 1.</b> Factorizamos $5$ en los términos con $x$: $$f(x)=5(x^2-6x)+49.$$",
          "<b>Paso 2.</b> Completamos el cuadrado dentro del paréntesis: $x^2-6x=(x-3)^2-9$.",
          "<b>Paso 3.</b> Sustituimos: $$f(x)=5\\big((x-3)^2-9\\big)+49=5(x-3)^2-45+49.$$",
          "<b>Paso 4.</b> Simplificamos: $f(x)=5(x-3)^2+4$.",
          "<b>Paso 5.</b> El vértice es $(3,4)$ y el eje de simetría es $x=3$. Como $a=5>0$, la parábola abre hacia arriba y el mínimo es $4$.",
          "<b>Paso 6.</b> Por lo tanto, $\\operatorname{Rec}(f)=[4,+\\infty[$."
        ],
        respuesta: "$f(x)=5(x-3)^2+4$; vértice $(3,4)$, eje $x=3$, $\\operatorname{Rec}(f)=[4,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=5(x−3)²+4",
          funciones: [{ f: function (x) { return 5 * (x - 3) * (x - 3) + 4; }, desde: 1.5, hasta: 4.5, label: "f(x)=5(x−3)²+4", color: "#00b894" }],
          series: [{ x: [3], y: [4], mode: "markers", label: "vértice (3,4)", color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [1.5, 4.5], rangeY: [0, 15]
        }
      },
      {
        titulo: "Maximizar el área de una canal",
        enunciado: "<p>Una lámina metálica rectangular de $28$ cm de ancho se dobla hacia arriba por ambos lados para formar una canal. Si cada lado se dobla $x$ cm, determine el área máxima de la sección transversal.</p>",
        concepto: "El área de la sección transversal es un producto de dos longitudes que dependen de $x$. Al expresarla como función cuadrática, su máximo se encuentra en el vértice. También hay que respetar el dominio físico: las longitudes deben ser positivas.",
        desarrollo: [
          "<b>Paso 1.</b> Al doblar $x$ cm de cada lado, el ancho del fondo es $28-2x$ cm, y la altura de los lados es $x$ cm.",
          "<b>Paso 2.</b> El área de la sección transversal es $$A(x)=x(28-2x)=-2x^2+28x.$$",
          "<b>Paso 3.</b> Completamos el cuadrado: $$A(x)=-2(x^2-14x)=-2\\big((x-7)^2-49\\big)=-2(x-7)^2+98.$$",
          "<b>Paso 4.</b> La parábola abre hacia abajo ($a=-2<0$), así que el vértice $(7,98)$ es un máximo.",
          "<b>Paso 5.</b> El dominio físico es $0<x<14$, pues el fondo $28-2x$ debe ser positivo. El valor $x=7$ está permitido.",
          "<b>Paso 6.</b> El área máxima es $98\\text{ cm}^2$, que se alcanza doblando $7$ cm por lado."
        ],
        respuesta: "El área máxima es $98\\text{ cm}^2$, con $x=7$ cm por lado.",
        grafico: {
          tipo: "plot2d", titulo: "Área A(x)=x(28−2x)",
          funciones: [{ f: function (x) { return x * (28 - 2 * x); }, desde: 0, hasta: 14, label: "A(x)=x(28−2x)", color: "#8e44ad" }],
          series: [{ x: [7], y: [98], mode: "markers", label: "máximo (7,98)", color: "#e17055" }],
          xlabel: "x (cm)", ylabel: "A (cm²)", rangeX: [0, 14], rangeY: [0, 110]
        }
      }
    ],
    ejercicios: [
      {
        titulo: "Pendiente e intersecciones",
        dificultad: "basico",
        enunciado: "<p>Para $f(x)=-2x+3$, indique la pendiente, la intersección con el eje $y$, la intersección con el eje $x$ y si la función es creciente o decreciente.</p>",
        concepto: "En la forma $f(x)=mx+b$, el coeficiente de $x$ es la pendiente y el término constante es la intersección con el eje $y$. El signo de $m$ determina el crecimiento.",
        pista: "La intersección con el eje $x$ se obtiene resolviendo $f(x)=0$.",
        desarrollo: [
          "La pendiente es $m=-2$ y la intersección con el eje $y$ es $b=3$, en el punto $(0,3)$.",
          "Para el eje $x$: $-2x+3=0\\Rightarrow 2x=3\\Rightarrow x=\\tfrac32$. El punto es $(\\tfrac32,0)$.",
          "Como $m=-2<0$, la función es decreciente.",
          "Su dominio y recorrido son $\\R$."
        ],
        respuesta: "Pendiente $-2$; corta el eje $y$ en $(0,3)$ y el eje $x$ en $(\\tfrac32,0)$; es decreciente.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=−2x+3",
          funciones: [{ f: function (x) { return -2 * x + 3; }, desde: -1, hasta: 3, label: "f(x)=−2x+3", color: "#1e5eff" }],
          series: [{ x: [0, 1.5], y: [3, 0], mode: "markers", label: "intersecciones", color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [-1, 3], rangeY: [-3, 5]
        }
      },
      {
        titulo: "Vértice de una parábola que abre hacia abajo",
        dificultad: "basico",
        enunciado: "<p>Determine el vértice de $f(x)=-6x^2+2x-4$ e indique si es máximo o mínimo. Escriba el recorrido.</p>",
        concepto: "El vértice se obtiene con $h=-\\frac{b}{2a}$ y $k=f(h)$. El signo de $a$ decide si es máximo o mínimo.",
        pista: "Aquí $a=-6$, $b=2$ y $c=-4$.",
        desarrollo: [
          "Calculamos $h=-\\dfrac{2}{2(-6)}=-\\dfrac{2}{-12}=\\dfrac16$.",
          "Evaluamos: $$k=f\\left(\\frac16\\right)=-6\\left(\\frac1{36}\\right)+2\\left(\\frac16\\right)-4=-\\frac16+\\frac13-4.$$",
          "Entonces $k=\\dfrac16-4=-\\dfrac{23}{6}$.",
          "Como $a=-6<0$, la parábola abre hacia abajo y el vértice es un máximo.",
          "El recorrido es $\\left]-\\infty,-\\dfrac{23}{6}\\right]$."
        ],
        respuesta: "Vértice $\\left(\\dfrac16,-\\dfrac{23}{6}\\right)$, máximo; $\\operatorname{Rec}(f)=\\left]-\\infty,-\\dfrac{23}{6}\\right]$."
      },
      {
        titulo: "Analizar una parábola completa",
        dificultad: "intermedio",
        enunciado: "<p>Para $f(x)=x^2-6x+5$, encuentre la forma vértice, el vértice, las raíces, el recorrido y la intersección con el eje $y$.</p>",
        concepto: "Se completa el cuadrado para el vértice y se resuelve la ecuación $f(x)=0$ para las raíces. La orientación de la parábola determina el recorrido.",
        pista: "Observa que $x^2-6x+5=(x-3)^2-4$.",
        desarrollo: [
          "Completamos el cuadrado: $x^2-6x+5=(x^2-6x+9)-9+5=(x-3)^2-4$.",
          "El vértice es $(3,-4)$ y el eje de simetría es $x=3$.",
          "Raíces: $(x-3)^2-4=0\\Rightarrow (x-3)^2=4\\Rightarrow x-3=\\pm2$.",
          "Así, $x=1$ o $x=5$. La parábola corta el eje $x$ en $(1,0)$ y $(5,0)$.",
          "Como $a=1>0$, abre hacia arriba y el mínimo es $-4$: $\\operatorname{Rec}(f)=[-4,+\\infty[$.",
          "La intersección con el eje $y$ se obtiene con $x=0$: $f(0)=5$, punto $(0,5)$."
        ],
        respuesta: "$f(x)=(x-3)^2-4$; vértice $(3,-4)$; raíces $1$ y $5$; $\\operatorname{Rec}(f)=[-4,+\\infty[$; corte en $y$: $(0,5)$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x)=x²−6x+5",
          funciones: [{ f: function (x) { return x * x - 6 * x + 5; }, desde: 0, hasta: 6, label: "f(x)=x²−6x+5", color: "#00b894" }],
          series: [
            { x: [3], y: [-4], mode: "markers", label: "vértice (3,−4)", color: "#e17055" },
            { x: [1, 5], y: [0, 0], mode: "markers", label: "raíces", color: "#1e5eff" }
          ],
          xlabel: "x", ylabel: "y", rangeX: [0, 6], rangeY: [-5, 6]
        }
      },
      {
        titulo: "Maximizar el ingreso de un estadio",
        dificultad: "intermedio",
        enunciado: "<p>Un estadio tiene capacidad para $15\\,000$ espectadores. Con una entrada a $\\$14$, asisten $9\\,500$ personas. Un estudio indica que por cada dólar que baja el precio, la asistencia aumenta en $1\\,000$ personas. Determine el precio que maximiza el ingreso y el ingreso máximo.</p>",
        concepto: "El ingreso es precio por cantidad de asistentes. Si $x$ es la cantidad de dólares rebajados, tanto el precio como la asistencia dependen de $x$, y el producto es una función cuadrática cuyo máximo está en el vértice.",
        pista: "Ingreso: $(14-x)(9500+1000x)$. Recuerda que la capacidad impone $9500+1000x\\le15000$.",
        desarrollo: [
          "Sea $x$ la rebaja en dólares. El precio es $14-x$ y la asistencia es $9500+1000x$.",
          "La capacidad exige $9500+1000x\\le15000$, es decir, $x\\le5{,}5$. Además $x\\ge0$.",
          "El ingreso es $$R(x)=(14-x)(9500+1000x)=-1000x^2+4500x+133\\,000.$$",
          "El vértice está en $$x=-\\frac{4500}{2(-1000)}=2{,}25.$$",
          "Como $a=-1000<0$, es un máximo. El precio óptimo es $14-2{,}25=\\$11{,}75$.",
          "La asistencia es $9500+1000(2{,}25)=11\\,750$ personas.",
          "El ingreso máximo es $11{,}75\\cdot11\\,750=\\$138\\,062{,}50$.",
          "Si el precio debe ser un número entero de dólares, el mejor es $\\$12$, con ingreso $\\$138\\,000$."
        ],
        respuesta: "Precio óptimo: $\\$11{,}75$ (o $\\$12$ si se exige precio entero). Ingreso máximo: $\\$138\\,062{,}50$ (o $\\$138\\,000$ con precio entero)."
      },
      {
        titulo: "Parámetro para un mínimo dado",
        dificultad: "avanzado",
        enunciado: "<p>Sea $\\lambda\\in\\R$ y $$f(x)=3x^2+\\lambda x+10.$$ Escriba $f$ en forma vértice y determine los valores de $\\lambda$ para que el valor mínimo de $f$ sea $-2$.</p>",
        concepto: "Se completa el cuadrado dejando $\\lambda$ como parámetro. El valor mínimo es la coordenada $k$ del vértice; igualando $k=-2$ se obtiene una ecuación para $\\lambda$.",
        pista: "Escriba $3\\left(x^2+\\frac{\\lambda}{3}x\\right)+10$ y complete el cuadrado dentro del paréntesis.",
        desarrollo: [
          "Factorizamos $3$: $$f(x)=3\\left(x^2+\\frac{\\lambda}{3}x\\right)+10.$$",
          "Completamos el cuadrado: $x^2+\\frac{\\lambda}{3}x=\\left(x+\\frac{\\lambda}{6}\\right)^2-\\frac{\\lambda^2}{36}$.",
          "Entonces $$f(x)=3\\left(x+\\frac{\\lambda}{6}\\right)^2-\\frac{\\lambda^2}{12}+10.$$",
          "El mínimo se alcanza en $x=-\\frac{\\lambda}{6}$ y vale $k=10-\\frac{\\lambda^2}{12}$.",
          "Imponemos $10-\\frac{\\lambda^2}{12}=-2$: $$\\frac{\\lambda^2}{12}=12\\Rightarrow\\lambda^2=144\\Rightarrow\\lambda=\\pm12.$$",
          "Por lo tanto, los valores pedidos son $\\lambda=12$ y $\\lambda=-12$."
        ],
        respuesta: "$f(x)=3\\left(x+\\frac{\\lambda}{6}\\right)^2+10-\\frac{\\lambda^2}{12}$; $\\lambda=\\pm12$."
      }
    ],
    erroresComunes: [
      "Calcular la pendiente con los puntos en el orden incorrecto y cambiar el signo sin necesidad.",
      "Confundir la pendiente $m$ con la intersección $b$ en $f(x)=mx+b$.",
      "Usar $h=\\frac{b}{2a}$ en vez de $h=-\\frac{b}{2a}$ al buscar el vértice.",
      "Decir que el recorrido de una cuadrática es $\\R$; en realidad es un intervalo con extremo en el vértice.",
      "En optimización, ignorar las restricciones físicas del problema, como longitudes positivas o capacidad máxima."
    ],
    checklist: [
      "Puedo obtener la ecuación de una recta a partir de dos puntos.",
      "Sé interpretar la pendiente y la intersección con el eje $y$ en un contexto.",
      "Puedo completar el cuadrado para escribir una cuadrática en forma vértice.",
      "Sé calcular el vértice con $h=-b/(2a)$ y reconocer si es máximo o mínimo.",
      "Puedo determinar raíces, intersecciones y recorrido de una parábola.",
      "Sé plantear y resolver un problema de optimización con una función cuadrática."
    ],
    autoevaluacion: [
      {
        pregunta: "La pendiente de la recta que pasa por $(1,2)$ y $(3,8)$ es:",
        opciones: ["$2$", "$\\frac13$", "$3$", "$6$"],
        correcta: 2,
        explicacion: "$m=\\dfrac{8-2}{3-1}=\\dfrac62=3$."
      },
      {
        pregunta: "El vértice de $f(x)=x^2-4x+1$ es:",
        opciones: ["$(-2,-3)$", "$(2,-3)$", "$(2,1)$", "$(4,1)$"],
        correcta: 1,
        explicacion: "$h=-\\dfrac{-4}{2(1)}=2$ y $k=f(2)=4-8+1=-3$. El vértice es $(2,-3)$."
      },
      {
        pregunta: "El recorrido de $f(x)=-x^2+4$ es:",
        opciones: ["$[4,+\\infty[$", "$]-\\infty,4]$", "$\\R$", "$[0,+\\infty[$"],
        correcta: 1,
        explicacion: "Como $-x^2\\le0$, se tiene $f(x)\\le4$. El máximo $4$ se alcanza en $x=0$."
      },
      {
        pregunta: "Las raíces de $x^2-5x+6=0$ son:",
        opciones: ["$1$ y $6$", "$-2$ y $-3$", "$2$ y $3$", "$-1$ y $6$"],
        correcta: 2,
        explicacion: "Factorizando: $x^2-5x+6=(x-2)(x-3)$. Las raíces son $x=2$ y $x=3$."
      },
      {
        pregunta: "Si una parábola abre hacia abajo, su vértice corresponde a:",
        opciones: ["Un mínimo.", "Un máximo.", "Una raíz.", "La intersección con el eje $y$."],
        correcta: 1,
        explicacion: "Cuando $a<0$, la parábola se abre hacia abajo y el vértice es el punto más alto, es decir, un máximo."
      },
      {
        pregunta: "La recta $f(x)=3x-2$ corta al eje $y$ en:",
        opciones: ["$(0,3)$", "$(0,-2)$", "$(2,0)$", "$(-2,0)$"],
        correcta: 1,
        explicacion: "La intersección con el eje $y$ se obtiene evaluando $f(0)=3(0)-2=-2$, es decir, en $(0,-2)$."
      }
    ],
    resumen: [
      "La función lineal $f(x)=mx+b$ tiene pendiente constante $m$; su gráfica es una recta y su crecimiento depende del signo de $m$.",
      "La función cuadrática $f(x)=ax^2+bx+c$ tiene forma vértice $a(x-h)^2+k$, con vértice $(h,k)$ y recorrido determinado por el signo de $a$.",
      "El vértice resuelve problemas de optimización: entrega el máximo si $a<0$ y el mínimo si $a>0$, siempre dentro del dominio del problema."
    ],
    referencias: [
      { titulo: "Clase 09 — Gráficas de funciones (PDF)", ruta: "recursos/clases/clase-09.pdf" },
      { titulo: "Apunte Clase 10 — Gráfica de funciones (PDF)", ruta: "recursos/apuntes/apunte-clase-10.pdf" },
      { titulo: "Apunte Clase 11 — Función cuadrática (PDF)", ruta: "recursos/apuntes/apunte-clase-11.pdf" },
      { titulo: "Guía 6 — Funciones cuadráticas (PDF)", ruta: "recursos/guias/guia-06-cuadraticas.pdf" },
      { titulo: "I4 2023 — Optimización y parámetros (PDF)", ruta: "recursos/pruebas/PRUEBAS/2023-1/i4.pdf" }
    ]
  });
})();
