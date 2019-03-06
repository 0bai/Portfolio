//Forked From Conor(https://codepen.io/CKH4/)
document.getElementById('text-effect-wrapper').innerHTML =
	document.getElementById('text-effect-wrapper').innerHTML
		.replace(/(<.*?>)|(.)/g, function (m0, tag, ch) {
			return tag || ( '<span class="text-effect">' + ch + '</span>' );
		});