
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

$('.show-modal').click(function() {
	$('.modal').fadeToggle();
	$('body, html').addClass('scroll-hidden');
});

$('.modal__close').click(function() {
	$('.modal').fadeToggle();
	$('body, html').removeClass('scroll-hidden');
});
$('.news__slider').slick({
	slidesToScroll: 1,
	slidesToShow: 1,
	centerMode: true,
	variableWidth: true,
	prevArrow: '<button type="button" class="news__slider-arrow news__slider-arrow--prev"><span>предыдущая</span></button>',
	nextArrow: '<button type="button" class="news__slider-arrow news__slider-arrow--next"><span>следующая</span></button>'
});
 $('.page-footer__up').click(function() {
    $('html, body').animate({scrollTop: 0},500);
    return false;
  });
$('.page-header__toggle').click(function() {
	$('.page-header__toggle svg').toggle();
	$('.page-header__nav-list').toggleClass('page-header__nav-list--active');
	$('body, html').toggleClass('scroll-hidden');
});
$('.publications__slider').slick({
  infinite: false,
  slidesToShow: 4,
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1150,
      settings: {
      	infinite: false,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjYXVzZXMvY2F1c2VzLmpzIiwibW9kYWwvbW9kYWwuanMiLCJuZXdzL25ld3MuanMiLCJwYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5qcyIsInBhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmpzIiwicHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIvLyB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuLy8gaWYod2luZG93V2lkdGggPiA3NjgpJChcIi5jYXVzZXNfX2xpc3RcIikucmVtb3ZlQ2xhc3MoXCJjYXVzZXNfX3NsaWRlclwiKTtcclxuLy8gZWxzZSAkKFwiLmNhdXNlc19fbGlzdFwiKS5hZGRDbGFzcyhcImNhdXNlc19fc2xpZGVyXCIpO1xyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4vLyBcdHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4vLyBcdGlmKHdpbmRvd1dpZHRoID4gNzY4KSQoXCIuY2F1c2VzX19saXN0XCIpLnJlbW92ZUNsYXNzKFwiY2F1c2VzX19zbGlkZXJcIik7XHJcbi8vIFx0ZWxzZSAkKFwiLmNhdXNlc19fbGlzdFwiKS5hZGRDbGFzcyhcImNhdXNlc19fc2xpZGVyXCIpO1xyXG4vLyB9KTtcclxuXHJcbiQoJy5jYXVzZXNfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDFcclxufSk7XHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbi8vIFx0dmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbi8vIFx0aWYod2luZG93V2lkdGggPiA3NjgpJChcIiNuYXYtcmVnLWxvZ2luXCIpLmFkZENsYXNzKFwibmF2LWp1c3RpZmllZFwiKTtcclxuLy8gXHRlbHNlICQoXCIjbmF2LXJlZy1sb2dpblwiKS5yZW1vdmVDbGFzcyhcIm5hdi1qdXN0aWZpZWRcIik7XHJcbi8vIH0pO1xyXG4iLCIkKCcuc2hvdy1tb2RhbCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5tb2RhbCcpLmZhZGVUb2dnbGUoKTtcclxuXHQkKCdib2R5LCBodG1sJykuYWRkQ2xhc3MoJ3Njcm9sbC1oaWRkZW4nKTtcclxufSk7XHJcblxyXG4kKCcubW9kYWxfX2Nsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLm1vZGFsJykuZmFkZVRvZ2dsZSgpO1xyXG5cdCQoJ2JvZHksIGh0bWwnKS5yZW1vdmVDbGFzcygnc2Nyb2xsLWhpZGRlbicpO1xyXG59KTsiLCIkKCcubmV3c19fc2xpZGVyJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRjZW50ZXJNb2RlOiB0cnVlLFxyXG5cdHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcblx0cHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXdzX19zbGlkZXItYXJyb3cgbmV3c19fc2xpZGVyLWFycm93LS1wcmV2XCI+PHNwYW4+0L/RgNC10LTRi9C00YPRidCw0Y88L3NwYW4+PC9idXR0b24+JyxcclxuXHRuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ld3NfX3NsaWRlci1hcnJvdyBuZXdzX19zbGlkZXItYXJyb3ctLW5leHRcIj48c3Bhbj7RgdC70LXQtNGD0Y7RidCw0Y88L3NwYW4+PC9idXR0b24+J1xyXG59KTsiLCIgJCgnLnBhZ2UtZm9vdGVyX191cCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe3Njcm9sbFRvcDogMH0sNTAwKTtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9KTsiLCIkKCcucGFnZS1oZWFkZXJfX3RvZ2dsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdCQoJy5wYWdlLWhlYWRlcl9fdG9nZ2xlIHN2ZycpLnRvZ2dsZSgpO1xyXG5cdCQoJy5wYWdlLWhlYWRlcl9fbmF2LWxpc3QnKS50b2dnbGVDbGFzcygncGFnZS1oZWFkZXJfX25hdi1saXN0LS1hY3RpdmUnKTtcclxuXHQkKCdib2R5LCBodG1sJykudG9nZ2xlQ2xhc3MoJ3Njcm9sbC1oaWRkZW4nKTtcclxufSk7IiwiJCgnLnB1YmxpY2F0aW9uc19fc2xpZGVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMTUwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICBcdGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA2MDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBdXHJcbn0pOyJdfQ==
