const lista = [2, 7, 11, 15, 20, 21, 8, 10];

somaPos(lista);

function somaPos(array) {

    for (let pos = 0; pos < array.length; pos += 2) {
        
        if (array[pos + 1]) {

            let valorA = array[pos];
            let valorB = array[pos + 1];
            let soma = valorA + valorB;

            console.log(`Soma da entrada: ${soma}`);
            console.log(`${soma} é a soma dos valores ${valorA} + ${valorB}`);
            console.log(`${valorA} + ${valorB} são os números encontrados no array de entrada nas posições ${pos} e ${pos + 1} respectivamente.`);
            console.log(`Tamanho total do array: ${array.length} posições - Conteúdo: ${array}`);
            console.log('');

        }

    }

}