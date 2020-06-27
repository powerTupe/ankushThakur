const header = document.querySelector("#mainHeader");
  
var headroom = new Headroom(header,{
  offset: 700
});
headroom.init();




$(document).ready(function(){
    
    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');
});

$('.about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots:true,
    responsive:{
        0:{
            items: 1
        },
        560: {
            items: 2
        }
    }
})



