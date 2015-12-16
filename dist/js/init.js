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






    $('.b-header__points-item._menu .b-header__points-item-link').on('click', function(e) {
        e.preventDefault();
        
        $('.b-auth-form, .b-user-menu').first().slideUp(300, function() {
            $('.b-navigation').slideToggle(300);
        });
    });

    $('.b-header__points-item._login .b-header__points-item-link').on('click', function(e) {
        e.preventDefault();

        $('.b-navigation').slideUp(300, function() {
            $('.b-auth-form').slideToggle(300);
        });
    });
    $('.b-header__points-item._user .b-header__points-item-link').on('click', function(e) {
        e.preventDefault();

        $(this).toggleClass('_menu-open');

        var width = 
            $('.b-header__points-item._user').width() + 
            $('.b-header__points-item._logout').width() +
            parseInt($('.b-header__points-item._logout').css('margin-left'), 10);

        $('.b-navigation').slideUp(300, function() {
            $('.b-user-menu').css('width', width).slideToggle(300);
        });
    });
    $(window).on('click', function(e) {
        if (!$(e.target).closest('.b-navigation, .b-header__points').length) {
            $('.b-navigation').slideUp(300);
            $('.b-user-menu').slideUp(200);
            $('.b-header__points-item._user .b-header__points-item-link').removeClass('_menu-open');
        }
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





// Слайдер
$(function() {
    $('.b-gallery').each(function() {
        var $el = function(selector) {
            return $(this).find(selector);
        }.bind(this);


        for (var i = 5 - 1; i >= 0; i--) {
            $el('.b-gallery__item').each(function() {
                $el('.b-gallery__list').append($(this).clone());
            });
        };



        var cooldown = false;
        var setPosition = function(current) {
            if (cooldown) {
                return;
            }
            cooldown = true;
            var maxIndex = $el('.b-gallery__item').length - 1;
            var prePrev;
            var prev = current - 1;
            var next = current + 1;
            var postNext;

            if (prev < 0) {
                prev = maxIndex;
            }

            if (next > maxIndex) {
                next = 0;
            }

            prePrev = prev - 1;
            postNext = next + 1;

            if (prePrev < 0) {
                prePrev = maxIndex;
            }

            if (postNext > maxIndex) {
                postNext = 0;
            }

            $el('.b-gallery__item').removeClass('_pre-prev _prev _current _next _post-next');
            $el('.b-gallery__item').eq(prePrev).addClass('_pre-prev');
            $el('.b-gallery__item').eq(prev).addClass('_prev');
            $el('.b-gallery__item').eq(current).addClass('_current');
            $el('.b-gallery__item').eq(next).addClass('_next');
            $el('.b-gallery__item').eq(postNext).addClass('_post-next');

            setTimeout(function() {
                cooldown = false;
            }, 800);
        }

        setPosition(0);

        $el('.b-gallery__prev, .b-gallery__item-arrow-prev').on('click', function() {
            setPosition($el('.b-gallery__item._prev').index());
        });

        $el('.b-gallery__next, .b-gallery__item-arrow-next').on('click', function() {
            setPosition($el('.b-gallery__item._next').index());
        });
    });
});