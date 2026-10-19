# Instrucciones para redactar secciones de MAT1107

Eres redactor de contenido de una plataforma web local de **Introducción al Cálculo (MAT1107, PUC)**.
Cada sección es un archivo JavaScript que registra un objeto de contenido. Debe ser válido y pasar `node --check`.

## 1. Forma exacta del archivo

```js
/* Módulo X · Sección N — Título */
(function () {
  var M = window.MAT1107;
  M.register({
    id: "mXX_sYY", modulo: X, moduloNombre: "Módulo X · NOMBRE EXACTO", orden: N,
    materia: "MAT1107 · Introducción al Cálculo",
    titulo: "...",
    objetivo: "...",
    conexion: "...",                 // 1-2 frases: qué necesita recordar de la clase anterior
    fuente: "Clase NN · Apunte NN · Stewart §... · Mickenberg Cap. ...",
    prerrequisitos: ["...", "..."],
    teoria: [ ... ],
    ejemplos: [ ... ],
    ejercicios: [ ... ],
    erroresComunes: [ "...", "..." ],
    checklist: [ "...", "..." ],
    autoevaluacion: [ ... ],
    resumen: [ "...", "...", "..." ],
    referencias: [ { titulo: "...", ruta: "recursos/clases/clase-01.pdf" } ]
  });
})();
```

Reglas críticas:
- Usa `var`, funciones `function(){}` y comillas dobles. **No uses ES6+** (`let`, `const`, arrow functions, template strings).
- LaTeX dentro de strings JS: barra invertida **doble**. Ej: `$\\frac{a}{b}$`, `$$\\sqrt{x}$$`, `\\R`, `\\N`, `\\Z`, `\\in`, `\\le`, `\\ge`, `\\infty`.
- Delimitadores: `$...$` inline y `$$...$$` display. No uses `\\(` ni `\\)`.
- Todo en **español de Chile**, tono cercano y didáctico.
- No expliques con jerga sin traducirla: cada idea formal debe tener una frase en lenguaje simple.
- Verifica los números de todos los ejemplos y ejercicios. No inventes resultados.

## 2. Bloques de teoría permitidos

- `{ tipo:"texto", html:"<p>...</p>" }`
- `{ tipo:"definicion", titulo:"...", html:"..." }`
- `{ tipo:"teorema", titulo:"...", html:"..." }`
- `{ tipo:"nota", titulo:"... (Stewart §...)", html:"..." }`
- `{ tipo:"html", html:"<div class='callout'><b>En palabras simples:</b> ...</div>" }`
- `{ tipo:"grafico", spec:{...} }`
- `{ tipo:"tabla", titulo:"...", headers:[...], rows:[[...]] }`

Cada sección debe tener **al menos 6 bloques de teoría**, incluyendo:
1. una introducción en lenguaje simple;
2. al menos una definición;
3. al menos un teorema o propiedad;
4. al menos una nota que conecte con el libro o los apuntes;
5. al menos un bloque "En palabras simples";
6. al menos un gráfico o tabla pertinente (excepto en secciones muy algebraicas, donde puede reemplazarse por una tabla).

## 3. Ejemplos guiados

```js
{
  titulo: "Nombre del ejemplo",
  enunciado: "<p>...</p>",
  concepto: "Qué definición, teorema o procedimiento de la clase se usa y por qué.",
  desarrollo: [
    "<b>Paso 1.</b> ...",
    "<b>Paso 2.</b> ...",
    "<b>Paso 3.</b> ..."
  ],
  respuesta: "$...$",
  grafico: { ... }   // opcional
}
```

Cada sección debe tener **2 o 3 ejemplos guiados**, todos completos. En los pasos, cuando uses una idea de la clase, dilo explícitamente: "aquí aplicamos la propiedad distributiva", "aquí usamos que el valor absoluto es una distancia", etc.

## 4. Ejercicios con botón "Revelar"

