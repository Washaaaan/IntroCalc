/* Módulo 5 · Sección 6 — Límites infinitos */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s06", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 31,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Límites infinitos",
    objetivo: "Definir y reconocer cuándo una sucesión diverge a +∞ o a −∞, demostrar límites infinitos usando la definición y aplicar las propiedades que combinan límites infinitos con sucesiones acotadas, exponenciales, logaritmos y raíces.",
    conexion: "Necesitas recordar la definición épsilon-N de límite finito y las propiedades algebraicas de los límites. Ahora cambiaremos «acercarse a un número L» por «crecer o decrecer sin ninguna cota», y veremos que muchas reglas se parecen, pero otras dejan de ser válidas.",
    fuente: "Clase 25 · Apunte 28 · Guía 10 · Examen 2020 · Stewart (sucesiones y límites)",
    prerrequisitos: ["Definición épsilon-N de límite", "Sucesiones acotadas", "Exponencial y logaritmo", "Principio de Arquímedes"],
    teoria: [
      { tipo: "texto", html: "<p>Hay sucesiones que no se acercan a ningún número, pero tampoco oscilan: simplemente crecen cada vez más. Pensemos en $a_n=n$, en $a_n=n^2$ o en $a_n=e^n$. Decimos que <b>diverge a $+\\infty$</b>. Otras se vuelven cada vez más negativas, como $b_n=-n$, y decimos que <b>divergen a $-\\infty$</b>. Esta notación describe el comportamiento de la sucesión, pero $+\\infty$ y $-\\infty$ <b>no son números reales</b>: no se puede sumar, restar o multiplicar con ellos como si fueran $7$ o $-3$.</p>" },
      { tipo: "definicion", titulo: "Límite igual a +∞", html: "<p>Sea $(a_n)$ una sucesión. Decimos que $a_n$ <b>tiende a $+\\infty$</b>, y escribimos</p>$$\\lim_{n\\to\\infty}a_n=+\\infty,$$<p>si para todo $M>0$ existe $N\\in\\N$ tal que</p>$$n\\ge N\\quad\\Longrightarrow\\quad a_n>M.$$<p>Es decir, no importa cuán grande fijemos el número $M$: desde cierto índice en adelante, todos los términos de la sucesión superan $M$.</p>" },
      { tipo: "definicion", titulo: "Límite igual a −∞", html: "<p>Decimos que $a_n$ <b>tiende a $-\\infty$</b>, y escribimos</p>$$\\lim_{n\\to\\infty}a_n=-\\infty,$$<p>si para todo $M>0$ existe $N\\in\\N$ tal que</p>$$n\\ge N\\quad\\Longrightarrow\\quad a_n<-M.$$<p>En este caso, desde cierto índice en adelante todos los términos son menores que cualquier número negativo prefijado.</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "aₙ = n: la sucesión crece sin cota", terminos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: "aₙ = n", ylabel: "aₙ", rangeY: [0, 13], height: 340 } },
      { tipo: "nota", titulo: "+∞ y −∞ no son números", html: "<p>Escribir $\\lim a_n=+\\infty$ es una forma abreviada de describir un comportamiento; <b>no</b> significa que el límite sea un número real enorme. En particular:</p><ul><li>una sucesión con límite $+\\infty$ o $-\\infty$ <b>no es convergente</b>;</li><li>$+\\infty$ y $-\\infty$ son comportamientos distintos, no dos extremos de una misma recta numérica;</li><li>expresiones como $\\infty-\\infty$, $0\\cdot\\infty$ o $\\frac{\\infty}{\\infty}$ carecen de sentido y deben analizarse caso a caso.</li></ul>" },
      { tipo: "teorema", titulo: "Primera consecuencia: no acotación", html: "<p><b>Proposición.</b> Si $\\lim_{n\\to\\infty}a_n=+\\infty$, entonces $(a_n)$ no está acotada superiormente.</p><p><b>Demostración.</b> Si estuviera acotada superiormente, existiría $K$ con $a_n\\le K$ para todo $n$. Tomando $M=K+1$ en la definición, existiría $N$ tal que $a_n>K+1$ para todo $n\\ge N$, lo que contradice $a_n\\le K$. $\\blacksquare$</p><p>El <b>recíproco es falso</b>: no estar acotada superiormente no garantiza tender a $+\\infty$. La sucesión $$a_n=n+(-1)^n n$$ toma los valores $0,4,0,8,0,12,\\dots$: no está acotada superiormente, pero tiene infinitos términos iguales a $0$, así que no puede superar a un $M>0$ desde cierto índice en adelante.</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "aₙ = n + (−1)ⁿn: no acotada, pero no tiende a +∞", terminos: [0, 4, 0, 8, 0, 12, 0, 16, 0, 20], label: "aₙ = n + (−1)ⁿn", ylabel: "aₙ", rangeY: [0, 22], height: 340 } },
      { tipo: "teorema", titulo: "Propiedades de los límites infinitos", html: "<p>Sean $(a_n)$ y $(b_n)$ sucesiones. Se cumplen las siguientes propiedades:</p><ol><li>Si $a_n\\to+\\infty$ y $(b_n)$ está acotada inferiormente, entonces $a_n+b_n\\to+\\infty$.</li><li>Si $a_n\\to+\\infty$ y existe $c>0$ tal que $b_n\\ge c$ para todo $n$, entonces $a_nb_n\\to+\\infty$.</li><li>Si $a_n\\ge c>0$, $b_n>0$ para todo $n$ y $b_n\\to0$, entonces $\\dfrac{a_n}{b_n}\\to+\\infty$.</li><li>Si $(a_n)$ está acotada y $b_n\\to+\\infty$, entonces $\\dfrac{a_n}{b_n}\\to0$.</li></ol><p><b>Demostración de (1).</b> Como $(b_n)$ está acotada inferiormente, existe $B$ con $b_n\\ge B$ para todo $n$. Dado $M>0$, por la definición de $a_n\\to+\\infty$ existe $N$ tal que $a_n>M-B$ para todo $n\\ge N$. Entonces $$a_n+b_n\\ge a_n+B>M-B+B=M,$$ así que $a_n+b_n\\to+\\infty$.</p><p><b>Demostración de (2).</b> Dado $M>0$, existe $N$ tal que $a_n>\\frac{M}{c}$ para $n\\ge N$. Entonces $$a_nb_n>\\frac{M}{c}\\cdot c=M,$$ luego $a_nb_n\\to+\\infty$. $\\blacksquare$</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si una sucesión se va a $+\\infty$, sumarle algo que no se hunde a $-\\infty$ no la detiene; multiplicarla por algo que se mantiene por encima de un número positivo la sigue empujando; dividirla por algo positivo que tiende a cero la hace explotar; y dividir algo acotado por algo que se va a $+\\infty$ la hace desaparecer hacia $0$.</div>" },
      { tipo: "teorema", titulo: "Recíproco de una sucesión que tiende a cero", html: "<p><b>Lema.</b> Si $a_n>0$ para todo $n$ y $a_n\\to0$, entonces $\\dfrac{1}{a_n}\\to+\\infty$.</p><p><b>Demostración.</b> Sea $M>0$. Como $a_n\\to0$, para $\\varepsilon=\\frac1M>0$ existe $N$ tal que $0<a_n<\\frac1M$ para todo $n\\ge N$. Invirtiendo (todo es positivo): $$\\frac{1}{a_n}>M.$$ Por lo tanto $\\frac{1}{a_n}\\to+\\infty$. $\\blacksquare$</p><p><b>Cuidado:</b> la positividad es esencial. Si $a_n=\\frac{(-1)^n}{n}\\to0$, entonces $\\frac{1}{a_n}=(-1)^n n$, que no tiende ni a $+\\infty$ ni a $-\\infty$.</p>" },
      { tipo: "teorema", titulo: "Criterio de comparación", html: "<p><b>Lema.</b> Si $a_n\\to+\\infty$ y $b_n\\ge a_n$ para todo $n$ (o desde cierto índice), entonces $b_n\\to+\\infty$.</p><p><b>Demostración.</b> Dado $M>0$, existe $N$ tal que $a_n>M$ para $n\\ge N$. Entonces $b_n\\ge a_n>M$ para $n\\ge N$. $\\blacksquare$</p><p>Este criterio es la herramienta más rápida para demostrar límites infinitos: se busca una sucesión más simple, que sepamos que tiende a $+\\infty$, y que sea menor o igual que la nuestra.</p>" },
      { tipo: "nota", titulo: "Exponenciales, logaritmos y raíces (Clase 25 y Apunte 28)", html: "<p>Estos son los límites infinitos que usaremos con más frecuencia:</p><ul><li><b>Potencia natural:</b> $n\\to+\\infty$ y, más en general, $n^k\\to+\\infty$ para todo $k>0$.</li><li><b>Raíces:</b> $\\sqrt n\\to+\\infty$; dado $M>0$, basta tomar $n\\ge M^2$.</li><li><b>Exponencial:</b> si $x>1$, entonces $x^n\\to+\\infty$. Escribiendo $x=1+h$ con $h>0$, la desigualdad de Bernoulli da $x^n=(1+h)^n\\ge1+nh\\to+\\infty$. En particular $e^n\\to+\\infty$, pues $e>1$.</li><li><b>Logaritmo:</b> $\\ln n\\to+\\infty$. Dado $M>0$, para $n\\ge e^M$ se tiene $\\ln n\\ge M$.</li><li><b>Potencia con exponente variable:</b> $\\sqrt[n]{n}=n^{1/n}\\to1$, que es un límite <b>finito</b>, no infinito.</li></ul>" },
      { tipo: "tabla", titulo: "Jerarquía de crecimiento (para $n$ grande)", headers: ["Sucesión", "Comportamiento"], rows: [["$\\ln n$", "Crece, pero muy lentamente: $\\to+\\infty$"], ["$\\sqrt n$", "$\\to+\\infty$"], ["$n$", "$\\to+\\infty$"], ["$n^2$", "$\\to+\\infty$"], ["$2^n$", "$\\to+\\infty$ mucho más rápido"], ["$n!$", "$\\to+\\infty$ aún más rápido"], ["$1/n$", "$\\to0$"], ["$1/2^n$", "$\\to0$"]] },
      { tipo: "nota", titulo: "Las formas indeterminadas no se resuelven con reglas", html: "<p>Las propiedades anteriores <b>no</b> cubren casos como $+\\infty-\\infty$ o $0\\cdot\\infty$. El resultado depende de cómo crezcan las sucesiones:</p><ul><li>$a_n=n^2$, $b_n=-n$: $a_n+b_n=n^2-n\\to+\\infty$.</li><li>$a_n=n$, $b_n=-n^2$: $a_n+b_n=n-n^2\\to-\\infty$.</li><li>$a_n=n+2$, $b_n=-n$: $a_n+b_n=2\\to2$.</li></ul><p>Por eso nunca se escribe «$\\infty-\\infty=0$»: hay que simplificar la expresión concreta antes de decidir.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Demostración con la definición",
        enunciado: "<p>Demuestre, usando la definición, que $$\\lim_{n\\to\\infty}\\frac{n^2+1}{n}=+\\infty.$$</p>",
        concepto: "Se usa la definición de límite $+\\infty$: dado $M>0$ hay que encontrar un índice $N$ desde el cual todos los términos superen $M$.",
        desarrollo: [
          "<b>Paso 1. Simplificamos el término general.</b> $$\\frac{n^2+1}{n}=n+\\frac1n.$$",
          "<b>Paso 2. Buscamos una cota inferior simple.</b> Como $\\frac1n>0$ para todo $n\\ge1$, se tiene $$\\frac{n^2+1}{n}=n+\\frac1n>n.$$",
          "<b>Paso 3. Dado $M>0$, elegimos $N$.</b> Por el principio de Arquímedes existe $N\\in\\N$ con $N>M$. Si $n\\ge N$, entonces $$\\frac{n^2+1}{n}>n\\ge N>M.$$",
          "<b>Paso 4. Concluimos.</b> Para todo $M>0$ encontramos $N$ tal que $n\\ge N$ implica $\\frac{n^2+1}{n}>M$. Por definición, el límite es $+\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+1}{n}=+\\infty$",
        grafico: { tipo: "sucesion", titulo: "(n²+1)/n = n + 1/n", terminos: [2, 2.5, 3.3333, 4.25, 5.2, 6.1667, 7.1429, 8.125, 9.1111, 10.1], label: "aₙ = (n²+1)/n", ylabel: "aₙ", rangeY: [0, 11], height: 330 }
      },
      {
        titulo: "Una fracción racional que diverge",
        enunciado: "<p>Demuestre que $$\\lim_{n\\to\\infty}\\frac{2n^2}{n+1}=+\\infty.$$</p>",
        concepto: "Se reescribe la fracción como un término lineal más un resto que tiende a cero. El término lineal se encarga de llevar la sucesión a $+\\infty$.",
        desarrollo: [
          "<b>Paso 1. Dividimos.</b> Buscamos escribir $2n^2=(n+1)(2n-2)+2$, pues $(n+1)(2n-2)=2n^2-2$. Entonces $$\\frac{2n^2}{n+1}=2n-2+\\frac{2}{n+1}.$$",
          "<b>Paso 2. Acotamos inferiormente.</b> Como $\\frac{2}{n+1}>0$, $$\\frac{2n^2}{n+1}>2n-2.$$",
          "<b>Paso 3. Dado $M>0$, imponemos $2n-2>M$.</b> Esto equivale a $n>\\frac{M+2}{2}$. Por el principio de Arquímedes existe $N\\in\\N$ con $N>\\frac{M+2}{2}$.",
          "<b>Paso 4. Verificamos.</b> Si $n\\ge N$, entonces $$\\frac{2n^2}{n+1}>2n-2\\ge2N-2>M.$$ Por lo tanto el límite es $+\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{2n^2}{n+1}=+\\infty$"
      },
      {
        titulo: "Logaritmo, exponencial y un límite a $-\\infty$",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\ln\\left(\\frac{3n}{e^{2n}}\\right).$$</p>",
        concepto: "Se usan las propiedades del logaritmo para separar el cociente y la desigualdad fundamental $\\ln n\\le n-1$ para comparar con una expresión que tiende a $-\\infty$.",
        desarrollo: [
          "<b>Paso 1. Simplificamos.</b> Como $e^{2n}>0$, $$\\ln\\left(\\frac{3n}{e^{2n}}\\right)=\\ln(3n)-\\ln(e^{2n})=\\ln3+\\ln n-2n.$$",
          "<b>Paso 2. Usamos la desigualdad $\\ln n\\le n-1$.</b> Entonces $$\\ln3+\\ln n-2n\\le\\ln3+(n-1)-2n=\\ln3-1-n.$$",
          "<b>Paso 3. Analizamos la cota.</b> La expresión $\\ln3-1-n$ tiende a $-\\infty$, porque $-n$ domina a la constante $\\ln3-1\\approx0{,}099$.",
          "<b>Paso 4. Concluimos.</b> Para todo $M>0$, si $n$ es suficientemente grande entonces $\\ln3-1-n<-M$. Por lo tanto el término original también es menor que $-M$ desde cierto índice. Así, el límite es $-\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\ln\\left(\\frac{3n}{e^{2n}}\\right)=-\\infty$"
      }
    ],
    ejercicios: [
      {
        titulo: "Tres límites infinitos directos",
        dificultad: "basico",
        enunciado: "<p>Calcule los siguientes límites, justificando brevemente:</p><p>(a) $\\displaystyle\\lim_{n\\to\\infty}(3n^2+1)$ &nbsp;&nbsp; (b) $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+3}{n+1}$ &nbsp;&nbsp; (c) $\\displaystyle\\lim_{n\\to\\infty}(5-2n)$</p>",
        concepto: "Se identifican el término dominante y el signo. En (b) conviene dividir para separar un término lineal de un resto que tiende a cero.",
        pista: "En (b), escriba $n^2+3=(n+1)(n-1)+4$.",
        desarrollo: [
          "<b>(a)</b> $3n^2+1\\ge3n^2$, y $3n^2\\to+\\infty$. Por comparación, $3n^2+1\\to+\\infty$.",
          "<b>(b)</b> $\\frac{n^2+3}{n+1}=\\frac{(n+1)(n-1)+4}{n+1}=n-1+\\frac{4}{n+1}$. El término $n-1\\to+\\infty$ y el resto es positivo, así que el límite es $+\\infty$.",
          "<b>(c)</b> $5-2n=-2n+5$. Como $n\\to+\\infty$, $-2n\\to-\\infty$; sumar $5$ no cambia el comportamiento. El límite es $-\\infty$."
        ],
        respuesta: "(a) $+\\infty$; (b) $+\\infty$; (c) $-\\infty$."
      },
      {
        titulo: "Demostración por definición",
        dificultad: "basico",
        enunciado: "<p>Demuestre usando la definición que $$\\lim_{n\\to\\infty}(3n+2)=+\\infty.$$</p>",
        concepto: "Hay que exhibir, para cada $M>0$, un índice $N$ tal que todo $n\\ge N$ cumpla $3n+2>M$.",
        pista: "Despeje $n$ en la desigualdad $3n+2>M$.",
        desarrollo: [
          "<b>Paso 1.</b> Sea $M>0$. Queremos $3n+2>M$, equivalente a $n>\\frac{M-2}{3}$.",
          "<b>Paso 2.</b> Por el principio de Arquímedes existe $N\\in\\N$ con $N>\\frac{M-2}{3}$ (si $M\\le2$, cualquier $N\\ge1$ sirve).",
          "<b>Paso 3.</b> Si $n\\ge N$, entonces $3n+2\\ge3N+2>M$.",
          "<b>Paso 4.</b> Por definición, $3n+2\\to+\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}(3n+2)=+\\infty$"
      },
      {
        titulo: "Una suma con seno",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $$\\lim_{n\\to\\infty}(n+\\sin n)=+\\infty.$$</p>",
        concepto: "Se usa el criterio de comparación. El seno está acotado entre $-1$ y $1$, así que no puede impedir que el término lineal se vaya a $+\\infty$.",
        pista: "Use $-1\\le\\sin n\\le1$ para acotar inferiormente $n+\\sin n$.",
        desarrollo: [
          "<b>Paso 1.</b> Para todo $n\\in\\N$, $-1\\le\\sin n\\le1$. Por lo tanto $$n+\\sin n\\ge n-1.$$",
          "<b>Paso 2.</b> La sucesión $n-1\\to+\\infty$: dado $M>0$, si $n\\ge M+1$, entonces $n-1\\ge M$.",
          "<b>Paso 3.</b> Por el criterio de comparación, $n+\\sin n\\to+\\infty$.",
          "<b>Paso 4.</b> Observe que el seno oscila, pero su oscilación está acotada y queda dominada por $n$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}(n+\\sin n)=+\\infty$"
      },
      {
        titulo: "Exponencial versus polinomio",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $2^n\\ge n^2$ para todo $n\\ge4$ y use esa desigualdad para calcular</p>$$\\lim_{n\\to\\infty}\\frac{2^n}{n}\\qquad\\text{y}\\qquad\\lim_{n\\to\\infty}\\frac{n}{2^n}.$$",
        concepto: "Se combina una inducción elemental con el criterio de comparación y el lema del recíproco. La exponencial de base mayor que $1$ crece más rápido que cualquier polinomio.",
        pista: "Para la inducción, en el paso de $k$ a $k+1$ use $2^{k+1}=2\\cdot2^k\\ge2k^2$ y compare $2k^2$ con $(k+1)^2$.",
        desarrollo: [
          "<b>Paso 1. Caso base.</b> Para $n=4$: $2^4=16=4^2$.",
          "<b>Paso 2. Paso inductivo.</b> Supongamos $2^k\\ge k^2$ con $k\\ge4$. Entonces $$2^{k+1}=2\\cdot2^k\\ge2k^2.$$ Además $2k^2-(k+1)^2=k^2-2k-1=(k-1)^2-2>0$ para $k\\ge4$. Por lo tanto $2^{k+1}\\ge(k+1)^2$.",
          "<b>Paso 3.</b> Así, $2^n\\ge n^2$ para todo $n\\ge4$. Dividiendo por $n>0$: $$\\frac{2^n}{n}\\ge n.$$ Como $n\\to+\\infty$, por comparación $\\frac{2^n}{n}\\to+\\infty$.",
          "<b>Paso 4.</b> Como $\\frac{2^n}{n}>0$ y tiende a $+\\infty$, su recíproco satisface $$\\frac{n}{2^n}=\\frac{1}{2^n/n}\\to0.$$"
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{2^n}{n}=+\\infty$ y $\\displaystyle\\lim_{n\\to\\infty}\\frac{n}{2^n}=0$."
      },
      {
        titulo: "Un cociente con parte entera (Examen 2020)",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre, usando la definición, que $$\\lim_{n\\to\\infty}\\frac{\\lfloor n+1\\rfloor^3}{n^2+1}=+\\infty,$$ donde $\\lfloor x\\rfloor$ denota la parte entera de $x$.</p>",
        concepto: "Se usa la desigualdad $\\lfloor x\\rfloor\\ge x-1$ (en particular $\\lfloor n+1\\rfloor\\ge n$) para comparar con una expresión más simple que diverge a $+\\infty$.",
        pista: "Muestre primero que $\\frac{n^3}{n^2+1}\\ge\\frac n2$ para $n\\ge1$.",
        desarrollo: [
          "<b>Paso 1. Acotamos la parte entera.</b> Para todo real $x$, $\\lfloor x\\rfloor\\ge x-1$. Con $x=n+1$: $$\\lfloor n+1\\rfloor\\ge n.$$",
          "<b>Paso 2. Elevamos al cubo.</b> Como $n\\ge1>0$, $$\\lfloor n+1\\rfloor^3\\ge n^3.$$ Por lo tanto $$\\frac{\\lfloor n+1\\rfloor^3}{n^2+1}\\ge\\frac{n^3}{n^2+1}.$$",
          "<b>Paso 3. Comparamos con $n/2$.</b> Para $n\\ge1$: $$\\frac{n^3}{n^2+1}\\ge\\frac n2\\iff2n^3\\ge n^3+n\\iff n^3\\ge n,$$ lo cual es cierto. Así, $$\\frac{\\lfloor n+1\\rfloor^3}{n^2+1}\\ge\\frac n2.$$",
          "<b>Paso 4. Dado $M>0$.</b> Por el principio de Arquímedes existe $N\\in\\N$ con $N>2M$. Si $n\\ge N$, entonces $$\\frac{\\lfloor n+1\\rfloor^3}{n^2+1}\\ge\\frac n2\\ge\\frac N2>M.$$",
          "<b>Paso 5. Concluimos.</b> Por definición, el límite es $+\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{\\lfloor n+1\\rfloor^3}{n^2+1}=+\\infty$"
      }
    ],
    erroresComunes: [
      "Tratar $+\\infty$ o $-\\infty$ como números y escribir cosas como $\\infty-\\infty=0$ o $\\frac{\\infty}{\\infty}=1$.",
      "Confundir «no acotada superiormente» con «tiende a $+\\infty$». La sucesión $n+(-1)^n n$ es un contraejemplo.",
      "Afirmar que si $a_n\\to0$ entonces $\\frac{1}{a_n}\\to+\\infty$ sin exigir que los términos sean positivos; con $a_n=\\frac{(-1)^n}{n}$ el recíproco oscila.",
      "Aplicar una propiedad de producto cuando uno de los factores tiende a $0$ y el otro a $+\\infty$; ese caso es indeterminado.",
      "Olvidar la condición $x>1$ en $x^n\\to+\\infty$. Si $0<x<1$, entonces $x^n\\to0$, y si $x=1$, la sucesión es constante igual a $1$."
    ],
    checklist: [
      "Sé escribir la definición formal de $\\lim a_n=+\\infty$ y de $\\lim a_n=-\\infty$.",
      "Sé demostrar un límite infinito encontrando un $N$ explícito para cada $M>0$.",
      "Sé usar el criterio de comparación con una sucesión más simple que tiende a $+\\infty$.",
      "Sé aplicar las propiedades de suma, producto y cuociente con límites infinitos, distinguiendo las hipótesis.",
      "Sé justificar que $e^n$, $x^n$ con $x>1$, $\\ln n$ y $\\sqrt n$ tienden a $+\\infty$.",
      "Sé reconocer formas indeterminadas y resolverlas simplificando la expresión concreta."
    ],
    autoevaluacion: [
      { pregunta: "La definición de $\\lim_{n\\to\\infty}a_n=+\\infty$ es:", opciones: ["Para todo $\\varepsilon>0$ existe $N$ con $|a_n|<\\varepsilon$", "Para todo $M>0$ existe $N$ con $a_n>M$ para todo $n\\ge N$", "Existe $M>0$ tal que $a_n>M$ para todo $n$", "Para todo $N$ existe $M>0$ con $a_n<M$"], correcta: 1, explicacion: "Se exige superar cualquier cota $M>0$ desde cierto índice $N$ en adelante. La opción (c) solo dice que la sucesión está acotada inferiormente por $M$." },
      { pregunta: "¿Cuál sucesión no está acotada superiormente pero NO tiende a $+\\infty$?", opciones: ["$a_n=n$", "$a_n=n^2$", "$a_n=n+(-1)^n n$", "$a_n=\\sqrt n$"], correcta: 2, explicacion: "La sucesión $n+(-1)^n n$ vale $0$ para $n$ impar, así que no supera todo $M>0$ desde cierto índice, aunque sus términos pares crecen sin cota." },
      { pregunta: "Si $a_n>0$ para todo $n$ y $a_n\\to0$, entonces $\\frac{1}{a_n}$:", opciones: ["Tiende a $+\\infty$", "Tiende a $0$", "Tiende a $1$", "Puede no tener límite"], correcta: 0, explicacion: "Por el lema del recíproco, si los términos son positivos y se acercan a $0$, sus inversos superan cualquier $M>0$." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}e^n$ es:", opciones: ["$0$", "$1$", "$e$", "$+\\infty$"], correcta: 3, explicacion: "Como $e>1$, la sucesión geométrica $e^n$ crece sin cota; por ejemplo, $e^n\\ge1+n\\to+\\infty$." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\ln n}{n}$ es:", opciones: ["$0$", "$1$", "$+\\infty$", "$-\\infty$"], correcta: 0, explicacion: "Para $n\\ge1$ se tiene $\\ln n\\le2\\sqrt n$, así que $0\\le\\frac{\\ln n}{n}\\le\\frac{2}{\\sqrt n}\\to0$. Por el sándwich, el límite es $0$." },
      { pregunta: "Si $a_n\\to+\\infty$ y $b_n\\to-\\infty$, ¿qué se puede afirmar sobre $a_n+b_n$?", opciones: ["Tiende siempre a $+\\infty$", "Tiende siempre a $-\\infty$", "Tiende siempre a $0$", "No se puede determinar sin más información"], correcta: 3, explicacion: "Es una forma indeterminada. Según las velocidades relativas, la suma puede ir a $+\\infty$, a $-\\infty$ o a un número finito." }
    ],
    resumen: [
      "Escribir $\\lim a_n=+\\infty$ significa que para todo $M>0$ los términos superan $M$ desde cierto índice; análogamente, $-\\infty$ significa que quedan por debajo de todo $-M$.",
      "Los límites infinitos no son límites reales: la sucesión no converge, y $+\\infty$ y $-\\infty$ no se operan como números.",
      "Las propiedades de suma, producto y cuociente funcionan bajo hipótesis específicas; los casos $\\infty-\\infty$ y $0\\cdot\\infty$ son indeterminados y requieren simplificar la expresión."
    ],
    referencias: [
      { titulo: "Clase 25 — Límites infinitos (PDF)", ruta: "recursos/clases/clase-25.pdf" },
      { titulo: "Apunte Clase 28 — Divergencia a infinito (PDF)", ruta: "recursos/apuntes/apunte-clase-28.pdf" },
      { titulo: "Examen 2020 — MAT1107 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2020-1/examen-mat1107.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" }
    ]
  });
})();
