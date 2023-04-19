

const HeroSliderConfigs = {

    parallax: true,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    // direction: "vertical",
    autoplay: {
        delay: 3000,
    },
    slideActiveClass: 'on',
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

};

var mainSlide = new Swiper('.mySwiper', HeroSliderConfigs)
