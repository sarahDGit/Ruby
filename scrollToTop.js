window.onscroll = function () {
	// const height = document.getElementById('footer').offsetHeight
	if (window.pageYOffset > 800) {
	  document.getElementById('scrollTop').classList.add('visible');
	} else {
	  document.getElementById('scrollTop').classList.remove('visible');
	}
  }