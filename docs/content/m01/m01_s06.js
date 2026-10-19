/* Módulo 1 · Sección 6 — Inecuaciones con raíces y aplicaciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s06", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 6,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Inecuaciones con raíces y aplicaciones",
    objetivo: "Resolver inecuaciones que contienen raíces cuadradas determinando primero el dominio, controlando el signo de ambos lados antes de elevar al cuadrado, y aplicar el método a problemas de contexto.",
    conexion: "Ya sabes resolver inecuaciones polinómicas y racionales con tablas de signos. Las raíces agregan una condición nueva: lo que está dentro de la raíz no puede ser negativo.",
    fuente: "Clase 07 · Guía 3 · Interrogación 3 2025",
    prerrequisitos: ["Inecuaciones cuadráticas", "Valor absoluto", "Dominio de una expresión", "Intervalos"],
    teoria: [
      { tipo: "texto", html: "<p>Una raíz cuadrada impone una <b>restricción de existencia</b>: solo se puede calcular $\\sqrt{A}$ si $A\\ge 0$. Esa restricción debe resolverse <b>antes</b> de manipular la inecuación, porque el conjunto solución final siempre debe estar contenido en el dominio. Además, al elevar al cuadrado hay que revisar el signo de ambos lados: la operación no siempre preserva la desigualdad.</p>" },
      { tipo: "definicion", titulo: "Dominio de una expresión con raíz", html: "<p>La expresión $\\sqrt{A(x)}$ está definida exactamente para los $x$ tales que</p>$$A(x)\\ge 0.$$<p>Si la raíz aparece en un denominador, como $\\dfrac{1}{\\sqrt{A(x)}}$, se necesita además $A(x)\\neq 0$, es decir, $A(x)>0$. Si hay varias raíces, se deben cumplir <b>todas</b> las condiciones simultáneamente.</p>" },
      { tipo: "teorema", titulo: "Cuándo se puede elevar al cuadrado", html: "<p>Sean $A,B\\in\\R$ con $A,B\\ge 0$. Entonces</p>$$A<B\\iff A^2<B^2.$$<p>La razón es que la función $t\\mapsto t^2$ es estrictamente creciente en $[0,+\\infty)$. Si alguno de los lados puede ser negativo, la equivalencia falla: por ejemplo $-3<1$, pero $(-3)^2>1^2$.</p>" },
      { tipo: "teorema", titulo: "Casos al comparar $\\sqrt{A}$ con $B$", html: "<p>Para resolver $\\sqrt{A(x)}<B(x)$:</p><ul><li>Si $B(x)<0$, la desigualdad es <b>imposible</b>, porque $\\sqrt{A(x)}\\ge 0$.</li><li>Si $B(x)\\ge 0$, se puede elevar al cuadrado y resolver $A(x)<B(x)^2$.</li></ul><p>En ambos casos hay que intersectar con la condición $A(x)\\ge 0$. Para $\\sqrt{A(x)}>B(x)$ el análisis es análogo: si $B(x)<0$ basta con el dominio; si $B(x)\\ge 0$ se eleva al cuadrado y se resuelve $A(x)>B(x)^2$.</p>" },
      { tipo: "tabla", titulo: "Resumen de estrategias", headers: ["Inecuación", "Condición extra", "Qué resolver"], rows: [["$\\sqrt{A}<B$", "$A\\ge0$ y $B>0$", "$A<B^2$"], ["$\\sqrt{A}\\le B$", "$A\\ge0$ y $B\\ge0$", "$A\\le B^2$"], ["$\\sqrt{A}>B$", "$A\\ge0$; si $B<0$ se cumple sola", "Si $B\\ge0$: $A>B^2$"], ["$\\sqrt{A}\\ge B$", "$A\\ge0$; si $B\\le0$ se cumple sola", "Si $B>0$: $A\\ge B^2$"], ["$\\sqrt{A}<\\sqrt{B}$", "$A\\ge0$, $B\\ge0$", "$A<B$"]] },
      { tipo: "nota", titulo: "La raíz conserva el orden (Apunte Clase 5)", html: "<p>Si $0\\le a<b$, entonces $\\sqrt a<\\sqrt b$. Esta propiedad se demuestra suponiendo lo contrario y elevando al cuadrado. Es la que permite comparar dos raíces sin calcularlas: $\\sqrt{A}<\\sqrt{B}$ equivale a $A<B$, siempre que ambos radicandos sean no negativos. La usaremos con frecuencia al resolver inecuaciones con dos raíces.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una raíz cuadrada es una máquina que solo acepta números no negativos. Antes de hacer cualquier cosa, revisa qué valores puede recibir. Y si quieres comparar $\\sqrt{A}$ con algo, recuerda que una raíz nunca es negativa: si el otro lado es negativo, la respuesta puede ser inmediata.</div>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "La raíz solo existe donde el radicando es no negativo", funciones: [ { f: function (x) { return Math.sqrt(x * x - 3 * x); }, desde: -2, hasta: 6, label: "y = √(x²−3x)", color: "#1e5eff" }, { f: function (x) { return 2 * x - 1; }, desde: -2, hasta: 6, label: "y = 2x−1", color: "#e17055" } ], xlabel: "x", ylabel: "y", rangeX: [-2, 6], rangeY: [-3, 8] } },
      { tipo: "nota", titulo: "Aplicaciones y evaluaciones (Clase 7 · I3)", html: "<p>La Clase 7 resuelve $\\sqrt{x^2+x-2}-2\\sqrt{x^2-1}\\ge 0$ y $2x-1>\\sqrt{x^2-3x}$, y usa una inecuación con valor absoluto para analizar la posición de un guardia. En la Interrogación 3 de 2025 aparece $\\sqrt{x+3}>\\sqrt{|x-2|}$, que se resuelve elevando al cuadrado y separando por el punto crítico $x=2$. Todos estos problemas siguen el mismo orden: dominio, signo, elevar, intersectar.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Raíz menor o igual que una constante",
        enunciado: "<p>Resuelva $\\sqrt{x^2-3x}\\le 2$.</p>",
        concepto: "Primero se determina el dominio del radicando y luego se eleva al cuadrado, lo que es válido porque ambos lados son no negativos.",
        desarrollo: [
          "<b>Paso 1.</b> Dominio: $x^2-3x\\ge 0$, es decir, $x(x-3)\\ge 0$. Esto ocurre para $x\\le 0$ o $x\\ge 3$.",
          "<b>Paso 2.</b> Ambos lados son no negativos ($2>0$), así que elevamos al cuadrado: $x^2-3x\\le 4$.",
          "<b>Paso 3.</b> Reordenamos: $x^2-3x-4\\le 0$.",
          "<b>Paso 4.</b> Factorizamos: $(x-4)(x+1)\\le 0$, cuya solución es $[-1,4]$.",
          "<b>Paso 5.</b> Intersecamos con el dominio: $[-1,4]\\cap\\big((-\\infty,0]\\cup[3,+\\infty)\\big)$.",
          "<b>Paso 6.</b> El resultado es $S=[-1,0]\\cup[3,4]$.",
          "<b>Paso 7.</b> Verificamos $x=-1$: $\\sqrt{1+3}=2\\le2$; $x=3$: $\\sqrt{9-9}=0\\le2$; $x=4$: $\\sqrt{16-12}=2\\le2$."
        ],
        respuesta: "$S=[-1,0]\\cup[3,4]$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de √(x²−3x)≤2", rango: [-3, 6], intervalos: [ { a: -1, b: 0, label: "[−1, 0]", color: "#1e5eff" }, { a: 3, b: 4, label: "[3, 4]", color: "#1e5eff" } ] }
      },
      {
        titulo: "Raíz menor que una expresión lineal",
        enunciado: "<p>Resuelva $2x-1>\\sqrt{x^2-3x}$.</p>",
        concepto: "Se determina el dominio, se exige que el lado derecho sea positivo y recién entonces se eleva al cuadrado.",
        desarrollo: [
          "<b>Paso 1.</b> Dominio: $x^2-3x\\ge0$, es decir, $x\\le0$ o $x\\ge3$.",
          "<b>Paso 2.</b> Para que la desigualdad sea posible, el lado izquierdo debe ser positivo: $2x-1>0$, es decir, $x>\\dfrac12$.",
          "<b>Paso 3.</b> Intersecando el dominio con $x>\\dfrac12$, queda $x\\ge3$.",
          "<b>Paso 4.</b> Para $x\\ge3$, ambos lados son no negativos; elevamos al cuadrado: $(2x-1)^2>x^2-3x$.",
          "<b>Paso 5.</b> Desarrollamos: $4x^2-4x+1>x^2-3x$, es decir, $3x^2-x+1>0$.",
          "<b>Paso 6.</b> El discriminante es $\\Delta=(-1)^2-4\\cdot3\\cdot1=1-12=-11<0$, y el coeficiente principal es positivo. Por lo tanto, $3x^2-x+1>0$ para todo $x\\in\\R$.",
          "<b>Paso 7.</b> La solución es todo el dominio considerado: $S=[3,+\\infty)$.",
          "<b>Paso 8.</b> Verificamos $x=3$: $5>\\sqrt0=0$, correcto."
        ],
        respuesta: "$S=[3,+\\infty)$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de 2x−1>√(x²−3x)", rango: [-1, 7], intervalos: [ { a: 3, b: 7, label: "[3, +∞)", color: "#00b894" } ], puntos: [ { x: 3, label: "3 incluido" } ] }
      },
      {
        titulo: "El guardia y la distancia a la víctima",
        enunciado: "<p>La posición de un guardia en su ronda está dada por $x(t)=\\dfrac{40t}{t^2+16}$, donde $t\\ge0$ son las horas desde la medianoche y $x$ se mide en metros. Una persona ubicada en $x=1$ recibe un impacto entre las 4:00 y las 7:00 a.m. El perito afirma que el culpable estaba a no más de $3$ metros de la víctima. Demuestre que el guardia es inocente.</p>",
        concepto: "La condición «a no más de 3 metros» se escribe $|x(t)-1|\\le3$. Se resuelve la inecuación con valor absoluto y se compara el horario obtenido con el intervalo del disparo.",
        desarrollo: [
          "<b>Paso 1.</b> Planteamos $\\left|\\dfrac{40t}{t^2+16}-1\\right|\\le3$.",
          "<b>Paso 2.</b> La desigualdad equivale a $-3\\le\\dfrac{40t}{t^2+16}-1\\le3$.",
          "<b>Paso 3.</b> Como $t^2+16>0$, multiplicamos las tres partes por $t^2+16$ sin invertir: $-3(t^2+16)\\le40t-(t^2+16)\\le3(t^2+16)$.",
          "<b>Paso 4.</b> Desigualdad izquierda: $-3t^2-48\\le40t-t^2-16$, es decir, $2t^2+40t+32\\ge0$, o $t^2+20t+16\\ge0$. Sus raíces son $-10\\pm\\sqrt{84}$, ambas negativas, y como $t\\ge0$, siempre se cumple.",
          "<b>Paso 5.</b> Desigualdad derecha: $40t-t^2-16\\le3t^2+48$, es decir, $4t^2-40t+64\\ge0$, o $t^2-10t+16\\ge0$.",
          "<b>Paso 6.</b> Factorizamos: $(t-2)(t-8)\\ge0$, cuya solución es $t\\le2$ o $t\\ge8$.",
          "<b>Paso 7.</b> Como $t\\ge0$, el guardia estuvo a $3$ metros o menos de la víctima en $[0,2]\\cup[8,+\\infty)$.",
          "<b>Paso 8.</b> El disparo ocurrió entre las 4:00 y las 7:00, intervalo que no se intersecta con $[0,2]\\cup[8,+\\infty)$. Por lo tanto, el guardia no pudo ser el culpable."
        ],
        respuesta: "El guardia está a distancia $\\le3$ solo en $[0,2]\\cup[8,+\\infty)$; como el disparo fue entre las 4:00 y las 7:00, es inocente."
      }
    ],
    ejercicios: [
      {
        titulo: "Dominio y raíz menor que 2",
        dificultad: "basico",
        enunciado: "<p>Determine el dominio de $\\sqrt{x-3}$ y resuelva $\\sqrt{x-3}<2$.</p>",
        concepto: "Se impone $x-3\\ge0$ y luego se eleva al cuadrado, ya que ambos lados son no negativos.",
        pista: "El dominio es $[3,+\\infty)$. Al elevar, no olvides intersectar con él.",
        desarrollo: [
          "Dominio: $x-3\\ge0\\iff x\\ge3$, es decir, $[3,+\\infty)$.",
          "Elevamos al cuadrado: $x-3<4$, de donde $x<7$.",
          "Intersecamos: $[3,+\\infty)\\cap(-\\infty,7)=[3,7)$.",
          "Verificación con $x=3$: $0<2$; con $x=7$: $2<2$ es falso, por eso $7$ se excluye."
        ],
        respuesta: "Dominio $[3,+\\infty)$; solución $[3,7)$."
      },
      {
        titulo: "Raíz mayor o igual que 1",
        dificultad: "basico",
        enunciado: "<p>Resuelva $\\sqrt{2x+1}\\ge1$.</p>",
        concepto: "Se determina el dominio y se eleva al cuadrado, pues ambos lados son no negativos.",
        pista: "El dominio es $x\\ge-\\dfrac12$.",
        desarrollo: [
          "Dominio: $2x+1\\ge0\\iff x\\ge-\\dfrac12$.",
          "Elevamos al cuadrado: $2x+1\\ge1$.",
          "Entonces $2x\\ge0$, es decir, $x\\ge0$.",
          "Intersecando con el dominio, que ya está contenido en $x\\ge0$, la solución es $[0,+\\infty)$."
        ],
        respuesta: "$S=[0,+\\infty)$."
      },
      {
        titulo: "Dos raíces",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\sqrt{x+3}>\\sqrt{|x-2|}$.</p>",
        concepto: "Se determina el dominio, se eleva al cuadrado (ambas raíces son no negativas) y se resuelve la inecuación con valor absoluto separando por $x=2$.",
        pista: "Después de elevar queda $x+3>|x-2|$. Analiza los casos $x\\le2$ y $x>2$.",
        desarrollo: [
          "Dominio: $x+3\\ge0\\iff x\\ge-3$.",
          "Elevamos al cuadrado: $x+3>|x-2|$.",
          "Caso $x\\le2$: $|x-2|=2-x$, entonces $x+3>2-x$, es decir, $2x>-1$ y $x>-\\dfrac12$. Intersecando con $x\\le2$: $\\left(-\\dfrac12,2\\right]$.",
          "Caso $x>2$: $|x-2|=x-2$, entonces $x+3>x-2$, es decir, $3>-2$, que siempre se cumple. Aporta $(2,+\\infty)$.",
          "Unión: $\\left(-\\dfrac12,2\\right]\\cup(2,+\\infty)=\\left(-\\dfrac12,+\\infty\\right)$.",
          "Intersecamos con el dominio $[-3,+\\infty)$: no cambia el resultado."
        ],
        respuesta: "$S=\\left(-\\dfrac12,+\\infty\\right)$."
      },
      {
        titulo: "Raíz menor o igual que x",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\sqrt{x+2}\\le x$.</p>",
        concepto: "Hay que exigir dominio y también $x\\ge0$, porque una raíz no puede ser menor o igual que un número negativo.",
        pista: "Si $x<0$, la desigualdad es imposible. Para $x\\ge0$, eleva al cuadrado.",
        desarrollo: [
          "Dominio: $x+2\\ge0\\iff x\\ge-2$.",
          "Como $\\sqrt{x+2}\\ge0$, se necesita $x\\ge0$ para que la desigualdad sea posible.",
          "Para $x\\ge0$, elevamos al cuadrado: $x+2\\le x^2$.",
          "Reordenamos: $x^2-x-2\\ge0$, es decir, $(x-2)(x+1)\\ge0$.",
          "La solución de esta cuadrática es $x\\le-1$ o $x\\ge2$.",
          "Intersecando con $x\\ge0$: $[2,+\\infty)$.",
          "Verificación con $x=2$: $\\sqrt4=2\\le2$; con $x=1$: $\\sqrt3\\le1$ es falso."
        ],
        respuesta: "$S=[2,+\\infty)$."
      },
      {
        titulo: "Una raíz estrictamente menor que x",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $\\sqrt{2x+3}<x$.</p>",
        concepto: "Se combinan dominio, signo del lado derecho y elevación al cuadrado; luego se intersectan las tres condiciones.",
        pista: "Necesitas $x\\ge0$. Después de elevar queda $x^2-2x-3>0$.",
        desarrollo: [
          "Dominio: $2x+3\\ge0\\iff x\\ge-\\dfrac32$.",
          "Como la raíz es no negativa y debe ser estrictamente menor que $x$, se necesita $x>0$.",
          "Para $x>0$, elevamos al cuadrado: $2x+3<x^2$.",
          "Reordenamos: $x^2-2x-3>0$, es decir, $(x-3)(x+1)>0$.",
          "La solución de esta cuadrática es $x<-1$ o $x>3$.",
          "Intersecando con $x>0$: $S=(3,+\\infty)$.",
          "Verificación con $x=3$: $\\sqrt9=3<3$ es falso, por eso $3$ se excluye; con $x=4$: $\\sqrt{11}<4$, correcto."
        ],
        respuesta: "$S=(3,+\\infty)$."
      }
    ],
    erroresComunes: [
      "Elevar al cuadrado sin comprobar que ambos lados sean no negativos; por ejemplo, de $x<-2$ no se sigue $x^2<4$.",
      "Olvidar la restricción del radicando y aceptar soluciones donde la raíz no está definida.",
      "Olvidar que una raíz nunca es negativa y, por lo tanto, no puede ser menor que un número negativo.",
      "Al elevar $(2x-1)^2$, olvidar el término cruzado y escribir $4x^2+1$ en vez de $4x^2-4x+1$.",
      "No intersectar la solución algebraica con el dominio inicial."
    ],
    checklist: [
      "Sé determinar el dominio de una expresión con una o varias raíces.",
      "Sé explicar cuándo es válido elevar al cuadrado una desigualdad.",
      "Sé resolver inecuaciones del tipo $\\sqrt{A}<B$ y $\\sqrt{A}>B$ analizando el signo de $B$.",
      "Sé resolver inecuaciones con dos raíces elevando al cuadrado.",
      "Sé intersectar la solución algebraica con el dominio.",
      "Sé plantear una inecuación con valor absoluto en un problema de distancias."
    ],
    autoevaluacion: [
      { pregunta: "El dominio de $\\sqrt{x-5}$ es:", opciones: ["$(5,+\\infty)$", "$(-\\infty,5]$", "$[5,+\\infty)$", "$\\R$"], correcta: 2, explicacion: "Se necesita $x-5\\ge0$, es decir, $x\\ge5$." },
      { pregunta: "La solución de $\\sqrt{x-1}<3$ es:", opciones: ["$[1,10)$", "$(-\\infty,10)$", "$[1,10]$", "$(1,10)$"], correcta: 0, explicacion: "Dominio $x\\ge1$; elevando, $x-1<9$, o sea $x<10$. Intersecando: $[1,10)$." },
      { pregunta: "Si $\\sqrt{A}<B$ y $B<0$, entonces:", opciones: ["Se eleva al cuadrado igual", "La solución es $A<B^2$", "La solución es todo el dominio de $A$", "No hay solución"], correcta: 3, explicacion: "Una raíz es no negativa y no puede ser menor que un número negativo; la desigualdad es imposible." },
      { pregunta: "Al resolver $\\sqrt{x+2}\\le x$, se debe exigir además:", opciones: ["$x\\le0$", "$x\\ge0$", "$x\\ge2$", "$x\\le-2$"], correcta: 1, explicacion: "Como la raíz es no negativa, para que sea $\\le x$ se necesita $x\\ge0$." },
      { pregunta: "El conjunto solución de $\\sqrt{2x+3}<x$ es:", opciones: ["$[0,+\\infty)$", "$(-\\infty,-1)\\cup(3,+\\infty)$", "$(3,+\\infty)$", "$[-\\frac32,3)$"], correcta: 2, explicacion: "Se necesita $x>0$; elevando queda $x^2-2x-3>0$, es decir, $x<-1$ o $x>3$. Intersecando con $x>0$: $(3,+\\infty)$." },
      { pregunta: "Si $0\\le a<b$, entonces:", opciones: ["$\\sqrt a=\\sqrt b$", "No se puede comparar", "$\\sqrt a>\\sqrt b$", "$\\sqrt a<\\sqrt b$"], correcta: 3, explicacion: "La raíz cuadrada es estrictamente creciente en $[0,+\\infty)$, así que conserva el orden." }
    ],
    resumen: [
      "Toda inecuación con raíces comienza determinando el dominio: el radicando debe ser no negativo.",
      "Solo se puede elevar al cuadrado cuando ambos lados son no negativos; si el lado derecho es negativo, la desigualdad puede ser imposible o cumplirse automáticamente.",
      "La solución algebraica siempre se intersecta con el dominio, y en problemas de contexto se interpreta el resultado en las unidades y el rango de tiempo razonable."
    ],
    referencias: [
      { titulo: "Clase 07 — Inecuaciones con raíces y aplicaciones (PDF)", ruta: "recursos/clases/clase-07.pdf" },
      { titulo: "Guía 3 — Inecuaciones (PDF)", ruta: "recursos/guias/guia-03-inecuaciones.pdf" },
      { titulo: "Interrogación 3 2025 — Inecuación con raíces (PDF)", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin3-mat1107.pdf" },
      { titulo: "Apunte Clase 5 — Raíces y promedios (PDF)", ruta: "recursos/apuntes/apunte-clase-05.pdf" }
    ]
  });
})();
