function tabuada() {
  let num = document.getElementById("txtNumero");
  let tab = document.getElementById("seltab");

  tab.hidden = false;

  if (num.value.length == 0) {
    alert("Digite um número!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }

}
