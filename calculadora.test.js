/**
 * Pruebas unitarias de caja blanca para el módulo calculadora
 * Estas pruebas están diseñadas para verificar el funcionamiento interno
 * de las funciones, cubriendo diferentes caminos de ejecución
 */

const { 
  sumar, 
  restar, 
  multiplicar, 
  dividir, 
  factorial, 
  esPrimo 
} = require('./calculadora');

/**
 * PRUEBA 1: Verificación de caminos en la función sumar
 * Tipo de prueba: Cobertura de decisiones
 * Objetivo: Verificar que la función valida correctamente los tipos de datos
 */
describe('Pruebas de caja blanca para la función sumar', () => {
  test('Debe sumar correctamente dos números', () => {
    // Camino 1: Parámetros válidos
    expect(sumar(5, 3)).toBe(8);
    expect(sumar(-1, 1)).toBe(0);
    expect(sumar(0, 0)).toBe(0);
  });

  test('Debe lanzar error si algún parámetro no es un número', () => {
    // Camino 2: Primer parámetro inválido
    expect(() => sumar('5', 3)).toThrow('Los parámetros deben ser números');
    
    // Camino 3: Segundo parámetro inválido
    expect(() => sumar(5, '3')).toThrow('Los parámetros deben ser números');
    
    // Camino 4: Ambos parámetros inválidos
    expect(() => sumar('5', '3')).toThrow('Los parámetros deben ser números');
  });
});

/**
 * PRUEBA 2: Verificación de caminos en la función dividir
 * Tipo de prueba: Cobertura de decisiones y condiciones
 * Objetivo: Verificar que la función maneja correctamente la división por cero
 */
describe('Pruebas de caja blanca para la función dividir', () => {
  test('Debe dividir correctamente dos números', () => {
    // Camino 1: División normal
    expect(dividir(10, 2)).toBe(5);
    expect(dividir(7, 2)).toBe(3.5);
  });

  test('Debe lanzar error al dividir por cero', () => {
    // Camino 2: División por cero
    expect(() => dividir(5, 0)).toThrow('No se puede dividir por cero');
  });

  test('Debe lanzar error si algún parámetro no es un número', () => {
    // Camino 3: Parámetros inválidos
    expect(() => dividir('10', 2)).toThrow('Los parámetros deben ser números');
    expect(() => dividir(10, '2')).toThrow('Los parámetros deben ser números');
  });
});

/**
 * PRUEBA 3: Verificación de caminos en la función factorial
 * Tipo de prueba: Cobertura de caminos y prueba de bucles
 * Objetivo: Verificar el cálculo recursivo del factorial
 */
describe('Pruebas de caja blanca para la función factorial', () => {
  test('Debe calcular correctamente el factorial de 0 y 1', () => {
    // Camino 1: Casos base
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
  });

  test('Debe calcular correctamente el factorial de números positivos', () => {
    // Camino 2: Caso recursivo
    expect(factorial(3)).toBe(6); // 3! = 3*2*1 = 6
    expect(factorial(5)).toBe(120); // 5! = 5*4*3*2*1 = 120
  });

  test('Debe lanzar error para números negativos', () => {
    // Camino 3: Número negativo
    expect(() => factorial(-1)).toThrow('No se puede calcular el factorial de un número negativo');
  });

  test('Debe lanzar error si el parámetro no es un número', () => {
    // Camino 4: Parámetro inválido
    expect(() => factorial('5')).toThrow('El parámetro debe ser un número');
  });
});

/**
 * PRUEBA 4: Verificación de caminos en la función esPrimo
 * Tipo de prueba: Cobertura de decisiones múltiples
 * Objetivo: Verificar todos los caminos de decisión para determinar si un número es primo
 */
describe('Pruebas de caja blanca para la función esPrimo', () => {
  test('Debe identificar correctamente números no primos menores o iguales a 1', () => {
    // Camino 1: Números <= 1
    expect(esPrimo(0)).toBe(false);
    expect(esPrimo(1)).toBe(false);
    expect(esPrimo(-5)).toBe(false);
  });

  test('Debe identificar correctamente números primos pequeños', () => {
    // Camino 2: Números primos <= 3
    expect(esPrimo(2)).toBe(true);
    expect(esPrimo(3)).toBe(true);
  });

  test('Debe identificar correctamente números divisibles por 2 o 3', () => {
    // Camino 3: Números divisibles por 2 o 3
    expect(esPrimo(4)).toBe(false); // Divisible por 2
    expect(esPrimo(6)).toBe(false); // Divisible por 2 y 3
    expect(esPrimo(9)).toBe(false); // Divisible por 3
  });

  test('Debe identificar correctamente otros números primos y no primos', () => {
    // Camino 4: Otros números primos
    expect(esPrimo(5)).toBe(true);
    expect(esPrimo(7)).toBe(true);
    expect(esPrimo(11)).toBe(true);
    expect(esPrimo(13)).toBe(true);
    
    // Camino 5: Otros números no primos
    expect(esPrimo(25)).toBe(false); // 5*5
    expect(esPrimo(49)).toBe(false); // 7*7
  });

  test('Debe lanzar error si el parámetro no es un número', () => {
    // Camino 6: Parámetro inválido
    expect(() => esPrimo('11')).toThrow('El parámetro debe ser un número');
  });
});

/**
 * PRUEBA 5: Verificación de caminos en la función restar
 * Tipo de prueba: Cobertura de sentencias
 * Objetivo: Verificar que la función maneja correctamente diferentes tipos de números
 */
describe('Pruebas de caja blanca para la función restar', () => {
  test('Debe restar correctamente dos números positivos', () => {
    // Camino 1: Resta de positivos
    expect(restar(10, 5)).toBe(5);
  });

  test('Debe restar correctamente con números negativos', () => {
    // Camino 2: Resta con negativos
    expect(restar(5, -3)).toBe(8);
    expect(restar(-5, 3)).toBe(-8);
    expect(restar(-5, -3)).toBe(-2);
  });

  test('Debe lanzar error si algún parámetro no es un número', () => {
    // Camino 3: Parámetros inválidos
    expect(() => restar('5', 3)).toThrow('Los parámetros deben ser números');
    expect(() => restar(5, '3')).toThrow('Los parámetros deben ser números');
  });
});

/**
 * PRUEBA 6: Verificación de caminos en la función multiplicar
 * Tipo de prueba: Cobertura de condiciones
 * Objetivo: Verificar el comportamiento con diferentes tipos de números
 */
describe('Pruebas de caja blanca para la función multiplicar', () => {
  test('Debe multiplicar correctamente dos números positivos', () => {
    // Camino 1: Multiplicación de positivos
    expect(multiplicar(3, 4)).toBe(12);
  });

  test('Debe multiplicar correctamente con números negativos', () => {
    // Camino 2: Multiplicación con negativos
    expect(multiplicar(3, -4)).toBe(-12);
    expect(multiplicar(-3, 4)).toBe(-12);
    expect(multiplicar(-3, -4)).toBe(12);
  });

  test('Debe multiplicar correctamente con cero', () => {
    // Camino 3: Multiplicación con cero
    expect(multiplicar(0, 5)).toBe(0);
    expect(multiplicar(5, 0)).toBe(0);
    expect(multiplicar(0, 0)).toBe(0);
  });

  test('Debe lanzar error si algún parámetro no es un número', () => {
    // Camino 4: Parámetros inválidos
    expect(() => multiplicar('3', 4)).toThrow('Los parámetros deben ser números');
    expect(() => multiplicar(3, '4')).toThrow('Los parámetros deben ser números');
  });
});
