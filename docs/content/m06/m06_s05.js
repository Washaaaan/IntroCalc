/* Módulo 6 · Sección 5 — I6–I7: sumatorias, inducción y telescópicas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s05", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 38,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I6–I7: sumatorias, inducción y telescópicas",
    objetivo: "Calcular sumatorias finitas y demostrar identidades por inducción, reconociendo sumas geométricas, telescópicas y aplicaciones del teorema del binomio.",
    conexion: "Necesitas recordar progresiones aritméticas y geométricas, factoriales y el teorema del binomio. Aquí se usan para reducir una suma grande a una expresión cerrada.",
    fuente: "I6–I7 2020–2026 · Clases 19–20 · Apuntes 20–23 · Guía 9",
    prerrequisitos: ["Notación de sumatoria", "Progresión geométrica", "Factorial y coeficiente binomial", "Principio de inducción"],
    teoria: [
      { tipo: "texto", html: "<p>Las evaluaciones de la segunda mitad del curso piden <b>calcular sumas finitas</b> y <b>demostrar identidades</b>. Los tres recursos que más aparecen son: reconocer una <b>progresión geométrica</b>, reescribir la suma como <b>telescópica</b> y usar el <b>teorema del binomio</b>. También se pide inducción, sobre todo para desigualdades con sumas.</p>" },
      { tipo: "definicion", titulo: "Sumatoria y sus propiedades", html: "<p>Para $a_1,\\dots,a_n\\in\\R$,</p>$$\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n.$$<p>Se cumplen $\\sum_{k=1}^{n}(a_k+b_k)=\\sum a_k+\\sum b_k$, $\\sum_{k=1}^{n}c\\,a_k=c\\sum_{k=1}^{n}a_k$ y $\\sum_{k=1}^{n}c=nc$.</p>" },
      { tipo: "teorema", titulo: "Sumas que conviene memorizar", html: "<p>Para $n\\in\\N$:</p>$$\\sum_{k=1}^{n}k=\\frac{n(n+1)}2,\\qquad \\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}6.$$<p>Si $r\\neq1$,</p>$$\\sum_{k=0}^{n}r^k=\\frac{1-r^{n+1}}{1-r}.$$<p>Si $|r|<1$, la suma infinita es $\\frac1{1-r}$.</p>" },
      { tipo: "definicion", titulo: "Suma telescópica", html: "<p>Una suma es <b>telescópica</b> si cada término se escribe como una diferencia $b_{k+1}-b_k$. Entonces</p>$$\\sum_{k=1}^{n}(b_{k+1}-b_k)=b_{n+1}-b_1.$$<p>Todos los términos intermedios se cancelan. La dificultad está en encontrar la sucesión $b_k$.</p>" },
      { tipo: "nota", titulo: "Cómo buscar la telescópica (Clase 19)", html: "<p>Con factoriales, pruebe escribir $a_k=b_{k+1}-b_k$ con $b_k$ conteniendo un factorial o un producto parecido. Con fracciones racionales, use fracciones parciales: $\\frac1{k(k+1)}=\\frac1k-\\frac1{k+1}$. Con logaritmos, use $\\ln\\left(1+\\frac1k\\right)=\\ln(k+1)-\\ln k$.</p>" },
      { tipo: "teorema", titulo: "Inducción para desigualdades con sumas", html: "<p>Si la afirmación involucra $S_n=a_1+\\cdots+a_n$, el paso inductivo casi siempre compara $S_{k+1}$ con $S_k$:</p>$$S_{k+1}=S_k+a_{k+1}.$$<p>Se usa la hipótesis $S_k\\ge c$ (o $S_k\\le c$) y se analiza el signo del término nuevo. Para sumas de cuadrados se expande el cuadrado de la suma y se descartan los términos cruzados no negativos.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una sumatoria es una forma corta de escribir muchas sumas. Una telescópica es como una fila de dominó: cada término empuja al siguiente y solo quedan de pie el primero y el último. Una geométrica es una suma donde cada término es el anterior multiplicado por la misma razón.</div>" },
      { tipo: "tabla", titulo: "Qué técnica usar según la forma de la suma", headers: ["Forma de la suma", "Técnica", "Ejemplo"], rows: [["$r^k$ o $a\\,r^k$", "Progresión geométrica", "$\\sum 3^{k+1}/4^k$"], ["$b_{k+1}-b_k$", "Telescópica", "$\\sum\\ln\\left(1+\\frac1k\\right)$"], ["$k^2$, $k$, constante", "Fórmulas conocidas", "$\\sum(k^2+1)$"], ["Coeficientes $\\binom nk$", "Teorema del binomio", "$\\sum\\binom nk/2^k$"], ["Desigualdad con $S_n$", "Inducción", "$(\\sum a_j)^2\\ge\\sum a_j^2$"]] }
    ],
    ejemplos: [
      {
        titulo: "I7 2023-1 · P2 — Telescópica con factoriales",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=1}^{n}(k^2+1)k!$.</p><p>Sugerencia: muestre primero que $(k^2+1)k!=k(k+1)!-(k-1)k!$.</p>",
        concepto: "Se busca una sucesión $b_k$ tal que el término general sea $b_{k+1}-b_k$. Aquí $b_k=(k-1)k!$, y la suma colapsa.",
        desarrollo: [
          "<b>Paso 1. Verificar la identidad.</b> $k(k+1)!-(k-1)k!=k(k+1)k!-(k-1)k!=[k(k+1)-(k-1)]k!=(k^2+1)k!$.",
          "<b>Paso 2. Identificar $b_k$.</b> Tomando $b_k=(k-1)k!$, el término general es $b_{k+1}-b_k$.",
          "<b>Paso 3. Telescopar.</b> $\\sum_{k=1}^{n}(b_{k+1}-b_k)=b_{n+1}-b_1$.",
          "<b>Paso 4. Evaluar los extremos.</b> $b_{n+1}=n(n+1)!$ y $b_1=0\\cdot1!=0$.",
          "<b>Paso 5. Resultado.</b> La suma vale $n(n+1)!$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}(k^2+1)k!=n(n+1)!$."
      },
      {
        titulo: "Examen 2023-1 · P4 — Telescópica con logaritmos",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=1}^{n}\\ln\\left(1+\\frac1k\\right)$.</p>",
        concepto: "Se usa $\\ln(1+1/k)=\\ln\\left(\\frac{k+1}{k}\\right)=\\ln(k+1)-\\ln k$, que es una diferencia telescópica.",
        desarrollo: [
          "<b>Paso 1. Reescribir.</b> $1+\\dfrac1k=\\dfrac{k+1}{k}$.",
          "<b>Paso 2. Propiedad del logaritmo.</b> $\\ln\\left(\\dfrac{k+1}{k}\\right)=\\ln(k+1)-\\ln k$.",
          "<b>Paso 3. Telescopar.</b> $\\sum_{k=1}^{n}[\\ln(k+1)-\\ln k]=\\ln(n+1)-\\ln1$.",
          "<b>Paso 4. Simplificar.</b> $\\ln1=0$, así que la suma es $\\ln(n+1)$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}\\ln\\left(1+\\frac1k\\right)=\\ln(n+1)$."
      }
    ],
    ejercicios: [
      {
        titulo: "I7 2023-1 · P1 — Progresión geométrica y aritmética a la vez",
        dificultad: "intermedio",
        enunciado: "<p>Sean $\\{a_n\\}$ una progresión geométrica y $\\{b_n\\}$ una progresión aritmética con $a_1=a$, $a_2=10$, $a_3=c$ y $b_1=a-1$, $b_2=8$, $b_3=c-8$. Determine $a$ y $c$.</p>",
        concepto: "En una PG los términos consecutivos tienen razón constante; en una PA la diferencia es constante. Se plantea un sistema de dos ecuaciones.",
        pista: "La PG da $ac=100$; la PA da $a+c=25$.",
        desarrollo: [
          "<b>Paso 1. Condición de PG.</b> $\\dfrac{a_2}{a_1}=\\dfrac{a_3}{a_2}\\Rightarrow\\dfrac{10}{a}=\\dfrac{c}{10}\\Rightarrow ac=100$.",
          "<b>Paso 2. Condición de PA.</b> $b_2-b_1=b_3-b_2\\Rightarrow8-(a-1)=(c-8)-8\\Rightarrow a+c=25$.",
          "<b>Paso 3. Sustituir.</b> $c=25-a$ en $ac=100$: $a(25-a)=100\\Rightarrow a^2-25a+100=0$.",
          "<b>Paso 4. Factorizar.</b> $(a-20)(a-5)=0$, luego $a=20$ o $a=5$.",
          "<b>Paso 5. Pares solución.</b> Si $a=20$, $c=5$; si $a=5$, $c=20$."
        ],
        respuesta: "$(a,c)=(20,5)$ o $(5,20)$."
      },
      {
        titulo: "Examen 2022-2 · P2 — Suma geométrica con coeficiente",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=1}^{n}\\dfrac{3^{k+1}}{4^k}$.</p>",
        concepto: "Se separa el factor constante y se reconoce una progresión geométrica de razón $\\frac34$.",
        pista: "$\\frac{3^{k+1}}{4^k}=3\\left(\\frac34\\right)^k$.",
        desarrollo: [
          "<b>Paso 1. Reescribir.</b> $\\dfrac{3^{k+1}}{4^k}=3\\left(\\dfrac34\\right)^k$.",
          "<b>Paso 2. Factorizar.</b> La suma es $3\\sum_{k=1}^{n}\\left(\\frac34\\right)^k$.",
          "<b>Paso 3. Suma geométrica.</b> $\\sum_{k=1}^{n}r^k=r\\dfrac{1-r^n}{1-r}$ con $r=\\frac34$: $\\frac34\\cdot\\frac{1-(3/4)^n}{1/4}=3\\left(1-\\left(\\frac34\\right)^n\\right)$.",
          "<b>Paso 4. Multiplicar por $3$.</b> $3\\cdot3\\left(1-\\left(\\frac34\\right)^n\\right)=9\\left(1-\\left(\\frac34\\right)^n\\right)$.",
          "<b>Paso 5. Forma equivalente.</b> $9-12\\left(\\frac34\\right)^{n+1}$."
        ],
        respuesta: "$9-9\\left(\\frac34\\right)^n=9-12\\left(\\frac34\\right)^{n+1}$."
      },
      {
        titulo: "Examen 2020-1 · P2 — Inducción con suma de cuadrados",
        dificultad: "avanzado",
        enunciado: "<p>Para $n\\ge1$ y $a_1,\\dots,a_n\\ge0$, demuestre que</p>$$\\left(\\sum_{j=1}^{n}a_j\\right)^2\\ge\\sum_{j=1}^{n}a_j^2.$$",
        concepto: "Inducción. En el paso de $k$ a $k+1$ se expande el cuadrado y se usa que el término cruzado es no negativo, porque $a_j\\ge0$.",
        pista: "Escriba $\\left(\\sum_{j=1}^{k+1}a_j\\right)^2=\\left(\\sum_{j=1}^{k}a_j+a_{k+1}\\right)^2$ y expanda.",
        desarrollo: [
          "<b>Paso 1. Caso base $n=1$.</b> $a_1^2\\ge a_1^2$, verdadero.",
          "<b>Paso 2. Hipótesis de inducción.</b> Supongamos $\\left(\\sum_{j=1}^{k}a_j\\right)^2\\ge\\sum_{j=1}^{k}a_j^2$.",
          "<b>Paso 3. Expandir el caso $k+1$.</b> $\\left(\\sum_{j=1}^{k+1}a_j\\right)^2=\\left(\\sum_{j=1}^{k}a_j\\right)^2+2a_{k+1}\\sum_{j=1}^{k}a_j+a_{k+1}^2$.",
          "<b>Paso 4. Usar la hipótesis.</b> La expresión es $\\ge\\sum_{j=1}^{k}a_j^2+2a_{k+1}\\sum_{j=1}^{k}a_j+a_{k+1}^2$.",
          "<b>Paso 5. Descartar lo no negativo.</b> Como $a_{k+1}\\ge0$ y $\\sum_{j=1}^{k}a_j\\ge0$, el término cruzado es $\\ge0$. Entonces la expresión es $\\ge\\sum_{j=1}^{k}a_j^2+a_{k+1}^2=\\sum_{j=1}^{k+1}a_j^2$.",
          "<b>Paso 6. Concluir.</b> Por inducción, la desigualdad vale para todo $n\\ge1$."
        ],
        respuesta: "$\\left(\\sum_{j=1}^{n}a_j\\right)^2\\ge\\sum_{j=1}^{n}a_j^2$ para todo $n\\ge1$."
      },
      {
        titulo: "I7 2024-1 · P1 — Coeficiente en una expansión",
        dificultad: "intermedio",
        enunciado: "<p>Determine el coeficiente de $x^{20}$ en la expansión de $\\left(x^3-\\dfrac2{x^2}\\right)^{10}$.</p>",
        concepto: "Término general del binomio de Newton. Se iguala el exponente de $x$ al buscado y se calcula el coeficiente correspondiente.",
        pista: "El término $k$-ésimo tiene exponente $30-5k$.",
        desarrollo: [
          "<b>Paso 1. Término general.</b> $\\binom{10}{k}(x^3)^{10-k}\\left(-\\dfrac2{x^2}\\right)^k=\\binom{10}{k}(-2)^k x^{30-3k-2k}$.",
          "<b>Paso 2. Simplificar.</b> El exponente es $30-5k$.",
          "<b>Paso 3. Igualar.</b> $30-5k=20\\Rightarrow k=2$.",
          "<b>Paso 4. Coeficiente.</b> $\\binom{10}{2}(-2)^2=45\\cdot4=180$."
        ],
        respuesta: "$180$."
      },
      {
        titulo: "I6 2024-1 · P2 — Cotas para los cuocientes de Fibonacci",
        dificultad: "avanzado",
        enunciado: "<p>Sea $F_1=F_2=1$ y $F_n=F_{n-1}+F_{n-2}$ para $n\\ge3$. Demuestre que (a) $\\dfrac{F_n}{F_{n-1}}\\le2$ para $n\\ge2$ y (b) $\\dfrac{F_n}{F_{n-1}}\\ge\\dfrac32$ para $n\\ge3$.</p>",
        concepto: "Se usa la recurrencia y el hecho de que la sucesión es no decreciente. La cota superior se aplica luego a un índice anterior para obtener la inferior.",
        pista: "Para (b), aplique (a) a $F_{n-1}/F_{n-2}$.",
        desarrollo: [
          "<b>Paso 1. Positividad y monotonía.</b> Todos los $F_n>0$ y $F_n=F_{n-1}+F_{n-2}\\ge F_{n-1}$.",
          "<b>Paso 2. Cota superior.</b> $\\dfrac{F_n}{F_{n-1}}=\\dfrac{F_{n-1}+F_{n-2}}{F_{n-1}}=1+\\dfrac{F_{n-2}}{F_{n-1}}\\le1+1=2$, pues $F_{n-2}\\le F_{n-1}$.",
          "<b>Paso 3. Aplicar la cota al índice anterior.</b> Para $n\\ge3$, $\\dfrac{F_{n-1}}{F_{n-2}}\\le2$, lo que equivale a $\\dfrac{F_{n-2}}{F_{n-1}}\\ge\\dfrac12$.",
          "<b>Paso 4. Cota inferior.</b> $\\dfrac{F_n}{F_{n-1}}=1+\\dfrac{F_{n-2}}{F_{n-1}}\\ge1+\\dfrac12=\\dfrac32$."
        ],
        respuesta: "$\\frac32\\le\\frac{F_n}{F_{n-1}}\\le2$ para $n\\ge3$."
      },
      {
        titulo: "I7 2023-1 · P3 — Identidad con binomio y sumatoria",
        dificultad: "avanzado",
        enunciado: "<p>Use el teorema del binomio para mostrar que, para $n\\in\\N$ y $x\\neq0$,</p>$$\\frac{(1+x)^{n+1}-1}{(n+1)x}=\\sum_{k=0}^{n}\\frac1{k+1}\\binom nk x^k.$$",
        concepto: "Se expande $(1+x)^{n+1}$, se cancela el término constante y se reindexa. Luego se usa $\\binom{n+1}{k+1}=\\frac{n+1}{k+1}\\binom nk$.",
        pista: "Después de cancelar el $1$, factorice $x$ y cambie $j=k-1$.",
        desarrollo: [
          "<b>Paso 1. Expandir.</b> $(1+x)^{n+1}-1=\\sum_{k=0}^{n+1}\\binom{n+1}{k}x^k-1=\\sum_{k=1}^{n+1}\\binom{n+1}{k}x^k$.",
          "<b>Paso 2. Reindexar.</b> Con $j=k-1$: $\\sum_{j=0}^{n}\\binom{n+1}{j+1}x^{j+1}$.",
          "<b>Paso 3. Factorizar $x$.</b> Queda $x\\sum_{j=0}^{n}\\binom{n+1}{j+1}x^j$.",
          "<b>Paso 4. Usar la identidad del coeficiente.</b> $\\binom{n+1}{j+1}=\\dfrac{n+1}{j+1}\\binom nj$.",
          "<b>Paso 5. Sustituir.</b> La expresión es $x(n+1)\\sum_{j=0}^{n}\\dfrac1{j+1}\\binom njx^j$.",
          "<b>Paso 6. Dividir.</b> Al dividir por $(n+1)x$ se obtiene la identidad pedida."
        ],
        respuesta: "$\\dfrac{(1+x)^{n+1}-1}{(n+1)x}=\\displaystyle\\sum_{k=0}^{n}\\dfrac1{k+1}\\binom nk x^k$."
      }
    ],
    erroresComunes: [
      "Confundir $\\sum_{k=1}^{n}r^k$ con $\\sum_{k=0}^{n}r^k$: la primera parte en $r$, no en $1$.",
      "En una telescópica, equivocarse en los índices y conservar un término interior.",
      "En inducción, usar la tesis $p(k+1)$ como si fuera la hipótesis; eso es circular.",
      "Al expandir $(\\sum a_j)^2$, olvidar los términos cruzados $2a_ia_j$.",
      "Calcular el coeficiente binomial sin ajustar el signo del término negativo, como en $\\left(x^3-\\frac2{x^2}\\right)^{10}$."
    ],
    checklist: [
      "Reconozco una progresión geométrica y aplico su fórmula con el índice correcto.",
      "Transformo una suma en telescópica identificando $b_{k+1}-b_k$.",
      "Uso factoriales y coeficientes binomiales sin errores de índice.",
      "Demuestro por inducción con caso base, hipótesis y paso inductivo explícitos.",
      "Expando correctamente cuadrados de sumatorias y justifico el signo de los términos cruzados.",
      "Verifico la fórmula obtenida evaluando en un valor pequeño de $n$."
    ],
    autoevaluacion: [
      { pregunta: "$\\displaystyle\\sum_{k=1}^{n}\\left(\\frac12\\right)^k$ vale:", opciones: ["$1-\\left(\\frac12\\right)^n$", "$2-\\left(\\frac12\\right)^{n-1}$", "$\\frac{1-(1/2)^{n+1}}{1/2}$", "$\\left(\\frac12\\right)^n$"], correcta: 0, explicacion: "$\\sum_{k=1}^n r^k=r\\frac{1-r^n}{1-r}=\\frac12\\cdot2(1-(1/2)^n)=1-(1/2)^n$." },
      { pregunta: "La suma $\\sum_{k=1}^{n}\\left(\\frac1k-\\frac1{k+1}\\right)$ es:", opciones: ["$\\frac1n$", "$1-\\frac1{n+1}$", "$\\frac1{n+1}$", "$n$"], correcta: 1, explicacion: "Es telescópica con $b_k=\\frac1k$: queda $b_1-b_{n+1}=1-\\frac1{n+1}$." },
      { pregunta: "El coeficiente de $x^2$ en $(1+x)^5$ es:", opciones: ["$5$", "$10$", "$20$", "$1$"], correcta: 1, explicacion: "$\\binom52=10$." },
      { pregunta: "En una inducción, el caso base para una propiedad que empieza en $n=3$ es:", opciones: ["$n=1$", "$n=2$", "$n=3$", "cualquier $n$"], correcta: 2, explicacion: "El caso base debe ser el primer valor para el cual se afirma la propiedad." },
      { pregunta: "$\\sum_{k=1}^{n}k$ vale:", opciones: ["$n^2$", "$\\frac{n(n+1)}2$", "$\\frac{n(n-1)}2$", "$n(n+1)$"], correcta: 1, explicacion: "Es la suma de los primeros $n$ naturales." },
      { pregunta: "Si $r=\\frac34$, $\\sum_{k=0}^{n}r^k$ es:", opciones: ["$\\frac{1-(3/4)^{n+1}}{1/4}$", "$\\frac{1-(3/4)^n}{1/4}$", "$\\frac{3/4}{1-(3/4)^n}$", "$4\\left(\\frac34\\right)^n$"], correcta: 0, explicacion: "La fórmula es $\\frac{1-r^{n+1}}{1-r}$; con $1-r=\\frac14$." }
    ],
    resumen: [
      "Toda suma finita se ataca reconociendo su estructura: geométrica, telescópica, fórmula conocida o binomio.",
      "En una telescópica solo sobreviven el primer y el último término; el trabajo está en encontrar la diferencia.",
      "La inducción con sumas se apoya en comparar $S_{k+1}$ con $S_k$ y usar la hipótesis de inducción."
    ],
    referencias: [
      { titulo: "Clase 19 — Sumas finitas (PDF)", ruta: "recursos/clases/clase-19.pdf" },
      { titulo: "I7 2023-1 — Solución Interrogación 7", ruta: "recursos/pruebas/PRUEBAS/2023-1/i7.pdf" },
      { titulo: "I7 2024-1 — Solución Interrogación 7", ruta: "recursos/pruebas/PRUEBAS/2024-1/i7-mat1107-2024.pdf" },
      { titulo: "Examen 2022-2 — Solución Examen", ruta: "recursos/pruebas/PRUEBAS/2022-2/exmat11072022s2.pdf" },
      { titulo: "Guía 9 — Sucesiones y binomio", ruta: "recursos/guias/guia-09-sucesiones-binomio.pdf" },
      { titulo: "Apunte 20 — Sumatorias y telescópicas", ruta: "recursos/apuntes/apunte-clase-20.pdf" }
    ]
  });
})();
