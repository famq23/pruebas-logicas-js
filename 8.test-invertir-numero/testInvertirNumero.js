/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 8: Invertir una número

Objetivo:
---
Invertir un número y comprobar que el número sea entero.

Ejemplo: 
---
56 = 65
91 = 19

*/


function invertirNum(num) {
    
    let invertido = parseInt(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
    );

    return invertido;

}

console.log("El número invertido es ", invertirNum(91));