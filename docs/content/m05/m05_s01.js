/* Módulo 5 · Sección 1 — Límite de una sucesión: definición épsilon-N */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s01", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 26,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Límite de una sucesión: definición épsilon-N",
    objetivo: "Comprender la definición épsilon-N de límite de una sucesión y usarla para demostrar convergencia eligiendo explícitamente un N que dependa de ε, distinguiendo además sucesiones convergentes, divergentes y acotadas.",
    conexion: "Necesitas recordar qué es una sucesión y cómo se escribe su término general, además del valor absoluto como distancia entre dos números. La clase anterior cerró el módulo de sumatorias y binomio; ahora pasamos de sumar términos a preguntarnos hacia dónde se dirige una lista infinita de ellos.",
    fuente: "Clase 21 · Apuntes 24–25 · Stewart §13.4 · Mickenberg Cap. 10",
    prerrequisitos: ["Sucesiones y término general", "Valor absoluto como distancia", "Desigualdades y propiedades de orden", "Principio de Arquímedes"],
    teoria: [
      { tipo: "texto", html: "<p>Una <b>sucesión</b> es una función cuyo dominio es el conjunto de los números naturales. En vez de escribir $a(1),a(2),a(3),\\dots$, escribimos $a_1,a_2,a_3,\\dots$ y llamamos $a_n$ al <b>término general</b>. Su gráfico no es una curva continua: son puntos aislados de coordenadas $(1,a_1),(2,a_2),(3,a_3),\\dots$</p><p>La pregunta central de esta sección es qué significa decir que los términos se <i>acercan</i> a un número $L$. Por ejemplo, para $a_n=\\dfrac{n}{n+1}$ los términos son $\\tfrac12,\\tfrac23,\\tfrac34,\\tfrac45,\\dots$ y parece claro que se acercan a $1$. Pero «parece» no es una demostración. La definición $\\varepsilon$-$N$ convierte esa idea visual en una condición matemática precisa.</p>" },
      { tipo: "definicion", titulo: "Límite de una sucesión (definición ε-N)", html: "<p>Decimos que la sucesión $\\{a_n\\}$ tiene límite $L$, y escribimos</p>$$\\lim_{n\\to\\infty} a_n=L,$$<p>si para todo $\\varepsilon>0$ existe un natural $N$ tal que, para todo $n>N$, se cumple</p>$$|a_n-L|<\\varepsilon.$$<p>En símbolos:</p>$$(\\forall\\varepsilon>0)(\\exists N\\in\\N)(n>N\\Longrightarrow |a_n-L|<\\varepsilon).$$<p>El número $\\varepsilon$ se llama <b>tolerancia</b> y $N$ se llama <b>índice de corte</b>. La condición $|a_n-L|<\\varepsilon$ es equivalente a $L-\\varepsilon<a_n<L+\\varepsilon$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> imagina que alrededor de $L$ pintamos una franja horizontal de altura $2\\varepsilon$, es decir, entre $L-\\varepsilon$ y $L+\\varepsilon$. Decir que $a_n\\to L$ significa que, por muy delgada que sea esa franja, siempre existe una columna $N$ a partir de la cual <i>todos</i> los puntos de la sucesión caen dentro de la franja. Los primeros términos pueden quedar fuera; lo que importa es el comportamiento eventual.</div>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "Los términos de aₙ = n/(n+1) se acercan a 1", terminos: [0.5, 0.6666666667, 0.75, 0.8, 0.8333333333, 0.8571428571, 0.875, 0.8888888889, 0.9, 0.9090909091, 0.9166666667, 0.9230769231], limite: 1, label: "aₙ = n/(n+1)", ylabel: "aₙ" } },
      { tipo: "grafico", spec: { tipo: "recta_numerica", titulo: "La franja (L−ε, L+ε) para L = 1 y ε = 0,1", rango: [0.75, 1.25], intervalos: [ { a: 0.9, b: 1.1, abiertoA: true, abiertoB: true, label: "(1−ε, 1+ε)", color: "#1e5eff" } ], puntos: [ { x: 1, label: "L = 1", abierto: false } ] } },
      { tipo: "nota", titulo: "Por qué aparece Arquímedes (Stewart §13.4)", html: "<p>Para demostrar límites con la definición casi siempre terminamos necesitando que $\\frac{1}{n}$ sea tan pequeño como queramos. Eso no es un detalle técnico: es el <b>principio de Arquímedes</b>, que dice que $\\N$ no está acotado superiormente. En palabras simples, no importa cuán pequeño sea el número positivo $\\varepsilon$: siempre podemos encontrar un natural $N$ mayor que $1/\\varepsilon$.</p>" },
      { tipo: "teorema", titulo: "Propiedad arquimediana", html: "<p>Para todo $\\varepsilon>0$ existe $N\\in\\N$ tal que</p>$$0<\\frac{1}{N}<\\varepsilon.$$<p><b>Demostración.</b> Como $\\varepsilon>0$, el número $1/\\varepsilon$ también es positivo. Por el principio de Arquímedes existe $N\\in\\N$ con $N>1/\\varepsilon$. Invirtiendo ambos lados (ambos son positivos) se obtiene $\\frac{1}{N}<\\varepsilon$. $\\blacksquare$</p>" },
      { tipo: "definicion", titulo: "Convergente, divergente y acotada", html: "<p>Una sucesión es <b>convergente</b> si existe un número real $L$ que sea su límite. Si no existe tal $L$, se dice <b>divergente</b>.</p><p>Una sucesión $\\{a_n\\}$ está <b>acotada</b> si existe una constante $M>0$ tal que</p>$$|a_n|\\le M\\quad\\text{para todo }n\\in\\N.$$<p>Estar acotada significa que todos sus términos caben dentro de algún intervalo de la forma $[-M,M]$.</p>" },
      { tipo: "teorema", titulo: "Unicidad del límite", html: "<p>Una sucesión no puede converger a dos límites distintos. Es decir, si $\\lim_{n\\to\\infty}a_n=L$ y también $\\lim_{n\\to\\infty}a_n=M$, entonces $L=M$.</p><p><b>Idea de la demostración.</b> Si $L\\neq M$, tomemos $\\varepsilon=\\frac{|L-M|}{3}$. Los intervalos $(L-\\varepsilon,L+\\varepsilon)$ y $(M-\\varepsilon,M+\\varepsilon)$ son disjuntos. Para $n$ suficientemente grande, $a_n$ debería estar en ambos intervalos a la vez, lo que es imposible. Por lo tanto, $L=M$. $\\blacksquare$</p>" },
      { tipo: "teorema", titulo: "Toda sucesión convergente es acotada", html: "<p>Si $\\{a_n\\}$ converge, entonces existe $M>0$ tal que $|a_n|\\le M$ para todo $n$.</p><p><b>Idea de la demostración.</b> Si $a_n\\to L$, tomamos $\\varepsilon=1$. Desde cierto índice $N$ en adelante, todos los términos están en $(L-1,L+1)$. Los primeros $N$ términos son finitos, así que podemos tomar el mayor y el menor de ellos junto con $L-1$ y $L+1$. Ese intervalo contiene toda la sucesión. $\\blacksquare$</p><p><b>Ojo:</b> el recíproco es falso. La sucesión $a_n=(-1)^n$ está acotada, pero no converge.</p>" },
      { tipo: "tabla", titulo: "Tres comportamientos que conviene distinguir", headers: ["Sucesión", "¿Acotada?", "¿Convergente?", "Comentario"], rows: [["$\\frac{1}{n}$", "Sí", "Sí, a $0$", "Se acerca a 0 sin alcanzarlo"], ["$\\frac{n}{n+1}$", "Sí", "Sí, a $1$", "Se acerca a 1 desde abajo"], ["$(-1)^n$", "Sí", "No", "Oscila entre $-1$ y $1$"], ["$n$", "No", "No", "Crece sin cota"]] }
    ],
    ejemplos: [
      {
        titulo: "Demostrar que (3n+1)/(n+2) tiende a 3",
        enunciado: "<p>Usando la definición $\\varepsilon$-$N$, demuestre que</p>$$\\lim_{n\\to\\infty}\\frac{3n+1}{n+2}=3.$$",
        concepto: "Se usa la definición formal: primero se calcula y simplifica $|a_n-L|$, luego se impone la condición $|a_n-L|<\\varepsilon$ y se despeja $n$. Finalmente se elige $N$ usando la propiedad arquimediana.",
        desarrollo: [
          "<b>Paso 1.</b> Calculamos la distancia entre el término general y el candidato a límite: $$\\left|\\frac{3n+1}{n+2}-3\\right|=\\left|\\frac{3n+1-3(n+2)}{n+2}\\right|=\\left|\\frac{-5}{n+2}\\right|=\\frac{5}{n+2}.$$",
          "<b>Paso 2.</b> Queremos que esta distancia sea menor que $\\varepsilon$. Como $n+2>n$, tenemos la cota $$\\frac{5}{n+2}<\\frac{5}{n}.$$ Así, basta con lograr que $\\frac{5}{n}<\\varepsilon$.",
          "<b>Paso 3.</b> La condición $\\frac{5}{n}<\\varepsilon$ equivale a $n>\\frac{5}{\\varepsilon}$. Por la propiedad arquimediana, dado $\\frac{5}{\\varepsilon}>0$ existe $N\\in\\N$ tal que $N>\\frac{5}{\\varepsilon}$.",
          "<b>Paso 4.</b> Si $n>N$, entonces $n>\\frac{5}{\\varepsilon}$, de donde $\\frac{5}{n}<\\varepsilon$. Por lo tanto, $$\\left|\\frac{3n+1}{n+2}-3\\right|<\\frac{5}{n}<\\varepsilon.$$ Queda demostrado el límite."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{3n+1}{n+2}=3$. Un $N$ válido es cualquier natural mayor que $\\frac{5}{\\varepsilon}$.",
        grafico: { tipo: "sucesion", titulo: "aₙ = (3n+1)/(n+2) se acerca a 3", terminos: [1.3333333333, 1.75, 2, 2.1666666667, 2.2857142857, 2.375, 2.4444444444, 2.5, 2.5454545455, 2.5833333333, 2.6153846154, 2.6428571429], limite: 3, label: "aₙ = (3n+1)/(n+2)", ylabel: "aₙ" }
      },
      {
        titulo: "Demostrar que (2n+3)/(n+2) tiende a 2",
        enunciado: "<p>Demuestre, con la definición, que</p>$$\\lim_{n\\to\\infty}\\frac{2n+3}{n+2}=2.$$<p>Este cálculo apareció en la Interrogación 6 de 2025.</p>",
        concepto: "Es la misma estrategia del ejemplo anterior, pero aquí la simplificación es especialmente limpia: la distancia al límite es exactamente $1/(n+2)$. Se elige $N>1/\\varepsilon$.",
        desarrollo: [
          "<b>Paso 1.</b> Calculamos $$\\left|\\frac{2n+3}{n+2}-2\\right|=\\left|\\frac{2n+3-2n-4}{n+2}\\right|=\\left|\\frac{-1}{n+2}\\right|=\\frac{1}{n+2}.$$",
          "<b>Paso 2.</b> Dado $\\varepsilon>0$, queremos $\\frac{1}{n+2}<\\varepsilon$. Esta desigualdad equivale a $n+2>\\frac{1}{\\varepsilon}$, es decir, $n>\\frac{1}{\\varepsilon}-2$.",
          "<b>Paso 3.</b> Para evitar discusiones sobre si $\\frac{1}{\\varepsilon}-2$ es negativo, elegimos $N\\in\\N$ con $N>\\frac{1}{\\varepsilon}$. Esto es posible por la propiedad arquimediana. Así, si $n>N$, entonces $n>\\frac{1}{\\varepsilon}$ y por lo tanto $\\frac{1}{n+2}<\\frac{1}{n}<\\varepsilon$.",
          "<b>Paso 4.</b> Concluimos que para todo $\\varepsilon>0$ existe $N$ tal que, si $n>N$, entonces $\\left|\\frac{2n+3}{n+2}-2\\right|<\\varepsilon$. Por definición, el límite es $2$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{2n+3}{n+2}=2$. Basta elegir $N>\\frac{1}{\\varepsilon}$.",
        grafico: { tipo: "sucesion", titulo: "aₙ = (2n+3)/(n+2) se acerca a 2", terminos: [1.6666666667, 1.75, 1.8, 1.8333333333, 1.8571428571, 1.875, 1.8888888889, 1.9, 1.9090909091, 1.9166666667], limite: 2, label: "aₙ = (2n+3)/(n+2)", ylabel: "aₙ" }
      },
      {
        titulo: "Una cota cómoda: (n²+1)/(n²+n) tiende a 1",
        enunciado: "<p>Demuestre que</p>$$\\lim_{n\\to\\infty}\\frac{n^2+1}{n^2+n}=1.$$",
        concepto: "Muchas veces no hace falta despejar $n$ exactamente: basta con acotar la distancia por una expresión más simple que también tienda a cero. Aquí usamos $n-1<n$ y $n^2+n>n^2$.",
        desarrollo: [
          "<b>Paso 1.</b> Calculamos la distancia: $$\\left|\\frac{n^2+1}{n^2+n}-1\\right|=\\left|\\frac{n^2+1-(n^2+n)}{n^2+n}\\right|=\\frac{n-1}{n^2+n}.$$",
          "<b>Paso 2.</b> Para $n\\ge 1$, el numerador cumple $n-1<n$ y el denominador cumple $n^2+n>n^2$. Por lo tanto, $$0\\le\\frac{n-1}{n^2+n}<\\frac{n}{n^2}=\\frac{1}{n}.$$",
          "<b>Paso 3.</b> Dado $\\varepsilon>0$, elegimos $N\\in\\N$ con $N>\\frac{1}{\\varepsilon}$. Si $n>N$, entonces $\\frac{1}{n}<\\frac{1}{N}<\\varepsilon$.",
          "<b>Paso 4.</b> Así, $$\\left|\\frac{n^2+1}{n^2+n}-1\\right|<\\frac{1}{n}<\\varepsilon.$$ El límite es $1$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+1}{n^2+n}=1$.",
        grafico: { tipo: "sucesion", titulo: "La distancia a 1 se comporta como 1/n", terminos: [1, 0.8333333333, 0.8333333333, 0.85, 0.8666666667, 0.880952381, 0.8928571429, 0.9027777778, 0.9111111111, 0.9181818182], limite: 1, label: "aₙ = (n²+1)/(n²+n)", ylabel: "aₙ" }
      }
    ],
    ejercicios: [
      {
        titulo: "Encontrar un N concreto",
        dificultad: "basico",
        enunciado: "<p>Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\frac{1}{n+3}=0$. Además, encuentre un $N$ que sirva para $\\varepsilon=0{,}01$.</p>",
        concepto: "Definición $\\varepsilon$-$N$ con una distancia que se despeja directamente.",
        pista: "Calcula $\\left|\\frac{1}{n+3}-0\\right|$ e impón que sea menor que $0{,}01$.",
        desarrollo: [
          "<b>Paso 1.</b> Como $n+3>0$, la distancia es $\\left|\\frac{1}{n+3}\\right|=\\frac{1}{n+3}$.",
          "<b>Paso 2.</b> Para $\\varepsilon=0{,}01$: $\\frac{1}{n+3}<0{,}01\\Longleftrightarrow n+3>100\\Longleftrightarrow n>97$. Podemos tomar $N=97$.",
          "<b>Paso 3.</b> En general, dado $\\varepsilon>0$, elegimos $N\\in\\N$ con $N>\\frac{1}{\\varepsilon}$. Si $n>N$, entonces $\\frac{1}{n+3}<\\frac{1}{n}<\\varepsilon$.",
          "<b>Paso 4.</b> Por definición, el límite es $0$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{1}{n+3}=0$; para $\\varepsilon=0{,}01$ sirve $N=97$."
      },
      {
        titulo: "Distancia igual a 1/n",
        dificultad: "basico",
        enunciado: "<p>Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\frac{n+1}{n}=1$ y determine un $N$ válido para $\\varepsilon=0{,}001$.</p>",
        concepto: "Simplificación algebraica de la distancia y uso de la propiedad arquimediana.",
        pista: "$\\frac{n+1}{n}=1+\\frac{1}{n}$.",
        desarrollo: [
          "<b>Paso 1.</b> $\\left|\\frac{n+1}{n}-1\\right|=\\left|\\frac{n+1-n}{n}\\right|=\\frac{1}{n}$.",
          "<b>Paso 2.</b> Para $\\varepsilon=0{,}001$, necesitamos $\\frac{1}{n}<0{,}001$, es decir, $n>1000$. Sirve $N=1000$.",
          "<b>Paso 3.</b> En general, dado $\\varepsilon>0$ elegimos $N>\\frac{1}{\\varepsilon}$. Si $n>N$, entonces $\\frac{1}{n}<\\frac{1}{N}<\\varepsilon$.",
          "<b>Paso 4.</b> Por lo tanto, $\\frac{n+1}{n}\\to 1$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n+1}{n}=1$; para $\\varepsilon=0{,}001$ sirve $N=1000$."
      },
      {
        titulo: "Una cota con denominador 2n+3",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\frac{4n-1}{2n+3}=2$. Encuentre un $N$ que funcione para $\\varepsilon=0{,}01$.</p>",
        concepto: "Cálculo de $|a_n-L|$ y acotación para no tener que despejar exactamente.",
        pista: "Al restar 2, el numerador queda $-7$. Luego acota $\\frac{7}{2n+3}<\\frac{7}{2n}$.",
        desarrollo: [
          "<b>Paso 1.</b> $$\\left|\\frac{4n-1}{2n+3}-2\\right|=\\left|\\frac{4n-1-4n-6}{2n+3}\\right|=\\frac{7}{2n+3}.$$",
          "<b>Paso 2.</b> Como $2n+3>2n$, se tiene $\\frac{7}{2n+3}<\\frac{7}{2n}$.",
          "<b>Paso 3.</b> Para $\\varepsilon=0{,}01$, basta con $\\frac{7}{2n}<0{,}01\\Longleftrightarrow 2n>700\\Longleftrightarrow n>350$. Tomamos $N=350$.",
          "<b>Paso 4.</b> En general, dado $\\varepsilon>0$, elegimos $N>\\frac{7}{2\\varepsilon}$. Si $n>N$, entonces $\\frac{7}{2n}<\\varepsilon$ y por lo tanto $\\left|\\frac{4n-1}{2n+3}-2\\right|<\\varepsilon$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{4n-1}{2n+3}=2$; para $\\varepsilon=0{,}01$ sirve $N=350$."
      },
      {
        titulo: "Con techo 1/n",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+n}{n^2}=1$ usando la definición.</p>",
        concepto: "Simplificación directa y acotación de la distancia por $1/n$.",
        pista: "Simplifica primero la fracción: $\\frac{n^2+n}{n^2}=1+\\frac{1}{n}$.",
        desarrollo: [
          "<b>Paso 1.</b> Simplificamos: $\\frac{n^2+n}{n^2}=1+\\frac{1}{n}$.",
          "<b>Paso 2.</b> Entonces $\\left|\\left(1+\\frac{1}{n}\\right)-1\\right|=\\frac{1}{n}$.",
          "<b>Paso 3.</b> Dado $\\varepsilon>0$, elegimos $N\\in\\N$ con $N>\\frac{1}{\\varepsilon}$. Si $n>N$, entonces $\\frac{1}{n}<\\frac{1}{N}<\\varepsilon$.",
          "<b>Paso 4.</b> Por definición, el límite es $1$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\frac{n^2+n}{n^2}=1$."
      },
      {
        titulo: "Demostrar que (-1)^n no converge",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre, usando la definición $\\varepsilon$-$N$, que la sucesión $a_n=(-1)^n$ no converge.</p>",
        concepto: "Negación de la definición de límite y uso del valor absoluto como distancia. La sucesión oscila entre $1$ y $-1$, por lo que no puede acumularse en un único número.",
        pista: "Supón que converge a $L$ y toma $\\varepsilon=\\frac12$. Los términos pares son $1$ y los impares son $-1$.",
        desarrollo: [
          "<b>Paso 1.</b> Supongamos, por contradicción, que $(-1)^n\\to L$ para algún $L\\in\\R$.",
          "<b>Paso 2.</b> Tomemos $\\varepsilon=\\frac12$. Por la definición, existe $N\\in\\N$ tal que, si $n>N$, entonces $|(-1)^n-L|<\\frac12$.",
          "<b>Paso 3.</b> Elijamos un natural par $p>N$. Entonces $(-1)^p=1$, así que $|1-L|<\\frac12$, es decir, $\\frac12<L<\\frac32$.",
          "<b>Paso 4.</b> Elijamos ahora un natural impar $q>N$. Entonces $(-1)^q=-1$, así que $|-1-L|<\\frac12$, es decir, $-\\frac32<L<-\\frac12$.",
          "<b>Paso 5.</b> Las dos conclusiones se contradicen: $L$ no puede ser mayor que $\\frac12$ y menor que $-\\frac12$ al mismo tiempo. Por lo tanto, la sucesión no converge."
        ],
        respuesta: "$(-1)^n$ no converge; oscila entre $1$ y $-1$ y no puede satisfacer la definición para ningún $L$."
      }
    ],
    erroresComunes: [
      "Creer que $\\varepsilon$ es un número fijo o «muy pequeño»: la definición exige que funcione para <b>todo</b> $\\varepsilon>0$, por pequeño que sea.",
      "Elegir $N$ después de fijar $n$, o elegir un $N$ que dependa de $n$. El índice $N$ debe depender solamente de $\\varepsilon$, nunca del término particular que se está mirando.",
      "Confundir «a partir de $N$ todos los términos están cerca» con «hay algunos términos cerca». La definición habla de todos los $n>N$.",
      "Al despejar una desigualdad, multiplicar o dividir por una expresión sin controlar su signo. En esta sección casi siempre conviene acotar por $1/n$.",
      "Pensar que toda sucesión acotada converge. $(-1)^n$ está acotada y no converge."
    ],
    checklist: [
      "Puedo escribir la definición $\\varepsilon$-$N$ con cuantificadores y explicarla con mis palabras.",
      "Sé interpretar $|a_n-L|<\\varepsilon$ como «$a_n$ está en el intervalo $(L-\\varepsilon,L+\\varepsilon)$».",
      "Sé calcular y simplificar $|a_n-L|$ en cocientes polinomiales sencillos.",
      "Sé elegir un $N$ que dependa de $\\varepsilon$ y justificar que funciona para todo $n>N$.",
      "Puedo usar la propiedad arquimediana para justificar la existencia de $N$.",
      "Distingo sucesión convergente, divergente y acotada, y sé dar ejemplos de cada caso."
    ],
    autoevaluacion: [
      { pregunta: "¿Cuál es la forma correcta de la definición de $\\lim_{n\\to\\infty}a_n=L$?", opciones: [ "Para todo $N$ existe $\\varepsilon>0$ tal que $|a_n-L|<\\varepsilon$ para todo $n>N$.", "Para todo $\\varepsilon>0$ existe $N\\in\\N$ tal que, para todo $n>N$, $|a_n-L|<\\varepsilon$.", "Existe $\\varepsilon>0$ y existe $N\\in\\N$ tal que $|a_n-L|<\\varepsilon$.", "Para todo $n>N$ existe $\\varepsilon>0$ tal que $|a_n-L|<\\varepsilon$." ], correcta: 1, explicacion: "El orden de los cuantificadores es esencial: primero se da $\\varepsilon>0$ y luego se encuentra un $N$ que puede depender de $\\varepsilon$." },
      { pregunta: "Para la sucesión $a_n=\\frac{1}{n+2}$, ¿qué $N$ sirve para $\\varepsilon=0{,}05$?", opciones: [ "$N=10$", "$N=20$", "$N=18$", "$N=2$" ], correcta: 2, explicacion: "Se necesita $\\frac{1}{n+2}<0{,}05$, es decir, $n+2>20$, o sea $n>18$. Tomando $N=18$, todo $n>18$ cumple la condición." },
      { pregunta: "Si $\\lim_{n\\to\\infty}a_n=2$, ¿qué se puede afirmar?", opciones: [ "Todos los términos son iguales a 2.", "A partir de cierto índice, todos los términos están tan cerca de 2 como se quiera.", "La sucesión está acotada, pero no necesariamente converge.", "Ningún término puede ser igual a 2." ], correcta: 1, explicacion: "La definición dice que para cualquier tolerancia $\\varepsilon$ existe un índice desde el cual todos los términos están en $(2-\\varepsilon,2+\\varepsilon)$." },
      { pregunta: "¿Cuál de estas sucesiones está acotada pero no converge?", opciones: [ "$a_n=n$", "$a_n=\\frac{1}{n}$", "$a_n=(-1)^n$", "$a_n=\\frac{n}{n+1}$" ], correcta: 2, explicacion: "$(-1)^n$ toma solo los valores $1$ y $-1$, así que está acotada, pero oscila y no tiene límite." },
      { pregunta: "Al demostrar que $\\frac{5n}{n+1}\\to 5$, la distancia $\\left|\\frac{5n}{n+1}-5\\right|$ es:", opciones: [ "$\\frac{5}{n+1}$", "$\\frac{5n}{n+1}$", "$\\frac{1}{n+1}$", "$5$" ], correcta: 0, explicacion: "$\\frac{5n}{n+1}-5=\\frac{5n-5n-5}{n+1}=\\frac{-5}{n+1}$, cuyo valor absoluto es $\\frac{5}{n+1}$." },
      { pregunta: "Si una sucesión converge, entonces:", opciones: [ "Es necesariamente creciente.", "Es necesariamente acotada.", "Tiene infinitos términos iguales a su límite.", "Es necesariamente decreciente." ], correcta: 1, explicacion: "Toda sucesión convergente es acotada. El recíproco no es cierto: $(-1)^n$ es acotada y no converge." }
    ],
    resumen: [
      "La definición $\\varepsilon$-$N$ dice que, para toda tolerancia $\\varepsilon>0$, existe un índice $N$ desde el cual todos los términos cumplen $|a_n-L|<\\varepsilon$.",
      "Para demostrar un límite se simplifica $|a_n-L|$, se acota por una expresión más simple y se elige $N$ en función de $\\varepsilon$, generalmente usando la propiedad arquimediana.",
      "Converger implica estar acotada, pero estar acotada no implica converger; $(-1)^n$ es el contraejemplo clásico."
    ],
    referencias: [
      { titulo: "Clase 21 — Límites y convergencia (PDF)", ruta: "recursos/clases/clase-21.pdf" },
      { titulo: "Apunte Clase 24 (PDF)", ruta: "recursos/apuntes/apunte-clase-24.pdf" },
      { titulo: "Guía 10 — Sucesiones (PDF)", ruta: "recursos/guias/guia-10-sucesiones.pdf" },
      { titulo: "Interrogación 6 MAT1107 2025 (PDF)", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin6-mat1107.pdf" }
    ]
  });
})();
