// (function () {
const products = [
  {
    id: 1,
    title: "Floral Moss",
    imageUrl: "img/floral_moss.png",
    category: "evergreens",
    productUrl: "floral-moss.html",
    price: 33.00,
    buttonText: "Order now"
  },
  {
    id: 2,
    title: "Areca Palm",
    imageUrl: "img/areca_palm.png",
    category: "evergreens",
    productUrl: "areca-palm.html",
    price: 22.00,
    buttonText: "Order now"
  },
  {
    id: 3,
    title: "Monstera Obliqua",
    imageUrl: "img/monstera_obliqua.png",
    category: "evergreens",
    productUrl: "monstera-obliqua.html",
    price: 45.00,
    buttonText: "Order now"
  },
  {
    id: 4,
    title: "Sansevieria Trifasciata",
    imageUrl: "img/sansevieria_trifasciata.png",
    category: "evergreens",
    productUrl: "sansevieria-trifasciata.html",
    price: 36.00,
    buttonText: "Order now"
  },
  {
    id: 5,
    title: "Graptosedum Darley",
    imageUrl: "img/graptosedum_darley.png",
    category: "succulents",
    productUrl: "graptosedum-darley.html",
    price: 32.00,
    buttonText: "Order now"
  },
  {
    id: 6,
    title: "Haworthia Venosa",
    imageUrl: "img/haworthia_venosa.png",
    category: "succulents",
    productUrl: "haworthia-venosa.html",
    price: 48.00,
    buttonText: "Order now"
  },
  {
    id: 7,
    title: "Silver Torch",
    imageUrl: "img/silver_torch.png",
    category: "succulents",
    productUrl: "silver-torch.html",
    price: 32.00,
    buttonText: "Order now"
  },
  {
    id: 8,
    title: "Notocactus Roseoluteus",
    imageUrl: "img/notocactus_roseoluteus.png",
    category: "succulents",
    productUrl: "notocactus-roseoluteus.html",
    price: 33.00,
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
                        <p class="best__product-price">$${product.price}</p>
                        <div class="best__product-btn " onclick ="addToCart(${product.id})">
                            <button type="button" class="best__product-btn-btn">${product.buttonText}</button>
                        </div>
                    </div>
            </div>`;
  }
}

renderProducts(products);
//CArt 

let cart = [];
function addToCart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumber('plus', id);
  } else {
    const item = products.find((product) => product.id === id);
    cart.push({
      ...item,
      numberOfItems: 1,
    });
  }

  updateCart()
}
function updateCart() {
  renderCartItems();
  renderTotal();
}
let cartItems = document.querySelector(".products-items");
function renderCartItems() {
  cart.forEach((item) => {
     cartItems.innerHTML = "";
    cartItems.innerHTML += `
        <div class="cart-container">
                        <img class="cart-products-img" src="${item.imageUrl}" alt="">
                        <div class="cart-products-data">
                            <p class="cart-products-name">${item.title}</p>
                            <p class="cart-products-price">$${item.price}</p>
                        </div>
                        <div class="cart-product-units">
                            <div class="units-minus" onclick = "changeNumber('minus', ${item.id})">-</div>
                            <div class="units-number">${item.numberOfItems}</div>
                            <div class="units-plus" onclick = "changeNumber('plus', ${item.id})">+</div>
                        </div>
                        <div class = "trashcan" onclick = "removeItems(${item.id})"> <img class="trashcan-img" src="img/trash.svg" alt="">
                        </div>
                    </div>
        
        `;
  })
}
function changeNumber(action, id) {
  cart = cart.map((item) => {
    let numberOfItems = item.numberOfItems;
    if (item.id === id) {
      if (action === "minus" && numberOfItems >= 1) {
        numberOfItems -= 1;
      } else if (action === "plus") {
        numberOfItems++;
      }

    }
    return {
      ...item,
      numberOfItems,
    };
  })
  updateCart();
}
let quantity = document.querySelector(".quantity");
let total = document.querySelector('.total');
function renderTotal(item) {
  let totalPrice = 0;
  let totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfItems;
    totalItems += item.numberOfItems;
  })
  total.innerHTML = `<p class="total">Total:  $${totalPrice}</p>`;
  quantity.innerHTML = `<div class="quantity">${totalItems}</div>`

}
 function removeItems(id){
  cart = cart.filter((item)=>{item.id === id});
;
 }


//
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

  // })();