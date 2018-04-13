$('.album__slider').slick({
  centerMode: true,
  slidesToShow: 3,
  variableWidth: true,
  speed: 500,
  prevArrow: '<button class="album__slider-arrow album__slider-arrow--prev"><</button>',
	nextArrow: '<button class="album__slider-arrow album__slider-arrow--next">></button>',
   responsive: [
    {
      breakpoint: 768,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        variableWidth: false
      }
    }
  ]
});