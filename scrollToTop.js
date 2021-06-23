 const btnScrollTop = document.querySelector(".btnScrollTop");

 window.addEventListener(`scroll`, () => {
	 if (window.pageYOffset > 100) {
		btnScrollTop.classList.add(`active`);
	 }else {
		btnScrollTop.classList.remove(`active`);
	 }
})