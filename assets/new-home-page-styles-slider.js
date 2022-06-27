var swiperTwo = new Swiper("#styles-slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    watchSlidesVisibility: true,
    centeredSlides: true,
    initialSlide: 1, 
    loop: true,
    navigation: {
        nextEl: ".styles-slider-next",
        prevEl: ".styles-slider-prev",
    },
    breakpoints: {
        991: {
            spaceBetween: 5
        }
    }

});

