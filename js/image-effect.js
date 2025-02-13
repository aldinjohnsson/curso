AOS.init({
 duration: 1200
});

function exibirBotao() {
  console.log('Função exibirBotao foi chamada');
  const whatsappButton = document.getElementById('whatsappButton');
  if (whatsappButton) {
    whatsappButton.style.display = 'block';
    console.log('Botão WhatsApp exibido');
  } else {
    console.log('Botão WhatsApp não encontrado');
  }
}
  Z