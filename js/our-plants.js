(function () {
  const products = [
    {
      id: "1",
      title: "Small Ornamental Plants",
      imageUrl: "img/indoor-item1.png",
      description: "Such plants will fit on any windowsill, decorate your home or work table. Chlorophytum, money plants, aglaonema are not demanding in care but very beautiful.",
      category: "indoor",
    },
    {
      id: "2",
      title: "Indoor Trees",
      imageUrl: "img/indoor-item2.png",
      description: "It's a beautiful and original option for a large room. A small indoor tree will add some zest to the office or a large living room. Large dracaena, ficus, alocasiawill bea great option for your space.",
      category: "indoor",
    },
    {
      id: "3",
      title: "Plants in Florarium",
      imageUrl: "img/indoor-item3.png",
      description: "These are neatly planted compositions of succulents, grassroots, decorative ferns. Plants are selected so that they are in perfect harmony. Order your unique set of plants!",
      category: "indoor",
    },
    {
      id: "4",
      title: "Big Ornamental Plants",
      imageUrl: "img/indoor-item4.png",
      description: "Charming pachypodium, yucca, monstera will become a stunning decorationofyour room or office. These plants will make a great impression on your guests.",
      category: "indoor",
    },
    {
      id: "5",
      title: "Outdoor Flowers",
      imageUrl: "img/outdoor-item1.png",
      description: "Flowers form the basis of the exterior and are the first to catch  the eye.Charming anemones, freesia, lilies will provide brightness and a pleasant aroma. Choose your outdoor flower!.",
      category: "outdoor",
    },
    {
      id: "6",
      title: "Succulents",
      imageUrl: "img/outdoor-item2.png",
      description: "Succulents do not require constant care, perfectly take root in any yard, look nice, and stylish. We will help you to create the optimal composition of succulents in your  garden",
      category: "outdoor",
    },
    {
      id: "7",
      title: "Big Ornamental Plants",
      imageUrl: "img/outdoor-item3.png",
      description: "Charming pachypodium, yucca, monstera will become a stunning decorationofyour room or office. These plants will make a great impression on your guests.",
      category: "outdoor",
    },
    {
      id: "8",
      title: "Big Ornamental Plants",
      imageUrl: "img/outdoor-item4.png",
      description: "Charming pachypodium, yucca, monstera will become a stunning decorationofyour room or office. These plants will make a great impression on your guests.",
      category: "outdoor",
    },
  ];
  let currentCategory = "indoor";
  function renderProducts(products) {
    const productsContainer = document.querySelector(".our-plants__container");
    productsContainer.innerHTML = "";
    const filteredProducts = products.filter(
      (product) => product.category === currentCategory
    );
    for (const product of filteredProducts) {
      productsContainer.innerHTML += `
      <div class="our-plants__items">
      <div class="indoor__item">
          <div class="img__container">
              <img src="${product.imageUrl}" alt="${product.title}" class="indoor__img">
          </div>
          <h3 class="indoor__title">${product.title}</h3>
          <p class="indoor__text">${product.description}</p>
      </div>`;
    }
  }
  renderProducts(products);
  document.querySelector(".indoor-category").addEventListener("click", (ev) => {
    clearActiveCategories();
    ev.target.classList.add('active');
    currentCategory = 'indoor';
    renderProducts(products);
  });
  document.querySelector(".outdoor-category").addEventListener("click", (ev) => {
    clearActiveCategories();
    ev.target.classList.add('active');
    currentCategory = 'outdoor';
    renderProducts(products);
  });
  function clearActiveCategories() {
    const categoryButtons = document.querySelectorAll('.our-plants__btn');
    for (const button of categoryButtons) {
      button.classList.remove('active');
    }
  };
})();