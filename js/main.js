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

window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDesc = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let location =document.querySelector('.location-timezone')
    let icons = document.querySelector('.icon img')
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = parseFloat(position.coords.longitude);

            lat = parseFloat(position.coords.latitude);

            // const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `https://api.weatherbit.io/v2.0/current?lon=${long}&lat=${lat}&key=9f2e3c777e964c35b5ffcbce5a4c36ea`;

            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                const { temp, city_name } = data.data[0];
                const { description, icon } = data.data[0].weather;
                temperatureDegree.innerHTML = temp;
                location.innerHTML = city_name;
                temperatureDesc.innerHTML = description;
                icons.src = `https://www.weatherbit.io/static/img/icons/${icon}.png`;
            })
        });
    }
});

