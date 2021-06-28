import $ from 'jquery';

import './nav';
import './input';
import './slider';

function copytext($elem) {
  var $tmp = $("<textarea>");
  $("body").append($tmp);
  $tmp.val($elem.text()).select();
  document.execCommand("copy");
  $tmp.remove();
}

$(function() {

  $("a.scroll").on("click", function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });

  $(".page-nav__item").on("click", function() {
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

  // Modal
  $('[data-fancybox]').fancybox({
    autoFocus: false,
    touch: false
  });

  // Отмена стандартного поведения ссылки
  $('[data-trigger="click"]').on("click", function(e){
    e.preventDefault();
  });
  $('[data-trigger="copy"]').on("click", function(e){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
      e.preventDefault();
      copytext( $(this) );
      alert( 'Текст скопирован' );
    }
  });

  // Preloading Animation
  // new WOW().init();
});