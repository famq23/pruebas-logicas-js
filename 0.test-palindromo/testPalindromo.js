/*  
Pruebas Lógicas para entrevistas en JS

Prueba 0: Palindromo => Objetivo: Verificar si la palabra es un palindromo, que se lee de derecha a izquierda y de izquierda a derecha.

Ej: Amor a Roma - arroz a zorra

*/


function palindromo(frase) {
    
    $fraseInicial = frase.toLowerCase();

    $esPalindromo = $fraseInicial
                        .toLowerCase()
                        .split('').
                        reverse().
                        join('');

    if ($fraseInicial === $esPalindromo) {
        console.log('Es Palindromo: ' + $fraseInicial + ' = ' + $esPalindromo );
        return true
    } else {
        console.log('No es Palindromo: ' + $fraseInicial + ' <> ' + $esPalindromo );
        return false
    }

}

palindromo('amor a roma');

