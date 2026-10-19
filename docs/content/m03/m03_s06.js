/* Módulo 3 · Sección 6 — Biyectividad e inversa */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s06", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 18,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Biyectividad e inversa",
    objetivo: "Decidir si una función es inyectiva, sobreyectiva o biyectiva, demostrarlo con argumentos algebraicos y calcular la función inversa cuando existe.",
    conexion: "Ya sabes calcular dominios, recorridos y composiciones. Ahora usaremos esas herramientas para responder una pregunta más fina: ¿cuándo una función se puede deshacer de manera única?",
    fuente: "Clase 15 · Apuntes 15–16 y 21 · Guía 5 · I5 2020 y 2024 · Stewart §2.7–2.8",
    prerrequisitos: ["Dominio y recorrido", "Composición de funciones", "Funciones crecientes y decrecientes", "Despeje de ecuaciones"],
    teoria: [
      { tipo: "texto", html: "<p>Una función puede verse como una máquina que transforma entradas en salidas. A veces dos entradas distintas producen la misma salida, y a veces algunas salidas nunca se producen. La <b>inyectividad</b> y la <b>sobreyectividad</b> son las dos propiedades que impiden cada una de esas situaciones. Cuando ambas se cumplen, la máquina se puede revertir sin ambigüedad: existe la <b>función inversa</b>.</p>" },
      { tipo: "definicion", titulo: "Inyectividad", html: "<p>Una función $f:A\\to B$ es <b>inyectiva</b> si elementos distintos del dominio tienen imágenes distintas:</p>$$x_1\\neq x_2\\;\\Longrightarrow\\;f(x_1)\\neq f(x_2).$$<p>De forma equivalente, muy usada en las demostraciones:</p>$$f(x_1)=f(x_2)\\;\\Longrightarrow\\;x_1=x_2.$$" },
      { tipo: "definicion", titulo: "Sobreyectividad", html: "<p>Una función $f:A\\to B$ es <b>sobreyectiva</b> si todo elemento del codominio es imagen de algún elemento del dominio:</p>$$(\\forall y\\in B)(\\exists x\\in A)\\quad f(x)=y.$$<p>En otras palabras, el recorrido de $f$ coincide con todo el codominio $B$.</p>" },
      { tipo: "definicion", titulo: "Biyectividad", html: "<p>Una función es <b>biyectiva</b> si es inyectiva y sobreyectiva a la vez. Solo en ese caso existe su función inversa $f^{-1}:B\\to A$.</p>" },
      { tipo: "nota", titulo: "Criterio de la recta horizontal (Stewart §2.7)", html: "<p>Una función es inyectiva si y solo si ninguna recta horizontal corta su gráfica en más de un punto. La parábola $y=x^2$ no es inyectiva en $\\R$, porque la recta $y=4$ la corta en $x=-2$ y $x=2$. En cambio, restringida a $[0,\\infty)$, sí lo es.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "y=x² no es inyectiva en todo R", funciones: [ { f: function (x) { return x * x; }, desde: -3, hasta: 3, label: "y=x²", color: "#1e5eff" }, { f: function (x) { return 4; }, desde: -3, hasta: 3, label: "y=4", color: "#e17055", dash: "dash" } ], series: [ { x: [-2, 2], y: [4, 4], label: "dos preimágenes", mode: "markers", color: "#8e44ad" } ], xlabel: "x", ylabel: "y", rangeX: [-3.5, 3.5], rangeY: [-1, 9] } },
      { tipo: "teorema", titulo: "Monotonía e inyectividad", html: "<p>Si $f:A\\to B$ es estrictamente creciente o estrictamente decreciente en $A$, entonces $f$ es inyectiva.</p><p><b>Demostración (caso creciente).</b> Sean $x_1,x_2\\in A$ con $x_1\\neq x_2$. Entonces $x_1<x_2$ o $x_2<x_1$. Como $f$ es estrictamente creciente, en el primer caso $f(x_1)<f(x_2)$ y en el segundo $f(x_2)<f(x_1)$. En ambos casos $f(x_1)\\neq f(x_2)$. Por lo tanto, $f$ es inyectiva.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si una función siempre sube (o siempre baja), nunca repite altura. Por eso no puede haber dos entradas distintas con la misma salida.</div>" },
      { tipo: "definicion", titulo: "Función inversa", html: "<p>Si $f:A\\to B$ es biyectiva, su <b>inversa</b> es la función $f^{-1}:B\\to A$ definida por</p>$$f^{-1}(y)=x\\;\\Longleftrightarrow\\;y=f(x).$$<p>Se lee: la inversa devuelve a $y$ su entrada original. El dominio de $f^{-1}$ es el recorrido de $f$, y el recorrido de $f^{-1}$ es el dominio de $f$.</p>" },
      { tipo: "teorema", titulo: "Propiedades de la inversa", html: "<p>Si $f:A\\to B$ es biyectiva, entonces:</p><ul><li>$(f^{-1}\\circ f)(x)=x$ para todo $x\\in A$, es decir, $f^{-1}\\circ f=\\mathrm{id}_A$;</li><li>$(f\\circ f^{-1})(y)=y$ para todo $y\\in B$, es decir, $f\\circ f^{-1}=\\mathrm{id}_B$;</li><li>$f^{-1}$ también es biyectiva y $(f^{-1})^{-1}=f$.</li></ul>" },
      { tipo: "teorema", titulo: "Teorema de la función inversa (recíproco)", html: "<p>Sean $f:A\\to B$ y $g:B\\to A$. Si se cumplen dos cualesquiera de las tres condiciones</p><ol><li>$g\\circ f=\\mathrm{id}_A$,</li><li>$f\\circ g=\\mathrm{id}_B$,</li><li>$g$ es biyectiva,</li></ol><p>entonces $f$ es biyectiva y $g=f^{-1}$.</p>" },
      { tipo: "nota", titulo: "Cómo calcular la inversa (Clase 15)", html: "<p><b>Paso 1.</b> Escribir $y=f(x)$.</p><p><b>Paso 2.</b> Despejar $x$ en términos de $y$.</p><p><b>Paso 3.</b> Intercambiar $x$ e $y$; la ecuación resultante es $y=f^{-1}(x)$.</p><p>Siempre hay que indicar el dominio de la inversa: es el recorrido de la función original.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "La gráfica de f⁻¹ es el reflejo de f en y=x", funciones: [ { f: function (x) { return x * x; }, desde: 0, hasta: 3, label: "f(x)=x², x≥0", color: "#1e5eff" }, { f: function (x) { return Math.sqrt(x); }, desde: 0, hasta: 5, label: "f⁻¹(x)=√x", color: "#00b894" }, { f: function (x) { return x; }, desde: -0.5, hasta: 5, label: "y=x", color: "#8e44ad", dash: "dot" } ], series: [ { x: [1, 2, 4], y: [1, 4, 2], label: "(a,b) ↔ (b,a)", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "y", rangeX: [-0.5, 5.5], rangeY: [-0.5, 5.5] } },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si el punto $(a,b)$ está en la gráfica de $f$, entonces $(b,a)$ está en la gráfica de $f^{-1}$. Geométricamente, la inversa es la misma curva vista en el espejo de la recta $y=x$.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Biyectividad y inversa de una recta",
        enunciado: "<p>Demuestre que $f:\\R\\to\\R$, $f(x)=2x+1$, es biyectiva y calcule su inversa.</p>",
        concepto: "Se demuestra inyectividad igualando imágenes, sobreyectividad despejando $x$ para un $y$ arbitrario, y luego se aplica el método de los tres pasos.",
        desarrollo: [
          "<b>Paso 1 (inyectividad).</b> Supongamos $f(x_1)=f(x_2)$. Entonces $2x_1+1=2x_2+1$. Restamos $1$ y dividimos por $2$: $x_1=x_2$. Por lo tanto, $f$ es inyectiva.",
          "<b>Paso 2 (sobreyectividad).</b> Sea $y\\in\\R$ arbitrario. Buscamos $x\\in\\R$ tal que $2x+1=y$. Despejando, $x=\\dfrac{y-1}{2}$, que es un número real. Como $f\\left(\\dfrac{y-1}{2}\\right)=y$, todo real tiene preimagen. Luego $f$ es sobreyectiva.",
          "<b>Paso 3.</b> Al ser inyectiva y sobreyectiva, $f$ es biyectiva y existe $f^{-1}$.",
          "<b>Paso 4.</b> Escribimos $y=2x+1$ y despejamos: $x=\\dfrac{y-1}{2}$.",
          "<b>Paso 5.</b> Intercambiamos las variables: $y=\\dfrac{x-1}{2}$. Así, $f^{-1}(x)=\\dfrac{x-1}{2}$.",
          "<b>Verificación.</b> $f^{-1}(f(x))=\\dfrac{(2x+1)-1}{2}=x$ y $f(f^{-1}(x))=2\\cdot\\dfrac{x-1}{2}+1=x$."
        ],
        respuesta: "$f^{-1}(x)=\\dfrac{x-1}{2}$, con dominio y recorrido $\\R$."
      },
      {
        titulo: "Una racional que es su propia inversa",
        enunciado: "<p>Sea $f:\\R\\setminus\\{1\\}\\to\\R\\setminus\\{1\\}$, $f(x)=\\dfrac{x+3}{x-1}$. Demuestre que es biyectiva y encuentre $f^{-1}$.</p>",
        concepto: "Para una función racional, la sobreyectividad se prueba despejando $x$ y verificando que el denominador no se anule. La inversa puede coincidir con la función original.",
        desarrollo: [
          "<b>Paso 1 (inyectividad).</b> Si $\\dfrac{x_1+3}{x_1-1}=\\dfrac{x_2+3}{x_2-1}$, multiplicamos cruzado: $(x_1+3)(x_2-1)=(x_2+3)(x_1-1)$.",
          "<b>Paso 2.</b> Desarrollamos: $x_1x_2-x_1+3x_2-3=x_1x_2-x_2+3x_1-3$. Cancelando $x_1x_2$ y $-3$ queda $-x_1+3x_2=-x_2+3x_1$, es decir, $4x_2=4x_1$, o sea $x_1=x_2$.",
          "<b>Paso 3 (sobreyectividad).</b> Dado $y\\neq 1$, resolvemos $y=\\dfrac{x+3}{x-1}$. Entonces $y(x-1)=x+3$, luego $yx-y=x+3$.",
          "<b>Paso 4.</b> Agrupamos: $x(y-1)=y+3$, de donde $x=\\dfrac{y+3}{y-1}$. Como $y\\neq 1$, este $x$ está bien definido y además $x\\neq 1$ (si $x=1$, la ecuación original daría $y\\cdot 0=4$, imposible).",
          "<b>Paso 5.</b> Así, todo $y\\in\\R\\setminus\\{1\\}$ tiene preimagen. La función es biyectiva y, al intercambiar variables, $f^{-1}(x)=\\dfrac{x+3}{x-1}$.",
          "<b>Verificación.</b> $f(f(x))=\\dfrac{\\frac{x+3}{x-1}+3}{\\frac{x+3}{x-1}-1}=\\dfrac{x+3+3x-3}{x+3-x+1}=\\dfrac{4x}{4}=x$."
        ],
        respuesta: "$f$ es biyectiva y $f^{-1}(x)=\\dfrac{x+3}{x-1}$; la función es su propia inversa."
      },
      {
        titulo: "Restringir para poder invertir",
        enunciado: "<p>Sea $f(x)=x^2-2x$. Muestre que no es inyectiva en $\\R$, restrinja el dominio a $[1,\\infty)$ y calcule la inversa con su dominio.</p>",
        concepto: "Una función no biyectiva puede volverse biyectiva al restringir su dominio y ajustar el codominio a su recorrido. Completar el cuadrado revela la monotonía.",
        desarrollo: [
          "<b>Paso 1.</b> Completamos el cuadrado: $x^2-2x=(x-1)^2-1$. Su gráfica es una parábola con vértice $(1,-1)$.",
          "<b>Paso 2.</b> En $\\R$ no es inyectiva: $f(0)=0$ y $f(2)=0$, con $0\\neq 2$.",
          "<b>Paso 3.</b> En $[1,\\infty)$ la función es estrictamente creciente: si $1\\le x_1<x_2$, entonces $0\\le x_1-1<x_2-1$ y al elevar al cuadrado $(x_1-1)^2<(x_2-1)^2$. Por lo tanto, es inyectiva.",
          "<b>Paso 4.</b> El recorrido en $[1,\\infty)$ es $[-1,\\infty)$, porque el valor mínimo es $f(1)=-1$ y la función crece sin cota.",
          "<b>Paso 5.</b> Escribimos $y=(x-1)^2-1$, entonces $(x-1)^2=y+1$. Como $x\\ge 1$, se tiene $x-1=\\sqrt{y+1}$, es decir, $x=1+\\sqrt{y+1}$.",
          "<b>Paso 6.</b> Intercambiando variables: $f^{-1}(x)=1+\\sqrt{x+1}$, con dominio $[-1,\\infty)$ y recorrido $[1,\\infty)$."
        ],
        respuesta: "$f^{-1}(x)=1+\\sqrt{x+1}$, definida en $[-1,\\infty)$."
      }
    ],
    ejercicios: [
      {
        titulo: "Monotonía en [1,∞)",
        dificultad: "basico",
        enunciado: "<p>Demuestre que $f(x)=x+\\dfrac1x$ es estrictamente creciente en $[1,\\infty)$ y concluya que es inyectiva allí.</p>",
        concepto: "Se estudia el signo de $f(x_2)-f(x_1)$ para $x_1<x_2$; la monotonía estricta implica inyectividad.",
        pista: "Factorice $f(x_2)-f(x_1)=(x_2-x_1)\\left(1-\\dfrac{1}{x_1x_2}\\right)$.",
        desarrollo: [
          "Sean $1\\le x_1<x_2$. Entonces $f(x_2)-f(x_1)=(x_2-x_1)+\\left(\\dfrac{1}{x_2}-\\dfrac{1}{x_1}\\right)$.",
          "Operando: $\\dfrac{1}{x_2}-\\dfrac{1}{x_1}=\\dfrac{x_1-x_2}{x_1x_2}$, luego $f(x_2)-f(x_1)=(x_2-x_1)\\left(1-\\dfrac{1}{x_1x_2}\\right)$.",
          "Como $x_1,x_2\\ge 1$, se tiene $x_1x_2\\ge 1$, así que $\\dfrac{1}{x_1x_2}\\le 1$ y $1-\\dfrac{1}{x_1x_2}\\ge 0$.",
          "Como $x_2-x_1>0$, el producto es positivo (o cero solo si $x_1x_2=1$, caso que no ocurre con $x_1<x_2$ y ambos $\\ge 1$). Por lo tanto $f(x_2)>f(x_1)$.",
          "Así $f$ es estrictamente creciente y, por el teorema de monotonía, inyectiva en $[1,\\infty)$."
        ],
        respuesta: "$f$ es estrictamente creciente en $[1,\\infty)$ y por lo tanto inyectiva."
      },
      {
        titulo: "Cuadrados en los naturales",
        dificultad: "basico",
        enunciado: "<p>Sea $f:\\N\\to\\N$, $f(n)=n^2$. ¿Es inyectiva? ¿Es sobreyectiva?</p>",
        concepto: "La inyectividad se prueba algebraicamente; para negar la sobreyectividad basta exhibir un natural que no sea un cuadrado.",
        pista: "Piense en $2$ como posible imagen.",
        desarrollo: [
          "Si $f(n_1)=f(n_2)$, entonces $n_1^2=n_2^2$. Como $n_1,n_2\\ge 0$, se sigue $n_1=n_2$. Luego $f$ es inyectiva.",
          "Para la sobreyectividad, buscamos $n\\in\\N$ con $n^2=2$. No existe ningún natural cuyo cuadrado sea $2$.",
          "Por lo tanto, $2\\in\\N$ no está en el recorrido y $f$ no es sobreyectiva."
        ],
        respuesta: "$f$ es inyectiva, pero no sobreyectiva (por ejemplo, $2$ no tiene preimagen)."
      },
      {
        titulo: "Valor absoluto",
        dificultad: "intermedio",
        enunciado: "<p>Analice si $h:\\R\\to\\R$, $h(x)=|x|$, es inyectiva y sobreyectiva.</p>",
        concepto: "Se usan contraejemplos para negar propiedades; el recorrido permite decidir la sobreyectividad.",
        pista: "Evalúe en $1$ y $-1$; además, ¿puede $h$ tomar valores negativos?",
        desarrollo: [
          "No es inyectiva: $h(1)=1=h(-1)$, pero $1\\neq -1$.",
          "Su recorrido es $[0,\\infty)$, porque $|x|\\ge 0$ y todo $y\\ge 0$ se alcanza con $x=y$.",
          "Como el codominio es $\\R$, los números negativos no tienen preimagen. Luego tampoco es sobreyectiva.",
          "Si se restringe el dominio a $[0,\\infty)$ y el codominio a $[0,\\infty)$, entonces $h(x)=x$ y sí es biyectiva."
        ],
        respuesta: "$h$ no es inyectiva ni sobreyectiva en $\\R\\to\\R$; restringida a $[0,\\infty)\\to[0,\\infty)$ es biyectiva."
      },
      {
        titulo: "Inversa con raíz",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f(x)=\\sqrt{x-2}+3$, con dominio $[2,\\infty)$. Determine su recorrido, demuestre que es biyectiva y calcule $f^{-1}$.</p>",
        concepto: "La raíz es creciente; su recorrido determina el dominio de la inversa.",
        pista: "El mínimo de $f$ se alcanza en $x=2$. Para la inversa, despeje primero la raíz.",
        desarrollo: [
          "Como $x-2\\ge 0$, se tiene $\\sqrt{x-2}\\ge 0$ y entonces $f(x)\\ge 3$. Además, al crecer $x$, la raíz crece sin cota. El recorrido es $[3,\\infty)$.",
          "Inyectividad: si $\\sqrt{x_1-2}+3=\\sqrt{x_2-2}+3$, entonces $\\sqrt{x_1-2}=\\sqrt{x_2-2}$. Elevando al cuadrado, $x_1-2=x_2-2$, luego $x_1=x_2$.",
          "Sobreyectividad: dado $y\\ge 3$, tomamos $x=(y-3)^2+2\\ge 2$. Entonces $f(x)=\\sqrt{(y-3)^2}+3=|y-3|+3=y-3+3=y$.",
          "Por lo tanto $f$ es biyectiva. Para la inversa: $y=\\sqrt{x-2}+3\\Rightarrow y-3=\\sqrt{x-2}\\Rightarrow (y-3)^2=x-2$.",
          "Así $x=(y-3)^2+2$; intercambiando variables, $f^{-1}(x)=(x-3)^2+2$ con dominio $[3,\\infty)$."
        ],
        respuesta: "$\\operatorname{Rec}(f)=[3,\\infty)$ y $f^{-1}(x)=(x-3)^2+2$ para $x\\ge 3$."
      },
      {
        titulo: "Inversa de una racional con asíntotas",
        dificultad: "avanzado",
        enunciado: "<p>Sea $f:\\R\\setminus\\{3\\}\\to\\R\\setminus\\{2\\}$, $f(x)=\\dfrac{2x+1}{x-3}$. Demuestre que es biyectiva y determine $f^{-1}$ con su dominio.</p>",
        concepto: "Se despeja $x$ para probar sobreyectividad y se identifica el valor excluido del recorrido con la asíntota horizontal.",
        pista: "Escriba $f(x)=2+\\dfrac{7}{x-3}$; esto muestra que $f(x)\\neq 2$.",
        desarrollo: [
          "Reescribimos: $\\dfrac{2x+1}{x-3}=\\dfrac{2(x-3)+7}{x-3}=2+\\dfrac{7}{x-3}$. Por eso $f(x)\\neq 2$ para todo $x\\neq 3$.",
          "Inyectividad: si $2+\\dfrac{7}{x_1-3}=2+\\dfrac{7}{x_2-3}$, entonces $\\dfrac{7}{x_1-3}=\\dfrac{7}{x_2-3}$, luego $x_1-3=x_2-3$ y $x_1=x_2$.",
          "Sobreyectividad: dado $y\\neq 2$, resolvemos $y=2+\\dfrac{7}{x-3}$. Entonces $y-2=\\dfrac{7}{x-3}$ y $x-3=\\dfrac{7}{y-2}$.",
          "Así $x=3+\\dfrac{7}{y-2}=\\dfrac{3y-6+7}{y-2}=\\dfrac{3y+1}{y-2}$, que está bien definido para $y\\neq 2$ y es distinto de $3$.",
          "Por lo tanto $f$ es biyectiva. Intercambiando variables: $f^{-1}(x)=\\dfrac{3x+1}{x-2}$, con dominio $\\R\\setminus\\{2\\}$."
        ],
        respuesta: "$f^{-1}(x)=\\dfrac{3x+1}{x-2}$, con dominio $\\R\\setminus\\{2\\}$ y recorrido $\\R\\setminus\\{3\\}$."
      }
    ],
    erroresComunes: [
      "Confundir $f^{-1}(x)$ con $\\dfrac{1}{f(x)}$; la inversa no es el recíproco multiplicativo.",
      "Dar por biyectiva una función sin revisar el codominio: la sobreyectividad depende del conjunto de llegada.",
      "Olvidar restringir el dominio de una parábola antes de invertirla.",
      "Calcular la inversa y no indicar su dominio, que debe ser el recorrido de la función original.",
      "En una racional, olvidar excluir del recorrido el valor de la asíntota horizontal."
    ],
    checklist: [
      "Sé negar la inyectividad con un contraejemplo y demostrarla igualando imágenes.",
      "Sé demostrar sobreyectividad despejando $x$ para un $y$ arbitrario del codominio.",
      "Sé explicar por qué monotonía estricta implica inyectividad.",
      "Sé calcular $f^{-1}$ con los tres pasos y verificar con $f\\circ f^{-1}$ y $f^{-1}\\circ f$.",
      "Sé graficar $f^{-1}$ como reflejo de $f$ respecto de $y=x$.",
      "Sé identificar cuándo debo restringir dominio y codominio para obtener una biyección."
    ],
    autoevaluacion: [
      { pregunta: "¿Qué condición define la inyectividad?", opciones: ["Todo $y$ tiene preimagen", "$f(x_1)=f(x_2)\\Rightarrow x_1=x_2$", "$f(0)=0$", "La gráfica es una recta"], correcta: 1, explicacion: "Inyectiva significa que imágenes iguales obligan a entradas iguales." },
      { pregunta: "La función $f(x)=x^2$ con dominio $\\R$ no es inyectiva porque:", opciones: ["No está definida en $0$", "$f(-2)=f(2)=4$", "Su recorrido es $[0,\\infty)$", "Es creciente"], correcta: 1, explicacion: "Dos entradas distintas, $-2$ y $2$, producen la misma salida." },
      { pregunta: "Si $f(x)=3x-4$, entonces $f^{-1}(x)$ es:", opciones: ["$\\dfrac{x+4}{3}$", "$\\dfrac{1}{3x-4}$", "$3x+4$", "$\\dfrac{x-4}{3}$"], correcta: 0, explicacion: "De $y=3x-4$ se obtiene $x=\\dfrac{y+4}{3}$; intercambiando, $f^{-1}(x)=\\dfrac{x+4}{3}$." },
      { pregunta: "Si $f:[0,\\infty)\\to[0,\\infty)$, $f(x)=x^2$, su inversa es:", opciones: ["$x^2$", "$\\sqrt{x}$", "$\\dfrac1{x^2}$", "$|x|$"], correcta: 1, explicacion: "De $y=x^2$ con $x\\ge 0$ se sigue $x=\\sqrt{y}$." },
      { pregunta: "La gráfica de $f^{-1}$ se obtiene de la de $f$ mediante:", opciones: ["Una traslación vertical", "Una reflexión en el eje $x$", "Una reflexión en la recta $y=x$", "Una compresión horizontal"], correcta: 2, explicacion: "El punto $(a,b)$ de $f$ se transforma en $(b,a)$ en $f^{-1}$, que es su reflejo respecto de $y=x$." },
      { pregunta: "Para que $f:A\\to B$ tenga inversa se necesita que sea:", opciones: ["Solo inyectiva", "Solo sobreyectiva", "Biyectiva", "Creciente"], correcta: 2, explicacion: "La inversa debe estar definida para todo $y\\in B$ y asignar una única preimagen: se necesita biyectividad." }
    ],
    resumen: [
      "Inyectiva significa que no se repiten salidas; sobreyectiva significa que no sobran elementos en el codominio; biyectiva es ambas cosas.",
      "La monotonía estricta es una herramienta rápida para probar inyectividad, y el criterio de la recta horizontal lo visualiza.",
      "Si $f$ es biyectiva, $f^{-1}$ se obtiene despejando $x$, intercambiando variables y reflejando la gráfica en $y=x$; su dominio es el recorrido de $f$."
    ],
    referencias: [
      { titulo: "Clase 15 — Función inversa (PDF)", ruta: "recursos/clases/clase-15.pdf" },
      { titulo: "Apunte Clase 15 (PDF)", ruta: "recursos/apuntes/apunte-clase-15.pdf" },
      { titulo: "Guía 5 — Biyecciones (PDF)", ruta: "recursos/guias/guia-05-biyectividad.pdf" },
      { titulo: "I5 2024 — Biyectividad e inversa (PDF)", ruta: "recursos/pruebas/PRUEBAS/2024-1/i5-mat1107-2024.pdf" }
    ]
  });
})();
