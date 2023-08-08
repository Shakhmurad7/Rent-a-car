
AOS.init();

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,

    });    
  });  


//   -----Corusel----->

  const swiper = new Swiper('.sample-slider', {
    loop: true,
    // effect:'fade' ,                        //loop
    autoplay: {                         //autoplay
      delay: 2000,  
  }, 
  loop:true,      
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation(arrow)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})