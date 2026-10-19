/* Módulo 6 · Sección 4 — I5: biyectividad, inversa y exponenciales */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s04", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 37,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I5: biyectividad, inversa y exponenciales",
    objetivo: "Demostrar inyectividad y sobreyectividad, calcular funciones inversas y resolver problemas con exponenciales y logaritmos, siguiendo el formato de las interrogaciones 5 y 6.",
    conexion: "Necesitas recordar dominio y recorrido, composición de funciones y las propiedades de $e^x$ y $\\ln x$. La inversa solo existe cuando la función es biyectiva en el dominio elegido.",
    fuente: "I5–I6 2020–2026 · Clases 15–17 · Guías 5 y 8",
    prerrequisitos: ["Funciones inyectivas y sobreyectivas", "Composición de funciones", "Función inversa", "Exponencial y logaritmo"],
    teoria: [
      { tipo: "texto", html: "<p>En la <b>I5</b> aparecen dos tipos de problema: demostrar que una función es <b>inyectiva</b> o <b>biyectiva</b>, y calcular su <b>inversa</b>. También se pide hallar el mayor dominio donde una función es inyectiva y el codominio que la hace sobreyectiva. La <b>I6</b> agrega composición y funciones exponenciales o logarítmicas. La lógica es siempre la misma: para invertir hay que despejar $x$ y comprobar dominios.</p>" },
      { tipo: "definicion", titulo: "Inyectiva, sobreyectiva y biyectiva", html: "<p>$f:A\\to B$ es <b>inyectiva</b> si $f(x_1)=f(x_2)$ implica $x_1=x_2$. Es <b>sobreyectiva</b> si para todo $y\\in B$ existe $x\\in A$ con $f(x)=y$, es decir, $\\operatorname{Rec}(f)=B$. Es <b>biyectiva</b> si cumple ambas propiedades.</p>" },
      { tipo: "teorema", titulo: "Caracterización de la inversa", html: "<p>$f:A\\to B$ es biyectiva si y solo si existe $g:B\\to A$ tal que $g(f(x))=x$ para todo $x\\in A$ y $f(g(y))=y$ para todo $y\\in B$. Esa $g$ es única y se denota $f^{-1}$.</p><p>Además, si $f$ y $g$ son biyectivas, entonces $(f\\circ g)^{-1}=g^{-1}\\circ f^{-1}$.</p>" },
      { tipo: "nota", titulo: "Cómo demostrar inyectividad (Clase 15)", html: "<p>Hay dos caminos válidos: <b>(a)</b> partir de $f(x_1)=f(x_2)$ y manipular algebraicamente hasta $x_1=x_2$; <b>(b)</b> probar que $f$ es estrictamente monótona. En funciones con varios trozos hay que revisar además que las ramas no se repitan valores. Para la sobreyectividad se toma $y$ arbitrario en el codominio y se exhibe un $x$ del dominio.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> inyectiva significa que no hay dos entradas con la misma salida; sobreyectiva significa que ninguna salida del codominio queda sin usar. Si una función es biyectiva, cada salida viene de una única entrada y podemos devolvernos: esa es la inversa.</div>" },
      { tipo: "teorema", titulo: "Exponencial y logaritmo", html: "<p>Para $b>0$, $b\\neq1$, la función $b^x$ es biyectiva de $\\R$ en $(0,\\infty)$, con inversa $\\log_b x$. Por eso:</p><p>$b^{x}=b^{y}\\Leftrightarrow x=y$, $\\log_b(xy)=\\log_b x+\\log_b y$, $\\log_b(x^r)=r\\log_b x$ y $b^{\\log_b x}=x$ para $x>0$.</p>" },
      { tipo: "tabla", titulo: "Receta para hallar una inversa", headers: ["Paso", "Qué se hace", "Qué hay que registrar"], rows: [["1", "Escribir $y=f(x)$", "Dominio $A$ y recorrido $B$"], ["2", "Despejar $x$ en función de $y$", "Restricciones al despejar"], ["3", "Intercambiar nombres", "$f^{-1}(x)$ con dominio $B$"], ["4", "Verificar", "$f(f^{-1}(x))=x$ y $f^{-1}(f(x))=x$"]] },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Una exponencial y su inversa logarítmica", funciones: [ { f: function (x) { return Math.pow(2, x); }, desde: -3, hasta: 3, label: "y=2^x", color: "#1e5eff" }, { f: function (x) { return Math.log(x) / Math.LN2; }, desde: 0.05, hasta: 6, label: "y=log_2(x)", color: "#00b894" }, { f: function (x) { return x; }, desde: -3, hasta: 6, label: "y=x", color: "#e6a817" } ], xlabel: "x", ylabel: "y", rangeX: [-3, 6], rangeY: [-3, 6] } }
    ],
    ejemplos: [
      {
        titulo: "I5 2025-1 · P1 — Dominio máximo, recorrido e inversa con raíz",
        enunciado: "<p>Considere $f(x)=\\sqrt{\\dfrac{2x-3}{x+4}}$.</p><p>(a) Determine el mayor conjunto $A$ donde $f$ es inyectiva. (b) Determine $B$ para que $f:A\\to B$ sea sobreyectiva. (c) Determine $f^{-1}$.</p>",
        concepto: "El dominio se obtiene de la inecuación del radicando. El recorrido se calcula despejando $x$ en función de $y$, y la inversa aparece en ese mismo despeje.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> Se necesita $\\dfrac{2x-3}{x+4}\\ge0$ con $x\\neq-4$. Los puntos críticos son $-4$ y $\\frac32$; el cociente es positivo en $(-\\infty,-4)$ y en $\\left[\\frac32,\\infty\\right)$. Así, $A=(-\\infty,-4)\\cup\\left[\\frac32,\\infty\\right)$.",
          "<b>Paso 2. Inyectividad.</b> En $A$, la función es composición de $\\ell(x)=\\frac{2x-3}{x+4}$ (inyectiva, pues es lineal fraccionaria) con la raíz cuadrada (inyectiva en $[0,\\infty)$). Por lo tanto $f$ es inyectiva en $A$.",
          "<b>Paso 3. Plantear el recorrido.</b> $y\\in\\operatorname{Rec}(f)$ si existe $x\\in A$ con $y=\\sqrt{\\frac{2x-3}{x+4}}$. Necesariamente $y\\ge0$.",
          "<b>Paso 4. Despejar $x$.</b> $y^2=\\dfrac{2x-3}{x+4}\\Rightarrow y^2x+4y^2=2x-3\\Rightarrow x(y^2-2)=-3-4y^2\\Rightarrow x=\\dfrac{4y^2+3}{2-y^2}$.",
          "<b>Paso 5. Restricciones.</b> Se necesita $y\\neq\\sqrt2$ (el denominador se anula) y $y\\ge0$.",
          "<b>Paso 6. Recorrido.</b> $B=[0,\\sqrt2)\\cup(\\sqrt2,\\infty)$.",
          "<b>Paso 7. Inversa.</b> Intercambiando nombres: $f^{-1}(x)=\\dfrac{4x^2+3}{2-x^2}$, con dominio $B$."
        ],
        respuesta: "$A=(-\\infty,-4)\\cup\\left[\\frac32,\\infty\\right)$; $B=[0,\\sqrt2)\\cup(\\sqrt2,\\infty)$; $f^{-1}(x)=\\dfrac{4x^2+3}{2-x^2}$."
      },
      {
        titulo: "I6 2023-1 · P2 — Inversa de una exponencial simétrica",
        enunciado: "<p>Sea $b\\in\\R^+\\setminus\\{1\\}$. Considere $f(x)=\\dfrac{b^x-b^{-x}}{2}$. Halle $f^{-1}(x)$.</p>",
        concepto: "Se despeja $x$ haciendo el cambio $z=b^x$, lo que conduce a una ecuación cuadrática. Se descarta la raíz negativa porque $b^x>0$.",
        desarrollo: [
          "<b>Paso 1. Plantear.</b> $y=\\dfrac{b^x-b^{-x}}{2}$.",
          "<b>Paso 2. Quitar el denominador y multiplicar por $b^x$.</b> $2y\\,b^x=b^{2x}-1$.",
          "<b>Paso 3. Cambio de variable.</b> Con $z=b^x>0$: $z^2-2yz-1=0$.",
          "<b>Paso 4. Fórmula cuadrática.</b> $z=\\dfrac{2y\\pm\\sqrt{4y^2+4}}{2}=y\\pm\\sqrt{y^2+1}$.",
          "<b>Paso 5. Elegir el signo.</b> Como $\\sqrt{y^2+1}>|y|$, la opción $y-\\sqrt{y^2+1}$ es negativa. Pero $z=b^x>0$, así que $z=y+\\sqrt{y^2+1}$.",
          "<b>Paso 6. Volver a $x$.</b> $b^x=y+\\sqrt{y^2+1}\\Rightarrow x=\\log_b\\left(y+\\sqrt{y^2+1}\\right)$."
        ],
        respuesta: "$f^{-1}(x)=\\log_b\\left(x+\\sqrt{x^2+1}\\right)$."
      }
    ],
    ejercicios: [
      {
        titulo: "I5 2024-1 · P2 — Inyectividad algebraica de una lineal fraccionaria",
        dificultad: "basico",
        enunciado: "<p>Demuestre algebraicamente que $f(x)=\\dfrac{x+3}{x-1}$ es inyectiva en su mayor dominio posible.</p>",
        concepto: "Se parte de $f(x_1)=f(x_2)$ y se manipula hasta obtener $x_1=x_2$. Conviene reescribir $f(x)=1+\\frac4{x-1}$.",
        pista: "El dominio es $\\R\\setminus\\{1\\}$. Iguale las imágenes y cross-multiplique.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> $x\\neq1$, luego $\\operatorname{Dom}(f)=\\R\\setminus\\{1\\}$.",
          "<b>Paso 2. Reescribir.</b> $\\dfrac{x+3}{x-1}=1+\\dfrac4{x-1}$.",
          "<b>Paso 3. Suponer imágenes iguales.</b> $1+\\dfrac4{x_1-1}=1+\\dfrac4{x_2-1}$.",
          "<b>Paso 4. Simplificar.</b> $\\dfrac4{x_1-1}=\\dfrac4{x_2-1}\\Rightarrow x_1-1=x_2-1\\Rightarrow x_1=x_2$.",
          "<b>Paso 5. Concluir.</b> $f$ es inyectiva."
        ],
        respuesta: "$f(x_1)=f(x_2)\\Rightarrow x_1=x_2$; $f$ es inyectiva en $\\R\\setminus\\{1\\}$."
      },
      {
        titulo: "I5 2024-1 · P1 — Monotonía en un intervalo",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $f:[1,\\infty)\\to\\R$, $f(x)=x+\\dfrac1x$, es estrictamente creciente.</p>",
        concepto: "Para probar monotonía se comparan $f(x_2)-f(x_1)$ con $x_1<x_2$. Se factoriza la diferencia y se analiza el signo de cada factor.",
        pista: "$f(x_2)-f(x_1)=(x_2-x_1)\\left(1-\\frac1{x_1x_2}\\right)$.",
        desarrollo: [
          "<b>Paso 1. Sean $1\\le x_1<x_2$.</b> Queremos $f(x_1)<f(x_2)$.",
          "<b>Paso 2. Calcular la diferencia.</b> $f(x_2)-f(x_1)=(x_2-x_1)+\\left(\\frac1{x_2}-\\frac1{x_1}\\right)=(x_2-x_1)-\\frac{x_2-x_1}{x_1x_2}$.",
          "<b>Paso 3. Factorizar.</b> $=(x_2-x_1)\\left(1-\\frac1{x_1x_2}\\right)$.",
          "<b>Paso 4. Signos.</b> $x_2-x_1>0$. Además $x_1x_2\\ge1$, luego $\\frac1{x_1x_2}\\le1$ y $1-\\frac1{x_1x_2}\\ge0$ (de hecho $>0$ si $x_1<x_2$).",
          "<b>Paso 5. Concluir.</b> El producto es positivo, así que $f(x_2)>f(x_1)$: $f$ es estrictamente creciente."
        ],
        respuesta: "$f(x_2)-f(x_1)=(x_2-x_1)\\left(1-\\frac1{x_1x_2}\\right)>0$; $f$ es estrictamente creciente."
      },
      {
        titulo: "I5 2023-1 · P2 — Biyectividad con raíz y recíproco",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que $f:(0,\\infty)\\to(0,\\infty)$ definida por $f(x)=\\dfrac{\\sqrt{1+4x}}{x}$ es biyectiva.</p>",
        concepto: "Inyectividad por igualdad de imágenes y álgebra; sobreyectividad exhibiendo, para cada $y>0$, un $x>0$ que resuelve la ecuación.",
        pista: "Al igualar imágenes y elevar al cuadrado aparece $(x_2-x_1)(x_1+x_2+4x_1x_2)=0$.",
        desarrollo: [
          "<b>Paso 1. Inyectividad.</b> Si $f(x_1)=f(x_2)$, entonces $\\dfrac{1+4x_1}{x_1^2}=\\dfrac{1+4x_2}{x_2^2}$.",
          "<b>Paso 2. Multiplicar.</b> $x_2^2+4x_1x_2^2=x_1^2+4x_2x_1^2$.",
          "<b>Paso 3. Factorizar.</b> $(x_2-x_1)(x_1+x_2+4x_1x_2)=0$.",
          "<b>Paso 4. Descartar el segundo factor.</b> Con $x_1,x_2>0$, $x_1+x_2+4x_1x_2>0$. Por lo tanto $x_1=x_2$.",
          "<b>Paso 5. Sobreyectividad.</b> Sea $y>0$. Se busca $x>0$ con $y=\\frac{\\sqrt{1+4x}}{x}$, equivalente a $y^2x^2-4x-1=0$.",
          "<b>Paso 6. Resolver.</b> $x=\\dfrac{4\\pm\\sqrt{16+4y^2}}{2y^2}$. La raíz positiva es $x=\\dfrac{4+\\sqrt{16+4y^2}}{2y^2}>0$.",
          "<b>Paso 7. Concluir.</b> Para cada $y>0$ existe $x>0$ con $f(x)=y$, luego el recorrido es $(0,\\infty)$ y $f$ es sobreyectiva. Con la inyectividad, es biyectiva."
        ],
        respuesta: "$f$ es inyectiva y su recorrido es $(0,\\infty)$; por lo tanto es biyectiva."
      },
      {
        titulo: "I6 2024-1 · P1 — Composiciones que no son inversas",
        dificultad: "intermedio",
        enunciado: "<p>Sean $f:\\R\\to[3,\\infty)$, $f(x)=(x-1)^2+3$ y $g:[3,\\infty)\\to\\R$, $g(x)=\\sqrt{x-3}+1$. Determine $f\\circ g$ y $g\\circ f$, y decida si $f$ es invertible.</p>",
        concepto: "Se calculan las composiciones y se comparan con la identidad. Si $g\\circ f\\neq\\mathrm{id}$, las funciones no son inversas; además $f$ no es inyectiva.",
        pista: "Recuerde que $\\sqrt{(x-1)^2}=|x-1|$.",
        desarrollo: [
          "<b>Paso 1. $f\\circ g$.</b> Para $x\\ge3$: $f(g(x))=\\left(\\sqrt{x-3}+1-1\\right)^2+3=(x-3)+3=x$.",
          "<b>Paso 2. $g\\circ f$.</b> Para $x\\in\\R$: $g(f(x))=\\sqrt{(x-1)^2+3-3}+1=\\sqrt{(x-1)^2}+1=|x-1|+1$.",
          "<b>Paso 3. Comparar.</b> $f\\circ g=\\mathrm{id}_{[3,\\infty)}$, pero $g\\circ f\\neq\\mathrm{id}_{\\R}$.",
          "<b>Paso 4. Invertibilidad.</b> $f(0)=(-1)^2+3=4$ y $f(2)=1+3=4$; dos entradas distintas dan la misma salida. $f$ no es inyectiva, luego no es invertible en todo $\\R$."
        ],
        respuesta: "$(f\\circ g)(x)=x$; $(g\\circ f)(x)=|x-1|+1$; $f$ no es invertible porque no es inyectiva."
      },
      {
        titulo: "I6 2023-1 · P1(b) — Biyectividad e inversa en un intervalo",
        dificultad: "avanzado",
        enunciado: "<p>Sea $f:[0,1]\\to[0,1]$, $f(x)=x-2\\sqrt{x}+1$. Sabiendo que $f$ es estrictamente decreciente, demuestre que es biyectiva y calcule $f^{-1}$.</p>",
        concepto: "Una función estrictamente monótona es inyectiva. Para la sobreyectividad se resuelve $y=f(x)$ y se verifica que la solución queda en $[0,1]$.",
        pista: "Complete el cuadrado: $x-2\\sqrt{x}+1=(\\sqrt{x}-1)^2$.",
        desarrollo: [
          "<b>Paso 1. Inyectividad.</b> $f$ es estrictamente decreciente, luego si $x_1\\neq x_2$ entonces $f(x_1)\\neq f(x_2)$.",
          "<b>Paso 2. Reescribir.</b> $f(x)=(\\sqrt{x}-1)^2$.",
          "<b>Paso 3. Sobreyectividad.</b> Sea $y\\in[0,1]$. Se busca $x\\in[0,1]$ con $(\\sqrt{x}-1)^2=y$.",
          "<b>Paso 4. Despejar.</b> $\\sqrt{y}=|\\sqrt{x}-1|=1-\\sqrt{x}$, pues $0\\le\\sqrt{x}\\le1$.",
          "<b>Paso 5. Resolver.</b> $\\sqrt{x}=1-\\sqrt{y}\\Rightarrow x=(1-\\sqrt{y})^2$, que pertenece a $[0,1]$.",
          "<b>Paso 6. Inversa.</b> $f^{-1}(x)=(1-\\sqrt{x})^2$."
        ],
        respuesta: "$f$ es biyectiva y $f^{-1}(x)=(1-\\sqrt{x})^2$."
      },
      {
        titulo: "I5 2020-1 · P1 — Monotonía se hereda a la inversa",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f:[a,b]\\to\\R$ estrictamente creciente. (a) Demuestre que $f$ es invertible. (b) Demuestre que $f^{-1}$ es estrictamente creciente.</p>",
        concepto: "La monotonía estricta implica inyectividad. Para la inversa se usa una demostración por contradicción y se aplica $f$ a ambos lados.",
        pista: "Para (b), suponga $f^{-1}(y_1)\\ge f^{-1}(y_2)$ y aplique $f$.",
        desarrollo: [
          "<b>Paso 1. Inyectividad.</b> Si $x_1\\neq x_2$, uno es menor que el otro; como $f$ es estrictamente creciente, sus imágenes son distintas. Luego $f$ es inyectiva y, vista como función de $[a,b]$ en su recorrido, es biyectiva e invertible.",
          "<b>Paso 2. Suponer lo contrario para la inversa.</b> Sean $y_1<y_2$ en el dominio de $f^{-1}$. Supongamos $f^{-1}(y_1)\\ge f^{-1}(y_2)$.",
          "<b>Paso 3. Aplicar $f$.</b> Como $f$ es estrictamente creciente, $f(f^{-1}(y_1))\\ge f(f^{-1}(y_2))$, es decir $y_1\\ge y_2$.",
          "<b>Paso 4. Contradicción.</b> Pero $y_1<y_2$. Por lo tanto $f^{-1}(y_1)<f^{-1}(y_2)$ y $f^{-1}$ es estrictamente creciente."
        ],
        respuesta: "$f$ es inyectiva y por lo tanto invertible; $f^{-1}$ es estrictamente creciente."
      },
      {
        titulo: "I2 2025-2 · P4 — Dominio, recorrido, inyectividad e inversa",
        dificultad: "avanzado",
        enunciado: "<p>Sea $f(x)=\\dfrac{3x-2}{3-2x}$. Encuentre el dominio maximal $A$ y el recorrido $B$. Demuestre que $f:A\\to B$ es inyectiva y encuentre $f^{-1}$.</p>",
        concepto: "Problema integrador: dominio, inyectividad algebraica, recorrido por despeje e inversa. Es el formato completo de una pregunta de biyectividad.",
        pista: "El dominio excluye $x=\\frac32$. Para el recorrido, despeje $x$ y observe qué valor de $y$ anula el denominador.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> $3-2x\\neq0\\Rightarrow x\\neq\\frac32$, luego $A=\\R\\setminus\\left\\{\\frac32\\right\\}$.",
          "<b>Paso 2. Inyectividad.</b> Sean $x,z\\in A$ con $f(x)=f(z)$. Entonces $(3x-2)(3-2z)=(3z-2)(3-2x)$.",
          "<b>Paso 3. Expandir.</b> $9x-6xz-6+4z=9z-6zx-6+4x\\Rightarrow5x=5z\\Rightarrow x=z$.",
          "<b>Paso 4. Despejar para el recorrido.</b> $y(3-2x)=3x-2\\Rightarrow3y+2=x(3+2y)\\Rightarrow x=\\dfrac{3y+2}{3+2y}$.",
          "<b>Paso 5. Excluir el valor problemático.</b> El denominador se anula en $y=-\\frac32$, y para ese valor no hay $x$. Así, $B=\\R\\setminus\\left\\{-\\frac32\\right\\}$.",
          "<b>Paso 6. Inversa.</b> $f^{-1}(x)=\\dfrac{3x+2}{3+2x}$."
        ],
        respuesta: "$A=\\R\\setminus\\left\\{\\frac32\\right\\}$, $B=\\R\\setminus\\left\\{-\\frac32\\right\\}$, $f^{-1}(x)=\\dfrac{3x+2}{3+2x}$."
      }
    ],
    erroresComunes: [
      "Probar inyectividad solo con un ejemplo numérico; hay que partir de $f(x_1)=f(x_2)$ y llegar a $x_1=x_2$.",
      "Confundir el dominio de $f$ con el dominio de $f^{-1}$: son el recorrido y el dominio de $f$, respectivamente.",
      "Al despejar una exponencial, olvidar descartar la raíz negativa de la cuadrática.",
      "Afirmar que una función es biyectiva sin revisar la sobreyectividad, que exige comparar el recorrido con el codominio declarado.",
      "Aplicar $\\sqrt{x^2}=x$ en vez de $|x|$ al componer una raíz con un cuadrado."
    ],
    checklist: [
      "Demuestro inyectividad algebraicamente o por monotonía estricta.",
      "Determino el recorrido despejando $x$ y respetando el dominio.",
      "Calculo inversas y verifico con una composición.",
      "Manejo las propiedades de $b^x$ y $\\log_b$ sin errores de dominio.",
      "Resuelvo ecuaciones exponenciales con cambio de variable y descarto soluciones no admisibles.",
      "Reconozco cuándo una función no es invertible por no ser inyectiva."
    ],
    autoevaluacion: [
      { pregunta: "Si $f(x)=3x-5$, entonces $f^{-1}(x)$ es:", opciones: ["$\\frac{x+5}{3}$", "$\\frac{x-5}{3}$", "$3x+5$", "$\\frac{1}{3x-5}$"], correcta: 0, explicacion: "$y=3x-5\\Rightarrow x=\\frac{y+5}{3}$; intercambiando nombres, $f^{-1}(x)=\\frac{x+5}{3}$." },
      { pregunta: "$f:\\R\\to\\R$, $f(x)=x^2$, no es invertible porque:", opciones: ["no está bien definida", "no es inyectiva", "no es sobreyectiva", "no es creciente"], correcta: 1, explicacion: "$f(2)=f(-2)=4$: dos entradas distintas tienen la misma salida." },
      { pregunta: "El dominio de $f^{-1}$ es:", opciones: ["el dominio de $f$", "el recorrido de $f$", "siempre $\\R$", "el codominio de $f$ si $f$ es inyectiva"], correcta: 1, explicacion: "La inversa recibe las salidas de $f$, es decir, su recorrido." },
      { pregunta: "La inversa de $f(x)=2^x$ es:", opciones: ["$2^{-x}$", "$\\log_2(x)$", "$x^2$", "$\\ln(2x)$"], correcta: 1, explicacion: "$y=2^x\\Leftrightarrow x=\\log_2(y)$." },
      { pregunta: "Al resolver $b^{2x}-2yb^x-1=0$ con $z=b^x$, la solución válida es:", opciones: ["$z=y-\\sqrt{y^2+1}$", "$z=y+\\sqrt{y^2+1}$", "ambas", "ninguna"], correcta: 1, explicacion: "$b^x>0$ y $y-\\sqrt{y^2+1}<0$, así que se descarta." },
      { pregunta: "Si $f$ es estrictamente creciente en un intervalo, entonces:", opciones: ["$f$ es inyectiva", "$f$ es sobreyectiva", "$f$ es par", "$f$ no tiene inversa"], correcta: 0, explicacion: "Si $x_1\\neq x_2$, la monotonía estricta obliga a $f(x_1)\\neq f(x_2)$; por lo tanto es inyectiva." }
    ],
    resumen: [
      "Inyectividad se demuestra algebraicamente o por monotonía; sobreyectividad se demuestra exhibiendo preimágenes.",
      "La inversa se obtiene despejando $x$; su dominio es el recorrido de la función original.",
      "En exponenciales y logaritmos, el cambio de variable y las restricciones de positividad son las herramientas centrales."
    ],
    referencias: [
      { titulo: "Clase 15 — Función inversa (PDF)", ruta: "recursos/clases/clase-15.pdf" },
      { titulo: "I5 2025-1 — Interrogación 5 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin5-mat1107.pdf" },
      { titulo: "I6 2024-1 — Solución Interrogación 6", ruta: "recursos/pruebas/PRUEBAS/2024-1/i6-mat1107-2024.pdf" },
      { titulo: "I5 2023-1 — Solución Interrogación 5", ruta: "recursos/pruebas/PRUEBAS/2023-1/i5.pdf" },
      { titulo: "Guía 5 — Biyectividad e inversa", ruta: "recursos/guias/guia-05-biyectividad.pdf" },
      { titulo: "Apunte 16 — Función inversa", ruta: "recursos/apuntes/apunte-clase-16.pdf" }
    ]
  });
})();
