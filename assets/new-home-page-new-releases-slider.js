var swiper = new Swiper("#new-releases-slider", {
    loop: true,
    spaceBetween: 22,
    watchSlidesVisibility: true,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".new-releases-next",
        prevEl: ".new-releases-prev",
    },
    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
            initialSlide: 1,
        },

        // when window width is >= 991px
        991: {
            slidesPerView: 3,
            spaceBetween: 29,
            initialSlide: 1
        }
    }
});


