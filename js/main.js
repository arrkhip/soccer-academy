
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjYXVzZXMvY2F1c2VzLmpzIiwibmV3cy9uZXdzLmpzIiwicGFnZS1mb290ZXIvcGFnZS1mb290ZXIuanMiLCJwYWdlLWhlYWRlci9wYWdlLWhlYWRlci5qcyIsInB1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIiwiLy8gdmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbi8vIGlmKHdpbmRvd1dpZHRoID4gNzY4KSQoXCIuY2F1c2VzX19saXN0XCIpLnJlbW92ZUNsYXNzKFwiY2F1c2VzX19zbGlkZXJcIik7XHJcbi8vIGVsc2UgJChcIi5jYXVzZXNfX2xpc3RcIikuYWRkQ2xhc3MoXCJjYXVzZXNfX3NsaWRlclwiKTtcclxuXHJcbi8vICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuLy8gXHR2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuLy8gXHRpZih3aW5kb3dXaWR0aCA+IDc2OCkkKFwiLmNhdXNlc19fbGlzdFwiKS5yZW1vdmVDbGFzcyhcImNhdXNlc19fc2xpZGVyXCIpO1xyXG4vLyBcdGVsc2UgJChcIi5jYXVzZXNfX2xpc3RcIikuYWRkQ2xhc3MoXCJjYXVzZXNfX3NsaWRlclwiKTtcclxuLy8gfSk7XHJcblxyXG4kKCcuY2F1c2VzX19zbGlkZXInKS5zbGljayh7XHJcblx0aW5maW5pdGU6IHRydWUsXHJcblx0c2xpZGVzVG9TaG93OiAxLFxyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxXHJcbn0pO1xyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4vLyBcdHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4vLyBcdGlmKHdpbmRvd1dpZHRoID4gNzY4KSQoXCIjbmF2LXJlZy1sb2dpblwiKS5hZGRDbGFzcyhcIm5hdi1qdXN0aWZpZWRcIik7XHJcbi8vIFx0ZWxzZSAkKFwiI25hdi1yZWctbG9naW5cIikucmVtb3ZlQ2xhc3MoXCJuYXYtanVzdGlmaWVkXCIpO1xyXG4vLyB9KTtcclxuIiwiJCgnLm5ld3NfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRzbGlkZXNUb1Njcm9sbDogMSxcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0Y2VudGVyTW9kZTogdHJ1ZSxcclxuXHR2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG5cdHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibmV3c19fc2xpZGVyLWFycm93IG5ld3NfX3NsaWRlci1hcnJvdy0tcHJldlwiPjxzcGFuPtC/0YDQtdC00YvQtNGD0YnQsNGPPC9zcGFuPjwvYnV0dG9uPicsXHJcblx0bmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXdzX19zbGlkZXItYXJyb3cgbmV3c19fc2xpZGVyLWFycm93LS1uZXh0XCI+PHNwYW4+0YHQu9C10LTRg9GO0YnQsNGPPC9zcGFuPjwvYnV0dG9uPidcclxufSk7IiwiICQoJy5wYWdlLWZvb3Rlcl9fdXAnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LDUwMCk7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSk7IiwiJCgnLnBhZ2UtaGVhZGVyX190b2dnbGUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuXHQkKCcucGFnZS1oZWFkZXJfX3RvZ2dsZSBzdmcnKS50b2dnbGUoKTtcclxuXHQkKCcucGFnZS1oZWFkZXJfX25hdi1saXN0JykudG9nZ2xlQ2xhc3MoJ3BhZ2UtaGVhZGVyX19uYXYtbGlzdC0tYWN0aXZlJyk7XHJcblxyXG59KTsiLCIkKCcucHVibGljYXRpb25zX19zbGlkZXInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG5cclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDExNTAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIFx0aW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIF1cclxufSk7Il19
