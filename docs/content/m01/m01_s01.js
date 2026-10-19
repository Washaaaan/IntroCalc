/* Módulo 1 · Sección 1 — Cuerpo de los números reales: axiomas y operaciones */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m01_s01", modulo: 1, moduloNombre: "Módulo 1 · Números reales, orden y desigualdades", orden: 1,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Cuerpo de los números reales: axiomas y operaciones",
    objetivo: "Reconocer los axiomas de cuerpo de $\\R$, usarlos para justificar las operaciones algebraicas básicas y demostrar propiedades como la regla de los signos y la ley de cancelación.",
    conexion: "Es tu primera clase formal de cálculo: no necesitas recordar teoremas previos, pero sí las operaciones con números reales que usaste en el colegio. La diferencia es que ahora las justificaremos con axiomas.",
    fuente: "Clase 01 · Apunte Clase 1 · Mickenberg Cap. 2",
    prerrequisitos: ["Operaciones con números enteros y racionales", "Uso de paréntesis y jerarquía de operaciones", "Nociones básicas de igualdad", "Conjuntos numéricos"],
    teoria: [
      { tipo: "texto", html: "<p>Todo el cálculo se construye sobre los <b>números reales</b>. En vez de definirlos desde cero, en este curso aceptamos un conjunto de reglas básicas llamadas <b>axiomas de cuerpo</b>. Son las reglas que ya usas al hacer álgebra: sumar, multiplicar, distribuir, cancelar. La novedad es que ahora las escribimos con nombre y apellido, y las usamos para <i>demostrar</i> lo que antes dábamos por obvio.</p><p>El conjunto de los números reales se denota $\\R$ y contiene, entre otros, a los naturales $\\N$, los enteros $\\Z$ y los racionales $\\Q$.</p>" },
      { tipo: "definicion", titulo: "Dos operaciones: suma y multiplicación", html: "<p>En $\\R$ existen dos operaciones:</p><ul><li><b>Suma</b>: a cada par $a,b\\in\\R$ le asigna un único número $a+b\\in\\R$.</li><li><b>Multiplicación</b>: a cada par $a,b\\in\\R$ le asigna un único número $a\\cdot b\\in\\R$. Solemos escribir $ab$ en lugar de $a\\cdot b$.</li></ul><p>A partir de ellas definimos la <b>diferencia</b> y el <b>cociente</b>:</p>$$a-b:=a+(-b),\\qquad \\frac{a}{b}:=a\\,b^{-1}\\quad(b\\neq 0).$$<p>Es decir, restar es sumar el inverso aditivo y dividir es multiplicar por el inverso multiplicativo.</p>" },
      { tipo: "tabla", titulo: "Los seis axiomas de cuerpo", headers: ["Axioma", "Nombre", "Qué dice"], rows: [["A0", "Cierre", "$a+b\\in\\R$ y $ab\\in\\R$ para todo $a,b\\in\\R$"], ["A1", "Conmutatividad", "$a+b=b+a$ y $ab=ba$"], ["A2", "Asociatividad", "$(a+b)+c=a+(b+c)$ y $(ab)c=a(bc)$"], ["A3", "Elementos neutros", "$a+0=a$ y $a\\cdot 1=a$"], ["A4", "Distributividad", "$a(b+c)=ab+ac$"], ["A5", "Inversos", "$a+(-a)=0$; si $a\\neq 0$, $a\\cdot a^{-1}=1$"]] },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> los axiomas son el <i>manual de instrucciones</i> de los números reales. No dicen cómo se ven los números, sino qué está permitido hacer con ellos. Por ejemplo, la distributividad es la regla que te permite <b>abrir paréntesis</b>: $3(x+2)=3x+6$. Si en algún paso de un cálculo no puedes nombrar una de estas reglas, probablemente ese paso es sospechoso.</div>" },
      { tipo: "teorema", titulo: "Todo número multiplicado por 0 da 0", html: "<p>Para todo $a\\in\\R$ se cumple que</p>$$a\\cdot 0=0.$$<p><b>Demostración.</b> Partimos de una igualdad evidente y usamos los axiomas:</p>$$a\\cdot 0+a\\cdot 1=a(0+1)=a\\cdot 1=a.$$<p>En el primer paso usamos distributividad, en el segundo el neutro aditivo y en el tercero el neutro multiplicativo. Sumando $-a$ a ambos lados:</p>$$a\\cdot 0+a+(-a)=a+(-a)\\Longrightarrow a\\cdot 0=0.$$<p>Aquí usamos el inverso aditivo. Nota que <b>no</b> dijimos «es obvio»: cada paso tiene un axioma detrás.</p>" },
      { tipo: "teorema", titulo: "Regla de los signos", html: "<p>Para $a,b\\in\\R$:</p><ol><li>$-(-a)=a$.</li><li>$(-a)b=-(ab)$.</li><li>$a(-b)=-(ab)$.</li><li>$(-a)(-b)=ab$.</li></ol><p>La última es la famosa regla «menos por menos es más». Se deduce de las anteriores:</p>$$(-a)(-b)=-(a(-b))=-(-(ab))=ab.$$<p>Para probar $(-a)b=-(ab)$, sumamos $ab$ a $(-a)b$ y usamos distributividad:</p>$$(-a)b+ab=(-a+a)b=0\\cdot b=0,$$<p>de donde $(-a)b=-(ab)$.</p>" },
      { tipo: "teorema", titulo: "Cancelación y producto cero", html: "<p>Sean $a,b,c\\in\\R$.</p><ul><li><b>Cancelación aditiva:</b> si $a+b=a+c$, entonces $b=c$.</li><li><b>Cancelación multiplicativa:</b> si $ab=ac$ y $a\\neq 0$, entonces $b=c$.</li><li><b>Producto cero:</b> si $ab=0$, entonces $a=0$ o $b=0$.</li></ul><p>Esta última propiedad es la que permite resolver ecuaciones factorizadas: si $(x-2)(x+5)=0$, entonces necesariamente $x-2=0$ o $x+5=0$.</p>" },
      { tipo: "nota", titulo: "Por qué partimos aquí (Mickenberg Cap. 2)", html: "<p>Mickenberg insiste en que los axiomas no se demuestran: se aceptan. Lo que sí se demuestra son sus consecuencias, como la regla de los signos o la cancelación. En el apunte de la Clase 1 encontrarás exactamente estas demostraciones, escritas paso a paso. Stewart, en el capítulo de repaso de álgebra, usa estas mismas propiedades sin nombrarlas; aquí las nombramos para que sepas qué estás aplicando.</p>" },
      { tipo: "nota", titulo: "Cuidado con el inverso multiplicativo", html: "<p>El axioma A5 dice que <b>todo</b> $a\\neq 0$ tiene inverso multiplicativo. El $0$ es la única excepción: no existe $0^{-1}$, porque necesitaríamos un número $b$ con $0\\cdot b=1$, pero $0\\cdot b=0$. Por eso dividir por cero no está definido y nunca es una operación válida.</p>" }
    ],
    ejemplos: [
      {
        titulo: "Multiplicar dos números negativos",
        enunciado: "<p>Calcule $(-3)(-4)$ justificando el signo con la regla de los signos.</p>",
        concepto: "Se aplica la propiedad $(-a)(-b)=ab$, que es una consecuencia de los axiomas de cuerpo y no un acuerdo arbitrario.",
        desarrollo: [
          "<b>Paso 1.</b> Identificamos $a=3$ y $b=4$ en la regla $(-a)(-b)=ab$.",
          "<b>Paso 2.</b> Aplicamos la regla: $(-3)(-4)=3\\cdot 4$.",
          "<b>Paso 3.</b> Calculamos el producto de los valores absolutos: $3\\cdot 4=12$.",
          "<b>Paso 4.</b> Conclusión: $(-3)(-4)=12$. El resultado es positivo porque los dos signos negativos se cancelan."
        ],
        respuesta: "$(-3)(-4)=12$"
      },
      {
        titulo: "Desarrollar un producto de binomios",
        enunciado: "<p>Desarrolle $(2x-3)(x+5)$ usando distributividad y verifique el resultado en $x=2$.</p>",
        concepto: "La distributividad permite multiplicar cada término del primer binomio por cada término del segundo. Es la misma regla A4 aplicada dos veces.",
        desarrollo: [
          "<b>Paso 1.</b> Distribuimos el primer factor sobre la suma del segundo: $(2x-3)(x+5)=(2x-3)x+(2x-3)5$.",
          "<b>Paso 2.</b> Volvemos a distribuir: $=2x\\cdot x-3x+2x\\cdot 5-3\\cdot 5$.",
          "<b>Paso 3.</b> Reducimos términos semejantes: $=2x^2-3x+10x-15=2x^2+7x-15$.",
          "<b>Paso 4.</b> Verificamos en $x=2$: el lado original vale $(4-3)(2+5)=1\\cdot 7=7$.",
          "<b>Paso 5.</b> El desarrollo vale $2(4)+7(2)-15=8+14-15=7$. Ambos resultados coinciden, así que el desarrollo es correcto."
        ],
        respuesta: "$(2x-3)(x+5)=2x^2+7x-15$"
      },
      {
        titulo: "Resolver una ecuación usando producto cero",
        enunciado: "<p>Resuelva $x^2=9$ sin usar raíces, justificando con los axiomas.</p>",
        concepto: "Se usa la propiedad de producto cero: un producto es cero solo si alguno de sus factores es cero.",
        desarrollo: [
          "<b>Paso 1.</b> Pasamos todo a un lado: $x^2-9=0$.",
          "<b>Paso 2.</b> Factorizamos la diferencia de cuadrados: $(x-3)(x+3)=0$.",
          "<b>Paso 3.</b> Por producto cero, $x-3=0$ o $x+3=0$.",
          "<b>Paso 4.</b> Resolvemos cada ecuación lineal: $x=3$ o $x=-3$.",
          "<b>Paso 5.</b> Verificamos: $3^2=9$ y $(-3)^2=9$. Ambos valores sirven."
        ],
        respuesta: "$x=3$ o $x=-3$"
      }
    ],
    ejercicios: [
      {
        titulo: "Producto de tres factores con signo",
        dificultad: "basico",
        enunciado: "<p>Calcule $(-2)(3)(-5)$ y explique el signo del resultado.</p>",
        concepto: "Se aplica la regla de los signos y la asociatividad del producto.",
        pista: "Agrupa primero dos factores y luego multiplica por el tercero.",
        desarrollo: [
          "$(-2)(3)=-6$, porque un factor negativo y uno positivo dan producto negativo.",
          "Luego $(-6)(-5)=30$, porque dos factores negativos dan producto positivo.",
          "También puedes contar los signos: hay dos signos negativos, cantidad par, así que el resultado es positivo."
        ],
        respuesta: "$(-2)(3)(-5)=30$"
      },
      {
        titulo: "Nombrar el axioma usado",
        dificultad: "basico",
        enunciado: "<p>Indica qué axioma de cuerpo justifica cada igualdad:</p><p>(a) $a(b+c)=ab+ac$ &nbsp; (b) $a+0=a$ &nbsp; (c) $a+(-a)=0$ &nbsp; (d) $(ab)c=a(bc)$</p>",
        concepto: "Cada manipulación algebraica tiene un axioma detrás; identificarlo evita usar propiedades que no existen.",
        pista: "Revisa la tabla de los seis axiomas: cierre, conmutatividad, asociatividad, neutro, distributividad e inversos.",
        desarrollo: [
          "(a) Es la distributividad (A4).",
          "(b) Es la existencia del neutro aditivo (A3).",
          "(c) Es la existencia del inverso aditivo (A5).",
          "(d) Es la asociatividad de la multiplicación (A2)."
        ],
        respuesta: "(a) A4; (b) A3; (c) A5; (d) A2."
      },
      {
        titulo: "Diferencia de cuadrados y cálculo mental",
        dificultad: "intermedio",
        enunciado: "<p>Demuestre que $(a+b)(a-b)=a^2-b^2$ y use el resultado para calcular $101\\cdot 99$.</p>",
        concepto: "Se usa distributividad y la regla de los signos para obtener una identidad algebraica útil.",
        pista: "Para el producto numérico, escribe $101=100+1$ y $99=100-1$.",
        desarrollo: [
          "Desarrollamos: $(a+b)(a-b)=a^2-ab+ba-b^2$.",
          "Como $ab=ba$, los términos centrales se cancelan: $-ab+ab=0$.",
          "Queda $(a+b)(a-b)=a^2-b^2$.",
          "Con $a=100$ y $b=1$: $101\\cdot 99=(100+1)(100-1)=100^2-1^2=10000-1=9999$."
        ],
        respuesta: "$(a+b)(a-b)=a^2-b^2$; además $101\\cdot 99=9999$."
      },
      {
        titulo: "Ley de cancelación multiplicativa",
        dificultad: "intermedio",
        enunciado: "<p>Sean $a,b,c\\in\\R$ con $a\\neq 0$. Demuestre que si $ab=ac$, entonces $b=c$.</p>",
        concepto: "Se usa la existencia del inverso multiplicativo y la asociatividad.",
        pista: "Multiplica ambos lados por $a^{-1}$ y reagrupa.",
        desarrollo: [
          "Partimos de $ab=ac$.",
          "Multiplicamos ambos lados por $a^{-1}$, que existe porque $a\\neq 0$: $a^{-1}(ab)=a^{-1}(ac)$.",
          "Por asociatividad: $(a^{-1}a)b=(a^{-1}a)c$.",
          "Como $a^{-1}a=1$, queda $1\\cdot b=1\\cdot c$.",
          "Por neutro multiplicativo, $b=c$."
        ],
        respuesta: "Si $ab=ac$ y $a\\neq 0$, entonces $b=c$."
      },
      {
        titulo: "Unicidad del inverso aditivo",
        dificultad: "avanzado",
        enunciado: "<p>Demuestre que el inverso aditivo de un número real es único: si $a+b=0$ y $a+c=0$, entonces $b=c$.</p>",
        concepto: "Se combinan asociatividad, conmutatividad, neutro e inverso aditivo. Es una demostración típica de unicidad.",
        pista: "Escribe $b=b+0$ y reemplaza el $0$ usando la igualdad $a+c=0$.",
        desarrollo: [
          "Partimos de $b$ y usamos el neutro aditivo: $b=b+0$.",
          "Como $a+c=0$, podemos reemplazar: $b=b+(a+c)$.",
          "Por asociatividad y conmutatividad: $b=(b+a)+c$.",
          "Como $a+b=0$ y la suma es conmutativa, $b+a=0$. Entonces $b=0+c$.",
          "Por neutro aditivo, $b=c$. Así, el inverso aditivo $-a$ es único."
        ],
        respuesta: "Si $a+b=0$ y $a+c=0$, entonces $b=c$; el inverso aditivo es único."
      }
    ],
    erroresComunes: [
      "Creer que $(-a)(-b)=-ab$: la regla correcta es $(-a)(-b)=ab$.",
      "Pensar que $a\\cdot 0$ depende de $a$; siempre vale $0$, y se demuestra con distributividad.",
      "Dividir por cero o escribir $0^{-1}$ como si existiera; el axioma A5 excluye explícitamente al $0$.",
      "Aplicar cancelación multiplicativa sin comprobar que el factor que se cancela sea distinto de cero.",
      "Inventar una distributividad que no existe, como $a(bc)=ab\\cdot ac$; la distributividad solo abre paréntesis cuando hay una suma o resta adentro."
    ],
    checklist: [
      "Puedo enumerar los seis axiomas de cuerpo y explicar cada uno con un ejemplo.",
      "Sé demostrar que $a\\cdot 0=0$ usando distributividad e inverso aditivo.",
      "Sé aplicar la regla de los signos para multiplicar varios factores negativos.",
      "Sé usar la propiedad de producto cero para resolver una ecuación factorizada.",
      "Sé explicar por qué no se puede dividir por cero.",
      "Sé identificar qué axioma justifica cada paso de una manipulación algebraica."
    ],
    autoevaluacion: [
      { pregunta: "¿Qué axioma justifica la igualdad $a(b+c)=ab+ac$?", opciones: ["Asociatividad", "Distributividad", "Conmutatividad", "Existencia de neutro"], correcta: 1, explicacion: "La distributividad (A4) es exactamente la propiedad que permite multiplicar un factor por una suma." },
      { pregunta: "El valor de $(-4)(-2)(-1)$ es:", opciones: ["$8$", "$-8$", "$-6$", "$6$"], correcta: 1, explicacion: "$(-4)(-2)=8$ y $8\\cdot(-1)=-8$. Hay tres signos negativos, cantidad impar, así que el resultado es negativo." },
      { pregunta: "Si $(x-2)(x+5)=0$, entonces necesariamente:", opciones: ["$x=2$ o $x=5$", "$x=-2$ o $x=5$", "$x=2$ o $x=-5$", "$x=0$"], correcta: 2, explicacion: "Por producto cero, $x-2=0$ o $x+5=0$, es decir, $x=2$ o $x=-5$." },
      { pregunta: "La expresión $\\dfrac{x^2-4}{x-2}$ es igual a $x+2$:", opciones: ["Para todo $x\\in\\R$", "Solo si $x\\neq 2$", "Solo si $x>2$", "Nunca"], correcta: 1, explicacion: "La fracción original no está definida en $x=2$. Al simplificar se obtiene $x+2$, pero la igualdad vale solo en el dominio original, es decir, para $x\\neq 2$." },
      { pregunta: "¿Cuál de estas afirmaciones es un axioma de cuerpo y no una consecuencia?", opciones: ["$a\\cdot 0=0$", "$(-a)(-b)=ab$", "$a+(-a)=0$", "$(-a)b=-(ab)$"], correcta: 2, explicacion: "La existencia del inverso aditivo, $a+(-a)=0$, es el axioma A5. Las otras tres se demuestran a partir de los axiomas." },
      { pregunta: "Si $ab=0$ y $a\\neq 0$, entonces:", opciones: ["$b$ puede ser cualquier real", "$b=0$", "$a=0$", "No se puede concluir nada"], correcta: 1, explicacion: "Por producto cero, al menos uno de los factores es cero. Como $a\\neq 0$, debe ser $b=0$." }
    ],
    resumen: [
      "Los números reales forman un cuerpo: suma y multiplicación cumplen cierre, conmutatividad, asociatividad, neutros, distributividad e inversos.",
      "La regla de los signos, la cancelación y la propiedad de producto cero se deducen de los axiomas; no son reglas independientes.",
      "El axioma del inverso multiplicativo excluye al cero, lo que explica por qué dividir por cero no está permitido."
    ],
    referencias: [
      { titulo: "Clase 01 — R es un cuerpo (PDF)", ruta: "recursos/clases/clase-01.pdf" },
      { titulo: "Apunte Clase 1 — Axiomas de cuerpo (PDF)", ruta: "recursos/apuntes/apunte-clase-01.pdf" },
      { titulo: "Mickenberg, Precálculo (Cap. 2)", ruta: "recursos/libros/precalculo-mickenberg.pdf" },
      { titulo: "Stewart, Precálculo (repaso de álgebra)", ruta: "recursos/libros/precalculo-stewart.pdf" }
    ]
  });
})();
