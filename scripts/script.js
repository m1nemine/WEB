const slider = document.querySelector('.slider');
let isTransitioning = false;

function nextSlide() {
  if (!isTransitioning) {
    isTransitioning = true;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(-100%)';
    setTimeout(() => {
      slider.appendChild(slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(10)';
      isTransitioning = false;
    }, 500);
  }
}

setInterval(nextSlide, 5000); // 3 saniyede bir geçiş yap
