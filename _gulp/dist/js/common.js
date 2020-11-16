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

  $('.j-blog-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: false,
    variableWidth: true,
    prevArrow: '.index-blog__btn-left',
    nextArrow: '.index-blog__btn-right'
  });

  formPrayer();
  formLetter();

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

function formLetter() {
  var form = $('.letter-order__add'),
      btnAddLetter = form.find('.letter-order__add-btn'),
      letter = $('.letter-order__add-block'),
      formWrapper = form.find('.letter-order__add-wrapper'),
      formArray = [0]
  ;

  $(document).on('click', '.letter-order__block-remove', function() {
    formArray.pop();
    $(this).parent().remove();
  });

  btnAddLetter.on('click', function(){
    var number = formArray.length - 1;
    formArray.push(number + 1);
    var block = `<div class="letter-order__add-block">
        <button class="letter-order__block-remove" type="button">Удалить</button>
        <div class="letter-order__block-title">Буква <span>${formArray.length}</span> для</div>
        <div class="letter-order__block-wrapper">
            <div class="div1">
                <div class="form-group">
                    <input class="form-control" type="text" name="letter-name-${formArray.length}" placeholder="Ваше имя">
                </div>
            </div>
            <div class="div2">
                <div class="form-group">
                    <input class="form-control" type="text" name="letter-lastname-${formArray.length}" placeholder="Имя матери">
                </div>
            </div>
        </div>
        <div class="form-group">
            <input class="form-control" type="text" name="letter-mother-${formArray.length}" placeholder="Фамилия">
        </div>
    </div>`
    formWrapper.append(block);
  });  
}