```js
{
  titulo: "Nombre breve",
  dificultad: "basico" | "intermedio" | "avanzado",
  enunciado: "<p>...</p>",
  concepto: "Qué se aplica.",
  pista: "...",
  desarrollo: [ "<b>Paso 1.</b> ...", "<b>Paso 2.</b> ..." ],
  respuesta: "$...$",
  grafico: { ... }   // opcional
}
```

Cada sección debe tener **4 o 5 ejercicios**, con al menos un básico, uno intermedio y uno avanzado. Todos con desarrollo y respuesta.

## 5. Autoevaluación final (alternativas)

```js
{
  pregunta: "...",
  opciones: ["A", "B", "C", "D"],
  correcta: 0,
  explicacion: "..."
}
```

Cada sección debe tener **5 o 6 preguntas** al final, con 4 alternativas, una correcta y explicación. Varía la posición de la correcta.

## 6. Calidad mínima por sección

- `objetivo`: una oración con verbos de acción.
- `conexion`: qué se necesita recordar de la clase anterior.
- `prerrequisitos`: 2-4 conceptos.
- `teoria`: 6+ bloques.
- `ejemplos`: 2-3 completos.
- `ejercicios`: 4-5 completos.
- `erroresComunes`: 3-5.
- `checklist`: 4-6.
- `autoevaluacion`: 5-6.
- `resumen`: exactamente 3 ideas.
- `referencias`: 2-4 enlaces que existan realmente.
- Al menos un gráfico en la mayoría de las secciones.

## 7. Especificaciones de gráficos

- **plot2d**:
```js
{ tipo:"plot2d", titulo:"...", funciones:[{f:function(x){return x*x;},desde:-3,hasta:3,label:"...",color:"#1e5eff"}], series:[{x:[1,2,3],y:[1,4,9],label:"...",mode:"lines+markers"}], asintotas:[{tipo:"vertical",x:2},{tipo:"horizontal",y:1}], puntosAbiertos:[{x:2,y:4,label:"..."}], xlabel:"x", ylabel:"y", rangeX:[-5,5], rangeY:[-5,5] }
```
- **recta_numerica**:
```js
{ tipo:"recta_numerica", titulo:"...", rango:[-4,6], intervalos:[{a:-2,b:3,abiertoA:true,abiertoB:false,label:"(-2,3]",color:"#1e5eff"}], puntos:[{x:0,label:"0",abierto:false}] }
```
- **sucesion**:
```js
{ tipo:"sucesion", titulo:"...", terminos:[1,0.5,0.333,0.25,0.2], limite:0, label:"aₙ = 1/n", ylabel:"aₙ" }
```
- **tabla**: `{ tipo:"tabla", titulo:"...", headers:["x","f(x)"], rows:[["0","1"]] }`
- **transformacion2d**: `{ tipo:"transformacion2d", matriz:[[1,0],[0,1]], titulo:"..." }`

Colores: `#1e5eff`, `#00b894`, `#e17055`, `#8e44ad`, `#e6a817`.

## 8. Recursos disponibles

- Clases: `recursos/clases/clase-01.pdf` … `clase-23.pdf`, `clase-24a.pdf`, `clase-24b.pdf`, `clase-25.pdf`.
- Apuntes: `recursos/apuntes/apunte-clase-01.pdf` … `apunte-clase-29.pdf`.
- Guías: `recursos/guias/guia-01-orden.pdf`, `guia-02-valor-absoluto-raices.pdf`, `guia-03-inecuaciones.pdf`, `guia-04-funciones.pdf`, `guia-05-biyectividad.pdf`, `guia-06-cuadraticas.pdf`, `guia-07-composicion.pdf`, `guia-08-logaritmo-exponencial.pdf`, `guia-09-sucesiones-binomio.pdf`, `guia-10-sucesiones.pdf`.
- Libros: `recursos/libros/precalculo-stewart.pdf`, `recursos/libros/precalculo-mickenberg.pdf`.
- Pruebas: `recursos/pruebas/PRUEBAS/<año>/<archivo>.pdf` (usar rutas exactas que aparecen en `_build/texto/pruebas__*.txt` o listar la carpeta).
- Ayudantías: `recursos/ayudantias/Ayudantias/<año>/<archivo>.pdf`.
- Resumen: `recursos/resumenes/resumen-mat1107.pdf`.

