//Slider buttons:
const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'vertical',
    loop: true,

  // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

  // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    loop: true,

    autoplay: {
        delay: 5000,
    },

    direction: 'horizontal',

});

//Animate on scroll:
AOS.init();