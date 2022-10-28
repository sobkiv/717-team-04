(async function () {
  
  const response = await fetch('api/plants-data.json')
  const plants = await response.json()

  const plantOutput = document.querySelector('.random-plant');
  const activationButton = document.querySelector('.plant-today__randomise-button')

  function chooseRandomPlant() {
     plantOutput.innerHTML = plants[Math.floor(Math.random() * plants.length)]
  }

  activationButton.addEventListener("click", chooseRandomPlant)
})();