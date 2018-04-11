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