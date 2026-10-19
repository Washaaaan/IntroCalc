/* Módulo 5 · Sección 8 — Subsucesiones y no existencia de límite */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s08", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 33,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Subsucesiones y no existencia de límite",
    objetivo: "Definir subsucesiones, demostrar que si una sucesión converge entonces todas sus subsucesiones convergen al mismo límite, y usar dos subsucesiones con límites distintos para probar que una sucesión no tiene límite.",
    conexion: "Necesitas recordar la definición épsilon-N de límite y el teorema de convergencia monótona. Ahora miraremos «pedazos» de una sucesión: los términos pares, los impares, los múltiplos de 3, etc. Si la sucesión completa converge, todos esos pedazos deben ir al mismo lugar.",
    fuente: "Apunte 29 · Examen 2024 · Examen 2020 · Guía 10",
    prerrequisitos: ["Definición épsilon-N de límite", "Sucesiones monótonas y acotadas", "Paridad de números naturales", "Teorema del sándwich"],
    teoria: [
      { tipo: "texto", html: "<p>Cuando una sucesión oscila, mirar todos sus términos a la vez puede ocultar lo que está pasando. Una herramienta muy eficaz es quedarse con una <b>parte infinita</b> de la sucesión, respetando el orden: por ejemplo, mirar solo los términos de índice par, o solo los impares, o los que ocupan las posiciones $1,4,9,16,\\dots$. Cada una de esas listas se llama <b>subsucesión</b>. Si dos de esas listas van a lugares distintos, la sucesión completa no puede tener un límite único.</p>" },
      { tipo: "definicion", titulo: "Subsucesión", html: "<p>Sea $(a_n)_{n\\ge1}$ una sucesión. Una <b>subsucesión</b> de $(a_n)$ es una sucesión de la forma</p>$$\\left(a_{m_k}\\right)_{k\\ge1},$$<p>donde $(m_k)_{k\\ge1}$ es una sucesión de números naturales <b>estrictamente creciente</b>:</p>$$1\\le m_1<m_2<m_3<\\cdots$$<p>Los índices $m_k$ eligen qué términos de la sucesión original conservamos, siempre en el mismo orden y sin repetir posiciones. Como $m_1\\ge1$ y la sucesión de índices crece al menos de uno en uno, se cumple $m_k\\ge k$ para todo $k$.</p>" },
      { tipo: "definicion", titulo: "Subsucesiones pares e impares", html: "<p>Las dos subsucesiones más usadas son:</p><ul><li><b>subsucesión par:</b> $m_k=2k$, es decir, $a_2,a_4,a_6,a_8,\\dots$;</li><li><b>subsucesión impar:</b> $m_k=2k-1$, es decir, $a_1,a_3,a_5,a_7,\\dots$</li></ul><p>También son frecuentes las subsucesiones de índices múltiplos de $3$ ($m_k=3k$), las de índices que son cuadrados ($m_k=k^2$) o las de una clase de resto módulo $4$ ($m_k=4k$, $4k+1$, $4k+2$, $4k+3$).</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "aₙ = (−1)ⁿ: los pares van a 1 y los impares a −1", terminos: [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1, -1, 1], label: "aₙ = (−1)ⁿ", ylabel: "aₙ", rangeY: [-1.8, 1.8], height: 340 } },
      { tipo: "teorema", titulo: "Si la sucesión converge, toda subsucesión converge al mismo límite", html: "<p><b>Teorema.</b> Si $\\displaystyle\\lim_{n\\to\\infty}a_n=L$ y $(a_{m_k})_{k\\ge1}$ es una subsucesión de $(a_n)$, entonces</p>$$\\lim_{k\\to\\infty}a_{m_k}=L.$$<p><b>Demostración.</b> Sea $\\varepsilon>0$. Como $a_n\\to L$, existe $N\\in\\N$ tal que para todo $n\\ge N$ se cumple $|a_n-L|<\\varepsilon$. Como la sucesión de índices es estrictamente creciente y parte en $m_1\\ge1$, se tiene $m_k\\ge k$ para todo $k$. Entonces, si $k\\ge N$, también $m_k\\ge k\\ge N$, y por lo tanto $$|a_{m_k}-L|<\\varepsilon.$$ Esto prueba que $a_{m_k}\\to L$. $\\blacksquare$</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> si todos los términos de una sucesión se acercan a $L$, cualquier grupo infinito de ellos que respete el orden también se acerca a $L$. Es como un tren que llega a la estación: no importa si miramos todos los vagones o solo los pares; todos los que miramos llegan al mismo andén. Por eso, si los vagones pares llegan a un andén y los impares a otro, el tren no tiene un destino único.</div>" },
      { tipo: "teorema", titulo: "Criterio para probar que un límite no existe", html: "<p><b>Corolario.</b> Si una sucesión $(a_n)$ tiene dos subsucesiones que convergen a límites distintos, entonces $(a_n)$ <b>no converge</b>.</p><p><b>Demostración.</b> Supongamos que $a_n\\to L$. Por el teorema anterior, toda subsucesión debería converger a $L$. Pero si una subsucesión converge a $L_1$ y otra a $L_2$ con $L_1\\neq L_2$, el límite de la sucesión completa no puede ser simultáneamente $L_1$ y $L_2$. Contradicción. $\\blacksquare$</p><p>También sirve si una subsucesión converge y otra diverge, o si una subsucesión no está acotada: en una sucesión convergente <b>todas</b> las subsucesiones están acotadas y convergen al mismo límite.</p>" },
      { tipo: "teorema", titulo: "El recíproco parcial: pares e impares bastan", html: "<p><b>Proposición.</b> Si la subsucesión par $(a_{2k})$ y la subsucesión impar $(a_{2k-1})$ convergen ambas al mismo número $L$, entonces la sucesión completa $(a_n)$ converge a $L$.</p><p><b>Demostración.</b> Sea $\\varepsilon>0$. Existe $K_1$ tal que $k\\ge K_1$ implica $|a_{2k}-L|<\\varepsilon$, y existe $K_2$ tal que $k\\ge K_2$ implica $|a_{2k-1}-L|<\\varepsilon$. Sea $$N=\\max\\{2K_1,\\,2K_2-1\\}.$$ Si $n\\ge N$ y $n$ es par, entonces $n=2k$ con $k\\ge K_1$; si $n$ es impar, entonces $n=2k-1$ con $k\\ge K_2$. En ambos casos $|a_n-L|<\\varepsilon$. Por lo tanto $a_n\\to L$. $\\blacksquare$</p><p>Esto no contradice el corolario anterior: para concluir que la sucesión converge, las dos subsucesiones deben cubrir <b>todos</b> los índices y tener el <b>mismo</b> límite.</p>" },
      { tipo: "nota", titulo: "Toda sucesión tiene una subsucesión monótona (Apunte 29)", html: "<p>Un resultado clásico, que se demuestra con el argumento de los «picos», afirma que <b>toda sucesión tiene al menos una subsucesión monótona</b>. Si además la sucesión original está acotada, esa subsucesión monótona también está acotada y, por el teorema de convergencia monótona, converge.</p><div class='callout'><b>Bolzano-Weierstrass (para sucesiones).</b> Toda sucesión acotada tiene alguna subsucesión convergente.</div><p>Esto explica por qué una sucesión acotada que no converge, como $(-1)^n$, igual tiene subsucesiones convergentes: los pares convergen a $1$ y los impares a $-1$.</p>" },
      { tipo: "tabla", titulo: "Subsucesiones típicas y sus límites", headers: ["Sucesión", "Subsucesión", "Límite", "Conclusión"], rows: [["$(-1)^n$", "$a_{2k}=1$", "$1$", "No converge (la impar va a $-1$)"], ["$\\frac1n$", "$a_{2k}=\\frac{1}{2k}$", "$0$", "Converge a $0$"], ["$\\frac{2n+(-1)^n}{n}$", "$a_{2k}=2+\\frac1{2k}$", "$2$", "Converge a $2$ (la impar también)"], ["$\\sin\\left(\\frac{n\\pi}{2}\\right)$", "$a_{4k}=0$", "$0$", "No converge (otras van a $1$ y $-1$)"], ["$n^2\\cos(\\pi n)/(n^2+1)$", "$a_{2k}\\to1$", "$1$", "No converge (la impar va a $-1$)"]] },
      { tipo: "nota", titulo: "Una subsucesión no basta", html: "<p>Que <b>una</b> subsucesión converja no dice nada sobre la sucesión completa. Por ejemplo, $a_n=(-1)^n$ tiene la subsucesión par constante igual a $1$, que converge, pero la sucesión no converge. Para probar que <b>sí</b> hay límite hacen falta argumentos que cubran todos los índices, como la proposición de pares e impares o el sándwich. Para probar que <b>no</b> hay límite basta exhibir dos subsucesiones con límites distintos.</p>" }
    ],
    ejemplos: [
      {
        titulo: "La sucesión alternante más simple",
        enunciado: "<p>Demuestre que la sucesión $a_n=(-1)^n$ no converge.</p>",
        concepto: "Se usa el criterio de las dos subsucesiones: si la sucesión convergiera, todas sus subsucesiones tendrían el mismo límite.",
        desarrollo: [
          "<b>Paso 1. Subsucesión par.</b> Para $n=2k$, $$a_{2k}=(-1)^{2k}=1.$$ La subsucesión par es constante igual a $1$, así que $a_{2k}\\to1$.",
          "<b>Paso 2. Subsucesión impar.</b> Para $n=2k-1$, $$a_{2k-1}=(-1)^{2k-1}=-1.$$ La subsucesión impar es constante igual a $-1$, así que $a_{2k-1}\\to-1$.",
          "<b>Paso 3. Comparamos.</b> Los límites $1$ y $-1$ son distintos. Si la sucesión completa tuviera límite $L$, ambas subsucesiones tendrían que converger a $L$, lo que es imposible.",
          "<b>Paso 4. Concluimos.</b> Por el corolario, $(-1)^n$ no converge."
        ],
        respuesta: "La sucesión $(-1)^n$ no converge, pues sus subsucesiones par e impar tienden a $1$ y $-1$, respectivamente.",
        grafico: { tipo: "sucesion", titulo: "Dos destinos distintos: 1 y −1", terminos: [-1, 1, -1, 1, -1, 1, -1, 1, -1, 1], label: "aₙ = (−1)ⁿ", ylabel: "aₙ", rangeY: [-1.8, 1.8], height: 320 }
      },
      {
        titulo: "Un cociente que oscila entre 1 y −1 (Examen 2020-1)",
        enunciado: "<p>Demuestre que la sucesión $$a_n=\\frac{n^2\\cos(\\pi n)}{n^2+1}$$ no tiene límite.</p>",
        concepto: "Se usa que $\\cos(\\pi n)=(-1)^n$ y se calculan las subsucesiones par e impar.",
        desarrollo: [
          "<b>Paso 1. Simplificamos el coseno.</b> Para $n$ entero, $\\cos(\\pi n)=(-1)^n$. Por lo tanto $$a_n=\\frac{(-1)^n n^2}{n^2+1}.$$",
          "<b>Paso 2. Subsucesión par.</b> Con $n=2k$: $$a_{2k}=\\frac{(2k)^2}{(2k)^2+1}=\\frac{4k^2}{4k^2+1}=\\frac{1}{1+\\frac{1}{4k^2}}\\longrightarrow1.$$",
          "<b>Paso 3. Subsucesión impar.</b> Con $n=2k-1$: $$a_{2k-1}=-\\frac{(2k-1)^2}{(2k-1)^2+1}\\longrightarrow-1,$$ pues $\\cos(\\pi(2k-1))=-1$.",
          "<b>Paso 4. Concluimos.</b> Las subsucesiones par e impar tienen límites distintos ($1$ y $-1$). Por lo tanto la sucesión no converge."
        ],
        respuesta: "La sucesión no tiene límite: $a_{2k}\\to1$ y $a_{2k-1}\\to-1$.",
        grafico: { tipo: "sucesion", titulo: "n²cos(πn)/(n²+1): oscila y se acerca a ±1", terminos: [-0.5, 0.8, -0.9, 0.9412, -0.9615, 0.973, -0.9796, 0.9846, -0.9878, 0.9901], label: "aₙ", ylabel: "aₙ", rangeY: [-1.2, 1.2], height: 320 }
      },
      {
        titulo: "Cuatro clases de índices",
        enunciado: "<p>Analice la sucesión $$a_n=\\sin\\left(\\frac{n\\pi}{2}\\right)$$ y demuestre que no converge.</p>",
        concepto: "Se eligen subsucesiones según el resto de $n$ al dividir por $4$. Cada clase produce un valor constante distinto, lo que impide un límite único.",
        desarrollo: [
          "<b>Paso 1. Calculamos los primeros términos.</b> $a_1=1$, $a_2=0$, $a_3=-1$, $a_4=0$, $a_5=1$, $a_6=0$, $a_7=-1$, $a_8=0$. El patrón $1,0,-1,0$ se repite.",
          "<b>Paso 2. Índices múltiplos de 4.</b> Si $n=4k$, $$a_{4k}=\\sin(2\\pi k)=0\\longrightarrow0.$$",
          "<b>Paso 3. Índices $4k+1$.</b> $$a_{4k+1}=\\sin\\left(2\\pi k+\\frac{\\pi}{2}\\right)=1\\longrightarrow1.$$",
          "<b>Paso 4. Índices $4k+3$.</b> $$a_{4k+3}=\\sin\\left(2\\pi k+\\frac{3\\pi}{2}\\right)=-1\\longrightarrow-1.$$",
          "<b>Paso 5. Concluimos.</b> Hay subsucesiones que tienden a $0$, a $1$ y a $-1$. Como no todas tienen el mismo límite, la sucesión no converge."
        ],
        respuesta: "La sucesión no converge: sus subsucesiones $a_{4k}$, $a_{4k+1}$ y $a_{4k+3}$ tienden a $0$, $1$ y $-1$.",
        grafico: { tipo: "sucesion", titulo: "sin(nπ/2): patrón 1, 0, −1, 0", terminos: [1, 0, -1, 0, 1, 0, -1, 0, 1, 0, -1, 0], label: "aₙ = sin(nπ/2)", ylabel: "aₙ", rangeY: [-1.5, 1.5], height: 320 }
      }
    ],
    ejercicios: [
      {
        titulo: "Pares e impares que coinciden",
        dificultad: "basico",
        enunciado: "<p>Considere $a_n=\\dfrac{(-1)^n}{n}$. Calcule los límites de las subsucesiones par e impar y concluya el límite de la sucesión completa.</p>",
        concepto: "Se aplica la proposición que combina pares e impares: si ambas convergen al mismo $L$, la sucesión completa converge a $L$.",
        pista: "Para $n=2k$, $(-1)^{2k}=1$; para $n=2k-1$, $(-1)^{2k-1}=-1$.",
        desarrollo: [
          "<b>Paso 1. Subsucesión par.</b> $$a_{2k}=\\frac{1}{2k}\\longrightarrow0.$$",
          "<b>Paso 2. Subsucesión impar.</b> $$a_{2k-1}=\\frac{-1}{2k-1}\\longrightarrow0.$$",
          "<b>Paso 3. Conclusión.</b> Ambas subsucesiones tienden a $0$. Como todo índice es par o impar, la proposición de pares e impares garantiza que $a_n\\to0$.",
          "<b>Paso 4. Verificación directa.</b> También se puede usar el sándwich: $-\\frac1n\\le\\frac{(-1)^n}{n}\\le\\frac1n$ y ambos extremos tienden a $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{(-1)^n}{n}=0$"
      },
      {
        titulo: "Una oscilación que desaparece",
        dificultad: "basico",
        enunciado: "<p>Calcule $$\\lim_{n\\to\\infty}\\frac{2n+(-1)^n}{n}.$$</p>",
        concepto: "Se separa la fracción y se analizan las subsucesiones par e impar. Ambas deben coincidir para concluir.",
        pista: "Escriba $\\frac{2n+(-1)^n}{n}=2+\\frac{(-1)^n}{n}$.",
        desarrollo: [
          "Simplificamos: $\\frac{2n+(-1)^n}{n}=2+\\frac{(-1)^n}{n}$.",
          "Para $n=2k$: $2+\\frac{1}{2k}\\to2$.",
          "Para $n=2k-1$: $2-\\frac{1}{2k-1}\\to2$.",
          "Ambas subsucesiones tienden a $2$ y cubren todos los índices; por lo tanto la sucesión converge a $2$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{2n+(-1)^n}{n}=2$"
      },
      {
        titulo: "Oscilación con amplitud creciente",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $$a_n=(-1)^n\\frac{2n}{n+1}$$ no tiene límite.</p>",
        concepto: "Se exhiben dos subsucesiones con límites distintos, una positiva y otra negativa.",
        pista: "Calcule $a_{2k}$ y $a_{2k-1}$ por separado.",
        desarrollo: [
          "<b>Paso 1. Subsucesión par.</b> $$a_{2k}=\\frac{2(2k)}{2k+1}=\\frac{4k}{2k+1}\\longrightarrow2.$$",
          "<b>Paso 2. Subsucesión impar.</b> $$a_{2k-1}=-\\frac{2(2k-1)}{2k}=-\\frac{2k-1}{k}\\longrightarrow-2.$$",
          "<b>Paso 3. Conclusión.</b> Los límites $2$ y $-2$ son distintos, así que la sucesión no converge."
        ],
        respuesta: "No existe el límite: $a_{2k}\\to2$ y $a_{2k-1}\\to-2$."
      },
      {
        titulo: "La función seno en cuatro clases",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $a_n=\\sin\\left(\\frac{n\\pi}{2}\\right)$ no converge, identificando tres subsucesiones con límites distintos.</p>",
        concepto: "Las subsucesiones se eligen según el resto de $n$ módulo $4$, porque el seno tiene período $2\\pi$ y se repite cada cuatro enteros.",
        pista: "Evalúe $a_{4k}$, $a_{4k+1}$ y $a_{4k+3}$ usando $\\sin(2\\pi k+\\theta)=\\sin\\theta$.",
        desarrollo: [
          "$a_{4k}=\\sin(2\\pi k)=0$ para todo $k$, luego tiende a $0$.",
          "$a_{4k+1}=\\sin\\left(2\\pi k+\\frac\\pi2\\right)=1$ para todo $k$, luego tiende a $1$.",
          "$a_{4k+3}=\\sin\\left(2\\pi k+\\frac{3\\pi}{2}\\right)=-1$ para todo $k$, luego tiende a $-1$.",
          "Como hay subsucesiones con límites $0$, $1$ y $-1$, la sucesión no puede tener un límite único."
        ],
        respuesta: "No converge: $a_{4k}\\to0$, $a_{4k+1}\\to1$ y $a_{4k+3}\\to-1$."
      },
      {
        titulo: "Pares e impares de una recurrencia (Examen 2024)",
        dificultad: "avanzado",
        enunciado: "<p>Considere la sucesión definida por $$x_1=1,\\qquad x_{n+1}=1+\\frac{1}{x_n}.$$ Demuestre que las subsucesiones $(x_{2k})$ y $(x_{2k-1})$ convergen y que lo hacen al mismo límite. Concluya el límite de $(x_n)$.</p>",
        concepto: "Se estudia la recurrencia de dos pasos $x_{n+2}=2-\\frac{1}{x_n+1}$, se prueba monotonía y acotación de cada subsucesión por inducción, y se resuelve la ecuación del límite.",
        pista: "Calcule $x_2,x_3,x_4$. Luego demuestre $x_{n+2}=2-\\frac{1}{x_n+1}$ y aplique convergencia monótona a $a_k=x_{2k}$ y $b_k=x_{2k-1}$.",
        desarrollo: [
          "<b>Paso 1. Primeros términos.</b> $x_1=1$, $x_2=2$, $x_3=1+\\frac12=\\frac32$, $x_4=1+\\frac23=\\frac53$, $x_5=1+\\frac35=\\frac85$. Los pares parecen decrecer y los impares crecer.",
          "<b>Paso 2. Recurrencia de dos pasos.</b> $$x_{n+2}=1+\\frac{1}{x_{n+1}}=1+\\frac{1}{1+\\frac{1}{x_n}}=1+\\frac{x_n}{x_n+1}=\\frac{2x_n+1}{x_n+1}=2-\\frac{1}{x_n+1}.$$",
          "<b>Paso 3. Subsucesión par.</b> Sea $a_k=x_{2k}$. Entonces $a_1=x_2=2$, $a_2=x_4=\\frac53$ y $$a_{k+1}=2-\\frac{1}{a_k+1}.$$ Probamos por inducción que $1\\le a_{k+1}<a_k\\le2$. Vale para $k=1$: $1\\le\\frac53<2$. Si $1\\le a_{k+1}<a_k\\le2$, entonces $a_{k+1}+1<a_k+1$, luego $\\frac{1}{a_{k+1}+1}>\\frac{1}{a_k+1}$, y al restar de $2$ se invierte: $a_{k+2}<a_{k+1}$. Además $a_{k+2}=2-\\frac{1}{a_{k+1}+1}\\ge2-\\frac12=\\frac32\\ge1$. Así, $(a_k)$ es decreciente y acotada inferiormente por $1$.",
          "<b>Paso 4. Subsucesión impar.</b> Sea $b_k=x_{2k-1}$. Entonces $b_1=x_1=1$, $b_2=x_3=\\frac32$ y $b_{k+1}=2-\\frac{1}{b_k+1}$. De manera análoga se prueba por inducción que $1\\le b_k<b_{k+1}\\le2$: la base es $1<\\frac32$; si $b_k<b_{k+1}$, entonces $\\frac{1}{b_k+1}>\\frac{1}{b_{k+1}+1}$, de donde $b_{k+1}<b_{k+2}$, y además $b_{k+2}=2-\\frac{1}{b_{k+1}+1}<2$. Así, $(b_k)$ es creciente y acotada superiormente por $2$.",
          "<b>Paso 5. Convergencia.</b> Por el teorema de convergencia monótona, existen $$L_a=\\lim_{k\\to\\infty}a_k,\\qquad L_b=\\lim_{k\\to\\infty}b_k,$$ ambos en $[1,2]$.",
          "<b>Paso 6. Mismo límite.</b> Cada límite satisface $L=2-\\frac{1}{L+1}$. Multiplicando por $L+1>0$: $$L(L+1)=2(L+1)-1\\Longrightarrow L^2+L=2L+1\\Longrightarrow L^2-L-1=0.$$ Las raíces son $\\frac{1\\pm\\sqrt5}{2}$. La única en $[1,2]$ es $\\varphi=\\frac{1+\\sqrt5}{2}\\approx1{,}618$. Por lo tanto $L_a=L_b=\\varphi$.",
          "<b>Paso 7. Conclusión para $(x_n)$.</b> Todo índice $n$ es par o impar. Como las subsucesiones par e impar convergen al mismo $\\varphi$, la proposición de pares e impares implica $$\\lim_{n\\to\\infty}x_n=\\varphi=\\frac{1+\\sqrt5}{2}.$$"
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}x_n=\\frac{1+\\sqrt5}{2}$ (el número áureo)."
      }
    ],
    erroresComunes: [
      "Creer que si una subsucesión converge, entonces la sucesión completa converge. La sucesión $(-1)^n$ tiene la subsucesión par constante $1$, pero no converge.",
      "Elegir dos subsucesiones que no cubren todos los índices y concluir que la sucesión converge. Para concluir convergencia con pares e impares hay que usar ambas y verificar que tienen el mismo límite.",
      "Confundir el índice $k$ de la subsucesión con el índice $n$ de la sucesión original; por ejemplo, escribir $a_{2k}\\to L$ y concluir directamente $a_n\\to L$ sin justificar la cobertura de índices.",
      "Olvidar que la sucesión de índices $m_k$ debe ser estrictamente creciente. Una lista desordenada o con índices repetidos no es una subsucesión.",
      "Afirmar que una sucesión no tiene límite solo porque no está acotada. Puede divergir a $+\\infty$ (como $n^2$) o no tener ningún comportamiento límite (como $(-1)^n n$); son situaciones distintas."
    ],
    checklist: [
      "Sé definir una subsucesión y explicar por qué los índices $m_k$ deben ser estrictamente crecientes.",
      "Sé identificar las subsucesiones par, impar y las de índices múltiplos de un número.",
      "Sé demostrar que si $a_n\\to L$, entonces toda subsucesión converge a $L$.",
      "Sé usar dos subsucesiones con límites distintos para probar que un límite no existe.",
      "Sé demostrar que si las subsucesiones par e impar convergen al mismo $L$, entonces la sucesión completa converge a $L$.",
      "Sé analizar una recurrencia de dos pasos estudiando por separado los términos pares e impares."
    ],
    autoevaluacion: [
      { pregunta: "Una subsucesión de $(a_n)$ se define usando índices $m_k$ que son:", opciones: ["Cualquier sucesión de naturales", "Una sucesión estrictamente creciente de naturales", "Los índices pares solamente", "Una sucesión acotada de reales"], correcta: 1, explicacion: "Se exige $m_1<m_2<m_3<\\cdots$ para conservar el orden y no repetir términos. Los índices deben ser naturales." },
      { pregunta: "Si $\\lim_{n\\to\\infty}a_n=L$, entonces la subsucesión $(a_{2k})$:", opciones: ["Puede tener otro límite", "Siempre diverge", "No está definida", "Converge a $L$"], correcta: 3, explicacion: "Toda subsucesión de una sucesión convergente converge al mismo límite $L$." },
      { pregunta: "La sucesión $a_n=(-1)^n$:", opciones: ["Converge a $1$", "Converge a $-1$", "No converge", "Converge a $0$"], correcta: 2, explicacion: "Sus subsucesiones par e impar tienden a $1$ y $-1$ respectivamente. Como esos límites son distintos, la sucesión no converge." },
      { pregunta: "Para $a_n=\\sin\\left(\\frac{n\\pi}{2}\\right)$, la subsucesión $a_{4k+1}$ vale:", opciones: ["$0$", "$1$", "$-1$", "$\\frac12$"], correcta: 1, explicacion: "$a_{4k+1}=\\sin\\left(2\\pi k+\\frac\\pi2\\right)=1$ para todo $k$." },
      { pregunta: "Si dos subsucesiones de $(a_n)$ convergen a límites distintos, entonces:", opciones: ["$(a_n)$ no converge", "$(a_n)$ converge al promedio", "$(a_n)$ converge a uno de los dos límites", "No se puede concluir nada"], correcta: 0, explicacion: "Si la sucesión completa convergiera a $L$, todas sus subsucesiones convergerían a $L$. Dos límites distintos hacen imposible un límite único." },
      { pregunta: "Si $(a_{2k})$ y $(a_{2k-1})$ convergen ambas a $L$, entonces:", opciones: ["$(a_n)$ puede no converger", "$(a_n)$ converge a $2L$", "$(a_n)$ converge a $L$", "Solo los términos pares convergen"], correcta: 2, explicacion: "Los índices pares e impares cubren todos los naturales. Si ambos pedazos van a $L$, la sucesión completa va a $L$." }
    ],
    resumen: [
      "Una subsucesión se obtiene eligiendo infinitos términos de la sucesión original mediante índices estrictamente crecientes $m_1<m_2<\\cdots$.",
      "Si una sucesión converge a $L$, todas sus subsucesiones convergen a $L$; por eso, dos subsucesiones con límites distintos prueban que la sucesión no converge.",
      "El recíproco parcial también es útil: si las subsucesiones par e impar convergen al mismo $L$, entonces la sucesión completa converge a $L$."
    ],
    referencias: [
      { titulo: "Clase 24B — Sucesiones monótonas y acotadas (PDF)", ruta: "recursos/clases/clase-24b.pdf" },
      { titulo: "Apunte Clase 29 — Subsucesiones (PDF)", ruta: "recursos/apuntes/apunte-clase-29.pdf" },
      { titulo: "Examen 2024 — MAT1107 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2024-1/ex-mat1107-2024.pdf" },
      { titulo: "Examen 2020 — MAT1107 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2020-1/examen-mat1107.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" }
    ]
  });
})();
