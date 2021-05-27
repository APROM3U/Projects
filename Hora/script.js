function carregar() {
  let msg = document.getElementById("msg");
  let img = document.getElementById("imagem");
  let data = new Date();
  let hora = data.getHours();
  msg.innerHTML = `Agora são ${hora} horas!`;
  
  if (hora >= 0 && hora < 12) {
    // Bom dia
    img.src = "imagens/amanhecer.png";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora <= 18) {
    // Boa Tarde
    img.src = "imagens/tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    // Boa noite
    img.src = "imagens/noite.png";
    document.body.style.background = "#515154";
  }
  
}
