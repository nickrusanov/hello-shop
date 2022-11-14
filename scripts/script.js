document.querySelector('.hamburger').onclick = function () {
	if (document.querySelector('.menu').style.display !== 'block') {
		document.querySelector('.menu').style.display = 'block';
		document.querySelector('.home-main').style.display = 'none';
		document.querySelector('.header').style.position = 'fixed';
	} else {
		document.querySelector('.menu').style.display = 'none';
		document.querySelector('.home-main').style.display = 'block';
		document.querySelector('.header').style.position = 'unset';
	}
}

screen.addEventListener("orientationchange", function () {
  alert("The orientation of the screen is: " + screen.orientation);
});