import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    let parentHeader = itemNav.closest('.header');
    let item = itemNav.find(".nav__link");
    let nav = item.data("nav");


    if( parentHeader.find(".nav__link.nav__link--active").length > 0 && !item.hasClass("nav__link--active") ){
        let navActive = $(".nav__link.nav__link--active");
        navActive.removeClass("nav__link--active");
        parentHeader.find(".nav .nav__children" + navActive.data("nav")).removeClass("nav__children--active");
    }

    item.addClass("nav__link--active");
    parentHeader.find(".nav .nav__children" + nav).addClass("nav__children--active");
}
function navbarUnHover(){
    let item = $('.nav').find(".nav__link.nav__link--active");
    let nav = item.data("nav");

    item.removeClass("nav__link--active");
    $(".nav .nav__children" + nav).removeClass("nav__children--active");
}
function navbarDesktopInitialize( itemNav ){
    // Desktop Hover Nav
    let timeout = null;
    // Задержка скрытия меню 0.3сек
    itemNav
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 100);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 300);
        });
}

$(function(){
    // Check Windows Size
    if ( $(window).width() > 1023 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
    }else{
        $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    }

    // Desktop Navbar
    navbarDesktopInitialize( $('.nav.nav--desktop .nav__parent') );

    // Mobile Navbar Open
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
    // Mobile Navbar Close
    $(".navbar-close").on("click", function(e){
        e.preventDefault();
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-overlay").removeClass("navbar-overlay--active");
    });
    // Mobile Navbar Children
    // Mobile Open Sidebar Nav
    $(document).on('click', ".nav.nav--mobile .nav__parent .nav__link", function( event ){
        event.preventDefault();

        const $navMobile = $(this).closest('.nav');

        const $navMobileItem = $(this);

        const $navMobileActiveItem = $navMobile.find('.nav__link--active');
        const $navMobileActiveParent = $navMobileActiveItem.parent();

        if( !$(this).hasClass('nav__link--active') ){
            // Если есть активная категория и она не совпадает с той, по которой нажали
            if( $navMobileActiveItem.length > 0 && $navMobileItem != $navMobileActiveItem){
                $navMobileActiveItem.removeClass('nav__link--active');
                $navMobileActiveParent.find('.nav__children').slideUp();
            }

            $(this).addClass('nav__link--active');
            $(this).parent().find('.nav__children').slideDown();
            // $(this).closest('.nav').find(".nav__link").removeClass("nav__link--active").eq($(this).index()).addClass("nav__link--active");
        }else{
            $(this).removeClass('nav__link--active');
            $(this).parent().find('.nav__children').slideUp();
        }
    });
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
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $(".navbar-toggle").removeClass("navbar-toggle--active");
        $(".navbar-collapse").removeClass("navbar-collapse--active");
        $(".navbar-overlay").removeClass("navbar-overlay--active");

        // Desktop Navbar
        navbarDesktopInitialize( $('.nav.nav--desktop .nav__parent') );

        // Remove Class
        $('.nav').removeClass("nav--mobile").addClass("nav--desktop");
    }else{
        // Remove Class
        $('.nav').removeClass("nav--desktop").addClass("nav--mobile");
    }
});