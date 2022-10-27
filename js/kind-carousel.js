(function() {

   const slides = [
      '<div class="kind-carousel__item"><img src="img/kind-carousel__item1.png" alt="kind-carousel home-garden" class="kind-carousel__img"></div>',
      '<div class="kind-carousel__item"><img src="img/kind-carousel__item2.png" alt="kind-carousel line" class="kind-carousel__img"></div>',
      '<div class="kind-carousel__item"><img src="img/kind-carousel__item3.png" alt="kind-carousel home" class="kind-carousel__img"></div>',
      '<div class="kind-carousel__item"><img src="img/kind-carousel__item4.png" alt="kind-carousel__planta" class="kind-carousel__img"></div>',
      '<div class="kind-carousel__item"><img src="img/kind-carousel__item5.png" alt="kind-carousel__green" class="kind-carousel__img"></div>'
   ];
   let currentSlideIndx = 0;
   function renderSlide() {
      const slideContainer = document.querySelector('.kind-carousel-container');
      slideContainer.innerHTML = slides[currentSlideIndx];
   }
   function nextSlide() {
      currentSlideIndx = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      renderSlide();
   }
   setInterval(nextSlide, 3000);
   renderSlide();
})();