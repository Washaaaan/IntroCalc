/* Módulo 3 · Sección 5 — Álgebra y composición de funciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s05", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 17,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Álgebra y composición de funciones",
    objetivo: "Construir funciones a partir de sumas, diferencias, productos y cuocientes, determinar sus dominios, y calcular composiciones de funciones identificando correctamente el dominio resultante.",
    conexion: "Necesitas recordar qué es una función, cómo se calcula su dominio y cómo se lee una gráfica. Esas ideas de la clase anterior son la base para combinar dos funciones y para encadenar una después de otra.",
    fuente: "Clase 14 · Apunte 14 · Guía 7 · Stewart §2.6 · Mickenberg Cap. 3",
    prerrequisitos: ["Dominio y recorrido de una función", "Intervalos y desigualdades", "Raíces y racionales", "Evaluación de funciones"],
    teoria: [
      { tipo: "texto", html: "<p>En la práctica rara vez trabajamos con una sola función aislada. El costo total es la suma de un costo fijo y un costo variable; la ganancia es ingreso menos costo; la concentración de un medicamento puede depender de una dosis que a su vez depende del peso del paciente. El <b>álgebra de funciones</b> y la <b>composición</b> son las dos formas básicas de construir una función nueva a partir de funciones conocidas.</p>" },
      { tipo: "definicion", titulo: "Álgebra de funciones", html: "<p>Sean $f:A\\to C$ y $g:B\\to D$. Se definen:</p>$$(f+g)(x)=f(x)+g(x),\\qquad (f-g)(x)=f(x)-g(x),$$$$(fg)(x)=f(x)\\,g(x),\\qquad \\left(\\frac{f}{g}\\right)(x)=\\frac{f(x)}{g(x)}.$$<p>Las tres primeras tienen dominio $A\\cap B$. El cuociente tiene dominio</p>$$\\left\\{x\\in A\\cap B\\;\\middle|\\;g(x)\\neq 0\\right\\}.$$" },
      { tipo: "nota", titulo: "El dominio manda (Stewart §2.6)", html: "<p>Al sumar o multiplicar funciones <b>no</b> se puede simplificar y olvidar las restricciones originales. Por ejemplo, si $f(x)=x$ y $g(x)=\\frac{1}{x}$, entonces $(fg)(x)=1$, pero su dominio sigue siendo $\\R\\setminus\\{0\\}$, porque $g$ no está definida en $0$.</p>" },
      { tipo: "definicion", titulo: "Función compuesta", html: "<p>Dadas $f:A\\to C$ y $g:B\\to D$, la <b>compuesta</b> $g\\circ f$ se define por</p>$$(g\\circ f)(x)=g\\big(f(x)\\big).$$<p>Primero actúa $f$ y después $g$. Su dominio es</p>$$\\operatorname{Dom}(g\\circ f)=\\left\\{x\\in\\operatorname{Dom}(f)\\;\\middle|\\;f(x)\\in\\operatorname{Dom}(g)\\right\\}.$$" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> la composición es una <i>cadena de máquinas</i>. La primera máquina recibe $x$ y entrega $f(x)$; la segunda recibe ese resultado y entrega $g(f(x))$. La cadena se rompe si algún eslabón recibe un valor que no sabe procesar.</div>" },
      { tipo: "teorema", titulo: "Composición y biyectividad", html: "<p>Si $f:A\\to B$ y $g:B\\to C$ están bien definidas, entonces:</p><ul><li>si $f$ y $g$ son inyectivas, entonces $g\\circ f$ es inyectiva;</li><li>si $f$ y $g$ son sobreyectivas, entonces $g\\circ f$ es sobreyectiva;</li><li>en particular, la compuesta de dos biyecciones es una biyección.</li></ul>" },
      { tipo: "nota", titulo: "El orden importa", html: "<p>En general $g\\circ f\\neq f\\circ g$. Con $f(x)=2x+1$ y $g(x)=x^2$:</p>$$(g\\circ f)(x)=(2x+1)^2,\\qquad (f\\circ g)(x)=2x^2+1.$$<p>Además, a veces una de las dos composiciones ni siquiera está definida, porque el recorrido de la primera función no cabe dentro del dominio de la segunda.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Composición: g∘f y f∘g no coinciden", funciones: [ { f: function (x) { return Math.pow(x, 2) + 1; }, desde: -3, hasta: 3, label: "(g∘f)(x)=x²+1", color: "#1e5eff" }, { f: function (x) { return Math.pow(x + 1, 2); }, desde: -3, hasta: 3, label: "(f∘g)(x)=(x+1)²", color: "#e17055" }, { f: function (x) { return x; }, desde: -3, hasta: 3, label: "y=x (referencia)", color: "#8e44ad", dash: "dot" } ], xlabel: "x", ylabel: "y", rangeX: [-3.5, 3.5], rangeY: [-1, 9] } },
      { tipo: "tabla", titulo: "Resumen de dominios", headers: ["Operación", "Regla", "Dominio"], rows: [["Suma y resta", "$(f\\pm g)(x)=f(x)\\pm g(x)$", "$\\operatorname{Dom}(f)\\cap\\operatorname{Dom}(g)$"], ["Producto", "$(fg)(x)=f(x)g(x)$", "$\\operatorname{Dom}(f)\\cap\\operatorname{Dom}(g)$"], ["Cuociente", "$(f/g)(x)=f(x)/g(x)$", "$\\operatorname{Dom}(f)\\cap\\operatorname{Dom}(g)$ con $g(x)\\neq 0$"], ["Composición", "$(g\\circ f)(x)=g(f(x))$", "$\\{x\\in\\operatorname{Dom}(f): f(x)\\in\\operatorname{Dom}(g)\\}$"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> para el álgebra de funciones se <i>intersecan</i> los dominios; para la composición se <i>filtra</i> el dominio de la primera función exigiendo que su salida caiga dentro del dominio de la segunda. Nunca se calcula el dominio mirando solo la fórmula final.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Álgebra de funciones y dominio",
        enunciado: "<p>Sean $f(x)=\\dfrac{x+1}{\\sqrt{x+2}}$ y $g(x)=\\dfrac{x^2-1}{x^2-x-6}$. Calcule $(f+g)(2)$ y simplifique $(f/g)(x)$ indicando su dominio.</p>",
        concepto: "Se usa la definición de suma y cuociente de funciones. El dominio de la suma es la intersección de los dominios; en el cuociente además se excluyen los ceros de $g$.",
        desarrollo: [
          "<b>Paso 1.</b> Dominio de $f$: se necesita $x+2>0$, es decir, $x>-2$, porque la raíz está en el denominador.",
          "<b>Paso 2.</b> Dominio de $g$: se necesita $x^2-x-6=(x-3)(x+2)\\neq 0$, es decir, $x\\neq 3$ y $x\\neq -2$.",
          "<b>Paso 3.</b> Evaluamos en $x=2$, que pertenece a ambos dominios: $f(2)=\\dfrac{3}{\\sqrt{4}}=\\dfrac32$ y $g(2)=\\dfrac{4-1}{4-2-6}=\\dfrac{3}{-4}=-\\dfrac34$.",
          "<b>Paso 4.</b> Entonces $(f+g)(2)=\\dfrac32-\\dfrac34=\\dfrac{6-3}{4}=\\dfrac34$.",
          "<b>Paso 5.</b> Para el cuociente, invertimos $g$ y factorizamos: $$\\left(\\frac{f}{g}\\right)(x)=\\frac{x+1}{\\sqrt{x+2}}\\cdot\\frac{(x-3)(x+2)}{(x-1)(x+1)}=\\frac{(x-3)\\sqrt{x+2}}{x-1}.$$ Aquí usamos $\\dfrac{x+2}{\\sqrt{x+2}}=\\sqrt{x+2}$ y cancelamos $x+1$, lo que es válido para $x\\neq -1$.",
          "<b>Paso 6.</b> El dominio del cuociente es $x>-2$ con $x\\neq 3$ (cero de $g$) y $x\\neq 1$ (cero del numerador de $g$, que pasa a denominador). También se excluye $x=-1$ porque $g(-1)=0$, y $g$ no puede ser cero en el cuociente. La cancelación de $x+1$ no elimina esa restricción."
        ],
        respuesta: "$(f+g)(2)=\\dfrac34$ y $\\left(\\dfrac{f}{g}\\right)(x)=\\dfrac{(x-3)\\sqrt{x+2}}{x-1}$ con dominio $(-2,\\infty)\\setminus\\{-1,1,3\\}$."
      },
      {
        titulo: "Dominio de una composición con raíz",
        enunciado: "<p>Sean $f:(-\\infty,5)\\to\\R$, $f(x)=\\sqrt{x^2+4}$, y $g:[6,\\infty)\\to\\R$, $g(x)=2x+3$. Defina $g\\circ f$ y determine su dominio.</p>",
        concepto: "Se aplica la fórmula $\\operatorname{Dom}(g\\circ f)=\\{x\\in\\operatorname{Dom}(f): f(x)\\in\\operatorname{Dom}(g)\\}$. La condición sobre $f(x)$ se traduce en una inecuación.",
        desarrollo: [
          "<b>Paso 1.</b> La fórmula es $(g\\circ f)(x)=g\\big(\\sqrt{x^2+4}\\big)=2\\sqrt{x^2+4}+3$.",
          "<b>Paso 2.</b> Debe cumplirse $x<5$ (dominio de $f$) y además $\\sqrt{x^2+4}\\ge 6$ (para que la salida de $f$ entre al dominio de $g$).",
          "<b>Paso 3.</b> Como ambos lados son no negativos, elevamos al cuadrado: $x^2+4\\ge 36$, o sea $x^2\\ge 32$.",
          "<b>Paso 4.</b> Esto equivale a $x\\le -\\sqrt{32}=-4\\sqrt2$ o $x\\ge 4\\sqrt2$.",
          "<b>Paso 5.</b> Intersectamos con $x<5$. La parte $x\\ge 4\\sqrt2\\approx 5{,}66$ queda fuera, porque no es menor que $5$. Queda solo $x\\le -4\\sqrt2$."
        ],
        respuesta: "$(g\\circ f)(x)=2\\sqrt{x^2+4}+3$, con dominio $(-\\infty,-4\\sqrt2]$."
      },
      {
        titulo: "Composición en el orden contrario",
        enunciado: "<p>Con $f(x)=2x+1$ y $g(x)=x^2$, calcule $g\\circ f$ y $f\\circ g$, y evalúe ambas en $x=2$.</p>",
        concepto: "La composición no es conmutativa: hay que respetar el orden en que se aplican las funciones.",
        desarrollo: [
          "<b>Paso 1.</b> $(g\\circ f)(x)=g(f(x))=g(2x+1)=(2x+1)^2$.",
          "<b>Paso 2.</b> $(f\\circ g)(x)=f(g(x))=f(x^2)=2x^2+1$.",
          "<b>Paso 3.</b> En $x=2$: $(g\\circ f)(2)=(5)^2=25$.",
          "<b>Paso 4.</b> En $x=2$: $(f\\circ g)(2)=2\\cdot 4+1=9$.",
          "<b>Paso 5.</b> Los resultados son distintos, así que $g\\circ f\\neq f\\circ g$ como funciones."
        ],
        respuesta: "$(g\\circ f)(x)=(2x+1)^2$ y $(f\\circ g)(x)=2x^2+1$; en $x=2$ valen $25$ y $9$, respectivamente."
      }
    ],
    ejercicios: [
      {
        titulo: "Cuatro composiciones con raíces",
        dificultad: "basico",
        enunciado: "<p>Si $f(x)=\\sqrt{x}$ y $g(x)=\\sqrt{2-x}$, determine el dominio de $f\\circ g$, $g\\circ f$, $f\\circ f$ y $g\\circ g$.</p>",
        concepto: "Cada composición exige que la entrada de la función exterior sea válida.",
        pista: "Para $f\\circ g$ se necesita $2-x\\ge 0$ y además $\\sqrt{2-x}\\ge 0$, que siempre se cumple.",
        desarrollo: [
          "$f\\circ g$: $\\operatorname{Dom}(g)=(-\\infty,2]$ y $g(x)\\ge 0$ siempre entra a $\\operatorname{Dom}(f)=[0,\\infty)$. Luego $(f\\circ g)(x)=\\sqrt{\\sqrt{2-x}}$ tiene dominio $(-\\infty,2]$.",
          "$g\\circ f$: se necesita $x\\ge 0$ y $\\sqrt{x}\\le 2$, es decir, $0\\le x\\le 4$. Así, $(g\\circ f)(x)=\\sqrt{2-\\sqrt{x}}$ tiene dominio $[0,4]$.",
          "$f\\circ f$: $x\\ge 0$ y $\\sqrt{x}\\ge 0$, que siempre se cumple. Dominio $[0,\\infty)$ y $(f\\circ f)(x)=\\sqrt{\\sqrt{x}}=x^{1/4}$.",
          "$g\\circ g$: se necesita $x\\le 2$ y $\\sqrt{2-x}\\le 2$. Elevando al cuadrado: $2-x\\le 4$, o sea $x\\ge -2$. Dominio $[-2,2]$ y $(g\\circ g)(x)=\\sqrt{2-\\sqrt{2-x}}$."
        ],
        respuesta: "$(-\\infty,2]$, $[0,4]$, $[0,\\infty)$ y $[-2,2]$, respectivamente."
      },
      {
        titulo: "Descomponer una función",
        dificultad: "basico",
        enunciado: "<p>Sea $F(x)=\\sqrt[4]{x+9}$. Encuentre funciones $f$ y $g$ tales que $F=f\\circ g$.</p>",
        concepto: "Componer es encadenar; descomponer es reconocer la operación interna y la externa.",
        pista: "La operación más interna es sumar $9$; la más externa es la raíz cuarta.",
        desarrollo: [
          "Tomamos $g(x)=x+9$, que hace primero la suma.",
          "Tomamos $f(u)=\\sqrt[4]{u}$, que aplica la raíz cuarta al resultado anterior.",
          "Entonces $(f\\circ g)(x)=f(g(x))=\\sqrt[4]{x+9}=F(x)$."
        ],
        respuesta: "$g(x)=x+9$ y $f(u)=\\sqrt[4]{u}$ (o $f(x)=\\sqrt[4]{x}$)."
      },
      {
        titulo: "Composición cúbica y raíz cúbica",
        dificultad: "intermedio",
        enunciado: "<p>Con $f(x)=x^3+2$ y $g(x)=\\sqrt[3]{x}$, calcule $f\\circ g$, $g\\circ f$ y sus dominios.</p>",
        concepto: "La raíz cúbica está definida para todo real, por lo que no impone restricciones de dominio.",
        pista: "Recuerde que $\\sqrt[3]{x^3}=x$ para todo $x\\in\\R$.",
        desarrollo: [
          "$(f\\circ g)(x)=f(\\sqrt[3]{x})=(\\sqrt[3]{x})^3+2=x+2$.",
          "$(g\\circ f)(x)=g(x^3+2)=\\sqrt[3]{x^3+2}$.",
          "Ambas composiciones están definidas para todo $x\\in\\R$, pues $\\operatorname{Dom}(f)=\\operatorname{Dom}(g)=\\R$."
        ],
        respuesta: "$(f\\circ g)(x)=x+2$ y $(g\\circ f)(x)=\\sqrt[3]{x^3+2}$, ambas con dominio $\\R$."
      },
      {
        titulo: "Composición con cuociente",
        dificultad: "intermedio",
        enunciado: "<p>Si $f(x)=\\dfrac1x$ y $g(x)=2x+4$, determine $(f\\circ g)(x)$ y $(g\\circ f)(x)$ con sus dominios.</p>",
        concepto: "Hay que excluir los valores que anulan denominadores, tanto en la función interna como en la compuesta.",
        pista: "Para $f\\circ g$ se necesita $g(x)\\neq 0$; para $g\\circ f$ se necesita $x\\neq 0$.",
        desarrollo: [
          "$(f\\circ g)(x)=f(2x+4)=\\dfrac{1}{2x+4}$. El dominio es $\\R\\setminus\\{-2\\}$, pues $2x+4\\neq 0$.",
          "$(g\\circ f)(x)=g\\left(\\dfrac1x\\right)=2\\cdot\\dfrac1x+4=\\dfrac{2+4x}{x}$. El dominio es $\\R\\setminus\\{0\\}$.",
          "Observe que $f\\circ g$ y $g\\circ f$ tienen dominios distintos y fórmulas distintas."
        ],
        respuesta: "$(f\\circ g)(x)=\\dfrac{1}{2x+4}$ con dominio $\\R\\setminus\\{-2\\}$; $(g\\circ f)(x)=\\dfrac{2+4x}{x}$ con dominio $\\R\\setminus\\{0\\}$."
      },
      {
        titulo: "Composición por tramos",
        dificultad: "avanzado",
        enunciado: "<p>Sean $g(x)=-3x+1$ y $$f(x)=\\begin{cases}x^2+5 & \\text{si } x<-1,\\\\ 1-x & \\text{si } x\\ge -1.\\end{cases}$$ Determine $(g\\circ f)(x)$ y $(f\\circ g)(x)$.</p>",
        concepto: "Al componer con una función por tramos, el tramo que se usa depende del valor que entrega la función interna.",
        pista: "Para $g\\circ f$, pregunte cuándo $f(x)<-1$ y cuándo $f(x)\\ge -1$.",
        desarrollo: [
          "$(g\\circ f)(x)=-3f(x)+1$. Si $x<-1$, $f(x)=x^2+5$ y resulta $-3x^2-15+1=-3x^2-14$.",
          "Si $x\\ge -1$, $f(x)=1-x$ y resulta $-3(1-x)+1=3x-2$. Así, $$(g\\circ f)(x)=\\begin{cases}-3x^2-14 & x<-1,\\\\ 3x-2 & x\\ge -1.\\end{cases}$$",
          "$(f\\circ g)(x)=f(-3x+1)$. Usamos el tramo $x<-1$ de $f$ cuando $-3x+1<-1$, es decir, $x>\\dfrac23$.",
          "En ese caso, $f(-3x+1)=(-3x+1)^2+5=9x^2-6x+6$.",
          "Si $-3x+1\\ge -1$, es decir, $x\\le\\dfrac23$, usamos $f(-3x+1)=1-(-3x+1)=3x$."
        ],
        respuesta: "$$(g\\circ f)(x)=\\begin{cases}-3x^2-14 & x<-1,\\\\ 3x-2 & x\\ge -1,\\end{cases}\\qquad (f\\circ g)(x)=\\begin{cases}9x^2-6x+6 & x>\\frac23,\\\\ 3x & x\\le\\frac23.\\end{cases}$$"
      }
    ],
    erroresComunes: [
      "Calcular el dominio solo desde la fórmula simplificada y olvidar las restricciones originales de $f$ y $g$.",
      "Confundir $g\\circ f$ con $f\\circ g$; el orden de las funciones cambia el resultado.",
      "Al componer, reemplazar $x$ por $f(x)$ en la función equivocada o multiplicar en vez de evaluar.",
      "Incluir en el dominio de una composición valores donde la función interna no está definida.",
      "Al elevar al cuadrado una inecuación, no verificar que ambos lados sean no negativos."
    ],
    checklist: [
      "Sé calcular suma, resta, producto y cuociente de dos funciones y escribir su dominio.",
      "Sé explicar por qué el dominio del cuociente excluye los ceros del denominador.",
      "Sé calcular $g\\circ f$ y $f\\circ g$, y mostrar que en general son distintas.",
      "Sé determinar el dominio de una composición resolviendo la condición $f(x)\\in\\operatorname{Dom}(g)$.",
      "Sé descomponer una función dada como composición de dos funciones más simples.",
      "Sé componer cuando alguna de las funciones está definida por tramos."
    ],
    autoevaluacion: [
      { pregunta: "Si $f(x)=x^2$ y $g(x)=x+3$, entonces $(g\\circ f)(x)$ es:", opciones: ["$x^2+3$", "$(x+3)^2$", "$x^2+3x$", "$x^3+3$"], correcta: 0, explicacion: "$(g\\circ f)(x)=g(f(x))=g(x^2)=x^2+3$." },
      { pregunta: "El dominio de $f(x)=\\dfrac{1}{x-2}$ es:", opciones: ["$[2,\\infty)$", "$\\R$", "$\\R\\setminus\\{2\\}$", "$(-\\infty,2)$"], correcta: 2, explicacion: "El denominador se anula en $x=2$, y ese valor debe excluirse." },
      { pregunta: "Si $f(x)=\\sqrt{x}$ y $g(x)=x-4$, el dominio de $f\\circ g$ es:", opciones: ["$[0,\\infty)$", "$[4,\\infty)$", "$(-\\infty,4]$", "$\\R$"], correcta: 1, explicacion: "Se necesita $x-4\\ge 0$, es decir, $x\\ge 4$." },
      { pregunta: "¿Cuál afirmación es siempre verdadera?", opciones: ["$g\\circ f=f\\circ g$", "$\\operatorname{Dom}(f+g)=\\operatorname{Dom}(f)\\cap\\operatorname{Dom}(g)$", "$\\operatorname{Dom}(f/g)=\\operatorname{Dom}(f)\\cap\\operatorname{Dom}(g)$", "Toda composición tiene dominio $\\R$"], correcta: 1, explicacion: "La suma se define en la intersección de los dominios; el cuociente además excluye los ceros de $g$, y la composición no siempre es conmutativa." },
      { pregunta: "Con $f(x)=2x$ y $g(x)=x^2$, $(f\\circ g)(3)$ vale:", opciones: ["$36$", "$18$", "$9$", "$6$"], correcta: 1, explicacion: "$(f\\circ g)(3)=f(9)=2\\cdot 9=18$." },
      { pregunta: "Si $F(x)=\\sqrt{x+5}$, una descomposición válida $F=f\\circ g$ es:", opciones: ["$g(x)=\\sqrt{x}$, $f(x)=x+5$", "$g(x)=x+5$, $f(u)=\\sqrt{u}$", "$g(x)=x$, $f(x)=x+5$", "$g(x)=\\sqrt{x+5}$, $f(x)=x$"], correcta: 1, explicacion: "$f(g(x))=f(x+5)=\\sqrt{x+5}$." }
    ],
    resumen: [
      "El álgebra de funciones combina valores mediante suma, resta, producto y cuociente, siempre en la intersección de los dominios y excluyendo los ceros del denominador.",
      "La composición $g\\circ f$ aplica primero $f$ y después $g$; su dominio exige que $f(x)$ caiga dentro del dominio de $g$.",
      "El orden de la composición importa: $g\\circ f$ y $f\\circ g$ pueden tener fórmulas y dominios distintos, y una de ellas puede no existir."
    ],
    referencias: [
      { titulo: "Clase 14 — Álgebra y composición de funciones (PDF)", ruta: "recursos/clases/clase-14.pdf" },
      { titulo: "Apunte Clase 14 (PDF)", ruta: "recursos/apuntes/apunte-clase-14.pdf" },
      { titulo: "Guía 7 — Composición de funciones (PDF)", ruta: "recursos/guias/guia-07-composicion.pdf" },
      { titulo: "Stewart, Precálculo (Cap. 2.6)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
