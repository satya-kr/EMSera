$(document).ready(function () {
    $("#wrapper").scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-primary');
        } else {
            $('.navbar').removeClass('bg-primary');
        }
    });
});

var swiper = new Swiper(".market-place-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0 : {
            slidesPerView: 2,
        },
        520 : {
            slidesPerView: 3,
        },
        768 : {
            slidesPerView: 3,
        },
        1100 : {
            slidesPerView: 4,
        },
    }
});
var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 25,
    slidesPerGroup: 1,
    centerSlide : true,
    loop: true,
    loopFillGroupWithBlank: true,
    grabCursor:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        0 : {
            slidesPerView: 1,
        },
        520 : {
            slidesPerView: 1,
        },
        768 : {
            slidesPerView: 2,
        },
        1100 : {
            slidesPerView: 3,
        },
    }
});

