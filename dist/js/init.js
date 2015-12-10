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






    $('.b-header__points-item._menu a').on('click', function(e) {
        e.preventDefault();
        
        $('.b-auth-form').slideUp(300, function() {
            $('.b-navigation').slideToggle(300);
        })
    });

    $('.b-header__points-item._login a').on('click', function(e) {
        e.preventDefault();

        $('.b-navigation').slideUp(300, function() {
            $('.b-auth-form').slideToggle(300);
        })
    });
    $(window).on('click', function(e) {
        if (!$(e.target).closest('.b-navigation, .b-header__points').length) {
            $('.b-navigation').slideUp(300);
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
    var $item = $('.gallery__item');
    
    for (var i = 5 - 1; i >= 0; i--) {
        $('.gallery__list').append($item.clone());
    };






    var cooldown = false;
    var setPosition = function(current) {
        if (cooldown) {
            return;
        }
        cooldown = true;
        var maxIndex = $('.gallery__item').length - 1;
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

        $('.gallery__item').removeClass('_pre-prev _prev _current _next _post-next');
        $('.gallery__item').eq(prePrev).addClass('_pre-prev');
        $('.gallery__item').eq(prev).addClass('_prev');
        $('.gallery__item').eq(current).addClass('_current');
        $('.gallery__item').eq(next).addClass('_next');
        $('.gallery__item').eq(postNext).addClass('_post-next');

        setTimeout(function() {
            cooldown = false;
        }, 800);
    }

    setPosition(0);

    $('.gallery__prev').on('click', function() {
        setPosition($('.gallery__item._prev').index());
    });

    $('.gallery__next').on('click', function() {
        setPosition($('.gallery__item._next').index());
    });

   
    $('.gallery__item').each(function() {
        var $el = $(this);
        var $holder = $el.find('.gallery__item-img-h');
        var $prev = $el.find('.gallery__item-arrow-prev');
        var $next = $el.find('.gallery__item-arrow-next');

        $holder.jcarousel({
            // wrap: 'both'
        });

        $prev.on('click', function() {
            $holder.jcarousel('scroll', '-=1');
        });

        $next.on('click', function() {
            $holder.jcarousel('scroll', '+=1');
        });
    })
});