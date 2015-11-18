$(function(){
    $('#banner').slick({
        dots: true,
        autoplay: true,
        responsive: [
        {
            breakpoint: 896,
            settings: {
                prevArrow: '<span></span>',
                nextArrow: '<span></span>'
            }
        }
        ]
    });
})

$(function(){
    $('#class').slick({
        dots: true,
        autoplay: true,
        nextArrow: '<span></span>',
        responsive: [
        {
            breakpoint: 896,
            settings: {
                prevArrow: '<span></span>'
            }
        }
        ]
    });
})

$(function(){
    $('#travel').slick({
        dots: true,
        autoplay: true,
        prevArrow: '<span></span>',
        responsive: [
        {
            breakpoint: 896,
            settings: {
                nextArrow: '<span></span>'
            }
        }
        ]
    });
})
