
$('.causes__slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: '<button class="causes__slider-arrow causes__slider-arrow--prev"><</button>',
	nextArrow: '<button class="causes__slider-arrow causes__slider-arrow--next">></button>'
});

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
 dots: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button class="publications__arrow publications__arrow--prev"><</button>',
  nextArrow: '<button class="publications__arrow publications__arrow--next">></button>',

  responsive: [
    {
      breakpoint: 1150,
      settings: {
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll:1
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjYXVzZXMvY2F1c2VzLmpzIiwibW9kYWwvbW9kYWwuanMiLCJuZXdzL25ld3MuanMiLCJwYWdlLWZvb3Rlci9wYWdlLWZvb3Rlci5qcyIsInBhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLmpzIiwicHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiIsIiQoJy5jYXVzZXNfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0cHJldkFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImNhdXNlc19fc2xpZGVyLWFycm93IGNhdXNlc19fc2xpZGVyLWFycm93LS1wcmV2XCI+PDwvYnV0dG9uPicsXHJcblx0bmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cImNhdXNlc19fc2xpZGVyLWFycm93IGNhdXNlc19fc2xpZGVyLWFycm93LS1uZXh0XCI+PjwvYnV0dG9uPidcclxufSk7XHJcbiIsIiQoJy5zaG93LW1vZGFsJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLm1vZGFsJykuZmFkZVRvZ2dsZSgpO1xyXG5cdCQoJ2JvZHksIGh0bWwnKS5hZGRDbGFzcygnc2Nyb2xsLWhpZGRlbicpO1xyXG59KTtcclxuXHJcbiQoJy5tb2RhbF9fY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKCcubW9kYWwnKS5mYWRlVG9nZ2xlKCk7XHJcblx0JCgnYm9keSwgaHRtbCcpLnJlbW92ZUNsYXNzKCdzY3JvbGwtaGlkZGVuJyk7XHJcbn0pOyIsIiQoJy5uZXdzX19zbGlkZXInKS5zbGljayh7XHJcblx0c2xpZGVzVG9TY3JvbGw6IDEsXHJcblx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdGNlbnRlck1vZGU6IHRydWUsXHJcblx0dmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuXHRwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ld3NfX3NsaWRlci1hcnJvdyBuZXdzX19zbGlkZXItYXJyb3ctLXByZXZcIj48c3Bhbj7Qv9GA0LXQtNGL0LTRg9GJ0LDRjzwvc3Bhbj48L2J1dHRvbj4nLFxyXG5cdG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmV3c19fc2xpZGVyLWFycm93IG5ld3NfX3NsaWRlci1hcnJvdy0tbmV4dFwiPjxzcGFuPtGB0LvQtdC00YPRjtGJ0LDRjzwvc3Bhbj48L2J1dHRvbj4nXHJcbn0pOyIsIiAkKCcucGFnZS1mb290ZXJfX3VwJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSw1MDApO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH0pOyIsIiQoJy5wYWdlLWhlYWRlcl9fdG9nZ2xlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0JCgnLnBhZ2UtaGVhZGVyX190b2dnbGUgc3ZnJykudG9nZ2xlKCk7XHJcblx0JCgnLnBhZ2UtaGVhZGVyX19uYXYtbGlzdCcpLnRvZ2dsZUNsYXNzKCdwYWdlLWhlYWRlcl9fbmF2LWxpc3QtLWFjdGl2ZScpO1xyXG5cdCQoJ2JvZHksIGh0bWwnKS50b2dnbGVDbGFzcygnc2Nyb2xsLWhpZGRlbicpO1xyXG59KTsiLCIkKCcucHVibGljYXRpb25zX19zbGlkZXInKS5zbGljayh7XHJcbiBpbmZpbml0ZTogZmFsc2UsXHJcbiBkb3RzOiBmYWxzZSxcclxuICBzcGVlZDogMzAwLFxyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBwcmV2QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwicHVibGljYXRpb25zX19hcnJvdyBwdWJsaWNhdGlvbnNfX2Fycm93LS1wcmV2XCI+PDwvYnV0dG9uPicsXHJcbiAgbmV4dEFycm93OiAnPGJ1dHRvbiBjbGFzcz1cInB1YmxpY2F0aW9uc19fYXJyb3cgcHVibGljYXRpb25zX19hcnJvdy0tbmV4dFwiPj48L2J1dHRvbj4nLFxyXG5cclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDExNTAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgZG90czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6MVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn0pOyJdfQ==
