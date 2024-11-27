// Exemplo: Mensagem de boas-vindas ao abrir o site
window.onload = () => {
    console.log("Bem-vindo ao site da Raquel");
  };



  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const prevButton = carousel.querySelector('.left-arrow');
    const nextButton = carousel.querySelector('.right-arrow');
    const slideWidth = slides[0].getBoundingClientRect().width;
  
    let currentIndex = 0;
  
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });
  });