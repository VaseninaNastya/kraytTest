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

var carousel = null;

console.log(document.documentElement.clientWidth);
$(document).ready(function (){
    console.log("большая карусель")
    carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
        separationMultiplier: 0.7,
        opacityMultiplier: 1,
        opacityMultiplier: 1,
        sizeMultiplier:0.9
    });
})

$(window).on('load resize', function(){
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth < 1024) {
        carousel.reload({
            flankingItems: 1,
            separationMultiplier: 0.7,
            opacityMultiplier: 1,
            opacityMultiplier: 1,
            sizeMultiplier:0.7
        })
    } else {
        carousel.reload({
            flankingItems: 3,
            separationMultiplier: 0.8,
            opacityMultiplier: 1,
            opacityMultiplier: 1,
            sizeMultiplier:0.9
        })
    }
    $('#prev').bind('click', function () {
        carousel.prev();
        return false
    
    });
    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });
    
})


/////////////////////
/*
jQuery(window).on('load resize', function () {
    
$(document).ready(function () {
    if (document.documentElement.clientWidth > 1024){
        var  carousel = null
        carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 3,
            separationMultiplier: 0.7,
            opacityMultiplier: 1,
            opacityMultiplier: 1,
            sizeMultiplier:0.9
        });
        console.log("большая карусель");
        
    }
    else{
        carousel = $("#carousel").waterwheelCarousel({
            flankingItems: 1,
            separationMultiplier: 0.7,
            opacityMultiplier: 1,
            opacityMultiplier: 1,
            sizeMultiplier:0.9
        });
        console.log("маленькая карусель");
}
    $('#prev').bind('click', function () {
        carousel.prev();
        console.log(carousel)
        return false

    });
    $('#next').bind('click', function () {
        carousel.next();
        return false;
    });
})
})
*/
/////////////////////

/*
jQuery(window).on('load resize', function () { 
    if (document.documentElement.clientWidth < 1024){
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 1,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
                sizeMultiplier: 0.9,
            });
        console.log("первый");
        });
    }
    else {
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 3,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
                opacityMultiplier: 1,
                sizeMultiplier:0.9
            });
            console.log("второй");
        });
    }
    });
/*

jQuery(window).on('load resize', function () {
    if (document.documentElement.clientWidth < 1024) {
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 1,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
            });
        });
        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });
        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });
        
    }
    else if (document.documentElement.clientWidth > 1024) {
        $(document).ready(function () {
            var  carousel = $("#carousel").waterwheelCarousel({
                flankingItems: 3,
                separationMultiplier: 0.7,
                opacityMultiplier: 1,
            });
        });
        $('#prev').bind('click', function () {
            carousel.prev();
            return false
        });
        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });
    }
    });
*/


    //$('#prev').bind('click', function () {
      //  carousel.prev();
        //return false
    //});
   // 
    //$('#next').bind('click', function () {
      //  carousel.next();
        //return false;
    //});


    
