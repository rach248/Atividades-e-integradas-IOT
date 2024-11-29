// Ação que ocorre quando a página é carregada
window.onload = () => {
  console.log("Bem-vindo ao site da Raquel"); // Exibe uma mensagem no console quando a página é carregada
};

// Adiciona um comportamento para cada carrossel na página
document.querySelectorAll('.carousel').forEach(carousel => {
  // Seleciona o contêiner da faixa de slides do carrossel
  const track = carousel.querySelector('.carousel-track');
  // Converte os slides dentro do carrossel em um array
  const slides = Array.from(track.children);
  // Seleciona os botões de navegação do carrossel
  const prevButton = carousel.querySelector('.left-arrow');
  const nextButton = carousel.querySelector('.right-arrow');
  // Obtém a largura de um slide
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0; // Índice do slide atual

  // Função para atualizar o carrossel, movendo a faixa de slides
  function updateCarousel() {
    // Aplica uma transformação para mover os slides horizontalmente
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Evento que ocorre quando o botão de navegação à esquerda é clicado
  prevButton.addEventListener('click', () => {
    // Verifica se o índice atual é maior que 0 antes de mover para o slide anterior
    if (currentIndex > 0) {
      currentIndex--; // Decrementa o índice
      updateCarousel(); // Atualiza a posição do carrossel
    }
  });

  // Evento que ocorre quando o botão de navegação à direita é clicado
  nextButton.addEventListener('click', () => {
    // Verifica se o índice atual é menor que o número total de slides antes de mover para o próximo slide
    if (currentIndex < slides.length - 1) {
      currentIndex++; // Incrementa o índice
      updateCarousel(); // Atualiza a posição do carrossel
    }
  });
});