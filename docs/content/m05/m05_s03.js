/* Módulo 5 · Sección 3 — Aplicación: ahorro y crédito hipotecario */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "m05_s03", modulo: 5, moduloNombre: "Módulo 5 · Límites, convergencia y aplicaciones", orden: 28,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "Aplicación: ahorro y crédito hipotecario",
    objetivo: "Modelar un crédito hipotecario mediante una sucesión de montos insolutos, deducir la fórmula de la cuota mensual usando la suma geométrica y resolver numéricamente situaciones de crédito y ahorro.",
    conexion: "Necesitas recordar la suma de una progresión geométrica, $\\sum_{j=0}^{m-1}x^j=\\frac{1-x^m}{1-x}$ para $x\\neq 1$, y el manejo de porcentajes. Esa fórmula, que apareció en el módulo de sucesiones, es la que permite cerrar el crédito en un número finito de cuotas.",
    fuente: "Clase 23 · Apunte de clase · Stewart §12.4",
    prerrequisitos: ["Progresiones geométricas y suma finita", "Porcentajes y tasas de interés", "Potencia y raíz duodécima", "Sucesiones definidas por recurrencia"],
    teoria: [
      { tipo: "texto", html: "<p>Comprar una vivienda suele requerir un préstamo de varios millones de pesos, que se paga en cuotas mensuales durante muchos años. Detrás de esa operación hay una sucesión: el <b>monto insoluto</b>, es decir, la parte del crédito que todavía no se ha pagado. Cada mes el banco cobra un interés sobre ese monto y luego recibe la cuota; el saldo cambia según una regla recursiva muy simple.</p><p>En esta sección vamos a deducir desde cero la fórmula de la cuota, usando la misma suma geométrica que ya conoces. También veremos que, si en vez de pedir prestado se ahorra la misma cantidad cada mes, el dinero acumulado se calcula con una suma geométrica parecida.</p>" },
      { tipo: "definicion", titulo: "Variables del crédito hipotecario", html: "<p>Consideremos un crédito en UF, pagado en cuotas mensuales iguales. Definimos:</p><ul><li>$p_0$: monto inicial prestado, en UF.</li><li>$p_i$: monto insoluto después de pagar las primeras $i$ cuotas.</li><li>$r_m$: tasa de interés <b>mensual</b>, expresada como decimal.</li><li>$\\Delta$: valor de la cuota mensual, en UF.</li><li>$N$: plazo del crédito en años.</li><li>$m=12N$: número total de cuotas mensuales.</li></ul><p>El <b>monto insoluto</b> es la deuda pendiente. Pagar el crédito en $N$ años significa que $p_m=0$.</p>" },
      { tipo: "definicion", titulo: "La recurrencia del saldo", html: "<p>Al final de cada mes, el banco calcula el interés sobre el saldo insoluto: $r_m\\,p_i$. Ese interés se suma a la deuda, y luego se resta la cuota pagada. Así,</p>$$p_{i+1}=p_i+r_m\\,p_i-\\Delta,$$<p>es decir,</p>$$p_{i+1}=(1+r_m)p_i-\\Delta.$$<p>Esta es una sucesión definida por recurrencia: para conocer el próximo saldo necesitamos el saldo anterior, la tasa y la cuota.</p>" },
      { tipo: "html", html: "<div class='callout'><b>En palabras simples:</b> cada mes la deuda primero <i>crece</i> porque se le suma el interés, y después <i>disminuye</i> porque pagas la cuota. Si la cuota es menor que el interés del mes, la deuda ¡aumenta aunque pagues! Para que el crédito se termine, la cuota debe ser lo suficientemente grande como para ir reduciendo el saldo.</div>" },
      { tipo: "teorema", titulo: "Fórmula cerrada del monto insoluto", html: "<p>Para todo $i\\ge 1$,</p>$$p_i=p_0(1+r_m)^i-\\Delta\\sum_{j=0}^{i-1}(1+r_m)^j.$$<p>Usando la suma geométrica,</p>$$p_i=p_0(1+r_m)^i-\\Delta\\,\\frac{(1+r_m)^i-1}{r_m}.$$<p><b>Demostración.</b> Iterando la recurrencia:</p>$$p_1=p_0(1+r_m)-\\Delta,$$$$p_2=p_0(1+r_m)^2-\\Delta[1+(1+r_m)],$$$$p_3=p_0(1+r_m)^3-\\Delta[1+(1+r_m)+(1+r_m)^2].$$<p>El patrón es exactamente el de la fórmula. Se puede probar por inducción sobre $i$: si la fórmula vale para $i$, entonces</p>$$p_{i+1}=p_i(1+r_m)-\\Delta=p_0(1+r_m)^{i+1}-\\Delta\\sum_{j=0}^{i}(1+r_m)^j.$$<p>Luego se aplica $\\sum_{j=0}^{i-1}x^j=\\frac{x^i-1}{x-1}$ con $x=1+r_m$. $\\blacksquare$</p>" },
      { tipo: "teorema", titulo: "Fórmula de la cuota mensual", html: "<p>Si el crédito se paga completamente en $m=12N$ cuotas, entonces $p_m=0$. Reemplazando en la fórmula cerrada:</p>$$0=p_0(1+r_m)^m-\\Delta\\,\\frac{(1+r_m)^m-1}{r_m}.$$<p>Despejando $\\Delta$ se obtiene la <b>cuota mensual</b>:</p>$$\\Delta=\\frac{p_0\\,r_m(1+r_m)^m}{(1+r_m)^m-1}=\\frac{p_0\\,r_m}{1-(1+r_m)^{-m}}.$$<p>Equivalentemente, si se conoce la cuota y se quiere saber cuánto se puede pedir prestado:</p>$$p_0=\\frac{\\Delta}{r_m}\\left(1-(1+r_m)^{-m}\\right).$$" },
      { tipo: "nota", titulo: "De tasa anual a tasa mensual (Clase 23)", html: "<p>En Chile, la tasa anual anunciada $r_a$ no se divide por 12: se interpreta como una tasa efectiva anual. La tasa mensual $r_m$ se obtiene de</p>$$(1+r_m)^{12}=1+r_a,$$<p>de donde</p>$$r_m=(1+r_a)^{1/12}-1.$$<p>Por ejemplo, con $r_a=3{,}17\\%=0{,}0317$,</p>$$r_m=(1{,}0317)^{1/12}-1\\approx 0{,}002604=0{,}2604\\%\\text{ mensual}.$$<p>Dividir $3{,}17\\%$ por $12$ daría $0{,}2642\\%$, un valor parecido pero no igual. La diferencia se debe a que el interés se capitaliza mes a mes.</p>" },
      { tipo: "nota", titulo: "El límite cuando el plazo crece (Clase 23)", html: "<p>Si el plazo $N$ crece indefinidamente, el factor $(1+r_m)^{-12N}$ tiende a $0$ porque $1+r_m>1$. Por lo tanto,</p>$$p_0=\\frac{\\Delta}{r_m}\\left(1-(1+r_m)^{-12N}\\right)\\xrightarrow[N\\to\\infty]{}\\frac{\\Delta}{r_m}.$$<p>Este valor es el <b>monto máximo</b> que se puede pedir con una cuota fija $\\Delta$: aunque el plazo fuera infinito, la cuota apenas alcanzaría para pagar los intereses y nunca se amortizaría el capital. Con $\\Delta=9$ UF y $r_m\\approx 0{,}002604$, el máximo es</p>$$\\frac{9}{0{,}002604}\\approx 3456\\text{ UF}.$$" },
      { tipo: "teorema", titulo: "Ahorro programado", html: "<p>Si una persona deposita $\\Delta$ UF al final de cada mes durante $m$ meses, en una cuenta que paga interés mensual $r_m$, el monto acumulado es</p>$$S_m=\\Delta\\sum_{j=0}^{m-1}(1+r_m)^j=\\Delta\\,\\frac{(1+r_m)^m-1}{r_m}.$$<p>La diferencia con el crédito es el signo: en el ahorro los depósitos se suman y el interés juega a favor; en el crédito el interés se suma a la deuda y la cuota se resta.</p>" },
      { tipo: "tabla", titulo: "¿Cuánto se puede pedir con una cuota de 9 UF?", headers: ["Plazo N (años)", "Cuotas m = 12N", "Monto p₀ aproximado (UF)"], rows: [["8", "96", "764"], ["15", "180", "1292"], ["20", "240", "1605"], ["25", "300", "1872"], ["30", "360", "2101"]] },
      { tipo: "grafico", spec: { tipo: "plot2d", titulo: "Monto máximo de crédito según el plazo (Δ = 9 UF, rₐ = 3,17 %)", funciones: [ { f: function (N) { return (9 / 0.002604045244918307) * (1 - Math.pow(1.0317, -N)); }, desde: 0, hasta: 40, label: "p₀(N)", color: "#1e5eff" } ], asintotas: [ { tipo: "horizontal", y: 3456.16 } ], xlabel: "N (años)", ylabel: "p₀ (UF)", rangeX: [0, 40], rangeY: [0, 3700] } }
    ],
    ejemplos: [
      {
        titulo: "De la tasa anual a la tasa mensual",
        enunciado: "<p>Un banco anuncia un crédito hipotecario con una tasa anual de $3{,}17\\%$. Determine la tasa mensual que se usará en la recurrencia.</p>",
        concepto: "Se usa la relación $(1+r_m)^{12}=1+r_a$, que convierte una tasa efectiva anual en tasa efectiva mensual. No se divide por 12.",
        desarrollo: [
          "<b>Paso 1.</b> Escribimos la tasa anual como decimal: $r_a=3{,}17\\%=0{,}0317$.",
          "<b>Paso 2.</b> Planteamos $(1+r_m)^{12}=1+r_a=1{,}0317$.",
          "<b>Paso 3.</b> Aplicamos raíz duodécima: $1+r_m=(1{,}0317)^{1/12}$.",
          "<b>Paso 4.</b> Calculamos: $(1{,}0317)^{1/12}\\approx 1{,}002604045$. Por lo tanto, $r_m\\approx 0{,}002604$.",
          "<b>Paso 5.</b> En porcentaje, $r_m\\approx 0{,}2604\\%$ mensual."
        ],
        respuesta: "$r_m\\approx 0{,}002604$, es decir, aproximadamente $0{,}2604\\%$ mensual."
      },
      {
        titulo: "Cuota de un crédito de 1000 UF a 20 años",
        enunciado: "<p>Considere un préstamo de $1000$ UF pagado en $20$ años, con una tasa mensual de $\\frac23\\%$. Determine la cuota mensual y el monto total pagado.</p>",
        concepto: "Se usa la fórmula $\\Delta=\\frac{p_0r_m}{1-(1+r_m)^{-m}}$, con $m=12N$. Es el ejemplo clásico de la Clase 23.",
        desarrollo: [
          "<b>Paso 1.</b> La tasa mensual es $r_m=\\frac23\\%=\\frac{2}{300}\\approx 0{,}0066667$.",
          "<b>Paso 2.</b> El número de cuotas es $m=12\\cdot 20=240$.",
          "<b>Paso 3.</b> Calculamos $(1+r_m)^m=(1{,}0066667)^{240}\\approx 4{,}926803$. Por lo tanto, $(1+r_m)^{-240}\\approx 0{,}202971$.",
          "<b>Paso 4.</b> Reemplazamos en la fórmula: $$\\Delta=\\frac{1000\\cdot 0{,}0066667}{1-0{,}202971}\\approx\\frac{6{,}6667}{0{,}797029}\\approx 8{,}3644\\text{ UF}.$$",
          "<b>Paso 5.</b> El monto total pagado es $240\\cdot 8{,}3644\\approx 2007{,}46$ UF. Los intereses pagados son $2007{,}46-1000=1007{,}46$ UF, más del $100\\%$ del préstamo."
        ],
        respuesta: "La cuota es aproximadamente $8{,}36$ UF y el total pagado, aproximadamente $2007{,}5$ UF (unos $1007{,}5$ UF de intereses).",
        grafico: { tipo: "sucesion", titulo: "El saldo insoluto baja lentamente al principio", terminos: [998.3023, 996.5932, 994.8728, 993.1409, 991.3974, 989.6423, 987.8755, 986.097, 984.3065, 982.5042], limite: 0, label: "pᵢ (UF), primeros 10 meses", ylabel: "pᵢ" }
      },
      {
        titulo: "¿Cuánto puedo pedir y cuánto pagaré?",
        enunciado: "<p>Una familia puede pagar una cuota de $9$ UF durante $25$ años, con una tasa anual de $3{,}17\\%$. ¿Cuánto puede pedir prestado? ¿Cuánto pagará en total? Compare con ahorrar esas mismas 9 UF mensuales durante 25 años.</p>",
        concepto: "Se usa la fórmula $p_0=\\frac{\\Delta}{r_m}(1-(1+r_m)^{-m})$ para el crédito y la fórmula del ahorro $S_m=\\Delta\\frac{(1+r_m)^m-1}{r_m}$ para la comparación.",
        desarrollo: [
          "<b>Paso 1.</b> Del ejemplo 1, $r_m\\approx 0{,}002604045$ y $m=12\\cdot 25=300$.",
          "<b>Paso 2.</b> Calculamos $(1+r_m)^{300}\\approx 2{,}181905$, luego $(1+r_m)^{-300}\\approx 0{,}458315$.",
          "<b>Paso 3.</b> Monto del crédito: $$p_0=\\frac{9}{0{,}002604045}(1-0{,}458315)\\approx 3456{,}16\\cdot 0{,}541685\\approx 1872{,}15\\text{ UF}.$$",
          "<b>Paso 4.</b> Total pagado en cuotas: $9\\cdot 300=2700$ UF. Intereses: $2700-1872{,}15\\approx 827{,}85$ UF.",
          "<b>Paso 5.</b> Si en cambio deposita 9 UF mensuales durante 300 meses, el ahorro acumulado es $$S_{300}=9\\cdot\\frac{(1{,}002604045)^{300}-1}{0{,}002604045}\\approx 9\\cdot\\frac{1{,}181905}{0{,}002604045}\\approx 4084{,}85\\text{ UF}.$$"
        ],
        respuesta: "Puede pedir aproximadamente $1872$ UF (en la clase, redondeando $r_m$ a $0{,}26\\%$, se obtienen $1874$ UF). Pagará $2700$ UF en total. Si ahorrara las mismas 9 UF mensuales, acumularía aproximadamente $4085$ UF.",
        grafico: { tipo: "plot2d", titulo: "Crédito versus ahorro con 9 UF mensuales", funciones: [ { f: function (t) { return 9 * t; }, desde: 0, hasta: 300, label: "Aportes acumulados (sin interés)", color: "#e17055" }, { f: function (t) { return (9 / 0.002604045244918307) * (Math.pow(1.002604045244918307, t) - 1); }, desde: 0, hasta: 300, label: "Ahorro con interés", color: "#00b894" } ], xlabel: "meses", ylabel: "UF", rangeX: [0, 300], rangeY: [0, 4300] } }
    ],
    ejercicios: [
      {
        titulo: "Tasa mensual de un 5,4 % anual",
        dificultad: "basico",
        enunciado: "<p>Un crédito tiene una tasa anual efectiva de $5{,}4\\%$. Determine la tasa mensual $r_m$.</p>",
        concepto: "Conversión de tasa efectiva anual a mensual mediante raíz duodécima.",
        pista: "Resuelve $(1+r_m)^{12}=1{,}054$.",
        desarrollo: [
          "<b>Paso 1.</b> $r_a=5{,}4\\%=0{,}054$, así que $1+r_a=1{,}054$.",
          "<b>Paso 2.</b> $1+r_m=(1{,}054)^{1/12}\\approx 1{,}0043923$.",
          "<b>Paso 3.</b> Por lo tanto, $r_m\\approx 0{,}0043923=0{,}4392\\%$ mensual."
        ],
        respuesta: "$r_m\\approx 0{,}4392\\%$ mensual."
      },
      {
        titulo: "Un mes de intereses",
        dificultad: "basico",
        enunciado: "<p>Un crédito tiene un saldo inicial de $500$ UF, tasa mensual $0{,}5\\%$ y cuota mensual de $3$ UF. Calcule el saldo después de la primera y de la segunda cuota.</p>",
        concepto: "Aplicación directa de la recurrencia $p_{i+1}=(1+r_m)p_i-\\Delta$.",
        pista: "Calcula primero el interés del mes y luego resta la cuota.",
        desarrollo: [
          "<b>Paso 1.</b> $r_m=0{,}5\\%=0{,}005$ y $1+r_m=1{,}005$.",
          "<b>Paso 2.</b> $p_1=500\\cdot 1{,}005-3=502{,}5-3=499{,}5$ UF.",
          "<b>Paso 3.</b> $p_2=499{,}5\\cdot 1{,}005-3\\approx 501{,}9975-3=498{,}9975$ UF."
        ],
        respuesta: "$p_1=499{,}5$ UF y $p_2\\approx 499{,}00$ UF."
      },
      {
        titulo: "Cuota de 800 UF a 15 años",
        dificultad: "intermedio",
        enunciado: "<p>Calcule la cuota mensual de un crédito de $800$ UF a $15$ años con tasa mensual de $0{,}5\\%$. Determine también el total pagado y los intereses.</p>",
        concepto: "Fórmula de la cuota con $m=12N$.",
        pista: "Usa $m=180$ y $\\Delta=\\frac{800\\cdot 0{,}005}{1-(1{,}005)^{-180}}$.",
        desarrollo: [
          "<b>Paso 1.</b> $m=12\\cdot 15=180$ y $r_m=0{,}005$.",
          "<b>Paso 2.</b> $(1{,}005)^{-180}\\approx 0{,}407482$, así que $1-(1{,}005)^{-180}\\approx 0{,}592518$.",
          "<b>Paso 3.</b> $\\Delta=\\frac{800\\cdot 0{,}005}{0{,}592518}\\approx 6{,}7509$ UF.",
          "<b>Paso 4.</b> Total pagado: $180\\cdot 6{,}7509\\approx 1215{,}15$ UF. Intereses: $1215{,}15-800=415{,}15$ UF."
        ],
        respuesta: "$\\Delta\\approx 6{,}75$ UF; total $\\approx 1215{,}15$ UF; intereses $\\approx 415{,}15$ UF."
      },
      {
        titulo: "Crédito de 1200 UF a 20 años",
        dificultad: "intermedio",
        enunciado: "<p>Un crédito de $1200$ UF se paga en $20$ años con tasa mensual de $0{,}6\\%$. Calcule la cuota, el total pagado y el porcentaje de intereses respecto del capital.</p>",
        concepto: "Fórmula de la cuota y comparación entre capital e intereses.",
        pista: "Usa $m=240$ y calcula primero $(1{,}006)^{-240}$.",
        desarrollo: [
          "<b>Paso 1.</b> $m=240$ y $r_m=0{,}006$.",
          "<b>Paso 2.</b> $(1{,}006)^{-240}\\approx 0{,}237925$, luego $1-(1{,}006)^{-240}\\approx 0{,}762075$.",
          "<b>Paso 3.</b> $\\Delta=\\frac{1200\\cdot 0{,}006}{0{,}762075}\\approx 9{,}4482$ UF.",
          "<b>Paso 4.</b> Total pagado: $240\\cdot 9{,}4482\\approx 2267{,}57$ UF. Intereses: $2267{,}57-1200=1067{,}57$ UF.",
          "<b>Paso 5.</b> Porcentaje de intereses: $\\frac{1067{,}57}{1200}\\cdot 100\\approx 88{,}96\\%$."
        ],
        respuesta: "$\\Delta\\approx 9{,}45$ UF; total $\\approx 2267{,}57$ UF; intereses $\\approx 89\\%$ del capital."
      },
      {
        titulo: "El monto máximo con cuota de 10 UF",
        dificultad: "avanzado",
        enunciado: "<p>Con una cuota de $10$ UF y una tasa anual de $4{,}2\\%$, determine la tasa mensual y el monto máximo que se podría pedir si el plazo creciera indefinidamente. Compare con un plazo de $30$ años.</p>",
        concepto: "Límite de la fórmula del crédito cuando $N\\to\\infty$ y comparación con un plazo finito.",
        pista: "El máximo es $\\Delta/r_m$. Para 30 años usa $m=360$.",
        desarrollo: [
          "<b>Paso 1.</b> $r_m=(1{,}042)^{1/12}-1\\approx 0{,}00343438=0{,}3434\\%$.",
          "<b>Paso 2.</b> El monto máximo cuando $N\\to\\infty$ es $$\\frac{\\Delta}{r_m}=\\frac{10}{0{,}00343438}\\approx 2911{,}73\\text{ UF}.$$",
          "<b>Paso 3.</b> Para $30$ años, $m=360$: $$p_0=\\frac{10}{0{,}00343438}\\left(1-(1{,}00343438)^{-360}\\right)\\approx 2064{,}27\\text{ UF}.$$",
          "<b>Paso 4.</b> Aunque el plazo sea infinito, el monto no supera $2911{,}73$ UF: la cuota se destinaría casi por completo a pagar intereses."
        ],
        respuesta: "$r_m\\approx 0{,}3434\\%$; máximo $\\approx 2911{,}73$ UF; a 30 años, $\\approx 2064{,}27$ UF."
      }
    ],
    erroresComunes: [
      "Usar $3{,}17$ en vez de $0{,}0317$ en la fórmula. Los porcentajes deben convertirse a decimal antes de calcular.",
      "Dividir la tasa anual por 12. En este curso la tasa mensual se obtiene con $(1+r_m)^{12}=1+r_a$, no con $r_a/12$.",
      "Usar $N$ años en el exponente en vez de $m=12N$ meses. Un crédito de 20 años tiene 240 cuotas, no 20.",
      "Redondear la cuota hacia abajo y concluir que el crédito se paga. Si la cuota queda corta, el saldo final no llega a cero.",
      "Pensar que el total pagado es igual al capital prestado. El total incluye capital más intereses y suele ser bastante mayor."
    ],
    checklist: [
      "Sé identificar $p_0$, $p_i$, $r_m$, $\\Delta$, $N$ y $m=12N$ en un crédito.",
      "Puedo escribir y usar la recurrencia $p_{i+1}=(1+r_m)p_i-\\Delta$.",
      "Sé deducir la fórmula cerrada del saldo usando la suma geométrica.",
      "Sé calcular la cuota con $\\Delta=\\frac{p_0r_m}{1-(1+r_m)^{-m}}$.",
      "Sé convertir una tasa anual efectiva en tasa mensual.",
      "Puedo interpretar el límite $\\Delta/r_m$ como el monto máximo financiable."
    ],
    autoevaluacion: [
      { pregunta: "¿Cómo se obtiene la tasa mensual $r_m$ a partir de una tasa anual efectiva $r_a$?", opciones: [ "$r_m=r_a/12$", "$r_m=12r_a$", "$r_m=(1+r_a)^{12}-1$", "$r_m=(1+r_a)^{1/12}-1$" ], correcta: 3, explicacion: "La tasa anual efectiva se capitaliza mes a mes: $(1+r_m)^{12}=1+r_a$, de donde $r_m=(1+r_a)^{1/12}-1$." },
      { pregunta: "Si $p_0=1000$ UF, $r_m=1\\%$ y $\\Delta=20$ UF, el saldo después de la primera cuota es:", opciones: [ "$990$ UF", "$980$ UF", "$1000$ UF", "$1010$ UF" ], correcta: 0, explicacion: "$p_1=1000(1{,}01)-20=1010-20=990$ UF." },
      { pregunta: "Un crédito a 20 años se paga en:", opciones: [ "20 cuotas", "120 cuotas", "240 cuotas", "200 cuotas" ], correcta: 2, explicacion: "Como hay 12 meses por año, $m=12\\cdot 20=240$ cuotas." },
      { pregunta: "La fórmula correcta de la cuota mensual es:", opciones: [ "$\\Delta=\\frac{p_0}{r_m}(1-(1+r_m)^{-m})$", "$\\Delta=\\frac{p_0r_m}{1-(1+r_m)^{-m}}$", "$\\Delta=p_0(1+r_m)^m$", "$\\Delta=\\frac{p_0}{m}$" ], correcta: 1, explicacion: "Se despeja $\\Delta$ de $0=p_0(1+r_m)^m-\\Delta\\frac{(1+r_m)^m-1}{r_m}$." },
      { pregunta: "Si la cuota es $\\Delta$ y la tasa mensual es $r_m$, el monto máximo que se puede pedir cuando el plazo tiende a infinito es:", opciones: [ "$\\Delta\\cdot r_m$", "$\\frac{r_m}{\\Delta}$", "$\\frac{\\Delta}{r_m}$", "Infinito" ], correcta: 2, explicacion: "En $p_0=\\frac{\\Delta}{r_m}(1-(1+r_m)^{-m})$, el factor $(1+r_m)^{-m}\\to 0$, así que $p_0\\to\\Delta/r_m$." },
      { pregunta: "Un crédito de 1000 UF se paga con 240 cuotas de 8,36 UF. ¿Cuánto se paga en total?", opciones: [ "$1000$ UF", "$2006{,}4$ UF", "$836$ UF", "$2400$ UF" ], correcta: 1, explicacion: "El total es $240\\cdot 8{,}36=2006{,}4$ UF, es decir, más del doble del capital." }
    ],
    resumen: [
      "El saldo insoluto satisface $p_{i+1}=(1+r_m)p_i-\\Delta$; iterando y sumando una progresión geométrica se obtiene $p_i=p_0(1+r_m)^i-\\Delta\\frac{(1+r_m)^i-1}{r_m}$.",
      "Imponer $p_{12N}=0$ permite despejar la cuota $\\Delta=\\frac{p_0r_m}{1-(1+r_m)^{-12N}}$, donde $r_m=(1+r_a)^{1/12}-1$.",
      "Cuando el plazo crece, el monto máximo tiende a $\\Delta/r_m$; el mismo tipo de suma geométrica describe el ahorro programado."
    ],
    referencias: [
      { titulo: "Clase 23 — Ahorro y préstamos (PDF)", ruta: "recursos/clases/clase-23.pdf" },
      { titulo: "Precálculo de Stewart (PDF)", ruta: "recursos/libros/precalculo-stewart.pdf" },
      { titulo: "Resumen MAT1107 (PDF)", ruta: "recursos/resumenes/resumen-mat1107.pdf" }
    ]
  });
})();
