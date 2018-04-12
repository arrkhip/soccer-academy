// var windowWidth = $(window).width();
// if(windowWidth > 768)$(".causes__list").removeClass("causes__slider");
// else $(".causes__list").addClass("causes__slider");

// $(window).resize(function(){
// 	var windowWidth = $(window).width();
// 	if(windowWidth > 768)$(".causes__list").removeClass("causes__slider");
// 	else $(".causes__list").addClass("causes__slider");
// });

$('.causes__slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1
});

// $(window).resize(function(){
// 	var windowWidth = $(window).width();
// 	if(windowWidth > 768)$("#nav-reg-login").addClass("nav-justified");
// 	else $("#nav-reg-login").removeClass("nav-justified");
// });
