/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 7: Impares

Objetivo:
---
Dado un determinado rango de números, cuántos números impares hay en este rango.

Ejemplo: 
---
De un rango de 1 a 100, hay 50 números impares.

*/

function impares(num1, num2) {
    
    let cont = 0;

    while (num1 < num2) {
        
        if (num1%2 !== 0) {
            cont++;
        }
        num1++;

    }

    return cont;

}


console.log("¿ Cuántos Números impares hay ? " + impares(1, 50));
