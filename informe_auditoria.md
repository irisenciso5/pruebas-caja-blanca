# Informe de Resultados de Pruebas Unitarias de Caja Blanca

## Resultados Hipotéticos

### Ejecución de Pruebas

Al ejecutar las pruebas unitarias de caja blanca en el módulo de calculadora, se obtuvieron los siguientes resultados hipotéticos:

```
PASS  ./calculadora.test.js
  Pruebas de caja blanca para la función sumar
    ✓ Debe sumar correctamente dos números (3 ms)
    ✓ Debe lanzar error si algún parámetro no es un número (5 ms)
  Pruebas de caja blanca para la función dividir
    ✓ Debe dividir correctamente dos números (1 ms)
    ✓ Debe lanzar error al dividir por cero (1 ms)
    ✓ Debe lanzar error si algún parámetro no es un número (1 ms)
  Pruebas de caja blanca para la función factorial
    ✓ Debe calcular correctamente el factorial de 0 y 1 (1 ms)
    ✓ Debe calcular correctamente el factorial de números positivos (1 ms)
    ✓ Debe lanzar error para números negativos
    ✓ Debe lanzar error si el parámetro no es un número (1 ms)
  Pruebas de caja blanca para la función esPrimo
    ✓ Debe identificar correctamente números no primos menores o iguales a 1 (1 ms)
    ✓ Debe identificar correctamente números primos pequeños
    ✓ Debe identificar correctamente números divisibles por 2 o 3 (1 ms)
    ✓ Debe identificar correctamente otros números primos y no primos (1 ms)
    ✓ Debe lanzar error si el parámetro no es un número
  Pruebas de caja blanca para la función restar
    ✓ Debe restar correctamente dos números positivos
    ✓ Debe restar correctamente con números negativos (1 ms)
    ✓ Debe lanzar error si algún parámetro no es un número
  Pruebas de caja blanca para la función multiplicar
    ✓ Debe multiplicar correctamente dos números positivos
    ✓ Debe multiplicar correctamente con números negativos
    ✓ Debe multiplicar correctamente con cero
    ✓ Debe lanzar error si algún parámetro no es un número

Test Suites: 1 passed, 1 total
Tests:       22 passed, 22 total
Snapshots:   0 total
Time:        1.5 s
```

### Métricas de Cobertura

Se alcanzó una cobertura de código del 100% en todas las funciones evaluadas:

| Archivo        | % Declaraciones | % Ramas | % Funciones | % Líneas |
|----------------|-----------------|---------|-------------|----------|
| calculadora.js | 100%            | 100%    | 100%        | 100%     |
| Total          | 100%            | 100%    | 100%        | 100%     |

## Aportes al Proceso de Auditoría

### 1. Verificación de Validación de Entradas

Las pruebas demostraron que todas las funciones validan correctamente los tipos de datos de entrada, rechazando valores no numéricos y lanzando excepciones apropiadas. Este aspecto es crítico para un proceso de auditoría ya que:

- **Previene inyecciones**: Al validar estrictamente los tipos de datos, se reduce el riesgo de inyección de código malicioso.
- **Garantiza integridad**: Asegura que los cálculos se realizan con datos válidos, evitando resultados incorrectos.
- **Documenta requisitos**: Establece claramente los requisitos de entrada para cada función.

### 2. Manejo de Casos Límite

Las pruebas verificaron el comportamiento del código en casos límite como:
- División por cero
- Factorial de números negativos
- Evaluación de números primos pequeños y casos especiales

Desde la perspectiva de auditoría, esto:
- **Previene fallos inesperados**: Asegura que el sistema no fallará en condiciones extremas.
- **Mejora la robustez**: Demuestra que el código está preparado para manejar situaciones excepcionales.
- **Reduce vulnerabilidades**: Evita que casos límite puedan ser explotados para comprometer el sistema.

### 3. Cobertura de Caminos de Ejecución

Las pruebas de caja blanca garantizaron que todos los caminos de ejecución posibles fueron probados, lo que para un auditor significa:

- **Ausencia de código muerto**: No hay código inalcanzable o sin probar.
- **Verificación completa**: Todas las decisiones y condiciones fueron evaluadas.
- **Confianza en el comportamiento**: Se puede confiar en que el código se comportará según lo esperado en cualquier situación.

### 4. Detección de Errores Lógicos

Al probar cada camino de ejecución, las pruebas podrían haber detectado errores lógicos como:

- Implementación incorrecta del algoritmo de números primos
- Errores en la recursión del factorial
- Problemas con operaciones con números negativos

Esto aporta al proceso de auditoría:
- **Garantía de corrección**: Verifica que los algoritmos están correctamente implementados.
- **Conformidad con requisitos**: Asegura que el código cumple con las especificaciones funcionales.
- **Calidad del código**: Demuestra un alto nivel de calidad en la implementación.

### 5. Documentación del Comportamiento Esperado

Las pruebas unitarias sirven como documentación ejecutable del comportamiento esperado del código, lo que para un auditor representa:

- **Especificación clara**: Define claramente cómo debe comportarse cada función.
- **Referencia para mantenimiento**: Proporciona una referencia para futuros desarrolladores.
- **Base para verificación**: Establece una base contra la cual verificar cambios futuros.

## Conclusión

Las pruebas unitarias de caja blanca implementadas proporcionan una sólida evidencia de la calidad, robustez y corrección del código evaluado. Desde la perspectiva de un proceso de auditoría, estas pruebas ofrecen garantías significativas sobre la fiabilidad del software y su capacidad para funcionar correctamente bajo diversas condiciones.

La implementación sistemática de este tipo de pruebas debería ser considerada una práctica estándar en cualquier desarrollo de software que requiera altos niveles de confiabilidad y seguridad.
