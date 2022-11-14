(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);
$(document).ready(function(){

    $(".owl-carousel").owlCarousel(
        {
            items:1,
            dots:true,
            loop:true
        }
    );
    $(".owl-lllll").owlCarousel(
        {
            items:3,
            dots:true,
            loop:true
        }
    );
    $('.autoplay').slick({
        infinite: true,
        arrows:true,
        dots:true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 2,
        accessibility:false,
        dotsClass:'slick-dots'

    });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        effect: "coverflow",
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper = new Swiper(".myswiper", {
        slidesPerView: 3,
        effect: "coverflow",
        spaceBetween: 30,
        /*freeMode: true,*/
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        coverflowEffect: {
            rotate: 50,
            stretch: 4,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.header__Nbtn').on('click', function() {
        $('.overlay, .popup__consultation').fadeIn('slow')
    });

    $('.overlay').on('click', function (event) {
        if(event.target.className == 'overlay'){
            $('.overlay, .popup__consultation, .popup__shop, .popup__thanks, .popup__form').fadeOut('slow')
        }
    $('.popup__close').on('click', function () {
        $('.overlay, .popup__consultation, .popup__shop').fadeOut('slow')

        });
    });
    $('.catalog__buy_btn').on('click', function() {
        $('.overlay, .popup__shop').fadeIn('slow')
    });
    $('.callme__button,.popup__form_btn').on('click', function (event) {
        event.preventDefault();
        $('.popup__consultation, .popup__form').fadeOut('')
        $('.overlay,.popup__thanks').fadeIn('slow');

    });
    $('.catalog__buy_a,.sale__btn,.sale__btn,.delivery__btn').on('click', function() {
        $('.overlay, .popup__form').fadeIn('slow')
    });
    $('.tel').inputmask('+\\9\\9\\6(999)-99-99-99')

});

$(window).on('scroll',function () {
    if($(this).scrollTop() > 1000){
        $('.goTop').fadeIn('slow')
    }
    else{
        $('.goTop').fadeOut('slow')
    }
});

