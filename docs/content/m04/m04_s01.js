/* Módulo 4 · Sección 1 — Sucesiones: definición y recursión */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m04_s01", modulo: 4, moduloNombre: "Módulo 4 · Sucesiones, sumatorias y binomio", orden: 22,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Sucesiones: definición y recursión",
    objetivo: "Reconocer una sucesión como una función definida en los naturales, calcular sus términos a partir de una fórmula explícita o recursiva, y demostrar por inducción propiedades de sucesiones definidas por recurrencia.",
    conexion: "Necesitas recordar la notación de conjuntos y la función $f:\\N\\to\\R$ vista en el Módulo 2. Una sucesión es exactamente eso: una función cuyo dominio son los números naturales, pero mirada como una lista ordenada de números.",
    fuente: "Clase 18 · Apunte 19 · Stewart §12.1",
    prerrequisitos: ["Funciones y notación $f(n)$", "Números naturales y factorial", "Principio de inducción matemática"],
    teoria: [
      { tipo: "texto", html: "<p>Una <b>sucesión</b> aparece cada vez que escribimos una lista infinita y ordenada de números: los días de una cuenta regresiva, los montos de una deuda mes a mes, la cantidad de bacterias en un cultivo o los términos de una fórmula. La idea central es que a cada posición $n$ le corresponde un único número $a_n$.</p><p>En esta sección aprenderemos a describir esas listas de dos maneras: con una <b>fórmula explícita</b>, que permite calcular directamente cualquier término, y con una <b>fórmula recursiva</b>, que indica cómo obtener cada término a partir del anterior.</p>" },
      { tipo: "definicion", titulo: "Sucesión de números reales", html: "<p>Una <b>sucesión de números reales</b> es una función $a:\\N\\to\\R$ que asocia a cada número natural $n$ un número real $a(n)=a_n$, llamado el <b>$n$-ésimo término</b> de la sucesión.</p><p>Escribimos la sucesión como una lista ordenada:</p>$$a_1,\\; a_2,\\; a_3,\\; \\dots,\\; a_n,\\; \\dots$$<p>y la denotamos $\\{a_n\\}_{n\\in\\N}$ o simplemente $\\{a_n\\}$. El subíndice $n$ se llama <b>índice</b> y NO es una potencia: $a_3$ se lee “a sub 3”, no “a al cubo”.</p>" },
      { tipo: "nota", titulo: "El índice y el punto de partida (Stewart §12.1)", html: "<p>En el curso trabajaremos casi siempre con $n=1,2,3,\\dots$, pero algunas sucesiones comienzan en $n=0$. Por ejemplo, $\\{2^n\\}_{n\\ge 0}$ produce $1,2,4,8,\\dots$, mientras que $\\{2^n\\}_{n\\ge 1}$ produce $2,4,8,16,\\dots$. <b>Siempre revisa desde qué valor parte el índice</b>: es la primera cosa que hay que mirar en un enunciado.</p>" },
      { tipo: "definicion", titulo: "Fórmula explícita y fórmula recursiva", html: "<p>Una sucesión está dada por una <b>fórmula explícita</b> cuando $a_n$ se escribe directamente en función de $n$. Por ejemplo, $a_n=2n$ genera $2,4,6,8,\\dots$</p><p>Está dada por una <b>fórmula recursiva</b> cuando se entrega uno o más términos iniciales y una regla que calcula $a_n$ usando términos anteriores. Por ejemplo:</p>$$a_1=2,\\qquad a_n=a_{n-1}+2\\quad\\text{para }n\\ge 2.$$<p>Esta misma sucesión también admite la forma explícita $a_n=2n$.</p>" },
      { tipo: "definicion", titulo: "El factorial y una recurrencia importante", html: "<p>El <b>factorial</b> de un natural se define por recurrencia:</p>$$0!=1,\\qquad n!=n\\cdot(n-1)!\\quad\\text{para }n\\ge 1.$$<p>Así, $1!=1$, $2!=2$, $3!=6$, $4!=24$ y $5!=120$. La sucesión de factoriales crece muy rápido; por eso conviene simplificar antes de calcular.</p>" },
      { tipo: "teorema", titulo: "Principio de inducción matemática", html: "<p>Sea $P(n)$ una propiedad que depende de $n\\in\\N$. Si</p><ol><li><b>caso base:</b> $P(1)$ es verdadera, y</li><li><b>paso inductivo:</b> para todo $k\\in\\N$, suponer $P(k)$ verdadera implica que $P(k+1)$ también lo es,</li></ol><p>entonces $P(n)$ es verdadera para todo $n\\in\\N$.</p><p>Este principio es la herramienta natural para demostrar que una fórmula explícita coincide con una sucesión definida por recurrencia.</p>" },
      { tipo: "teorema", titulo: "Sucesiones de sumas parciales", html: "<p>Dada una sucesión $\\{a_n\\}$, podemos construir una nueva sucesión sumando sus primeros términos:</p>$$s_1=a_1,\\qquad s_2=a_1+a_2,\\qquad s_3=a_1+a_2+a_3,\\;\\dots$$<p>En forma recursiva,</p>$$s_1=a_1,\\qquad s_n=s_{n-1}+a_n\\quad\\text{para }n\\ge 2.$$<p>La sucesión $\\{s_n\\}$ se llama <b>sucesión de sumas parciales</b> de $\\{a_n\\}$. Esta idea será la protagonista de la sección de sumatorias.</p>" },
      { tipo: "grafico", spec: { tipo: "sucesion", titulo: "Los términos de aₙ = 1/n se acercan a 0", terminos: [1, 0.5, 0.3333, 0.25, 0.2, 0.1667, 0.1429, 0.125, 0.1111, 0.1], limite: 0, label: "aₙ = 1/n", ylabel: "aₙ" } },
      { tipo: "tabla", titulo: "Los primeros términos de la sucesión de Fibonacci", headers: ["n", "1", "2", "3", "4", "5", "6", "7", "8"], rows: [["Fₙ", "1", "1", "2", "3", "5", "8", "13", "21"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> una fórmula explícita es como una receta que dice directamente “para la posición $n$ usa este número”. Una fórmula recursiva es como subir una escalera: te dicen dónde está el primer peldaño y cómo pasar de un peldaño al siguiente. Para llegar al peldaño 100 por recurrencia tendrías que pasar por los 99 anteriores; con la fórmula explícita, en cambio, vas directo.</div>" }
    ],
    ejemplos: [
      {
        titulo: "Leer una fórmula explícita",
        enunciado: "<p>Considere la sucesión $a_n=\\dfrac{n-1}{n+1}$ para $n\\ge 1$. Escriba sus cuatro primeros términos y calcule $a_{10}$.</p>",
        concepto: "Se usa la definición de sucesión: para obtener un término, se reemplaza el índice $n$ por la posición pedida en la fórmula explícita.",
        desarrollo: [
          "<b>Paso 1.</b> Reemplazamos $n=1$: $a_1=\\dfrac{1-1}{1+1}=\\dfrac{0}{2}=0$.",
          "<b>Paso 2.</b> Reemplazamos $n=2$: $a_2=\\dfrac{2-1}{2+1}=\\dfrac{1}{3}$.",
          "<b>Paso 3.</b> Reemplazamos $n=3$: $a_3=\\dfrac{3-1}{3+1}=\\dfrac{2}{4}=\\dfrac{1}{2}$.",
          "<b>Paso 4.</b> Reemplazamos $n=4$: $a_4=\\dfrac{4-1}{4+1}=\\dfrac{3}{5}$.",
          "<b>Paso 5.</b> Para $n=10$: $a_{10}=\\dfrac{10-1}{10+1}=\\dfrac{9}{11}$."
        ],
        respuesta: "Los primeros términos son $0,\\;\\dfrac13,\\;\\dfrac12,\\;\\dfrac35$; además $a_{10}=\\dfrac{9}{11}$.",
        grafico: { tipo: "sucesion", titulo: "aₙ = (n−1)/(n+1)", terminos: [0, 0.3333, 0.5, 0.6, 0.6667, 0.7143, 0.75, 0.7778], limite: 1, label: "aₙ = (n−1)/(n+1)", ylabel: "aₙ" }
      },
      {
        titulo: "Generar términos con una recurrencia",
        enunciado: "<p>La sucesión de Fibonacci se define por $F_1=1$, $F_2=1$ y $F_n=F_{n-1}+F_{n-2}$ para $n\\ge 3$. Calcule $F_3,F_4,F_5,F_6$ y $F_7$.</p>",
        concepto: "Se usa una fórmula recursiva de orden dos: cada término nuevo necesita los dos términos anteriores. Por eso deben conocerse los dos términos iniciales.",
        desarrollo: [
          "<b>Paso 1.</b> Para $n=3$: $F_3=F_2+F_1=1+1=2$.",
          "<b>Paso 2.</b> Para $n=4$: $F_4=F_3+F_2=2+1=3$.",
          "<b>Paso 3.</b> Para $n=5$: $F_5=F_4+F_3=3+2=5$.",
          "<b>Paso 4.</b> Para $n=6$: $F_6=F_5+F_4=5+3=8$.",
          "<b>Paso 5.</b> Para $n=7$: $F_7=F_6+F_5=8+5=13$."
        ],
        respuesta: "$F_3=2,\\;F_4=3,\\;F_5=5,\\;F_6=8,\\;F_7=13$.",
        grafico: { tipo: "sucesion", titulo: "Crecimiento de la sucesión de Fibonacci", terminos: [1, 1, 2, 3, 5, 8, 13, 21, 34], label: "Fₙ", ylabel: "Fₙ" }
      },
      {
        titulo: "Demostrar una fórmula explícita por inducción",
        enunciado: "<p>Sea $\\{x_n\\}$ la sucesión definida por $x_1=2$ y $x_{n+1}=x_n+3$. Demuestre por inducción que $x_n=3n-1$ para todo $n\\in\\N$.</p>",
        concepto: "Se aplica el principio de inducción para probar que la fórmula cerrada $3n-1$ reproduce exactamente la sucesión definida por recurrencia.",
        desarrollo: [
          "<b>Paso 1 (caso base).</b> Para $n=1$: $3\\cdot 1-1=2=x_1$. La propiedad se cumple.",
          "<b>Paso 2 (hipótesis inductiva).</b> Suponemos que para un cierto $k\\in\\N$ se tiene $x_k=3k-1$.",
          "<b>Paso 3 (paso inductivo).</b> Usando la recurrencia y luego la hipótesis inductiva: $$x_{k+1}=x_k+3=(3k-1)+3=3k+2=3(k+1)-1.$$",
          "<b>Paso 4 (conclusión).</b> La fórmula vale para $k+1$. Por el principio de inducción, $x_n=3n-1$ para todo $n\\in\\N$."
        ],
        respuesta: "$x_n=3n-1$ para todo $n\\in\\N$, lo que se prueba por inducción.",
        grafico: { tipo: "sucesion", titulo: "xₙ = 3n − 1", terminos: [2, 5, 8, 11, 14, 17, 20, 23], label: "xₙ = 3n − 1", ylabel: "xₙ" }
      }
    ],
    ejercicios: [
      {
        titulo: "Términos de una fórmula explícita",
        dificultad: "basico",
        enunciado: "<p>Considere $a_n=\\dfrac{n+1}{n}$. Escriba $a_1,a_2,a_3,a_4$ y calcule $a_{10}$.</p>",
        concepto: "Evaluación directa de una fórmula explícita.",
        pista: "Reemplaza $n$ por cada posición. No simplifiques de más: conviene ver el patrón.",
        desarrollo: [
          "$a_1=\\dfrac{2}{1}=2$.",
          "$a_2=\\dfrac{3}{2}$, $a_3=\\dfrac{4}{3}$ y $a_4=\\dfrac{5}{4}$.",
          "$a_{10}=\\dfrac{11}{10}$."
        ],
        respuesta: "$2,\\;\\dfrac32,\\;\\dfrac43,\\;\\dfrac54$; $a_{10}=\\dfrac{11}{10}$."
      },
      {
        titulo: "Recurrencia y fórmula cerrada",
        dificultad: "basico",
        enunciado: "<p>Sea $a_1=3$ y $a_{n+1}=2a_n-1$. Calcule $a_2,a_3,a_4,a_5$ y conjeture una fórmula explícita para $a_n$.</p>",
        concepto: "Uso de una fórmula recursiva y búsqueda de un patrón que permita escribir el término general.",
        pista: "Calcula los términos y compáralos con las potencias de 2: $2,4,8,16,\\dots$",
        desarrollo: [
          "$a_2=2\\cdot 3-1=5$.",
          "$a_3=2\\cdot 5-1=9$.",
          "$a_4=2\\cdot 9-1=17$ y $a_5=2\\cdot 17-1=33$.",
          "Los términos son $3,5,9,17,33,\\dots$, es decir, uno más que $2,4,8,16,32,\\dots$ Por lo tanto, la conjetura es $a_n=2^n+1$."
        ],
        respuesta: "$a_2=5,\\;a_3=9,\\;a_4=17,\\;a_5=33$; la fórmula es $a_n=2^n+1$."
      },
      {
        titulo: "Simplificar un cuociente con factoriales",
        dificultad: "intermedio",
        enunciado: "<p>Para la sucesión $a_n=\\dfrac{n!}{(n+2)!}$, simplifique la expresión y calcule $a_1,a_2,a_3$.</p>",
        concepto: "Propiedad recursiva del factorial: $(n+2)!=(n+2)(n+1)n!$.",
        pista: "Desarrolla $(n+2)!$ hasta que aparezca $n!$ para poder cancelar.",
        desarrollo: [
          "$(n+2)!=(n+2)(n+1)n!$.",
          "Entonces $a_n=\\dfrac{n!}{(n+2)(n+1)n!}=\\dfrac{1}{(n+1)(n+2)}$.",
          "$a_1=\\dfrac{1}{2\\cdot 3}=\\dfrac16$, $a_2=\\dfrac{1}{3\\cdot 4}=\\dfrac1{12}$ y $a_3=\\dfrac{1}{4\\cdot 5}=\\dfrac1{20}$."
        ],
        respuesta: "$a_n=\\dfrac{1}{(n+1)(n+2)}$; $a_1=\\dfrac16$, $a_2=\\dfrac1{12}$, $a_3=\\dfrac1{20}$."
      },
      {
        titulo: "Una identidad de Fibonacci por inducción",
        dificultad: "avanzado",
        enunciado: "<p>Sea $F_1=1$, $F_2=1$ y $F_n=F_{n-1}+F_{n-2}$ para $n\\ge 3$. Demuestre por inducción que $$F_1+F_2+\\cdots+F_n=F_{n+2}-1.$$</p>",
        concepto: "Inducción matemática aplicada a una suma de términos definidos por recurrencia.",
        pista: "En el paso inductivo, separa la suma hasta $k$ y luego suma $F_{k+1}$. Usa la recurrencia $F_{k+3}=F_{k+2}+F_{k+1}$.",
        desarrollo: [
          "<b>Caso base.</b> Para $n=1$: $F_1=1$ y $F_3-1=2-1=1$. Se cumple.",
          "<b>Hipótesis inductiva.</b> Supongamos que $F_1+\\cdots+F_k=F_{k+2}-1$.",
          "<b>Paso inductivo.</b> Sumamos $F_{k+1}$ a ambos lados: $$F_1+\\cdots+F_k+F_{k+1}=(F_{k+2}-1)+F_{k+1}.$$",
          "Reordenando y usando la recurrencia: $F_{k+1}+F_{k+2}=F_{k+3}$, luego el lado derecho es $F_{k+3}-1$.",
          "<b>Conclusión.</b> La identidad vale para $k+1$. Por inducción, vale para todo $n\\in\\N$."
        ],
        respuesta: "$F_1+\\cdots+F_n=F_{n+2}-1$ para todo $n\\in\\N$."
      },
      {
        titulo: "Una recurrencia con raíz cuadrada",
        dificultad: "avanzado",
        enunciado: "<p>Sea $a_1=1$ y $a_{n+1}=\\sqrt{2+a_n}$. Demuestre por inducción que $0<a_n<2$ para todo $n\\in\\N$ y que la sucesión es creciente.</p>",
        concepto: "Inducción para probar una cota y comparación de cuadrados para probar el crecimiento.",
        pista: "Para la cota, usa que si $0<a_k<2$, entonces $2<2+a_k<4$. Para el crecimiento, compara $a_{n+1}^2$ con $a_n^2$.",
        desarrollo: [
          "<b>Cota, caso base.</b> $a_1=1$, y $0<1<2$.",
          "<b>Cota, paso inductivo.</b> Si $0<a_k<2$, entonces $2<2+a_k<4$. Como la raíz cuadrada es creciente, $\\sqrt2<\\sqrt{2+a_k}<2$. En particular, $0<a_{k+1}<2$. Por inducción, $0<a_n<2$ para todo $n$.",
          "<b>Crecimiento.</b> Calculamos $$a_{n+1}^2-a_n^2=(2+a_n)-a_n^2=-(a_n-2)(a_n+1).$$ Como $0<a_n<2$, se tiene $a_n-2<0$ y $a_n+1>0$, así que $(a_n-2)(a_n+1)<0$. Con el signo menos delante, la diferencia $a_{n+1}^2-a_n^2$ es positiva, es decir, $a_{n+1}^2>a_n^2$.",
          "Como ambos términos son positivos, $a_{n+1}>a_n$. Por lo tanto, la sucesión es estrictamente creciente."
        ],
        respuesta: "$0<a_n<2$ para todo $n$, y $a_{n+1}>a_n$; la sucesión es creciente y acotada."
      }
    ],
    erroresComunes: [
      "Confundir el subíndice con un exponente: $a_3$ es el tercer término, no $a$ elevado a 3.",
      "Usar una fórmula recursiva sin entregar el o los términos iniciales: la recurrencia por sí sola no determina la sucesión.",
      "Comenzar la inducción en $n=0$ cuando la sucesión está definida desde $n=1$ (o viceversa).",
      "En el paso inductivo, usar la tesis que se quiere demostrar en lugar de la hipótesis inductiva.",
      "Simplificar factoriales cancelando términos aislados: $\\dfrac{(n+2)!}{n!}\\neq 2$, sino $(n+2)(n+1)$."
    ],
    checklist: [
      "Puedo explicar con mis palabras qué es una sucesión y cuál es su dominio.",
      "Sé calcular términos desde una fórmula explícita y desde una fórmula recursiva.",
      "Distingo el índice $n$ del valor del término $a_n$.",
      "Sé escribir los primeros términos de la sucesión de Fibonacci y de la sucesión de factoriales.",
      "Puedo demostrar por inducción que una fórmula explícita satisface una recurrencia.",
      "Reconozco la sucesión de sumas parciales y su fórmula recursiva."
    ],
    autoevaluacion: [
      { pregunta: "Si $a_n=2n-5$, entonces $a_4$ es:", opciones: ["$-3$", "$3$", "$13$", "$1$"], correcta: 1, explicacion: "$a_4=2\\cdot 4-5=8-5=3$." },
      { pregunta: "Sea $a_1=2$ y $a_{n+1}=3a_n-2$. Entonces $a_3$ es:", opciones: ["$8$", "$12$", "$10$", "$6$"], correcta: 2, explicacion: "$a_2=3\\cdot 2-2=4$ y $a_3=3\\cdot 4-2=10$." },
      { pregunta: "Con $F_1=F_2=1$ y $F_n=F_{n-1}+F_{n-2}$, el valor de $F_6$ es:", opciones: ["$8$", "$5$", "$13$", "$6$"], correcta: 0, explicacion: "La lista es $1,1,2,3,5,8,\\dots$, por lo que $F_6=8$." },
      { pregunta: "¿Cuál es una fórmula explícita para la sucesión $4,7,10,13,\\dots$?", opciones: ["$a_n=3n-1$", "$a_n=3n$", "$a_n=4n$", "$a_n=3n+1$"], correcta: 3, explicacion: "Para $n=1$ se obtiene $4$; la diferencia constante es $3$, así que $a_n=4+3(n-1)=3n+1$." },
      { pregunta: "Si $a_n=\\dfrac{(-1)^n}{n}$, entonces $a_5$ es:", opciones: ["$\\dfrac15$", "$-\\dfrac15$", "$-\\dfrac14$", "$\\dfrac14$"], correcta: 1, explicacion: "Como $5$ es impar, $(-1)^5=-1$, luego $a_5=-\\dfrac15$." },
      { pregunta: "Para la sucesión $a_n=n^2-1$, el término $a_3$ es:", opciones: ["$6$", "$9$", "$8$", "$10$"], correcta: 2, explicacion: "$a_3=3^2-1=9-1=8$." }
    ],
    resumen: [
      "Una sucesión es una función $a:\\N\\to\\R$; escribimos $\\{a_n\\}$ y llamamos $a_n$ al $n$-ésimo término.",
      "Una fórmula explícita calcula $a_n$ directamente; una fórmula recursiva necesita términos iniciales y una regla que usa términos anteriores.",
      "La inducción matemática permite demostrar que una fórmula explícita coincide con una sucesión definida por recurrencia."
    ],
    referencias: [
      { titulo: "Clase 18 — Sucesiones (PDF)", ruta: "recursos/clases/clase-18.pdf" },
      { titulo: "Apunte Clase 19 — Sucesiones (PDF)", ruta: "recursos/apuntes/apunte-clase-19.pdf" },
      { titulo: "Guía 9 — Progresiones, sumas y Teorema del Binomio (PDF)", ruta: "recursos/guias/guia-09-sucesiones-binomio.pdf" }
    ]
  });
})();
