// Это типа document ready
$(function() {
    var toggleHeaderFixed = function() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('_fixed');
            $('.page').addClass('_header-fixed');
        } else {
            $('.header').removeClass('_fixed');
            $('.page').removeClass('_header-fixed');
        }
        
    }
    $(window).on('scroll', toggleHeaderFixed);
    toggleHeaderFixed();






    $('.header__points-item-link._menu').on('click', function(e) {
        e.preventDefault();
        $('.navigation').slideToggle(300);
    });

    $('.header__points-item-link._auth').on('click', function(e) {
        e.preventDefault();
        $('.auth-form').slideToggle(300);
    });

    $('.auth-form__close').on('click', function(e) {
        $('.auth-form').slideToggle(300);
    });
});