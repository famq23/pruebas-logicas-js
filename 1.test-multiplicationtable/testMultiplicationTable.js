/*  
Pruebas Lógicas para entrevistas en JS

Prueba 1: Tabla de Multiplicar => 

Objetivo: Dado un número, generar la tabla de multiplicar del 1 al 10.

Ej: Número 5 para multiplicar

5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50

*/

/* Solución 1 = utilizando el for */

var numero = 5;

for (i = 1; i <= 10; i++){
    let multiplicar = numero * i;
    console.log(numero + ' * ' + i + ' = ' + multiplicar);
}


/* Solución 2 = utilizando una función */


function tablaMultiplicar(num) {
    
    let resultado = ` # Tabla del ${num} # \n`;

    for (i = 1; i <= 10; i++){
        let multiplicacion = num * i;

        resultado += ` ${num} * ${i} = ${multiplicacion} \n`;
    }
    
    return resultado

}

console.log( tablaMultiplicar(5) );