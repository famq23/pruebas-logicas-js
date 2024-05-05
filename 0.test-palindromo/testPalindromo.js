/* Pruebas técnicas de código en JS para entrevistas.

Prueba # 0: Palindromo

Objetivo: 
---
Verificar si una palabra o una oración es un palindromo o no, que se pueda leer de derecha a izquierda y de izquierda a derecha.

Ejemplo: 
---
- Amor a Roma

- arroz a zorra

*/


function palindromo(frase) {
    
    let $fraseInicial = frase.toLowerCase();

    let $esPalindromo = $fraseInicial
                        .toLowerCase()
                        .split('')
                        .reverse()
                        .join('');

    if ($fraseInicial === $esPalindromo) {
        console.log('Es Palindromo: ' + $fraseInicial + ' = ' + $esPalindromo );
        return true
    } else {
        console.log('No es Palindromo: ' + $fraseInicial + ' <> ' + $esPalindromo );
        return false
    }

}

palindromo('amor a roma');

