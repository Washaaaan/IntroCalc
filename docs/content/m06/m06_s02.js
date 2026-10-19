/* Módulo 6 · Sección 2 — I2–I3: valor absoluto, inecuaciones y funciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s02", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 35,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I2–I3: valor absoluto, inecuaciones y funciones",
    objetivo: "Resolver ecuaciones e inecuaciones con valor absoluto y raíces, y determinar dominio y recorrido de funciones, usando los métodos que exigen las interrogaciones 2 y 3.",
    conexion: "Necesitas recordar la definición de valor absoluto como distancia, la tabla de signos y las condiciones de existencia de raíces y denominadores.",
    fuente: "I2–I3 2020–2026 · Clases 4–9 · Guías 2–4",
    prerrequisitos: ["Valor absoluto y distancia", "Inecuaciones y puntos críticos", "Raíces cuadradas", "Dominio y recorrido"],
    teoria: [
      { tipo: "texto", html: "<p>La <b>I2</b> suele pedir ecuaciones e inecuaciones con <b>valor absoluto</b>, muchas veces combinadas con fracciones algebraicas. La <b>I3</b> se concentra en <b>inecuaciones con raíces</b> y en el cálculo de <b>dominio y recorrido</b>. En ambos certámenes el error más caro no es algebraico: es olvidar una restricción del dominio o no intersectar la solución con ella.</p>" },
      { tipo: "definicion", titulo: "Valor absoluto", html: "<p>Para $x\\in\\R$,</p>$$|x|=\\begin{cases}x & \\text{si }x\\ge0\\\\ -x & \\text{si }x<0.\\end{cases}$$<p>Geométricamente, $|x-a|$ es la <b>distancia</b> entre $x$ y $a$ en la recta numérica.</p>" },
      { tipo: "teorema", titulo: "Propiedades que aparecen en la I2", html: "<p>Para $a,b\\in\\R$: $|ab|=|a||b|$, $\\left|\\frac ab\\right|=\\frac{|a|}{|b|}$ si $b\\neq0$, y $|a+b|\\le|a|+|b|$ (desigualdad triangular).</p><p>Además, para $c>0$: $|x|<c\\Leftrightarrow -c<x<c$ y $|x|>c\\Leftrightarrow x<-c$ o $x>c$.</p>" },
      { tipo: "nota", titulo: "El método de casos (Clase 4 y Guía 3)", html: "<p>Cuando hay dos o más valores absolutos, se buscan los puntos donde cada expresión interior cambia de signo. Esos puntos dividen la recta en intervalos; en cada uno se reemplaza $|u|$ por $u$ o por $-u$ según el signo de $u$. Al final se <b>intersecta</b> lo obtenido con el intervalo del caso y se unen los resultados.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el valor absoluto borra el signo y deja la distancia. Resolver $|x-a|=d$ es buscar los puntos que están a distancia $d$ de $a$: hay dos, uno a cada lado. Resolver $|x-a|<d$ es quedarse con los que están a menos de $d$: un intervalo centrado en $a$.</div>" },
      { tipo: "tabla", titulo: "Ecuación $|2x+2|=6x-18$: por qué hay que filtrar", headers: ["Caso", "Ecuación sin valor absoluto", "Solución", "¿Sirve?"], rows: [["$2x+2=6x-18$", "$4x=20$", "$x=5$", "Sí, pues $6\\cdot5-18=12\\ge0$"], ["$2x+2=-(6x-18)$", "$8x=16$", "$x=2$", "No, pues $6\\cdot2-18=-6<0$"]] },
      { tipo: "definicion", titulo: "Dominio y recorrido", html: "<p>El <b>dominio</b> de una regla de asignación es el mayor conjunto de $x$ para el cual la expresión está bien definida. El <b>recorrido</b> es el conjunto de valores $y$ que efectivamente se alcanzan: $y\\in\\operatorname{Rec}(f)$ si y solo si existe un $x$ en el dominio tal que $f(x)=y$.</p><p>Para calcular el recorrido se despeja $x$ en función de $y$ y se impone que la ecuación resultante tenga solución dentro del dominio.</p>" },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "La inecuación |x+1| + |x−1| > 3", funciones: [ { f: function (x) { return Math.abs(x + 1) + Math.abs(x - 1); }, desde: -4, hasta: 4, label: "y=|x+1|+|x-1|", color: "#1e5eff" }, { f: function (x) { return 3; }, desde: -4, hasta: 4, label: "y=3", color: "#e17055" } ], xlabel: "x", ylabel: "y", rangeX: [-4, 4], rangeY: [0, 7] } }
    ],
    ejemplos: [
      {
        titulo: "I2 2025-1 · P1(b) — Ecuación con valor absoluto y restricción",
        enunciado: "<p>Resuelva la ecuación $|2x+2|=6x-18$.</p>",
        concepto: "Se usa que $|u|=v$ equivale a $v\\ge0$ y $(u=v$ o $u=-v)$. La condición $v\\ge0$ es parte de la equivalencia y elimina soluciones falsas.",
        desarrollo: [
          "<b>Paso 1. Restricción.</b> El lado derecho es un valor absoluto, por lo tanto debe ser no negativo: $6x-18\\ge0$, es decir $x\\ge3$.",
          "<b>Paso 2. Plantear los dos casos.</b> $2x+2=6x-18$ o $2x+2=-(6x-18)$.",
          "<b>Paso 3. Caso $+$.</b> $2x+2=6x-18\\Rightarrow20=4x\\Rightarrow x=5$.",
          "<b>Paso 4. Caso $-$.</b> $2x+2=-6x+18\\Rightarrow8x=16\\Rightarrow x=2$.",
          "<b>Paso 5. Filtrar.</b> $x=5$ cumple $x\\ge3$; $x=2$ no cumple. La única solución es $x=5$."
        ],
        respuesta: "$x=5$."
      },
      {
        titulo: "I2 2025-1 · P2 — Inecuación racional con tabla de signos",
        enunciado: "<p>Resuelva $\\dfrac{x}{x-4}<\\dfrac{x-4}{x}$.</p>",
        concepto: "Se lleva todo a un mismo lado para no multiplicar por expresiones de signo desconocido. Luego se factoriza y se usa una tabla de signos con las restricciones $x\\neq0$ y $x\\neq4$.",
        desarrollo: [
          "<b>Paso 1. Restar el lado derecho.</b> $\\dfrac{x}{x-4}-\\dfrac{x-4}{x}<0$.",
          "<b>Paso 2. Común denominador.</b> $\\dfrac{x^2-(x-4)^2}{x(x-4)}<0$.",
          "<b>Paso 3. Expandir el numerador.</b> $x^2-(x^2-8x+16)=8x-16=8(x-2)$.",
          "<b>Paso 4. Factorizar.</b> $\\dfrac{8(x-2)}{x(x-4)}<0$, con $x\\neq0,4$.",
          "<b>Paso 5. Tabla de signos.</b> Puntos críticos $0,2,4$. El cociente es negativo en $(-\\infty,0)$ y en $(2,4)$.",
          "<b>Paso 6. Verificar extremos.</b> $x=2$ hace cero el numerador, pero la desigualdad es estricta, así que no se incluye."
        ],
        respuesta: "$S=(-\\infty,0)\\cup(2,4)$.",
        grafico: { tipo: "recta_numerica", titulo: "Solución de x/(x−4) < (x−4)/x", rango: [-2, 6], intervalos: [ { a: -2, b: 0, abiertoA: true, abiertoB: true, label: "(−∞, 0)", color: "#1e5eff" }, { a: 2, b: 4, abiertoA: true, abiertoB: true, label: "(2, 4)", color: "#1e5eff" } ], puntos: [ { x: 0, label: "0", abierto: true }, { x: 2, label: "2", abierto: true }, { x: 4, label: "4", abierto: true } ] }
      }
    ],
    ejercicios: [
      {
        titulo: "I2 2025-1 · P1(a) — Simplificar un valor absoluto con hipótesis",
        dificultad: "basico",
        enunciado: "<p>Si $0<x<1$, determine el valor de $\\dfrac{|4x+1|-|x-1|}{x}$.</p>",
        concepto: "Dentro de un intervalo conocido se puede decidir el signo de cada expresión y eliminar las barras de valor absoluto sin casos.",
        pista: "Si $0<x<1$, entonces $4x+1>0$ y $x-1<0$.",
        desarrollo: [
          "<b>Paso 1. Signo de $4x+1$.</b> Como $x>0$, $4x+1>1>0$, luego $|4x+1|=4x+1$.",
          "<b>Paso 2. Signo de $x-1$.</b> Como $x<1$, $x-1<0$, luego $|x-1|=-(x-1)=1-x$.",
          "<b>Paso 3. Reemplazar.</b> $\\dfrac{(4x+1)-(1-x)}{x}=\\dfrac{4x+1-1+x}{x}=\\dfrac{5x}{x}$.",
          "<b>Paso 4. Simplificar.</b> Como $x\\neq0$, el valor es $5$."
        ],
        respuesta: "$5$."
      },
      {
        titulo: "I2 2023-1 · P1 — Valor absoluto de una cuadrática",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $|x^2-2x|-5x+8>|x^2-3x+4|$.</p>",
        concepto: "Primero se observa que $x^2-3x+4$ es siempre positivo (discriminante negativo), lo que elimina un valor absoluto. Luego se estudia el signo de $x^2-2x=x(x-2)$ por intervalos.",
        pista: "El discriminante de $x^2-3x+4$ es $-7$. Separe en $x\\in(-\\infty,0]\\cup[2,\\infty)$ y $x\\in(0,2)$.",
        desarrollo: [
          "<b>Paso 1. Eliminar el segundo valor absoluto.</b> $x^2-3x+4$ tiene $\\Delta=9-16=-7<0$ y coeficiente principal $1>0$, luego es siempre positivo y $|x^2-3x+4|=x^2-3x+4$.",
          "<b>Paso 2. Caso $x\\in(-\\infty,0]\\cup[2,\\infty)$.</b> Aquí $x^2-2x\\ge0$, así que $|x^2-2x|=x^2-2x$. La inecuación queda $x^2-2x-5x+8>x^2-3x+4$, es decir $-7x+8>-3x+4$, o sea $x<1$. Intersectando: $(-\\infty,0]$.",
          "<b>Paso 3. Caso $x\\in(0,2)$.</b> Aquí $|x^2-2x|=-(x^2-2x)=-x^2+2x$. La inecuación queda $-x^2-3x+8>x^2-3x+4$, es decir $4>2x^2$, o sea $x^2<2$. Entonces $|x|<\\sqrt2$ y, dentro de $(0,2)$, se obtiene $(0,\\sqrt2)$.",
          "<b>Paso 4. Unir.</b> $(-\\infty,0]\\cup(0,\\sqrt2)=(-\\infty,\\sqrt2)$."
        ],
        respuesta: "$S=(-\\infty,\\sqrt2)$."
      },
      {
        titulo: "I2 2024-1 · P2 — Cuando la desigualdad triangular resuelve todo",
        dificultad: "intermedio",
        enunciado: "<p>Determine el conjunto solución de $|3x+2|\\le|x+1|+|2x+1|$.</p>",
        concepto: "Se reconoce que $3x+2=(x+1)+(2x+1)$ y se aplica la desigualdad triangular. No siempre es necesario separar en casos.",
        pista: "Escriba $3x+2$ como la suma $(x+1)+(2x+1)$.",
        desarrollo: [
          "<b>Paso 1. Reescribir.</b> $3x+2=(x+1)+(2x+1)$.",
          "<b>Paso 2. Desigualdad triangular.</b> $|(x+1)+(2x+1)|\\le|x+1|+|2x+1|$ para todo $x\\in\\R$.",
          "<b>Paso 3. Concluir.</b> La desigualdad pedida es exactamente la desigualdad triangular, válida para todo real."
        ],
        respuesta: "$S=\\R$."
      },
      {
        titulo: "I3 2024-1 · P1 — Dominio con raíz dentro de raíz",
        dificultad: "intermedio",
        enunciado: "<p>Determine el mayor dominio posible de $f(x)=\\sqrt{\\sqrt{1-2x}+\\dfrac{\\sqrt{x}}{x^2+1}}$.</p>",
        concepto: "Se impone que cada raíz tenga argumento no negativo y que el denominador no se anule. Luego se intersectan las condiciones y se verifica la raíz exterior.",
        pista: "Las condiciones son $1-2x\\ge0$ y $\\frac{x}{x^2+1}\\ge0$. Recuerde que $x^2+1>0$.",
        desarrollo: [
          "<b>Paso 1. Primera raíz.</b> $1-2x\\ge0\\Rightarrow x\\le\\frac12$.",
          "<b>Paso 2. Segunda raíz.</b> $\\dfrac{x}{x^2+1}\\ge0$. Como $x^2+1>0$, esto equivale a $x\\ge0$.",
          "<b>Paso 3. Intersectar.</b> $x\\in\\left(-\\infty,\\frac12\\right]\\cap[0,\\infty)=\\left[0,\\frac12\\right]$.",
          "<b>Paso 4. Verificar la raíz exterior.</b> En $[0,\\frac12]$ la suma $\\sqrt{1-2x}+\\frac{\\sqrt{x}}{x^2+1}$ es no negativa, así que la raíz exterior está bien definida."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\left[0,\\frac12\\right]$."
      },
      {
        titulo: "I3 2025-1 · P2 — Dominio y recorrido de $\\frac{x^2+1}{x}$",
        dificultad: "avanzado",
        enunciado: "<p>Determine el dominio y el recorrido de $f(x)=\\dfrac{x^2+1}{x}$.</p>",
        concepto: "El dominio excluye los ceros del denominador. Para el recorrido se plantea $y=f(x)$ y se pide que la ecuación cuadrática en $x$ tenga solución real, lo que se traduce en discriminante no negativo.",
        pista: "La ecuación es $x^2-yx+1=0$; su discriminante es $y^2-4$.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> El denominador se anula en $x=0$, luego $\\operatorname{Dom}(f)=\\R\\setminus\\{0\\}$.",
          "<b>Paso 2. Plantear el recorrido.</b> $y\\in\\operatorname{Rec}(f)$ si existe $x\\neq0$ con $y=\\frac{x^2+1}{x}$.",
          "<b>Paso 3. Multiplicar.</b> $yx=x^2+1$, es decir $x^2-yx+1=0$.",
          "<b>Paso 4. Discriminante.</b> Esta cuadrática tiene solución real si y solo si $\\Delta=y^2-4\\ge0$.",
          "<b>Paso 5. Resolver.</b> $(y-2)(y+2)\\ge0$, o sea $y\\le-2$ o $y\\ge2$.",
          "<b>Paso 6. Verificar $x\\neq0$.</b> Si $x=0$, la ecuación da $1=0$, imposible; las soluciones obtenidas nunca son $0$."
        ],
        respuesta: "$\\operatorname{Dom}(f)=\\R\\setminus\\{0\\}$ y $\\operatorname{Rec}(f)=(-\\infty,-2]\\cup[2,\\infty)$."
      },
      {
        titulo: "I3 2025-1 · P1 — Inecuación con raíz de un valor absoluto",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\sqrt{x+3}>\\sqrt{|x-2|}$.</p>",
        concepto: "Se determina el dominio, se eleva al cuadrado (ambos lados son no negativos) y se resuelve la inecuación con valor absoluto por casos.",
        pista: "El dominio es $x\\ge-3$. Al elevar al cuadrado queda $x+3>|x-2|$.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> $x+3\\ge0\\Rightarrow x\\ge-3$.",
          "<b>Paso 2. Elevar al cuadrado.</b> $x+3>|x-2|$.",
          "<b>Paso 3. Caso $x\\le2$.</b> $x+3>2-x\\Rightarrow2x>-1\\Rightarrow x>-\\frac12$. Intersectando con $[-3,2]$: $\\left(-\\frac12,2\\right]$.",
          "<b>Paso 4. Caso $x>2$.</b> $x+3>x-2\\Rightarrow3>-2$, siempre verdadero. Aporta $(2,\\infty)$.",
          "<b>Paso 5. Unir.</b> $\\left(-\\frac12,2\\right]\\cup(2,\\infty)=\\left(-\\frac12,\\infty\\right)$."
        ],
        respuesta: "$S=\\left(-\\frac12,\\infty\\right)$."
      },
      {
        titulo: "I2 2023-1 · P2 — Dos raíces cuadradas",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $\\sqrt{3-3x}\\le\\sqrt{21+4x-x^2}$.</p>",
        concepto: "Se calcula el dominio común de ambas raíces, se eleva al cuadrado y se intersecta la solución con ese dominio.",
        pista: "El dominio común es $[-3,1]$. Al elevar al cuadrado obtendrá $x^2-7x-18\\le0$.",
        desarrollo: [
          "<b>Paso 1. Dominio de la primera raíz.</b> $3-3x\\ge0\\Rightarrow x\\le1$.",
          "<b>Paso 2. Dominio de la segunda raíz.</b> $21+4x-x^2\\ge0\\Rightarrow x^2-4x-21\\le0\\Rightarrow(x-7)(x+3)\\le0\\Rightarrow x\\in[-3,7]$.",
          "<b>Paso 3. Dominio común.</b> $B=[-3,1]$.",
          "<b>Paso 4. Elevar al cuadrado.</b> $3-3x\\le21+4x-x^2\\Rightarrow x^2-7x-18\\le0$.",
          "<b>Paso 5. Factorizar.</b> $(x-9)(x+2)\\le0\\Rightarrow x\\in[-2,9]$.",
          "<b>Paso 6. Intersectar.</b> $[-3,1]\\cap[-2,9]=[-2,1]$."
        ],
        respuesta: "$S=[-2,1]$."
      }
    ],
    erroresComunes: [
      "Elevar al cuadrado una inecuación con raíces sin comprobar que ambos lados son no negativos.",
      "Olvidar el dominio de una raíz y entregar soluciones donde la expresión original no existe.",
      "Resolver $|u|=v$ sin imponer $v\\ge0$; así aparece la solución falsa $x=2$ en $|2x+2|=6x-18$.",
      "Multiplicar una inecuación por $x$ o por $x-4$ sin separar el signo del factor.",
      "Confundir dominio con recorrido: el dominio se lee en el eje $x$ y el recorrido en el eje $y$."
    ],
    checklist: [
      "Resuelvo ecuaciones con valor absoluto filtrando siempre el signo del lado derecho.",
      "Resuelvo inecuaciones con uno o dos valores absolutos usando puntos críticos y unión de casos.",
      "Determino el dominio de expresiones con raíces, denominadores y raíces anidadas.",
      "Calculo el recorrido despejando $x$ y usando el discriminante cuando corresponde.",
      "Resuelvo inecuaciones con raíces elevando al cuadrado solo dentro del dominio.",
      "Escribo las soluciones como intervalos, distinguiendo con cuidado extremos abiertos y cerrados."
    ],
    autoevaluacion: [
      { pregunta: "La solución de $|x-3|=|x+5|$ es:", opciones: ["$x=-1$", "$x=1$", "$x=-4$", "no tiene solución"], correcta: 0, explicacion: "Los puntos equidistantes de $3$ y $-5$ forman el punto medio: $x=\\frac{3+(-5)}2=-1$." },
      { pregunta: "El dominio de $f(x)=\\sqrt{2x-x^2}$ es:", opciones: ["$[0,2]$", "$(-\\infty,0]\\cup[2,\\infty)$", "$\\R$", "$[0,1]$"], correcta: 0, explicacion: "$2x-x^2=x(2-x)\\ge0$ entre las raíces $0$ y $2$." },
      { pregunta: "El recorrido de $f(x)=\\sqrt{2x-x^2}$ es:", opciones: ["$[0,1]$", "$[0,2]$", "$[1,2]$", "$\\R$"], correcta: 0, explicacion: "La cuadrática $2x-x^2=1-(x-1)^2$ toma valores en $[0,1]$; al aplicar raíz, el recorrido es $[0,1]$." },
      { pregunta: "Para $x\\in(0,1)$, el valor de $\\frac{|4x+1|-|x-1|}{x}$ es:", opciones: ["$3$", "$5$", "$5x$", "$-5$"], correcta: 1, explicacion: "$|4x+1|=4x+1$ y $|x-1|=1-x$; el numerador es $5x$ y al dividir por $x$ queda $5$." },
      { pregunta: "Si $|u|=v$, la equivalencia correcta es:", opciones: ["$u=v$", "$v\\ge0$ y $(u=v$ o $u=-v)$", "$u\\ge0$ y $v=u$", "$u=v$ o $u=-v$, sin condiciones"], correcta: 1, explicacion: "El lado derecho debe ser no negativo porque es un valor absoluto; luego se abren los dos signos." },
      { pregunta: "La solución de $\\frac{x}{x-4}<\\frac{x-4}{x}$ es:", opciones: ["$(0,2)\\cup(4,\\infty)$", "$(-\\infty,0)\\cup(2,4)$", "$(2,4)$", "$(-\\infty,0)\\cup(4,\\infty)$"], correcta: 1, explicacion: "Se reduce a $\\frac{8(x-2)}{x(x-4)}<0$; el cociente es negativo antes de $0$ y entre $2$ y $4$." }
    ],
    resumen: [
      "El valor absoluto se elimina por casos o por interpretación geométrica, y toda ecuación $|u|=v$ exige $v\\ge0$.",
      "En inecuaciones racionales o con raíces, el dominio y las restricciones son parte de la respuesta, no un detalle final.",
      "El recorrido se obtiene exigiendo que $y=f(x)$ tenga al menos una solución $x$ dentro del dominio."
    ],
    referencias: [
      { titulo: "Clase 04 — Valor absoluto y distancia (PDF)", ruta: "recursos/clases/clase-04.pdf" },
      { titulo: "I2 2025-1 — Interrogación 2 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin2-mat1107.pdf" },
      { titulo: "I3 2025-1 — Interrogación 3 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin3-mat1107.pdf" },
      { titulo: "I2 2024-1 — Solución Interrogación 2", ruta: "recursos/pruebas/PRUEBAS/2024-1/i2-mat1107-2024.pdf" },
      { titulo: "Guía 3 — Inecuaciones", ruta: "recursos/guias/guia-03-inecuaciones.pdf" },
      { titulo: "Apunte 5 — Valor absoluto e inecuaciones", ruta: "recursos/apuntes/apunte-clase-05.pdf" }
    ]
  });
})();
