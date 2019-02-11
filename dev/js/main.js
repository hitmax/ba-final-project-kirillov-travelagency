;(function ($) {
    $(function () {
        const $textContainer = $('.text-container');

        $('.hero-section-slider').slick({
            arrows: false,
            fade: true,
            dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            infinite: true,
            responsive: [
                {
                    breakpoint: 969,
                    settings: {
                        dots: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        // slidesToShow: 3
                    }
                }
            ]
        });

        $('.section-convenience-slider').slick({
            arrows: true,
            fade: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnFocus: false,
            pauseOnHover: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: true,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        // slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        fade: true,

                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.section-tour-packages-slider').slick({
            // centerMode: true,
            centerPadding: '60px',
            arrows: true,
            fade: false,
            dots: false,
            // autoplay: true,
            autoplay: false,
            autoplaySpeed: 3000,
            pauseOnFocus: false,
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1020,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        // centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.navbar-toggler').click(() => {
            $textContainer.toggleClass('hidden');
        });
    });
})(jQuery);
