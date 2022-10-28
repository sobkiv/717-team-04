(function() {
    const slides = [
       '<div class="about-us__carousel__item"><img src="img/consultations.svg" alt=" " class="about-us__carousel__svg"></div>',
       '<div class="about-us__carousel__item"><img src="img/flowerpots.svg" alt=" " class="about-us__carousel__svg"></div>',
       '<div class="about-us__carousel__item"><img src="img/for_home.svg" alt=" " class="about-us__carousel__svg"></div>',
       '<div class="about-us__carousel__item"><img src="img/garden.svg" alt=" " class="about-us__carousel__svg"></div>',
       '<div class="about-us__carousel__item"><img src="img/plant_food.svg" alt=" " class="about-us__carousel__svg"></div>',
       '<div class="about-us__carousel__item"><img src="img/soil_for_plants.svg" alt=" " class="about-us__carousel__svg"></div>'
    ];
    let currentSlideIndx = 0;
    function renderSlide() {
       const slideContainer = document.querySelector('.about-us__carousel-container');
       slideContainer.innerHTML = slides[currentSlideIndx];
       if (window.innerWidth > 768) {
          const secondSlideInd = currentSlideIndx + 1 >= slides.length ? 0 : currentSlideIndx + 1;
          slideContainer.innerHTML += slides[secondSlideInd];
          if (window.innerWidth > 992) {
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
    const nextBtn = document.querySelector('.about-us__carousel-next');
    nextBtn.addEventListener('click', nextSlide);
 
    const prevBtn = document.querySelector('.about-us__carousel-prev');
    prevBtn.addEventListener('click', prevSlide);
 
    window.addEventListener('resize', renderSlide)
 })();