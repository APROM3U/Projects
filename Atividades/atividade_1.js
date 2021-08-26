const listaOriginal = [7, 5, 3, 9, 6, 4, 1];
const novaLista = [];

tarefa1();

function tarefa1() {
    // Percorrer lista
    for (let pos = 0; pos < listaOriginal.length; pos++) {
        switch (listaOriginal[pos]) {
            case 4:
                continue;
            case 9:
                novaLista.push(5);
                continue;
            default:
                novaLista.push(listaOriginal[pos]);
        }
    }

    // Efetua a soma dos valores da nova lista
    let soma = novaLista.reduce((soma, posicao) => soma + posicao, 0);

    // Print lista original, nova lista e a soma de seus valores
    console.log(`Lista original: ${listaOriginal}`);
    console.log(`Nova lista: ${novaLista}. A soma dos seus valores é: ${soma}`);
}