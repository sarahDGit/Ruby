window.onscroll = function () {
	const height = document.getElementById('footer').offsetHeight
	if (window.pageYOffset > height) {
	  document.getElementById('scrollTop').classList.add('visible');
	} else {
	  document.getElementById('scrollTop').classList.remove('visible');
	}
  }