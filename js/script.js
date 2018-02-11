$(document).ready(function() {
  var mySwiper = new Swiper('#slider1', {
    speed: 600,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '#slider1 .swiper-button-next',
      prevEl: '#slider1 .swiper-button-prev'
    },
    effect: 'fade',
    pagination: {
      el: '#slider1 .swiper-pagination',
      clickable: true
    }
  });

  var mySwiper2 = new Swiper('#slider2', {
    speed: 600,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    navigation: {
      nextEl: '#slider2 .swiper-button-next',
      prevEl: '#slider2 .swiper-button-prev'
    }
  });

  var mySwiper3 = new Swiper('#slider3', {
    speed: 600,
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.slider3-wraper .swiper-button-next',
      prevEl: '.slider3-wraper .swiper-button-prev'
    }
  });

  $('.book').magnificPopup({
    type: 'inline',
    preloader: false
  });

  $('.btn-menu').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      close: function() {
        $('#menu').removeClass('mfp-hide');
      }
    }
  });
});