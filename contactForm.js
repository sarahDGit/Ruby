const buttonElement = document.getElementById("submitbutton");

buttonElement.addEventListener("click", function (event) {
  event.preventDefault();
  Swal.fire("Good job!", "We'll get in touch soon!", "success");
});
