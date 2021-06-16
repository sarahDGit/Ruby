const buttonElement = document.getElementById("submitbutton");

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  Swal.fire("Nous vous contacterons bientôt, stay tuned!", "success");
});
