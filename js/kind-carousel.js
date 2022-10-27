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
      if (window.innerWidth > 768) {
         const secondSlideInd = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
         slideContainer.innerHTML += slides[secondSlideInd];
         if (window.innerWidth > 990) {
            const thirdSlideInd = secondSlideInd + 1 >= slides.length ? 0 : secondSlideInd + 1;
            const fourthSlideInd = thirdSlideInd + 1 >= slides.length ? 0 : thirdSlideInd + 1;
         slideContainer.innerHTML += slides[thirdSlideInd] +  slides[fourthSlideInd];
         }
      }
   }
   function nextSlide() {
      currentSlideIndx = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
      renderSlide();
   }
   function prevSlide() {
      currentSlideIndx = currentSlideIndx - 1 < 0 ? slides.length - 1 : currentSlideIndx - 1;
      renderSlide();
   }
   setInterval(nextSlide, 3000);
   renderSlide();
   const nextBtn = document.querySelector('.kind-carousel-next');
   nextBtn.addEventListener('click', nextSlide);

   const prevBtn = document.querySelector('.kind-carousel-prev');
   prevBtn.addEventListener('click', prevSlide);

   window.addEventListener('resize', renderSlide)
})();