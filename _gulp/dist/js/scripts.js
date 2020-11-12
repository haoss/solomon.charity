$(document).ready(function() {

  $('.top-menu-block .menu-btn').on('click',function(){
    $('.header_navbar .top-menu-block .mobile-bg').addClass('open');
  });

   $('.header_navbar .top-menu-block .mobile-bg .close-menu').on('click',function(){
    $('.header_navbar .top-menu-block .mobile-bg').removeClass('open');
  });

   $('.header_navbar nav .dropdown > a').on('click',function(){
    $(this).parent().toggleClass('opened');

  });

   $('.header_navbar .top-menu-block .mobile-bg .button-block a.want-help').on('click',function(){
    $('.header_navbar .top-menu-block .mobile-bg .close-menu').click();
    event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });

   $('.we-help-statistic .statistic-block .statistic-element .statistic-btn:first-child').on('click',function(){
    $('.header_navbar .top-menu-block .mobile-bg .close-menu').click();
    event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });

   $('.header_navbar .top-menu-block .right-menu-block .want-help').on('click',function(){
    event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
  });

   jQuery(function($){
  $(document).mouseup(function (e){
    var div = $(".header_navbar .top-menu-block .mobile-bg .navbar-collapse");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
       $('.header_navbar .top-menu-block .mobile-bg').removeClass('open');
    }
  });
});

    $(document).on('click', 'input[name=enter_submit]', function()
    {
        form = $(this).closest('form');
        if ($(form).valid())
        $.ajax({
                   type: "POST",
                   url: "/ajax/auth.php",
                   dataType: "json",
                   data: $(this).closest('form').serialize(),
                   success: function(response){
                       //$("#subscribeForm").trigger("reset");
                       //$("#registerModal").modal("show");
                       if (response.status == 'ok')
                           location.href = location.href;
                       else
                       {
                           $(form).find('input[name=email]').addClass('error').attr('aria-invalid', 'true');
                           $(form).find('input[name=email]').closest('div').append('<label id="email-error" class="error" for="email">РќРµРІРµСЂРЅС‹Р№ Р»РѕРіРёРЅ РёР»Рё РїР°СЂРѕР»СЊ</label>');
                           $(form).find('input[name=password]').addClass('error').attr('aria-invalid', 'true');
                           $(form).find('input[name=password]').closest('div').append('<label id="password-error" class="error" for="password">РќРµРІРµСЂРЅС‹Р№ Р»РѕРіРёРЅ РёР»Рё РїР°СЂРѕР»СЊ</label>');
                           //$(form).find('.error_msg').html(response.msg);
                       }
                   }
               });
        return false;
    });
    $(document).on('click', 'input[name=enter_register]', function()
    {
        form = $(this).closest('form');
        if ($(form).valid() || $(form).find('[name=password]').val() != $(form).find('[name=repeat_password]').val())
        $.ajax({
                   type: "POST",
                   url: "/ajax/auth.php",
                   dataType: "json",
                   data: $(form).serialize(),
                   success: function(response){
                       //$("#subscribeForm").trigger("reset");
                       //$("#registerModal").modal("show");
                       if (response.status == 'ok')
                           location.href = '/personal/';
                       else
                       {
                           //$(form).find('.error_msg').html(response.msg);
                           if (response.pass == 1)
                           {
                               $(form).find('input[name=password]').addClass('error').attr('aria-invalid', 'true');
                               $(form).find('input[name=password]').closest('div').append('<label id="password-error" class="error" for="password">РџР°СЂРѕР»Рё РЅРµ СЃРѕРІРїР°РґР°СЋС‚</label>');
                               $(form).find('input[name=repeat_password]').addClass('error').attr('aria-invalid', 'true');
                               $(form).find('input[name=repeat_password]').closest('div').append('<label id="repeat_password-error" class="error" for="repeat_password">РџР°СЂРѕР»Рё РЅРµ СЃРѕРІРїР°РґР°СЋС‚</label>');
                           }
                           else
                           {
                               $(form).find('input[name=repeat_password]').addClass('error').attr('aria-invalid', 'true');
                               $(form).find('input[name=repeat_password]').closest('div').append('<label id="email-error" class="error" for="email">'+response.msg+'</label>');
                           }
                       }
                   }
               });
        return false;
    });
    $(document).on('click', 'input[name=forgot]', function()
    {
        form = $(this).closest('form');
        thisObj = $(this);
        if ($(form).valid())
        $.ajax({
                   type: "POST",
                   url: "/ajax/auth.php",
                   dataType: "json",
                   data: $(this).closest('form').serialize(),
                   success: function(response){
                       //$("#subscribeForm").trigger("reset");
                       //$("#registerModal").modal("show");
                       //$(form).find('.error_msg').html(response.msg);
                       $(form).find('input[name=email]').addClass('error').attr('aria-invalid', 'true');
                       $(form).find('input[name=email]').closest('div').append('<label id="email-error" class="error" for="email">'+response.msg+'</label>');
                       $(thisObj).remove();
                       $('.sendedemailaid').remove();
                   }
               });
        return false;
    });

    $(document).on('click', '.registration_form', function()
    {
        //  $("#registerModal").modal("show");
        $("#registerModal").modal("show");
        if ($(this).attr('data_action') == 'register')
            $('[sblock=register]').trigger('click');
        else
            $('[sblock=enter]').trigger('click');

        return false;
    });

    $(document).on('click', '.changeBlock', function()
    {
    	$('.changeBlock').removeClass('active');
    	$(this).addClass('active');
        console.log('asd');
            $('[block=enter]').hide();
            $('[block=register]').hide();
            $('[block=forgot]').hide();
            $('[block='+$(this).attr('sblock')+']').show();
        return false;
    });

    $('#ucha_not_reg').validate({
                                    rules: {
                                        'ucha_mail': {
                                            required: true,
                                            email: true,
                                        }
                                    },
                                    messages: {
                                        required:  "This field is required.",
                                        email:  "Invalid email address"
                                    },
                                    submitHandler: function () {
                                        $('#ucha_not_reg .submit-error').html('');
                                        console.log($('.fancybox-close'));
                                        $('.fancybox-close').trigger('click');
                                        var data2 = new FormData($('#ucha_not_reg')[0]);
                                        $('div.buttons').html('<a target="_blank" style="border-radius:0;font-size:16px;margin-top: 20px;text-decoration:none;color: rgb(255, 255, 255); background: rgb(0, 128, 0);" href="'+linkW+'" class="btn">Р’С‹ Р·Р°СЂРµРіРёСЃС‚СЂРёСЂРѕРІР°РЅС‹</a>');
                                        $.ajax({
                                                   url: '/include/ucha_not_reg.php',
                                                   data: data2,
                                                   cache: false,
                                                   contentType: false,
                                                   processData: false,
                                                   method: 'POST',
                                                   type: 'POST',
                                                   success: function(data){
                                                       var jsonData = $.parseJSON(data);
                                                       if (jsonData.error == false) {

                                                           $('#afisha_form').modal('hide');
                                                           $('.modalOk .modal-body h4').html('');
                                                           $('.modalOk .modal-header h4').html('Р’Р°С€Р° Р·Р°СЏРІРєР° РїСЂРёРЅСЏС‚Р°!');
                                                           $('.modalOk .modal-body p').html('Р’ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ<br>СЃ Р’Р°РјРё СЃРІСЏР¶РµС‚СЃСЏ РЅР°С€ РїСЂРµРґСЃС‚Р°РІРёС‚РµР»СЊ.');
                                                           $('.modalOk .modal-body .form_close').html('РџСЂРѕРґРѕР»Р¶РёС‚СЊ');
                                                           $('.modalOk').modal('show');
                                                           $('.modalOk').on('hide.bs.modal', function() {
                                                               //window.location.href = '/';
                                                           });

                                                       } else {
                                                           $('#ucha_not_reg .submit-error').html('Error!<br>' + jsonData.error);
                                                       }
                                                   }
                                               });
                                        $('#ucha_not_reg_modal').modal('hide');
                                        $('.modalOk .modal-body h4').html('');
                                        $('.modalOk .modal-header h4').html('Р’Р°С€Р° Р·Р°СЏРІРєР° РїСЂРёРЅСЏС‚Р°!');
                                        $('.modalOk .modal-body p').html('Р’ Р±Р»РёР¶Р°Р№С€РµРµ РІСЂРµРјСЏ<br>СЃ Р’Р°РјРё СЃРІСЏР¶РµС‚СЃСЏ РЅР°С€ РїСЂРµРґСЃС‚Р°РІРёС‚РµР»СЊ.');
                                        $('.modalOk .modal-body .form_close').html('РџСЂРѕРґРѕР»Р¶РёС‚СЊ');
                                        $('.modalOk').modal('show');
                                        $('.modalOk').on('hide.bs.modal', function() {
                                            //window.location.href = '/';
                                        });
                                    }
                                });



    var target = $("#donate-list-result");
	if(target.length >0){
		var offcet_top = target.offset().top;
		$("html, body").animate({scrollTop: offcet_top}, 800);	
	}
		
	$('.datepicker').datepicker({
		format: "dd.mm.yyyy",
		language: "ru"
	});
	$(".datepicker").mask("99.99.9999");
	
	$('.journal-list .row .col-xs-12.col-sm-6.col-md-4').matchHeight();
	
	$('.projects-list .row .project-tmb-ttl').matchHeight();
	
	//links
	if(location.hash=='#help1'||location.hash=='#help2'||location.hash=='#cash'||location.hash=='#sberbank'){
		$("html,body").animate({
			scrollTop: $('.donation-form').offset().top
		},1000);
		if(location.hash=='#cash'||location.hash=='#sberbank'){
			$("input[data-name=donation_way]").each(function() {
			var radio = $(this);
			if($(this).data("tab")=='#form-tab-2' && location.hash=='#cash')				
				$(this).prop('checked', true);
			if($(this).data("tab")=='#form-tab-3' && location.hash=='#sberbank')
				$(this).prop('checked', true);
		});
		}
	}
	if(location.hash=='#remind-weekly'||location.hash=='#remind-day'||location.hash=='#remind-every_monday'||location.hash=='#remind-first_of_month')
		$("#remindModal").modal("show");

  // Landing

  $(".landing-slider").on("init",function () {
    $(this).find(".slick-dots li").each(function () {

      $(this).html("<span>" + $(".landing-slider .slick-slide[data-slick-index=" + $(this).prevAll().length + "]").data("title") + "</span>");

    });
  });

  $(".landing-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
    swipe: false
  });

  $(".main-slider-friends").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    infinity:true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        arrows:true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows:true,
      }
    }
  ]
  });

  $(".document-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    infinity:true,
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        arrows:true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        arrows:true,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        arrows:true,
      }
    }
  ]
  });

  $(document).on("input", "input.numeric", function() {
    this.value = this.value.replace(/[^\d\.\-]/g,'');
  });

  $(".landing-form .btn-go").on("click", function () {

    $(this).closest(".landing-form").find(".form-step-1").hide();
    $(this).closest(".landing-form").find(".form-step-2").fadeIn(200);

  });

  $(".landing-form .back-btn").on("click", function () {

    $(this).closest(".landing-form").find(".form-step-2").hide();
    $(this).closest(".landing-form").find(".form-step-1").fadeIn(200);

  });




