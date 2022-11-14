document.querySelector('.hamburger').onclick = function () {
	if (document.querySelector('.menu').style.display !== 'block') {
		document.querySelector('.menu').style.display = 'block';
		document.querySelector('.home-main').style.display = 'none';
	} else {
		document.querySelector('.menu').style.display = 'none';
		document.querySelector('.home-main').style.display = 'block';
	}
}

// screen.addEventListener("orientationchange", function () {
//   alert("The orientation of the screen is: " + screen.orientation);
// });

window.onload = function() {
	if ( window.orientation == 0 || window.orientation == 180 ) { 
			alert ('Please use your mobile device in landscape mode'); 
	}
};