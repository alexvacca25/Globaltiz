$(document).ready(function(){
  const slickOptions = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">❮</button>',
    nextArrow: '<button type="button" class="slick-next">❯</button>',
  };

  const $carousel = $('.carousel').slick(slickOptions);

  $('.carousel').on('wheel', (function(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY < 0) {
      $(this).slick('slickPrev');
    } else {
      $(this).slick('slickNext');
    }
  }));

  let isPaused = false;

  $('.carousel').on('mouseenter', function() {
    isPaused = true;
    $carousel.slick('slickPause');
  });

  $('.carousel').on('mouseleave', function() {
    isPaused = false;
    $carousel.slick('slickPlay');
  });
});
