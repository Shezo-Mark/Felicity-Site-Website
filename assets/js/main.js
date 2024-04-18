$(document).ready(function(){

});// End of document ready function
$(document).ready(function () {
    $("#owl_testimonials").owlCarousel({
        items: 1,
        loop: true,
        dots:true,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    });
});


$('.our_team').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots:false,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

$(".product-carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    // dot:true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    startPosition: 1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})