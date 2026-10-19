/* Módulo 6 · Sección 6 — I8 + Examen: logaritmos, binomio e integradores */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s06", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 39,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I8 + Examen: logaritmos, binomio e integradores",
    objetivo: "Resolver ecuaciones logarítmicas y exponenciales, aplicar el teorema del binomio y enfrentar problemas integradores de examen que combinan varias unidades del curso.",
    conexion: "Necesitas recordar las propiedades de $\\ln$ y $e^x$, el teorema del binomio y los criterios de convergencia de sucesiones. El examen mezcla estos temas en un mismo problema.",
    fuente: "I8 2020–2026 · Exámenes 2020–2024 · Clases 17 y 20 · Guía 8",
    prerrequisitos: ["Propiedades de logaritmos y exponenciales", "Teorema del binomio", "Sucesiones monótonas y acotadas", "Teorema del sándwich"],
    teoria: [
      { tipo: "texto", html: "<p>La <b>I8</b> y el <b>Examen</b> son las evaluaciones más integradoras. En la I8 aparecen ecuaciones logarítmicas, modelos de enfriamiento y problemas de binomio. En el Examen se combinan logaritmos, binomio, inducción, dominios de composiciones y límites. La estrategia es identificar primero <b>qué unidad</b> resuelve cada parte y no mezclar los pasos.</p>" },
      { tipo: "definicion", titulo: "Logaritmo", html: "<p>Para $b>0$, $b\\neq1$ y $x>0$, $\\log_b x$ es el único número $y$ tal que $b^y=x$. En particular, $\\ln x=\\log_e x$.</p><p>El dominio de $\\ln u$ es $u>0$; esa condición hay que imponerla <b>antes</b> de resolver cualquier ecuación logarítmica.</p>" },
      { tipo: "teorema", titulo: "Propiedades que se usan en la I8", html: "<p>$\\ln(uv)=\\ln u+\\ln v$, $\\ln\\left(\\frac uv\\right)=\\ln u-\\ln v$, $\\ln(u^r)=r\\ln u$, $\\ln1=0$ y $e^{\\ln x}=x$ para $x>0$.</p><p>La función $\\ln$ es inyectiva: $\\ln u=\\ln v\\Leftrightarrow u=v$ (con $u,v>0$). La función $e^x$ también es inyectiva: $e^u=e^v\\Leftrightarrow u=v$.</p>" },
      { tipo: "nota", titulo: "Cambio de variable en ecuaciones exponenciales (Clase 17)", html: "<p>Si la ecuación contiene $e^{ax}$ y $e^{2ax}$, conviene tomar $u=e^{ax}>0$. La ecuación se vuelve cuadrática en $u$; se resuelven las dos raíces y se descartan las no positivas. Al final se vuelve a $x$ aplicando logaritmo.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> el logaritmo responde «¿a qué exponente debo elevar la base para obtener este número?». Por eso sirve para bajar exponentes. Pero solo se puede aplicar a números positivos: si aparece $\\ln(x-2)$, de entrada sabemos que $x>2$.</div>" },
      { tipo: "tabla", titulo: "Dominio antes de resolver: dos ejemplos reales", headers: ["Ecuación", "Restricciones", "Solución válida"], rows: [["$\\ln(x-2)+\\ln(x+2)=\\ln(2x+11)$", "$x>2$", "$x=5$ (se descarta $-3$)"], ["$e^{4x+2}-\\dfrac{e^2}{e^{4x+2}}=e^2-1$", "$e^{4x+2}>0$ siempre", "$x=0$ (se descarta $u=-1$)"]] },
      { tipo: "teorema", titulo: "Teorema del binomio", html: "<p>Para $n\\in\\N$ y $a,b\\in\\R$,</p>$$(a+b)^n=\\sum_{k=0}^{n}\\binom nk a^{n-k}b^k.$$<p>El término general es $\\binom nk a^{n-k}b^k$. Para encontrar un coeficiente se iguala el exponente de la variable al exponente buscado y se despeja $k$.</p>" },
      { tipo: "nota", titulo: "Estrategia para el Examen", html: "<p>En el Examen conviene leer todo primero y resolver en el orden en que te sientes seguro. Los problemas integradores suelen tener partes encadenadas: si el resultado de (a) se entrega como dato, puedes usarlo aunque no hayas resuelto esa parte; si no, conviene asegurar (a) antes de seguir. Revisa siempre dominio, signos y si el límite es finito o infinito. Una respuesta sin justificación pierde la mayor parte del puntaje.</p>" }
    ],
    ejemplos: [
      {
        titulo: "I8 2025-1 · P1(a) — Ecuación logarítmica con solución extraña",
        enunciado: "<p>Resuelva $\\ln(x-2)+\\ln(x+2)=\\ln(2x+11)$.</p>",
        concepto: "Se combinan logaritmos con $\\ln u+\\ln v=\\ln(uv)$ y se usa la inyectividad del logaritmo. Las soluciones deben cumplir el dominio inicial.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> Se necesita $x-2>0$ y $x+2>0$, es decir $x>2$. Además $2x+11>0$, que se cumple si $x>2$.",
          "<b>Paso 2. Combinar.</b> $\\ln((x-2)(x+2))=\\ln(2x+11)$.",
          "<b>Paso 3. Inyectividad del logaritmo.</b> $(x-2)(x+2)=2x+11$.",
          "<b>Paso 4. Resolver.</b> $x^2-4=2x+11\\Rightarrow x^2-2x-15=0\\Rightarrow(x-5)(x+3)=0$.",
          "<b>Paso 5. Filtrar por el dominio.</b> $x=5$ cumple $x>2$; $x=-3$ no cumple. La única solución es $x=5$."
        ],
        respuesta: "$x=5$."
      },
      {
        titulo: "I8 2025-1 · P2 — Ley de enfriamiento de Newton",
        enunciado: "<p>Un cuerpo a $60^\\circ$C se introduce en un medio a $30^\\circ$C. Después de $12$ minutos está a $40^\\circ$C. Si $T(t)=T_0+(T_1-T_0)10^{-kt}$, determine la temperatura después de $24$ minutos.</p>",
        concepto: "Se usa el dato inicial para determinar la constante $k$ y luego se evalúa el modelo en $t=24$. El álgebra de potencias permite calcular $T(24)$ sin conocer $k$ de forma explícita.",
        desarrollo: [
          "<b>Paso 1. Escribir el modelo.</b> $T_0=30$, $T_1=60$, luego $T(t)=30+30\\cdot10^{-kt}$.",
          "<b>Paso 2. Usar $T(12)=40$.</b> $30+30\\cdot10^{-12k}=40\\Rightarrow30\\cdot10^{-12k}=10\\Rightarrow10^{-12k}=\\frac13$.",
          "<b>Paso 3. Despejar $k$.</b> $-12k=\\log_{10}\\left(\\frac13\\right)=-\\log_{10}3$, luego $k=\\frac{\\log_{10}3}{12}$.",
          "<b>Paso 4. Evaluar en $24$.</b> $T(24)=30+30\\cdot10^{-24k}=30+30\\cdot10^{-2\\log_{10}3}$.",
          "<b>Paso 5. Simplificar.</b> $10^{-2\\log_{10}3}=10^{\\log_{10}(3^{-2})}=3^{-2}=\\frac19$.",
          "<b>Paso 6. Calcular.</b> $T(24)=30+\\frac{30}{9}=30+\\frac{10}{3}=\\frac{100}{3}$."
        ],
        respuesta: "$T(24)=\\dfrac{100}{3}$ °C $\\approx33{,}3$ °C.",
        grafico: { tipo: "plot2d", titulo: "Enfriamiento: de 60 °C a 30 °C", funciones: [ { f: function (t) { return 30 + 30 * Math.pow(10, -t * Math.log10(3) / 12); }, desde: 0, hasta: 36, label: "T(t)", color: "#e17055" }, { f: function (t) { return 30; }, desde: 0, hasta: 36, label: "ambiente 30°C", color: "#1e5eff" } ], xlabel: "t (min)", ylabel: "T (°C)", rangeX: [0, 36], rangeY: [25, 65] } }
    ],
    ejercicios: [
      {
        titulo: "I8 2025-1 · P1(b) — Ecuación exponencial con cambio de variable",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $e^{4x+2}-\\dfrac{e^2}{e^{4x+2}}=e^2-1$.</p>",
        concepto: "Cambio de variable $u=e^{4x+2}>0$. La ecuación se transforma en una cuadrática que se factoriza.",
        pista: "Multiplique por $u$ y ordene: $u^2-(e^2-1)u-e^2=0$.",
        desarrollo: [
          "<b>Paso 1. Cambio de variable.</b> Sea $u=e^{4x+2}>0$. La ecuación es $u-\\dfrac{e^2}{u}=e^2-1$.",
          "<b>Paso 2. Multiplicar por $u>0$.</b> $u^2-e^2=(e^2-1)u$.",
          "<b>Paso 3. Ordenar.</b> $u^2-(e^2-1)u-e^2=0$.",
          "<b>Paso 4. Factorizar.</b> $(u-e^2)(u+1)=0$, luego $u=e^2$ o $u=-1$.",
          "<b>Paso 5. Descartar.</b> $u=e^{4x+2}>0$, así que $u=-1$ no sirve.",
          "<b>Paso 6. Volver a $x$.</b> $e^{4x+2}=e^2\\Rightarrow4x+2=2\\Rightarrow x=0$."
        ],
        respuesta: "$x=0$."
      },
      {
        titulo: "I8 2024-1 · P1 — Sucesión recursiva y convergencia",
        dificultad: "avanzado",
        enunciado: "<p>Sea $a_1=\\frac53$ y $a_{n+1}=(a_n-1)^2+1$. Demuestre que $\\{a_n\\}$ converge y calcule su límite.</p>",
        concepto: "Se prueba que la sucesión es decreciente y acotada inferiormente; por el teorema de convergencia monótona, converge. El límite satisface la ecuación de punto fijo.",
        pista: "Muestre por inducción que $1\\le a_{n+1}\\le a_n$. Luego resuelva $L=(L-1)^2+1$.",
        desarrollo: [
          "<b>Paso 1. Cota inferior.</b> $(a_n-1)^2\\ge0$, luego $a_{n+1}\\ge1$ para todo $n$.",
          "<b>Paso 2. Primer término.</b> $a_2=\\left(\\frac53-1\\right)^2+1=\\frac49+1=\\frac{13}{9}<\\frac53=a_1$.",
          "<b>Paso 3. Inducción para la monotonía.</b> Si $1\\le a_{k+1}\\le a_k$, entonces $0\\le a_{k+1}-1\\le a_k-1$. Al elevar al cuadrado y sumar $1$: $(a_{k+1}-1)^2+1\\le(a_k-1)^2+1$, es decir $a_{k+2}\\le a_{k+1}$.",
          "<b>Paso 4. Convergencia.</b> La sucesión es decreciente y acotada inferiormente por $1$; por lo tanto converge a un límite $L$.",
          "<b>Paso 5. Ecuación del límite.</b> $L=(L-1)^2+1=L^2-2L+2\\Rightarrow L^2-3L+2=0\\Rightarrow L=1$ o $L=2$.",
          "<b>Paso 6. Elegir.</b> Como $a_n\\le\\frac53<2$ para todo $n$, el límite no puede ser $2$. Así, $L=1$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}a_n=1$."
      },
      {
        titulo: "I8 2024-1 · P2 — Sándwich con raíz $n$-ésima",
        dificultad: "avanzado",
        enunciado: "<p>Sean $0<a\\le b$. Demuestre que $\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{a^n+b^n}=b$.</p>",
        concepto: "Se acota la expresión entre $b$ y $b\\sqrt[n]{2}$, y se usa que $\\sqrt[n]{2}\\to1$. Luego se aplica el teorema del sándwich.",
        pista: "Use $b^n\\le a^n+b^n\\le2b^n$.",
        desarrollo: [
          "<b>Paso 1. Cota inferior.</b> Como $a^n\\ge0$, se tiene $a^n+b^n\\ge b^n$, luego $\\sqrt[n]{a^n+b^n}\\ge b$.",
          "<b>Paso 2. Cota superior.</b> Como $a\\le b$, $a^n\\le b^n$, luego $a^n+b^n\\le2b^n$ y $\\sqrt[n]{a^n+b^n}\\le b\\sqrt[n]{2}$.",
          "<b>Paso 3. Límite de las cotas.</b> $\\lim_{n\\to\\infty}b=b$ y $\\lim_{n\\to\\infty}b\\sqrt[n]{2}=b\\cdot1=b$.",
          "<b>Paso 4. Sándwich.</b> Por el teorema del sándwich, el límite es $b$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\sqrt[n]{a^n+b^n}=b$."
      },
      {
        titulo: "I8 2020-1 · P1 — Suma con coeficientes binomiales",
        dificultad: "basico",
        enunciado: "<p>Calcule $\\displaystyle\\sum_{k=0}^{n}\\binom nk\\frac1{2^k}$.</p>",
        concepto: "La suma tiene la forma del teorema del binomio con $a=1$ y $b=\\frac12$.",
        pista: "Reconozca $(1+\\frac12)^n$.",
        desarrollo: [
          "<b>Paso 1. Reescribir.</b> $\\displaystyle\\sum_{k=0}^{n}\\binom nk\\left(\\frac12\\right)^k1^{n-k}$.",
          "<b>Paso 2. Aplicar el binomio.</b> Es $(1+\\frac12)^n$.",
          "<b>Paso 3. Calcular.</b> $\\left(\\frac32\\right)^n$."
        ],
        respuesta: "$\\left(\\dfrac32\\right)^n$."
      },
      {
        titulo: "I8 2020-1 · P2 — Coeficiente de $x^{13}$",
        dificultad: "intermedio",
        enunciado: "<p>Encuentre el coeficiente de $x^{13}$ en la expansión de $\\left(x^2+\\dfrac1x\\right)^{17}$.</p>",
        concepto: "Término general del binomio. Se iguala el exponente de $x$ y se identifica el coeficiente binomial.",
        pista: "El exponente del término $k$ es $34-3k$.",
        desarrollo: [
          "<b>Paso 1. Término general.</b> $\\binom{17}{k}(x^2)^{17-k}(x^{-1})^k=\\binom{17}{k}x^{34-3k}$.",
          "<b>Paso 2. Igualar el exponente.</b> $34-3k=13\\Rightarrow3k=21\\Rightarrow k=7$.",
          "<b>Paso 3. Coeficiente.</b> Es $\\binom{17}{7}$."
        ],
        respuesta: "$\\dbinom{17}{7}=19448$."
      },
      {
        titulo: "Examen 2024-1 · P3 — Dominio de una composición",
        dificultad: "intermedio",
        enunciado: "<p>Sea $f$ una función con $\\operatorname{Dom}(f)=[0,2]$. Determine el dominio de $g(x)=f(x^2-4x+5)$.</p>",
        concepto: "Para que $g$ esté definida, la entrada $x^2-4x+5$ debe pertenecer al dominio de $f$. Se resuelve la inecuación resultante completando el cuadrado.",
        pista: "Escriba $x^2-4x+5=(x-2)^2+1$ y exija $0\\le(x-2)^2+1\\le2$.",
        desarrollo: [
          "<b>Paso 1. Condición.</b> $x\\in\\operatorname{Dom}(g)\\Leftrightarrow x^2-4x+5\\in[0,2]$.",
          "<b>Paso 2. Completar el cuadrado.</b> $x^2-4x+5=(x-2)^2+1$.",
          "<b>Paso 3. Cota inferior.</b> $(x-2)^2+1\\ge1\\ge0$ siempre, así que la condición $\\ge0$ no restringe.",
          "<b>Paso 4. Cota superior.</b> $(x-2)^2+1\\le2\\Rightarrow(x-2)^2\\le1$.",
          "<b>Paso 5. Resolver.</b> $|x-2|\\le1\\Rightarrow1\\le x\\le3$."
        ],
        respuesta: "$\\operatorname{Dom}(g)=[1,3]$."
      },
      {
        titulo: "Examen 2024-1 · P6 — Logaritmo y divergencia",
        dificultad: "avanzado",
        enunciado: "<p>Determine $\\displaystyle\\lim_{n\\to\\infty}\\ln\\left(\\dfrac{3^n}{e^{2n}}\\right)$.</p>",
        concepto: "Se usan las propiedades del logaritmo para separar el cuociente y se compara el crecimiento de $n\\ln3$ con $2n$.",
        pista: "$\\ln\\left(\\frac{3^n}{e^{2n}}\\right)=n\\ln3-2n$.",
        desarrollo: [
          "<b>Paso 1. Propiedades del logaritmo.</b> $\\ln\\left(\\dfrac{3^n}{e^{2n}}\\right)=\\ln(3^n)-\\ln(e^{2n})=n\\ln3-2n$.",
          "<b>Paso 2. Factorizar.</b> $=n(\\ln3-2)$.",
          "<b>Paso 3. Signo de la constante.</b> $\\ln3\\approx1{,}0986<2$, luego $\\ln3-2<0$.",
          "<b>Paso 4. Límite.</b> $n$ tiende a $+\\infty$ y la constante es negativa, así que el producto tiende a $-\\infty$."
        ],
        respuesta: "$\\displaystyle\\lim_{n\\to\\infty}\\ln\\left(\\frac{3^n}{e^{2n}}\\right)=-\\infty$."
      }
    ],
    erroresComunes: [
      "Resolver $\\ln u=\\ln v$ e igualar $u=v$ sin exigir $u>0$ y $v>0$; aparece la solución extraña $x=-3$.",
      "Aplicar $\\ln(uv)=\\ln u+\\ln v$ cuando $u$ o $v$ son negativos; la propiedad requiere positividad.",
      "En el cambio de variable, aceptar la raíz negativa aunque $e^{ax}>0$ siempre.",
      "En el modelo de enfriamiento, confundir $T_0$ (ambiente) con $T_1$ (temperatura inicial).",
      "Al usar el binomio, no ajustar el signo del término negativo o equivocarse en el exponente que aporta cada factor."
    ],
    checklist: [
      "Impongo el dominio antes de resolver una ecuación logarítmica y filtro las soluciones al final.",
      "Resuelvo ecuaciones exponenciales con cambio de variable y descarto raíces no positivas.",
      "Modelo fenómenos de enfriamiento y despejo constantes con logaritmos.",
      "Encuentro coeficientes de una expansión usando el término general del binomio.",
      "Determino dominios de composiciones resolviendo inecuaciones.",
      "Justifico límites infinitos y aplicaciones del sándwich con las cotas explícitas."
    ],
    autoevaluacion: [
      { pregunta: "El dominio de $\\ln(x-2)+\\ln(x+2)$ es:", opciones: ["$\\R\\setminus\\{-2,2\\}$", "$(2,\\infty)$", "$[-2,2]$", "$\\R$"], correcta: 1, explicacion: "Se necesita $x-2>0$ y $x+2>0$; la intersección es $x>2$." },
      { pregunta: "La solución de $e^{2x}=5$ es:", opciones: ["$x=\\frac{\\ln5}{2}$", "$x=\\ln\\frac52$", "$x=2\\ln5$", "$x=\\frac{5}{2}$"], correcta: 0, explicacion: "Aplicando $\\ln$: $2x=\\ln5$, luego $x=\\frac{\\ln5}{2}$." },
      { pregunta: "El coeficiente de $x^2$ en $(1+x)^6$ es:", opciones: ["$6$", "$15$", "$20$", "$30$"], correcta: 1, explicacion: "$\\binom62=\\frac{6\\cdot5}{2}=15$." },
      { pregunta: "Si $u=e^{3x+1}$, entonces $u$ siempre es:", opciones: ["positivo", "negativo", "mayor que $1$", "entero"], correcta: 0, explicacion: "La exponencial toma solo valores positivos." },
      { pregunta: "En el modelo $T(t)=30+30\\cdot10^{-kt}$ con $T(12)=40$, el valor de $10^{-12k}$ es:", opciones: ["$\\frac13$", "$\\frac12$", "$3$", "$\\frac23$"], correcta: 0, explicacion: "$30+30\\cdot10^{-12k}=40\\Rightarrow30\\cdot10^{-12k}=10\\Rightarrow10^{-12k}=\\frac13$." },
      { pregunta: "Si $\\operatorname{Dom}(f)=[0,2]$, el dominio de $f(x^2-4x+5)$ es:", opciones: ["$[0,2]$", "$[1,3]$", "$[2,4]$", "$\\R$"], correcta: 1, explicacion: "$(x-2)^2+1\\in[0,2]\\Leftrightarrow(x-2)^2\\le1\\Leftrightarrow x\\in[1,3]$." }
    ],
    resumen: [
      "En logaritmos y exponenciales, el dominio y la positividad de las bases son tan importantes como el despeje.",
      "El teorema del binomio convierte una expansión en una suma indexada; para un coeficiente se iguala el exponente y se despeja $k$.",
      "Los problemas de examen encadenan unidades: identifica la herramienta de cada parte, justifica y revisa el resultado en el contexto del problema."
    ],
    referencias: [
      { titulo: "Clase 17 — Función logaritmo (PDF)", ruta: "recursos/clases/clase-17.pdf" },
      { titulo: "I8 2025-1 — Interrogación 8 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin8-mat1107.pdf" },
      { titulo: "I8 2024-1 — Solución Interrogación 8", ruta: "recursos/pruebas/PRUEBAS/2024-1/i8-mat1107-2024.pdf" },
      { titulo: "Examen 2024-1 — Solución Examen", ruta: "recursos/pruebas/PRUEBAS/2024-1/ex-mat1107-2024.pdf" },
      { titulo: "Guía 8 — Logaritmo y exponencial", ruta: "recursos/guias/guia-08-logaritmo-exponencial.pdf" },
      { titulo: "Apunte 18 — Función logaritmo", ruta: "recursos/apuntes/apunte-clase-18.pdf" }
    ]
  });
})();
