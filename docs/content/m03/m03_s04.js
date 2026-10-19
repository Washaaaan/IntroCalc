/* Módulo 3 · Sección 4 — Zoología funcionaria: catálogo de funciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s04", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 16,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Zoología funcionaria: catálogo de funciones",
    objetivo: "Clasificar funciones según sean inyectivas, sobreyectivas o biyectivas, usando el test de la recta horizontal y la comparación entre recorrido y conjunto de llegada.",
    conexion: "Ya conocemos el dominio y el recorrido de varios tipos de funciones. Ahora usamos esa información para clasificarlas y entender por qué una misma fórmula puede comportarse distinto según el dominio y el conjunto de llegada que elijamos.",
    fuente: "Clase 13 · Stewart §2.7 · Apuntes 12 a 14 · Guía 4",
    prerrequisitos: ["Dominio y recorrido", "Gráficas de funciones", "Función cuadrática", "Función racional"],
    teoria: [
      { tipo: "texto", html: "<p>La clase 13 se llama <b>“Zoología funcionaria”</b> porque propone mirar las funciones como especies: cada una tiene una forma, un dominio, un recorrido y una manera de comportarse. Las preguntas típicas son: ¿dos valores distintos de $x$ pueden producir el mismo $y$? ¿Todo valor del conjunto de llegada es alcanzado? ¿La función se puede invertir? Para responderlas necesitamos tres definiciones y una prueba gráfica muy útil.</p>" },
      { tipo: "definicion", titulo: "Función inyectiva", html: "<p>Sea $f:A\\to B$. Decimos que $f$ es <b>inyectiva</b> si</p>$$(\\forall x_1,x_2\\in A)\\quad x_1\\neq x_2\\Longrightarrow f(x_1)\\neq f(x_2).$$<p>Equivalentemente, usando la contrarrecíproca,</p>$$(\\forall x_1,x_2\\in A)\\quad f(x_1)=f(x_2)\\Longrightarrow x_1=x_2.$$<p>En palabras: <b>nunca dos entradas distintas producen la misma salida</b>.</p>" },
      { tipo: "teorema", titulo: "Test de la recta horizontal", html: "<p>Una función es inyectiva si y solo si ninguna recta horizontal corta su gráfica en más de un punto. Si una recta horizontal corta la gráfica en dos puntos $(x_1,y)$ y $(x_2,y)$ con $x_1\\neq x_2$, entonces $f(x_1)=f(x_2)=y$ y la función no es inyectiva.</p>" },
      { tipo: "definicion", titulo: "Función sobreyectiva", html: "<p>$f:A\\to B$ es <b>sobreyectiva</b> si su recorrido coincide con el conjunto de llegada:</p>$$\\operatorname{Rec}(f)=B.$$<p>Equivalentemente, para cada $y\\in B$ existe al menos un $x\\in A$ tal que $f(x)=y$. Es decir, la ecuación $f(x)=y$ tiene solución para todo $y$ del conjunto de llegada. También se usa el término <b>epiyectiva</b>.</p>" },
      { tipo: "definicion", titulo: "Función biyectiva", html: "<p>$f:A\\to B$ es <b>biyectiva</b> si es inyectiva y sobreyectiva a la vez:</p>$$(\\forall y\\in B)(\\exists!\\,x\\in A)\\quad f(x)=y.$$<p>El símbolo $\\exists!$ se lee “existe un único”. Una función biyectiva tiene inversa $f^{-1}:B\\to A$.</p>" },
      { tipo: "nota", titulo: "Observaciones de la clase 13", html: "<p>La inyectividad y la sobreyectividad <b>no dependen solo de la fórmula</b>, sino también del dominio y del conjunto de llegada. Si una función no es inyectiva, se puede volver inyectiva restringiendo su dominio a un trozo donde sea creciente o decreciente. Si no es sobreyectiva, se puede volver sobreyectiva cambiando el conjunto de llegada por su recorrido. Por eso, al leer una función, siempre hay que mirar los conjuntos $A$ y $B$.</p>" },
      { tipo: "tabla", titulo: "Catálogo de funciones frecuentes", headers: ["Función", "Dominio natural", "Recorrido", "¿Inyectiva?", "¿Sobreyectiva a $\\R$?"], rows: [["Constante $f(x)=c$", "$\\R$", "$\\{c\\}$", "No", "No (salvo $\\R=\\{c\\}$)"], ["Identidad $f(x)=x$", "$\\R$", "$\\R$", "Sí", "Sí"], ["Lineal $f(x)=mx+b$, $m\\neq0$", "$\\R$", "$\\R$", "Sí", "Sí"], ["Cuadrática $f(x)=ax^2+bx+c$", "$\\R$", "$[k,\\infty)$ si $a>0$; $(-\\infty,k]$ si $a<0$", "No", "No"], ["Cúbica $f(x)=x^3$", "$\\R$", "$\\R$", "Sí", "Sí"], ["Valor absoluto $f(x)=|x|$", "$\\R$", "$[0,\\infty)$", "No", "No"], ["Raíz cuadrada $f(x)=\\sqrt{x}$", "$[0,\\infty)$", "$[0,\\infty)$", "Sí", "No (su llegada natural no es $\\R$)"], ["Recíproca $f(x)=\\frac1x$", "$\\R\\setminus\\{0\\}$", "$\\R\\setminus\\{0\\}$", "Sí", "No (0 no está en el recorrido)"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> <b>inyectiva</b> significa que no hay dos $x$ distintos que lleguen al mismo $y$; <b>sobreyectiva</b> significa que ningún valor del conjunto de llegada queda sin recibir una flecha; <b>biyectiva</b> significa que cada $y$ recibe exactamente una flecha, ni más ni menos.</div>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Familia de funciones: x, x², x³ y |x|", funciones: [ { f: function (x) { return x; }, desde: -2.2, hasta: 2.2, label: "x", color: "#1e5eff" }, { f: function (x) { return x * x; }, desde: -2.2, hasta: 2.2, label: "x²", color: "#00b894" }, { f: function (x) { return x * x * x; }, desde: -1.6, hasta: 1.6, label: "x³", color: "#e17055" }, { f: function (x) { return Math.abs(x); }, desde: -2.2, hasta: 2.2, label: "|x|", color: "#8e44ad" } ], xlabel: "x", ylabel: "y", rangeX: [-2.4, 2.4], rangeY: [-2.5, 4.5] } },
      { tipo: "nota", titulo: "Conexión con Stewart §2.7 y la Guía 4", html: "<p>Stewart §2.7 introduce las funciones uno a uno y la prueba de la recta horizontal antes de definir la inversa. La Guía 4 de MAT1107 trabaja dominio y recorrido de funciones como $\\sqrt{16-x^2}$, $\\frac{1}{x}$ y $\\frac{2x+3}{x-1}$; esos cálculos son justamente los que permiten decidir sobreyectividad. En la clase 13 se usan ejemplos con funciones por tramos, cuadráticas y racionales para mostrar que una misma fórmula puede ser biyectiva o no según el dominio escogido.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Tres especies frente al test de la recta horizontal",
        enunciado: "<p>Clasifique $f(x)=x^2$, $g(x)=x^3$ y $h(x)=|x|$ como funciones de $\\R$ en $\\R$: ¿son inyectivas?, ¿son sobreyectivas?</p>",
        concepto: "Aplicamos el test de la recta horizontal para la inyectividad y comparamos el recorrido con $\\R$ para la sobreyectividad.",
        desarrollo: [
          "<b>Paso 1. $f(x)=x^2$.</b> El recorrido es $[0,\\infty)$, que no coincide con $\\R$: no es sobreyectiva. Además, $f(1)=f(-1)=1$, así que una recta horizontal corta la parábola dos veces: no es inyectiva.",
          "<b>Paso 2. $g(x)=x^3$.</b> Es estrictamente creciente: si $x_1<x_2$, entonces $x_1^3<x_2^3$. Por lo tanto, es inyectiva. Su recorrido es $\\R$, así que también es sobreyectiva. Es biyectiva.",
          "<b>Paso 3. $h(x)=|x|$.</b> Su recorrido es $[0,\\infty)$, luego no es sobreyectiva. Además, $h(2)=h(-2)=2$: no es inyectiva. Su gráfica tiene forma de $V$ y cualquier recta horizontal con altura positiva la corta dos veces.",
          "<b>Paso 4. Comparar.</b> Las tres fórmulas son muy parecidas en su escritura, pero producen comportamientos distintos. La cúbica es la única biyectiva de las tres."
        ],
        respuesta: "$x^2$: no inyectiva y no sobreyectiva. $x^3$: biyectiva. $|x|$: no inyectiva y no sobreyectiva."
      },
      {
        titulo: "Una función por tramos que no es inyectiva",
        enunciado: "<p>Considere $$f(x)=\\begin{cases}3x^2+1 & \\text{si } -1\\le x<0,\\\\[2mm] \\dfrac{x}{2} & \\text{si } 0\\le x\\le 3.\\end{cases}$$ Estudie su inyectividad y determine su recorrido.</p>",
        concepto: "Para refutar la inyectividad basta encontrar dos entradas distintas con la misma salida. Para el recorrido se analiza cada tramo por separado y se une.",
        desarrollo: [
          "<b>Paso 1. Buscar un valor repetido.</b> En el primer tramo tomamos $x_1=-\\dfrac{1}{\\sqrt{15}}$, que está entre $-1$ y $0$. Entonces $$f(x_1)=3\\cdot\\frac{1}{15}+1=\\frac15+1=\\frac65.$$ En el segundo tramo, $x_2=\\dfrac{12}{5}=2{,}4$ está entre $0$ y $3$, y $$f(x_2)=\\frac{12/5}{2}=\\frac65.$$",
          "<b>Paso 2. Conclusión sobre inyectividad.</b> $x_1\\neq x_2$ pero $f(x_1)=f(x_2)$. Por lo tanto, $f$ no es inyectiva. Geométricamente, la recta horizontal $y=\\tfrac65$ corta la gráfica dos veces.",
          "<b>Paso 3. Recorrido del primer tramo.</b> Para $-1\\le x<0$, se tiene $0<x^2\\le1$, así que $1<3x^2+1\\le4$. El primer tramo aporta $(1,4]$.",
          "<b>Paso 4. Recorrido del segundo tramo.</b> Para $0\\le x\\le3$, $\\dfrac{x}{2}$ recorre $[0,\\tfrac32]$.",
          "<b>Paso 5. Unir.</b> $$\\operatorname{Rec}(f)=(1,4]\\cup\\left[0,\\tfrac32\\right]=[0,4].$$ Como $\\operatorname{Rec}(f)\\neq\\R$, la función tampoco es sobreyectiva de $\\R$ en $\\R$."
        ],
        respuesta: "$f$ no es inyectiva (por ejemplo $f\\left(-\\tfrac{1}{\\sqrt{15}}\\right)=f\\left(\\tfrac{12}{5}\\right)=\\tfrac65$); su recorrido es $[0,4]$.",
        grafico: { tipo: "plot2d", titulo: "Función por tramos: dos entradas distintas con la misma salida", funciones: [ { f: function (x) { return 3 * x * x + 1; }, desde: -1, hasta: -0.001, label: "3x² + 1", color: "#1e5eff" }, { f: function (x) { return x / 2; }, desde: 0, hasta: 3, label: "x/2", color: "#00b894" } ], series: [ { x: [-1, 2.4, 0], y: [4, 1.2, 0], label: "puntos", mode: "markers", color: "#e17055" } ], puntosAbiertos: [ { x: 0, y: 1, label: "límite no alcanzado", color: "#1e5eff" } ], xlabel: "x", ylabel: "f(x)", rangeX: [-1.4, 3.4], rangeY: [-0.5, 4.5] }
      },
      {
        titulo: "Una cuadrática restringida que sí es biyectiva",
        enunciado: "<p>Sea $f:]-\\infty,1]\\to]-\\infty,2]$ definida por $f(x)=-x^2+4x-1$. Demuestre que es biyectiva y encuentre su inversa.</p>",
        concepto: "Restringir el dominio a un intervalo donde la función es monótona garantiza la inyectividad. Si además el recorrido coincide con el conjunto de llegada, la función es biyectiva.",
        desarrollo: [
          "<b>Paso 1. Inyectividad.</b> Sean $x_1<x_2\\le1$. Entonces $$f(x_2)-f(x_1)=-(x_2^2-x_1^2)+4(x_2-x_1)=(x_2-x_1)\\bigl(4-(x_1+x_2)\\bigr).$$ Como $x_1+x_2<2$, el factor $4-(x_1+x_2)$ es positivo. También $x_2-x_1>0$. Por lo tanto, $f(x_2)-f(x_1)>0$: la función es estrictamente creciente y, en consecuencia, inyectiva.",
          "<b>Paso 2. Recorrido.</b> La parábola $y=-x^2+4x-1$ tiene vértice en $x=2$, que está fuera del dominio. En el dominio $]-\\infty,1]$ la función es creciente, con $f(1)=-1+4-1=2$. Cuando $x\\to-\\infty$, $f(x)\\to-\\infty$. Así, $$\\operatorname{Rec}(f)=]-\\infty,2],$$ que coincide con el conjunto de llegada. Por lo tanto, es sobreyectiva.",
          "<b>Paso 3. Conclusión.</b> Es inyectiva y sobreyectiva, así que es biyectiva.",
          "<b>Paso 4. Calcular la inversa.</b> Partimos de $y=-x^2+4x-1$ y despejamos $x$: $$x^2-4x+(1+y)=0.$$ Por la fórmula cuadrática, $$x=\\frac{4\\pm\\sqrt{16-4(1+y)}}{2}=2\\pm\\sqrt{3-y}.$$",
          "<b>Paso 5. Elegir el signo.</b> Como el dominio es $x\\le1$, debemos tomar el signo menos: $$f^{-1}(y)=2-\\sqrt{3-y}.$$ Verificación: $f^{-1}(2)=2-1=1$ y $f(1)=2$; además $f^{-1}(-1)=2-2=0$ y $f(0)=-1$."
        ],
        respuesta: "$f$ es biyectiva y $f^{-1}(y)=2-\\sqrt{3-y}$, con $y\\le2$."
      }
    ],
    ejercicios: [
      {
        titulo: "Función lineal",
        dificultad: "basico",
        enunciado: "<p>Sea $f:\\R\\to\\R$, $f(x)=3x-5$. Determine si es inyectiva, sobreyectiva y biyectiva. Si es biyectiva, encuentre su inversa.</p>",
        concepto: "Una recta no vertical es estrictamente monótona, por lo que pasa el test de la recta horizontal y su recorrido es todo $\\R$.",
        pista: "Despeje $x$ en $y=3x-5$.",
        desarrollo: [
          "Si $f(x_1)=f(x_2)$, entonces $3x_1-5=3x_2-5$, luego $3x_1=3x_2$ y $x_1=x_2$. Es inyectiva.",
          "Para cualquier $y\\in\\R$, se puede tomar $x=\\dfrac{y+5}{3}$, que es real. Luego es sobreyectiva.",
          "Al ser ambas cosas, es biyectiva.",
          "Su inversa es $f^{-1}(y)=\\dfrac{y+5}{3}$."
        ],
        respuesta: "Es biyectiva; $f^{-1}(y)=\\dfrac{y+5}{3}$."
      },
      {
        titulo: "Cuadrática con dominio restringido",
        dificultad: "basico",
        enunciado: "<p>Sea $f:[2,\\infty)\\to[0,\\infty)$, $f(x)=x^2-4x+4$. Determine si es biyectiva y encuentre su inversa.</p>",
        concepto: "Completar el cuadrado revela que la función es una parábola trasladada; restringida al lado derecho del vértice es inyectiva.",
        pista: "Escriba $x^2-4x+4=(x-2)^2$.",
        desarrollo: [
          "$f(x)=(x-2)^2$. En el dominio $[2,\\infty)$, la función es estrictamente creciente, así que es inyectiva.",
          "El recorrido es $[0,\\infty)$, que coincide con el conjunto de llegada: es sobreyectiva.",
          "Por lo tanto, es biyectiva.",
          "Para la inversa: $y=(x-2)^2$. Como $x\\ge2$, se toma la raíz positiva: $x-2=\\sqrt{y}$, es decir, $x=2+\\sqrt{y}$.",
          "Así, $f^{-1}(y)=2+\\sqrt{y}$, con $y\\ge0$."
        ],
        respuesta: "Es biyectiva; $f^{-1}(y)=2+\\sqrt{y}$."
      },
      {
        titulo: "Una racional que no es inyectiva ni sobreyectiva",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f:\\R\\to\\R$, $f(x)=\\dfrac{x}{x^2+1}$. Determine si es inyectiva y sobreyectiva. Encuentre su recorrido.</p>",
        concepto: "Para la inyectividad buscamos dos entradas con la misma salida. Para el recorrido resolvemos $y=\\dfrac{x}{x^2+1}$ y exigimos que la ecuación tenga solución real.",
        pista: "Pruebe con $x=2$ y $x=\\tfrac12$; para el recorrido, ordene como una ecuación cuadrática en $x$.",
        desarrollo: [
          "No es inyectiva: $f(2)=\\dfrac{2}{5}$ y $f\\left(\\tfrac12\\right)=\\dfrac{1/2}{1/4+1}=\\dfrac{1/2}{5/4}=\\dfrac25$.",
          "Para el recorrido, sea $y=\\dfrac{x}{x^2+1}$. Entonces $y x^2-x+y=0$.",
          "Si $y\\neq0$, esta ecuación cuadrática tiene solución real si y solo si su discriminante es no negativo: $1-4y^2\\ge0$, es decir, $|y|\\le\\tfrac12$.",
          "El valor $y=0$ se alcanza en $x=0$. Por lo tanto, $\\operatorname{Rec}(f)=\\left[-\\tfrac12,\\tfrac12\\right]$.",
          "Como el recorrido no es $\\R$, no es sobreyectiva."
        ],
        respuesta: "No es inyectiva ni sobreyectiva; $\\operatorname{Rec}(f)=\\left[-\\tfrac12,\\tfrac12\\right]$."
      },
      {
        titulo: "Sobreyectividad con conjunto de llegada elegido",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f:\\R\\to[-2,\\infty)$, $f(x)=x^2-6x+7$. ¿Es sobreyectiva? ¿Es inyectiva? Justifique.</p>",
        concepto: "Completar el cuadrado da el vértice y el recorrido. La sobreyectividad se decide comparando el recorrido con el conjunto de llegada.",
        pista: "Complete el cuadrado: $x^2-6x+7=(x-3)^2-2$.",
        desarrollo: [
          "$f(x)=(x-3)^2-2$. El valor mínimo es $-2$, alcanzado en $x=3$. Por lo tanto, $\\operatorname{Rec}(f)=[-2,\\infty)$.",
          "Como el recorrido coincide exactamente con $[-2,\\infty)$, la función es sobreyectiva.",
          "No es inyectiva: $f(2)=(2-3)^2-2=-1$ y $f(4)=(4-3)^2-2=-1$.",
          "Así, es sobreyectiva pero no inyectiva; por lo tanto, no es biyectiva."
        ],
        respuesta: "Es sobreyectiva, pero no inyectiva; no es biyectiva."
      },
      {
        titulo: "Una raíz negativa",
        dificultad: "avanzado",
        enunciado: "<p>Sea $f:\\R\\to\\R$, $f(x)=-\\sqrt{x^2+4}$. Determine si es inyectiva, sobreyectiva o biyectiva. Encuentre su recorrido.</p>",
        concepto: "La raíz cuadrada siempre es no negativa; con el signo menos, todos los valores quedan bajo $-2$. La simetría de $x^2$ rompe la inyectividad.",
        pista: "Note que $x^2+4\\ge4$ y que $f(1)=f(-1)$.",
        desarrollo: [
          "Como $x^2+4\\ge4$, se tiene $\\sqrt{x^2+4}\\ge2$ y por lo tanto $-\\sqrt{x^2+4}\\le-2$.",
          "El valor $-2$ se alcanza en $x=0$, y cuando $|x|\\to\\infty$, $f(x)\\to-\\infty$. Así, $\\operatorname{Rec}(f)=]-\\infty,-2]$.",
          "No es sobreyectiva de $\\R$ en $\\R$, porque, por ejemplo, $0$ no se alcanza.",
          "No es inyectiva: $f(1)=-\\sqrt5$ y $f(-1)=-\\sqrt5$.",
          "Como falla la inyectividad, tampoco es biyectiva."
        ],
        respuesta: "No es inyectiva ni sobreyectiva; $\\operatorname{Rec}(f)=]-\\infty,-2]$."
      }
    ],
    erroresComunes: [
      "Pensar que $x^2$ es inyectiva porque “cada $x$ tiene un único $y$”; eso es ser función, no ser inyectiva.",
      "Olvidar que la inyectividad y la sobreyectividad dependen del dominio y del conjunto de llegada.",
      "Para probar que no hay inyectividad, dar un ejemplo mal calculado; conviene verificar que $f(x_1)=f(x_2)$ con $x_1\\neq x_2$.",
      "Confundir recorrido con conjunto de llegada al decidir sobreyectividad.",
      "Aplicar el test de la recta horizontal sin mirar el dominio restringido de la función."
    ],
    checklist: [
      "Puedo escribir las definiciones de inyectiva, sobreyectiva y biyectiva con cuantificadores.",
      "Sé usar el test de la recta horizontal para decidir inyectividad.",
      "Puedo calcular el recorrido y compararlo con el conjunto de llegada para decidir sobreyectividad.",
      "Reconozco que una misma fórmula puede cambiar de clasificación si cambio el dominio o el codominio.",
      "Sé encontrar la inversa de una función biyectiva despejando $x$.",
      "Puedo clasificar las funciones del catálogo (lineal, cuadrática, cúbica, valor absoluto, raíz, recíproca)."
    ],
    autoevaluacion: [
      { pregunta: "¿Cuál es la forma equivalente de decir que $f:A\\to B$ es inyectiva?", opciones: ["Para todo $y\\in B$ existe $x\\in A$ con $f(x)=y$", "$f(x_1)=f(x_2)\\Rightarrow x_1=x_2$", "$\\operatorname{Rec}(f)=B$", "Para todo $x\\in A$, $f(x)\\in B$"], correcta: 1, explicacion: "La inyectividad se puede escribir con la contrarrecíproca: si las imágenes son iguales, las entradas deben ser iguales." },
      { pregunta: "El test de la recta horizontal sirve para decidir:", opciones: ["Si la función es sobreyectiva", "Si la función es inyectiva", "Si la gráfica es una función", "Si la función tiene asíntotas"], correcta: 1, explicacion: "Si una recta horizontal corta la gráfica más de una vez, hay dos $x$ distintos con la misma imagen." },
      { pregunta: "La función $f:\\R\\to\\R$, $f(x)=x^2$ es:", opciones: ["Biyectiva", "Inyectiva pero no sobreyectiva", "Sobreyectiva pero no inyectiva", "Ni inyectiva ni sobreyectiva"], correcta: 3, explicacion: "$f(1)=f(-1)$ impide la inyectividad, y los números negativos no están en el recorrido $[0,\\infty)$." },
      { pregunta: "La función $f:[0,\\infty)\\to[0,\\infty)$, $f(x)=x^2$ es:", opciones: ["Biyectiva", "Solo inyectiva", "Solo sobreyectiva", "Ninguna de las anteriores"], correcta: 0, explicacion: "En $[0,\\infty)$ es estrictamente creciente y su recorrido es $[0,\\infty)$, que coincide con el codominio." },
      { pregunta: "Si $f:\\R\\to\\R$, $f(x)=3x-5$, entonces $f^{-1}(y)$ es:", opciones: ["$\\dfrac{y-5}{3}$", "$3y+5$", "$\\dfrac{y+5}{3}$", "$\\dfrac{3}{y+5}$"], correcta: 2, explicacion: "De $y=3x-5$ se obtiene $3x=y+5$, luego $x=\\dfrac{y+5}{3}$." },
      { pregunta: "Una función que no es sobreyectiva puede volverse sobreyectiva:", opciones: ["Cambiando su fórmula", "Restringiendo su dominio", "Cambiando el conjunto de llegada por su recorrido", "Eliminando sus raíces"], correcta: 2, explicacion: "La sobreyectividad compara recorrido y conjunto de llegada; si elegimos como llegada exactamente el recorrido, la función pasa a ser sobreyectiva." }
    ],
    resumen: [
      "Inyectiva significa que no hay dos entradas distintas con la misma salida; se detecta con el test de la recta horizontal.",
      "Sobreyectiva significa que el recorrido coincide con el conjunto de llegada; se decide comparando ambos conjuntos.",
      "Biyectiva es inyectiva y sobreyectiva a la vez, y es la condición para que exista la función inversa."
    ],
    referencias: [
      { titulo: "Clase 13 — Zoología funcionaria (PDF)", ruta: "recursos/clases/clase-13.pdf" },
      { titulo: "Stewart, Precálculo §2.7 — One-to-One Functions and Their Inverses", ruta: "recursos/libros/precalculo-stewart.pdf" },
      { titulo: "Guía 4 — Funciones (PDF)", ruta: "recursos/guias/guia-04-funciones.pdf" },
      { titulo: "Apunte Clase 14 — Funciones (PDF)", ruta: "recursos/apuntes/apunte-clase-14.pdf" }
    ],
  });
})();
