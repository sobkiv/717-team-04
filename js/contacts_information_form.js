(function () {
  const contactsForm = document.getElementById("submit__form");
  const submitButton = document.getElementById("submit__button");

  function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('form__status')
    fetch(event.target.action, {
      method: form.method,
      body: new FormData(event, target),
      headers: {
          Accept: 'application/json',
      },
    })
    .then(response => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      } else {
        response.json().then((data) => {
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
});

  
