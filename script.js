var menu = document.querySelector('nav');
var option = document.querySelector('nav ul > li');
var btn = document.querySelector('.menu-btn > i');

//Responsive menu:
function menuShow() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.style.color = '#fff';
        document.documentElement.style.overflow = 'visible';
    }else{
        menu.classList.add('open');
        btn.style.color = '#c64dff';
        document.documentElement.style.overflow = 'hidden';
    }
    option.addEventListener('click', function() {
        menu.classList.remove('open');
        btn.style.color = '#fff';
        document.documentElement.style.overflow = 'visible';
    });
}

//Slider buttons:
const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

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

//Submit message:
function submited() {
    if (window.location.href.match(/\/([^\/]+)\/?$/)[1] == 'en-us.html#thanks') {
        window.alert('You email was submited. When I view it: I will reply. Thank You!');
        window.location.replace("https://OseiasYC.github.io/en-us.html");
    }
    if (window.location.href.match(/\/([^\/]+)\/?$/)[1] == '#thanks') {
        window.alert('Seu email foi enviado. Assim que eu vê-lo, eu o responderei. Obrigado!');
        window.location.replace("https://OseiasYC.github.io");
    }
}

//Animate on scroll:
AOS.init();

//Submit message:
submited();

