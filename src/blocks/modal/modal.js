$('.show-modal').click(function() {
	$('.modal').fadeToggle();
	$('body, html').addClass('scroll-hidden');
});

$('.modal__close').click(function() {
	$('.modal').fadeToggle();
	$('body, html').removeClass('scroll-hidden');
});