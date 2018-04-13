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