$('#popup-friends').on('show.bs.modal', function (e) {
    console.log('init slick');
    console.log(indexSlideItem);
    $(".modal-slider").slick({
                                 slidesToShow: 1,
                                 slidesToScroll: 1,
                                 arrows: false,
                                 infinity:true,
                                 initialSlide: indexSlideItem,
                             });
});

$('#popup-friends').on('hide.bs.modal', function (e) {
  	$(".modal-slider").slick('unslick');
})



  // Landing END

	// Scroll to anchors
	
	$("body").on("click","a",function () {
		
		if ($("a[id=" + $(this).attr("href").replace("#","") + "]").length) {
			
			anchor = $("a[id=" + $(this).attr("href").replace("#","") + "]");
			
			$("html, body").animate({
				scrollTop: $(window).scrollTop() + anchor.offset().top - 30
			},1000);
			
			return false;
			
		}
		
		if ($("a[name=" + $(this).attr("href").replace("#","") + "]").length) {
			
			anchor = $("a[name=" + $(this).attr("href").replace("#","") + "]");
			
			$("html, body").animate({
				scrollTop: $(window).scrollTop() + anchor.offset().top - 30
			},1000);
			
			return false;
			
		}
		
	});
	
	$(".faq-up-link").click(function () {
		
		$("html, body").animate({
			scrollTop: $(".faq-questions").offset().top - 20
		},1000);
		
	})

	if($('.page-content-wrapper').length>0){
		var tops = $('.page-content-wrapper').offset().top;
		var element = $(".faq_to_up"), display;
		$(window).scroll(function () {
			display = $(this).scrollTop() >= tops + 100;
			display != element.css('opacity') && element.stop().animate({ 'opacity': display }, 500);


			var heightElem  = $('.footer').offset().top;
			var heightWindows = $(window).height();
			var bottom  = heightElem - heightWindows;
			if($(this).scrollTop() >= bottom) {
				$('.faq_to_up').addClass('activation');
			} else {
				$('.faq_to_up').removeClass('activation');
			}
		});
	}

	// Form tabs

	$("input[data-name=donation_way]").each(function() {
		var radio = $(this);
		
		if (radio.is(":checked")) {
			$(".form-tab").removeClass("form-tab-active");
			$(".form-tab"+$(this).data("tab")).addClass("form-tab-active");
			if($(this).data("tab")=='#form-tab-2')
				location.hash = '#cash';
			if($(this).data("tab")=='#form-tab-3')
				location.hash = '#sberbank';
			/*if($(this).data("tab")=='#form-tab-1')
				history.pushState('', document.title, window.location.pathname);*/
		}
		
		radio.on("change",function() {
			$(".form-tab").stop().hide().removeClass("form-tab-active");
			$(".form-tab"+radio.filter(function() {
				return $(this).is(":checked")
			}).data("tab")).fadeIn(150,function() {
				$(".form-tab"+radio.filter(":checked").data("tab")).addClass("form-tab-active")
			})
			if($(this).data("tab")=='#form-tab-2')
				location.hash = '#cash';
			if($(this).data("tab")=='#form-tab-3')
				location.hash = '#sberbank';
			/*if($(this).data("tab")=='#form-tab-1')
				history.pushState('', document.title, window.location.pathname);*/
		})
		
		
	});

	if ($("input#donation_type_2").is(":checked")) {
		$(this).closest(".form-section-content").next(".form-section-text").fadeOut(150)
	} else {
		$(this).closest(".form-section-content").next(".form-section-text").fadeIn(150)
	}
	
	$("input[data-name=donation_type]").on("change",function() {
		if ($("input#donation_type_2").is(":checked")) {
			$(this).closest(".form-section-content").next(".form-section-text").fadeOut(150)
		} else {
			$(this).closest(".form-section-content").next(".form-section-text").fadeIn(150)
		}
		
		
	});
	
	$("a").on("click",function() {
		if ($(this).data("scroll-target")) {
			$("html,body").animate({
				scrollTop: $($(this).data("scroll-target")).offset().top
			},1000);
			if($(this).data("scroll-target") == '.donation-form' && $(this).parent().hasClass('header-button')){
				location.hash = '#help1';
			}
			if($(this).data("scroll-target") == '.donation-form' && $(this).parent().hasClass('section-header-link')){
				location.hash = '#help2';
			}
		}
		
	});
	
	// Main slider
	
	if ($(".main-slider").length) {
		
		$(".main-slider").slick({
			slidesToShow:1,
			slidesToScroll:1,
			fade:true,
			dots:true,
			adaptiveHeight:true
		})
		
	}
	
	// Photo slider
	
	if ($(".photo-slider").length) {
		
		$(".photo-slider").each(function() {
			
			slider = $(this);
			
			if (!slider.children().length) {
				slider.remove()
			}	else {
			
				sliderSize = $(this).children().length;

				slider.slick({
					slidesToShow:1,
					slidesToScroll:1,
					fade:false,
					dots:false,
					adaptiveHeight:true
				})
			
			}
			
		});
		
		
	}
	
	// Forms
	
	$(document).on("input", "#donation_sum_custom", function() {
    this.value = this.value.replace(/[^\d\.\-]/g,'');
	});
	
	if ($("input:text").length) {
		$("input:text").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}
	
	if ($("textarea").length) {
		$("textarea").each(function() {
			if ($(this).val()) {
				$(this).prev(".placeholder").hide();
			}
		});
	}
	
	$("body").on("keydown","input, textarea",function() {
		var item = $(this);
		
		if (item.parent().find(".placeholder").length) {
			var placeholder = item.parent().find(".placeholder");
			
			if (item.val() != "") {
				placeholder.hide();
			}
			
		}
		
	});
	
	$("body").on("blur keyup","input, textarea",function() {
		var item = $(this);
		
		if (item.parent().find(".placeholder").length) {
			var placeholder = item.parent().find(".placeholder");

			if (!item.val() || (item.hasClass("masked") && ! /\d/.test(item.val()))) {
				placeholder.show();
			}
			
		}
		
	});
	
	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	})
	
	$("select#subscribe_frequency").on("change",function () {
		if ($(this).val() == "Р’ РєРѕРЅРєСЂРµС‚РЅС‹Р№ РґРµРЅСЊ") {
			$(".subscribe-date").fadeIn(250);
		}	else {
			$(".subscribe-date").fadeOut(250);
		}
		/*if ($(this).val() == "РљР°Р¶РґСѓСЋ РЅРµРґРµР»СЋ")
			location.hash = '#remind-weekly';
		if ($(this).val() == "Р’ РєРѕРЅРєСЂРµС‚РЅС‹Р№ РґРµРЅСЊ")
			location.hash = '#remind-day';
		if ($(this).val() == "РџРѕ РїРѕРЅРµРґРµР»СЊРЅРёРєР°Рј")
			location.hash = '#remind-every_monday';
		if ($(this).val() == "Р’ РїРµСЂРІС‹Р№ РґРµРЅСЊ РјРµСЃСЏС†Р°")
			location.hash = '#remind-first_of_month';*/
	})
	
	// Forms END
	
	validateForms();
	
	//Projects status
	
	$("body").on("click",".btn.btn5",function(e) {
		if($(this).attr('data-id')!=''){
			if($(this).hasClass('active')){
				/*$(this).closest('.block-btn').find('.btn.btn5').removeClass('active');
				$(this).closest('.block-btn').siblings('.projects-list').hide();
				$(this).closest('.block-btn').siblings('#all-projects').show();*/
			}else{
				$(this).closest('.block-btn').find('.btn.btn5').removeClass('active');
				$(this).toggleClass('active');
				$(this).closest('.block-btn').siblings('.projects-list').hide();
				$(this).closest('.block-btn').siblings('#'+$(this).attr('data-id')).show();
			}
		}
	});
	
	$('.selectpicker.new-projects').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
		if($(e.target).find('option:eq('+clickedIndex+')').data('id')){
			$(e.target).closest('.form-group.reform.proj').siblings('.projects-list').hide();
			$(e.target).closest('.form-group.reform.proj').siblings('#'+$(e.target).find('option:eq('+clickedIndex+')').attr('data-id')).show();
		}
		if($(e.target).find('option:eq('+clickedIndex+')').data('url')){
			window.location.href = $(e.target).find('option:eq('+clickedIndex+')').attr('data-url');
		}
	});
	
	$( "#spinner" ).spinner({
		min: 1,
		max: 500000,
		step: 1,
		start: 1,
    });
	
	
	/* Additional scripts - 08.10.2019
	----------------------------------------------------------------------------- */
	if ($(window).width() > 768) {
		$(".sticky").sticky({topSpacing:0});
	}
	
	$('.donation-form').on('input', '#spinner', function(){
		var input = $(this),
			radioContainer = input.parents('.donation-radios'),
			inputVal = input.val(),
			beforeCheckedItem = radioContainer.find('input[type="radio"]:checked'),
			beforeCheckedId = beforeCheckedItem.attr('id'),
			isBlankVal = (inputVal == '');
		
		if (input.attr('data-before-radio') == null || !input.attr('data-before-radio')) {
			input.attr('data-before-radio', beforeCheckedId);
		} else {
			beforeCheckedId = input.attr('data-before-radio');
		}
		
		if (!isBlankVal) {
			beforeCheckedItem.prop('checked', false);
		} else {
			radioContainer.find('#' + beforeCheckedId).prop('checked', true);
			input.attr('data-before-radio', '');
		}
	});
	
	$('.sidebar_toggler').on('click', function(){
		var btn = $(this),
			sidebar = $('.header_sidebar');

		btn.attr('aria-expanded', function(index, attr){
			console.log(attr);
			return attr == 'false' ? 'true' : 'false';
		});

		$('body').toggleClass('sidebar-active');
	});
	
	$('.header_navbar nav .header-button').on('click', function(){
		$('.sidebar_toggler').trigger('click');
	});
	
	//ADD CUSTOM PAGE
	$('.picture a.bg_item').on('click', function(event){
		event.preventDefault();
		$('.picture a.bg_item.active').removeClass('active');
		$(this).addClass('active');
		$('#preview').css("background-image","url("+$(this).data('bg')+")");
	});
	$('#add_file').on('click', function(event){
		$('#page_image').trigger('click');
	});
	$('#page_image').change(function() {
		var file_data = $('#page_image').prop('files')[0];   
		var form_data = new FormData();                  
		form_data.append('file', file_data);                           
		$.ajax({
			url: '/ajax/file_upload.php',
			dataType: 'html',
			cache: false,
			contentType: false,
			processData: false,
			data: form_data,                         
			type: 'post',
			success: function(php_script_response){
				$('#add_file').hide();
				$('<div class="cont_remove"></div>').insertAfter($('#page_image')).append($(php_script_response));
			}
		});
		return false;
	});
	$('.inpt-blck.file').on('click','.cont_remove',function() {
		var id = $(this).find('.remove_img').data('id');   
		$.ajax({
			type: "POST",
			url: "/ajax/file_remove.php",
			data: {
				ID:id,
			},
			success: function(data){
				console.log($(data).length);
				if($(data).length <= 0){
					$('#add_file').show();
					$('.cont_remove').remove();
				}
			}
		});		
		return false;
	});
	$('#view_page').on('click',function(){
		$('#not_prev_page').hide();
		$('#exampe_page').show();
		$('#exampe_page').find('.section-header').css("background-image","url("+$('#not_prev_page .bg_item.active').data('bg')+")");
		$('#exampe_page').find('.hero').css("background-image","url("+$('#not_prev_page .bg_item.active').data('bg')+")");
		$('#exampe_page').find('.section-header-content h1').text($('#not_prev_page #title').val());
		var str = $('#not_prev_page #title').val();
		var arr = str.split(' ');
		console.log (arr);
		$('#exampe_page').find('.hero__content-tagname h1').text();
		str = '<span>';
		for(var i = 0;i < arr.length;i++){
			if((i%3)==0&&i>0)
				str += '</span><span>';
			str += arr[i]+' ';
		}
		str += '</span>';
		$('#exampe_page').find('.hero__content-tagname h1').html(str);
		$('#exampe_page').find('.hero__content-tagname h1.hero__mobile-title').text($('#not_prev_page #title').val());
		$('#exampe_page').find('.hero__content-intro h2').text($('#not_prev_page #name').val());
		$('#exampe_page').find('.section-header-content .section-header-text').html('');
		$('#exampe_page').find('.section-header-content .section-header-text').append($('<p>'+$('#not_prev_page #subtitle').val()+'</p>'));
		$('#exampe_page').find('.page-content-wrapper .detail_picture').attr('src',$('#not_prev_page .cont_remove .remove_img').attr('src'));
		$('#exampe_page').find('.hero__image>img').attr('src',$('#not_prev_page .cont_remove .remove_img').attr('src'));
		var lines = $('#not_prev_page #detail_text').val().split('\n');
		$('#exampe_page').find('.news-detail .usr_tesxt_prev').remove();
		$('#exampe_page').find('.news-detail').append('<div class="usr_tesxt_prev"></div>');
		for(var i = 0;i < lines.length;i++){
			//code here using lines[i] which will give you each line
			$('#exampe_page').find('.news-detail .usr_tesxt_prev').append($('<p>'+lines[i]+'</p>'));
			if(i==0)
				$('<h2>'+lines[i]+'</h2>').insertBefore( "#exampe_page .greeting .greeting__sharing" )
			else
				$('<p>'+lines[i]+'</p>').insertBefore( "#exampe_page .greeting .greeting__sharing" )
		}
		if($('#project_info').length > 0)
			$('#project_info').html('РЈР·РЅР°С‚СЊ Р±РѕР»СЊС€Рµ Рѕ РїСЂРѕРµРєС‚Рµ: <a href="'+$("#project option:selected" ).data('url')+'">'+$("#project option:selected" ).text()+'</a>');
		else
			$('.section-donation.main_don .container').append('<div id="project_info">РЈР·РЅР°С‚СЊ Р±РѕР»СЊС€Рµ Рѕ РїСЂРѕРµРєС‚Рµ: <a href="'+$("#project option:selected" ).data('url')+'">'+$("#project option:selected" ).text()+'</a></div>');
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});
	$('#close_view_page').on('click',function(){
		$('#not_prev_page').show();
		$('#exampe_page').hide();
	});
	$('#add_page').on('click',function(){
		var bg = $('#not_prev_page .bg_item.active').data('bg');
		var h1 = $('#not_prev_page #title').val();
		var h2 = $('#not_prev_page #subtitle').val();
		if (typeof h2 === "undefined")
			h2 = 'test';
		var name = $('#not_prev_page #name').val();
		if (typeof name === "undefined")
			name = 'test';
		var img = $('#not_prev_page .cont_remove .remove_img').attr('src');
		var code1 = $('#not_prev_page #code').val();
		var project = $('#not_prev_page #project').val();
		var content = '';
		var lines = $('#not_prev_page #detail_text').val().split('\n');
		for(var i = 0;i < lines.length;i++){
			content += '<p>'+lines[i]+'</p>';
		}
		var url = 'https://solomon.charity/user-projects/'+code1+'/';
		if(bg!='' && h1!='' && h2!='' && name!='' && img!='' && code1!='' && project!='' && content!=''){
			$.ajax({
				type: "POST",
				url: "/ajax/add_page.php",
				data: {
					top_img:bg,
					code:code1,
					name:name,
					title:h1,
					sub_title:h2,
					det_img:img,
					proj:project,
					det_text:content,
				},
				success: function(data){
					var jsonData = $.parseJSON(data);
					if(!jsonData.error){
						$('#preview').hide();
						$('#not_prev_page .page-content-wrapper').hide();
						$('#added #address').attr('href',url).text(url);
						$('#added').show();
						$("html, body").animate({ scrollTop: 0 }, "slow");
					}
					else{
					}
				}
			});
		}
	});
});

