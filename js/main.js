$(document).ready(function(){
  $('.news-photo__slider').owlCarousel({
    loop:true,
    margin:0,
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
  owl = $('.news-photo__slider').owlCarousel();
  $(".btn-prev").click(function () {
    owl.trigger('prev.owl.carousel');
  });

  $(".btn-next").click(function () {
    owl.trigger('next.owl.carousel');
  })
});
