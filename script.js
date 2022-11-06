var menu = document.querySelector('nav');
var btn = document.querySelector(".menu-btn > i");
//Responsive Menu
function menuShow() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        btn.style.color = '#fff';
        document.documentElement.style.overflow = 'auto';
    }else{
        menu.classList.add('open');
        btn.style.color = '#c64dff';
        document.documentElement.style.overflow = 'hidden';
    }
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

function submited() {
    window.alert("Email enviado!");
}

//Animate on scroll:
AOS.init();