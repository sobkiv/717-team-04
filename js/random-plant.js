(function () {
  let plants = [
    "Cactus",
    "Palm",
    "Orchid",
    "Grass",
    "Tomato bush",
    "Ficus",
    "ඞ",
    "Aloe",
    "Moss",
    "Bamboo"
  ];
  const plantOutput = document.querySelector('.random-plant');
  const activationButton = document.querySelector('.plant-today__randomise-button')

  function chooseRandomPlant() {
     plantOutput.innerHTML = plants[Math.floor(Math.random() * plants.length)]
  }

  activationButton.addEventListener("click", chooseRandomPlant)
})();