
//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.lj-slider-container');
var sliderList = document.querySelector('.lj-slider-list');
var sliderItem = document.querySelectorAll('.lj-portfolio-item');
const sliderTotalItems = sliderItem.length;
var sliderListWidth = null;
var containerWidth = sliderContainer.parentElement.offsetWidth; //Capturando larguras individuais
var prevItem = document.querySelector('.lj-item-prev');
var nextItem = document.querySelector('.lj-item-next');
var sliderPos = 0;
var currentSlide = document.querySelector('.lj-current-slide');
var totalSlide = document.querySelector('.lj-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.lj-item-navigator a');
var navCounter = document.querySelector('.lj-navigator-counter span');

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + "px";
for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}
sliderList.style.width = sliderListWidth + "px";

//Functions
var nextSlide = function () {
    var lastItem = sliderListWidth - containerWidth;

    if ((-1 * (sliderPos) === lastItem)) {
        return;
    }

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

var prevSlide = function () {
    if (sliderPos === 0) {
        return;
    }

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
        easing: 'cubicBezier(0,1.01,.32,1)'
    });
}

var counterFormatter = function (n) {
    if (n < 10) {
        return '0' + n;
    }
    else {
        return n;
    }
}

var counterAdd = function () {
    if ((currentCounter >= 0) && (currentCounter < sliderTotalItems)) {
        currentCounter++;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

var counterRemove = function () {
    if ((currentCounter > 1) && (currentCounter <= sliderTotalItems)) {
        currentCounter--;
        currentSlide.innerHTML = counterFormatter(currentCounter);
        navCounter.innerHTML = counterFormatter(currentCounter);
    }
}

var setActiveNav = function () {
    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = parseInt(navItems[nv].getAttribute('data-nav'));

        if (myNavNum === currentCounter) {
            navItems[nv].classList.add('lj-item-active');

            anime({
                targets: '.lj-item-active',
                width: 90
            });
        }
    }
}

var setActiveSlide = function () {
    for (var sld = 0; sld < sliderItem.length; sld++) {
        let mySlideNum = parseInt(sliderItem[sld].getAttribute('data-slide'));

        if (mySlideNum === currentCounter) {
            sliderItem[sld].classList.add('lj-slide-active');
            sliderItem[sld].querySelector('.lj-portfolio-item-box').classList.add('lj-scale-right');
            sliderItem[sld].querySelector('.lj-portfolio-item-thumb img').classList.add('lj-scale-up');
            sliderItem[sld].querySelector('.lj-portfolio-item-info h1').classList.add('lj-fade-from-left-fast');
            sliderItem[sld].querySelector('.lj-portfolio-item-info p').classList.add('lj-fade-from-left-medium');
            sliderItem[sld].querySelector('.lj-portfolio-item-info button').classList.add('lj-fade-from-left-slow');

        }
    }
}

var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        anime({
            targets: '.lj-item-active',
            width: 20
        });

        navItems[rm].classList.remove('lj-item-active');
    }
    for (var rms = 0; rms < sliderItem.length; rms++) {
        sliderItem[rms].classList.remove('lj-slide-active');
        sliderItem[rms].querySelector('.lj-portfolio-item-box').classList.remove('lj-scale-right');
        sliderItem[rms].querySelector('.lj-portfolio-item-thumb img').classList.remove('lj-scale-up');
        sliderItem[rms].querySelector('.lj-portfolio-item-info h1').classList.remove('lj-fade-from-left-fast');
        sliderItem[rms].querySelector('.lj-portfolio-item-info p').classList.remove('lj-fade-from-left-medium');
        sliderItem[rms].querySelector('.lj-portfolio-item-info button').classList.remove('lj-fade-from-left-slow');
    }
    setActiveNav();
    setActiveSlide();
}

//Events
totalSlide.innerHTML = counterFormatter(sliderTotalItems);//Adiciona a nova contagem de páginas totais

//Fazendo animações slider onclick
nextItem.addEventListener('click', function () {
    nextSlide();
    counterAdd();
    changeActive();
});
prevItem.addEventListener('click', function () {
    prevSlide();
    counterRemove();
    changeActive();
});