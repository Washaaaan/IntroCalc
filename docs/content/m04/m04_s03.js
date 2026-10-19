/* Módulo 4 · Sección 3 — Sumas finitas y telescópicas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m04_s03", modulo: 4, moduloNombre: "Módulo 4 · Sucesiones, sumatorias y binomio", orden: 24,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Sumas finitas y telescópicas",
    objetivo: "Escribir sumas con notación sigma, aplicar sus propiedades de linealidad, calcular sumas mediante fórmulas cerradas y reconocer y resolver sumas telescópicas y geométricas.",
    conexion: "Necesitas recordar la sucesión de sumas parciales de la sección 1 y el término general de una progresión geométrica de la sección 2. Aquí escribiremos esas sumas de forma compacta y aprenderemos a calcularlas sin sumar término por término.",
    fuente: "Clase 19 · Apunte 20 · Guía 9 · I6 2020 · Stewart §12.1",
    prerrequisitos: ["Sucesiones y término general", "Progresión geométrica", "Inducción matemática"],
    teoria: [
      { tipo: "texto", html: "<p>Sumar pocos números es fácil, pero sumar cien o mil términos ya no lo es. La <b>notación sigma</b> permite escribir una suma larga de manera compacta, y las <b>fórmulas cerradas</b> permiten calcularla sin recorrer todos sus términos. En esta sección veremos tres herramientas: la linealidad de la suma, las sumas básicas de potencias y el método telescópico.</p>" },
      { tipo: "definicion", titulo: "Notación sigma", html: "<p>Dada una sucesión $\\{a_k\\}$, la suma de sus primeros $n$ términos se escribe</p>$$\\sum_{k=1}^{n}a_k=a_1+a_2+\\cdots+a_n.$$<p>La letra griega $\\Sigma$ (sigma mayúscula) indica una suma. El símbolo $k$ es el <b>índice</b> o contador; el valor $k=1$ es el <b>límite inferior</b> y $n$ el <b>límite superior</b>.</p><p>La expresión se lee: “suma de $a_k$ desde $k=1$ hasta $k=n$”. El índice es mudo: da lo mismo escribir $\\sum_{k=1}^{n}a_k$ que $\\sum_{j=1}^{n}a_j$.</p>" },
      { tipo: "nota", titulo: "Leer y escribir sumas (Clase 19, Apunte 20)", html: "<p>Por ejemplo,</p>$$\\sum_{k=1}^{5}k^2=1^2+2^2+3^2+4^2+5^2=55,$$$$\\sum_{i=5}^{10}i=5+6+7+8+9+10=45,$$$$\\sum_{k=1}^{6}2=2+2+2+2+2+2=12.$$<p>Observa que en la última suma el sumando no depende de $k$: se repite el mismo número tantas veces como indica la cantidad de índices.</p>" },
      { tipo: "teorema", titulo: "Propiedades de la sumatoria", html: "<p>Sean $\\{a_k\\}$ y $\\{b_k\\}$ sucesiones y $c\\in\\R$ una constante. Entonces:</p><ol><li>$\\displaystyle\\sum_{k=1}^{n}(a_k+b_k)=\\sum_{k=1}^{n}a_k+\\sum_{k=1}^{n}b_k$.</li><li>$\\displaystyle\\sum_{k=1}^{n}c\\,a_k=c\\sum_{k=1}^{n}a_k$.</li><li>$\\displaystyle\\sum_{k=1}^{n}c=n\\,c$.</li><li>$\\displaystyle\\sum_{k=m}^{n}a_k=\\sum_{k=1}^{n}a_k-\\sum_{k=1}^{m-1}a_k$.</li></ol><p>Estas propiedades son la versión “sumatoria” de la distributividad y la asociatividad de la suma.</p>" },
      { tipo: "teorema", titulo: "Sumas básicas y demostración por inducción", html: "<p>Para todo $n\\in\\N$:</p>$$\\sum_{k=1}^{n}k=\\frac{n(n+1)}{2},\\qquad \\sum_{k=1}^{n}k^2=\\frac{n(n+1)(2n+1)}{6},\\qquad \\sum_{k=1}^{n}k^3=\\left(\\frac{n(n+1)}{2}\\right)^2.$$<p><b>Demostración por inducción de la primera fórmula.</b> Sea $P(n):\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$.</p><p><b>Caso base:</b> para $n=1$, $\\sum_{k=1}^{1}k=1=\\dfrac{1\\cdot2}{2}$.</p><p><b>Paso inductivo:</b> supongamos que $P(m)$ es verdadera. Entonces</p>$$\\sum_{k=1}^{m+1}k=\\left(\\sum_{k=1}^{m}k\\right)+(m+1)=\\frac{m(m+1)}{2}+(m+1).$$<p>Sacando factor común $(m+1)$:</p>$$=\\frac{m(m+1)+2(m+1)}{2}=\\frac{(m+1)(m+2)}{2}=\\frac{(m+1)((m+1)+1)}{2}.$$<p>Esto es exactamente $P(m+1)$. Por inducción, la fórmula vale para todo $n\\in\\N$.</p>" },
      { tipo: "teorema", titulo: "Propiedad telescópica", html: "<p>Si $\\{a_k\\}$ es una sucesión, entonces</p>$$\\sum_{k=1}^{n}(a_k-a_{k-1})=a_n-a_0.$$<p>Más generalmente,</p>$$\\sum_{k=m}^{n}(a_k-a_{k+1})=a_m-a_{n+1}.$$<p><b>¿Por qué funciona?</b> Al desarrollar la suma, cada término intermedio aparece una vez con signo $+$ y otra con signo $-$, por lo que se cancela:</p>$$(a_1-a_0)+(a_2-a_1)+\\cdots+(a_n-a_{n-1})=a_n-a_0.$$<p>Sobreviven solamente el último término positivo y el primero negativo, como en un telescopio que se pliega.</p>" },
      { tipo: "teorema", titulo: "Suma geométrica finita", html: "<p>Para $r\\ne1$,</p>$$\\sum_{k=0}^{n}r^k=1+r+r^2+\\cdots+r^n=\\frac{1-r^{n+1}}{1-r}.$$<p><b>Deducción paso a paso.</b> Sea $S=1+r+\\cdots+r^n$. Multiplicamos por $r$:</p>$$rS=r+r^2+\\cdots+r^{n}+r^{n+1}.$$<p>Restamos: $S-rS=1-r^{n+1}$, pues todos los términos intermedios se cancelan. Entonces $S(1-r)=1-r^{n+1}$ y, como $r\\ne1$, dividimos por $1-r$ para obtener la fórmula.</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "Sumas parciales de 1/2ᵏ: se acercan a 1", terminos: [0.5, 0.75, 0.875, 0.9375, 0.96875, 0.984375, 0.9921875], limite: 1, label: "sₙ = 1 − 1/2ⁿ", ylabel: "sₙ" } },
      { tipo: "tabla", titulo: "Caja de herramientas de sumatorias", headers: ["Fórmula", "Condición"], rows: [["$\\sum_{k=1}^{n}c=nc$", "$c$ constante"], ["$\\sum_{k=1}^{n}k=\\dfrac{n(n+1)}{2}$", "$n\\ge1$"], ["$\\sum_{k=1}^{n}k^2=\\dfrac{n(n+1)(2n+1)}{6}$", "$n\\ge1$"], ["$\\sum_{k=1}^{n}k^3=\\left(\\dfrac{n(n+1)}{2}\\right)^2$", "$n\\ge1$"], ["$\\sum_{k=m}^{n}(a_k-a_{k+1})=a_m-a_{n+1}$", "telescópica"], ["$\\sum_{k=0}^{n}r^k=\\dfrac{1-r^{n+1}}{1-r}$", "$r\\ne1$"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> la notación sigma es una forma abreviada de escribir “suma estos términos variando el índice”. Una suma telescópica es como una fila de dominó: cada pieza empuja a la siguiente y al final solo quedan la primera y la última. La suma geométrica se calcula con un truco: multiplicar por $r$ y restar para que casi todo se borre.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Suma de cuadrados y términos lineales",
        enunciado: "<p>Calcule $$\\sum_{k=1}^{20}(3k^2-2k+1).$$</p>",
        concepto: "Se aplican linealidad de la sumatoria y las fórmulas cerradas para $\\sum k^2$ y $\\sum k$.",
        desarrollo: [
          "<b>Paso 1.</b> Separamos: $\\displaystyle\\sum_{k=1}^{20}(3k^2-2k+1)=3\\sum_{k=1}^{20}k^2-2\\sum_{k=1}^{20}k+\\sum_{k=1}^{20}1$.",
          "<b>Paso 2.</b> $\\displaystyle\\sum_{k=1}^{20}k^2=\\frac{20\\cdot21\\cdot41}{6}=2870$.",
          "<b>Paso 3.</b> $\\displaystyle\\sum_{k=1}^{20}k=\\frac{20\\cdot21}{2}=210$ y $\\displaystyle\\sum_{k=1}^{20}1=20$.",
          "<b>Paso 4.</b> Reemplazamos: $3\\cdot2870-2\\cdot210+20=8610-420+20=8210$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{20}(3k^2-2k+1)=8210$."
      },
      {
        titulo: "Una telescópica con fracciones parciales",
        enunciado: "<p>Calcule, para $n\\ge1$, $$\\sum_{k=1}^{n}\\frac{1}{k(k+1)}.$$</p>",
        concepto: "Se descompone el sumando como diferencia de dos términos consecutivos y se aplica la propiedad telescópica.",
        desarrollo: [
          "<b>Paso 1.</b> Buscamos $A,B$ tales que $\\dfrac{1}{k(k+1)}=\\dfrac{A}{k}-\\dfrac{B}{k+1}$. Desarrollando se obtiene $A=1$ y $B=1$.",
          "<b>Paso 2.</b> Entonces $\\dfrac{1}{k(k+1)}=\\dfrac1k-\\dfrac1{k+1}$.",
          "<b>Paso 3.</b> La suma queda $$\\sum_{k=1}^{n}\\left(\\frac1k-\\frac1{k+1}\\right).$$",
          "<b>Paso 4.</b> Desarrollamos: $\\left(1-\\frac12\\right)+\\left(\\frac12-\\frac13\\right)+\\cdots+\\left(\\frac1n-\\frac1{n+1}\\right)$.",
          "<b>Paso 5.</b> Todos los términos intermedios se cancelan; quedan $1-\\dfrac1{n+1}=\\dfrac{n}{n+1}$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}=\\frac{n}{n+1}$."
      },
      {
        titulo: "Suma geométrica con exponentes distintos",
        enunciado: "<p>Calcule, para $n\\ge1$, $$\\sum_{k=1}^{n}\\frac{3^{k+1}}{4^k}.$$</p>",
        concepto: "Se reescribe el término como una potencia de $r=3/4$ y se usa la suma geométrica, cuidando que el índice parte en $k=1$ y no en $k=0$.",
        desarrollo: [
          "<b>Paso 1.</b> $\\dfrac{3^{k+1}}{4^k}=\\dfrac{3\\cdot3^k}{4^k}=3\\left(\\dfrac34\\right)^k$.",
          "<b>Paso 2.</b> Entonces la suma es $3\\displaystyle\\sum_{k=1}^{n}\\left(\\frac34\\right)^k$.",
          "<b>Paso 3.</b> Como la suma geométrica parte en $k=0$, escribimos $\\displaystyle\\sum_{k=1}^{n}r^k=\\sum_{k=0}^{n}r^k-1=\\frac{1-r^{n+1}}{1-r}-1$.",
          "<b>Paso 4.</b> Con $r=\\dfrac34$: $\\dfrac{1-r^{n+1}}{1/4}-1=4(1-r^{n+1})-1=3-4r^{n+1}$.",
          "<b>Paso 5.</b> Multiplicando por $3$: $9-12\\left(\\dfrac34\\right)^{n+1}$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}\\frac{3^{k+1}}{4^k}=9-12\\left(\\frac34\\right)^{n+1}$.",
        grafico: { tipo: "sucesion", titulo: "Sumas parciales de la serie geométrica de razón 3/4", terminos: [2.25, 3.9375, 5.203125, 6.152344, 6.864258, 7.398193], limite: 9, label: "sₙ", ylabel: "sₙ" }
      }
    ],
    ejercicios: [
      {
        titulo: "Calcular dos sumas básicas",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=1}^{5}(2k+1)$ y $\\displaystyle\\sum_{k=1}^{5}k^2$.</p>",
        concepto: "Desarrollo directo de una sumatoria y uso de la fórmula de la suma de cuadrados.",
        pista: "En la primera suma, desarrolla los cinco términos. En la segunda, usa $\\dfrac{n(n+1)(2n+1)}{6}$.",
        desarrollo: [
          "$\\displaystyle\\sum_{k=1}^{5}(2k+1)=3+5+7+9+11=35$.",
          "$\\displaystyle\\sum_{k=1}^{5}k^2=\\frac{5\\cdot6\\cdot11}{6}=55$.",
          "Verificación directa: $1+4+9+16+25=55$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{5}(2k+1)=35$ y $\\displaystyle\\sum_{k=1}^{5}k^2=55$."
      },
      {
        titulo: "Telescópica con denominadores impares",
        dificultad: "basico",
        enunciado: "<p>Calcule $$\\sum_{k=1}^{n}\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right).$$</p>",
        concepto: "Aplicación directa de la propiedad telescópica.",
        pista: "Escribe los primeros términos y observa qué fracciones se cancelan.",
        desarrollo: [
          "Desarrollamos: $\\left(1-\\frac13\\right)+\\left(\\frac13-\\frac15\\right)+\\cdots+\\left(\\frac{1}{2n-1}-\\frac{1}{2n+1}\\right)$.",
          "Todos los términos intermedios se cancelan.",
          "Queda $1-\\dfrac{1}{2n+1}=\\dfrac{2n}{2n+1}$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}\\left(\\frac{1}{2k-1}-\\frac{1}{2k+1}\\right)=\\frac{2n}{2n+1}$."
      },
      {
        titulo: "Suma geométrica desde k = 0",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=0}^{6}2\\cdot3^k$.</p>",
        concepto: "Uso de la fórmula $\\sum_{k=0}^{n}r^k=\\dfrac{1-r^{n+1}}{1-r}$ y de la propiedad de la constante.",
        pista: "Saca el factor $2$ y aplica la fórmula con $r=3$ y $n=6$.",
        desarrollo: [
          "$\\displaystyle\\sum_{k=0}^{6}2\\cdot3^k=2\\sum_{k=0}^{6}3^k$.",
          "$\\displaystyle\\sum_{k=0}^{6}3^k=\\frac{1-3^7}{1-3}=\\frac{1-2187}{-2}=1093$.",
          "Por lo tanto, la suma pedida es $2\\cdot1093=2186$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=0}^{6}2\\cdot3^k=2186$."
      },
      {
        titulo: "Suma de productos consecutivos",
        dificultad: "intermedio",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=1}^{10}k(k+1)$ usando las fórmulas de $\\sum k$ y $\\sum k^2$.</p>",
        concepto: "Linealidad de la sumatoria y combinación de las sumas básicas.",
        pista: "Desarrolla $k(k+1)=k^2+k$ y separa en dos sumas.",
        desarrollo: [
          "$\\displaystyle\\sum_{k=1}^{10}k(k+1)=\\sum_{k=1}^{10}k^2+\\sum_{k=1}^{10}k$.",
          "$\\displaystyle\\sum_{k=1}^{10}k^2=\\frac{10\\cdot11\\cdot21}{6}=385$.",
          "$\\displaystyle\\sum_{k=1}^{10}k=\\frac{10\\cdot11}{2}=55$.",
          "Sumando: $385+55=440$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{10}k(k+1)=440$."
      },
      {
        titulo: "Telescópica con factoriales",
        dificultad: "avanzado",
        enunciado: "<p>Calcule $$\\sum_{k=1}^{n}(k^2+1)k!.$$</p>",
        concepto: "Manipulación algebraica para escribir el sumando como $a_{k+1}-a_k$ y luego aplicar la propiedad telescópica.",
        pista: "Prueba la identidad $(k^2+1)k!=k(k+1)!-(k-1)k!$ y define $a_k=(k-1)k!$.",
        desarrollo: [
          "<b>Paso 1.</b> Desarrollamos el lado derecho: $$k(k+1)!-(k-1)k!=k(k+1)k!-(k-1)k!.$$",
          "<b>Paso 2.</b> Sacamos factor común $k!$: $$[k(k+1)-(k-1)]k!=(k^2+k-k+1)k!=(k^2+1)k!.$$",
          "<b>Paso 3.</b> Con $a_k=(k-1)k!$, el sumando es $a_{k+1}-a_k$.",
          "<b>Paso 4.</b> Por la propiedad telescópica: $$\\sum_{k=1}^{n}(a_{k+1}-a_k)=a_{n+1}-a_1.$$",
          "<b>Paso 5.</b> $a_{n+1}=n(n+1)!$ y $a_1=0\\cdot1!=0$. Por lo tanto, la suma es $n(n+1)!$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}(k^2+1)k!=n(n+1)!$."
      }
    ],
    erroresComunes: [
      "Confundir el índice con el exponente o con el número de términos: $\\sum_{k=1}^{n}$ tiene $n$ términos, no $n-1$.",
      "Aplicar $\\sum k^2=\\left(\\sum k\\right)^2$, lo cual es falso: $\\sum k^2=\\dfrac{n(n+1)(2n+1)}{6}$.",
      "Olvidar restar el término $k=0$ al usar la suma geométrica que parte en $k=1$.",
      "En una telescópica, cancelar mal y perder el primer o el último término.",
      "Usar la fórmula geométrica con $r=1$, donde el denominador $1-r$ se anula."
    ],
    checklist: [
      "Sé leer y escribir una suma en notación sigma.",
      "Puedo identificar el índice, el límite inferior y el límite superior.",
      "Sé aplicar linealidad y sacar constantes fuera de la sumatoria.",
      "Conozco y sé usar las fórmulas de $\\sum k$, $\\sum k^2$ y $\\sum k^3$.",
      "Reconozco una suma telescópica y sé escribirla como $a_n-a_0$.",
      "Sé deducir y aplicar la fórmula de la suma geométrica finita."
    ],
    autoevaluacion: [
      { pregunta: "El valor de $\\displaystyle\\sum_{k=1}^{4}(2k-1)$ es:", opciones: ["$16$", "$20$", "$25$", "$15$"], correcta: 0, explicacion: "$1+3+5+7=16$." },
      { pregunta: "El valor de $\\displaystyle\\sum_{k=0}^{3}2^k$ es:", opciones: ["$8$", "$15$", "$16$", "$14$"], correcta: 1, explicacion: "$1+2+4+8=15$." },
      { pregunta: "Para $n=5$, la suma $\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}$ vale:", opciones: ["$\\dfrac16$", "$\\dfrac56$", "$\\dfrac65$", "$\\dfrac45$"], correcta: 1, explicacion: "La fórmula telescópica da $\\dfrac{n}{n+1}=\\dfrac56$." },
      { pregunta: "La suma $1+2+4+8+\\cdots+2^5$ es:", opciones: ["$31$", "$64$", "$63$", "$62$"], correcta: 2, explicacion: "$\\displaystyle\\sum_{k=0}^{5}2^k=\\frac{1-2^6}{1-2}=63$." },
      { pregunta: "El valor de $\\displaystyle\\sum_{k=1}^{10}k$ es:", opciones: ["$55$", "$50$", "$45$", "$100$"], correcta: 0, explicacion: "$\\dfrac{10\\cdot11}{2}=55$." },
      { pregunta: "La suma $\\displaystyle\\sum_{k=1}^{n}\\frac{1}{k(k+1)}$ es igual a:", opciones: ["$\\dfrac{1}{n+1}$", "$\\dfrac{n}{n+1}$", "$\\dfrac{n+1}{n}$", "$\\dfrac1n$"], correcta: 1, explicacion: "Al telescopar queda $1-\\dfrac{1}{n+1}=\\dfrac{n}{n+1}$." }
    ],
    resumen: [
      "La notación sigma compacta una suma y permite aplicar propiedades de linealidad y constantes.",
      "Las fórmulas de $\\sum k$, $\\sum k^2$ y $\\sum k^3$, junto con la suma geométrica, resuelven muchas sumas sin desarrollarlas término a término.",
      "Una suma telescópica cancela sus términos intermedios y se reduce a la diferencia entre el último y el primero."
    ],
    referencias: [
      { titulo: "Clase 19 — Sumas finitas (PDF)", ruta: "recursos/clases/clase-19.pdf" },
      { titulo: "Apunte Clase 20 — Sumas finitas (PDF)", ruta: "recursos/apuntes/apunte-clase-20.pdf" },
      { titulo: "Guía 9 — Progresiones, sumas y Teorema del Binomio (PDF)", ruta: "recursos/guias/guia-09-sucesiones-binomio.pdf" },
      { titulo: "Interrogación 6 2020 — sumatorias e inducción (PDF)", ruta: "recursos/pruebas/PRUEBAS/2020-1/i6-mat1107.pdf" }
    ]
  });
})();