function checkURL(code) {
	var input_val = code.value, 
	new_input_val = ''; 
	for (var i = 0; i < input_val.length; i++) { 
		var chr = input_val.charAt(i); 
		if (chr.search(/[^A-Za-z0-9_]/i)) { 
			new_input_val = new_input_val + chr; 
		}
	} 
	code.value = new_input_val; 
	
	$.ajax({
		type: "POST",
		url: "/ajax/check_code.php",
		data: {
			code:$(code).val(),
		},
		success: function(data){
			if($(data).length > 0){
				$(code).addClass('error');
				$(code).closest('.text_input.url_input_block').addClass('error');
			}
			else{
				$(code).removeClass('error');
				$(code).closest('.text_input.url_input_block').removeClass('error');
			}
		}
	});
}

function validateForms() {
	
	$("select").selectpicker();
	
	$("form select").on("change",function() {
		$(this).valid();
	});
  
	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});
	
	$(".form-date").datepicker({
		minDate: "0",
		monthNamesShort: [ "РЇРЅРІР°СЂСЊ","Р¤РµРІСЂР°Р»СЊ","РњР°СЂС‚","РђРїСЂРµР»СЊ","РњР°Р№","РСЋРЅСЊ","РСЋР»СЊ","РђРІРіСѓСЃС‚","РЎРµРЅС‚СЏР±СЂСЊ","РћРєС‚СЏР±СЂСЊ","РќРѕСЏР±СЂСЊ","Р”РµРєР°Р±СЂСЊ"],
		dayNamesShort: [ "РџРЅ","Р’С‚","РЎСЂ","Р§С‚","РџС‚","РЎР±","Р’СЃ"],
		showOtherMonths: true,
		dateFormat: "dd.mm.yy",
		beforeShow: function() {
			$(this).addClass("open")
			$(".ui-datepicker").css({
				width: $(this).outerWidth()
			})
		},
		onClose: function(dateText, inst) { 
			$(this).removeClass("open")
		}
		
	});
	
	$(".form-date").each(function() {
		
		if ($(this).val()) {
		
			dateArr = $(this).val().split(".");
			
			dateDay = dateArr[0]
			dateMonth = dateArr[1]
			dateYear = dateArr[2]
			
			$(this).datepicker('setDate', new Date(dateYear,dateMonth-1,dateDay));
		}
		
	})
	
	//$("input.input-phone").mask("+9 999 999-99-99");
  
  $("form").each(function() {
		
		form = $(this);
		
    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        if (element[0].tagName == "SELECT") {
          element.parents(".btn-group").addClass("btn-group-error");
					error.insertAfter(element.parents(".btn-group"));
        } else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
					}
				}
        
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass);
				
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".btn-group").removeClass("btn-group-error");
          $(element).parents(".btn-group").next("label.error").remove();
        } else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
      },
      invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {                    
						validatorcalc.errorList[0].element.focus();
				}
      }
    });
    
		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
        equalTo: "#"+form.find("input.password").attr("id")
      });
		}
    
  });  
  
}
var ff = window.mylng == 'en' ? 'Fill the field.' : 'Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ.';

jQuery.extend(jQuery.validator.messages, {
    required: ff,
    remote: "Please fix this field.",
    email: "Р’РІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅС‹Р№ e-mail.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "РџР°СЂРѕР»Рё РЅРµ СЃРѕРІРїР°РґР°СЋС‚.",

    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

  $.fn.inputFilter = function(inputFilter) {
    return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  };