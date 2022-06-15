var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  slidesPerGroup: 3,
  loop: true,
  centerSlide:'true',
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  fade:'true',
  grabCursor:'true',
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  breakpoints: { 
    0: {
      slidesPerView:1,
},

520: {
      slidesPerView:2,
},

950: {
      slidesPerView:3,
},
  }
   

});

$(document).ready(function(){ 
    $("#testimonial-slider").owlCarousel({ 
      items:3,
      navigation:false,
      pagination:true,
      // autoplay:true,
      loop:true,
      autoplay:true,
    // autoplayTimeout:1000,
    autoplayHoverPause:true
    })

 



});



var typed= new Typed( '.type',{ 
  strings:['Developer','Designer','Freelancer'],
   typeSpeed: 50,
   backSpeed: 50,
   loop: true,


});