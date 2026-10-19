/* Módulo 1 · Sección 5 — Inecuaciones racionales y con valor absoluto */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s05", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 5,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Inecuaciones racionales y con valor absoluto",
    objetivo: "Resolver inecuaciones que involucran cuocientes y valores absolutos, controlando las restricciones del denominador y usando tablas de signos o equivalencias algebraicas.",
    conexion: "Ya dominas la tabla de signos para productos. Ahora la aplicaremos a cuocientes, donde además hay que excluir los ceros del denominador, y a expresiones con valor absoluto.",
    fuente: "Clases 06–07 · Guía 3 · Apunte Clase 3",
    prerrequisitos: ["Tabla de signos", "Factorización", "Propiedades del valor absoluto", "Intervalos"],
    teoria: [
      { tipo: "texto", html: "<p>Las inecuaciones racionales tienen la incógnita en un denominador, por ejemplo $\\dfrac{2x+1}{x+2}\\le 1$. Las inecuaciones con valor absoluto, por ejemplo $2|x|<|x-1|$, piden comparar distancias. Ambas se resuelven con las herramientas de las secciones anteriores, pero agregan una precaución: en las racionales el denominador nunca puede ser cero, y en las del valor absoluto hay que justificar antes de elevar al cuadrado.</p>" },
      { tipo: "definicion", titulo: "Inecuación racional", html: "<p>Una <b>inecuación racional</b> es una desigualdad donde aparece un cuociente de polinomios:</p>$$\\frac{P(x)}{Q(x)}<0,\\qquad \\frac{P(x)}{Q(x)}\\le 0,\\qquad \\frac{P(x)}{Q(x)}>0,\\qquad \\frac{P(x)}{Q(x)}\\ge 0.$$<p>Su dominio está formado por todos los $x$ tales que $Q(x)\\neq 0$. Los ceros del denominador <b>nunca</b> pertenecen al conjunto solución, aunque la desigualdad sea no estricta.</p>" },
      { tipo: "definicion", titulo: "Método para inecuaciones racionales", html: "<ol><li><b>Llevar todo a un lado:</b> reescribir la inecuación como $\\dfrac{P(x)}{Q(x)}-c<0$ (o el signo correspondiente).</li><li><b>Unificar el denominador:</b> obtener un único cuociente $\\dfrac{R(x)}{S(x)}$.</li><li><b>Factorizar</b> numerador y denominador.</li><li><b>Encontrar los puntos críticos</b> de ambos y anotar las restricciones del denominador.</li><li><b>Hacer la tabla de signos</b> del cuociente en los intervalos determinados por todos los puntos críticos.</li><li><b>Elegir los intervalos</b> que cumplen la desigualdad, excluyendo siempre los ceros del denominador.</li></ol>" },
      { tipo: "teorema", titulo: "Signo de un cuociente", html: "<p>Para $a,b\\in\\R$ con $b\\neq 0$, el signo de $\\dfrac ab$ es:</p><ul><li>positivo si $a$ y $b$ tienen el mismo signo;</li><li>negativo si $a$ y $b$ tienen signos opuestos.</li></ul><p>Por eso la tabla de signos de un cuociente se construye igual que la de un producto: se multiplican los signos del numerador y del denominador. La única diferencia es que los ceros del denominador se marcan como <b>excluidos</b>.</p>" },
      { tipo: "teorema", titulo: "Propiedades útiles del valor absoluto", html: "<p>Para $a\\ge 0$ y $x\\in\\R$:</p>$$|x|<a\\iff -a<x<a,\\qquad |x|\\le a\\iff -a\\le x\\le a,$$$$|x|>a\\iff x<-a\\ \\text{ o }\\ x>a,\\qquad |x|\\ge a\\iff x\\le -a\\ \\text{ o }\\ x\\ge a.$$<p>También usaremos que $|x|^2=x^2$ y que $|x|<|y|$ equivale a $x^2<y^2$. Esta última equivalencia es válida porque ambos lados son no negativos y la función $t\\mapsto t^2$ conserva el orden entre no negativos.</p>" },
      { tipo: "teorema", titulo: "Comparar dos valores absolutos", html: "<p>Para $A,B\\in\\R$:</p>$$|A|<|B|\\iff A^2<B^2.$$<p><b>Por qué.</b> Si $|A|<|B|$, elevando al cuadrado (ambos lados no negativos) se obtiene $|A|^2<|B|^2$, es decir, $A^2<B^2$. Recíprocamente, si $A^2<B^2$, entonces $|A|^2<|B|^2$. Como $|A|,|B|\\ge 0$, la raíz cuadrada conserva el orden y se concluye $|A|<|B|$.</p><p>Esta equivalencia permite transformar una inecuación con dos valores absolutos en una inecuación polinómica.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> en una inecuación racional, el denominador es como una <i>zona prohibida</i>: si se anula, el valor no existe y ese punto jamás entra a la solución. En una inecuación con valor absoluto, comparar $|A|$ con $|B|$ es comparar dos distancias; por eso se pueden elevar al cuadrado sin miedo, porque ambas distancias son no negativas.</div>" },
      { tipo: "tabla", titulo: "Tabla de signos para $\\dfrac{x-1}{x+2}$", headers: ["Intervalo", "Signo de $x-1$", "Signo de $x+2$", "Signo del cuociente"], rows: [["$(-\\infty,-2)$", "$-$", "$-$", "$+$"], ["$(-2,1)$", "$-$", "$+$", "$-$"], ["$(1,+\\infty)$", "$+$", "$+$", "$+"]] },
      { tipo: "grafico", spec: { tipo: "recta_numerica", titulo: "Solución de (2x+1)/(x+2) ≤ 1", rango: [-5, 3], intervalos: [ { a: -2, b: 1, abiertoA: true, abiertoB: false, label: "(−2, 1]", color: "#00b894" } ], puntos: [ { x: -2, label: "-2 excluido", abierto: true }, { x: 1, label: "1 incluido" } ] } },
      { tipo: "nota", titulo: "Los tres métodos de la Clase 7", html: "<p>Para $2|x|<|x-1|$, la Clase 7 muestra tres caminos: usar propiedades de las desigualdades y elevar al cuadrado, usar directamente las propiedades del valor absoluto, o separar por puntos críticos. Los tres llegan a $\\left(-1,\\dfrac13\\right)$. En la Guía 3 también aparecen $\\dfrac{2x+1}{x+2}\\le 1$, $\\dfrac{x^2-8x+15}{x-4}<0$ y $|3x+2|\\ge 4$.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Cuociente comparado con una constante",
        enunciado: "<p>Resuelva $\\dfrac{2x+1}{x+2}\\le 1$.</p>",
        concepto: "No se puede multiplicar por $x+2$ sin saber su signo. El método seguro es restar $1$, unificar el denominador y usar la tabla de signos.",
        desarrollo: [
          "<b>Paso 1.</b> Restamos $1$: $\\dfrac{2x+1}{x+2}-1\\le 0$.",
          "<b>Paso 2.</b> Unificamos: $\\dfrac{2x+1-(x+2)}{x+2}\\le 0$, es decir, $\\dfrac{x-1}{x+2}\\le 0$.",
          "<b>Paso 3.</b> Puntos críticos: $x=1$ (numerador) y $x=-2$ (denominador). El punto $-2$ está excluido.",
          "<b>Paso 4.</b> Tabla de signos: el cuociente es positivo en $(-\\infty,-2)$, negativo en $(-2,1)$ y positivo en $(1,+\\infty)$.",
          "<b>Paso 5.</b> Buscamos signo negativo o cero. El $1$ se incluye porque anula el numerador; el $-2$ se excluye porque anula el denominador.",
          "<b>Paso 6.</b> Verificamos con $x=0$: $\\dfrac{1}{2}\\le 1$, correcto. Con $x=-3$: $\\dfrac{-5}{-1}=5\\le 1$, falso."
        ],
        respuesta: "$S=(-2,1]$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de (2x+1)/(x+2)≤1", rango: [-5, 3], intervalos: [ { a: -2, b: 1, abiertoA: true, abiertoB: false, label: "(−2, 1]", color: "#00b894" } ], puntos: [ { x: -2, label: "-2", abierto: true }, { x: 1, label: "1" } ] }
      },
      {
        titulo: "Cuociente con numerador cuadrático",
        enunciado: "<p>Resuelva $\\dfrac{x^2-8x+15}{x-4}<0$.</p>",
        concepto: "Se factoriza el numerador, se identifican todos los puntos críticos y se excluye el cero del denominador.",
        desarrollo: [
          "<b>Paso 1.</b> Factorizamos el numerador: $x^2-8x+15=(x-3)(x-5)$.",
          "<b>Paso 2.</b> La inecuación queda $\\dfrac{(x-3)(x-5)}{x-4}<0$.",
          "<b>Paso 3.</b> Puntos críticos: $3$, $4$ y $5$. La restricción es $x\\neq 4$.",
          "<b>Paso 4.</b> En $(-\\infty,3)$ el cuociente es negativo; en $(3,4)$ es positivo; en $(4,5)$ es negativo; en $(5,+\\infty)$ es positivo.",
          "<b>Paso 5.</b> Buscamos signo negativo, con desigualdad estricta, así que no incluimos ningún extremo.",
          "<b>Paso 6.</b> Verificamos con $x=0$: $\\dfrac{15}{-4}<0$, correcto. Con $x=3{,}5$: $\\dfrac{0{,}25\\cdot(-1{,}5)}{-0{,}5}>0$, correcto."
        ],
        respuesta: "$S=(-\\infty,3)\\cup(4,5)$."
      },
      {
        titulo: "Dos valores absolutos",
        enunciado: "<p>Resuelva $2|x|<|x-1|$.</p>",
        concepto: "Se usa $|A|<|B|\\iff A^2<B^2$. Ambos lados son no negativos, así que elevar al cuadrado no agrega soluciones falsas.",
        desarrollo: [
          "<b>Paso 1.</b> Como $2|x|=|2x|$, la inecuación es $|2x|<|x-1|$.",
          "<b>Paso 2.</b> Elevamos al cuadrado: $(2x)^2<(x-1)^2$.",
          "<b>Paso 3.</b> Desarrollamos: $4x^2<x^2-2x+1$.",
          "<b>Paso 4.</b> Pasamos todo a la izquierda: $3x^2+2x-1<0$.",
          "<b>Paso 5.</b> Factorizamos: $(3x-1)(x+1)<0$.",
          "<b>Paso 6.</b> Puntos críticos: $-1$ y $\\dfrac13$. El producto es negativo entre ellos, así que $S=\\left(-1,\\dfrac13\\right)$.",
          "<b>Paso 7.</b> Verificamos con $x=0$: $0<1$, correcto. Con $x=1$: $2<0$, falso."
        ],
        respuesta: "$S=\\left(-1,\\dfrac13\\right)$."
      }
    ],
    ejercicios: [
      {
        titulo: "Cuociente positivo",
        dificultad: "basico",
        enunciado: "<p>Resuelva $\\dfrac{x-1}{x+3}\\ge 0$.</p>",
        concepto: "Se usa la tabla de signos del cuociente; el denominador no puede anularse.",
        pista: "Puntos críticos: $1$ y $-3$. Recuerda excluir $-3$.",
        desarrollo: [
          "Puntos críticos: $x=1$ y $x=-3$ (excluido).",
          "En $(-\\infty,-3)$: $(-)/(-)=+$.",
          "En $(-3,1)$: $(-)/(+)=-$.",
          "En $(1,+\\infty)$: $(+)/(+)=+$.",
          "Buscamos signo positivo o cero: incluimos $1$, excluimos $-3$."
        ],
        respuesta: "$S=(-\\infty,-3)\\cup[1,+\\infty)$."
      },
      {
        titulo: "Valor absoluto con desigualdad no estricta",
        dificultad: "basico",
        enunciado: "<p>Resuelva $|2x-1|\\le 3$.</p>",
        concepto: "Se usa $|u|\\le a\\iff -a\\le u\\le a$.",
        pista: "Plantea $-3\\le 2x-1\\le 3$.",
        desarrollo: [
          "$-3\\le 2x-1\\le 3$.",
          "Sumamos $1$ en las tres partes: $-2\\le 2x\\le 4$.",
          "Dividimos por $2>0$: $-1\\le x\\le 2$.",
          "Verificación con $x=-1$: $|-3|=3\\le 3$; con $x=2$: $|3|=3\\le 3$."
        ],
        respuesta: "$S=[-1,2]$."
      },
      {
        titulo: "Valor absoluto con desigualdad hacia afuera",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $|3x+2|\\ge 4$.</p>",
        concepto: "Se usa $|u|\\ge a\\iff u\\le -a$ o $u\\ge a$.",
        pista: "Separa en dos desigualdades lineales.",
        desarrollo: [
          "Caso 1: $3x+2\\ge 4$, entonces $3x\\ge 2$ y $x\\ge\\dfrac23$.",
          "Caso 2: $3x+2\\le -4$, entonces $3x\\le -6$ y $x\\le -2$.",
          "La solución es la unión de ambos casos.",
          "Verificación con $x=-2$: $|-4|=4\\ge 4$; con $x=0$: $|2|=2\\ge 4$ es falso."
        ],
        respuesta: "$S=(-\\infty,-2]\\cup\\left[\\dfrac23,+\\infty\\right)$."
      },
      {
        titulo: "Constante al otro lado",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\dfrac{x+1}{x-2}<2$.</p>",
        concepto: "Se resta $2$, se unifica el denominador y se analiza el signo del cuociente resultante.",
        pista: "Después de restar, el numerador queda $x+1-2(x-2)$.",
        desarrollo: [
          "Restamos $2$: $\\dfrac{x+1}{x-2}-2<0$.",
          "Unificamos: $\\dfrac{x+1-2x+4}{x-2}<0$, es decir, $\\dfrac{5-x}{x-2}<0$.",
          "Puntos críticos: $x=5$ y $x=2$ (excluido).",
          "El cuociente es negativo cuando los signos son opuestos: en $(-\\infty,2)$ y en $(5,+\\infty)$.",
          "Verificación con $x=0$: $\\dfrac12<2$; con $x=3$: $4<2$ es falso; con $x=6$: $\\dfrac74<2$."
        ],
        respuesta: "$S=(-\\infty,2)\\cup(5,+\\infty)$."
      },
      {
        titulo: "Valor absoluto anidado",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $\\big|x^2-|3+2x|\\big|<4$.</p>",
        concepto: "Se separa por el punto crítico del valor absoluto interior, $x=-\\dfrac32$, y en cada caso se resuelve una inecuación cuadrática.",
        pista: "Analiza por separado $x\\ge-\\dfrac32$ y $x<-\\dfrac32$.",
        desarrollo: [
          "<b>Caso 1: $x\\ge-\\dfrac32$.</b> Entonces $|3+2x|=3+2x$, y la inecuación es $|x^2-2x-3|<4$.",
          "Esto equivale a $-4<x^2-2x-3<4$.",
          "La parte izquierda es $x^2-2x+1>0$, es decir, $(x-1)^2>0$, que se cumple para todo $x\\neq 1$.",
          "La parte derecha es $x^2-2x-7<0$, cuyas raíces son $1\\pm2\\sqrt2$; su solución es $(1-2\\sqrt2,1+2\\sqrt2)$.",
          "Intersecando con $x\\ge-\\dfrac32$ y $x\\neq1$: $\\left[-\\dfrac32,1\\right)\\cup\\left(1,1+2\\sqrt2\\right)$.",
          "<b>Caso 2: $x<-\\dfrac32$.</b> Entonces $|3+2x|=-3-2x$, y la expresión queda $|x^2+2x+3|<4$.",
          "Pero $x^2+2x+3=(x+1)^2+2>0$, así que la inecuación es $x^2+2x+3<4$, es decir, $x^2+2x-1<0$.",
          "Sus raíces son $-1\\pm\\sqrt2$, y la solución es $(-1-\\sqrt2,-1+\\sqrt2)$.",
          "Intersecando con $x<-\\dfrac32$: $(-1-\\sqrt2,-\\dfrac32)$.",
          "<b>Unión.</b> Al juntar ambos casos, el intervalo que termina en $-\\dfrac32$ se une con el que empieza en $-\\dfrac32$: $S=(-1-\\sqrt2,1)\\cup(1,1+2\\sqrt2)$."
        ],
        respuesta: "$S=(-1-\\sqrt2,1)\\cup(1,1+2\\sqrt2)$."
      }
    ],
    erroresComunes: [
      "Multiplicar una inecuación racional por el denominador sin analizar su signo; si el denominador es negativo, la desigualdad se invierte.",
      "Incluir el cero del denominador en la solución porque la desigualdad es $\\le$ o $\\ge$; esos puntos siempre se excluyen.",
      "Elevar al cuadrado una desigualdad con valores absolutos sin comprobar que ambos lados son no negativos.",
      "Olvidar la restricción de dominio antes de resolver y luego aceptar valores prohibidos.",
      "Al resolver $|x|>a$, escribir solo $x>a$ y olvidar la rama $x<-a$."
    ],
    checklist: [
      "Sé llevar una inecuación racional a la forma $\\dfrac{P(x)}{Q(x)}<0$.",
      "Sé construir la tabla de signos de un cuociente y excluir los ceros del denominador.",
      "Sé resolver inecuaciones del tipo $|u|\\le a$ y $|u|\\ge a$.",
      "Sé justificar por qué $|A|<|B|$ equivale a $A^2<B^2$.",
      "Sé resolver inecuaciones con dos valores absolutos elevando al cuadrado.",
      "Sé separar por casos cuando hay un valor absoluto dentro de otro."
    ],
    autoevaluacion: [
      { pregunta: "El conjunto solución de $\\dfrac{x-2}{x+1}>0$ es:", opciones: ["$(-1,2)$", "$(-\\infty,-1)\\cup(2,+\\infty)$", "$[-1,2]$", "$(-\\infty,2)$"], correcta: 1, explicacion: "El cuociente es positivo cuando numerador y denominador tienen el mismo signo: $x<-1$ o $x>2$." },
      { pregunta: "En una inecuación racional, un cero del denominador:", opciones: ["Siempre se incluye", "Se incluye solo si la desigualdad es $\\le$", "Nunca se incluye", "Se incluye si también anula el numerador"], correcta: 2, explicacion: "El denominador no puede ser cero, así que ese valor no pertenece al dominio y jamás forma parte de la solución." },
      { pregunta: "La solución de $|x-3|\\ge 1$ es:", opciones: ["$[2,4]$", "$(-\\infty,2]\\cup[4,+\\infty)$", "$(-\\infty,4]$", "$[4,+\\infty)$"], correcta: 1, explicacion: "$x-3\\ge1$ da $x\\ge4$; $x-3\\le-1$ da $x\\le2$." },
      { pregunta: "¿Cuál igualdad es válida para todo $x\\in\\R$?", opciones: ["$|x-1|=x-1$", "$|x-1|^2=(x-1)^2$", "$|x-1|=1-x$", "$|x-1|=|x|+1$"], correcta: 1, explicacion: "El cuadrado del valor absoluto coincide con el cuadrado de la expresión: $|u|^2=u^2$." },
      { pregunta: "Para resolver $2|x|<|x-1|$, un camino válido es:", opciones: ["Eliminar los valores absolutos sin condiciones", "Elevar al cuadrado ambos lados", "Multiplicar por $x-1$", "Sumar $|x|$ a ambos lados"], correcta: 1, explicacion: "Ambos lados son no negativos, así que $|2x|<|x-1|$ equivale a $4x^2<(x-1)^2$." },
      { pregunta: "El conjunto solución de $\\dfrac{1}{x-2}\\le 0$ es:", opciones: ["$(-\\infty,2)$", "$(-\\infty,2]$", "$(2,+\\infty)$", "$\\R\\setminus\\{2\\}$"], correcta: 0, explicacion: "El numerador es positivo, así que el cuociente es negativo solo si $x-2<0$; además $x=2$ está excluido. Resulta $(-\\infty,2)$." }
    ],
    resumen: [
      "En una inecuación racional se lleva todo a un lado, se unifica el denominador y se aplica la tabla de signos, excluyendo siempre los ceros del denominador.",
      "Las inecuaciones con valor absoluto se resuelven con las equivalencias $|u|\\le a$ y $|u|\\ge a$, o elevando al cuadrado cuando se comparan dos valores absolutos.",
      "Antes de elevar al cuadrado o multiplicar por una expresión con $x$ hay que verificar que la operación preserve la desigualdad."
    ],
    referencias: [
      { titulo: "Clase 06 — Inecuaciones racionales (PDF)", ruta: "recursos/clases/clase-06.pdf" },
      { titulo: "Clase 07 — Inecuaciones con valor absoluto (PDF)", ruta: "recursos/clases/clase-07.pdf" },
      { titulo: "Guía 3 — Inecuaciones (PDF)", ruta: "recursos/guias/guia-03-inecuaciones.pdf" },
      { titulo: "Apunte Clase 3 — Inecuaciones (PDF)", ruta: "recursos/apuntes/apunte-clase-03.pdf" }
    ]
  });
})();
