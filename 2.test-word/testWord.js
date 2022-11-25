/*  
Pruebas Lógicas para entrevistas en JS

Prueba 2: Dada una palabra, buscarla dentro de una frase u oración, y devolver cuantas veces aparece dicha palabra
dentro de esta frase.

Implementar en una función con 2 parámetros, la frase u oración y la palabra a buscar.

Ej: 

Rápido ruedan los "carros" en un ferrocarril lleno de "carros".   ==> aparece 2 veces la palabra "carro"

*/

function palabraBuscar(frase, palabra){

    var frase1 = frase.toLowerCase();

    var encontrado = 0;
    
    if (frase1.includes(palabra)) {

        let palabras = frase1.split(' ');
        let mostrar = {};

        for (let palab of palabras) {
            
            if (mostrar[palab]) {
                mostrar[palab]++;
                
            } else {
                mostrar[palab] = 1;
            }
        }

        encontrado = mostrar[palabra];
        
        console.log(mostrar);

    } else {
        encontrado = 0;
    }

    return encontrado;
}

console.log(
    "Cuantas veces sale la palabra en esta oración: "
    +
    palabraBuscar('Rapido ruedan los carros en un ferrocarril lleno de carros', 'carros')
);