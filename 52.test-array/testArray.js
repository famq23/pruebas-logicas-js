/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 52: Retornar un número entero positivo desde un Array A de N enteros.


Objetivo:
---
That, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

Ejemplo:
---
Given A = [1, 3, 6, 4, 1, 2], the function should return 5.
Given A = [1, 2, 3], the function should return 4.

*/



function encontrarPositivoFaltante(A) {
  // Se usa un conjunto para verificar de manera eficiente si un número existe en el arreglo
  const numerosExistentes = new Set(A);
  
  // Se comienza a verificar desde 1
  for (let i = 1; i <= Math.max(...A) + 1; i++) {
    if (!numerosExistentes.has(i)) {
      return i;
    }
  }
  
  // Si no falta ningún entero positivo, se devuelve 1 (caso especial para un arreglo vacío)
  return 1;
}

// Ejemplos
console.log(encontrarPositivoFaltante([1, 3, 6, 4, 1, 2])); // Resultado: 5
console.log(encontrarPositivoFaltante([1, 2, 3]));          // Resultado: 4
console.log(encontrarPositivoFaltante([-1, -3]));           // Resultado: 1
