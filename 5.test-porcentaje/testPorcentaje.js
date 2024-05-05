/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 6: Porcentaje

Objetivo:
---
Calcular el porcentaje de un número

Ejemplo: 
---
El porcentaje del 20% de 100 es 20


*/

function operacionPorcentaje(numero, porcentaje) {
    
    let operacion = (numero * (porcentaje/100));

    let resultadoFinal = `El ${porcentaje}% de ${numero} es: ${operacion}`;

    return resultadoFinal;

}

console.log(operacionPorcentaje(897, 12));

