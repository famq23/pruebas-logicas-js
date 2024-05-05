/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 4: Invertir una palabra

Objetivo:
---
Algoritmo que permita que una palabra sea invertida sin utilizar los métodos predefinidos de Javascript (reverse), es decir
palabra que se pueda leer de izquierda a derecha.

Ejemplo: 
---
Francisco = ocsicnarF

Amor = romA

*/



function invertir(texto) {

    let invertido = "";
    
    for (let letra of texto){
        
        invertido = letra + invertido;
        
    }

    return invertido;
}

console.log("Palabra invertida: " + invertir('Francisco Alonso') );


