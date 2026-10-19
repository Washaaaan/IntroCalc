/* Módulo 2 · Sección 1 — Relaciones y funciones: dominio y recorrido */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m02_s01", modulo: 2, moduloNombre: "Módulo 2 · Funciones y gráficas", orden: 9,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Relaciones y funciones: dominio y recorrido",
    objetivo: "Distinguir una relación de una función usando la definición formal, y determinar el dominio maximal y el recorrido de funciones dadas por una regla de asignación.",
    conexion: "Necesitas recordar conjuntos, producto cartesiano, intervalos, inecuaciones y valor absoluto del Módulo 1. Esas herramientas permiten describir con precisión dónde vive una función y qué valores puede tomar.",
    fuente: "Clase 08 · Apuntes 08–09 · Stewart §2.1–2.3 · Mickenberg §3.1–3.6",
    prerrequisitos: ["Producto cartesiano", "Intervalos y desigualdades", "Inecuaciones racionales", "Valor absoluto"],
    teoria: [
      {
        tipo: "texto",
        html: "<p>Una <b>función</b> es una máquina de asignación: entra un número $x$, sale un único número $f(x)$. Esa idea aparece en la temperatura de una ciudad a lo largo del día, en el precio de un pasaje según la distancia y en la altura de un proyectil según el tiempo. Para que la máquina funcione bien necesitamos dos datos: <b>qué entradas están permitidas</b> (el dominio) y <b>qué salidas se producen</b> (el recorrido).</p>"
      },
      {
        tipo: "definicion",
        titulo: "Producto cartesiano y relación",
        html: "<p>Dados dos conjuntos no vacíos $A$ y $B$, el <b>producto cartesiano</b> es</p>$$A\\times B=\\{(a,b):a\\in A,\\ b\\in B\\}.$$<p>Un par ordenado $(a,b)$ es distinto de $(b,a)$: el orden importa. Una <b>relación</b> de $A$ en $B$ es cualquier subconjunto $R\\subseteq A\\times B$. Escribimos $a\\,R\\,b$ cuando $(a,b)\\in R$.</p>"
      },
      {
        tipo: "nota",
        titulo: "Par ordenado versus conjunto (Apunte 8)",
        html: "<p>No confundas $(a,b)$ con $\\{a,b\\}$. El primero es un <b>par ordenado</b>; el segundo es un conjunto y no tiene orden. Por ejemplo, $(2,3)\\neq(3,2)$, pero $\\{2,3\\}=\\{3,2\\}$. Esta diferencia es la que permite hablar de una relación como un conjunto de pares ordenados.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Función: definición formal",
        html: "<p>Una relación $f\\subseteq A\\times B$ es una <b>función de $A$ en $B$</b> si y solo si</p>$$(\\forall x\\in A)(\\exists!\\,y\\in B)\\quad (x,y)\\in f.$$<p>Es decir: <b>cada</b> elemento de $A$ debe estar relacionado con <b>exactamente un</b> elemento de $B$. Al único $y$ asociado a $x$ lo escribimos $y=f(x)$. El conjunto $A$ es el <b>dominio</b> y $B$ es el <b>conjunto de llegada</b> (o codominio).</p>"
      },
      {
        tipo: "nota",
        titulo: "Dominio, conjunto de llegada y recorrido (Clase 08)",
        html: "<p>En las diapositivas se usa la notación $f:A\\to B$ y se llama a $B$ «recorrido». Para evitar confusiones, en este apunte separaremos dos ideas: $B$ es el <b>conjunto donde la función puede tomar valores</b> (conjunto de llegada), mientras que el <b>recorrido</b> es el conjunto de valores que efectivamente aparecen:</p>$$\\operatorname{Rec}(f)=\\{f(x):x\\in A\\}\\subseteq B.$$<p>Así, $f:\\R\\to\\R$, $f(x)=x^2$, tiene conjunto de llegada $\\R$, pero su recorrido es $[0,+\\infty[$.</p>"
      },
      {
        tipo: "definicion",
        titulo: "Dominio maximal de una regla de asignación",
        html: "<p>Cuando solo se entrega una fórmula $y=f(x)$, se conviene que el dominio es el <b>mayor subconjunto de $\\R$</b> donde la fórmula produce un número real:</p>$$\\operatorname{Dom}(f)=\\{x\\in\\R:f(x)\\in\\R\\}.$$<p>Las restricciones típicas son: denominador distinto de cero y cantidad subradical de una raíz de índice par mayor o igual que cero.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Cómo calcular un dominio maximal",
        html: "<p>Para una regla formada por sumas, restas, productos, cocientes y raíces, imponemos <b>todas</b> las condiciones a la vez:</p><ul><li>$\\dfrac{1}{g(x)}$ exige $g(x)\\neq0$.</li><li>$\\sqrt{g(x)}$ exige $g(x)\\ge0$.</li><li>$\\sqrt[3]{g(x)}$ no impone restricción adicional.</li><li>Si hay varias condiciones, el dominio es la <b>intersección</b> de sus soluciones.</li></ul><p>Una raíz en el denominador, como $\\dfrac{1}{\\sqrt{g(x)}}$, exige $g(x)>0$, porque además el denominador no puede anularse.</p>"
      },
      {
        tipo: "teorema",
        titulo: "Cómo calcular un recorrido",
        html: "<p>$y\\in\\operatorname{Rec}(f)$ si y solo si existe $x\\in\\operatorname{Dom}(f)$ tal que $y=f(x)$. En la práctica:</p><ol><li>Igualamos $y=f(x)$ y despejamos $x$ en función de $y$.</li><li>Imponemos que la expresión obtenida para $x$ pertenezca al dominio.</li><li>Traducimos esas condiciones a desigualdades para $y$.</li></ol><p>Para una cuadrática, completar el cuadrado suele ser más rápido: $a(x-h)^2+k$ muestra de inmediato el valor mínimo o máximo.</p>"
      },
      {
        tipo: "html",
        html: "<div class='callout'><b>En palabras simples:</b> el dominio responde «¿qué puedo meter en la máquina?» y el recorrido responde «¿qué puede salir de la máquina?». Una relación puede tener varias salidas para una misma entrada; una función, nunca.</div>"
      },
      {
        tipo: "grafico",
        spec: {
          tipo: "plot2d", titulo: "La gráfica de f(x) = √(4 − x²) es la mitad superior de una circunferencia",
          funciones: [{ f: function (x) { return Math.sqrt(4 - x * x); }, desde: -2, hasta: 2, label: "f(x)=√(4−x²)", color: "#1e5eff" }],
          xlabel: "x", ylabel: "y", rangeX: [-3, 3], rangeY: [-1, 3]
        }
      },
      {
        tipo: "tabla",
        titulo: "Una relación sencilla: pares (x, y)",
        headers: ["x", "1", "2", "3"],
        rows: [["y", "2", "3", "2"]]
      },
      {
        tipo: "nota",
        titulo: "Dónde leer más (Stewart §2.1–2.3; Mickenberg §3.4–3.6)",
        html: "<p>Stewart introduce la definición de función, las gráficas y la información que se extrae de ellas en las secciones 2.1 a 2.3. Mickenberg desarrolla relaciones, concepto de función, gráficas y estudio de una función real en el Capítulo 3. Conviene comparar la definición de «recorrido» con la de «conjunto de llegada» en ambos textos.</p>"
      }
    ],
    ejemplos: [
      {
        titulo: "¿Relación o función?",
        enunciado: "<p>Sean $A=\\{1,2,3\\}$ y $B=\\{2,3,4\\}$. Considere la relación $$R=\\{(1,2),(1,3),(2,3),(3,2)\\}.$$ ¿Es $R$ una función de $A$ en $B$? Si no lo es, indique qué par habría que eliminar para que sí lo sea, y determine dominio y recorrido de la relación resultante.</p>",
        concepto: "Se usa la definición formal de función: cada elemento del dominio debe tener una y solo una imagen. Basta encontrar una entrada con dos salidas distintas para romper la unicidad.",
        desarrollo: [
          "<b>Paso 1.</b> Revisamos las primeras componentes: $1,1,2,3$. El elemento $1$ aparece dos veces, asociado a $2$ y a $3$.",
          "<b>Paso 2.</b> Por lo tanto, $1$ tiene dos imágenes distintas: $(1,2)\\in R$ y $(1,3)\\in R$. La relación <b>no</b> es función.",
          "<b>Paso 3.</b> Eliminamos, por ejemplo, $(1,3)$. Ahora cada entrada tiene una sola salida: $1\\mapsto2$, $2\\mapsto3$, $3\\mapsto2$.",
          "<b>Paso 4.</b> El dominio es $\\{1,2,3\\}$ y el recorrido es $\\{2,3\\}$."
        ],
        respuesta: "$R$ no es función. Al quitar $(1,3)$, la función resultante tiene $\\operatorname{Dom}=\\{1,2,3\\}$ y $\\operatorname{Rec}=\\{2,3\\}$."
      },
      {
        titulo: "Dominio de una raíz con cociente",
        enunciado: "<p>Determine el mayor dominio posible de $$f(x)=\\sqrt{\\frac{2x-3}{x^2-1}}.$$</p>",
        concepto: "Aplicamos dos restricciones simultáneas: la cantidad subradical debe ser no negativa y el denominador no puede anularse. Luego resolvemos una inecuación racional con tabla de signos, tal como en el Módulo 1.",
        desarrollo: [
          "<b>Paso 1.</b> La raíz exige $\\dfrac{2x-3}{x^2-1}\\ge0$. Además, $x^2-1\\neq0$, es decir, $x\\neq-1$ y $x\\neq1$.",
          "<b>Paso 2.</b> Factorizamos el denominador: $x^2-1=(x-1)(x+1)$. Los puntos críticos son $x=-1$, $x=1$ y $x=\\tfrac32$.",
          "<b>Paso 3.</b> Hacemos la tabla de signos. En $(-\\infty,-1)$: numerador negativo y denominador positivo, cociente negativo. En $(-1,1)$: negativo entre negativo, cociente positivo. En $(1,\\tfrac32)$: negativo entre positivo, cociente negativo. En $(\\tfrac32,+\\infty)$: positivo entre positivo, cociente positivo.",
          "<b>Paso 4.</b> La fracción es positiva en $(-1,1)$ y en $(\\tfrac32,+\\infty)$. En $x=\\tfrac32$ vale $0$, que sí está permitido. En $x=\\pm1$ el denominador se anula, así que se excluyen.",
          "<b>Paso 5.</b> Por lo tanto, $$\\operatorname{Dom}(f)=(-1,1)\\cup\\left[\\tfrac32,+\\infty\\right[.$$"
        ],
        respuesta: "$\\operatorname{Dom}(f)=(-1,1)\\cup\\left[\\tfrac32,+\\infty\\right[$."
      },
      {
        titulo: "Recorrido completando el cuadrado",
        enunciado: "<p>Determine el recorrido de $f(x)=x^2+2x+4$.</p>",
        concepto: "La función es cuadrática y su gráfica es una parábola que abre hacia arriba. Completando el cuadrado obtenemos la forma vértice, que muestra directamente el valor mínimo y el recorrido.",
        desarrollo: [
          "<b>Paso 1.</b> Reordenamos y completamos el cuadrado: $$x^2+2x+4=(x^2+2x+1)+3=(x+1)^2+3.$$",
          "<b>Paso 2.</b> Como $(x+1)^2\\ge0$ para todo $x\\in\\R$, se tiene $f(x)\\ge3$.",
          "<b>Paso 3.</b> La igualdad $f(x)=3$ ocurre cuando $x+1=0$, es decir, $x=-1$. Entonces $3$ sí se alcanza.",
          "<b>Paso 4.</b> Además, al hacer crecer $|x+1|$, el valor $f(x)$ crece sin cota. Así, todos los números mayores o iguales que $3$ aparecen.",
          "<b>Paso 5.</b> Por lo tanto, $\\operatorname{Rec}(f)=[3,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Rec}(f)=[3,+\\infty[$.",
        grafico: {
          tipo: "plot2d", titulo: "f(x) = x² + 2x + 4 tiene mínimo 3 en x = −1",
          funciones: [{ f: function (x) { return x * x + 2 * x + 4; }, desde: -5, hasta: 3, label: "f(x)=x²+2x+4", color: "#1e5eff" }],
          asintotas: [{ tipo: "horizontal", y: 3, color: "#e17055" }],
          xlabel: "x", ylabel: "y", rangeX: [-5, 3], rangeY: [-1, 10]
        }
      }
    ],
    ejercicios: [
      {
        titulo: "Detectar una función",
        dificultad: "basico",
        enunciado: "<p>Sean $A=\\{a,b,c\\}$ y $B=\\{1,2,3\\}$. La relación es $$R=\\{(a,1),(b,2),(c,1),(c,3)\\}.$$ ¿Es una función? Si se elimina $(c,3)$, ¿cuál es el dominio y cuál el recorrido?</p>",
        concepto: "Una relación es función si cada elemento del dominio tiene exactamente una imagen.",
        pista: "Mira cuántas veces aparece la primera componente $c$.",
        desarrollo: [
          "La entrada $c$ aparece en $(c,1)$ y en $(c,3)$, es decir, tiene dos imágenes distintas. Por lo tanto, $R$ no es función.",
          "Al eliminar $(c,3)$ queda $\\{(a,1),(b,2),(c,1)\\}$.",
          "Cada entrada tiene una sola salida: $\\operatorname{Dom}=\\{a,b,c\\}$.",
          "Las salidas que aparecen son $1$ y $2$: $\\operatorname{Rec}=\\{1,2\\}$."
        ],
        respuesta: "No es función. Al eliminar $(c,3)$: $\\operatorname{Dom}=\\{a,b,c\\}$ y $\\operatorname{Rec}=\\{1,2\\}$."
      },
      {
        titulo: "Dominio con raíz y denominador",
        dificultad: "basico",
        enunciado: "<p>Determine el mayor dominio posible de $$f(x)=\\frac{1}{x-3}+\\sqrt{x+2}.$$</p>",
        concepto: "Se combinan la restricción de una raíz par y la de un denominador no nulo.",
        pista: "Pide $x+2\\ge0$ y, por separado, $x-3\\neq0$.",
        desarrollo: [
          "La raíz exige $x+2\\ge0$, es decir, $x\\ge-2$.",
          "El denominador exige $x-3\\neq0$, es decir, $x\\neq3$.",
          "Intersecamos: los números desde $-2$ en adelante, excepto $3$.",
          "Por lo tanto, $\\operatorname{Dom}(f)=[-2,3[\\cup]3,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=[-2,3[\\cup]3,+\\infty[$."
      },
      {
        titulo: "Inecuación racional bajo la raíz",
        dificultad: "intermedio",
        enunciado: "<p>Determine el mayor dominio posible de $$f(x)=\\sqrt{\\frac{x-1}{x+3}}.$$</p>",
        concepto: "La raíz exige que el cociente sea no negativo y el denominador debe ser distinto de cero. Se resuelve con puntos críticos y tabla de signos.",
        pista: "Los puntos críticos son $x=-3$ y $x=1$. No olvides excluir $-3$.",
        desarrollo: [
          "Condiciones: $\\dfrac{x-1}{x+3}\\ge0$ y $x+3\\neq0$.",
          "Puntos críticos: $x=1$ (numerador) y $x=-3$ (denominador).",
          "En $(-\\infty,-3)$: negativo entre negativo, cociente positivo.",
          "En $(-3,1)$: negativo entre positivo, cociente negativo.",
          "En $(1,+\\infty)$: positivo entre positivo, cociente positivo.",
          "En $x=1$ el cociente vale $0$, permitido. En $x=-3$ el denominador se anula, excluido.",
          "Así, $\\operatorname{Dom}(f)=(-\\infty,-3)\\cup[1,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=(-\\infty,-3)\\cup[1,+\\infty[$."
      },
      {
        titulo: "Recorrido de una raíz desplazada",
        dificultad: "intermedio",
        enunciado: "<p>Determine el dominio y el recorrido de $f(x)=\\sqrt{x-1}+2$.</p>",
        concepto: "Primero se determina el dominio de la raíz; luego se despeja $x$ en función de $y$ y se impone que ese $x$ pertenezca al dominio.",
        pista: "Si $y=\\sqrt{x-1}+2$, entonces $y-2=\\sqrt{x-1}$. Una raíz cuadrada nunca es negativa.",
        desarrollo: [
          "Dominio: $x-1\\ge0$, luego $\\operatorname{Dom}(f)=[1,+\\infty[$.",
          "Sea $y\\in\\operatorname{Rec}(f)$. Entonces $y=\\sqrt{x-1}+2$ para algún $x\\ge1$.",
          "Despejamos: $y-2=\\sqrt{x-1}\\ge0$, por lo que necesariamente $y\\ge2$.",
          "Elevando al cuadrado: $(y-2)^2=x-1$, es decir, $x=(y-2)^2+1$.",
          "Si $y\\ge2$, entonces $x\\ge1$, así que este $x$ sí pertenece al dominio.",
          "Por lo tanto, $\\operatorname{Rec}(f)=[2,+\\infty[$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=[1,+\\infty[$ y $\\operatorname{Rec}(f)=[2,+\\infty[$."
      },
      {
        titulo: "Recorrido de una función racional",
        dificultad: "avanzado",
        enunciado: "<p>Determine el recorrido de $$f(x)=\\frac{x}{x^2+1}.$$</p>",
        concepto: "Se usa la definición de recorrido: para cada $y$ buscamos un $x$ real que satisfaga $y=f(x)$. El discriminante de la ecuación cuadrática resultante decide cuándo existe tal $x$.",
        pista: "Multiplica por $x^2+1$ y ordena como una ecuación cuadrática en $x$: $yx^2-x+y=0$.",
        desarrollo: [
          "Sea $y\\in\\R$. Buscamos $x\\in\\R$ tal que $y=\\dfrac{x}{x^2+1}$.",
          "Como $x^2+1>0$, podemos multiplicar: $y(x^2+1)=x$, es decir, $yx^2-x+y=0$.",
          "Si $y=0$, la ecuación queda $-x=0$, así que $x=0$ y $0$ sí está en el recorrido.",
          "Si $y\\neq0$, es una ecuación cuadrática en $x$. Para que tenga soluciones reales, su discriminante debe ser no negativo: $$\\Delta=(-1)^2-4(y)(y)=1-4y^2\\ge0.$$",
          "Resolvemos $1-4y^2\\ge0$, equivalentemente $y^2\\le\\tfrac14$, o sea $-\\tfrac12\\le y\\le\\tfrac12$.",
          "Los valores extremos se alcanzan: $f(1)=\\tfrac12$ y $f(-1)=-\\tfrac12$.",
          "Por lo tanto, $\\operatorname{Rec}(f)=\\left[-\\tfrac12,\\tfrac12\\right]$."
        ],
        respuesta: "$\\operatorname{Rec}(f)=\\left[-\\tfrac12,\\tfrac12\\right]$."
      }
    ],
    erroresComunes: [
      "Creer que toda relación es una función. Por ejemplo, $\\{(1,2),(1,3)\\}$ es relación, pero no función.",
      "Confundir el conjunto de llegada con el recorrido: $f:\\R\\to\\R$, $f(x)=x^2$, no toma valores negativos.",
      "Olvidar excluir los ceros del denominador al resolver una inecuación racional.",
      "Elevar al cuadrado sin controlar el signo: $y=\\sqrt{x-1}$ obliga a $y\\ge0$.",
      "Decir que el recorrido de una cuadrática es siempre $\\R$; la parábola tiene un mínimo o un máximo."
    ],
    checklist: [
      "Puedo explicar con mis palabras la diferencia entre relación y función.",
      "Sé escribir el dominio y el recorrido usando notación de conjuntos e intervalos.",
      "Reconozco las restricciones de raíces pares y denominadores.",
      "Puedo resolver una inecuación racional con tabla de signos para hallar un dominio.",
      "Sé completar el cuadrado para obtener el recorrido de una cuadrática.",
      "Puedo justificar un recorrido despejando $x$ en función de $y$."
    ],
    autoevaluacion: [
      {
        pregunta: "Con $A=\\{1,2\\}$ y $B=\\{3,4\\}$, ¿cuál de estas relaciones es una función de $A$ en $B$?",
        opciones: ["$\\{(1,3),(1,4)\\}$", "$\\{(1,3),(2,4)\\}$", "$\\{(1,3),(2,3),(2,4)\\}$", "$\\{(1,4)\\}$"],
        correcta: 1,
        explicacion: "Solo $\\{(1,3),(2,4)\\}$ asigna exactamente una imagen a cada elemento de $A$. La primera repite la entrada $1$; la tercera repite la entrada $2$; la cuarta deja sin imagen al $2$."
      },
      {
        pregunta: "El mayor dominio posible de $f(x)=\\sqrt{x-5}$ es:",
        opciones: ["$\\R$", "$]5,+\\infty[$", "$[5,+\\infty[$", "$]-\\infty,5]$"],
        correcta: 2,
        explicacion: "La cantidad subradical debe ser no negativa: $x-5\\ge0$, es decir, $x\\ge5$. El $5$ sí se incluye porque $\\sqrt0=0$."
      },
      {
        pregunta: "El recorrido de $f(x)=(x-2)^2-3$ es:",
        opciones: ["$\\R$", "$[2,+\\infty[$", "$]-\\infty,-3]$", "$[-3,+\\infty[$"],
        correcta: 3,
        explicacion: "Como $(x-2)^2\\ge0$, se tiene $f(x)\\ge-3$. El mínimo $-3$ se alcanza en $x=2$."
      },
      {
        pregunta: "El mayor dominio posible de $f(x)=\\dfrac{1}{x^2-4}$ es:",
        opciones: ["$\\R\\setminus\\{-2,2\\}$", "$[-2,2]$", "$]-\\infty,2[\\cup]2,+\\infty[$", "$\\R\\setminus\\{2\\}$"],
        correcta: 0,
        explicacion: "El denominador se anula cuando $x^2-4=0$, es decir, $x=\\pm2$. Se excluyen ambos valores."
      },
      {
        pregunta: "El recorrido de $f(x)=\\sqrt{x+1}-2$ es:",
        opciones: ["$[1,+\\infty[$", "$[-2,+\\infty[$", "$[2,+\\infty[$", "$\\R$"],
        correcta: 1,
        explicacion: "La raíz es no negativa, así que $\\sqrt{x+1}-2\\ge-2$. El valor $-2$ se alcanza en $x=-1$."
      },
      {
        pregunta: "Dos funciones $f$ y $g$ son iguales si y solo si:",
        opciones: ["Tienen la misma fórmula, aunque sus dominios difieran.", "Sus gráficas pasan por el origen.", "Tienen el mismo dominio y $f(x)=g(x)$ para todo $x$ de ese dominio.", "Tienen el mismo recorrido."],
        correcta: 2,
        explicacion: "La igualdad de funciones exige mismo dominio y misma regla de asignación en todo el dominio. El recorrido queda determinado por ambas cosas."
      }
    ],
    resumen: [
      "Una relación es cualquier subconjunto de $A\\times B$; una función es una relación que asigna a cada $x\\in A$ un único $y\\in B$.",
      "El dominio maximal se obtiene imponiendo todas las restricciones de la fórmula: denominadores no nulos y raíces pares no negativas.",
      "El recorrido es el conjunto de valores que realmente toma la función; se calcula despejando $x$ en función de $y$ o completando el cuadrado."
    ],
    referencias: [
      { titulo: "Clase 08 — Funciones reales (PDF)", ruta: "recursos/clases/clase-08.pdf" },
      { titulo: "Apunte Clase 8 — Relaciones y funciones (PDF)", ruta: "recursos/apuntes/apunte-clase-08.pdf" },
      { titulo: "Guía 4 — Funciones (PDF)", ruta: "recursos/guias/guia-04-funciones.pdf" },
      { titulo: "Stewart, Precálculo, Cap. 2 (PDF)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
