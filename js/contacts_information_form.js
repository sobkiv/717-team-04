const form = document.getElementById("submit__form");

async function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("form__status");
  const data = new FormData(event.target);
  function saveData() {
    const getData = Object.fromEntries(data.entries());
    console.log(getData);
    const dataToJason = JSON.stringify(getData);
    const saveToLocalStirage = localStorage.setItem('is saved', dataToJason);
    console.log('Data is saved');
  }
  saveData();

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
