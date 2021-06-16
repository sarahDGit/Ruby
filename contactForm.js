const buttonElement = document.getElementById("submitButton");

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  Swal.fire("Nous vous contacterons bientôt, stay tuned!");
});
