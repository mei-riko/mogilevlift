import $ from 'jquery';

$(function(){
      // Слайдер
	if( $('.slider').length > 0 ){
        // Stats Slider
        let $slickStats = $('.slider_stats');
        $slickStats.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows      : true,
                dots        : false,
                infinite    : true,
            draggable   : true,
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
            autoplay    : false,
            infinite    : false,
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
            responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                arrows      : false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows      : false,
                }
            }
            ]
        });
    }
});