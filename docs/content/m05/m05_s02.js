/* Módulo 5 · Sección 2 — Propiedades y operaciones con límites */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s02", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 27,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Propiedades y operaciones con límites",
    objetivo: "Aplicar el álgebra de límites para calcular límites de sumas, productos, cocientes y potencias de sucesiones convergentes, y reconocer cuándo una propiedad no se puede usar porque alguna de las condiciones falla.",
    conexion: "Ya sabes qué significa que $a_n\\to L$ mediante la definición $\\varepsilon$-$N$ y sabes demostrar límites sencillos. Ahora usaremos ese concepto para operar con sucesiones sin volver a hacer una demostración desde cero cada vez.",
    fuente: "Clase 22 · Apunte 26 · Stewart §13.4 · Mickenberg Cap. 10",
    prerrequisitos: ["Definición ε-N de límite", "Sucesiones acotadas", "Álgebra de fracciones", "Propiedades de las potencias"],
    teoria: [
      { tipo: "texto", html: "<p>En la sección anterior demostramos límites «a mano». Eso es necesario para entender la definición, pero sería muy lento si tuviéramos que repetirlo en cada ejercicio. La buena noticia es que los límites se comportan bien con las operaciones habituales: si conocemos el límite de dos sucesiones, podemos conocer el límite de su suma, de su producto y, bajo una condición, de su cociente.</p><p>En esta sección construiremos una <b>caja de herramientas</b>: límites de referencia, álgebra de límites, el teorema del producto de una sucesión nula por una acotada y el teorema del sándwich.</p>" },
      { tipo: "teorema", titulo: "Álgebra de límites", html: "<p>Supongamos que $\\displaystyle\\lim_{n\\to\\infty}a_n=L$ y $\\displaystyle\\lim_{n\\to\\infty}b_n=M$, con $L,M\\in\\R$. Entonces:</p><ol><li>$\\displaystyle\\lim_{n\\to\\infty}(a_n+b_n)=L+M$.</li><li>$\\displaystyle\\lim_{n\\to\\infty}(a_n-b_n)=L-M$.</li><li>$\\displaystyle\\lim_{n\\to\\infty}(a_n\\,b_n)=L\\,M$.</li><li>$\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=\\frac{L}{M}$, siempre que $M\\neq 0$.</li><li>$\\displaystyle\\lim_{n\\to\\infty}(c\\,a_n)=c\\,L$ para cualquier constante $c\\in\\R$.</li><li>$\\displaystyle\\lim_{n\\to\\infty}(a_n)^k=L^k$ para todo $k\\in\\N$.</li></ol><p>Las propiedades 1 y 2 se extienden a cualquier cantidad finita de sumandos.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el límite «entra» en las operaciones: el límite de una suma es la suma de los límites, el límite de un producto es el producto de los límites, y así sucesivamente. Pero hay dos letras chicas importantísimas: <b>ambos límites deben existir</b> y, en el cociente, <b>el límite del denominador no puede ser cero</b>.</div>" },
      { tipo: "nota", titulo: "La letra chica del cociente (Stewart §13.4)", html: "<p>La condición $M\\neq 0$ no es un capricho. Si $b_n\\to 0$, el denominador se hace arbitrariamente pequeño y el cuociente puede crecer, oscilar o depender de la velocidad con que el numerador también se hace pequeño. Ejemplos como $\\frac{1/n}{1/n}=1$ y $\\frac{1/n^2}{1/n}=n$ muestran que «$0/0$» no determina por sí solo un valor. Por eso el álgebra de límites no se puede aplicar directamente en ese caso.</p>" },
      { tipo: "teorema", titulo: "Límites de referencia", html: "<p>Sea $p>0$. Entonces</p>$$\\lim_{n\\to\\infty}\\frac{1}{n^p}=0.$$<p>También valen:</p>$$\\lim_{n\\to\\infty}c=c,\\qquad \\lim_{n\\to\\infty}\\frac{1}{n}=0,\\qquad \\lim_{n\\to\\infty}\\frac{1}{n^2}=0.$$<p><b>Demostración de $1/n^p\\to 0$.</b> Dado $\\varepsilon>0$, queremos $\\frac{1}{n^p}<\\varepsilon$, lo que equivale a $n>\\left(\\frac{1}{\\varepsilon}\\right)^{1/p}$. Por la propiedad arquimediana existe $N\\in\\N$ mayor que ese número. Si $n>N$, la desigualdad se cumple. $\\blacksquare$</p>" },
      { tipo: "teorema", titulo: "Producto de una sucesión nula por una acotada", html: "<p>Si $\\displaystyle\\lim_{n\\to\\infty}a_n=0$ y $\\{b_n\\}$ es una sucesión acotada, entonces</p>$$\\lim_{n\\to\\infty}(a_n\\,b_n)=0.$$<p><b>Demostración.</b> Como $\\{b_n\\}$ está acotada, existe $c>0$ tal que $|b_n|\\le c$ para todo $n$. Dado $\\varepsilon>0$, como $a_n\\to 0$ existe $N$ tal que, si $n>N$, entonces $|a_n|<\\frac{\\varepsilon}{c}$. Luego, para $n>N$,</p>$$|a_nb_n|=|a_n|\\,|b_n|<\\frac{\\varepsilon}{c}\\cdot c=\\varepsilon.$$<p>Por lo tanto, $a_nb_n\\to 0$. $\\blacksquare$</p>" },
      { tipo: "nota", titulo: "Un caso muy útil: seno y coseno", html: "<p>Las sucesiones $b_n=\\sen(n)$ y $c_n=\\cos(n)$ no convergen, pero están acotadas porque $-1\\le \\sen(n)\\le 1$ y $-1\\le\\cos(n)\\le 1$. Por el teorema anterior,</p>$$\\lim_{n\\to\\infty}\\frac{\\sen(n)}{n}=0\\qquad\\text{y}\\qquad \\lim_{n\\to\\infty}\\frac{\\cos(n)}{n}=0.$$<p>Este es un ejemplo donde el álgebra de límites <b>no</b> se puede usar directamente, porque $\\sen(n)$ no tiene límite. La acotación reemplaza esa información.</p>" },
      { tipo: "teorema", titulo: "Teorema del sándwich", html: "<p>Si existe $n_0\\in\\N$ tal que</p>$$a_n\\le b_n\\le c_n\\quad\\text{para todo }n\\ge n_0,$$<p>y además</p>$$\\lim_{n\\to\\infty}a_n=\\lim_{n\\to\\infty}c_n=L,$$<p>entonces $\\displaystyle\\lim_{n\\to\\infty}b_n=L$.</p><p><b>Idea de la demostración.</b> Dado $\\varepsilon>0$, desde cierto índice los extremos $a_n$ y $c_n$ están ambos en $(L-\\varepsilon,L+\\varepsilon)$. Como $b_n$ está entre ellos, también queda dentro de esa franja. $\\blacksquare$</p>" },
      { tipo: "teorema", titulo: "Cocientes de polinomios", html: "<p>Si $P$ y $Q$ son polinomios en $n$ y $Q(n)\\neq 0$ para $n$ grande, para calcular $\\displaystyle\\lim_{n\\to\\infty}\\frac{P(n)}{Q(n)}$ se divide numerador y denominador por la mayor potencia de $n$ que aparece en $Q$. Si $d=\\deg Q$:</p><ul><li>Si $\\deg P<d$, el límite es $0$.</li><li>Si $\\deg P=d$, el límite es el cuociente de los coeficientes principales.</li><li>Si $\\deg P>d$, el cuociente no converge: crece sin cota en valor absoluto.</li></ul>" },
      { tipo: "tabla", titulo: "Resumen de herramientas", headers: ["Herramienta", "Cuándo usarla", "Ejemplo"], rows: [["Álgebra de límites", "Ambos límites existen y el denominador no tiende a 0", "$(a_n+b_n)\\to L+M$"], ["$1/n^p\\to 0$", "Aparecen potencias en el denominador", "$\\frac{3}{n^2}\\to 0$"], ["Nula por acotada", "Un factor tiende a 0 y el otro oscila acotado", "$\\frac{\\sen(n)}{n}\\to 0$"], ["Sándwich", "Se puede encerrar entre dos sucesiones con el mismo límite", "$0\\le\\frac{\\ln n}{n}\\le\\frac{2}{\\sqrt{n}}$"], ["Dividir por la mayor potencia", "Cociente de polinomios", "$\\frac{2n^2+1}{5n^2-n}\\to\\frac25$"]] },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "aₙ = (3n²+2)/(n²+n) se acerca a 3", terminos: [2.5, 2.3333333333, 2.4166666667, 2.5, 2.5666666667, 2.619047619, 2.6607142857, 2.6944444444, 2.7222222222, 2.7454545455, 2.7651515152, 2.7820512821], limite: 3, label: "aₙ = (3n²+2)/(n²+n)", ylabel: "aₙ" } }
    ],
    ejemplos: [
      {
        titulo: "Cociente de polinomios del mismo grado",
        enunciado: "<p>Calcule</p>$$\\lim_{n\\to\\infty}\\frac{2n^2+3n-1}{5n^2-n+4}.$$",
        concepto: "Se divide numerador y denominador por la mayor potencia del denominador, aquí $n^2$, y luego se aplica el álgebra de límites junto con $1/n\\to 0$ y $1/n^2\\to 0$.",
        desarrollo: [
          "<b>Paso 1.</b> Dividimos por $n^2$: $$\\frac{2n^2+3n-1}{5n^2-n+4}=\\frac{2+\\frac{3}{n}-\\frac{1}{n^2}}{5-\\frac{1}{n}+\\frac{4}{n^2}}.$$",
          "<b>Paso 2.</b> Usamos que $\\frac{1}{n}\\to 0$ y $\\frac{1}{n^2}\\to 0$. Por el álgebra de límites, el numerador tiende a $2+0-0=2$ y el denominador tiende a $5-0+0=5$.",
          "<b>Paso 3.</b> Como el límite del denominador es $5\\neq 0$, podemos aplicar la propiedad del cociente: $$\\lim_{n\\to\\infty}\\frac{2n^2+3n-1}{5n^2-n+4}=\\frac{2}{5}.$$"
        ],
        respuesta: "$\\displaystyle\\frac{2}{5}$.",
        grafico: { tipo: "sucesion", titulo: "El cuociente se estabiliza en 0,4", terminos: [0.5, 0.5909090909, 0.5652173913, 0.5375, 0.5161290323, 0.5, 0.4876033058, 0.4778481013, 0.47, 0.463562753], limite: 0.4, label: "aₙ = (2n²+3n−1)/(5n²−n+4)", ylabel: "aₙ" }
      },
      {
        titulo: "El grado del denominador es mayor",
        enunciado: "<p>Calcule</p>$$\\lim_{n\\to\\infty}\\frac{n^3+2n^2-4}{n^4+2}.$$",
        concepto: "Al dividir por la mayor potencia del denominador, $n^4$, todos los términos del numerador tienden a 0 y el denominador tiende a 1. El grado menor en el numerador anticipa límite 0.",
        desarrollo: [
          "<b>Paso 1.</b> Dividimos por $n^4$: $$\\frac{n^3+2n^2-4}{n^4+2}=\\frac{\\frac{1}{n}+\\frac{2}{n^2}-\\frac{4}{n^4}}{1+\\frac{2}{n^4}}.$$",
          "<b>Paso 2.</b> Cada término con potencia de $n$ en el denominador tiende a 0: el numerador tiende a $0$ y el denominador tiende a $1$.",
          "<b>Paso 3.</b> Aplicando la propiedad del cociente, el límite es $\\frac{0}{1}=0$."
        ],
        respuesta: "$\\displaystyle 0$."
      },
      {
        titulo: "Una oscilación acotada dividida por n",
        enunciado: "<p>Calcule, si existe,</p>$$\\lim_{n\\to\\infty}\\frac{\\sen(n)}{n}.$$",
        concepto: "No se puede usar el álgebra de límites porque $\\sen(n)$ no converge. Se usa el teorema de producto de una sucesión nula por una acotada.",
        desarrollo: [
          "<b>Paso 1.</b> Sabemos que $-1\\le\\sen(n)\\le 1$ para todo $n$, así que $\\{\\sen(n)\\}$ está acotada.",
          "<b>Paso 2.</b> La sucesión $a_n=\\frac{1}{n}$ tiende a $0$.",
          "<b>Paso 3.</b> Escribimos $\\frac{\\sen(n)}{n}=\\frac{1}{n}\\cdot\\sen(n)$. Es el producto de una sucesión que tiende a $0$ por una sucesión acotada.",
          "<b>Paso 4.</b> Por el teorema, el producto tiende a $0$: $$\\lim_{n\\to\\infty}\\frac{\\sen(n)}{n}=0.$$"
        ],
        respuesta: "$\\displaystyle 0$.",
        grafico: { tipo: "sucesion", titulo: "sen(n)/n se aplasta hacia 0", terminos: [0.8414709848, 0.4546487134, 0.0470400027, -0.1892006238, -0.1917848549, -0.0465692497, 0.0938552284, 0.1236697808, 0.0457909371, -0.0544021111, -0.0907413556, -0.0443398725], limite: 0, label: "aₙ = sen(n)/n", ylabel: "aₙ" }
      }
    ],
    ejercicios: [
      {
        titulo: "Cociente lineal",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{3n-2}{n+5}$.</p>",
        concepto: "Dividir por la mayor potencia del denominador y aplicar álgebra de límites.",
        pista: "Divide numerador y denominador por $n$.",
        desarrollo: [
          "<b>Paso 1.</b> $\\frac{3n-2}{n+5}=\\frac{3-\\frac{2}{n}}{1+\\frac{5}{n}}$.",
          "<b>Paso 2.</b> Como $\\frac{1}{n}\\to 0$, el numerador tiende a $3$ y el denominador a $1$.",
          "<b>Paso 3.</b> Por la propiedad del cociente, el límite es $\\frac{3}{1}=3$."
        ],
        respuesta: "$3$."
      },
      {
        titulo: "Mismo grado",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+1}{2n^2+n}$.</p>",
        concepto: "Cociente de polinomios del mismo grado: el límite es el cuociente de los coeficientes principales.",
        pista: "Divide por $n^2$.",
        desarrollo: [
          "<b>Paso 1.</b> $\\frac{n^2+1}{2n^2+n}=\\frac{1+\\frac{1}{n^2}}{2+\\frac{1}{n}}$.",
          "<b>Paso 2.</b> El numerador tiende a $1$ y el denominador a $2$.",
          "<b>Paso 3.</b> Por lo tanto, el límite es $\\frac{1}{2}$."
        ],
        respuesta: "$\\displaystyle\\frac{1}{2}$."
      },
      {
        titulo: "Grado cúbico",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{2n^3-n+1}{4n^3+3n^2}$.</p>",
        concepto: "División por $n^3$ y uso de que las potencias negativas de $n$ tienden a cero.",
        pista: "Después de dividir por $n^3$, quedan términos con $1/n$, $1/n^2$ y $1/n^3$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\frac{2n^3-n+1}{4n^3+3n^2}=\\frac{2-\\frac{1}{n^2}+\\frac{1}{n^3}}{4+\\frac{3}{n}}.$$",
          "<b>Paso 2.</b> El numerador tiende a $2$ y el denominador a $4$.",
          "<b>Paso 3.</b> El límite es $\\frac{2}{4}=\\frac{1}{2}$."
        ],
        respuesta: "$\\displaystyle\\frac{1}{2}$."
      },
      {
        titulo: "Suma de dos cocientes",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{n+1}{n+2}+\\frac{n+2}{n+1}\\right)$.</p>",
        concepto: "Cada sumando converge; se aplica la propiedad del límite de una suma.",
        pista: "Calcula por separado el límite de cada fracción.",
        desarrollo: [
          "<b>Paso 1.</b> $\\frac{n+1}{n+2}=\\frac{1+\\frac{1}{n}}{1+\\frac{2}{n}}\\to 1$.",
          "<b>Paso 2.</b> $\\frac{n+2}{n+1}=\\frac{1+\\frac{2}{n}}{1+\\frac{1}{n}}\\to 1$.",
          "<b>Paso 3.</b> Por la propiedad de la suma, el límite es $1+1=2$."
        ],
        respuesta: "$2$."
      },
      {
        titulo: "Oscilación que desaparece",
        dificultad: "avanzado",
        enunciado: "<p>Calcule $\\displaystyle\\lim_{n\\to\\infty}\\frac{n+(-1)^n}{2n+1}$.</p>",
        concepto: "Se divide por $n$ y se usa que $\\frac{(-1)^n}{n}\\to 0$ por el teorema de nula por acotada.",
        pista: "Divide numerador y denominador por $n$. El término $\\frac{(-1)^n}{n}$ es producto de $1/n$ por una sucesión acotada.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\frac{n+(-1)^n}{2n+1}=\\frac{1+\\frac{(-1)^n}{n}}{2+\\frac{1}{n}}.$$",
          "<b>Paso 2.</b> La sucesión $(-1)^n$ está acotada y $\\frac{1}{n}\\to 0$, así que $\\frac{(-1)^n}{n}\\to 0$.",
          "<b>Paso 3.</b> Entonces el numerador tiende a $1+0=1$ y el denominador a $2+0=2$. El límite es $\\frac{1}{2}$."
        ],
        respuesta: "$\\displaystyle\\frac{1}{2}$.",
        grafico: { tipo: "sucesion", titulo: "La oscilación se atenúa y el límite es 1/2", terminos: [0, 0.6, 0.2857142857, 0.5555555556, 0.3636363636, 0.5384615385, 0.4, 0.5294117647, 0.4210526316, 0.5238095238], limite: 0.5, label: "aₙ = (n+(−1)ⁿ)/(2n+1)", ylabel: "aₙ" }
      }
    ],
    erroresComunes: [
      "Aplicar la propiedad del cociente cuando el denominador tiende a $0$. En ese caso la regla no informa nada y hay que analizar la expresión.",
      "Escribir «$\\infty/\\infty=1$» o «$\\infty-\\infty=0$». Esas expresiones no son números y no se operan como si lo fueran.",
      "Repartir el límite en una suma donde uno de los sumandos no converge. Por ejemplo, $n+(-n)$ no se resuelve diciendo que $\\infty-\\infty=0$.",
      "Olvidar que el teorema de nula por acotada exige que el factor acotado lo sea para <b>todo</b> $n$ (o desde algún $n$ en adelante).",
      "Concluir que un producto de sucesiones divergentes diverge. Contraejemplo: $n\\cdot\\frac{1}{n}=1$."
    ],
    checklist: [
      "Puedo enunciar las propiedades del álgebra de límites y sus condiciones.",
      "Sé calcular límites de cocientes de polinomios dividiendo por la potencia adecuada.",
      "Reconozco cuándo conviene usar el teorema de nula por acotada en lugar del álgebra de límites.",
      "Sé aplicar el teorema del sándwich cuando una sucesión queda entre otras dos.",
      "Puedo explicar por qué $\\frac{\\sen(n)}{n}\\to 0$ aunque $\\sen(n)$ no converja.",
      "Detecto cuándo una propiedad no se puede aplicar porque el denominador tiende a cero."
    ],
    autoevaluacion: [
      { pregunta: "Si $a_n\\to 3$ y $b_n\\to -2$, entonces $\\lim(a_nb_n)$ es:", opciones: [ "$-6$", "$6$", "$1$", "No existe" ], correcta: 0, explicacion: "Por la propiedad del producto, el límite es $3\\cdot(-2)=-6$." },
      { pregunta: "¿Cuál es $\\displaystyle\\lim_{n\\to\\infty}\\frac{4n^2+3}{2n^2-n}$?", opciones: [ "$0$", "$2$", "$4$", "No existe" ], correcta: 1, explicacion: "Dividiendo por $n^2$ queda $\\frac{4+3/n^2}{2-1/n}\\to\\frac42=2$." },
      { pregunta: "¿Por qué no se puede aplicar directamente la propiedad del cociente a $\\frac{1/n}{1/n^2}$?", opciones: [ "Porque el numerador no converge.", "Porque $n$ no es natural.", "Porque el límite es infinito.", "Porque el denominador tiende a 0 y la propiedad exige límite no nulo." ], correcta: 3, explicacion: "El denominador $1/n^2\\to 0$; la regla del cociente requiere que el límite del denominador sea distinto de cero." },
      { pregunta: "El valor de $\\displaystyle\\lim_{n\\to\\infty}\\frac{\\cos(n)}{n}$ es:", opciones: [ "No existe, porque $\\cos(n)$ oscila.", "$1$", "$0$", "$-1$" ], correcta: 2, explicacion: "$\\cos(n)$ está acotado entre $-1$ y $1$, y $1/n\\to 0$. Por el teorema de nula por acotada, el producto tiende a 0." },
      { pregunta: "Si $0\\le b_n\\le \\frac{1}{n}$ para todo $n$, entonces:", opciones: [ "$b_n\\to 0$.", "$b_n$ diverge.", "$b_n\\to 1$.", "No se puede determinar nada." ], correcta: 0, explicacion: "Los extremos $0$ y $1/n$ tienden a 0; por el teorema del sándwich, $b_n\\to 0$." },
      { pregunta: "¿Cuál de estas afirmaciones es correcta?", opciones: [ "El límite de una suma siempre es la suma de los límites, aunque alguno no exista.", "Toda sucesión acotada converge.", "El límite de un producto es el producto de los límites si ambos límites existen.", "El límite de un cociente siempre es el cuociente de los límites." ], correcta: 2, explicacion: "La propiedad del producto requiere que ambos límites existan; las otras afirmaciones fallan si no se cumplen sus condiciones." }
    ],
    resumen: [
      "Si dos sucesiones convergen, sus sumas, diferencias, productos y potencias convergen a las operaciones correspondientes de los límites; el cociente requiere denominador con límite no nulo.",
      "Los límites de referencia $1/n^p\\to 0$ y el teorema de nula por acotada permiten resolver oscilaciones y cocientes sin volver a la definición.",
      "El teorema del sándwich cierra el paso cuando una sucesión queda atrapada entre dos sucesiones que comparten el mismo límite."
    ],
    referencias: [
      { titulo: "Clase 22 — Operaciones con límites (PDF)", ruta: "recursos/clases/clase-22.pdf" },
      { titulo: "Apunte Clase 26 (PDF)", ruta: "recursos/apuntes/apunte-clase-26.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" },
      { titulo: "Precálculo de Stewart (PDF)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
