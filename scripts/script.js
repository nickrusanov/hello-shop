document.querySelector('.hamburger').onclick = function () {
	if (document.querySelector('.menu').style.display !== 'block') {
		document.querySelector('.menu').style.display = 'block';
		document.querySelector('.home-main').style.display = 'none';
	} else {
		document.querySelector('.menu').style.display = 'none';
		document.querySelector('.home-main').style.display = 'block';
	}
}

window.addEventListener("resize", function () {
	if (window.outerWidth >= 400) {
		document.querySelector('.menu').style.display = 'block';
		document.querySelector('.home-main').style.display = 'block';
	} else if (document.querySelector('.home-main').style.display === 'block') {
		document.querySelector('.menu').style.display = 'none';
	}
})