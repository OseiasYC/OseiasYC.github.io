var slides = document.querySelector(".slides");
var slideSize = slides.children.length;
var index = 0;

//Slider buttons:
function next() {
    index++;
    if (index >= slideSize) {
        slides.scrollLeft -= slides*slideSize;
        index = 0;
    }else{
        slides.scrollLeft += slides.clientWidth;
    }
    console.log(index);
}
function previous() {
    index--;
    if (index <= 0) {
        slides.scrollLeft += slides.clientWidth*slideSize;
        index = 0;
    }else{
        slides.scrollLeft -= slides.clientWidth;
    }
    console.log(index);
}

//Animate on scroll:
AOS.init();