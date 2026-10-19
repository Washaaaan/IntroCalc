/* Módulo 3 · Sección 2 — División de polinomios, teorema del resto y del factor */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m03_s02", modulo: 3, moduloNombre: "Módulo 3 · Polinomios, racionales, exponenciales y logaritmos", orden: 14,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "División de polinomios, teorema del resto y del factor",
    objetivo: "Dividir polinomios con el algoritmo de la división larga y con la regla de Ruffini, y usar los teoremas del resto y del factor para verificar restos y factorizar polinomios.",
    conexion: "En la sección anterior vimos que una raíz $c$ produce un factor $(x-c)$. Ahora aprendemos a hacer esa división de manera ordenada y a usar el resto para decidir si un binomio es factor.",
    fuente: "Clase 11 · I1 2025 e I1 2026 · Mickenberg Cap. 7 · Stewart §3.3 y §3.4",
    prerrequisitos: ["Operaciones con polinomios", "Factorización", "Grado de un polinomio", "Teorema del factor"],
    teoria: [
      { tipo: "texto", html: "<p>Dividir polinomios es el análogo de la división de números enteros. Cuando dividimos $17$ por $5$ obtenemos cociente $3$ y resto $2$, porque $17=5\\cdot3+2$. Con polinomios ocurre exactamente lo mismo, pero el papel del resto lo juega un polinomio de grado menor que el divisor. Esta herramienta permite bajar el grado de un polinomio y factorizarlo paso a paso.</p>" },
      { tipo: "definicion", titulo: "Algoritmo de la división", html: "<p>Si $P(x)$ y $D(x)$ son polinomios con $D(x)\\neq0$, existen polinomios únicos $Q(x)$ y $R(x)$ tales que</p>$$P(x)=D(x)\\,Q(x)+R(x),$$<p>donde $R(x)=0$ o bien $\\operatorname{grado}(R)<\\operatorname{grado}(D)$. A $P$ se le llama <b>dividendo</b>, a $D$ <b>divisor</b>, a $Q$ <b>cociente</b> y a $R$ <b>resto</b>. Si $R(x)=0$, decimos que la división es exacta y que $D$ es un factor de $P$.</p>" },
      { tipo: "texto", html: "<p><b>División larga, paso a paso.</b> Ordenamos ambos polinomios de mayor a menor grado y completamos con coeficientes $0$ los términos que faltan. Luego repetimos el ciclo:</p><ol><li>Dividimos el término principal del dividendo por el término principal del divisor; ese es el siguiente término del cociente.</li><li>Multiplicamos ese término por todo el divisor.</li><li>Restamos el resultado del dividendo (cambiando todos los signos).</li><li>Repetimos con el nuevo polinomio hasta que el grado del resto sea menor que el grado del divisor.</li></ol>" },
      { tipo: "definicion", titulo: "Regla de Ruffini", html: "<p>La <b>regla de Ruffini</b> es una forma abreviada de dividir por un divisor de la forma $x-c$. Se escriben ordenados los coeficientes del dividendo (incluyendo ceros para las potencias que faltan), se baja el primero y se multiplica por $c$; el resultado se suma al siguiente coeficiente, y así sucesivamente. El último número es el resto y los anteriores son los coeficientes del cociente, cuyo grado es uno menos que el del dividendo.</p><p>Si el divisor es $ax-b$, escribimos $ax-b=a\\left(x-\\tfrac{b}{a}\\right)$ y usamos $c=\\tfrac{b}{a}$. Ruffini entrega el cociente $Q_R$ de dividir por $x-\\tfrac{b}{a}$, de modo que</p>$$P(x)=\\left(x-\\tfrac{b}{a}\\right)Q_R(x)+R=\\left(ax-b\\right)\\frac{Q_R(x)}{a}+R.$$<p>Por eso, para obtener el cociente de la división por $ax-b$ hay que dividir por $a$ el cociente que entrega Ruffini. El resto, en cambio, es directamente $P\\left(\\tfrac{b}{a}\\right)$.</p>" },
      { tipo: "teorema", titulo: "Teorema del resto", html: "<p>El resto de dividir $P(x)$ por $x-c$ es exactamente $P(c)$:</p>$$P(x)=(x-c)Q(x)+P(c).$$<p>Por eso, para calcular un resto no siempre hace falta dividir: basta evaluar el polinomio en $c$. Si el divisor es $ax-b$, el resto es $P\\left(\\tfrac{b}{a}\\right)$.</p>" },
      { tipo: "teorema", titulo: "Teorema del factor", html: "<p>$x-c$ es un factor de $P(x)$ si y solo si $P(c)=0$. Equivalentemente, $c$ es una raíz de $P$ si y solo si la división de $P$ por $x-c$ es exacta. Para un divisor $ax-b$, la condición es $P\\left(\\tfrac{b}{a}\\right)=0$.</p>" },
      { tipo: "nota", titulo: "Cómo aparece en la I1 (2026)", html: "<p>En la Interrogación 1 de 2026 se pide dividir $P(x)=4x^6+2x^5-2x^4-4x^3+3x-1$ por $2x-1$. Allí conviene usar Ruffini con $c=\\tfrac12$: los coeficientes son $4,2,-2,-4,0,3,-1$ (¡hay que incluir el $0$ del término $x^2$!). Ruffini entrega el cociente de dividir por $x-\\tfrac12$, que es $4x^5+4x^4-4x^2-2x+2$; como $2x-1=2\\left(x-\\tfrac12\\right)$, el cociente pedido es la mitad: $2x^5+2x^4-2x^2-x+1$. El resto es $0$. Luego el teorema del resto confirma el resultado evaluando $P\\left(\\tfrac12\\right)$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> dividir es repartir el polinomio en una parte que cabe exactamente (el cociente) y una sobra (el resto). El teorema del resto dice que esa sobra se puede calcular evaluando; el teorema del factor dice que si la sobra es cero, entonces el divisor era un factor.</div>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "P(x) = x³ − 2x² − 5x + 6 = (x − 1)(x − 3)(x + 2)", funciones: [ { f: function (x) { return x * x * x - 2 * x * x - 5 * x + 6; }, desde: -3, hasta: 4, label: "P(x)", color: "#1e5eff" } ], series: [ { x: [-2, 1, 3], y: [0, 0, 0], label: "raíces", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "P(x)", rangeX: [-3.2, 4.2], rangeY: [-8, 10] } },
      { tipo: "nota", titulo: "Lectura en Stewart y Mickenberg", html: "<p>Stewart §3.3 presenta la división larga y la división sintética; §3.4 conecta estos cálculos con los ceros reales de un polinomio. Mickenberg Cap. 7 insiste en ordenar y completar los coeficientes antes de dividir, porque el error más frecuente es olvidar las potencias que no aparecen. En la clase 11 se enfatiza la misma idea: la división es la herramienta que permite bajar el grado y seguir factorizando.</p>" }
    ],
    ejemplos: [
      {
        titulo: "División larga paso a paso",
        enunciado: "<p>Divida $P(x)=2x^3-3x^2+4x-5$ por $D(x)=x^2-2x+1$ e indique el cociente y el resto.</p>",
        concepto: "Aplicamos el algoritmo de la división: en cada vuelta dividimos los términos principales, multiplicamos el divisor por el término obtenido y restamos.",
        desarrollo: [
          "<b>Paso 1. Primer término del cociente.</b> Dividimos $2x^3$ por $x^2$: $$\\frac{2x^3}{x^2}=2x.$$ Multiplicamos el divisor por $2x$: $$2x(x^2-2x+1)=2x^3-4x^2+2x.$$",
          "<b>Paso 2. Restar.</b> $$(2x^3-3x^2+4x-5)-(2x^3-4x^2+2x)=x^2+2x-5.$$",
          "<b>Paso 3. Segundo término del cociente.</b> Dividimos $x^2$ por $x^2$: $$\\frac{x^2}{x^2}=1.$$ Multiplicamos: $1\\cdot(x^2-2x+1)=x^2-2x+1$.",
          "<b>Paso 4. Restar de nuevo.</b> $$(x^2+2x-5)-(x^2-2x+1)=4x-6.$$",
          "<b>Paso 5. Detenerse.</b> El resto $4x-6$ tiene grado $1$, menor que el grado $2$ del divisor. Por lo tanto, ya no se puede seguir.",
          "<b>Verificación.</b> $$(x^2-2x+1)(2x+1)+(4x-6)=2x^3-3x^2+4x-5.$$"
        ],
        respuesta: "Cociente $Q(x)=2x+1$; resto $R(x)=4x-6$."
      },
      {
        titulo: "Regla de Ruffini con divisor x − 2",
        enunciado: "<p>Divida $P(x)=2x^4-3x^3-8x^2+7x-2$ por $x-2$ usando la regla de Ruffini. Verifique el resto con el teorema del resto.</p>",
        concepto: "Ruffini es la versión abreviada de la división por $x-c$. Aquí $c=2$, y el último número de la tabla es el resto.",
        desarrollo: [
          "<b>Paso 1. Coeficientes ordenados.</b> Todos los términos están presentes: $2,-3,-8,7,-2$. Escribimos $c=2$ a la izquierda.",
          "<b>Paso 2. Bajar el primer coeficiente.</b> Bajamos $2$.",
          "<b>Paso 3. Multiplicar y sumar.</b> $2\\cdot2=4$; $-3+4=1$. Luego $1\\cdot2=2$; $-8+2=-6$. Luego $-6\\cdot2=-12$; $7-12=-5$. Finalmente $-5\\cdot2=-10$; $-2-10=-12$.",
          "<b>Paso 4. Leer el resultado.</b> Los números $2,1,-6,-5$ son los coeficientes del cociente, que tiene grado $3$: $$Q(x)=2x^3+x^2-6x-5.$$ El último número, $-12$, es el resto.",
          "<b>Paso 5. Verificar con el teorema del resto.</b> $$P(2)=2(16)-3(8)-8(4)+7(2)-2=32-24-32+14-2=-12.$$ Coincide con el resto de Ruffini."
        ],
        respuesta: "Cociente $Q(x)=2x^3+x^2-6x-5$; resto $R=-12$.",
        grafico: { tipo: "plot2d", titulo: "El resto no es cero: x = 2 no es raíz", funciones: [ { f: function (x) { return 2 * x * x * x * x - 3 * x * x * x - 8 * x * x + 7 * x - 2; }, desde: -2.2, hasta: 3.4, label: "P(x)", color: "#8e44ad" } ], series: [ { x: [2], y: [-12], label: "P(2) = −12", mode: "markers", color: "#e17055" } ], xlabel: "x", ylabel: "P(x)", rangeX: [-2.5, 3.7], rangeY: [-20, 15] }
      },
      {
        titulo: "Ejemplo completo tipo I1: división, resto y factorización",
        enunciado: "<p>Considere $P(x)=x^5-x^4-2x^3-x^2+x+2$. (a) Divida por $x-2$ e indique cociente y resto. (b) Verifique el resto con el teorema del resto. (c) Use el teorema del factor para decidir si $x+1$ es factor. (d) Factorice completamente $P(x)$.</p>",
        concepto: "Este es el esquema típico de una pregunta de I1: división para bajar el grado, teorema del resto para verificar, teorema del factor para detectar raíces y factorización sucesiva.",
        desarrollo: [
          "<b>(a) Ruffini con $c=2$.</b> Coeficientes: $1,-1,-2,-1,1,2$. Bajamos $1$; $1\\cdot2=2$ y $-1+2=1$; $1\\cdot2=2$ y $-2+2=0$; $0\\cdot2=0$ y $-1+0=-1$; $-1\\cdot2=-2$ y $1-2=-1$; $-1\\cdot2=-2$ y $2-2=0$. El cociente es $$Q(x)=x^4+x^3-x-1$$ y el resto es $0$.",
          "<b>(b) Teorema del resto.</b> $$P(2)=2^5-2^4-2\\cdot2^3-2^2+2+2=32-16-16-4+2+2=0.$$ Coincide con el resto obtenido.",
          "<b>(c) Teorema del factor con $x+1$.</b> Evaluamos en $c=-1$: $$P(-1)=(-1)^5-(-1)^4-2(-1)^3-(-1)^2+(-1)+2=-1-1+2-1-1+2=0.$$ Como $P(-1)=0$, el binomio $x+1$ sí es factor de $P$.",
          "<b>(d) Dividir por el producto de los factores conocidos.</b> Como $x-2$ y $x+1$ son factores, su producto $(x-2)(x+1)=x^2-x-2$ también lo es. Dividimos $P$ por $x^2-x-2$ y obtenemos $x^3-1$ (los términos cúbicos y cuadráticos se cancelan y queda una división exacta).",
          "<b>(d) Seguir factorizando.</b> Usamos la diferencia de cubos: $$x^3-1=(x-1)(x^2+x+1).$$ El factor cuadrático no tiene raíces reales, porque su discriminante es $1-4=-3<0$.",
          "<b>Factorización final.</b> $$P(x)=(x-2)(x+1)(x-1)(x^2+x+1).$$"
        ],
        respuesta: "$P(x)=(x-2)(x+1)(x-1)(x^2+x+1)$; el cociente de la primera división es $x^4+x^3-x-1$ y el resto es $0$."
      }
    ],
    ejercicios: [
      {
        titulo: "Ruffini directo",
        dificultad: "basico",
        enunciado: "<p>Divida $P(x)=x^3-2x^2+3x-4$ por $x-2$ usando Ruffini e indique cociente y resto.</p>",
        concepto: "Regla de Ruffini con $c=2$ y coeficientes completos.",
        pista: "Escriba los coeficientes $1,-2,3,-4$ y vaya multiplicando por $2$.",
        desarrollo: [
          "Bajamos $1$. Luego $1\\cdot2=2$ y $-2+2=0$.",
          "Luego $0\\cdot2=0$ y $3+0=3$.",
          "Luego $3\\cdot2=6$ y $-4+6=2$.",
          "El cociente es $x^2+0x+3=x^2+3$ y el resto es $2$.",
          "Verificación: $(x-2)(x^2+3)+2=x^3-2x^2+3x-6+2=x^3-2x^2+3x-4$."
        ],
        respuesta: "Cociente $x^2+3$; resto $2$."
      },
      {
        titulo: "Teorema del resto",
        dificultad: "basico",
        enunciado: "<p>Sin hacer la división, determine el resto de dividir $P(x)=x^3-4x^2+2x+1$ por $x+1$.</p>",
        concepto: "Teorema del resto: el resto de dividir por $x-c$ es $P(c)$.",
        pista: "El divisor $x+1$ es $x-(-1)$, así que evalúe en $-1$.",
        desarrollo: [
          "Identificamos $c=-1$.",
          "Evaluamos: $P(-1)=(-1)^3-4(-1)^2+2(-1)+1$.",
          "$P(-1)=-1-4-2+1=-6$.",
          "Por el teorema del resto, el resto es $-6$."
        ],
        respuesta: "El resto es $-6$."
      },
      {
        titulo: "Divisor de la forma ax + b",
        dificultad: "intermedio",
        enunciado: "<p>Divida $6x^3+5x^2-8x-3$ por $2x+1$ usando Ruffini y compruebe el resto con el teorema del resto.</p>",
        concepto: "Para un divisor $ax-b$ se usa la raíz $c=\\tfrac{b}{a}$; en este caso $2x+1=2\\left(x+\\tfrac12\\right)$, por lo que $c=-\\tfrac12$.",
        pista: "Use $c=-\\tfrac12$ y coeficientes $6,5,-8,-3$. Recuerde que Ruffini divide por $x+\\tfrac12$; para $2x+1$ hay que dividir el cociente por $2$.",
        desarrollo: [
          "Bajamos $6$. Luego $6\\cdot\\left(-\\tfrac12\\right)=-3$ y $5-3=2$.",
          "Luego $2\\cdot\\left(-\\tfrac12\\right)=-1$ y $-8-1=-9$.",
          "Luego $-9\\cdot\\left(-\\tfrac12\\right)=\\tfrac92$ y $-3+\\tfrac92=\\tfrac32$.",
          "Ruffini entrega el cociente de dividir por $x+\\tfrac12$, que es $6x^2+2x-9$, y el resto $\\tfrac32$.",
          "Como $2x+1=2\\left(x+\\tfrac12\\right)$, el cociente de la división por $2x+1$ es la mitad: $3x^2+x-\\tfrac92$.",
          "Verificación: $P\\left(-\\tfrac12\\right)=6\\left(-\\tfrac18\\right)+5\\left(\\tfrac14\\right)-8\\left(-\\tfrac12\\right)-3=-\\tfrac34+\\tfrac54+4-3=\\tfrac32$, que coincide con el resto."
        ],
        respuesta: "Cociente $3x^2+x-\\tfrac92$; resto $\\tfrac32$."
      },
      {
        titulo: "Factorizar usando una raíz conocida",
        dificultad: "intermedio",
        enunciado: "<p>Se sabe que $x=1$ es raíz de $P(x)=x^3-2x^2-5x+6$. Factorice completamente $P(x)$.</p>",
        concepto: "Teorema del factor: si $P(1)=0$, entonces $x-1$ es factor. Al dividir se baja el grado y se factoriza el cociente cuadrático.",
        pista: "Divida por $x-1$ con Ruffini y luego factorice el cociente.",
        desarrollo: [
          "Verificamos: $P(1)=1-2-5+6=0$.",
          "Ruffini con $c=1$: coeficientes $1,-2,-5,6$. Bajamos $1$; $1\\cdot1=1$ y $-2+1=-1$; $-1\\cdot1=-1$ y $-5-1=-6$; $-6\\cdot1=-6$ y $6-6=0$.",
          "El cociente es $x^2-x-6$, que se factoriza como $(x-3)(x+2)$.",
          "Por lo tanto, $P(x)=(x-1)(x-3)(x+2)$."
        ],
        respuesta: "$P(x)=(x-1)(x-3)(x+2)$; raíces $1$, $3$ y $-2$."
      },
      {
        titulo: "Encontrar un parámetro y factorizar",
        dificultad: "avanzado",
        enunciado: "<p>Determine $k$ para que $x-2$ sea factor de $P(x)=2x^3+kx^2-5x+6$. Luego factorice completamente $P(x)$.</p>",
        concepto: "Usamos el teorema del factor como condición: $P(2)=0$. Después dividimos y factorizamos el cociente.",
        pista: "Imponga $P(2)=0$ y despeje $k$.",
        desarrollo: [
          "<b>Paso 1. Imponer la condición.</b> $P(2)=2(8)+k(4)-5(2)+6=16+4k-10+6=4k+12$.",
          "Como $x-2$ es factor, $P(2)=0$, así que $4k+12=0$ y $k=-3$.",
          "<b>Paso 2. Dividir.</b> Con $P(x)=2x^3-3x^2-5x+6$ y $c=2$: coeficientes $2,-3,-5,6$. Bajamos $2$; $2\\cdot2=4$ y $-3+4=1$; $1\\cdot2=2$ y $-5+2=-3$; $-3\\cdot2=-6$ y $6-6=0$.",
          "El cociente es $2x^2+x-3$, que se factoriza como $(2x+3)(x-1)$.",
          "<b>Paso 3. Respuesta.</b> $P(x)=(x-2)(2x+3)(x-1)$."
        ],
        respuesta: "$k=-3$ y $P(x)=(x-2)(2x+3)(x-1)$."
      }
    ],
    erroresComunes: [
      "Olvidar los coeficientes $0$ de las potencias que no aparecen al usar Ruffini o la división larga.",
      "Equivocar el signo de $c$: al dividir por $x+1$ se usa $c=-1$, no $c=1$.",
      "Restar mal en la división larga: hay que cambiar el signo de todo el producto antes de sumar.",
      "Detenerse antes de tiempo: el resto debe tener grado estrictamente menor que el divisor.",
      "Al dividir por $ax-b$, usar $c=b$ en vez de $c=\\tfrac{b}{a}$ u olvidar dividir el cociente de Ruffini por $a$."
    ],
    checklist: [
      "Sé escribir una división en la forma $P=DQ+R$ e identificar dividendo, divisor, cociente y resto.",
      "Puedo hacer una división larga manteniendo el orden y los signos.",
      "Sé aplicar Ruffini con coeficientes completos, incluyendo ceros.",
      "Puedo usar el teorema del resto para calcular $P(c)$ sin dividir.",
      "Puedo decidir si $x-c$ o $ax-b$ es factor usando el teorema del factor.",
      "Sé encadenar divisiones para factorizar completamente un polinomio."
    ],
    autoevaluacion: [
      { pregunta: "El resto de dividir $P(x)=x^3+2x-5$ por $x-1$ es:", opciones: ["$-2$", "$2$", "$-5$", "$0$"], correcta: 0, explicacion: "Por el teorema del resto, $R=P(1)=1+2-5=-2$." },
      { pregunta: "Si $P(3)=0$, entonces necesariamente:", opciones: ["$x+3$ es factor de $P$", "$x-3$ es factor de $P$", "$P$ tiene grado $3$", "el resto de dividir por $x+3$ es $3$"], correcta: 1, explicacion: "El teorema del factor dice que $c=3$ es raíz si y solo si $x-3$ es factor." },
      { pregunta: "Al dividir $x^3-1$ por $x-1$, el cociente es:", opciones: ["$x^2-1$", "$x^2+x+1$", "$x^2-x+1$", "$x^2+x-1$"], correcta: 1, explicacion: "$x^3-1=(x-1)(x^2+x+1)$, así que el cociente es $x^2+x+1$." },
      { pregunta: "Al usar Ruffini con $P(x)=x^3-4x+7$, los coeficientes que se escriben son:", opciones: ["$1,-4,7$", "$1,0,-4,7$", "$1,4,7$", "$1,-4,0,7$"], correcta: 1, explicacion: "Falta el término $x^2$, por lo que se escribe un $0$ en su lugar: $1,0,-4,7$." },
      { pregunta: "El resto de dividir $2x^3-x+4$ por $x+2$ es:", opciones: ["$-10$", "$10$", "$-6$", "$14$"], correcta: 0, explicacion: "$R=P(-2)=2(-8)-(-2)+4=-16+2+4=-10$." },
      { pregunta: "Para dividir por $3x-2$, el teorema del resto indica evaluar en:", opciones: ["$3$", "$-2$", "$\\tfrac23$", "$-\\tfrac23$"], correcta: 2, explicacion: "Escribimos $3x-2=3\\left(x-\\tfrac23\\right)$, así que el resto es $P\\left(\\tfrac23\\right)$." }
    ],
    resumen: [
      "Toda división de polinomios se escribe como $P(x)=D(x)Q(x)+R(x)$, con el resto de grado menor que el divisor.",
      "Ruffini simplifica la división por $x-c$ y también funciona con $ax-b$ usando $c=\\tfrac{b}{a}$.",
      "El teorema del resto dice que el resto es $P(c)$; el teorema del factor dice que $x-c$ es factor exactamente cuando $P(c)=0$."
    ],
    referencias: [
      { titulo: "Clase 11 — Funciones polinómicas (PDF)", ruta: "recursos/clases/clase-11.pdf" },
      { titulo: "I1 2025 — Interrogación 1 con solución", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin1-mat1107.pdf" },
      { titulo: "I1 2026 — Pauta de la Interrogación 1", ruta: "recursos/pruebas/PRUEBAS/2026-1/i1-mat1107-pauta.pdf" },
      { titulo: "Mickenberg, Cap. 7 — Polinomios", ruta: "recursos/libros/precalculo-mickenberg.pdf" }
    ],
  });
})();
