# MAT1107 · Introducción al Cálculo — Plataforma de estudio

Sitio web local construido a partir de las clases, apuntes, guías, ayudantías, pruebas y libros del curso MAT1107 (PUC).

## Cómo abrir

Abre `index.html` con doble clic. No necesita servidor ni instalación. Funciona en Chrome, Edge o Firefox.

## Contenido

- **Módulo 1.** Números reales, orden y desigualdades.
- **Módulo 2.** Funciones y gráficas.
- **Módulo 3.** Polinomios, racionales, exponenciales y logaritmos.
- **Módulo 4.** Sucesiones, sumatorias y binomio.
- **Módulo 5.** Límites, convergencia y aplicaciones.
- **Módulo 6.** Banco de evaluaciones (I1–I8 y exámenes).

Cada sección incluye:

1. objetivo y conexión con la clase anterior;
2. teoría detallada, con definiciones, teoremas, notas de los libros y explicaciones "en palabras simples";
3. ejemplos guiados paso a paso, indicando qué concepto de la clase se aplica;
4. errores comunes y checklist;
5. ejercicios con pista, desarrollo y respuesta oculta;
6. autoevaluación final de alternativas con explicación;
7. enlaces a las fuentes originales.

## Recursos

Los PDF originales están en `recursos/`:

- `recursos/clases/`
- `recursos/apuntes/`
- `recursos/guias/`
- `recursos/pruebas/`
- `recursos/ayudantias/`
- `recursos/libros/`
- `recursos/resumenes/`

## Validación

```bash
node _build/test_carga.js
```

El script revisa que todas las secciones tengan la estructura mínima, que las autoevaluaciones tengan una alternativa correcta válida y que todas las referencias a PDF existan.
