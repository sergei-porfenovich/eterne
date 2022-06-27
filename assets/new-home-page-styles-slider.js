var swiperTwo = new Swiper("#styles-slider", {
    slidesPerView: 'auto',
    spaceBetween: 150,
    watchSlidesVisibility: true,
    centeredSlides: true,
    simulateTouch : true,
    initialSlide: 1, 
    loop: true,
    loopFillGroupWithBlank: false,
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

