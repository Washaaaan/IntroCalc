/* Módulo 6 · Sección 1 — I1: polinomios, orden e inducción */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m06_s01", modulo: 6, moduloNombre: "Módulo 6 · Banco de evaluaciones", orden: 34,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "I1: polinomios, orden e inducción",
    objetivo: "Resolver problemas reales de la Interrogación 1 aplicando el algoritmo de la división, los teoremas del resto y del factor, las propiedades de orden y el principio de inducción.",
    conexion: "Necesitas recordar la división larga de polinomios, la factorización de cuadráticas y los axiomas de orden. Todo eso se usa aquí tal como aparece en la I1.",
    fuente: "I1 2020–2026 · Clase 11 · Apunte 12 · Mickenberg Cap. 7",
    prerrequisitos: ["División de polinomios", "Teorema del resto y del factor", "Axiomas de orden", "Principio de inducción"],
    teoria: [
      { tipo: "texto", html: "<p>La <b>Interrogación 1</b> de MAT1107 suele tener cuatro problemas y dos horas de duración. Los temas que más se repiten son: <b>división de polinomios</b> con sus teoremas del resto y del factor, <b>desigualdades</b> demostradas con axiomas o con suma de cuadrados, <b>inecuaciones racionales y con raíces</b>, y alguna <b>demostración por inducción</b>. En este banco resolvemos esos problemas tal como aparecieron en evaluaciones reales.</p>" },
      { tipo: "definicion", titulo: "Algoritmo de la división", html: "<p>Dados polinomios $P(x)$ y $D(x)$ con $D(x)\\neq 0$, existen polinomios únicos $Q(x)$ y $R(x)$ tales que</p>$$P(x)=D(x)\\,Q(x)+R(x),$$<p>donde $R(x)$ es el polinomio nulo o tiene grado menor que el grado de $D(x)$. A $Q$ se le llama <b>cociente</b> y a $R$, <b>resto</b>.</p>" },
      { tipo: "teorema", titulo: "Teorema del resto y teorema del factor", html: "<p><b>Resto:</b> el resto de dividir $P(x)$ por $x-a$ es $P(a)$.</p><p><b>Factor:</b> $(x-a)$ es factor de $P(x)$ si y solo si $P(a)=0$.</p><p>Si el divisor es $ax-b$, conviene escribir $ax-b=a\\left(x-\\frac{b}{a}\\right)$: el resto es $P\\left(\\frac{b}{a}\\right)$, porque el factor constante $a$ no cambia las raíces.</p>" },
      { tipo: "nota", titulo: "Regla de Ruffini (Clase 11, Mickenberg Cap. 7)", html: "<p>Para dividir por $x-a$ se ordenan los coeficientes, se baja el primero, se multiplica por $a$ y se suma al siguiente. Si el divisor es $2x-1$, se puede dividir primero por $x-\\frac12$ y luego ajustar el cociente: al dividir por $2x-1$ el cociente queda dividido por $2$ respecto de la división por $x-\\frac12$. En la pauta de 2026 se usa Ruffini directamente con la raíz $\\frac12$.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> dividir es preguntar «¿cuántas veces cabe el divisor y qué sobra?». El teorema del resto es un atajo: en vez de dividir, evalúa. El teorema del factor es otro atajo: si al evaluar en $a$ te da cero, entonces $(x-a)$ divide exactamente al polinomio.</div>" },
      { tipo: "tabla", titulo: "Qué te pide cada parte de un problema de polinomios", headers: ["Pregunta de la prueba", "Herramienta", "Qué escribir"], rows: [["Cociente y resto de $P\\div D$", "División larga o Ruffini", "La igualdad $P=DQ+R$ completa"], ["Verificar el resto", "Teorema del resto", "Calcular $P(a)$ y comparar"], ["¿Es $(x-a)$ factor?", "Teorema del factor", "Evaluar $P(a)$ y concluir"], ["Factorizar completamente", "Dividir sucesivamente", "Producto de factores lineales e irreducibles"]] },
      { tipo: "teorema", titulo: "Principio de inducción", html: "<p>Sea $p(n)$ una afirmación sobre $n\\in\\N$. Si <b>(i)</b> $p(1)$ es verdadera y <b>(ii)</b> para todo $k\\in\\N$, $p(k)$ verdadera implica $p(k+1)$ verdadera, entonces $p(n)$ es verdadera para todo $n\\in\\N$.</p><p>Cuando la propiedad empieza en $n=2$ o $n=3$, el caso base cambia; el resto del esquema es igual.</p>" },
      { tipo: "nota", titulo: "Cómo se reparte el puntaje en la I1", html: "<p>En las pautas de 2025 y 2026, cada inciso de polinomios vale entre $1$ y $3$ puntos y se exige mostrar el procedimiento. En las demostraciones de orden se puntúa cada axioma usado y la conclusión. En inducción se puntúa caso base, hipótesis de inducción, paso inductivo y conclusión: saltarse la hipótesis cuesta puntos aunque el resultado sea correcto.</p>" }
    ],
    ejemplos: [
      {
        titulo: "I1 2025-1 · P1 — División, resto, factor y factorización completa",
        enunciado: "<p>Considere $P(x)=x^5-x^4-2x^3-x^2+x+2$.</p><p>(a) Divida $P(x)$ por $x-2$ indicando cociente y resto. (b) Verifique el resto con el teorema del resto. (c) Determine si $x+1$ es factor. (d) Factorice completamente $P(x)$.</p>",
        concepto: "Se aplica el algoritmo de la división, el teorema del resto (evaluar en $2$) y el teorema del factor (evaluar en $-1$). Al final se divide por el producto de los factores ya conocidos.",
        desarrollo: [
          "<b>Paso 1. Ruffini con $a=2$.</b> Coeficientes de $P$: $1,-1,-2,-1,1,2$. Bajamos $1$; multiplicamos por $2$ y sumamos: $2+(-1)=1$; $2\\cdot 1+(-2)=0$; $2\\cdot 0+(-1)=-1$; $2\\cdot(-1)+1=-1$; $2\\cdot(-1)+2=0$.",
          "<b>Paso 2. Leer cociente y resto.</b> El cociente es $Q(x)=x^4+x^3+0x^2-x-1=x^4+x^3-x-1$ y el resto es $0$.",
          "<b>Paso 3. Verificar con el teorema del resto.</b> $P(2)=32-16-16-4+2+2=0$. Coincide con el resto obtenido.",
          "<b>Paso 4. Teorema del factor para $x+1$.</b> Evaluamos en $-1$: $P(-1)=-1-1+2-1-1+2=0$. Como $P(-1)=0$, $x+1$ es factor.",
          "<b>Paso 5. Dividir por el producto.</b> $(x-2)(x+1)=x^2-x-2$. Al dividir $P$ por $x^2-x-2$ se obtiene $x^3-1$, pues $(x^2-x-2)(x^3-1)=x^5-x^4-2x^3-x^2+x+2$.",
          "<b>Paso 6. Factorizar el cubo.</b> $x^3-1=(x-1)(x^2+x+1)$. El factor $x^2+x+1$ tiene discriminante $1-4=-3<0$, así que no se factoriza sobre $\\R$."
        ],
        respuesta: "$Q(x)=x^4+x^3-x-1$, $R=0$; $x+1$ sí es factor; $P(x)=(x-2)(x+1)(x-1)(x^2+x+1)$."
      },
      {
        titulo: "I1 2025-1 · P2 — Desigualdad con $a>1$ y $b>1$",
        enunciado: "<p>Pruebe que si $a>1$ y $b>1$, entonces $ab+1>a+b$.</p>",
        concepto: "Se usa que la diferencia de dos números positivos es positiva y que multiplicar una desigualdad por un número positivo conserva el sentido. La idea es fabricar el producto $(a-1)(b-1)>0$.",
        desarrollo: [
          "<b>Paso 1. Traducir las hipótesis.</b> De $a>1$ se sigue $a-1>0$; de $b>1$ se sigue $b-1>0$.",
          "<b>Paso 2. Multiplicar dos positivos.</b> Como $\\R^+$ es cerrado bajo el producto, $(a-1)(b-1)>0$.",
          "<b>Paso 3. Expandir.</b> $(a-1)(b-1)=ab-a-b+1>0$.",
          "<b>Paso 4. Despejar.</b> Sumando $a+b$ a ambos lados: $ab+1>a+b$."
        ],
        respuesta: "$(a-1)(b-1)>0\\Rightarrow ab-a-b+1>0\\Rightarrow ab+1>a+b$."
      }
    ],
    ejercicios: [
      {
        titulo: "I1 2026-1 · P1 — División por $2x-1$ y factorización en tres factores",
        dificultad: "intermedio",
        enunciado: "<p>Sea $P(x)=4x^6+2x^5-2x^4-4x^3+3x-1$.</p><p>(a) Divida $P(x)$ por $2x-1$. (b) Verifique el resto con el teorema del resto. (c) Determine si $x+1$ es factor. (d) Demuestre que $2x^4-2x+1$ es factor y entregue una factorización con tres factores.</p>",
        concepto: "División por un divisor lineal $ax-b$: el resto es $P(b/a)$. Luego se usa el teorema del factor y se divide por el producto de los factores conocidos.",
        pista: "Use Ruffini con $a=\\frac12$ y recuerde que al dividir por $2x-1$ el cociente de Ruffini queda dividido por $2$.",
        desarrollo: [
          "<b>Paso 1. Ruffini con $\\frac12$.</b> Coeficientes $4,2,-2,-4,0,3,-1$. Ruffini entrega el cociente $4x^5+4x^4-4x^2-2x+2$ y resto $0$. Como el divisor es $2x-1=2\\left(x-\\frac12\\right)$, el cociente de la división pedida es la mitad: $2x^5+2x^4-2x^2-x+1$.",
          "<b>Paso 2. Verificar.</b> $P\\left(\\frac12\\right)=4\\cdot\\frac1{64}+2\\cdot\\frac1{32}-2\\cdot\\frac1{16}-4\\cdot\\frac18+\\frac32-1=\\frac1{16}+\\frac1{16}-\\frac18-\\frac12+\\frac32-1=0$.",
          "<b>Paso 3. Evaluar en $-1$.</b> $P(-1)=4-2-2+4-3-1=0$, luego $x+1$ es factor.",
          "<b>Paso 4. Dividir por $(2x-1)(x+1)=2x^2+x-1$.</b> La división larga da cociente $2x^4-2x+1$ y resto $0$.",
          "<b>Paso 5. Comprobar el producto.</b> $(2x-1)(x+1)(2x^4-2x+1)=4x^6+2x^5-2x^4-4x^3+3x-1$."
        ],
        respuesta: "$P(x)=(2x-1)(x+1)(2x^4-2x+1)$; el resto de dividir por $2x-1$ es $0$."
      },
      {
        titulo: "I1 2026-1 · P2 — Raíz $3/2$ y factorización con raíces irracionales",
        dificultad: "avanzado",
        enunciado: "<p>Considere $P(a)=4a^3+4a^2-19a+6$.</p><p>(a) Verifique que $a=\\frac32$ es raíz. (b) Divida $P(a)$ por $2a-3$. (c) Factorice completamente $P(a)$ sobre $\\R$.</p>",
        concepto: "Teorema del factor, división por $2a-3$ y fórmula cuadrática para el cociente. Las raíces del cociente pueden ser irracionales.",
        pista: "Después de dividir obtendrá $2a^2+5a-2$; use la fórmula cuadrática con discriminante $25+16$.",
        desarrollo: [
          "<b>Paso 1. Verificar la raíz.</b> $P\\left(\\frac32\\right)=4\\cdot\\frac{27}{8}+4\\cdot\\frac94-19\\cdot\\frac32+6=\\frac{27}{2}+9-\\frac{57}{2}+6=0$.",
          "<b>Paso 2. Dividir por $2a-3$.</b> Ruffini con $\\frac32$ entrega el cociente $4a^2+10a-4$ y resto $0$; como $2a-3=2\\left(a-\\frac32\\right)$, el cociente pedido es la mitad: $2a^2+5a-2$.",
          "<b>Paso 3. Resolver la cuadrática.</b> $2a^2+5a-2=0$ tiene $\\Delta=25+16=41$, luego $a=\\frac{-5\\pm\\sqrt{41}}{4}$.",
          "<b>Paso 4. Escribir la factorización.</b> $P(a)=(2a-3)(2a^2+5a-2)=(2a-3)\\,2\\left(a-\\frac{-5+\\sqrt{41}}{4}\\right)\\left(a-\\frac{-5-\\sqrt{41}}{4}\\right)$."
        ],
        respuesta: "$P(a)=(2a-3)(2a^2+5a-2)$; las raíces son $\\frac32$ y $\\frac{-5\\pm\\sqrt{41}}{4}$."
      },
      {
        titulo: "I1 2023-1 · P2 — Inecuación racional que se reduce a un cociente lineal",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\dfrac{x^2+4x-12}{x^2-6x+8}\\le -1$.</p>",
        concepto: "Se lleva todo a un mismo lado, se factoriza y se simplifica el factor común, registrando las restricciones del denominador. Luego se usa una tabla de signos.",
        pista: "Sume $1$ a ambos lados y factorice: el numerador y el denominador comparten el factor $(x-2)$.",
        desarrollo: [
          "<b>Paso 1. Llevar todo a la izquierda.</b> $\\dfrac{x^2+4x-12}{x^2-6x+8}+1\\le 0$.",
          "<b>Paso 2. Sumar como fracción.</b> $\\dfrac{x^2+4x-12+x^2-6x+8}{x^2-6x+8}=\\dfrac{2x^2-2x-4}{(x-2)(x-4)}\\le 0$.",
          "<b>Paso 3. Factorizar.</b> $2x^2-2x-4=2(x-2)(x+1)$, entonces la desigualdad es $\\dfrac{2(x+1)}{x-4}\\le 0$ con $x\\neq 2$ y $x\\neq 4$.",
          "<b>Paso 4. Tabla de signos.</b> Los puntos críticos son $-1$ y $4$. El cociente es negativo entre ellos y vale $0$ en $x=-1$; en $x=4$ hay restricción.",
          "<b>Paso 5. Incorporar $x\\neq 2$.</b> El intervalo $[-1,4)$ se parte en $[-1,2)\\cup(2,4)$."
        ],
        respuesta: "$S=[-1,2)\\cup(2,4)$."
      },
      {
        titulo: "I1 2025-1 · P3 — La suma $x+\\frac9x$ y la suma de cuadrados",
        dificultad: "basico",
        enunciado: "<p>Demuestre que si $x>0$, entonces $x+\\dfrac9x\\ge 6$.</p>",
        concepto: "Se transforma la desigualdad en una suma de cuadrados dividida por un número positivo. Esa es la técnica de completación de cuadrado aplicada a una desigualdad.",
        pista: "Calcule $x+\\frac9x-6$ y escriba el numerador como un cuadrado.",
        desarrollo: [
          "<b>Paso 1. Restar $6$.</b> Basta probar $x+\\dfrac9x-6\\ge 0$.",
          "<b>Paso 2. Común denominador.</b> $x+\\dfrac9x-6=\\dfrac{x^2+9-6x}{x}=\\dfrac{(x-3)^2}{x}$.",
          "<b>Paso 3. Analizar el signo.</b> $(x-3)^2\\ge 0$ para todo $x$ y $x>0$ por hipótesis.",
          "<b>Paso 4. Concluir.</b> Un no negativo dividido por un positivo es no negativo, luego $x+\\frac9x\\ge 6$."
        ],
        respuesta: "$x+\\frac9x-6=\\frac{(x-3)^2}{x}\\ge 0$, pues $x>0$."
      },
      {
        titulo: "I1 2020-1 · P2 — Inducción con una suma de fracciones",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que para todo entero $n\\ge 2$ se cumple</p>$$\\frac1{n+1}+\\frac1{n+2}+\\cdots+\\frac1{2n}>\\frac{13}{24}.$$",
        concepto: "Inducción: caso base $n=2$, hipótesis de inducción para $k$ y comparación de la suma en $k+1$ con la suma en $k$.",
        pista: "Al pasar de $k$ a $k+1$ se agregan $\\frac1{2k+1}$ y $\\frac1{2k+2}$, pero se pierde $\\frac1{k+1}$.",
        desarrollo: [
          "<b>Paso 1. Caso base $n=2$.</b> $\\frac13+\\frac14=\\frac7{12}=\\frac{14}{24}>\\frac{13}{24}$.",
          "<b>Paso 2. Hipótesis de inducción.</b> Supongamos que para algún $k\\ge 2$ se cumple $S_k=\\frac1{k+1}+\\cdots+\\frac1{2k}>\\frac{13}{24}$.",
          "<b>Paso 3. Relacionar $S_{k+1}$ con $S_k$.</b> $S_{k+1}=S_k+\\frac1{2k+1}+\\frac1{2k+2}-\\frac1{k+1}$.",
          "<b>Paso 4. Simplificar la diferencia.</b> Como $\\frac1{2k+2}=\\frac1{2(k+1)}$, se tiene $-\\frac1{k+1}+\\frac1{2k+2}=-\\frac1{2k+2}$. Así $S_{k+1}=S_k+\\frac1{2k+1}-\\frac1{2k+2}$.",
          "<b>Paso 5. Concluir.</b> $\\frac1{2k+1}-\\frac1{2k+2}>0$, luego $S_{k+1}>S_k>\\frac{13}{24}$. Por inducción vale para todo $n\\ge 2$."
        ],
        respuesta: "$S_{k+1}=S_k+\\frac1{2k+1}-\\frac1{2k+2}>S_k>\\frac{13}{24}$; la desigualdad vale para todo $n\\ge2$."
      },
      {
        titulo: "I1 2025-2 · P4 — Inecuación con dos raíces cuadradas",
        dificultad: "avanzado",
        enunciado: "<p>Resuelva $\\dfrac{\\sqrt{x^2-5x+6}}{\\sqrt{x}}\\ge \\sqrt2$.</p>",
        concepto: "Primero se determina el dominio (todo lo que está bajo una raíz debe ser no negativo y el denominador no puede ser cero). Dentro del dominio, ambos lados son positivos y se puede elevar al cuadrado.",
        pista: "El dominio es $(0,2]\\cup[3,\\infty)$. Al elevar al cuadrado obtendrá $x^2-7x+6\\ge0$.",
        desarrollo: [
          "<b>Paso 1. Dominio.</b> Se necesita $x>0$ y $(x-2)(x-3)\\ge0$, es decir $x\\in(0,2]\\cup[3,\\infty)$.",
          "<b>Paso 2. Elevar al cuadrado.</b> En ese dominio, $\\dfrac{x^2-5x+6}{x}\\ge2$.",
          "<b>Paso 3. Multiplicar por $x>0$.</b> $x^2-5x+6\\ge2x$, o sea $x^2-7x+6\\ge0$.",
          "<b>Paso 4. Factorizar.</b> $(x-1)(x-6)\\ge0$, que se cumple para $x\\le1$ o $x\\ge6$.",
          "<b>Paso 5. Intersectar con el dominio.</b> $(0,2]\\cup[3,\\infty)$ con $(-\\infty,1]\\cup[6,\\infty)$ da $(0,1]\\cup[6,\\infty)$."
        ],
        respuesta: "$S=(0,1]\\cup[6,\\infty)$."
      },
      {
        titulo: "I1 2025-2 · P2 — Inecuación con dos fracciones",
        dificultad: "intermedio",
        enunciado: "<p>Resuelva $\\dfrac1{2x-1}+\\dfrac1{x+2}\\ge1$ y escriba la solución como unión de intervalos.</p>",
        concepto: "Se lleva todo a un mismo lado, se opera hasta obtener un solo cociente y se usa tabla de signos con los ceros del numerador y las restricciones del denominador.",
        pista: "Al sumar las fracciones el numerador queda $3-2x^2$. Los puntos críticos son $-2$, $-\\sqrt{3/2}$, $\\frac12$ y $\\sqrt{3/2}$.",
        desarrollo: [
          "<b>Paso 1. Un solo lado.</b> $\\dfrac1{2x-1}+\\dfrac1{x+2}-1\\ge0$.",
          "<b>Paso 2. Común denominador.</b> $\\dfrac{(x+2)+(2x-1)-(2x-1)(x+2)}{(2x-1)(x+2)}=\\dfrac{3-2x^2}{(2x-1)(x+2)}\\ge0$.",
          "<b>Paso 3. Cambiar de signo.</b> Equivale a $\\dfrac{2x^2-3}{(2x-1)(x+2)}\\le0$, con $x\\neq\\frac12$ y $x\\neq-2$.",
          "<b>Paso 4. Tabla de signos.</b> Los puntos críticos son $-2$, $-\\sqrt{3/2}$, $\\frac12$ y $\\sqrt{3/2}$. El cociente es negativo en $(-2,-\\sqrt{3/2}]$ y en $(\\frac12,\\sqrt{3/2}]$.",
          "<b>Paso 5. Escribir la solución.</b> $S=(-2,-\\sqrt{3/2}]\\cup(\\frac12,\\sqrt{3/2}]$."
        ],
        respuesta: "$S=\\left(-2,-\\sqrt{\\frac32}\\right]\\cup\\left(\\frac12,\\sqrt{\\frac32}\\right]$."
      }
    ],
    erroresComunes: [
      "Al dividir por $2x-1$, usar $a=1$ o $a=-1$ en Ruffini en vez de $a=\\frac12$.",
      "Afirmar que $x+1$ es factor porque $P(1)=0$; el teorema del factor usa la raíz del factor: $x+1=0$ da $x=-1$.",
      "Multiplicar una inecuación por una expresión que puede ser negativa sin analizar su signo; eso puede invertir la desigualdad.",
      "En inducción, escribir el paso inductivo sin usar la hipótesis $p(k)$; la demostración pierde el puntaje central.",
      "Elevar al cuadrado una inecuación con raíces sin comprobar antes que ambos lados son no negativos y sin intersectar con el dominio."
    ],
    checklist: [
      "Sé dividir polinomios con división larga y con Ruffini, y verifico el resto evaluando.",
      "Aplico correctamente los teoremas del resto y del factor, incluyendo divisores $ax-b$.",
      "Factorizo completamente un polinomio usando divisiones sucesivas y la fórmula cuadrática.",
      "Demuestro desigualdades con axiomas de orden o completando cuadrados.",
      "Resuelvo inecuaciones racionales y con raíces registrando dominio y restricciones.",
      "Escribo una inducción completa: caso base, hipótesis, paso inductivo y conclusión."
    ],
    autoevaluacion: [
      { pregunta: "El resto de dividir $P(x)=x^3-4x+1$ por $x-2$ es:", opciones: ["$1$", "$-1$", "$0$", "$3$"], correcta: 0, explicacion: "Por el teorema del resto, $R=P(2)=8-8+1=1$." },
      { pregunta: "Si $P(3)=0$, entonces necesariamente:", opciones: ["$x+3$ es factor de $P$", "$x-3$ es factor de $P$", "$P$ tiene grado $3$", "$P(0)=3$"], correcta: 1, explicacion: "El teorema del factor dice que $x-a$ es factor si y solo si $P(a)=0$; aquí $a=3$." },
      { pregunta: "Al dividir por $2x-1$, el resto es:", opciones: ["$P(-1)$", "$P(1)$", "$P\\left(\\frac12\\right)$", "$P(2)$"], correcta: 2, explicacion: "$2x-1=0$ da $x=\\frac12$; el resto de dividir por un lineal $ax-b$ es $P(b/a)$." },
      { pregunta: "La solución de $\\dfrac{x+1}{x-4}\\le0$ es:", opciones: ["$[-1,4]$", "$[-1,4)$", "$(-1,4)$", "$(-\\infty,-1]\\cup(4,\\infty)$"], correcta: 1, explicacion: "El cociente es negativo o cero entre las raíces; $x=4$ se excluye porque anula el denominador." },
      { pregunta: "En una inducción, el paso inductivo consiste en:", opciones: ["probar el caso $n=1$", "suponer $p(k)$ y probar $p(k+1)$", "probar $p(n)$ para varios $n$", "suponer $p(k+1)$ y probar $p(k)$"], correcta: 1, explicacion: "Se asume la hipótesis de inducción $p(k)$ y se deduce $p(k+1)$; el caso base se prueba aparte." },
      { pregunta: "Si $x>0$, el valor mínimo de $x+\\frac9x$ es:", opciones: ["$3$", "$6$", "$9$", "no tiene mínimo"], correcta: 1, explicacion: "$x+\\frac9x-6=\\frac{(x-3)^2}{x}\\ge0$, y en $x=3$ se alcanza el valor $6$." }
    ],
    resumen: [
      "La I1 combina polinomios, orden e inducción; cada tema tiene un procedimiento reconocible y un puntaje asociado.",
      "Para polinomios: dividir, verificar el resto con $P(a)$, decidir factores con $P(a)=0$ y factorizar por divisiones sucesivas.",
      "Para desigualdades e inducción: justificar cada paso con un axioma, una factorización o la hipótesis inductiva, y cerrar explícitamente la conclusión."
    ],
    referencias: [
      { titulo: "I1 2025-1 — Interrogación 1 con pauta", ruta: "recursos/pruebas/PRUEBAS/2025-1/interrogacin1-mat1107.pdf" },
      { titulo: "I1 2026-1 — Pauta Interrogación 1", ruta: "recursos/pruebas/PRUEBAS/2026-1/i1-mat1107-pauta.pdf" },
      { titulo: "I1 2025-2 — Pauta Interrogación 1", ruta: "recursos/pruebas/PRUEBAS/2025-2/pauta-i1.pdf" },
      { titulo: "Clase 11 — Polinomios y división", ruta: "recursos/clases/clase-11.pdf" },
      { titulo: "Apunte 12 — División de polinomios y factorización", ruta: "recursos/apuntes/apunte-clase-12.pdf" }
    ]
  });
})();
