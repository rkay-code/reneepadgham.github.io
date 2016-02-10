$(document).ready(function(){

  $('.projects').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    adaptiveHeight: true,
    touchMove: true,
    arrows: false,
    swipeToSlide: true
  });

  $('.scroll').click(function () {
        $('html, body').animate({
            scrollTop: $('.work').offset().top
        }, 'slow');
    });

});
