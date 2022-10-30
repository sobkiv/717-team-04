(function () {
  const contactsForm = document.getElementById("submit__form");
  const submitButton = document.getElementById("submit__button");

  
  function handleSubmit(event) {
    event.preventDefault();

    fetch(event.target.action, {
      body: new FormData(event, target),
      headers: {
        Accept: "application/json",
      },
    });
  }
});
