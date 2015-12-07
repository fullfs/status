// Это типа document ready
$(function() {
    var toggleHeaderFixed = function() {
        var isFixed = $('.b-header').is('._fixed');

        if ($(window).scrollTop() > $(window).height()) {
            if (!isFixed) {
                $('.b-header').addClass('_fixed').fadeOut(0).fadeIn(500);
                $('.b-page').addClass('_header-fixed');
            }
        } else {
            if (isFixed) {
                $('.b-header').fadeOut(500, function() {
                    $(this).removeClass('_fixed').fadeIn(100);
                    $('.b-page').removeClass('_header-fixed');
                });
            }
        }
        
    }
    $(window).on('scroll', toggleHeaderFixed);
    toggleHeaderFixed();






    $('.b-header__points-item-link._menu').on('click', function(e) {
        e.preventDefault();
        
        $('.b-auth-form').slideUp(300, function() {
            $('.b-navigation').slideToggle(300);
        })
    });

    $('.b-header__points-item-link._auth').on('click', function(e) {
        e.preventDefault();

        $('.b-navigation').slideUp(300, function() {
            $('.b-auth-form').slideToggle(300);
        })
    });



    $('.b-auth-form__close').on('click', function(e) {
        $('.b-auth-form').slideToggle(300);
    });




    var setPlaceholderStyle = function() {
        $(this).each(function() {
            if ($(this).val() === '') {
                $(this).addClass('_is-empty');
            } else {
                $(this).removeClass('_is-empty');
            }
        })
    }

    var inputsSelector = 'input[type="text"], input[type="password"]';

    $('body').on('input', inputsSelector, setPlaceholderStyle);

    setPlaceholderStyle.call($(inputsSelector));
});