!function(e){var a={};function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(l,n,function(a){return e[a]}.bind(null,n));return l},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=1)}([function(e,a){e.exports=jQuery},function(e,a,t){"use strict";var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};t(2),t(3),t(4),(0,o.default)((function(){(0,o.default)("a.scroll").on("click",(function(){return(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)(".page-nav__item").on("click",(function(){var e=(0,o.default)(this).closest(".page-nav").outerHeight();return console.log(e),(0,o.default)("html, body").animate({scrollTop:(0,o.default)((0,o.default)(this).attr("href")).offset().top-e+"px"},{duration:500,easing:"swing"}),!1})),(0,o.default)("[data-fancybox]").fancybox({autoFocus:!1,touch:!1}),(0,o.default)('[data-trigger="click"]').on("click",(function(e){e.preventDefault()})),(0,o.default)('[data-trigger="copy"]').on("click",(function(e){var a,t;((0,o.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches)&&(e.preventDefault(),a=(0,o.default)(this),t=(0,o.default)("<textarea>"),(0,o.default)("body").append(t),t.val(a.text()).select(),document.execCommand("copy"),t.remove(),alert("Текст скопирован"))}))}))},function(e,a,t){"use strict";var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};function s(){var e=(0,o.default)(".nav").find(".nav__link.nav__link--active"),a=e.data("nav");e.removeClass("nav__link--active"),(0,o.default)(".nav .nav__children"+a).removeClass("nav__children--active")}function i(e){var a=null;e.mouseenter((function(e){clearTimeout(a);var t=(0,o.default)(this);a=setTimeout((function(){!function(e){var a=e.closest(".header"),t=e.find(".nav__link"),l=t.data("nav");if(a.find(".nav__link.nav__link--active").length>0&&!t.hasClass("nav__link--active")){var n=(0,o.default)(".nav__link.nav__link--active");n.removeClass("nav__link--active"),a.find(".nav .nav__children"+n.data("nav")).removeClass("nav__children--active")}t.addClass("nav__link--active"),a.find(".nav .nav__children"+l).addClass("nav__children--active")}(t)}),100)})).mouseleave((function(e){clearTimeout(a),a=setTimeout(s,300)}))}(0,o.default)((function(){(0,o.default)(window).width()>1023||!window.matchMedia("screen and (max-width: 1024px)").matches?(0,o.default)(".nav").removeClass("nav--mobile").addClass("nav--desktop"):(0,o.default)(".nav").removeClass("nav--desktop").addClass("nav--mobile"),i((0,o.default)(".nav.nav--desktop .nav__parent")),(0,o.default)(".navbar-toggle#nav").on("click",(function(e){e.preventDefault();var a=(0,o.default)(".navbar-collapse");a.hasClass("navbar-collapse--active")?(a.removeClass("navbar-collapse--active"),(0,o.default)(".navbar-overlay").removeClass("navbar-overlay--active")):(a.addClass("navbar-collapse--active"),(0,o.default)(".navbar-overlay").addClass("navbar-overlay--active"))})),(0,o.default)(".navbar-close").on("click",(function(e){e.preventDefault(),(0,o.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,o.default)(".navbar-overlay").removeClass("navbar-overlay--active")})),(0,o.default)(document).on("click",".nav.nav--mobile .nav__parent .nav__link",(function(e){e.preventDefault();var a=(0,o.default)(this).closest(".nav"),t=(0,o.default)(this),l=a.find(".nav__link--active"),n=l.parent();(0,o.default)(this).hasClass("nav__link--active")?((0,o.default)(this).removeClass("nav__link--active"),(0,o.default)(this).parent().find(".nav__children").slideUp()):(l.length>0&&t!=l&&(l.removeClass("nav__link--active"),n.find(".nav__children").slideUp()),(0,o.default)(this).addClass("nav__link--active"),(0,o.default)(this).parent().find(".nav__children").slideDown())}))})),(0,o.default)(document).mouseup((function(e){var a=(0,o.default)(".navbar-collapse.navbar-collapse--active");a.is(e.target)||0!==a.has(e.target).length||(0,o.default)(".navbar-toggle#nav").is(e.target)||((0,o.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,o.default)(".navbar-overlay").removeClass("navbar-overlay--active"))})),(0,o.default)(window).on("resize",(function(){(0,o.default)(window).width()>991||!window.matchMedia("screen and (max-width: 992px)").matches?((0,o.default)(".navbar-toggle").removeClass("navbar-toggle--active"),(0,o.default)(".navbar-collapse").removeClass("navbar-collapse--active"),(0,o.default)(".navbar-overlay").removeClass("navbar-overlay--active"),i((0,o.default)(".nav.nav--desktop .nav__parent")),(0,o.default)(".nav").removeClass("nav--mobile").addClass("nav--desktop")):(0,o.default)(".nav").removeClass("nav--desktop").addClass("nav--mobile")}))},function(e,a,t){"use strict";var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};(0,o.default)((function(){(0,o.default)(".phone").length>0&&(0,o.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,o.default)(this).closest("form").addClass("error-phone"),(0,o.default)(this).addClass("error"),(0,o.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,o.default)(this).closest("form").removeClass("error-phone"),(0,o.default)(this).removeClass("error"),(0,o.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,o.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,o.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,o.default)(this).blur(),!1}))}))},function(e,a,t){"use strict";var l,n=t(0),o=(l=n)&&l.__esModule?l:{default:l};(0,o.default)((function(){(0,o.default)(".slider").length>0&&((0,o.default)(".slider_stats").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,infinite:!0,draggable:!0,variableWidth:!0,focusOnSelect:!0,swipeToSlide:!0,autoplay:!1}),(0,o.default)("#reviews").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!0,autoplay:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4,infinite:!0,arrows:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,arrows:!1,dots:!0}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2,infinite:!0,arrows:!1,dots:!0}}]}),(0,o.default)("#reviews-full").slick({slidesToShow:6,slidesToScroll:6,arrows:!0,dots:!1,autoplay:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),(0,o.default)(".gallery-slider").slick({slidesToShow:3,slidesToScroll:3,arrows:!0,dots:!0,autoplay:!1,infinite:!1,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}}]}),(0,o.default)('[data-slider="slick"]').slick({slidesToShow:6,slidesToScroll:6,arrows:!0,dots:!1,autoplay:!1,responsive:[{breakpoint:992,settings:{slidesToShow:4,slidesToScroll:4,arrows:!0}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2,arrows:!0}}]}),(0,o.default)("#line-gallery").slick({slidesToShow:4,slidesToScroll:2,arrows:!1,dots:!1,autoplay:!0,autoplaySpeed:5e3,responsive:[{breakpoint:992,settings:{slidesToShow:3,slidesToScroll:2,arrows:!1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:2,arrows:!1}}]}))}))}]);