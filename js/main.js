
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjYXVzZXMvY2F1c2VzLmpzIiwibmV3cy9uZXdzLmpzIiwicHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIvLyB2YXIgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuLy8gaWYod2luZG93V2lkdGggPiA3NjgpJChcIi5jYXVzZXNfX2xpc3RcIikucmVtb3ZlQ2xhc3MoXCJjYXVzZXNfX3NsaWRlclwiKTtcclxuLy8gZWxzZSAkKFwiLmNhdXNlc19fbGlzdFwiKS5hZGRDbGFzcyhcImNhdXNlc19fc2xpZGVyXCIpO1xyXG5cclxuLy8gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4vLyBcdHZhciB3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4vLyBcdGlmKHdpbmRvd1dpZHRoID4gNzY4KSQoXCIuY2F1c2VzX19saXN0XCIpLnJlbW92ZUNsYXNzKFwiY2F1c2VzX19zbGlkZXJcIik7XHJcbi8vIFx0ZWxzZSAkKFwiLmNhdXNlc19fbGlzdFwiKS5hZGRDbGFzcyhcImNhdXNlc19fc2xpZGVyXCIpO1xyXG4vLyB9KTtcclxuXHJcbiQoJy5jYXVzZXNfX3NsaWRlcicpLnNsaWNrKHtcclxuXHRpbmZpbml0ZTogdHJ1ZSxcclxuXHRzbGlkZXNUb1Nob3c6IDEsXHJcblx0c2xpZGVzVG9TY3JvbGw6IDFcclxufSk7XHJcblxyXG4vLyAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbi8vIFx0dmFyIHdpbmRvd1dpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbi8vIFx0aWYod2luZG93V2lkdGggPiA3NjgpJChcIiNuYXYtcmVnLWxvZ2luXCIpLmFkZENsYXNzKFwibmF2LWp1c3RpZmllZFwiKTtcclxuLy8gXHRlbHNlICQoXCIjbmF2LXJlZy1sb2dpblwiKS5yZW1vdmVDbGFzcyhcIm5hdi1qdXN0aWZpZWRcIik7XHJcbi8vIH0pO1xyXG4iLCIkKCcubmV3c19fc2xpZGVyJykuc2xpY2soe1xyXG5cdHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG5cdHNsaWRlc1RvU2hvdzogMSxcclxuXHRjZW50ZXJNb2RlOiB0cnVlLFxyXG5cdHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcblx0cHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuZXdzX19zbGlkZXItYXJyb3cgbmV3c19fc2xpZGVyLWFycm93LS1wcmV2XCI+PHNwYW4+0L/RgNC10LTRi9C00YPRidCw0Y88L3NwYW4+PC9idXR0b24+JyxcclxuXHRuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm5ld3NfX3NsaWRlci1hcnJvdyBuZXdzX19zbGlkZXItYXJyb3ctLW5leHRcIj48c3Bhbj7RgdC70LXQtNGD0Y7RidCw0Y88L3NwYW4+PC9idXR0b24+J1xyXG59KTsiLCIkKCcucHVibGljYXRpb25zX19zbGlkZXInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG5cclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDExNTAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIFx0aW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDYwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIF1cclxufSk7Il19
