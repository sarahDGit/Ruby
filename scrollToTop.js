//  const btnScrollTop = document.querySelector(".btnScrollTop");

//  window.addEventListener(`scroll`, () => {
// 	 if (window.pageYOffset > 100) {
// 		btnScrollTop.classList.add(`active`);
// 	 }else {
// 		btnScrollTop.classList.remove(`active`);
// 	 }
// })

window.onscroll = function () {
	const height = document.getElementById('origine').offsetHeight
	if (window.pageYOffset > height) {
	  document.getElementById('scrollTop').classList.add('visible');
	} else {
	  document.getElementById('scrollTop').classList.remove('visible');
	}
  }