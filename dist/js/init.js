// Это типа document ready
$(function() {
    var toggleHeaderFixed = function() {
        var isFixed = $('.header').is('._fixed');

        if ($(window).scrollTop() > $(window).height()) {
            if (!isFixed) {
                $('.header').addClass('_fixed').fadeOut(0).fadeIn(500);
                $('.page').addClass('_header-fixed');
            }
        } else {
            if (isFixed) {
                $('.header').fadeOut(500, function() {
                    $(this).removeClass('_fixed').fadeIn(0);
                    $('.page').removeClass('_header-fixed');
                });
            }
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