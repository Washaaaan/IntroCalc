/* Módulo 4 · Sección 2 — Progresiones aritméticas y geométricas */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m04_s02", modulo: 4, moduloNombre: "Módulo 4 · Sucesiones, sumatorias y binomio", orden: 23,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Progresiones aritméticas y geométricas",
    objetivo: "Identificar progresiones aritméticas y geométricas, calcular su término general y la suma de sus primeros términos, y resolver problemas de ahorro, crecimiento y decrecimiento con estas fórmulas.",
    conexion: "Necesitas recordar la diferencia entre una fórmula explícita y una recursiva de la sección anterior. Una progresión aritmética suma siempre la misma cantidad; una geométrica multiplica siempre por el mismo factor.",
    fuente: "Apunte 19 · Guía 9 · Stewart §12.2–12.3",
    prerrequisitos: ["Sucesiones y término general", "Operaciones con potencias", "Ecuaciones lineales y cuadráticas"],
    teoria: [
      { tipo: "texto", html: "<p>Dos tipos de sucesiones aparecen constantemente en problemas cotidianos. Si cada mes depositas la misma cantidad adicional, los montos forman una <b>progresión aritmética</b>. Si cada año el precio de un producto se multiplica por el mismo factor, los precios forman una <b>progresión geométrica</b>. Reconocer cuál es cuál permite calcular rápidamente cualquier término y también la suma de muchos de ellos.</p>" },
      { tipo: "definicion", titulo: "Progresión aritmética (PA)", html: "<p>Una sucesión $\\{a_n\\}$ es una <b>progresión aritmética</b> si la diferencia entre cada término y el anterior es constante. Es decir, existe $d\\in\\R$ tal que</p>$$a_{n+1}-a_n=d\\quad\\text{para todo }n\\ge 1.$$<p>El número $d$ se llama <b>diferencia</b>. El término general es</p>$$a_n=a_1+(n-1)d.$$<p>Equivalentemente, la forma recursiva es $a_1=c$ y $a_{n+1}=a_n+d$.</p>" },
      { tipo: "teorema", titulo: "Suma de los primeros n términos de una PA", html: "<p>Si $\\{a_n\\}$ es una progresión aritmética, entonces</p>$$S_n=a_1+a_2+\\cdots+a_n=\\frac{n(a_1+a_n)}{2}=\\frac{n\\bigl(2a_1+(n-1)d\\bigr)}{2}.$$<p><b>Idea de la demostración (método de Gauss).</b> Escribimos la suma dos veces, una al derecho y otra al revés:</p>$$S_n=a_1+(a_1+d)+\\cdots+a_n,$$$$S_n=a_n+(a_n-d)+\\cdots+a_1.$$<p>Al sumar ambas expresiones, cada par suma $a_1+a_n$ y hay $n$ pares: $2S_n=n(a_1+a_n)$. Dividiendo por $2$ se obtiene la fórmula.</p>" },
      { tipo: "definicion", titulo: "Progresión geométrica (PG)", html: "<p>Una sucesión $\\{a_n\\}$ es una <b>progresión geométrica</b> si el cuociente entre cada término y el anterior es constante. Es decir, existe $r\\ne 0$ tal que</p>$$\\frac{a_{n+1}}{a_n}=r\\quad\\text{para todo }n\\ge 1.$$<p>El número $r$ se llama <b>razón</b>. El término general es</p>$$a_n=a_1\\,r^{\\,n-1}.$$<p>La forma recursiva es $a_1=c$ y $a_{n+1}=r\\,a_n$.</p>" },
      { tipo: "teorema", titulo: "Suma de los primeros n términos de una PG", html: "<p>Si $\\{a_n\\}$ es una progresión geométrica de razón $r$, entonces</p>$$S_n=a_1\\frac{1-r^n}{1-r}\\quad\\text{si }r\\ne 1.$$<p>Si $r=1$, todos los términos valen $a_1$ y $S_n=n\\,a_1$.</p><p><b>Deducción paso a paso.</b> Sea $S_n=a_1+a_1r+\\cdots+a_1r^{n-1}$. Multiplicando por $r$:</p>$$rS_n=a_1r+a_1r^2+\\cdots+a_1r^n.$$<p>Restando la segunda igualdad de la primera, casi todos los términos se cancelan:</p>$$S_n-rS_n=a_1-a_1r^n.$$<p>Es decir, $S_n(1-r)=a_1(1-r^n)$. Si $r\\ne1$, dividimos por $1-r$ y obtenemos la fórmula.</p>" },
      { tipo: "nota", titulo: "¿Cuándo usar cada progresión? (Guía 9)", html: "<p>Si el enunciado dice “aumenta en”, “disminuye en”, “diferencia constante” o “cada mes $10.000$ pesos más”, piensa en una PA. Si dice “aumenta un $5\\%$”, “se duplica”, “se reduce a la mitad” o “razón constante”, piensa en una PG. En una PG con $|r|<1$ los términos se acercan a $0$; con $|r|>1$ crecen en valor absoluto.</p>" },
      { tipo: "tabla", titulo: "Comparación rápida entre PA y PG", headers: ["Aspecto", "Progresión aritmética", "Progresión geométrica"], rows: [["Regla", "sumar $d$", "multiplicar por $r$"], ["Término general", "$a_n=a_1+(n-1)d$", "$a_n=a_1r^{n-1}$"], ["Dato que se repite", "la diferencia $d$", "la razón $r$"], ["Suma de $n$ términos", "$\\dfrac{n(a_1+a_n)}{2}$", "$a_1\\dfrac{1-r^n}{1-r}$, si $r\\ne1$"]] },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "PA con a₁ = 3 y d = 5: los puntos quedan alineados", terminos: [3, 8, 13, 18, 23, 28, 33], label: "aₙ = 5n − 2", ylabel: "aₙ" } },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "PG con a₁ = 3 y r = 1/2: los términos se acercan a 0", terminos: [3, 1.5, 0.75, 0.375, 0.1875, 0.09375, 0.046875], limite: 0, label: "aₙ = 3(1/2)ⁿ⁻¹", ylabel: "aₙ" } },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> en una PA avanzas siempre con el mismo “paso” sumado; si graficas los puntos, quedan en línea recta. En una PG avanzas multiplicando siempre por el mismo factor; si el factor es mayor que $1$ los términos explotan, y si está entre $0$ y $1$ se van haciendo cada vez más pequeños.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Término general y suma en una PA",
        enunciado: "<p>Considere la progresión aritmética $7,\\,4,\\,1,\\,-2,\\dots$ Encuentre $a_{12}$ y la suma de sus primeros $12$ términos.</p>",
        concepto: "Se identifican $a_1$ y $d$, se usa $a_n=a_1+(n-1)d$ y luego $S_n=\\dfrac{n(a_1+a_n)}{2}$.",
        desarrollo: [
          "<b>Paso 1.</b> El primer término es $a_1=7$.",
          "<b>Paso 2.</b> La diferencia es $d=4-7=-3$. Verificamos: $1-4=-3$ y $-2-1=-3$.",
          "<b>Paso 3.</b> $a_{12}=7+(12-1)(-3)=7-33=-26$.",
          "<b>Paso 4.</b> $S_{12}=\\dfrac{12\\,(7+(-26))}{2}=6\\cdot(-19)=-114$.",
          "<b>Paso 5.</b> Verificación con la otra fórmula: $S_{12}=\\dfrac{12\\,(2\\cdot7+11\\cdot(-3))}{2}=6(14-33)=6(-19)=-114$."
        ],
        respuesta: "$a_{12}=-26$ y $S_{12}=-114$."
      },
      {
        titulo: "Término general y suma en una PG",
        enunciado: "<p>En una progresión geométrica se tiene $a_1=5$ y $r=2$. Calcule $a_7$ y la suma de los primeros $7$ términos.</p>",
        concepto: "Se usa $a_n=a_1r^{n-1}$ y la suma $S_n=a_1\\dfrac{1-r^n}{1-r}$.",
        desarrollo: [
          "<b>Paso 1.</b> $a_7=5\\cdot 2^{7-1}=5\\cdot 2^6=5\\cdot 64=320$.",
          "<b>Paso 2.</b> La suma es $S_7=5\\dfrac{1-2^7}{1-2}$.",
          "<b>Paso 3.</b> $2^7=128$, entonces $S_7=5\\dfrac{1-128}{-1}=5\\cdot 127=635$.",
          "<b>Paso 4.</b> Verificación directa: $5+10+20+40+80+160+320=635$."
        ],
        respuesta: "$a_7=320$ y $S_7=635$."
      },
      {
        titulo: "Un problema de ahorro",
        enunciado: "<p>Una persona deposita $50.000$ pesos el primer mes y luego aumenta el depósito en $10.000$ pesos cada mes. ¿Cuánto deposita el mes $12$ y cuánto habrá depositado en total durante esos $12$ meses?</p>",
        concepto: "Los depósitos forman una PA con $a_1=50.000$ y $d=10.000$; se piden el término $12$ y la suma de los primeros $12$ términos.",
        desarrollo: [
          "<b>Paso 1.</b> Identificamos $a_1=50.000$ y $d=10.000$.",
          "<b>Paso 2.</b> $a_{12}=50.000+(12-1)\\cdot10.000=50.000+110.000=160.000$.",
          "<b>Paso 3.</b> $S_{12}=\\dfrac{12\\,(50.000+160.000)}{2}=6\\cdot210.000=1.260.000$.",
          "<b>Paso 4.</b> El total depositado en el año es $1.260.000$ pesos."
        ],
        respuesta: "El mes $12$ deposita $160.000$ pesos y en total deposita $1.260.000$ pesos."
      }
    ],
    ejercicios: [
      {
        titulo: "PA: término y suma",
        dificultad: "basico",
        enunciado: "<p>Para la progresión aritmética $4,\\,9,\\,14,\\,19,\\dots$ calcule $a_{20}$ y $S_{20}$.</p>",
        concepto: "Término general y suma de una PA.",
        pista: "La diferencia es $d=5$. Usa $a_{20}=a_1+19d$ y luego la fórmula de la suma.",
        desarrollo: [
          "$a_1=4$ y $d=5$.",
          "$a_{20}=4+19\\cdot5=4+95=99$.",
          "$S_{20}=\\dfrac{20(4+99)}{2}=10\\cdot103=1030$."
        ],
        respuesta: "$a_{20}=99$ y $S_{20}=1030$."
      },
      {
        titulo: "PG: término y suma",
        dificultad: "basico",
        enunciado: "<p>Para la progresión geométrica $3,\\,6,\\,12,\\,24,\\dots$ calcule $a_8$ y $S_8$.</p>",
        concepto: "Término general y suma de una PG.",
        pista: "La razón es $r=2$. Recuerda que el exponente del término general es $n-1$.",
        desarrollo: [
          "$a_1=3$ y $r=2$.",
          "$a_8=3\\cdot 2^{7}=3\\cdot128=384$.",
          "$S_8=3\\dfrac{1-2^8}{1-2}=3\\dfrac{1-256}{-1}=3\\cdot255=765$."
        ],
        respuesta: "$a_8=384$ y $S_8=765$."
      },
      {
        titulo: "Datos dispersos en una PA",
        dificultad: "intermedio",
        enunciado: "<p>En una progresión aritmética se sabe que $a_5=17$ y $a_{10}=37$. Determine $a_1$, $d$, $a_{15}$ y $S_{15}$.</p>",
        concepto: "Planteamiento de un sistema de dos ecuaciones usando el término general de una PA.",
        pista: "Escribe $a_5=a_1+4d$ y $a_{10}=a_1+9d$. Resta ambas ecuaciones para eliminar $a_1$.",
        desarrollo: [
          "$a_5=a_1+4d=17$ y $a_{10}=a_1+9d=37$.",
          "Restando: $5d=20$, de donde $d=4$.",
          "Reemplazando en $a_5$: $a_1+16=17$, luego $a_1=1$.",
          "$a_{15}=1+14\\cdot4=57$.",
          "$S_{15}=\\dfrac{15(1+57)}{2}=15\\cdot29=435$."
        ],
        respuesta: "$a_1=1$, $d=4$, $a_{15}=57$ y $S_{15}=435$."
      },
      {
        titulo: "Datos dispersos en una PG",
        dificultad: "intermedio",
        enunciado: "<p>En una progresión geométrica se sabe que $a_2=6$ y $a_5=162$. Determine $r$, $a_1$ y $S_6$.</p>",
        concepto: "Uso del cuociente de términos para encontrar la razón de una PG.",
        pista: "Divide $a_5$ por $a_2$: $\\dfrac{a_5}{a_2}=r^{3}$.",
        desarrollo: [
          "$\\dfrac{a_5}{a_2}=\\dfrac{a_1r^4}{a_1r}=r^3=\\dfrac{162}{6}=27$.",
          "Entonces $r=3$ (la razón es real y positiva en este contexto).",
          "De $a_2=a_1r=6$ se obtiene $3a_1=6$, luego $a_1=2$.",
          "$S_6=2\\dfrac{1-3^6}{1-3}=2\\dfrac{1-729}{-2}=728$."
        ],
        respuesta: "$r=3$, $a_1=2$ y $S_6=728$."
      },
      {
        titulo: "¿Cuántos términos sumar?",
        dificultad: "avanzado",
        enunciado: "<p>Una progresión aritmética tiene primer término $5$ y diferencia $2$. ¿Cuántos términos deben sumarse para obtener $2700$?</p>",
        concepto: "Uso de la fórmula de la suma de una PA y resolución de una ecuación cuadrática en $n$.",
        pista: "Plantea $S_n=\\dfrac{n(2\\cdot5+(n-1)2)}{2}=2700$ y simplifica antes de usar la fórmula cuadrática.",
        desarrollo: [
          "$S_n=\\dfrac{n(10+2n-2)}{2}=\\dfrac{n(2n+8)}{2}=n(n+4)$.",
          "Debemos resolver $n(n+4)=2700$, es decir, $n^2+4n-2700=0$.",
          "El discriminante es $16+10800=10816=104^2$.",
          "$n=\\dfrac{-4\\pm104}{2}$. La solución positiva es $n=\\dfrac{100}{2}=50$.",
          "Verificación: $S_{50}=50\\cdot54=2700$."
        ],
        respuesta: "Deben sumarse $50$ términos."
      }
    ],
    erroresComunes: [
      "Usar $a_n=a_1+nd$ en lugar de $a_n=a_1+(n-1)d$; el primer término corresponde a $n=1$, no a $n=0$.",
      "Confundir la diferencia $d$ con la razón $r$: en una PA se suma, en una PG se multiplica.",
      "En la suma geométrica, olvidar el caso $r=1$ y dividir por cero.",
      "Calcular $r$ restando términos de una PG ($r=a_2-a_1$) en vez de dividirlos.",
      "Contar mal la cantidad de términos de una lista: entre $a_5$ y $a_{10}$ hay $6$ términos, no $5$."
    ],
    checklist: [
      "Puedo decidir si una sucesión es PA, PG o ninguna de las dos.",
      "Sé encontrar $a_n$ en una PA y en una PG sin confundir los exponentes.",
      "Sé calcular $S_n$ en una PA usando el primer y el último término.",
      "Sé deducir la fórmula de la suma geométrica multiplicando por $r$ y restando.",
      "Puedo resolver problemas verbales identificando $a_1$, $d$ o $r$.",
      "Reconozco que una PG con $|r|<1$ decrece hacia $0$."
    ],
    autoevaluacion: [
      { pregunta: "En la PA $2,5,8,\\dots$, el término $a_{10}$ es:", opciones: ["$32$", "$29$", "$27$", "$30$"], correcta: 1, explicacion: "$a_{10}=2+9\\cdot3=2+27=29$." },
      { pregunta: "En la PG $1,2,4,\\dots$, el término $a_6$ es:", opciones: ["$32$", "$64$", "$16$", "$31$"], correcta: 0, explicacion: "$a_6=1\\cdot2^{5}=32$." },
      { pregunta: "La suma $1+2+3+\\cdots+100$ es:", opciones: ["$5000$", "$5050$", "$10100$", "$4950$"], correcta: 1, explicacion: "$S_{100}=\\dfrac{100\\cdot101}{2}=5050$." },
      { pregunta: "La suma de los cinco primeros términos de $8,4,2,1,\\dots$ es:", opciones: ["$15$", "$16$", "$\\dfrac{31}{2}$", "$\\dfrac{63}{4}$"], correcta: 2, explicacion: "$S_5=8\\dfrac{1-(1/2)^5}{1-1/2}=8\\cdot\\dfrac{31/32}{1/2}=\\dfrac{31}{2}$." },
      { pregunta: "En la PA con $a_1=10$ y $d=-2$, el término $a_6$ es:", opciones: ["$4$", "$2$", "$-2$", "$0$"], correcta: 3, explicacion: "$a_6=10+5\\cdot(-2)=10-10=0$." },
      { pregunta: "¿Cuántos términos tiene la PG $3,6,12,\\dots,384$?", opciones: ["$7$", "$9$", "$8$", "$6$"], correcta: 2, explicacion: "$3\\cdot2^{n-1}=384$, luego $2^{n-1}=128=2^7$ y $n=8$." }
    ],
    resumen: [
      "En una PA cada término se obtiene sumando una diferencia constante $d$: $a_n=a_1+(n-1)d$.",
      "En una PG cada término se obtiene multiplicando por una razón constante $r$: $a_n=a_1r^{n-1}$.",
      "Las sumas de los primeros $n$ términos son $S_n=\\dfrac{n(a_1+a_n)}{2}$ en una PA y $S_n=a_1\\dfrac{1-r^n}{1-r}$ en una PG con $r\\ne1$."
    ],
    referencias: [
      { titulo: "Clase 18 — Sucesiones (PDF)", ruta: "recursos/clases/clase-18.pdf" },
      { titulo: "Apunte Clase 19 — Sucesiones (PDF)", ruta: "recursos/apuntes/apunte-clase-19.pdf" },
      { titulo: "Guía 9 — Progresiones, sumas y Teorema del Binomio (PDF)", ruta: "recursos/guias/guia-09-sucesiones-binomio.pdf" }
    ]
  });
})();
