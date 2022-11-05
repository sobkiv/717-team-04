(function () {
    const products = [
      {
        id: "1",
        title: "Floral Moss",
        imageUrl: "img/floral_moss.png",
        category: "evergreens",
        productUrl: "floral-moss.html",
        price: "&#36;33,00",
        buttonText: "Order now"
      },
      {
        id: "2",
        title: "Areca Palm",
        imageUrl: "img/areca_palm.png",
        category: "evergreens",
        productUrl : "areca-palm.html",
        price: "&#36;22,00",
        buttonText: "Order now"
      },
      {
        id: "3",
        title: "Monstera Obliqua",
        imageUrl: "img/monstera_obliqua.png",
        category: "evergreens",
        productUrl: "monstera-obliqua.html",
        price: "&#36;45,00",
        buttonText: "Order now"
      },
      {
        id: "4",
        title: "Sansevieria Trifasciata",
        imageUrl: "img/sansevieria_trifasciata.png",
        category: "evergreens",
        productUrl: "sansevieria-trifasciata.html",
        price: "&#36;36,00",
        buttonText: "Order now"
      },
      {
        id: "5",
        title: "Graptosedum Darley",
        imageUrl: "img/graptosedum_darley.png",
        category: "succulents",
        productUrl: "graptosedum-darley.html",
        price: "&#36;32,00",
        buttonText: "Order now"
      },
      {
        id: "6",
        title: "Haworthia Venosa",
        imageUrl: "img/haworthia_venosa.png",
        category: "succulents",
        productUrl: "haworthia-venosa.html",
        price: "&#36;48,00",
        buttonText: "Order now"
      },
      {
        id: "7",
        title: "Silver Torch",
        imageUrl: "img/silver_torch.png",
        category: "succulents",
        productUrl: "silver-torch.html",
        price: "&#36;32,00",
        buttonText: "Order now"
      },
      {
        id: "8",
        title: "Notocactus Roseoluteus",
        imageUrl: "img/notocactus_roseoluteus.png",
        category: "succulents",
        productUrl: "notocactus-roseoluteus.html",
        price: "&#36;33,00",
        buttonText: "Order now"
      },
    ];
    
    let currentCategory = "evergreens";
    function renderProducts(products) {
      const productsContainer = document.querySelector(".best-container");
      productsContainer.innerHTML = "";
      const filteredProducts = products.filter(
        (product) => product.category === currentCategory
      );
      for (const product of filteredProducts) {
        productsContainer.innerHTML += `
        <div class="best__item-tabs">
                    <div class="best__product">
                        <a href="${product.productUrl}">
                            <img src="${product.imageUrl}" alt="${product.title}" class="best__product-img">
                        </a>
                        <p class="best__product-text">
                            <a href="${product.productUrl}" class="bestse__text-link">${product.title}</a>
                        </p>
                        <p class="best__product-price">${product.price}</p>
                        <div class="best__product-btn">
                            <button type="button" class="best__product-btn-btn">${product.buttonText}</button>
                        </div>
                    </div>
            </div>`;
      }
    }
    
    renderProducts(products);
    document.querySelector(".evergreens-category").addEventListener("click", (ev) => {
      clearActiveCategories();
      ev.target.classList.add('active');
      currentCategory = 'evergreens';
      renderProducts(products);
    });
    document.querySelector(".succulents-category").addEventListener("click", (ev) => {
      clearActiveCategories();
      ev.target.classList.add('active');
      currentCategory = 'succulents';
      renderProducts(products);
    });
    function clearActiveCategories() {
      const categoryButtons = document.querySelectorAll('.best__item-btns-text');
      for (const button of categoryButtons) {
      
          button.classList.remove('active');
        
      }
  
    }
  
  })();