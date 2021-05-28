function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  let fano = document.getElementById("txtAno");
  let resu = document.getElementById("resultado");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert("Verifique os dados e tente novamente!");
  } else {
    let sex = document.getElementsByName("radsex");
    let idade = ano - Number(fano.value);
    let genero = "";

    if (sex[0].checked) {
      genero = "Homem";
    } else {
      genero = "Mulher";
    }

    resu.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
  }
}
