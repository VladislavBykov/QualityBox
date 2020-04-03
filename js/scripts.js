$(document).ready(function () {

    let imageBlur = $('.image');
    $('.button').mouseenter(function(event){
        event.preventDefault();
        imageBlur.toggleClass('blur');
    });
    $('.button').mouseleave(function(event){
        event.preventDefault();
        imageBlur.toggleClass('blur');
    });

    $('.our-games').slick({
        responsive: [{

            breakpoint: 1380,
            settings: {
              slidesToShow: 2,
            }
      
          }, {
      
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              centerMode: true,
            }
      
          }, {
      
            breakpoint: 520,
            settings: {
                slidesToShow: 1,
            }
          }]
    });

});