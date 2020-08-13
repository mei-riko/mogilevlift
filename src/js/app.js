import $ from 'jquery'
$(document).ready(() =>{
  $("a.scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });

  $(".page-nav__item").click(function() {
    let height = $(this).closest(".page-nav").outerHeight();
    console.log( height );
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top - height + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });

  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });

  // Modal
  $('[data-fancybox="modal"]').fancybox({
    autoFocus: false
  });

  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){
    e.preventDefault();
  })
  // Слайдер
	if( $('.slider').length > 0 ){
    // Stats Slider
    let $slickStats = $('.slider_stats');
    $slickStats.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows      : true,
			dots        : false,
			infinite: true,
      draggable: true,
      // prevArrow: '<div class="slider_stats__prev"></div>',
      // nextArrow: '<div class="slider_stats__next"></div>',
      variableWidth: true,
      focusOnSelect: true,
      swipeToSlide: true,
			autoplay  : false,
    });
    // Review Block Col
    let $slickReview = $('#reviews');
		$slickReview.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows      : true,
			dots        : true,
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            dots: true
          }
        }
      ]
    });
    // Review Block Full Screen
    let $slickReviewFull = $('#reviews-full');
		$slickReviewFull.slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows      : true,
			dots        : false,
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        }
      ]
    });
    let $slickGallery = $('.gallery-slider');
		$slickGallery.slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows      : true,
			dots        : true,
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows      : true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows      : false,
          }
        }
      ]
    });
    let $slickPhoto = $('[data-slider="slick"]');
    $slickPhoto.slick({
			slidesToShow: 6,
			slidesToScroll: 6,
			arrows      : true,
			dots        : false,
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows      : true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows      : true,
          }
        }
      ]
    });
    // Gallery Full Screen
    let $slickFullScreen = $('#line-gallery');
		$slickFullScreen.slick({
			slidesToShow: 4,
			slidesToScroll: 2,
			arrows      : false,
			dots        : false,
			
      autoplay  : true,
      autoplaySpeed: 5000,
    });
  }
	// Mobile Navbar
  $(".navbar-toggle#nav").on("click", function(e){
		e.preventDefault();
    let navbar = $(".navbar-collapse");
		if( !navbar.hasClass("navbar-collapse--active")){
			navbar.addClass("navbar-collapse--active");
			$(".navbar-overlay").addClass("navbar-overlay--active");
		}else{
			navbar.removeClass("navbar-collapse--active");
			$(".navbar-overlay").removeClass("navbar-overlay--active");
		}
  });
  $(".navbar-close").on("click", function(e){
    e.preventDefault();
    $(".navbar-collapse").removeClass("navbar-collapse--active");
    $(".navbar-overlay").removeClass("navbar-overlay--active");
  });
  $(document).mouseup(function (e){ // событие клика по веб-документу
    let dropdownActive = $(".navbar-collapse.navbar-collapse--active"); // элемент
    if (!dropdownActive.is(e.target) // клик был не по блоку
          && dropdownActive.has(e.target).length === 0 // и не по его дочерним элементам
          && !$(".navbar-toggle#nav").is(e.target) ) { 
              $(".navbar-collapse").removeClass("navbar-collapse--active");
              $(".navbar-overlay").removeClass("navbar-overlay--active");
            }
  });
  // Hide Navigation on Desktop
  $(window).resize(function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      $(".navbar-toggle").removeClass("navbar-toggle--active");
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-overlay").removeClass("navbar-overlay--active");
    }
  });
});