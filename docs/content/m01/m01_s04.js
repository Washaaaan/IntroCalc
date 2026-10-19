/* Módulo 1 · Sección 4 — Inecuaciones: puntos críticos y tabla de signos */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s04", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 4,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Inecuaciones: puntos críticos y tabla de signos",
    objetivo: "Resolver inecuaciones polinómicas factorizables mediante el método de puntos críticos y tabla de signos, y expresar la solución como unión de intervalos.",
    conexion: "Ya sabes comparar números y resolver desigualdades lineales. Ahora las incógnitas aparecerán en productos y potencias, así que necesitaremos estudiar el signo de varios factores a la vez.",
    fuente: "Clases 05–06 · Apunte Clase 3 · Guía 3",
    prerrequisitos: ["Intervalos en $\\R$", "Factorización de polinomios", "Desigualdades lineales", "Regla de los signos"],
    teoria: [
      { tipo: "texto", html: "<p>Una <b>inecuación</b> es una desigualdad que contiene una incógnita. Resolverla no es encontrar un número, sino <b>todos</b> los números reales que hacen verdadera la desigualdad. En esta sección estudiaremos inecuaciones que se pueden escribir como un producto de factores lineales comparado con cero, por ejemplo $(x+2)(x-1)>0$.</p>" },
      { tipo: "definicion", titulo: "Intervalos", html: "<p>Sean $a,b\\in\\R$ con $a\\le b$. Los intervalos son subconjuntos de la recta:</p>$$(a,b)=\\{x:a<x<b\\},\\qquad [a,b]=\\{x:a\\le x\\le b\\},$$$$(a,b]=\\{x:a<x\\le b\\},\\qquad [a,b)=\\{x:a\\le x<b\\}.$$<p>También usamos intervalos no acotados: $(-\\infty,a]$, $(-\\infty,a)$, $[a,+\\infty)$ y $(a,+\\infty)$. El símbolo $\\infty$ no es un número: solo indica que el intervalo sigue sin detenerse.</p>" },
      { tipo: "tabla", titulo: "Notación de intervalos: corchete y paréntesis", headers: ["Intervalo", "Incluye el extremo", "Se dibuja con"], rows: [["$[a,b]$", "Ambos", "Punto relleno en $a$ y en $b$"], ["$(a,b)$", "Ninguno", "Punto abierto en $a$ y en $b$"], ["$[a,b)$", "Solo $a$", "Relleno en $a$, abierto en $b$"], ["$(a,b]$", "Solo $b$", "Abierto en $a$, relleno en $b$"], ["$(-\\infty,a]$", "Solo $a$", "Flecha a la izquierda y punto relleno"]] },
      { tipo: "definicion", titulo: "Inecuación y conjunto solución", html: "<p>Una <b>inecuación de una incógnita</b> es una desigualdad que puede ser verdadera o falsa según el valor que se asigne a la incógnita. <b>Resolverla</b> consiste en determinar todos los números reales para los cuales es verdadera. Ese conjunto se llama <b>conjunto solución</b> y se denota $S$.</p><p>Dos inecuaciones son <b>equivalentes</b> si tienen el mismo conjunto solución. Podemos transformar una inecuación sumando o restando lo mismo, o multiplicando por un número positivo; si multiplicamos por un negativo, debemos invertir la desigualdad.</p>" },
      { tipo: "definicion", titulo: "Método de puntos críticos y tabla de signos", html: "<p>Para resolver una inecuación del tipo $P(x)<0$, $P(x)>0$, $P(x)\\le 0$ o $P(x)\\ge 0$, donde $P$ es un producto de factores lineales:</p><ol><li><b>Igualar a cero y factorizar.</b> Reescribir la inecuación para que un lado sea $0$ y el otro un producto de factores.</li><li><b>Encontrar los puntos críticos.</b> Resolver cada factor igual a cero. Para $ax+b$, el punto crítico es $x=-\\dfrac ba$.</li><li><b>Ordenar y dividir la recta.</b> Ubicar los puntos críticos de menor a mayor y formar los intervalos entre ellos.</li><li><b>Hacer la tabla de signos.</b> Elegir un valor de prueba en cada intervalo y determinar el signo de cada factor y del producto.</li><li><b>Elegir los intervalos.</b> Seleccionar aquellos donde el signo cumple la desigualdad, cuidando si los extremos se incluyen o no.</li></ol>" },
      { tipo: "teorema", titulo: "El signo cambia en los puntos críticos", html: "<p>Un factor lineal $ax+b$ tiene signo constante en cada intervalo determinado por su raíz y cambia de signo al cruzar esa raíz. Por lo tanto, el producto de varios factores lineales también tiene signo constante en cada intervalo entre puntos críticos consecutivos. Esto justifica que baste con probar <b>un</b> valor por intervalo en la tabla de signos.</p><p><b>Importante:</b> si un factor aparece elevado a una potencia par, como $(x-1)^2$, su signo es no negativo en ambos lados de $x=1$; no cambia de signo al cruzar $1$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> imagina que la expresión es un producto de interruptores que pueden estar en $+$ o en $-$. Cada punto crítico es el lugar donde uno de los interruptores cambia. La tabla de signos es una forma ordenada de probar qué combinación queda en cada tramo de la recta. No necesitas probar todos los números: con uno por tramo basta.</div>" },
      { tipo: "tabla", titulo: "Tabla de signos para $(x+2)(x-1)$", headers: ["Intervalo", "Signo de $x+2$", "Signo de $x-1$", "Signo del producto"], rows: [["$(-\\infty,-2)$", "$-$", "$-$", "$+$"], ["$(-2,1)$", "$+$", "$-$", "$-$"], ["$(1,+\\infty)$", "$+$", "$+$", "$+$"]] },
      { tipo: "grafico", spec: { tipo: "recta_numerica", titulo: "Solución de (x+2)(x−1) > 0", rango: [-5, 4], intervalos: [ { a: -5, b: -2, abiertoB: true, label: "(−∞, −2)", color: "#1e5eff" }, { a: 1, b: 4, abiertoA: true, label: "(1, +∞)", color: "#1e5eff" } ], puntos: [ { x: -2, label: "-2", abierto: true }, { x: 1, label: "1", abierto: true } ] } },
      { tipo: "nota", titulo: "El método en la clase y en la guía (Clase 6 · Guía 3)", html: "<p>La Clase 6 presenta exactamente estos cuatro pasos y los aplica a $x^2+x>2$, $\\dfrac{2x+1}{x+2}\\le 1$ y $\\dfrac{x^2-8x+15}{x-4}<0$. La Guía 3 propone además $-2x^2+8x+10>0$, $x^2\\le 5x-6$ y $x(x-1)^2(x-3)<0$. Fíjate en que el método funciona igual para productos y para cuocientes, pero en los cuocientes hay que excluir los ceros del denominador.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Una cuadrática que se factoriza",
        enunciado: "<p>Resuelva $x^2+x>2$.</p>",
        concepto: "Se lleva todo a un lado, se factoriza y se aplica la tabla de signos. La desigualdad es estricta, así que los puntos críticos no se incluyen.",
        desarrollo: [
          "<b>Paso 1.</b> Restamos $2$: $x^2+x-2>0$.",
          "<b>Paso 2.</b> Factorizamos: $(x+2)(x-1)>0$.",
          "<b>Paso 3.</b> Puntos críticos: $x=-2$ y $x=1$.",
          "<b>Paso 4.</b> Tabla de signos: en $(-\\infty,-2)$ el producto es positivo; en $(-2,1)$ es negativo; en $(1,+\\infty)$ es positivo.",
          "<b>Paso 5.</b> Buscamos signo positivo, con desigualdad estricta: $S=(-\\infty,-2)\\cup(1,+\\infty)$.",
          "<b>Paso 6.</b> Verificamos con $x=-3$: $9-3-2=4>0$; con $x=0$: $-2>0$ es falso; con $x=2$: $4+2-2=4>0$."
        ],
        respuesta: "$S=(-\\infty,-2)\\cup(1,+\\infty)$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de x²+x−2>0", rango: [-5, 4], intervalos: [ { a: -5, b: -2, abiertoB: true, label: "(−∞, −2)", color: "#1e5eff" }, { a: 1, b: 4, abiertoA: true, label: "(1, +∞)", color: "#1e5eff" } ], puntos: [ { x: -2, label: "-2", abierto: true }, { x: 1, label: "1", abierto: true } ] }
      },
      {
        titulo: "Inecuación con coeficiente principal negativo",
        enunciado: "<p>Resuelva $-2x^2+8x+10>0$.</p>",
        concepto: "Conviene multiplicar por $-1$ para dejar el coeficiente de $x^2$ positivo, recordando que la desigualdad se invierte. Luego se factoriza y se usa la tabla de signos.",
        desarrollo: [
          "<b>Paso 1.</b> Multiplicamos por $-1$ e invertimos: $2x^2-8x-10<0$.",
          "<b>Paso 2.</b> Dividimos por $2>0$: $x^2-4x-5<0$.",
          "<b>Paso 3.</b> Factorizamos: $(x-5)(x+1)<0$.",
          "<b>Paso 4.</b> Puntos críticos: $x=-1$ y $x=5$.",
          "<b>Paso 5.</b> El producto es negativo entre las raíces: $S=(-1,5)$.",
          "<b>Paso 6.</b> Verificamos con $x=0$: $-0+0+10=10>0$, correcto. Con $x=6$: $-72+48+10=-14>0$, falso."
        ],
        respuesta: "$S=(-1,5)$."
      },
      {
        titulo: "Un factor repetido que no cambia el signo",
        enunciado: "<p>Resuelva $x(x-1)^2(x-3)<0$.</p>",
        concepto: "Se aplica la tabla de signos con tres puntos críticos, pero el factor $(x-1)^2$ es siempre no negativo, así que no cambia el signo al cruzar $x=1$.",
        desarrollo: [
          "<b>Paso 1.</b> La expresión ya está factorizada. Puntos críticos: $x=0$, $x=1$ y $x=3$.",
          "<b>Paso 2.</b> En $(-\\infty,0)$: $x<0$, $(x-1)^2>0$ y $x-3<0$; el producto es positivo.",
          "<b>Paso 3.</b> En $(0,1)$: $x>0$, $(x-1)^2>0$ y $x-3<0$; el producto es negativo.",
          "<b>Paso 4.</b> En $(1,3)$: $x>0$, $(x-1)^2>0$ y $x-3<0$; el producto sigue negativo.",
          "<b>Paso 5.</b> En $(3,+\\infty)$: todos los factores son positivos; el producto es positivo.",
          "<b>Paso 6.</b> Buscamos signo negativo y estricto: $S=(0,1)\\cup(1,3)$. El punto $1$ se excluye porque allí la expresión vale $0$, no es negativa."
        ],
        respuesta: "$S=(0,1)\\cup(1,3)$."
      }
    ],
    ejercicios: [
      {
        titulo: "Producto de dos factores",
        dificultad: "basico",
        enunciado: "<p>Resuelva $(x-1)(x+4)\\le 0$.</p>",
        concepto: "Se usa la tabla de signos y se incluyen los extremos porque la desigualdad es no estricta.",
        pista: "Los puntos críticos son $1$ y $-4$; ordena de menor a mayor.",
        desarrollo: [
          "Puntos críticos: $x=-4$ y $x=1$.",
          "En $(-\\infty,-4)$ el producto es positivo; en $(-4,1)$ es negativo; en $(1,+\\infty)$ es positivo.",
          "Buscamos signo negativo o cero, así que incluimos ambos extremos.",
          "Verificación con $x=0$: $(-1)(4)=-4\\le 0$, correcto."
        ],
        respuesta: "$S=[-4,1]$."
      },
      {
        titulo: "Diferencia de cuadrados",
        dificultad: "basico",
        enunciado: "<p>Resuelva $9-x^2\\ge 0$.</p>",
        concepto: "Se factoriza como diferencia de cuadrados y se estudia el signo del producto.",
        pista: "Escribe $9-x^2=(3-x)(3+x)$.",
        desarrollo: [
          "Factorizamos: $(3-x)(3+x)\\ge 0$, o equivalentemente $-(x-3)(x+3)\\ge 0$.",
          "Multiplicando por $-1$: $(x-3)(x+3)\\le 0$.",
          "Puntos críticos: $x=-3$ y $x=3$. El producto es negativo entre las raíces.",
          "Como la desigualdad es no estricta, incluimos los extremos."
        ],
        respuesta: "$S=[-3,3]$."
      },
      {
        titulo: "Factor repetido con desigualdad no estricta",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $(x+1)(x-2)^2\\le 0$.</p>",
        concepto: "Se analiza el signo de cada factor; una potencia par es siempre no negativa y solo se anula en su raíz.",
        pista: "El signo del producto, fuera de $x=2$, lo decide el factor $x+1$. No olvides el caso en que el producto vale $0$.",
        desarrollo: [
          "El factor $(x-2)^2$ es mayor o igual que $0$ para todo $x$, y vale $0$ solo en $x=2$.",
          "Para $x\\neq2$, el signo del producto es el signo de $x+1$.",
          "Entonces el producto es negativo cuando $x+1<0$, es decir, $x<-1$.",
          "El producto es cero cuando $x+1=0$ o $x-2=0$, es decir, en $x=-1$ y $x=2$.",
          "Uniendo ambas posibilidades: $S=(-\\infty,-1]\\cup\\{2\\}$.",
          "Verificación con $x=0$: $(1)(4)=4\\le0$ es falso; con $x=-2$: $(-1)(16)=-16\\le0$, correcto."
        ],
        respuesta: "$S=(-\\infty,-1]\\cup\\{2\\}$."
      },
      {
        titulo: "Cúbica factorizable",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $x^3-x\\ge 0$.</p>",
        concepto: "Se factoriza primero $x$ y luego la diferencia de cuadrados; se incluyen los ceros porque la desigualdad es no estricta.",
        pista: "Factoriza $x^3-x=x(x^2-1)=x(x-1)(x+1)$.",
        desarrollo: [
          "Factorizamos: $x(x-1)(x+1)\\ge 0$.",
          "Puntos críticos ordenados: $-1$, $0$ y $1$.",
          "En $(-\\infty,-1)$: $(-)(-)(-)=-$.",
          "En $(-1,0)$: $(-)(-)(+)=+$.",
          "En $(0,1)$: $(+)(-)(+)=-$.",
          "En $(1,+\\infty)$: $(+)(+)(+)=+$.",
          "Buscamos signo positivo o cero: $[-1,0]\\cup[1,+\\infty)$."
        ],
        respuesta: "$S=[-1,0]\\cup[1,+\\infty)$."
      },
      {
        titulo: "Una bicuadrática",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $x^4-5x^2+4<0$.</p>",
        concepto: "Se factoriza como producto de dos diferencias de cuadrados y se analiza el signo de $x^2-1$ y $x^2-4$.",
        pista: "Escribe $x^4-5x^2+4=(x^2-1)(x^2-4)$, y luego factoriza cada paréntesis.",
        desarrollo: [
          "Factorizamos: $(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)<0$.",
          "Puntos críticos ordenados: $-2$, $-1$, $1$ y $2$.",
          "Analizando los signos en los cinco intervalos, el producto es negativo en $(-2,-1)$ y en $(1,2)$.",
          "Otra forma: la desigualdad equivale a $1<x^2<4$, es decir, $|x|$ está entre $1$ y $2$.",
          "Eso entrega exactamente $x\\in(-2,-1)\\cup(1,2)$."
        ],
        respuesta: "$S=(-2,-1)\\cup(1,2)$."
      }
    ],
    erroresComunes: [
      "Resolver $x^2>a$ escribiendo solo $x>\\sqrt a$ y olvidar la rama negativa $x<-\\sqrt a$.",
      "Incluir los puntos críticos cuando la desigualdad es estricta ($<$ o $>$).",
      "Multiplicar por $-1$ sin invertir el sentido de la desigualdad.",
      "Pensar que todo factor al cuadrado cambia de signo en su raíz; $(x-1)^2$ es no negativo a ambos lados.",
      "Dividir ambos lados por una expresión que contiene $x$ sin analizar su signo, lo que puede invertir la desigualdad sin darse cuenta."
    ],
    checklist: [
      "Sé llevar una inecuación a la forma producto comparado con cero.",
      "Sé encontrar y ordenar los puntos críticos de un producto de factores lineales.",
      "Sé construir una tabla de signos y leer de ella el conjunto solución.",
      "Distingo cuándo incluir y cuándo excluir los extremos según el tipo de desigualdad.",
      "Reconozco que un factor con potencia par no cambia de signo en su raíz.",
      "Sé expresar la solución como unión de intervalos."
    ],
    autoevaluacion: [
      { pregunta: "El conjunto solución de $(x-2)(x+3)<0$ es:", opciones: ["$(-\\infty,-3)\\cup(2,\\infty)$", "$(-3,2)$", "$[-3,2]$", "$(-\\infty,2)$"], correcta: 1, explicacion: "El producto de dos factores es negativo entre las raíces $-3$ y $2$, sin incluirlas porque la desigualdad es estricta." },
      { pregunta: "Los puntos críticos de $(x+1)(x-4)(x-6)$ son:", opciones: ["$1,4,6$", "$-1,4,6$", "$-1,-4,-6$", "$1,-4,6$"], correcta: 1, explicacion: "Cada factor se anula en $x=-1$, $x=4$ y $x=6$." },
      { pregunta: "Si una inecuación tiene solución $x\\le 2$, el intervalo correspondiente es:", opciones: ["$(2,+\\infty)$", "$(-\\infty,2)$", "$(-\\infty,2]$", "$[2,+\\infty)$"], correcta: 2, explicacion: "$x\\le 2$ incluye el $2$ y se extiende hacia la izquierda: $(-\\infty,2]$." },
      { pregunta: "El conjunto solución de $x^2\\le 9$ es:", opciones: ["$(-\\infty,3]$", "$[-3,3]$", "$[0,3]$", "$(-\\infty,-3]\\cup[3,\\infty)$"], correcta: 1, explicacion: "$x^2\\le 9$ equivale a $-3\\le x\\le 3$, es decir, $[-3,3]$." },
      { pregunta: "En la expresión $(x-1)^2(x+2)$, ¿qué ocurre con el signo al pasar por $x=1$?", opciones: ["Cambia de positivo a negativo", "Cambia de negativo a positivo", "No cambia, porque el factor está al cuadrado", "Se indetermina"], correcta: 2, explicacion: "$(x-1)^2\\ge 0$ a ambos lados de $1$, así que no produce cambio de signo; solo se anula en $x=1$." },
      { pregunta: "Al multiplicar una inecuación por $-2$, se debe:", opciones: ["Mantener el mismo sentido", "Invertir el sentido de la desigualdad", "Cambiar solo el lado izquierdo", "Elevar al cuadrado"], correcta: 1, explicacion: "Multiplicar por un número negativo invierte la desigualdad, por los axiomas de orden." }
    ],
    resumen: [
      "Para resolver una inecuación se lleva todo a un lado, se factoriza y se identifican los puntos críticos.",
      "La tabla de signos resume el signo de la expresión en cada intervalo; basta probar un valor por intervalo.",
      "Los extremos se incluyen solo si la desigualdad es $\\le$ o $\\ge$; además, un factor con potencia par no cambia el signo."
    ],
    referencias: [
      { titulo: "Clase 05 — Inecuaciones (PDF)", ruta: "recursos/clases/clase-05.pdf" },
      { titulo: "Clase 06 — Inecuaciones y tabla de signos (PDF)", ruta: "recursos/clases/clase-06.pdf" },
      { titulo: "Apunte Clase 3 — Inecuaciones (PDF)", ruta: "recursos/apuntes/apunte-clase-03.pdf" },
      { titulo: "Guía 3 — Inecuaciones (PDF)", ruta: "recursos/guias/guia-03-inecuaciones.pdf" }
    ]
  });
})();
