$(document).ready(function () {
  /* Слайдер */
    $(".multiple-items").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: document.querySelector('.arrow-next'),
    prevArrow: document.querySelector('.arrow-prev'),
    responsive: [
        {
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
        },
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    });
});

