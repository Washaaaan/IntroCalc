/* Módulo 1 · Sección 8 — Inducción matemática */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s08", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 8,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Inducción matemática",
    objetivo: "Aplicar el principio de inducción para demostrar proposiciones que dependen de un número natural, identificando correctamente el caso base, la hipótesis inductiva y el paso inductivo.",
    conexion: "Ya sabes demostrar desigualdades y trabajar con sumas. La inducción es la herramienta que permite extender una propiedad desde algunos casos particulares a todos los naturales.",
    fuente: "Apuntes Clases 6–7 · Mickenberg Cap. 5 · Interrogación 1",
    prerrequisitos: ["Números naturales", "Sumatorias finitas", "Desigualdades", "Divisibilidad"],
    teoria: [
      { tipo: "texto", html: "<p>Muchas afirmaciones matemáticas dependen de un número natural $n$: que $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$, que $2^n>2n+1$ para $n\\ge3$, o que $6^n-1$ es divisible por $5$. Verificar los primeros casos no basta: podrían fallar más adelante. La <b>inducción matemática</b> es un método de demostración que permite probar una afirmación para <b>todos</b> los naturales con solo dos pasos.</p>" },
      { tipo: "definicion", titulo: "Proposición indexada por $n$", html: "<p>Una <b>proposición indexada</b> es una afirmación $P(n)$ que depende de $n\\in\\N$ y que, para cada valor de $n$, es verdadera o falsa. Por ejemplo:</p>$$P(n):\\quad 1+2+\\cdots+n=\\frac{n(n+1)}{2}.$$<p>También podemos empezar en un natural $m_0$ distinto de $1$, por ejemplo $P(n)$ para $n\\ge3$.</p>" },
      { tipo: "teorema", titulo: "Principio de inducción matemática", html: "<p>Sea $m_0\\in\\N$ y sea $P(n)$ una proposición para $n\\ge m_0$. Si se cumplen:</p><ol><li><b>Caso base:</b> $P(m_0)$ es verdadera.</li><li><b>Paso inductivo:</b> para todo $k\\ge m_0$, si $P(k)$ es verdadera, entonces $P(k+1)$ es verdadera.</li></ol><p>Entonces $P(n)$ es verdadera para todo $n\\ge m_0$.</p><p>La suposición «$P(k)$ es verdadera» se llama <b>hipótesis inductiva</b> (H.I.). El paso inductivo no prueba $P(k)$ para un $k$ particular: prueba que <b>si</b> se cumple en $k$, entonces se cumple en el siguiente.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> imagina una fila infinita de dominós. El caso base es empujar el primero. El paso inductivo es asegurarse de que cada dominó, al caer, empuja al siguiente. Si ambas cosas ocurren, todos los dominós caen. Si falta el caso base, nadie empieza; si falla el paso inductivo, la cadena se corta en algún punto.</div>" },
      { tipo: "teorema", titulo: "Ejemplo clásico: suma de los primeros naturales", html: "<p>Para todo $n\\ge1$:</p>$$1+2+\\cdots+n=\\frac{n(n+1)}{2}.$$<p><b>Demostración por inducción.</b></p><p><b>Caso base.</b> Para $n=1$: el lado izquierdo es $1$ y el derecho es $\\dfrac{1\\cdot2}{2}=1$. Se cumple.</p><p><b>Hipótesis inductiva.</b> Supongamos que para algún $k\\ge1$ se cumple</p>$$1+2+\\cdots+k=\\frac{k(k+1)}{2}.$$<p><b>Paso inductivo.</b> Queremos probar el caso $k+1$:</p>$$1+2+\\cdots+k+(k+1)=\\frac{k(k+1)}{2}+(k+1).$$<p>Factorizamos $(k+1)$:</p>$$=\\frac{k(k+1)+2(k+1)}{2}=\\frac{(k+1)(k+2)}{2}.$$<p>Esta es exactamente la fórmula para $n=k+1$. Por el principio de inducción, la identidad vale para todo $n\\ge1$.</p>" },
      { tipo: "teorema", titulo: "Variantes: empezar más tarde e inducción fuerte", html: "<p><b>Empezar en $m_0$.</b> Si la afirmación solo vale desde cierto natural, el caso base es $P(m_0)$ y el paso inductivo se prueba para $k\\ge m_0$. Por ejemplo, $2^n>2n+1$ es falsa para $n=1$ y $n=2$, pero verdadera desde $n=3$.</p><p><b>Inducción fuerte.</b> En el paso inductivo se supone que $P(j)$ es verdadera para <b>todos</b> los $j$ con $m_0\\le j\\le k$, y se prueba $P(k+1)$. Es útil cuando el caso siguiente depende de varios casos anteriores, por ejemplo en sucesiones definidas por recurrencia.</p>" },
      { tipo: "tabla", titulo: "Buscar el punto de partida para $2^n>2n+1$", headers: ["$n$", "$2^n$", "$2n+1$", "¿Se cumple?"], rows: [["$1$", "$2$", "$3$", "No"], ["$2$", "$4$", "$5$", "No"], ["$3$", "$8$", "$7$", "Sí"], ["$4$", "$16$", "$9$", "Sí"], ["$5$", "$32$", "$11$", "Sí"]] },
      { tipo: "nota", titulo: "Inducción en el curso (Apuntes Clases 6–7 · Mickenberg Cap. 5)", html: "<p>El Apunte de la Clase 6 presenta el principio y lo aplica a la suma $1+2+\\cdots+n$; el de la Clase 7 continúa con la suma telescópica $\\sum_{j=1}^{n}\\dfrac{1}{j(j+1)}=\\dfrac{n}{n+1}$, con $2^n>2n+1$ y con la desigualdad de Bernoulli $(1+x)^n\\ge1+nx$ para $x\\ge-1$. En la Interrogación 1 aparecen demostraciones por inducción de divisibilidad, como $6^n-1$ divisible por $5$, y de desigualdades con sumas.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Suma de los primeros naturales",
        enunciado: "<p>Demuestre por inducción que para todo $n\\ge1$ se cumple $1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$.</p>",
        concepto: "Se aplica el principio de inducción: caso base, hipótesis inductiva y paso inductivo. En el paso se usa la H.I. para reemplazar la suma hasta $k$.",
        desarrollo: [
          "<b>Paso 1. Caso base ($n=1$).</b> El lado izquierdo es $1$; el derecho es $\\dfrac{1\\cdot2}{2}=1$. Se cumple.",
          "<b>Paso 2. Hipótesis inductiva.</b> Supongamos que para algún $k\\ge1$ se cumple $1+2+\\cdots+k=\\dfrac{k(k+1)}{2}$.",
          "<b>Paso 3. Paso inductivo.</b> Queremos probar la fórmula para $k+1$: $1+2+\\cdots+k+(k+1)$.",
          "<b>Paso 4.</b> Por la H.I., la suma hasta $k$ es $\\dfrac{k(k+1)}{2}$; entonces la suma hasta $k+1$ es $\\dfrac{k(k+1)}{2}+(k+1)$.",
          "<b>Paso 5.</b> Factorizamos $(k+1)$: $\\dfrac{k(k+1)+2(k+1)}{2}=\\dfrac{(k+1)(k+2)}{2}$.",
          "<b>Paso 6.</b> Esa es la fórmula con $n=k+1$. Por el principio de inducción, vale para todo $n\\ge1$."
        ],
        respuesta: "$1+2+\\cdots+n=\\dfrac{n(n+1)}{2}$ para todo $n\\ge1$."
      },
      {
        titulo: "Una desigualdad que empieza en 3",
        enunciado: "<p>Demuestre que $2^n>2n+1$ para todo entero $n\\ge3$.</p>",
        concepto: "Se usa la variante del principio de inducción con caso base $m_0=3$; en el paso se multiplica la desigualdad de la H.I. por $2$.",
        desarrollo: [
          "<b>Paso 1. Caso base ($n=3$).</b> $2^3=8$ y $2\\cdot3+1=7$; como $8>7$, se cumple.",
          "<b>Paso 2. Hipótesis inductiva.</b> Supongamos que para algún $k\\ge3$ se cumple $2^k>2k+1$.",
          "<b>Paso 3. Paso inductivo.</b> Multiplicamos por $2>0$: $2^{k+1}=2\\cdot2^k>2(2k+1)=4k+2$.",
          "<b>Paso 4.</b> Queremos comparar con $2(k+1)+1=2k+3$.",
          "<b>Paso 5.</b> Como $k\\ge3$, se tiene $4k+2>2k+3$ (equivale a $2k>1$).",
          "<b>Paso 6.</b> Por transitividad, $2^{k+1}>2k+3=2(k+1)+1$.",
          "<b>Paso 7.</b> Por inducción, la desigualdad vale para todo $n\\ge3$."
        ],
        respuesta: "$2^n>2n+1$ para todo $n\\ge3$."
      },
      {
        titulo: "Divisibilidad por 5",
        enunciado: "<p>Demuestre que $6^n-1$ es divisible por $5$ para todo $n\\ge1$.</p>",
        concepto: "Se usa inducción y se escribe el caso $k+1$ en función del caso $k$, separando una parte que ya es divisible por $5$.",
        desarrollo: [
          "<b>Paso 1. Caso base ($n=1$).</b> $6^1-1=5$, que es divisible por $5$.",
          "<b>Paso 2. Hipótesis inductiva.</b> Supongamos que $6^k-1$ es divisible por $5$, es decir, $6^k-1=5m$ para algún entero $m$.",
          "<b>Paso 3. Paso inductivo.</b> Calculamos $6^{k+1}-1$.",
          "<b>Paso 4.</b> Escribimos $6^{k+1}-1=6\\cdot6^k-1=6(6^k-1)+5$.",
          "<b>Paso 5.</b> Por la H.I., $6^k-1=5m$; entonces $6^{k+1}-1=6\\cdot5m+5=5(6m+1)$.",
          "<b>Paso 6.</b> El resultado es múltiplo de $5$, así que $6^{k+1}-1$ es divisible por $5$.",
          "<b>Paso 7.</b> Por el principio de inducción, $6^n-1$ es divisible por $5$ para todo $n\\ge1$."
        ],
        respuesta: "$6^n-1$ es divisible por $5$ para todo $n\\ge1$."
      }
    ],
    ejercicios: [
      {
        titulo: "Suma de impares",
        dificultad: "basico",
        enunciado: "<p>Demuestre por inducción que $1+3+5+\\cdots+(2n-1)=n^2$ para todo $n\\ge1$.</p>",
        concepto: "Se usa inducción con caso base $n=1$; en el paso se suma el siguiente impar al cuadrado de la H.I.",
        pista: "El término que se agrega al pasar de $k$ a $k+1$ es $2(k+1)-1=2k+1$.",
        desarrollo: [
          "Caso base $n=1$: $1=1^2$, correcto.",
          "H.I.: supongamos que $1+3+\\cdots+(2k-1)=k^2$.",
          "Paso inductivo: $1+3+\\cdots+(2k-1)+(2k+1)=k^2+(2k+1)$.",
          "Reconociendo el cuadrado del binomio: $k^2+2k+1=(k+1)^2$.",
          "Por inducción, la identidad vale para todo $n\\ge1$."
        ],
        respuesta: "$1+3+\\cdots+(2n-1)=n^2$."
      },
      {
        titulo: "Factorial versus potencia",
        dificultad: "basico",
        enunciado: "<p>Demuestre que $n!\\ge2^{n-1}$ para todo $n\\ge1$.</p>",
        concepto: "Se usa que $(k+1)!=(k+1)k!$ y que $k+1\\ge2$ para $k\\ge1$.",
        pista: "En el paso inductivo, multiplica la desigualdad de la H.I. por $k+1$.",
        desarrollo: [
          "Caso base $n=1$: $1!=1$ y $2^{0}=1$; se cumple con igualdad.",
          "H.I.: supongamos que $k!\\ge2^{k-1}$ para algún $k\\ge1$.",
          "Paso inductivo: $(k+1)!=(k+1)k!\\ge(k+1)2^{k-1}$.",
          "Como $k\\ge1$, se tiene $k+1\\ge2$; por lo tanto $(k+1)2^{k-1}\\ge2\\cdot2^{k-1}=2^k$.",
          "Así, $(k+1)!\\ge2^k$, que es la afirmación para $n=k+1$."
        ],
        respuesta: "$n!\\ge2^{n-1}$ para todo $n\\ge1$."
      },
      {
        titulo: "Suma telescópica",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que para todo $n\\ge1$:</p>$$\\frac{1}{1\\cdot2}+\\frac{1}{2\\cdot3}+\\cdots+\\frac{1}{n(n+1)}=\\frac{n}{n+1}.$$",
        concepto: "Se aplica inducción y se usa la H.I. para reemplazar la suma hasta $k$; luego se hace álgebra de fracciones.",
        pista: "Al pasar de $k$ a $k+1$ se agrega $\\dfrac{1}{(k+1)(k+2)}$.",
        desarrollo: [
          "Caso base $n=1$: $\\dfrac{1}{1\\cdot2}=\\dfrac12=\\dfrac{1}{1+1}$, correcto.",
          "H.I.: supongamos que la suma hasta $k$ vale $\\dfrac{k}{k+1}$.",
          "Paso inductivo: la suma hasta $k+1$ es $\\dfrac{k}{k+1}+\\dfrac{1}{(k+1)(k+2)}$.",
          "Unificamos: $\\dfrac{k(k+2)+1}{(k+1)(k+2)}$.",
          "El numerador es $k^2+2k+1=(k+1)^2$.",
          "Entonces la suma es $\\dfrac{(k+1)^2}{(k+1)(k+2)}=\\dfrac{k+1}{k+2}$.",
          "Es la fórmula con $n=k+1$; por inducción, vale para todo $n\\ge1$."
        ],
        respuesta: "$\\displaystyle\\sum_{j=1}^{n}\\frac{1}{j(j+1)}=\\frac{n}{n+1}$."
      },
      {
        titulo: "Una desigualdad exponencial",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $3^n\\ge1+2n$ para todo $n\\ge1$.</p>",
        concepto: "Se usa inducción y se compara $3(1+2k)$ con $1+2(k+1)$.",
        pista: "Multiplica la H.I. por $3$ y muestra que $3+6k\\ge3+2k$.",
        desarrollo: [
          "Caso base $n=1$: $3^1=3$ y $1+2\\cdot1=3$; se cumple con igualdad.",
          "H.I.: supongamos que $3^k\\ge1+2k$.",
          "Paso inductivo: $3^{k+1}=3\\cdot3^k\\ge3(1+2k)=3+6k$.",
          "Queremos comparar con $1+2(k+1)=3+2k$.",
          "Como $k\\ge1$, $3+6k\\ge3+2k$. Por transitividad, $3^{k+1}\\ge3+2k=1+2(k+1)$.",
          "Por inducción, $3^n\\ge1+2n$ para todo $n\\ge1$."
        ],
        respuesta: "$3^n\\ge1+2n$ para todo $n\\ge1$."
      },
      {
        titulo: "Polinomio versus exponencial",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que $n^2<2^n$ para todo entero $n\\ge5$.</p>",
        concepto: "Se usa inducción desde $n=5$ y una desigualdad auxiliar $2k+1\\le2^k$, que también se prueba por inducción.",
        pista: "En el paso, $(k+1)^2=k^2+2k+1$. Usa la H.I. y prueba que $2k+1\\le2^k$ para $k\\ge5$.",
        desarrollo: [
          "Caso base $n=5$: $5^2=25$ y $2^5=32$; como $25<32$, se cumple.",
          "H.I.: supongamos que $k^2<2^k$ para algún $k\\ge5$.",
          "Paso inductivo: $(k+1)^2=k^2+2k+1<2^k+2k+1$.",
          "Afirmamos que $2k+1\\le2^k$ para $k\\ge5$. Para $k=5$: $11\\le32$. Si vale para $k$, entonces $2(k+1)+1=2k+3\\le2^k+2\\le2^k+2^k=2^{k+1}$, porque $2\\le2^k$.",
          "Entonces $(k+1)^2<2^k+2^k=2^{k+1}$.",
          "Por inducción, $n^2<2^n$ para todo $n\\ge5$."
        ],
        respuesta: "$n^2<2^n$ para todo entero $n\\ge5$."
      }
    ],
    erroresComunes: [
      "Verificar solo casos particulares y creer que eso demuestra la proposición para todo $n$.",
      "Omitir el caso base y demostrar únicamente el paso inductivo.",
      "Suponer en el paso inductivo lo que se quiere probar, es decir, usar $P(k+1)$ en lugar de $P(k)$.",
      "No usar la hipótesis inductiva en ningún momento del paso inductivo.",
      "Empezar la inducción en $n=1$ cuando la proposición solo es verdadera desde $n=3$ o $n=5$."
    ],
    checklist: [
      "Sé identificar la proposición $P(n)$ y el natural inicial $m_0$.",
      "Sé escribir y verificar el caso base.",
      "Sé enunciar con claridad la hipótesis inductiva.",
      "Sé usar la H.I. para demostrar el caso $k+1$.",
      "Sé concluir invocando el principio de inducción.",
      "Reconozco cuándo conviene usar la variante que empieza en $m_0$ o la inducción fuerte."
    ],
    autoevaluacion: [
      { pregunta: "El caso base en una inducción que afirma algo para todo $n\\ge3$ debe ser:", opciones: ["$n=0$", "$n=1$", "$n=3$", "Cualquier $n$"], correcta: 2, explicacion: "Si la proposición se afirma desde $n=3$, el caso base es $P(3)$." },
      { pregunta: "En el paso inductivo se supone verdadero:", opciones: ["$P(k+1)$", "$P(k)$", "$P(n)$ para todo $n$", "Nada"], correcta: 1, explicacion: "La hipótesis inductiva es $P(k)$; a partir de ella se demuestra $P(k+1)$." },
      { pregunta: "La suma $1+2+\\cdots+10$ vale:", opciones: ["$45$", "$50$", "$55$", "$100$"], correcta: 2, explicacion: "Por la fórmula, $\\dfrac{10\\cdot11}{2}=55$." },
      { pregunta: "Si se demuestra $P(1)$ y que $P(k)\\Rightarrow P(k+1)$ para todo $k\\ge1$, se concluye:", opciones: ["$P(n)$ solo para $n$ par", "$P(n)$ para todo $n\\ge1$", "$P(n)$ solo hasta $n=100$", "Nada más"], correcta: 1, explicacion: "Eso es exactamente el principio de inducción." },
      { pregunta: "¿Cuál es el error en: «Como $2^1>3$ es falso, la proposición $2^n>2n+1$ es falsa para todo $n»?", opciones: ["Ninguno", "No se probó el paso inductivo ni se buscó el $n$ desde el cual vale", "Se equivocó el cálculo de $2^1$", "Falta elevar al cuadrado"], correcta: 1, explicacion: "La proposición puede ser falsa en $n=1$ y verdadera desde $n=3$; hay que identificar el caso base correcto y demostrar el paso inductivo." },
      { pregunta: "En la demostración de $6^n-1$ divisible por $5$, la H.I. se usa para:", opciones: ["Reemplazar $6^k-1$ por un múltiplo de $5$", "Calcular $6^{k+1}$ directamente", "Probar el caso $n=1$", "Definir la divisibilidad"], correcta: 0, explicacion: "Se escribe $6^{k+1}-1=6(6^k-1)+5$ y se usa que $6^k-1$ es múltiplo de $5$ por H.I." }
    ],
    resumen: [
      "La inducción demuestra una proposición para todos los naturales a partir de un caso base y un paso inductivo.",
      "El paso inductivo supone $P(k)$ (hipótesis inductiva) y debe demostrar $P(k+1)$ usando esa suposición.",
      "Si la afirmación empieza en $m_0$, el caso base es $P(m_0)$; la inducción fuerte permite usar todos los casos anteriores."
    ],
    referencias: [
      { titulo: "Apunte Clase 6 — Inducción matemática (PDF)", ruta: "recursos/apuntes/apunte-clase-06.pdf" },
      { titulo: "Apunte Clase 7 — Inducción continuación (PDF)", ruta: "recursos/apuntes/apunte-clase-07.pdf" },
      { titulo: "Mickenberg, Precálculo (Cap. 5)", ruta: "recursos/libros/precalculo-mickenberg.pdf" },
      { titulo: "Interrogación 1 2020 — Inducción y sumas (PDF)", ruta: "recursos/pruebas/PRUEBAS/2020-1/i1-mat1107.pdf" }
    ]
  });
})();
