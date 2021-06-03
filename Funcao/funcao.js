/* Função Par ou Ímpar */
function parimpar(n){
    if (n%2 == 0){
        return 'Par';
    } else {
        return 'Ímpar';
    };
};

let res = parimpar(2);
console.log(res);

/* Função Multiplicar */
let v = function(x) {
    return x * 2;
}

console.log(v(5));

/* Fatorial */
function fatorial(n){
    let fat = 1;

    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat;
}

console.log(fatorial(5));

/* Recursividade */
function recursividade(n){
    if(n == 1){
        return 1;
    } else {
        return n * recursividade(n-1);
    }
}

console.log(recursividade(5));

/*

Fatorial
5! = 5 x 4 x 3 x 2 x 1 = 120

Recursividade
5! = 5 x 4!
n! = n x (n-1)!
1! = 1

*/