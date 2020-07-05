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
    var  carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        separationMultiplier: 0.7,
        opacityMultiplier: 1,
        responsive: [
            {
            breakpoint: 1025,
            settings: {
                flankingItems: 2,
            },
            },
            {
            breakpoint: 480,
            settings: {
                flankingItems: 1,
            },
            },
        ],
    });
    
    $('#prev').bind('click', function () {
        carousel.prev();
        return false
    });
    
    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });
});



jQuery(window).on('load resize', function () {
    if (jQuery(window).width() < 1024) {
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 1,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
            });
            $('#prev').bind('click', function () {
                carousel.prev();
                return false
            });
            $('#next').bind('click', function () {
                carousel.next();
                return false;
            });
        });
        
    }
    else if (jQuery(window).width() < 1024) {
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 3,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
            });
            $('#prev').bind('click', function () {
                carousel.prev();
                return false
            });
            $('#next').bind('click', function () {
                carousel.next();
                return false;
            });
        });
    }
    });


    //$('#prev').bind('click', function () {
      //  carousel.prev();
        //return false
    //});
   // 
    //$('#next').bind('click', function () {
      //  carousel.next();
        //return false;
    //});