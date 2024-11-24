// Exemplo: Mensagem de boas-vindas ao abrir o site
window.onload = () => {
    console.log("Bem-vindo ao site da Raquel");
  };
  
  let currentIndex = 0;
  const images = document.querySelectorAll('.carrossel img');
  const totalImages = images.length;
  
  // Função para exibir a imagem no índice especificado
  function showImage(index) {
      const carousel = document.querySelector('.carrossel');
      carousel.style.transform = `translateX(-${index * 100}%)`;
  }
  
  // Função para avançar para a próxima imagem
  function nextSlide() {
      currentIndex++;
      if (currentIndex >= totalImages) {
          currentIndex = 0;  // Volta para a primeira imagem
      }
      showImage(currentIndex);
  }
  
  // Inicia o carrossel automático
  setInterval(nextSlide, 3000); // Troca de imagem a cada 3 segundos
  
  // Inicializa a primeira imagem
  showImage(currentIndex);