(function($) {
    $('.close-modal').click(function () {
        $('.overlay,.modal-success,.call-modal').hide();
    });
    $('.down-icon i').click(function () {
        $('.down-phone').slideToggle();
        $('.down-icon i').toggleClass('rotate')
    })
    $('.mobile-icon i').click(function () {
        $('.down-phone').slideDown();
    })
    $('.close-down').click(function () {
        $('.down-phone').slideUp();
    })
    $('.work').slick({
        prevArrow: `<div class="left-arrow"><i class="fa fa-angle-left"></i></div>`,
        nextArrow: `<div class="right-arrow"><i class="fa fa-angle-right"></i></div>`,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1

    });
    $('.slider-nav-inner').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            dots: true,
            centerMode: true,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<div class="left-arrow"><i class="fa fa-angle-left"></i></div>`,
        nextArrow: `<div class="right-arrow"><i class="fa fa-angle-right"></i></div>`,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav')
        .on('init', function(event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: true,
            centerMode: true,
            focusOnSelect: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    $('.slider-for').on('afterChange', function(event, slick, currentSlide) {
        $('.card-carousel').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.card-carousel .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });
    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');
        $('.slider-for').slick('slickGoTo', goToSingleSlide);
    });
    // mobile menu script
    $('.burger').click(function () {
        $('.burger-list').toggle();
    });
    $('.hamburger ').click(function () {
        $('.hamburger').toggleClass('is-active');
    });
    // $('.burger-list ul li a').click(function () {
    //     $('.burger-list').hide();
    //     $('.hamburger').removeClass('is-active');
    // });
    $('.submenu-dropdown').click(function () {
        $('.submenu-dropdown i').toggleClass('rotate');
    });
    $('.submenu-dropdown').click(function () {
        $(this).find('.mobile-submenu').slideToggle();
    });
    $('.submenu-dropdown i').click(function () {
        $(this).siblings('.fa').toggleClass('rotate');
    });
    $('.tab-item').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('.tab-item').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    });
    $('.tel').inputmask({ mask: "+ 7 ( 999 ) - 999 - 99 - 99"});

    new WOW().init();

})(jQuery);


function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}




