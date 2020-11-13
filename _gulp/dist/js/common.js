'use strict';

// Document ready
$(document).ready(function(){

  $('.j-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false
  });

  formPrayer();

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {

  };
});

$(window).on('load', function() { });
$(window).on('scroll', function() { });
$(window).on('resize', function() { });

function formPrayer() {
  var formWrapper = $('.order-prayer__row'),
      formBtn = $('.order-prayer__btn'),
      formArray = [0]
  ;

  formBtn.on('click', function(){
    var number = formArray.length - 1;
    formArray.push(number + 1);
    var block = `<div class="order-prayer__input">
        <div class="form-group">
            <input class="form-control --new" type="text" name="first-name-${formArray.length}" placeholder="Имя ${formArray.length}">
        </div>
        <div class="form-group">
            <input class="form-control --new" type="text" name="last-name-${formArray.length}" placeholder="Фамилия ${formArray.length}">
        </div>
    </div>`
    formWrapper.append(block);
  });  
}