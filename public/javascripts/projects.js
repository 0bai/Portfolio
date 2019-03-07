$(function () {
	var numSlides = 2;
	
	$('#left').click(function () {
		var slides = $('.project-slides');
		var active = slides.filter(function () {
			return $(this).css('display') !== 'none';
		});
		active.toggle();
		var i = Number(active.attr('id').split('-')[ 1 ]) - 1;
		i = i === 0 ? numSlides : i;
		$('#slide-' + i).fadeIn(1000);
	});
	
	$('#right').click(function () {
		var slides = $('.project-slides');
		var active = slides.filter(function () {
			return $(this).css('display') !== 'none';
		});
		active.toggle();
		var i = Number(active.attr('id').split('-')[ 1 ]) + 1;
		i = i === numSlides + 1 ? 1 : i;
		$('#slide-' + i).fadeIn(1000);
	});
});