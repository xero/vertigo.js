/** vertigo.js | https://github.com/xero/vertigo.js **/
(function() {
	var vertigo = 0;
	setInterval(function(){
		document.body.style.transform =
		document.body.style.webkitTransform =
		document.body.style.MozTransform =
		document.body.style.OTransform =
		document.body.style.msTransform =
			'rotate(' + vertigo + 'deg)';
		vertigo = (vertigo>=360) ? 0 : vertigo+10;
	},60);
})();