Los textos extraídos de los PDF están en `docs/_build/texto/`:
- `clases__*.txt` (diapositivas, texto legible),
- `guias__*.txt`,
- `pruebas__*.txt`,
- `ayud*__*.txt` (algunas ayudantías son escaneadas y tendrás que leer el PDF).

Los apuntes son manuscritos escaneados: ábrelos con la herramienta de lectura de PDF/imágenes para revisar los ejemplos y el orden de las clases.

## 9. Mapa completo de secciones

### Módulo 1 · Números reales, orden y desigualdades
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m01/m01_s01.js | m01_s01 | 1 | Cuerpo de los números reales: axiomas y operaciones | Clase 1 · Apunte 1 · Mickenberg Cap. 2 |
| m01/m01_s02.js | m01_s02 | 2 | Orden en R: tricotomía y propiedades | Clases 2–3 · Apunte 2 |
| m01/m01_s03.js | m01_s03 | 3 | Valor absoluto, distancia e interpretación geométrica | Clase 4 · Apunte 4 |
| m01/m01_s04.js | m01_s04 | 4 | Inecuaciones: puntos críticos y tabla de signos | Clases 5–6 · Apunte 3 · Guía 3 |
| m01/m01_s05.js | m01_s05 | 5 | Inecuaciones racionales y con valor absoluto | Clases 6–7 · Guía 3 |
| m01/m01_s06.js | m01_s06 | 6 | Inecuaciones con raíces y aplicaciones | Clase 7 · Guía 3 · I3 |
| m01/m01_s07.js | m01_s07 | 7 | Raíces, promedios y completación de cuadrado | Apunte 5 · Guía 2 |
| m01/m01_s08.js | m01_s08 | 8 | Inducción matemática | Apuntes 6–7 · Mickenberg Cap. 5 · I1 |

### Módulo 2 · Funciones y gráficas
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m02/m02_s01.js | m02_s01 | 9 | Relaciones y funciones: dominio y recorrido | Clase 8 · Apuntes 8–9 |
| m02/m02_s02.js | m02_s02 | 10 | Gráficas, criterio de la recta vertical y funciones por tramos | Clase 9 · Apunte 10 |
| m02/m02_s03.js | m02_s03 | 11 | Transformaciones de funciones | Clase 10 · I4 |
| m02/m02_s04.js | m02_s04 | 12 | Función lineal y cuadrática | Apuntes 10–11 · Guía 6 |

### Módulo 3 · Polinomios, racionales, exponenciales y logaritmos
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m03/m03_s01.js | m03_s01 | 13 | Polinomios: grado, raíces y gráficas | Clase 11 · Apunte 12 |
| m03/m03_s02.js | m03_s02 | 14 | División de polinomios, teorema del resto y del factor | Clase 11 · I1 2025/2026 · Mickenberg Cap. 7 |
| m03/m03_s03.js | m03_s03 | 15 | Funciones racionales y asíntotas | Clase 12 · Apuntes 13–14 |
| m03/m03_s04.js | m03_s04 | 16 | Zoología funcionaria: catálogo de funciones | Clase 13 |
| m03/m03_s05.js | m03_s05 | 17 | Álgebra y composición de funciones | Clase 14 · Guía 7 |
| m03/m03_s06.js | m03_s06 | 18 | Biyectividad e inversa | Clase 15 · Apuntes 15–16/21 · Guía 5 · I5 |
| m03/m03_s07.js | m03_s07 | 19 | Función exponencial | Clase 16 · Apunte 17 |
| m03/m03_s08.js | m03_s08 | 20 | Función logaritmo y cambio de base | Clase 17 · Apunte 18 |
| m03/m03_s09.js | m03_s09 | 21 | Ecuaciones exponenciales y logarítmicas | Clase 17 · Guía 8 · I8 |

