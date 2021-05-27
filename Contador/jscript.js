function contar() {
  let ini = document.getElementById("txti");
  let fin = document.getElementById("txtf");
  let pas = document.getElementById("txtp");
  let res = document.getElementById("resultado");

  if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
    alert("Confira os dados");
  } else {
    res.innerHTML = "Contando: ";
    let inicial = Number(ini.value);
    let final = Number(fin.value);
    let passo = Number(pas.value);

    if (passo == 0) {
      alert("O passo deve ser superior a 0, considerar passo 1");
      passo = 1;
    }

    if (inicial < final) {
      // Contagem crescente
      for (let cont = inicial; cont <= final; cont += passo) {
        res.innerHTML += `${cont} \u{1F603} `;
      }
    } else {
      // Contagem descrescente
      for (let cont = inicial; cont >= final; cont -= passo) {
        res.innerHTML += `${cont} \u{1F603} `;
      }
    }
  }
}
