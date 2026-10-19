/* Módulo 5 · Sección 5 — Sucesiones monótonas y acotadas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s05", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 30,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Sucesiones monótonas y acotadas",
    objetivo: "Reconocer sucesiones crecientes, decrecientes y acotadas, usar el teorema de convergencia monótona para justificar la existencia de un límite y calcularlo a partir de una relación de recurrencia.",
    conexion: "Necesitas recordar la definición épsilon-N de límite y las propiedades algebraicas de los límites. Con esas herramientas podremos demostrar que ciertas sucesiones convergen aunque no conozcamos de antemano una fórmula cerrada para su límite.",
    fuente: "Clase 24B · Guía 10 · Interrogación 7 · Stewart (sucesiones y límites)",
    prerrequisitos: ["Definición épsilon-N de límite", "Inducción matemática", "Desigualdades y valor absoluto", "Supremo e ínfimo de un conjunto"],
    teoria: [
      { tipo: "texto", html: "<p>Hay sucesiones cuyo término general no es fácil de escribir con una fórmula simple, pero que aparecen definidas <b>por recurrencia</b>: damos el primer término y una regla que produce el siguiente. Por ejemplo, $a_1=2$ y $a_{n+1}=\\frac12(a_n+6)$. Si calculamos unos términos vemos $2,\\,4,\\,5,\\,5{,}5,\\,5{,}75,\\dots$: parecen acercarse a $6$. Para afirmarlo con rigor no basta mirar los primeros términos; necesitamos dos propiedades: que la sucesión <b>suba siempre</b> y que <b>no se escape</b> más allá de una cota. Esas dos ideas son la monotonía y la acotación.</p>" },
      { tipo: "definicion", titulo: "Sucesión monótona", html: "<p>Una sucesión $(a_n)_{n\\ge 1}$ es:</p><ul><li><b>creciente</b> si $a_n\\le a_{n+1}$ para todo $n\\in\\N$;</li><li><b>estrictamente creciente</b> si $a_n<a_{n+1}$ para todo $n\\in\\N$;</li><li><b>decreciente</b> si $a_n\\ge a_{n+1}$ para todo $n\\in\\N$;</li><li><b>estrictamente decreciente</b> si $a_n>a_{n+1}$ para todo $n\\in\\N$.</li></ul><p>Si alguna de estas condiciones vale desde cierto índice en adelante, decimos que la sucesión es <b>monótona a partir de ese índice</b> (o eventualmente monótona).</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "Sucesión creciente y acotada: aₙ = 2 − 1/n", terminos: [1, 1.5, 1.6667, 1.75, 1.8, 1.8333, 1.8571, 1.875, 1.8889, 1.9], limite: 2, label: "aₙ = 2 − 1/n", ylabel: "aₙ", rangeY: [0, 2.3], height: 360 } },
      { tipo: "definicion", titulo: "Sucesión acotada, cota superior y cota inferior", html: "<p>Una sucesión $(a_n)$ está <b>acotada superiormente</b> si existe $M\\in\\R$ tal que $a_n\\le M$ para todo $n\\in\\N$. El número $M$ se llama <b>cota superior</b>.</p><p>Está <b>acotada inferiormente</b> si existe $m\\in\\R$ tal que $m\\le a_n$ para todo $n\\in\\N$. El número $m$ se llama <b>cota inferior</b>.</p><p>Está <b>acotada</b> si lo está superior e inferiormente, es decir, si existe $K>0$ tal que $|a_n|\\le K$ para todo $n$.</p><p>La menor de las cotas superiores se llama <b>supremo</b> y se denota $\\sup\\{a_n:n\\in\\N\\}$. La mayor de las cotas inferiores se llama <b>ínfimo</b> y se denota $\\inf\\{a_n:n\\in\\N\\}$.</p>" },
      { tipo: "nota", titulo: "El axioma de completitud (Clase 24B)", html: "<p>El teorema central de esta sección se apoya en una propiedad profunda de los números reales:</p><div class='callout'><b>Axioma de completitud.</b> Todo conjunto no vacío $S\\subseteq\\R$ que está acotado superiormente tiene una menor cota superior, es decir, existe $\\sup S\\in\\R$.</div><p>Equivalentemente, todo conjunto no vacío acotado inferiormente tiene ínfimo. Este axioma expresa que <b>no hay agujeros</b> en la recta real: si una sucesión creciente se acerca a un «hueco», ese hueco está ocupado por un número real. Los racionales, en cambio, tienen huecos (por ejemplo, no hay ningún racional cuyo cuadrado sea $2$), y por eso el teorema de convergencia monótona puede fallar si trabajáramos solo con $\\mathbb{Q}$.</p>" },
      { tipo: "teorema", titulo: "Teorema de convergencia monótona", html: "<p><b>Teorema.</b> Toda sucesión monótona y acotada es convergente. Más precisamente:</p><ul><li>si $(a_n)$ es creciente y acotada superiormente, entonces converge y $$\\lim_{n\\to\\infty}a_n=\\sup\\{a_n:n\\in\\N\\};$$</li><li>si $(a_n)$ es decreciente y acotada inferiormente, entonces converge y $$\\lim_{n\\to\\infty}a_n=\\inf\\{a_n:n\\in\\N\\}.$$</li></ul><p><b>Demostración (caso creciente).</b> Sea $L=\\sup\\{a_n:n\\in\\N\\}$, que existe por el axioma de completitud. Dado $\\varepsilon>0$, el número $L-\\varepsilon$ es menor que el supremo, así que <b>no</b> puede ser cota superior. Por lo tanto existe $N\\in\\N$ tal que $a_N>L-\\varepsilon$. Como la sucesión es creciente, para todo $n\\ge N$ se tiene $$L-\\varepsilon<a_N\\le a_n\\le L<L+\\varepsilon.$$ Así, $|a_n-L|<\\varepsilon$ para todo $n\\ge N$. Esto prueba que $a_n\\to L$. El caso decreciente se demuestra de forma análoga usando el ínfimo. $\\blacksquare$</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una sucesión creciente y acotada superiormente es como una persona que sube una escalera con un techo: no puede seguir subiendo para siempre y tampoco puede atravesar el techo, así que se va acercando a un «techo límite». Ese techo es exactamente la menor de todas las cotas superiores. La monotonía impide que la sucesión baje y vuelva a subir, y la acotación impide que se escape al infinito.</div>" },
      { tipo: "teorema", titulo: "Convergencia implica acotación (pero el recíproco es falso)", html: "<p><b>Proposición.</b> Toda sucesión convergente está acotada.</p><p><b>Demostración.</b> Si $a_n\\to L$, tomando $\\varepsilon=1$ existe $N$ tal que $|a_n-L|<1$ para todo $n\\ge N$. Entonces $|a_n|\\le |a_n-L|+|L|<1+|L|$ para $n\\ge N$. Para los finitos términos anteriores, sea $K=\\max\\{|a_1|,\\dots,|a_{N-1}|,1+|L|\\}$. Entonces $|a_n|\\le K$ para todo $n$. $\\blacksquare$</p><p>El recíproco <b>no</b> es cierto: la sucesión $a_n=(-1)^n$ está acotada ($|a_n|=1$), pero no converge, porque alterna entre $1$ y $-1$. La monotonía tampoco basta por sí sola: $a_n=n$ es creciente pero no está acotada y diverge a $+\\infty$. El teorema necesita <b>ambas</b> hipótesis.</p>" },
      { tipo: "nota", titulo: "Cómo usar inducción para monotonía y cotas", html: "<p>Para demostrar por inducción una propiedad $P(n)$ de una sucesión recursiva se siguen tres pasos:</p><ol><li><b>Caso base:</b> verificar $P(1)$ (o el primer índice disponible).</li><li><b>Hipótesis de inducción:</b> suponer que $P(k)$ es verdadera para un $k$ arbitrario.</li><li><b>Paso inductivo:</b> usando $P(k)$, demostrar $P(k+1)$.</li></ol><p>Por ejemplo, para probar que $(a_n)$ es creciente se prueba $P(n): a_{n+1}\\ge a_n$. Para probar que está acotada por $M$ se prueba $P(n): a_n\\le M$. Es importante no suponer lo que se quiere demostrar: en el paso inductivo se supone $P(k)$, no $P(k+1)$.</p>" },
      { tipo: "teorema", titulo: "Cálculo del límite por recurrencia", html: "<p><b>Teorema (paso al límite en una recurrencia).</b> Supongamos que $a_n\\to L$ y que $a_{n+1}=f(a_n)$, donde $f$ es una función continua en $L$ (por ejemplo, un polinomio, una raíz o una función racional definida en $L$). Entonces</p>$$L=f(L).$$<p><b>Idea de la demostración.</b> Como $a_n\\to L$, también $a_{n+1}\\to L$ (la sucesión desplazada tiene el mismo límite). Entonces $$L=\\lim_{n\\to\\infty}a_{n+1}=\\lim_{n\\to\\infty}f(a_n)=f\\left(\\lim_{n\\to\\infty}a_n\\right)=f(L),$$ donde el último paso usa la continuidad de $f$. $\\blacksquare$</p><p>Este teorema <b>no</b> sirve para demostrar que el límite existe: primero hay que probar la convergencia con monotonía y acotación. Una vez probada, la ecuación $L=f(L)$ entrega el valor. Al resolverla pueden aparecer soluciones extrañas; hay que conservar solo las que pertenecen al rango donde viven los términos.</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "Recurrencia a₁ = 2, aₙ₊₁ = (aₙ + 6)/2", terminos: [2, 4, 5, 5.5, 5.75, 5.875, 5.9375, 5.96875, 5.984375, 5.9921875], limite: 6, label: "aₙ₊₁ = (aₙ + 6)/2", ylabel: "aₙ", rangeY: [0, 6.5], height: 360 } },
      { tipo: "tabla", titulo: "Monotonía y acotación no bastan por separado", headers: ["Sucesión", "¿Monótona?", "¿Acotada?", "¿Converge?"], rows: [["$a_n=1-\\frac1n$", "Creciente", "Sí", "Sí, a $1$"], ["$a_n=(-1)^n$", "No", "Sí", "No"], ["$a_n=n$", "Creciente", "No", "No (diverge a $+\\infty$)"], ["$a_n=\\frac1n$", "Decreciente", "Sí", "Sí, a $0$"]] }
    ],
    ejemplos: [
      {
        titulo: "Una recurrencia que se acerca a 6",
        enunciado: "<p>Considere la sucesión definida por $a_1=2$ y $a_{n+1}=\\frac12(a_n+6)$ para $n\\ge 1$. Demuestre que es creciente y acotada superiormente, justifique que converge y calcule su límite.</p>",
        concepto: "Se usa el teorema de convergencia monótona para asegurar la existencia del límite y luego el paso al límite en la recurrencia para calcularlo. La monotonía y la cota se prueban por inducción.",
        desarrollo: [
          "<b>Paso 1. Calculamos algunos términos para intuir.</b> $a_1=2$, $a_2=\\frac12(2+6)=4$, $a_3=\\frac12(4+6)=5$, $a_4=5{,}5$. La sucesión parece crecer y acercarse a $6$.",
          "<b>Paso 2. Probamos que es creciente por inducción.</b> Queremos $a_{n+1}>a_n$. Para $n=1$: $a_2=4>2=a_1$, cierto. Supongamos que $a_{k+1}>a_k$. Sumando $6$ y dividiendo por $2$ (operaciones que conservan la desigualdad) obtenemos $$a_{k+2}=\\frac12(a_{k+1}+6)>\\frac12(a_k+6)=a_{k+1}.$$ Así, la propiedad vale para $k+1$. Por inducción, $a_{n+1}>a_n$ para todo $n$.",
          "<b>Paso 3. Probamos que está acotada superiormente por 6.</b> Para $n=1$, $a_1=2<6$. Supongamos que $a_k<6$. Entonces $$a_{k+1}=\\frac12(a_k+6)<\\frac12(6+6)=6.$$ Por inducción, $a_n<6$ para todo $n$.",
          "<b>Paso 4. Aplicamos el teorema de convergencia monótona.</b> La sucesión es creciente y acotada superiormente, luego converge. Sea $L=\\lim_{n\\to\\infty}a_n$.",
          "<b>Paso 5. Pasamos al límite en la recurrencia.</b> Como $a_{n+1}\\to L$ y $a_n\\to L$, $$L=\\frac12(L+6).$$ Multiplicando por $2$: $2L=L+6$, de donde $L=6$.",
          "<b>Paso 6. Verificamos coherencia.</b> El valor $6$ es la cota superior que habíamos encontrado y todos los términos son menores que $6$. El resultado es consistente."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=6$",
        grafico: { tipo: "sucesion", titulo: "Los términos suben y se acercan a 6", terminos: [2, 4, 5, 5.5, 5.75, 5.875, 5.9375, 5.96875], limite: 6, label: "aₙ", ylabel: "aₙ", rangeY: [0, 6.5], height: 340 }
      },
      {
        titulo: "Una raíz dentro de la recurrencia",
        enunciado: "<p>Sea $a_1=\\sqrt2$ y $a_{n+1}=\\sqrt{2+a_n}$ para $n\\ge 1$. Demuestre que la sucesión es creciente y acotada superiormente por $2$, y calcule su límite.</p>",
        concepto: "Se combina la monotonía de la función raíz cuadrada con inducción. El límite se obtiene resolviendo $L=\\sqrt{2+L}$ y descartando la raíz negativa.",
        desarrollo: [
          "<b>Paso 1. Calculamos los primeros términos.</b> $a_1=\\sqrt2\\approx1{,}414$; $a_2=\\sqrt{2+\\sqrt2}\\approx1{,}848$; $a_3=\\sqrt{2+1{,}848}\\approx1{,}961$. La sucesión parece crecer y acercarse a $2$.",
          "<b>Paso 2. Probamos que es creciente.</b> Para $n=1$: $a_2=\\sqrt{2+\\sqrt2}>\\sqrt2=a_1$, pues $2+\\sqrt2>\\sqrt2$. Supongamos $a_{k+1}>a_k$. Como la función $x\\mapsto\\sqrt{2+x}$ es estrictamente creciente en $x\\ge0$, $$a_{k+2}=\\sqrt{2+a_{k+1}}>\\sqrt{2+a_k}=a_{k+1}.$$ Por inducción, la sucesión es estrictamente creciente.",
          "<b>Paso 3. Probamos la cota $a_n<2$.</b> Para $n=1$, $\\sqrt2<2$. Si $a_k<2$, entonces $$a_{k+1}=\\sqrt{2+a_k}<\\sqrt{2+2}=\\sqrt4=2.$$ Por inducción, $a_n<2$ para todo $n$.",
          "<b>Paso 4. Existe el límite.</b> Por el teorema de convergencia monótona, $(a_n)$ converge. Sea $L=\\lim a_n$. Como todos los términos están entre $\\sqrt2$ y $2$, se tiene $\\sqrt2\\le L\\le2$.",
          "<b>Paso 5. Calculamos el límite.</b> Pasando al límite en $a_{n+1}=\\sqrt{2+a_n}$: $$L=\\sqrt{2+L}.$$ Elevando al cuadrado (ambos lados son no negativos): $L^2=2+L$, es decir, $L^2-L-2=0$. Factorizando, $(L-2)(L+1)=0$, así que $L=2$ o $L=-1$.",
          "<b>Paso 6. Descartamos la solución extraña.</b> Como $L\\ge\\sqrt2>0$, la única posibilidad es $L=2$. La raíz $L=-1$ apareció por elevar al cuadrado y no es válida."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=2$",
        grafico: { tipo: "sucesion", titulo: "a₁ = √2, aₙ₊₁ = √(2 + aₙ)", terminos: [1.4142, 1.8478, 1.9616, 1.9904, 1.9976, 1.9994, 1.9998], limite: 2, label: "aₙ", ylabel: "aₙ", rangeY: [0, 2.3], height: 340 }
      },
      {
        titulo: "Una fórmula cerrada que también es monótona",
        enunciado: "<p>Considere $a_n=\\dfrac{3n}{n+1}$ para $n\\ge1$. Demuestre que es creciente y acotada superiormente por $3$, y calcule su límite.</p>",
        concepto: "La monotonía se prueba comparando $a_{n+1}-a_n$ y la cota se obtiene de una desigualdad directa. El límite se calcula dividiendo por $n$.",
        desarrollo: [
          "<b>Paso 1. Calculamos la diferencia.</b> $$a_{n+1}-a_n=\\frac{3(n+1)}{n+2}-\\frac{3n}{n+1}.$$ Con denominador común $(n+2)(n+1)$: $$=\\frac{3(n+1)^2-3n(n+2)}{(n+2)(n+1)}.$$",
          "<b>Paso 2. Simplificamos el numerador.</b> $(n+1)^2=n^2+2n+1$ y $n(n+2)=n^2+2n$. Entonces $$3(n^2+2n+1)-3(n^2+2n)=3.$$ Por lo tanto $$a_{n+1}-a_n=\\frac{3}{(n+2)(n+1)}>0.$$ Así, la sucesión es estrictamente creciente.",
          "<b>Paso 3. Probamos la cota.</b> Como $n<n+1$, se tiene $3n<3(n+1)$ y por lo tanto $$a_n=\\frac{3n}{n+1}<\\frac{3(n+1)}{n+1}=3.$$ Además $a_n>0$ para todo $n\\ge1$, así que la sucesión está acotada.",
          "<b>Paso 4. Justificamos la convergencia.</b> Es creciente y acotada superiormente; por el teorema de convergencia monótona, converge a algún $L\\le3$.",
          "<b>Paso 5. Calculamos el límite.</b> Dividiendo numerador y denominador por $n$: $$\\lim_{n\\to\\infty}\\frac{3n}{n+1}=\\lim_{n\\to\\infty}\\frac{3}{1+\\frac1n}=\\frac{3}{1+0}=3.$$"
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=3$",
        grafico: { tipo: "sucesion", titulo: "aₙ = 3n/(n+1)", terminos: [1.5, 2, 2.25, 2.4, 2.5, 2.5714, 2.625, 2.6667, 2.7, 2.7273], limite: 3, label: "aₙ = 3n/(n+1)", ylabel: "aₙ", rangeY: [0, 3.3], height: 340 }
      }
    ],
    ejercicios: [
      {
        titulo: "Clasificar monotonía, acotación y convergencia",
        dificultad: "basico",
        enunciado: "<p>Para cada sucesión indique si es creciente, decreciente o ninguna de las dos; si está acotada; y si converge. Justifique con una frase en cada caso.</p><p>(a) $a_n=\\dfrac1n$ &nbsp;&nbsp; (b) $b_n=(-1)^n$ &nbsp;&nbsp; (c) $c_n=\\dfrac{n}{n+1}$ &nbsp;&nbsp; (d) $d_n=n$</p>",
        concepto: "Se aplican las definiciones de monotonía, acotación y convergencia, y se contrasta el teorema de convergencia monótona con casos donde falta alguna hipótesis.",
        pista: "Para la monotonía compare $a_{n+1}$ con $a_n$. Para la acotación busque una cota superior e inferior explícita.",
        desarrollo: [
          "<b>(a)</b> $\\frac{1}{n+1}<\\frac1n$, así que es estrictamente decreciente. Además $0<\\frac1n\\le1$, luego está acotada. Converge a $0$.",
          "<b>(b)</b> Los términos son $-1,1,-1,1,\\dots$; no es creciente ni decreciente. Está acotada porque $|(-1)^n|=1$. No converge, pues las subsucesiones pares e impares tienen límites distintos ($1$ y $-1$).",
          "<b>(c)</b> $\\frac{n+1}{n+2}-\\frac{n}{n+1}=\\frac{(n+1)^2-n(n+2)}{(n+2)(n+1)}=\\frac{1}{(n+2)(n+1)}>0$, luego es estrictamente creciente. Como $0<\\frac{n}{n+1}<1$, está acotada. Por el teorema de convergencia monótona converge; su límite es $1$.",
          "<b>(d)</b> $d_{n+1}=n+1>n=d_n$, así que es estrictamente creciente. No está acotada superiormente y diverge a $+\\infty$; no converge a un número real."
        ],
        respuesta: "(a) decreciente, acotada, converge a $0$; (b) no monótona, acotada, no converge; (c) creciente, acotada, converge a $1$; (d) creciente, no acotada, diverge a $+\\infty$."
      },
      {
        titulo: "Recurrencia con promedio y cota 3",
        dificultad: "basico",
        enunciado: "<p>Sea $a_1=1$ y $a_{n+1}=\\dfrac12(a_n+3)$. Demuestre por inducción que la sucesión es creciente y que $a_n<3$ para todo $n$. Luego calcule su límite.</p>",
        concepto: "Es el mismo esquema del ejemplo inicial: inducción para monotonía y cota, teorema de convergencia monótona y paso al límite en la recurrencia.",
        pista: "Para la monotonía, compare $a_{n+1}$ con $a_n$ usando la recurrencia; para la cota, reemplace $a_k<3$ en la fórmula.",
        desarrollo: [
          "<b>Paso 1.</b> $a_1=1$ y $a_2=\\frac12(1+3)=2$, así que $a_2>a_1$.",
          "<b>Paso 2.</b> Si $a_{k+1}>a_k$, entonces $a_{k+1}+3>a_k+3$ y, dividiendo por $2$, $a_{k+2}>a_{k+1}$. Por inducción, $(a_n)$ es creciente.",
          "<b>Paso 3.</b> $a_1=1<3$. Si $a_k<3$, entonces $a_{k+1}=\\frac12(a_k+3)<\\frac12(3+3)=3$. Por inducción, $a_n<3$ para todo $n$.",
          "<b>Paso 4.</b> Por el teorema de convergencia monótona, existe $L=\\lim a_n$ y $L\\le3$.",
          "<b>Paso 5.</b> Pasando al límite: $L=\\frac12(L+3)$, luego $2L=L+3$ y $L=3$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=3$"
      },
      {
        titulo: "Raíz de dos veces el término anterior",
        dificultad: "intermedio",
        enunciado: "<p>Sea $a_1=1$ y $a_{n+1}=\\sqrt{2a_n}$. Demuestre que la sucesión es creciente y acotada superiormente por $2$, y calcule su límite.</p>",
        concepto: "La raíz cuadrada es creciente, lo que permite transportar la desigualdad de inducción. El límite se obtiene de $L=\\sqrt{2L}$.",
        pista: "Para la cota, si $a_k<2$, entonces $2a_k<4$; aplique raíz cuadrada. Para el límite, eleve al cuadrado y factorice.",
        desarrollo: [
          "<b>Paso 1.</b> $a_2=\\sqrt{2}>1=a_1$.",
          "<b>Paso 2.</b> Si $a_{k+1}>a_k>0$, entonces $2a_{k+1}>2a_k$ y, como la raíz es creciente, $a_{k+2}=\\sqrt{2a_{k+1}}>\\sqrt{2a_k}=a_{k+1}$. Por inducción, la sucesión es creciente.",
          "<b>Paso 3.</b> $a_1=1<2$. Si $a_k<2$, entonces $2a_k<4$, luego $a_{k+1}=\\sqrt{2a_k}<\\sqrt4=2$. Por inducción, $a_n<2$ para todo $n$.",
          "<b>Paso 4.</b> Por el teorema de convergencia monótona existe $L=\\lim a_n$, con $1\\le L\\le2$.",
          "<b>Paso 5.</b> $L=\\sqrt{2L}$, luego $L^2=2L$, es decir, $L(L-2)=0$. Las soluciones son $L=0$ y $L=2$. Como $L\\ge1$, se concluye $L=2$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=2$"
      },
      {
        titulo: "Una sucesión que decrece desde el segundo término",
        dificultad: "intermedio",
        enunciado: "<p>Considere $a_n=\\dfrac{n}{2^n}$ para $n\\ge1$. Demuestre que $a_{n+1}\\le\\dfrac34 a_n$ para $n\\ge2$, que la sucesión es decreciente a partir de $n=2$ y acotada inferiormente. Calcule su límite.</p>",
        concepto: "La monotonía eventual también es suficiente para el teorema de convergencia monótona. La cota inferior es inmediata porque todos los términos son positivos.",
        pista: "Calcule $\\frac{a_{n+1}}{a_n}$ y simplifique. Para el límite, use que $2^n\\ge n^2$ para $n\\ge4$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\frac{a_{n+1}}{a_n}=\\frac{(n+1)/2^{n+1}}{n/2^n}=\\frac{n+1}{2n}.$$",
          "<b>Paso 2.</b> Para $n\\ge2$, $\\frac{n+1}{2n}\\le\\frac{3}{4}$ (pues $4n+4\\le6n$ equivale a $n\\ge2$). Por lo tanto $a_{n+1}\\le\\frac34a_n<a_n$ para $n\\ge2$: la sucesión es estrictamente decreciente desde $n=2$.",
          "<b>Paso 3.</b> Todos los términos son positivos, así que $0<a_n$ para todo $n$; la sucesión está acotada inferiormente por $0$.",
          "<b>Paso 4.</b> Por el teorema de convergencia monótona (aplicado desde $n=2$), existe $L=\\lim a_n$ y $L\\ge0$.",
          "<b>Paso 5.</b> Para calcular $L$, usamos la cota $2^n\\ge n^2$ para $n\\ge4$ (se prueba por inducción). Entonces $$0<a_n=\\frac{n}{2^n}\\le\\frac{n}{n^2}=\\frac1n.$$ Por el teorema del sándwich, $a_n\\to0$.",
          "<b>Paso 6.</b> Alternativamente, como $a_{n+1}=\\frac{n+1}{2n}a_n$ y $\\frac{n+1}{2n}\\to\\frac12$, al pasar al límite se obtiene $L=\\frac12L$, de donde $L=0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{2^n}=0$"
      },
      {
        titulo: "El método de Newton para la raíz de 2",
        dificultad: "avanzado",
        enunciado: "<p>Sea $a_1=1$ y $$a_{n+1}=\\frac12\\left(a_n+\\frac{2}{a_n}\\right)$$ para $n\\ge1$. Demuestre que $a_n>0$, que $a_n\\ge\\sqrt2$ para todo $n\\ge2$, que la sucesión es decreciente desde $n=2$ y que converge. Calcule su límite.</p>",
        concepto: "Se usa la desigualdad entre media aritmética y media geométrica para obtener la cota inferior, y la propia cota para probar que la sucesión decrece. Luego se aplica convergencia monótona y se resuelve la ecuación del límite.",
        pista: "Para dos números positivos $x,y$ se cumple $\\frac{x+y}{2}\\ge\\sqrt{xy}$. Aplique esto a $x=a_n$ e $y=\\frac{2}{a_n}$.",
        desarrollo: [
          "<b>Paso 1. Positividad.</b> $a_1=1>0$. Si $a_k>0$, entonces $\\frac{2}{a_k}>0$ y $a_{k+1}=\\frac12\\left(a_k+\\frac{2}{a_k}\\right)>0$. Por inducción, todos los términos son positivos.",
          "<b>Paso 2. Cota inferior.</b> Por la desigualdad media aritmética-media geométrica, para $a_k>0$: $$a_{k+1}=\\frac12\\left(a_k+\\frac{2}{a_k}\\right)\\ge\\sqrt{a_k\\cdot\\frac{2}{a_k}}=\\sqrt2.$$ Así, $a_n\\ge\\sqrt2$ para todo $n\\ge2$ (y $a_1=1<\\sqrt2$).",
          "<b>Paso 3. Decrecimiento desde $n=2$.</b> Para $n\\ge2$, $$a_{n+1}\\le a_n\\iff \\frac12\\left(a_n+\\frac{2}{a_n}\\right)\\le a_n\\iff \\frac{2}{a_n}\\le a_n\\iff a_n^2\\ge2,$$ lo cual es cierto porque $a_n\\ge\\sqrt2$. Por lo tanto $a_{n+1}\\le a_n$ para todo $n\\ge2$.",
          "<b>Paso 4. Convergencia.</b> La sucesión es decreciente desde $n=2$ y está acotada inferiormente por $\\sqrt2$. Por el teorema de convergencia monótona, converge a un límite $L\\ge\\sqrt2$.",
          "<b>Paso 5. Cálculo del límite.</b> Pasando al límite en la recurrencia: $$L=\\frac12\\left(L+\\frac{2}{L}\\right).$$ Multiplicando por $2L$ (donde $L>0$): $2L^2=L^2+2$, es decir, $L^2=2$. Como $L>0$, $L=\\sqrt2$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=\\sqrt2$"
      }
    ],
    erroresComunes: [
      "Creer que toda sucesión acotada converge. La sucesión $(-1)^n$ está acotada pero no converge; falta la monotonía.",
      "Creer que toda sucesión monótona converge. La sucesión $a_n=n$ es creciente pero no está acotada.",
      "Probar la monotonía mirando solo los primeros términos. Hay que demostrarla para todo $n$, normalmente por inducción.",
      "Usar la ecuación $L=f(L)$ antes de demostrar que el límite existe. Esa ecuación calcula el valor, pero no prueba la convergencia.",
      "Al resolver $L=f(L)$ conservar todas las raíces sin verificar si pertenecen al rango de la sucesión, como aceptar $L=-1$ en $L=\\sqrt{2+L}$."
    ],
    checklist: [
      "Sé definir sucesión creciente, decreciente, acotada superior e inferiormente.",
      "Sé explicar qué dice el axioma de completitud y por qué garantiza la existencia del supremo.",
      "Sé enunciar y demostrar el teorema de convergencia monótona en el caso creciente.",
      "Sé probar por inducción que una sucesión recursiva es monótona y que está acotada.",
      "Sé calcular el límite de una recurrencia pasando al límite y descartando soluciones extrañas.",
      "Sé distinguir entre «acotada», «monótona» y «convergente», y reconocer que se necesitan ambas hipótesis."
    ],
    autoevaluacion: [
      { pregunta: "¿Cuál de las siguientes sucesiones es estrictamente creciente?", opciones: ["$a_n=(-1)^n$", "$a_n=\\frac1n$", "$a_n=1-\\frac1n$", "$a_n=\\sin(n)$"], correcta: 2, explicacion: "$1-\\frac{1}{n+1}>1-\\frac1n$ porque $\\frac{1}{n+1}<\\frac1n$. Las otras no son crecientes: $(-1)^n$ y $\\sin n$ oscilan, y $1/n$ decrece." },
      { pregunta: "Una sucesión acotada, ¿converge siempre?", opciones: ["Sí, por el axioma de completitud", "No: $(-1)^n$ está acotada y no converge", "Sí, si todos sus términos son positivos", "No: $1/n$ está acotada y no converge"], correcta: 1, explicacion: "La acotación por sí sola no basta. $(-1)^n$ está acotada pero alterna entre $1$ y $-1$. En cambio $1/n$ sí converge a $0$." },
      { pregunta: "Si $(a_n)$ es creciente y $a_n\\le6$ para todo $n$, ¿qué se puede afirmar?", opciones: ["Converge exactamente a $6$", "Converge a algún $L\\le6$", "Diverge a $+\\infty$", "Necesariamente converge a $0$"], correcta: 1, explicacion: "Por convergencia monótona converge a $L=\\sup\\{a_n\\}$, y como $6$ es una cota superior, $L\\le6$. No es necesario que el límite sea $6$." },
      { pregunta: "Para $a_1=2$ y $a_{n+1}=\\frac12(a_n+6)$, el límite es:", opciones: ["$2$", "$3$", "$6$", "$12$"], correcta: 2, explicacion: "Si $L=\\lim a_n$, entonces $L=\\frac12(L+6)$, de donde $2L=L+6$ y $L=6$." },
      { pregunta: "Para $a_1=\\sqrt2$ y $a_{n+1}=\\sqrt{2+a_n}$, el límite es:", opciones: ["$\\sqrt2$", "$2$", "$4$", "No existe"], correcta: 1, explicacion: "La sucesión es creciente y acotada por $2$. Si $L=\\lim a_n$, entonces $L=\\sqrt{2+L}$, luego $L^2-L-2=0$ y $L=2$ (se descarta $L=-1$)." },
      { pregunta: "En una demostración por inducción de que $a_n<6$ para todo $n$, el paso inductivo correcto es:", opciones: ["Suponer $a_k<6$ y demostrar $a_{k+1}<6$", "Suponer $a_{k+1}<6$ y demostrar $a_k<6$", "Verificar solo $n=1$", "Suponer que $a_n<6$ para todo $n$"], correcta: 0, explicacion: "La hipótesis de inducción es $P(k): a_k<6$; con ella se debe probar $P(k+1): a_{k+1}<6$. Suponer la conclusión sería razonar en círculo." }
    ],
    resumen: [
      "Una sucesión monótona (creciente o decreciente) y acotada siempre converge; el límite es el supremo en el caso creciente y el ínfimo en el decreciente.",
      "El axioma de completitud garantiza que el supremo y el ínfimo existen, y es lo que impide que la sucesión se acerque a un «hueco» de la recta real.",
      "Para una sucesión definida por recurrencia, primero se prueba monotonía y acotación por inducción; después se pasa al límite y se resuelve $L=f(L)$, descartando las soluciones que no corresponden."
    ],
    referencias: [
      { titulo: "Clase 24B — Sucesiones monótonas y acotadas (PDF)", ruta: "recursos/clases/clase-24b.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" },
      { titulo: "Interrogación 7 2024 — MAT1107 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2024-1/i7-mat1107-2024.pdf" },
      { titulo: "Stewart, Precálculo (sucesiones y límites)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