### Módulo 4 · Sucesiones, sumatorias y binomio
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m04/m04_s01.js | m04_s01 | 22 | Sucesiones: definición y recursión | Clase 18 · Apunte 19 |
| m04/m04_s02.js | m04_s02 | 23 | Progresiones aritméticas y geométricas | Apunte 19 · Guía 9 |
| m04/m04_s03.js | m04_s03 | 24 | Sumas finitas y telescópicas | Clase 19 · Apunte 20 · Guía 9 · I7 |
| m04/m04_s04.js | m04_s04 | 25 | Teorema del binomio | Clase 20 · Apuntes 22–23 · Guía 9 · I8 |

### Módulo 5 · Límites, convergencia y aplicaciones
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m05/m05_s01.js | m05_s01 | 26 | Límite de una sucesión: definición épsilon-N | Clase 21 · Apuntes 24–25 |
| m05/m05_s02.js | m05_s02 | 27 | Propiedades y operaciones con límites | Clase 22 · Apunte 26 |
| m05/m05_s03.js | m05_s03 | 28 | Aplicación: ahorro y crédito hipotecario | Clase 23 |
| m05/m05_s04.js | m05_s04 | 29 | Técnicas de cálculo de límites | Clase 24A · I6 |
| m05/m05_s05.js | m05_s05 | 30 | Sucesiones monótonas y acotadas | Clase 24B · Guía 10 · I7 |
| m05/m05_s06.js | m05_s06 | 31 | Límites infinitos | Clase 25 · Apunte 28 |
| m05/m05_s07.js | m05_s07 | 32 | Teorema del sándwich | Apunte 27 · Guía 10 |
| m05/m05_s08.js | m05_s08 | 33 | Subsucesiones y no existencia de límite | Apunte 29 · Examen |

### Módulo 6 · Banco de evaluaciones
| Archivo | id | orden | Título | Fuentes |
|---|---|---|---|---|
| m06/m06_s01.js | m06_s01 | 34 | I1: polinomios, orden e inducción | I1 2020–2026 |
| m06/m06_s02.js | m06_s02 | 35 | I2–I3: valor absoluto, inecuaciones y funciones | I2–I3 2020–2026 |
| m06/m06_s03.js | m06_s03 | 36 | I4: gráficas de polinomios y racionales | I4 2020–2026 |
| m06/m06_s04.js | m06_s04 | 37 | I5: biyectividad, inversa y exponenciales | I5 2020–2026 |
| m06/m06_s05.js | m06_s05 | 38 | I6–I7: sumatorias, inducción y telescópicas | I6–I7 2020–2026 |
| m06/m06_s06.js | m06_s06 | 39 | I8 + Examen: logaritmos, binomio e integradores | I8 · Exámenes |

## 10. Ejemplo de referencia

Lee `C:\Users\Alan Gornall\Desktop\MAT1203-completo\docs\content\m01\m01_s01.js` para ver el nivel de detalle, el formato y el estilo esperado. Adáptalo a MAT1107: más explicación verbal, más "paso a paso" y más conexión con la clase.

## 11. Verificación obligatoria

Antes de terminar cada archivo:
1. Ejecuta `node --check <archivo>`.
2. Revisa que `id`, `modulo`, `moduloNombre` y `orden` coincidan exactamente con la tabla.
3. Revisa que todas las `ruta` de `referencias` existan en `docs/`.
4. Revisa que `correcta` sea un índice entre 0 y 3.
5. Revisa que no haya `NaN`, divisiones por cero ni respuestas inconsistentes.
