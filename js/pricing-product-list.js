// IFFI
(function () {
  const plant_boxes = [
    {
      id: "1",
      pricefrom: "$20",
      title: "Small plants",
      first_plant: "Money Plant",
      second_plant: "Bryophyllum",
      third_plant: "Philodendron",
    },
    {
      id: "2",
      pricefrom: "$30",
      title: "Succulents",
      first_plant: "Graptosedum",
      second_plant: "Elephant bush",
      third_plant: "Crassula ovata",
    },
    {
      id: "3",
      pricefrom: "$20",
      title: "Trees",
      first_plant: "Raphis Palm",
      second_plant: "Cedar pine",
      third_plant: "Thuja",
    },
    {
      id: "4",
      pricefrom: "$25",
      title: "Big plants",
      first_plant: "Dracaena",
      second_plant: "Dieffenbachia",
      third_plant: "Rubber Tree",
    },
    ];
  function renderProducts(products) {
    const productsContainer = document.querySelector('.pricing__box-common');
    productsContainer.innerHTML = '';
    for (const product of products) {
      productsContainer.innerHTML += `
        <div class="pricing__box" >
      <div class="pricing__box-pricefrom">
          <span>from</span> <span class="pricing__box-price">${product.pricefrom}</span>
      </div>
      <h3>${product.title}</h3>
      <div class="pricing__box-plants">
          <p>${product.first_plant}</p>
          <p>${product.second_plant}</p>
          <p>${product.third_plant}</p>
      </div>
      <a class="custom_order" href="#custom_order">CUSTOM ORDER</a>
  </div>`
    }
  };
  renderProducts(plant_boxes);
})();