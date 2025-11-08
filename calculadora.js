/**
 * Módulo de calculadora básica
 * Este módulo contiene funciones para realizar operaciones matemáticas básicas
 */

/**
 * Suma dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Resultado de la suma
 */
function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }
  return a + b;
}

/**
 * Resta dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Resultado de la resta
 */
function restar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }
  return a - b;
}

/**
 * Multiplica dos números
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} Resultado de la multiplicación
 */
function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }
  return a * b;
}

/**
 * Divide dos números
 * @param {number} a - Numerador
 * @param {number} b - Denominador
 * @returns {number} Resultado de la división
 */
function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los parámetros deben ser números');
  }
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
}

/**
 * Calcula el factorial de un número
 * @param {number} n - Número para calcular el factorial
 * @returns {number} Resultado del factorial
 */
function factorial(n) {
  if (typeof n !== 'number') {
    throw new Error('El parámetro debe ser un número');
  }
  if (n < 0) {
    throw new Error('No se puede calcular el factorial de un número negativo');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Verifica si un número es primo
 * @param {number} n - Número a verificar
 * @returns {boolean} true si es primo, false si no lo es
 */
function esPrimo(n) {
  if (typeof n !== 'number') {
    throw new Error('El parámetro debe ser un número');
  }
  if (n <= 1) {
    return false;
  }
  if (n <= 3) {
    return true;
  }
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  
  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  factorial,
  esPrimo
};
