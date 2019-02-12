;(function ($) {
    $(function () {
        // ********** hide/show textContainer in hero-section when burger-button clicked ***************
        const $textContainer = $('.text-container');

        $('.navbar-toggler').click(() => {
            $textContainer.toggleClass('hidden');
        });
        // *********************************************************************************************

        // **************************  slick-sliders initialized **********************************
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
        // *********************************************************************************************


        // ******************************** hide/show back-to-top-button ********************************
        const backToTopButton = $('#back-to-top-button'),
            firstSection = $('.hero-section'),              //cant make search of 2 first section
            secondSection = $('.section-feature-trip');

        // console.log(firstSection.height());
        // console.log(secondSection.height());

        backToTopButton.hide();

        $(window).scroll(function () {
            let firstTwoSectionHeight = firstSection.height() + secondSection.height(),
                headerNavBar = $('.navbar');

            if ($(this).scrollTop() > firstTwoSectionHeight) {
                backToTopButton.fadeIn();
            } else {
                backToTopButton.fadeOut();
            }

            //
            if ($(this).scrollTop() > 10) {
                headerNavBar.css('padding', '0.5rem 1.5rem');
            } else {
                headerNavBar.css('padding', '2rem 1.5rem');
            }
        });


        backToTopButton.on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            // return false;                                          // !IMPORTANT for what?!?!
        });
        // });
        //
        // *********************************************************************************************

        // *********************************************************************************************
        const   helpMeButton = $('#help-me-button'),
                helpMeBlock = $('#help-me-block'),
                closeHelpBlock = $('#close-block'),
                callMeButton = $('#call-me');
        helpMeBlock.hide();
        helpMeButton.on('click', function () {
            helpMeButton.fadeOut();
            helpMeBlock.fadeIn();
        });
        closeHelpBlock.on('click', function () {
            helpMeButton.fadeIn();
            helpMeBlock.fadeOut();
        })
        callMeButton.on('click', function () {
            helpMeButton.fadeOut();
            helpMeBlock.fadeOut();
        })


    });
})(jQuery);
