var options = {
	title: false,
	movable: false,
	zoomable: false,
	rotatable: false,
	scalable: false,
	fullscreen: false
};

$(function () {
	$('.portfolio1').viewer(options);
	$('.portfolio2').viewer(options);
	$('.portfolio3').viewer(options);
	$('.portfolio4').viewer(options);
});