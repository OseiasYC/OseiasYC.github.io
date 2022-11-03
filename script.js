//Responsivess navigation
function nav(){
    var nav = document.querySelector("nav");
    var checkBox = document.querySelector("#bars");

    if (checkBox.checked == true) {
        nav.style.visibility = "visible";
        document.documentElement.style.overflow = 'hidden';
    } else {
        nav.style.visibility = "hidden";
        document.documentElement.style.overflowY = 'auto';
    }
    nav.addEventListener('click', function() {
        nav.style.visibility = "hidden";
        checkBox.checked = false;
        document.documentElement.style.overflowY = 'auto';
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

//Animate on scroll:
AOS.init();