# Pruebas Unitarias de Caja Blanca

Este proyecto contiene un módulo de calculadora simple y pruebas unitarias de caja blanca para verificar su funcionamiento interno.

## Estructura del Proyecto

- `calculadora.js`: Contiene las funciones básicas de la calculadora
- `calculadora.test.js`: Contiene las pruebas unitarias de caja blanca
- `package.json`: Configuración del proyecto y dependencias
- `informe_auditoria.md`: Documento sobre los resultados y aportes de las pruebas de caja blanca

## Funciones Implementadas

- `sumar(a, b)`: Suma dos números
- `restar(a, b)`: Resta dos números
- `multiplicar(a, b)`: Multiplica dos números
- `dividir(a, b)`: Divide dos números
- `factorial(n)`: Calcula el factorial de un número
- `esPrimo(n)`: Verifica si un número es primo

## Pruebas Implementadas

### Pruebas de Caja Blanca

Se han implementado 6 conjuntos de pruebas unitarias de caja blanca:

1. **Prueba de la función sumar**: Cobertura de decisiones
2. **Prueba de la función dividir**: Cobertura de decisiones y condiciones
3. **Prueba de la función factorial**: Cobertura de caminos y prueba de bucles
4. **Prueba de la función esPrimo**: Cobertura de decisiones múltiples
5. **Prueba de la función restar**: Cobertura de sentencias
6. **Prueba de la función multiplicar**: Cobertura de condiciones

## Cómo ejecutar las pruebas

1. Instalar las dependencias:
   ```
   npm install
   ```

2. Ejecutar todas las pruebas:
   ```
   npm test
   ```

3. Ejecutar solo las pruebas de caja blanca:
   ```
   npx jest calculadora.test.js
   ```


## Resultados y Aportes a un Proceso de Auditoría

### Aportes de las Pruebas de Caja Blanca

Las pruebas unitarias de caja blanca son fundamentales en un proceso de auditoría de software ya que:

1. **Verifican la estructura interna del código**: Permiten comprobar que todos los caminos de ejecución funcionan correctamente.
2. **Detectan errores lógicos**: Ayudan a identificar problemas en la lógica del código que podrían pasar desapercibidos.
3. **Garantizan la robustez**: Verifican que el código maneja correctamente casos límite y entradas inválidas.
4. **Documentan el comportamiento esperado**: Sirven como documentación ejecutable del comportamiento esperado del código.
5. **Facilitan el mantenimiento**: Permiten realizar cambios en el código con la seguridad de que no se romperá la funcionalidad existente.

En un proceso de auditoría, estas pruebas demuestran que el código:
- Valida correctamente las entradas
- Maneja adecuadamente los errores
- Implementa correctamente la lógica de negocio
- No tiene vulnerabilidades evidentes
