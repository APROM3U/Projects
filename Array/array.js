let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#lista');
let res = document.querySelector('div#res');
let valor = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valor)) {
       
        valor.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = '';

    } else {
        alert('Valor inválido ou já encontrado na lista!');
    }
    
    num.value = "";
    num.focus();

}

function finalizar() {

    if (valor.length == 0) {
        alert('Adicione valores...')
    } else {
        let total = valor.length;
        let maior = [0];
        let menor = 0;
        let soma = 0;
        let media = 0;

        for (let pos in valor) {

            soma += valor[pos];

            if (valor[pos] > maior)
                maior = valor[pos];
            if (valor[pos] < maior)
                menor = valor[pos];
        }

        media = soma / total;

        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos valores: ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores: ${media}.</p>`
    }

}