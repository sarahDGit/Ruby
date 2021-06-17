const formElement = document.getElementById("form-contact");

formElement.addEventListener("submit", function (event) {
  event.preventDefault();
  Swal.fire("Nous vous contacterons bientôt, stay tuned!");
});