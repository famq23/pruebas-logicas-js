/*
Write a JavaScript function that prints the first 20 elements of the sequence 1, 3, 4, 13, 53, 690…
F(n) = F(1) * F(3) + 1 
*/


function sequence() {
    const one = 1;
    var n1 = 1;
    var n2 = 3;
    var n3 = 3;

    for (i = 1; i <= 20; i++){
        console.log(n3); 
        var operation = (n1 * n2); 
        n3 = n2; 
        var res = operation + one; 
        n1 = n3;
        n2 = res;
        n3 = n2;  
    }
    return ;
}
sequence();

