/* Módulo 4 · Sección 4 — Teorema del binomio */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m04_s04", modulo: 4, moduloNombre: "Módulo 4 · Sucesiones, sumatorias y binomio", orden: 25,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Teorema del binomio",
    objetivo: "Calcular coeficientes binomiales, construir el triángulo de Pascal, expandir potencias de binomios con el teorema del binomio y determinar coeficientes específicos en desarrollos algebraicos.",
    conexion: "Necesitas recordar la notación sigma y las propiedades de la sumatoria de la sección anterior. El teorema del binomio es una suma finita cuyos sumandos involucran coeficientes binomiales y potencias de $a$ y $b$.",
    fuente: "Clase 20 · Apuntes 22–23 · Guía 9 · I8 2020 · Stewart §12.6",
    prerrequisitos: ["Factorial y simplificación", "Notación sigma", "Potencias y sus propiedades"],
    teoria: [
      { tipo: "texto", html: "<p>Si desarrollamos $(a+b)^2$, $(a+b)^3$ y $(a+b)^4$, aparecen patrones notables:</p>$$(a+b)^2=a^2+2ab+b^2,$$$$(a+b)^3=a^3+3a^2b+3ab^2+b^3,$$$$(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4.$$<p>Los exponentes de $a$ bajan y los de $b$ suben; en cada término los exponentes suman $n$. Los coeficientes $1,4,6,4,1$ siguen un patrón que se puede predecir. El <b>teorema del binomio</b> entrega una fórmula exacta para cualquier potencia $(a+b)^n$ sin tener que multiplicar una y otra vez.</p>" },
      { tipo: "definicion", titulo: "Coeficiente binomial", html: "<p>Para $n,k\\in\\N\\cup\\{0\\}$ con $0\\le k\\le n$, se define el <b>coeficiente binomial</b></p>$$\\binom{n}{k}=\\frac{n!}{k!\\,(n-k)!}.$$<p>Se lee “$n$ sobre $k$” y cuenta de cuántas maneras se pueden elegir $k$ objetos entre $n$. Algunos valores inmediatos son</p>$$\\binom{n}{0}=1,\\qquad \\binom{n}{n}=1,\\qquad \\binom{n}{1}=n.$$<p>Por convención, $0!=1$.</p>" },
      { tipo: "teorema", titulo: "Simetría e identidad de Pascal", html: "<p>Sean $n,k\\in\\N\\cup\\{0\\}$ con $k\\le n$. Entonces:</p><ol><li>$\\displaystyle\\binom{n}{k}=\\binom{n}{n-k}$ (simetría).</li><li>$\\displaystyle\\binom{n}{k}+\\binom{n}{k+1}=\\binom{n+1}{k+1}$ (identidad de Pascal).</li></ol><p><b>Demostración de la simetría:</b></p>$$\\binom{n}{n-k}=\\frac{n!}{(n-k)!\\,(n-(n-k))!}=\\frac{n!}{(n-k)!\\,k!}=\\binom{n}{k}.$$<p><b>Idea de la identidad de Pascal:</b> al desarrollar ambos coeficientes con factoriales y sumar, se obtiene</p>$$\\binom{n}{k}+\\binom{n}{k+1}=\\frac{n!(k+1)+n!(n-k)}{(k+1)!(n-k)!}=\\frac{n!(n+1)}{(k+1)!(n-k)!}=\\binom{n+1}{k+1}.$$<p>Esta identidad explica por qué cada número del triángulo de Pascal es la suma de los dos que están justo encima de él.</p>" },
      { tipo: "tabla", titulo: "Triángulo de Pascal: coeficientes de (a + b)ⁿ", headers: ["n", "Coeficientes", "Suma"], rows: [["0", "1", "1"], ["1", "1  1", "2"], ["2", "1  2  1", "4"], ["3", "1  3  3  1", "8"], ["4", "1  4  6  4  1", "16"], ["5", "1  5  10  10  5  1", "32"], ["6", "1  6  15  20  15  6  1", "64"]] },
      { tipo: "teorema", titulo: "Teorema del binomio (Newton)", html: "<p>Sean $a,b\\in\\R$ y $n\\in\\N$. Entonces</p>$$(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k.$$<p>Escrito con todos los términos:</p>$$(a+b)^n=\\binom{n}{0}a^n+\\binom{n}{1}a^{n-1}b+\\cdots+\\binom{n}{n}b^n.$$<p><b>Demostración por inducción.</b> Para $n=1$, el lado derecho es $\\binom10a+\\binom11b=a+b$, así que el caso base vale.</p><p>Supongamos que la fórmula vale para $n$. Multiplicamos por $(a+b)$:</p>$$(a+b)^{n+1}=\\sum_{k=0}^{n}\\binom{n}{k}a^{n+1-k}b^k+\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^{k+1}.$$<p>En la segunda suma cambiamos el índice $j=k+1$:</p>$$\\sum_{j=1}^{n+1}\\binom{n}{j-1}a^{n+1-j}b^j.$$<p>El coeficiente de $a^{n+1-j}b^j$ para $1\\le j\\le n$ es $\\binom{n}{j}+\\binom{n}{j-1}=\\binom{n+1}{j}$ por la identidad de Pascal. Los términos de los extremos son $a^{n+1}$ y $b^{n+1}$, que coinciden con $\\binom{n+1}{0}a^{n+1}$ y $\\binom{n+1}{n+1}b^{n+1}$. Así se obtiene la fórmula para $n+1$ y, por inducción, para todo $n\\in\\N$.</p>" },
      { tipo: "teorema", titulo: "Corolarios: suma de coeficientes", html: "<p>Del teorema del binomio se obtienen dos identidades muy útiles:</p>$$\\sum_{k=0}^{n}\\binom{n}{k}=2^n,\\qquad \\sum_{k=0}^{n}(-1)^k\\binom{n}{k}=0.$$<p><b>Demostración.</b> En $(a+b)^n$, tomando $a=1$ y $b=1$:</p>$$2^n=(1+1)^n=\\sum_{k=0}^{n}\\binom{n}{k}.$$<p>Tomando $a=1$ y $b=-1$:</p>$$0=(1-1)^n=\\sum_{k=0}^{n}\\binom{n}{k}(-1)^k.$$<p>La primera identidad dice que la suma de una fila del triángulo de Pascal es una potencia de $2$. La segunda dice que la suma con signos alternados es $0$.</p>" },
      { tipo: "nota", titulo: "Cómo encontrar un término específico (Stewart §12.6)", html: "<p>El término general del desarrollo de $(a+b)^n$ es</p>$$T_{k+1}=\\binom{n}{k}a^{n-k}b^k,\\qquad k=0,1,\\dots,n.$$<p>Si solo interesa el coeficiente de una potencia de $x$, se escribe el término general, se juntan las potencias de $x$ y se impone el exponente deseado. Ese es el procedimiento típico de las interrogaciones.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el teorema del binomio es una máquina de expandir potencias. Sus piezas son los coeficientes del triángulo de Pascal y las potencias de $a$ y $b$. Si quieres un término específico, no desarrolles todo: escribe el término general $T_{k+1}$ y elige el $k$ que produce el exponente que buscas.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Expandir una potencia de binomio",
        enunciado: "<p>Desarrolle $(2x-3)^4$ usando el teorema del binomio.</p>",
        concepto: "Se aplica $(a+b)^4$ con $a=2x$ y $b=-3$, usando los coeficientes $1,4,6,4,1$.",
        desarrollo: [
          "<b>Paso 1.</b> Identificamos $a=2x$, $b=-3$ y $n=4$.",
          "<b>Paso 2.</b> Escribimos los cinco términos: $$\\binom40(2x)^4+\\binom41(2x)^3(-3)+\\binom42(2x)^2(-3)^2+\\binom43(2x)(-3)^3+\\binom44(-3)^4.$$",
          "<b>Paso 3.</b> Calculamos cada término: $1\\cdot16x^4=16x^4$; $4\\cdot8x^3\\cdot(-3)=-96x^3$; $6\\cdot4x^2\\cdot9=216x^2$; $4\\cdot2x\\cdot(-27)=-216x$; $1\\cdot81=81$.",
          "<b>Paso 4.</b> Sumamos: $16x^4-96x^3+216x^2-216x+81$."
        ],
        respuesta: "$(2x-3)^4=16x^4-96x^3+216x^2-216x+81$."
      },
      {
        titulo: "Coeficiente de una potencia de x",
        enunciado: "<p>Determine el coeficiente de $x^{20}$ en la expansión de $\\left(x^3-\\dfrac{2}{x^2}\\right)^{10}$.</p>",
        concepto: "Se usa el término general del teorema del binomio y se impone el exponente de $x$.",
        desarrollo: [
          "<b>Paso 1.</b> El término general es $$T_{k+1}=\\binom{10}{k}(x^3)^{10-k}\\left(-\\frac{2}{x^2}\\right)^k.$$",
          "<b>Paso 2.</b> Simplificamos las potencias: $(x^3)^{10-k}=x^{30-3k}$ y $\\left(-\\dfrac{2}{x^2}\\right)^k=(-2)^k x^{-2k}$.",
          "<b>Paso 3.</b> Entonces $T_{k+1}=\\binom{10}{k}(-2)^k x^{30-5k}$.",
          "<b>Paso 4.</b> Imponemos $30-5k=20$, de donde $5k=10$ y $k=2$.",
          "<b>Paso 5.</b> El coeficiente es $\\binom{10}{2}(-2)^2=45\\cdot4=180$."
        ],
        respuesta: "El coeficiente de $x^{20}$ es $180$."
      },
      {
        titulo: "Término independiente de x",
        enunciado: "<p>Encuentre el término independiente de $x$ en el desarrollo de $\\left(2x^2+\\dfrac1x\\right)^9$.</p>",
        concepto: "Se busca el valor de $k$ que hace que el exponente de $x$ sea $0$ en el término general.",
        desarrollo: [
          "<b>Paso 1.</b> $T_{k+1}=\\binom{9}{k}(2x^2)^{9-k}\\left(\\dfrac1x\\right)^k$.",
          "<b>Paso 2.</b> Simplificamos: $(2x^2)^{9-k}=2^{9-k}x^{18-2k}$ y $\\left(\\dfrac1x\\right)^k=x^{-k}$.",
          "<b>Paso 3.</b> El exponente de $x$ es $18-3k$. Para que no aparezca $x$, debe ser $18-3k=0$, es decir, $k=6$.",
          "<b>Paso 4.</b> El término independiente es $\\binom{9}{6}2^{9-6}=\\binom{9}{3}2^3=84\\cdot8=672$."
        ],
        respuesta: "El término independiente es $672$."
      }
    ],
    ejercicios: [
      {
        titulo: "Calcular coeficientes binomiales",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\dbinom73$, $\\dbinom{10}{2}$ y $\\dbinom88$.</p>",
        concepto: "Uso directo de la definición $\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$ y de la simetría.",
        pista: "Simplifica los factoriales antes de multiplicar. Recuerda que $\\binom{n}{n}=1$.",
        desarrollo: [
          "$\\dbinom73=\\dfrac{7!}{3!\\,4!}=\\dfrac{7\\cdot6\\cdot5}{3\\cdot2\\cdot1}=35$.",
          "$\\dbinom{10}{2}=\\dfrac{10\\cdot9}{2}=45$.",
          "$\\dbinom88=1$."
        ],
        respuesta: "$\\dbinom73=35$, $\\dbinom{10}{2}=45$ y $\\dbinom88=1$."
      },
      {
        titulo: "Expandir (x + 2)⁵",
        dificultad: "basico",
        enunciado: "<p>Desarrolle $(x+2)^5$ usando el triángulo de Pascal.</p>",
        concepto: "Coeficientes de la fila $n=5$ del triángulo de Pascal y potencias decrecientes de $x$.",
        pista: "Los coeficientes son $1,5,10,10,5,1$. No olvides las potencias de $2$.",
        desarrollo: [
          "$(x+2)^5=x^5+5x^4\\cdot2+10x^3\\cdot2^2+10x^2\\cdot2^3+5x\\cdot2^4+2^5$.",
          "Calculamos las potencias: $2^2=4$, $2^3=8$, $2^4=16$ y $2^5=32$.",
          "Entonces: $x^5+10x^4+40x^3+80x^2+80x+32$."
        ],
        respuesta: "$(x+2)^5=x^5+10x^4+40x^3+80x^2+80x+32$."
      },
      {
        titulo: "Coeficiente de x⁶",
        dificultad: "intermedio",
        enunciado: "<p>Determine el coeficiente de $x^6$ en el desarrollo de $(2x-1)^8$.</p>",
        concepto: "Término general del binomio e identificación del exponente.",
        pista: "El término general es $\\binom{8}{k}(2x)^{8-k}(-1)^k$. Iguala $8-k=6$.",
        desarrollo: [
          "$T_{k+1}=\\binom{8}{k}(2x)^{8-k}(-1)^k=\\binom{8}{k}2^{8-k}(-1)^k x^{8-k}$.",
          "Para obtener $x^6$ se necesita $8-k=6$, luego $k=2$.",
          "El coeficiente es $\\binom{8}{2}2^{6}(-1)^2=28\\cdot64=1792$."
        ],
        respuesta: "El coeficiente de $x^6$ es $1792$."
      },
      {
        titulo: "Término constante",
        dificultad: "intermedio",
        enunciado: "<p>Encuentre el término constante en el desarrollo de $\\left(x^2-\\dfrac1x\\right)^9$.</p>",
        concepto: "Búsqueda del exponente cero de $x$ en el término general.",
        pista: "Simplifica el término general y resuelve $18-3k=0$.",
        desarrollo: [
          "$T_{k+1}=\\binom{9}{k}(x^2)^{9-k}\\left(-\\dfrac1x\\right)^k=\\binom{9}{k}(-1)^k x^{18-3k}$.",
          "Para el término constante: $18-3k=0$, luego $k=6$.",
          "El término es $\\binom{9}{6}(-1)^6=\\binom{9}{3}=84$."
        ],
        respuesta: "El término constante es $84$."
      },
      {
        titulo: "Una suma con coeficientes binomiales",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que $$\\sum_{k=1}^{n}k\\binom{n}{k}=n\\,2^{n-1}$$ y calcule el valor de la suma para $n=10$.</p>",
        concepto: "Uso de la identidad $k\\binom{n}{k}=n\\binom{n-1}{k-1}$ y del corolario de la suma de coeficientes binomiales.",
        pista: "Reescribe $k\\binom{n}{k}$ usando factoriales. Luego cambia el índice $j=k-1$.",
        desarrollo: [
          "<b>Paso 1.</b> $k\\dbinom{n}{k}=k\\dfrac{n!}{k!(n-k)!}=\\dfrac{n!}{(k-1)!(n-k)!}$.",
          "<b>Paso 2.</b> Extraemos $n$: $\\dfrac{n\\,(n-1)!}{(k-1)!((n-1)-(k-1))!}=n\\dbinom{n-1}{k-1}$.",
          "<b>Paso 3.</b> Entonces $$\\sum_{k=1}^{n}k\\binom{n}{k}=n\\sum_{k=1}^{n}\\binom{n-1}{k-1}.$$",
          "<b>Paso 4.</b> Con $j=k-1$, la suma es $\\displaystyle\\sum_{j=0}^{n-1}\\binom{n-1}{j}=2^{n-1}$.",
          "<b>Paso 5.</b> Por lo tanto, la suma vale $n\\,2^{n-1}$. Para $n=10$: $10\\cdot2^9=10\\cdot512=5120$."
        ],
        respuesta: "$\\displaystyle\\sum_{k=1}^{n}k\\binom{n}{k}=n\\,2^{n-1}$; para $n=10$ vale $5120$."
      }
    ],
    erroresComunes: [
      "Calcular $\\binom{n}{k}$ como $\\dfrac{n}{k}$ o como $n!-k!$ en lugar de usar $\\dfrac{n!}{k!(n-k)!}$.",
      "Olvidar el signo negativo cuando el segundo término del binomio es negativo, por ejemplo en $(2x-3)^4$.",
      "Equivocar el exponente del término general: es $a^{n-k}b^k$, no $a^k b^{n-k}$ (aunque por simetría a veces el resultado coincida).",
      "Al buscar un coeficiente, olvidar multiplicar por las potencias numéricas que acompañan a $x$.",
      "Confundir la cantidad de términos de $(a+b)^n$: son $n+1$, no $n$."
    ],
    checklist: [
      "Sé calcular un coeficiente binomial con factoriales y simplificar antes de multiplicar.",
      "Puedo construir las primeras filas del triángulo de Pascal y usarlas para expandir.",
      "Conozco y sé enunciar el teorema del binomio.",
      "Sé escribir el término general $T_{k+1}$ y encontrar un coeficiente específico.",
      "Puedo demostrar o usar las identidades $\\sum\\binom{n}{k}=2^n$ y $\\sum(-1)^k\\binom{n}{k}=0$.",
      "Reconozco que $(a+b)^n$ tiene $n+1$ términos."
    ],
    autoevaluacion: [
      { pregunta: "El valor de $\\dbinom62$ es:", opciones: ["$15$", "$12$", "$30$", "$20$"], correcta: 0, explicacion: "$\\dbinom62=\\dfrac{6\\cdot5}{2}=15$." },
      { pregunta: "El coeficiente de $x^3$ en $(x+1)^5$ es:", opciones: ["$5$", "$10$", "$20$", "$15$"], correcta: 1, explicacion: "El término es $\\binom53x^3=10x^3$." },
      { pregunta: "¿Cuántos términos tiene el desarrollo de $(a+b)^7$?", opciones: ["$7$", "$9$", "$8$", "$6$"], correcta: 2, explicacion: "El desarrollo tiene $n+1=8$ términos, desde $a^7$ hasta $b^7$." },
      { pregunta: "La suma de todos los coeficientes de $(a+b)^5$ es:", opciones: ["$10$", "$25$", "$64$", "$32$"], correcta: 3, explicacion: "Evaluando en $a=b=1$ se obtiene $2^5=32$." },
      { pregunta: "El coeficiente de $x^2$ en $(1+x)^4$ es:", opciones: ["$4$", "$6$", "$8$", "$12$"], correcta: 1, explicacion: "$\\dbinom42=6$." },
      { pregunta: "¿Cuál igualdad es siempre verdadera?", opciones: ["$\\dbinom{n}{k}=n-k$", "$\\dbinom{n}{k}=\\dbinom{n}{n-k}$", "$\\dbinom{n}{k}=k$", "$\\dbinom{n}{k}=\\dbinom{n}{k-1}$"], correcta: 1, explicacion: "La simetría del coeficiente binomial establece $\\dbinom{n}{k}=\\dbinom{n}{n-k}$." }
    ],
    resumen: [
      "El coeficiente binomial $\\binom{n}{k}=\\dfrac{n!}{k!(n-k)!}$ cuenta las formas de elegir $k$ objetos entre $n$ y forma el triángulo de Pascal.",
      "El teorema del binomio expande $(a+b)^n=\\sum_{k=0}^{n}\\binom{n}{k}a^{n-k}b^k$ y permite encontrar términos específicos sin desarrollar todo.",
      "Los corolarios $\\sum\\binom{n}{k}=2^n$ y $\\sum(-1)^k\\binom{n}{k}=0$ se obtienen evaluando el binomio en $a=b=1$ y en $a=1,b=-1$."
    ],
    referencias: [
      { titulo: "Clase 20 — Teorema del Binomio (PDF)", ruta: "recursos/clases/clase-20.pdf" },
      { titulo: "Apunte Clase 22 — Teorema del Binomio (PDF)", ruta: "recursos/apuntes/apunte-clase-22.pdf" },
      { titulo: "Apunte Clase 23 — Coeficientes binomiales (PDF)", ruta: "recursos/apuntes/apunte-clase-23.pdf" },
      { titulo: "Interrogación 8 2020 — Teorema del binomio (PDF)", ruta: "recursos/pruebas/PRUEBAS/2020-1/i8-mat1107.pdf" }
    ]
  });
})();
