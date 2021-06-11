$(document).ready(function(){
    $('.reviewsrow').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:300,
        easing:'linear',
        infinite:false,
        initialSlide:0,
        autoplay:false,
        autoplaySpeed:3000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
        draggable:true,
        swipe:true,
        touchThreshold:5,
        touchMove:true,
        waitForAnimate:true,
        centerMode:false,
        variableWidth:false,
        rows:1,
        slidesPerRow:1,
        vertical:false,
        verticalSwiping:false,
        fade:false,
        /* responsive:[
            {
                breakpoint: 768,
                settings {

                }
            }
        ] */
        appendDots:$('.reviewsrow-item__dots')
    });
});