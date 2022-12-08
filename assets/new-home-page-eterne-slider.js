var swiperFour = new Swiper("#eterne-girls-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    watchSlidesVisibility: true,
    centeredSlides: true,
    loop: false,
    navigation: {
        nextEl: ".eterne-slider-next",
        prevEl: ".eterne-slider-prev",
    },
    breakpoints: {
        991: {
            spaceBetween: 66
        }
    },
    on: {
        init: function () {
            if (this.slides.length <= 1) {
                this.allowSlidePrev = this.allowSlideNext = false;
                document.querySelector(".eterne-slider-prev").setAttribute('hidden', '');
                document.querySelector(".eterne-slider-next").setAttribute('hidden', '');
            }
        }
    }
});

