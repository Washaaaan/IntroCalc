/* Módulo 1 · Sección 3 — Valor absoluto, distancia e interpretación geométrica */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s03", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 3,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Valor absoluto, distancia e interpretación geométrica",
    objetivo: "Calcular y resolver expresiones con valor absoluto, interpretarlo como distancia en la recta real y usar sus propiedades para resolver ecuaciones e inecuaciones.",
    conexion: "Ya sabes comparar números reales y trabajar con desigualdades. El valor absoluto combina esas dos ideas: mide cuán lejos está un número del cero, sin importar hacia qué lado.",
    fuente: "Clase 04 · Apunte Clase 4 · Guía 2",
    prerrequisitos: ["Orden en $\\R$", "Desigualdades lineales", "Recta numérica", "Raíz cuadrada"],
    teoria: [
      { tipo: "texto", html: "<p>Hasta ahora sabemos sumar, multiplicar y ordenar números reales. Nos falta una tercera estructura: la posibilidad de <b>medir distancias</b>. Si un número está a la derecha o a la izquierda del cero no debería importar cuando queremos saber cuán lejos está. Esa es exactamente la idea del valor absoluto.</p>" },
      { tipo: "definicion", titulo: "Valor absoluto", html: "<p>Para cualquier $x\\in\\R$ definimos</p>$$|x|=\\begin{cases}x & \\text{si } x\\ge 0,\\\\ -x & \\text{si } x<0.\\end{cases}$$<p>Por ejemplo, $|5|=5$, $|-5|=5$ y $|0|=0$. Una definición equivalente, muy útil en cálculo, es</p>$$|x|=\\sqrt{x^2}.$$<p>Esta igualdad explica por qué $\\sqrt{x^2}=|x|$ y no simplemente $x$: si $x=-3$, entonces $\\sqrt{(-3)^2}=\\sqrt9=3=|-3|$.</p>" },
      { tipo: "definicion", titulo: "Distancia entre dos números reales", html: "<p>La distancia entre $x$ e $y$ se define como</p>$$d(x,y)=|x-y|.$$<p>Es la longitud del segmento que une los puntos de coordenadas $x$ e $y$ en la recta numérica. Por ejemplo, la distancia entre $3$ y $-4$ es $|3-(-4)|=|7|=7$.</p><p>Esta definición convierte cualquier expresión del tipo $|x-a|$ en una frase geométrica: <b>la distancia desde $x$ hasta $a$</b>.</p>" },
      { tipo: "teorema", titulo: "Propiedades del valor absoluto", html: "<p>Para todo $x,y\\in\\R$:</p><ol><li>$|x|\\ge 0$.</li><li>$-|x|\\le x\\le |x|$.</li><li>$|xy|=|x|\\,|y|$.</li><li>$|x|\\le a \\iff -a\\le x\\le a$, para $a\\ge 0$.</li><li>$|x|\\ge a \\iff x\\le -a$ o $x\\ge a$, para $a\\ge 0$.</li><li>$|x+y|\\le |x|+|y|$ (desigualdad triangular).</li></ol><p>La propiedad 4 es la que usaremos para resolver inecuaciones: $|x-3|\\le 2$ significa que la distancia de $x$ a $3$ es a lo más $2$, es decir, $1\\le x\\le 5$.</p>" },
      { tipo: "teorema", titulo: "Propiedades de la distancia", html: "<p>Para $x,y,z\\in\\R$:</p><ul><li>$d(x,y)\\ge 0$.</li><li>$d(x,y)=0$ si y solo si $x=y$.</li><li>$d(x,y)=d(y,x)$ (simetría).</li><li>$d(x,y)\\le d(x,z)+d(z,y)$ (desigualdad triangular).</li></ul><p>La última dice que el camino directo entre dos puntos nunca es más largo que pasar por un tercer punto. Se deduce de $|x-y|=|(x-z)+(z-y)|\\le |x-z|+|z-y|$.</p>" },
      { tipo: "tabla", titulo: "Ecuaciones e inecuaciones con valor absoluto", headers: ["Expresión", "Equivale a", "Ejemplo"], rows: [["$|x|=a$, $a\\ge 0$", "$x=a$ o $x=-a$", "$|x|=3\\iff x=3$ o $x=-3$"], ["$|x|<a$, $a>0$", "$-a<x<a$", "$|x|<2\\iff (-2,2)$"], ["$|x|\\le a$, $a\\ge 0$", "$-a\\le x\\le a$", "$|x|\\le 2\\iff [-2,2]$"], ["$|x|>a$, $a\\ge 0$", "$x<-a$ o $x>a$", "$|x|>2\\iff (-\\infty,-2)\\cup(2,\\infty)$"], ["$|x|\\ge a$, $a\\ge 0$", "$x\\le -a$ o $x\\ge a$", "$|x|\\ge 2\\iff (-\\infty,-2]\\cup[2,\\infty)$"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el valor absoluto borra el signo y deja solo el tamaño. $|x|$ responde a la pregunta «¿a qué distancia del cero está $x$?». Y $|x-a|$ responde a «¿a qué distancia de $a$ está $x$?». Por eso $|x-1|=3$ se lee como «busco los números que están a distancia $3$ del $1$»: son $-2$ y $4$.</div>" },
      { tipo: "grafico", spec: { tipo: "recta_numerica", titulo: "|x−1| = 3: dos puntos a distancia 3 del centro 1", rango: [-4, 6], intervalos: [ { a: -2, b: 1, abiertoA: false, abiertoB: false, label: "3", color: "#1e5eff" }, { a: 1, b: 4, abiertoA: false, abiertoB: false, label: "3", color: "#1e5eff" } ], puntos: [ { x: 1, label: "centro 1" }, { x: -2, label: "-2" }, { x: 4, label: "4" } ] } },
      { tipo: "nota", titulo: "El valor absoluto en el apunte (Apunte Clase 4)", html: "<p>El apunte de la Clase 4 define $|x|$ por casos, demuestra la desigualdad triangular usando $|x|^2=x^2$ y presenta la distancia $d(x,y)=|x-y|$. También aparecen los ejemplos $|x-1|=3$, $|3x-5|+3=0$ y $|x+2|=|x-1|$, que resolveremos más abajo. La Guía 2 propone demostrar $|xy|=|x||y|$ y la desigualdad $|x|-|y|\\le |x-y|$.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Ecuación interpretada como distancia",
        enunciado: "<p>Resuelva $|x-1|=3$ e interprete geométricamente la solución.</p>",
        concepto: "Se usa que $|x-a|$ es la distancia de $x$ a $a$, y que $|x|=a$ equivale a $x=a$ o $x=-a$.",
        desarrollo: [
          "<b>Paso 1.</b> La ecuación dice que la distancia entre $x$ y $1$ es $3$.",
          "<b>Paso 2.</b> Por la propiedad $|u|=a\\iff u=a$ o $u=-a$, con $u=x-1$: $x-1=3$ o $x-1=-3$.",
          "<b>Paso 3.</b> Resolvemos: $x=4$ o $x=-2$.",
          "<b>Paso 4.</b> Verificamos: $|4-1|=3$ y $|-2-1|=|-3|=3$. Ambos valores sirven.",
          "<b>Paso 5.</b> Geométricamente, son los dos puntos de la recta que están a distancia $3$ del punto $1$: uno a la derecha y otro a la izquierda."
        ],
        respuesta: "$x=4$ o $x=-2$.",
        grafico: { tipo: "recta_numerica", titulo: "Soluciones de |x-1|=3", rango: [-4, 6], intervalos: [ { a: -2, b: 1, label: "3", color: "#1e5eff" }, { a: 1, b: 4, label: "3", color: "#1e5eff" } ], puntos: [ { x: 1, label: "1" }, { x: -2, label: "-2" }, { x: 4, label: "4" } ] }
      },
      {
        titulo: "Una ecuación sin solución",
        enunciado: "<p>Resuelva $|3x-5|+3=0$.</p>",
        concepto: "Se usa la propiedad $|x|\\ge 0$: un valor absoluto nunca puede ser negativo.",
        desarrollo: [
          "<b>Paso 1.</b> Restamos $3$ a ambos lados: $|3x-5|=-3$.",
          "<b>Paso 2.</b> El lado izquierdo es un valor absoluto, por lo tanto es mayor o igual que $0$.",
          "<b>Paso 3.</b> El lado derecho es $-3$, que es negativo.",
          "<b>Paso 4.</b> Es imposible que un número no negativo sea igual a $-3$.",
          "<b>Paso 5.</b> Por lo tanto, la ecuación no tiene solución real."
        ],
        respuesta: "Sin solución en $\\R$; el conjunto solución es $\\varnothing$."
      },
      {
        titulo: "Igualdad de dos valores absolutos",
        enunciado: "<p>Resuelva $|x+2|=|x-1|$.</p>",
        concepto: "Se usa la interpretación geométrica: los puntos cuya distancia a $-2$ es igual a su distancia a $1$ forman el punto medio. También se puede elevar al cuadrado.",
        desarrollo: [
          "<b>Paso 1.</b> La ecuación pide los $x$ que equidistan de $-2$ y de $1$.",
          "<b>Paso 2.</b> El punto medio entre $-2$ y $1$ es $\\dfrac{-2+1}{2}=-\\dfrac12$.",
          "<b>Paso 3.</b> Verificamos algebraicamente elevando al cuadrado, lo que es válido porque ambos lados son no negativos: $(x+2)^2=(x-1)^2$.",
          "<b>Paso 4.</b> Desarrollamos: $x^2+4x+4=x^2-2x+1$.",
          "<b>Paso 5.</b> Cancelamos $x^2$: $4x+4=-2x+1$, es decir, $6x=-3$, de donde $x=-\\dfrac12$.",
          "<b>Paso 6.</b> Comprobamos: $\\left|-\\dfrac12+2\\right|=\\dfrac32$ y $\\left|-\\dfrac12-1\\right|=\\dfrac32$."
        ],
        respuesta: "$x=-\\dfrac12$."
      }
    ],
    ejercicios: [
      {
        titulo: "Evaluar valores absolutos",
        dificultad: "basico",
        enunciado: "<p>Calcule: (a) $|-7|$; &nbsp; (b) $|3-\\pi|$; &nbsp; (c) $|\\sqrt2-1|$.</p>",
        concepto: "Se usa la definición por casos: si lo de adentro es negativo, se cambia de signo.",
        pista: "Compara primero el número de adentro con $0$; recuerda que $\\pi\\approx 3{,}14$ y $\\sqrt2\\approx 1{,}41$.",
        desarrollo: [
          "(a) $-7<0$, entonces $|-7|=-(-7)=7$.",
          "(b) $3-\\pi<0$ porque $\\pi>3$, entonces $|3-\\pi|=-(3-\\pi)=\\pi-3$.",
          "(c) $\\sqrt2-1>0$ porque $\\sqrt2>1$, entonces $|\\sqrt2-1|=\\sqrt2-1$."
        ],
        respuesta: "(a) $7$; (b) $\\pi-3$; (c) $\\sqrt2-1$."
      },
      {
        titulo: "Ecuación con valor absoluto",
        dificultad: "basico",
        enunciado: "<p>Resuelva $|2x+1|=5$.</p>",
        concepto: "Se usa $|u|=a\\iff u=a$ o $u=-a$, con $a\\ge 0$.",
        pista: "Plantea dos ecuaciones lineales.",
        desarrollo: [
          "Caso 1: $2x+1=5$, entonces $2x=4$ y $x=2$.",
          "Caso 2: $2x+1=-5$, entonces $2x=-6$ y $x=-3$.",
          "Verificación: $|2(2)+1|=|5|=5$ y $|2(-3)+1|=|-5|=5$."
        ],
        respuesta: "$x=2$ o $x=-3$."
      },
      {
        titulo: "Inecuación interpretada como distancia",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $|x-3|\\le 2$ y represente la solución en la recta numérica.</p>",
        concepto: "Se usa $|x-a|\\le r\\iff a-r\\le x\\le a+r$, que describe los puntos a distancia a lo más $r$ del centro $a$.",
        pista: "La desigualdad pide los puntos que están a distancia $2$ o menos del $3$.",
        desarrollo: [
          "Por la propiedad 4, $|x-3|\\le 2$ equivale a $-2\\le x-3\\le 2$.",
          "Sumamos $3$ en las tres partes: $1\\le x\\le 5$.",
          "El conjunto solución es el intervalo cerrado $[1,5]$.",
          "En la recta, es el segmento de centro $3$ y radio $2$, con ambos extremos incluidos."
        ],
        respuesta: "$x\\in[1,5]$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de |x-3|≤2", rango: [-1, 7], intervalos: [ { a: 1, b: 5, abiertoA: false, abiertoB: false, label: "[1,5]", color: "#00b894" } ], puntos: [ { x: 3, label: "centro" } ] }
      },
      {
        titulo: "Desigualdad triangular invertida",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que para todo $x,y\\in\\R$ se cumple $|x|-|y|\\le |x-y|$.</p>",
        concepto: "Se usa la desigualdad triangular y una descomposición ingeniosa de $x$.",
        pista: "Escribe $x=(x-y)+y$ y aplica $|a+b|\\le |a|+|b|$.",
        desarrollo: [
          "Escribimos $x=(x-y)+y$.",
          "Aplicamos la desigualdad triangular: $|x|=|(x-y)+y|\\le |x-y|+|y|$.",
          "Restamos $|y|$ a ambos lados: $|x|-|y|\\le |x-y|$.",
          "Intercambiando $x$ e $y$ también se obtiene $|y|-|x|\\le |x-y|$.",
          "En consecuencia, $\\big||x|-|y|\\big|\\le |x-y|$."
        ],
        respuesta: "$|x|-|y|\\le |x-y|$; de hecho, $\\big||x|-|y|\\big|\\le |x-y|$."
      },
      {
        titulo: "Suma de dos distancias",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $|x-1|+|x+3|=6$.</p>",
        concepto: "Se interpreta cada valor absoluto como una distancia y se separa por intervalos determinados por los puntos críticos $-3$ y $1$.",
        pista: "Analiza los casos $x<-3$, $-3\\le x\\le 1$ y $x>1$.",
        desarrollo: [
          "Caso 1: $x<-3$. Entonces $x-1<0$ y $x+3<0$, así que $|x-1|=1-x$ y $|x+3|=-x-3$.",
          "La ecuación queda $(1-x)+(-x-3)=6$, es decir, $-2x-2=6$, de donde $x=-4$. Como $-4<-3$, es válida.",
          "Caso 2: $-3\\le x\\le 1$. Aquí $|x-1|=1-x$ y $|x+3|=x+3$. La suma es $4$, que nunca es $6$. No hay solución en este intervalo.",
          "Caso 3: $x>1$. Entonces $|x-1|=x-1$ y $|x+3|=x+3$. La ecuación queda $2x+2=6$, de donde $x=2$. Como $2>1$, es válida.",
          "Verificación: en $x=-4$, $|-5|+|-1|=5+1=6$; en $x=2$, $|1|+|5|=1+5=6$."
        ],
        respuesta: "$x=-4$ o $x=2$."
      }
    ],
    erroresComunes: [
      "Escribir $\\sqrt{x^2}=x$ en lugar de $\\sqrt{x^2}=|x|$; por ejemplo, $\\sqrt{(-3)^2}=3$, no $-3$.",
      "Resolver $|x|=a$ solo con $x=a$ y olvidar la solución $x=-a$.",
      "Pensar que $|x+y|=|x|+|y|$ siempre; en general solo se cumple la desigualdad $|x+y|\\le |x|+|y|$.",
      "Al resolver $|x|<a$, escribir $x<a$ en vez de $-a<x<a$.",
      "Olvidar que un valor absoluto nunca es negativo y seguir operando en ecuaciones como $|3x-5|=-3$."
    ],
    checklist: [
      "Sé calcular $|x|$ usando la definición por casos.",
      "Puedo interpretar $|x-a|$ como la distancia entre $x$ y $a$.",
      "Sé resolver ecuaciones del tipo $|u|=a$ y $|u|=|v|$.",
      "Sé traducir $|x-a|<r$ y $|x-a|\\le r$ a intervalos.",
      "Conozco y sé usar la desigualdad triangular.",
      "Puedo resolver una ecuación con dos valores absolutos separando por casos."
    ],
    autoevaluacion: [
      { pregunta: "El valor de $|-8|$ es:", opciones: ["No está definido", "$-8$", "$8$", "$0$"], correcta: 2, explicacion: "El valor absoluto de un número negativo es su opuesto: $|-8|=8$." },
      { pregunta: "La ecuación $|x-2|=5$ tiene por soluciones:", opciones: ["$x=7$ y $x=-3$", "$x=7$ solamente", "$x=3$ y $x=-7$", "$x=2$ y $x=5$"], correcta: 0, explicacion: "$x-2=5$ da $x=7$; $x-2=-5$ da $x=-3$." },
      { pregunta: "El conjunto solución de $|x|<3$ es:", opciones: ["$(-\\infty,-3)\\cup(3,\\infty)$", "$[-3,3]$", "$(-\\infty,3)$", "$(-3,3)$"], correcta: 3, explicacion: "$|x|<3$ equivale a $-3<x<3$, es decir, el intervalo abierto $(-3,3)$." },
      { pregunta: "¿Para cuáles $x$ se cumple $|x-1|=|x+3|$?", opciones: ["$x=1$", "$x=-1$", "$x=2$", "$x=-2$"], correcta: 1, explicacion: "Son los puntos que equidistan de $1$ y $-3$; el punto medio es $\\dfrac{1+(-3)}{2}=-1$." },
      { pregunta: "La desigualdad triangular afirma que:", opciones: ["$|x-y|=|x|-|y|$", "$|x+y|=|x|+|y|$", "$|x+y|\\le |x|+|y|$", "$|x+y|\\ge |x|+|y|$"], correcta: 2, explicacion: "La suma de los valores absolutos es una cota superior para el valor absoluto de la suma." },
      { pregunta: "La distancia entre $-2$ y $5$ es:", opciones: ["$-7$", "$10$", "$3$", "$7$"], correcta: 3, explicacion: "$d(-2,5)=|-2-5|=|-7|=7$." }
    ],
    resumen: [
      "El valor absoluto $|x|$ mide la distancia de $x$ al cero y siempre es no negativo; además $|x|=\\sqrt{x^2}$.",
      "$|x-a|$ es la distancia entre $x$ y $a$, lo que permite interpretar ecuaciones e inecuaciones geométricamente.",
      "Las propiedades clave son $|xy|=|x||y|$, las equivalencias $|x|\\le a\\iff -a\\le x\\le a$ y la desigualdad triangular $|x+y|\\le |x|+|y|$."
    ],
    referencias: [
      { titulo: "Clase 04 — Valor absoluto (PDF)", ruta: "recursos/clases/clase-04.pdf" },
      { titulo: "Apunte Clase 4 — Valor absoluto y distancia (PDF)", ruta: "recursos/apuntes/apunte-clase-04.pdf" },
      { titulo: "Guía 2 — Valor absoluto y raíces (PDF)", ruta: "recursos/guias/guia-02-valor-absoluto-raices.pdf" },
      { titulo: "Stewart, Precálculo (valor absoluto)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
