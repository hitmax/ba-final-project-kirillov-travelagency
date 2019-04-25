;(function ($) {
    $(function () {

        var $root = $('html'),
            $window = $(window);

        // ********** hide/show back-to-top-button and header's padding ************
        $(document).ready(function () {
            var backToTopButton = $('#back-to-top-button'),
                headerNavBar = $('.navbar');

            var sections = $('main > section'),
                firstSection = sections.eq(0),
                secondSection = sections.eq(1),
                firstTwoSectionHeight = firstSection.height() + secondSection.height();

            backToTopButton.hide();

            $window.scroll(function () {
                var scrollVal = $(this).scrollTop();
                if (scrollVal > firstTwoSectionHeight) {
                    backToTopButton.fadeIn();
                } else {
                    backToTopButton.fadeOut();
                }

                if (scrollVal > 10) {
                    headerNavBar.css('padding', '0.5rem 1.5rem');
                } else {
                    headerNavBar.css('padding', '2rem 1.5rem');
                }
            });
            backToTopButton.on('click', function () {
                $root.animate({
                    scrollTop: 0
                }, 1000);
            });
        });




        // *************************************************************************

        // ********************* HELP ME BUTTON AND BLOCK **************************
        var helpMeButton = $('#help-me-button'),
            helpMeBlock = $('#help-me-block'),
            closeHelpBlock = $('#close-block'),
            callMeButton = $('#call-me');
        helpMeBlock.hide();
        helpMeButton.on('click', function () {
            $('p.not-valid').hide();
            helpMeButton.fadeOut();
            helpMeBlock.fadeIn();
        });
        closeHelpBlock.on('click', function () {
            helpMeButton.fadeIn();
            helpMeBlock.fadeOut();
        });

        // ********************* Validating form help me block  ********************
        var regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;
        callMeButton.on('click', function (e) {
            var $form = $('#form-help-me-block');
            var phone = $form.find('input').val();

            if (regExpPhoneNumber.test(phone)) {
                $form.find('p.not-valid').hide();
                helpMeButton.fadeOut();
                helpMeBlock.fadeOut();
            } else {
                $form.find('p.not-valid').show();
                e.stopImmediatePropagation();
            }
        });

        // **************************************************************************

        // ********************* FOR smoothly ANCHORS reaction and scrolling ********

        $('a.anchor').click(function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

            return false;
        });
        // **************************************************************************

    });
})(jQuery);
;(function ($) {
    $(function () {

// ********************* section with calculator  ********************

        var adultPrice3starHotel = 100,
            adultPrice4starHotel = 150,
            adultPrice5starHotel = 200,
            kidsPrice3starHotel = 50,
            kidsPrice4starHotel = 70,
            kidsPrice5starHotel = 90;

        function quantityMinus(elem) {
            if (elem.val() > 0) {
                elem.val(elem.val() - 1);
            }
        }

        function quantityPlus(elem) {
            if (elem.val() < 30) {
                elem.val(+elem.val() + 1);
            }
        }

        function getHotelStarsCount() {
            return $('input:radio:checked').val();
        }

        function calculateTotalSum(adults, kids, hotel, days) {
            var totalSum;
            if (hotel === 3) {
                totalSum = (adults * adultPrice3starHotel + kids * kidsPrice3starHotel) * days;
            } else if (hotel === 4) {
                totalSum = (adults * adultPrice4starHotel + kids * kidsPrice4starHotel) * days;
            } else {
                totalSum = (adults * adultPrice5starHotel + kids * kidsPrice5starHotel) * days;
            }

            return totalSum;
        }

        $('.quantity-arrow-minus').on('click', function () {
            var input = $(this).siblings('.quantity-num');
            quantityMinus(input);
        });

        $('.quantity-arrow-plus').on('click', function () {
            var input = $(this).siblings('.quantity-num');
            quantityPlus(input);
        });

        $('#calculate-it').on('click', function () {
            var adultsQuantity = +$('#adults-quantity').val(),
                kidsQuantity = +$('#kids-quantity').val(),
                hotelStars = +getHotelStarsCount(),
                amountOfDays = +$('#amount-of-days').val(),
                standartPrice = calculateTotalSum(adultsQuantity, kidsQuantity, hotelStars, amountOfDays),
                discount;

            if (amountOfDays >= 10) {
                discount = standartPrice * 0.1
            } else discount = 0;

            var totalPrice = standartPrice - discount;

            $('#standart-price').text(standartPrice);

            $('#discount').text(discount);

            $('#total-price').text(totalPrice);
        });

// **************************************************************************

    });
})(jQuery);
;(function ($) {
    $(function () {

        var $window = $(window);

// **************************  slick-sliders initialized **********************

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
            pauseOnHover: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1220,
                    settings: {
                        arrows: false,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        fade: true,
                        slidesToShow: 1
                    }
                }
            ]
        });

        $('.section-tour-packages-slider').slick({
            arrows: true,
            fade: false,
            dots: false,
            autoplay: true,
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
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 1
                    }
                }
            ]
        });

        // ****************************************************************************

        // ***** hide/show textContainer in hero-section when burger-button clicked ***

        var $textContainer = $('.text-container');

        $('.navbar-toggler').click(function () {
            $textContainer.toggleClass('hidden');
        });

        // ****************************************************************************

        // ********************* PARALLAX EFFECT FOR PLANE AND SHADOW ***************

        var plane = $('#plane'),
            shadow = $('#shadow'),
            clouds1 = $('#clouds-1'),
            clouds2 = $('#clouds-2'),
            planeTop = plane.position().top,
            planeLeft = plane.position().left,
            shadowTop = shadow.position().top,
            shadowLeft = shadow.position().left,
            clouds1Top = clouds1.position().top,
            clouds1Left = clouds1.position().left,
            clouds2Top = clouds2.position().top,
            clouds2Left = clouds2.position().left;

        $window.on('mousemove', function (e) {

            plane.css({
                left: planeLeft - e.clientX / 3 + 150,
                top: planeTop - e.clientY / 12,
                transform: 'rotate3d(-1, 1, 0' + e.clientY / 40 + ' , ' + -(e.clientY / 30) + 'deg)',

            });
            shadow.css({
                left: shadowLeft - e.clientX / 4 + 150,
                top: shadowTop - e.clientY / 20,
                transform: 'rotate3d(-1, 1, 0' + e.clientY / 40 + ' , ' + -(e.clientY / 30) + 'deg)'
            });
            clouds1.css({
                left: clouds1Left + e.clientX / 100,
                top: clouds1Top - e.clientY / 80 - 200 + 'px'
            });
            clouds2.css({
                left: clouds2Left - e.clientX / 20,
                top: clouds2Top + e.clientY / 40 - 150 + 'px'
            });

        });

        // **************************************************************************

        // ************ validation for subscribe email form and message *************
        var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
            regExpName = /^[a-zA-Z\s]+$/gm,
            regExpMessage = /^[a-zA-Z0-9 ]{5,}$/gm,
            regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;

        function validate($element, pattern) {
            if ($element.val().match(pattern)) {
                $element.siblings('p.not-valid').hide();
                $element.siblings('p.valid').show();
            } else {
                $element.siblings('p.not-valid').show();
                $element.siblings('p.valid').hide();
            }
        }

        var $subscribeButton = $('#subscribe');

        $subscribeButton.on('click', function (e) {
            e.preventDefault();
            var $email = $subscribeButton.siblings('input');

            validate($email, regExpEmail);

        });

        var $form = $('#feedback-message');

        $form.on('submit', function () {

            var $name = $form.find('#message-name'),
                $email = $form.find('#message-email'),
                $tel = $form.find('#message-tel'),
                $country = $form.find('#message-country'),
                $text = $form.find('#message-text');

            var $inputQuestion = $form.find('#inputQuestion');

            if ($inputQuestion.val() != 0) {
                $inputQuestion.siblings('p.not-valid').hide();
                $inputQuestion.siblings('p.valid').show();
            } else {
                $inputQuestion.siblings('p.not-valid').show();
                $inputQuestion.siblings('p.valid').hide();
            }

            validate($name, regExpName);

            validate($email, regExpEmail);

            validate($tel, regExpPhoneNumber);

            validate($country, regExpName);

            validate($text, regExpMessage);

        });

        // **************************************************************************

        // ****************** countTo animate for awards section ********************

        var show = true,
            $countbox = $(".section-awards"),
            $countToClients = $('.count-to-clients'),
            $countToMembers = $('.count-to-members'),
            $countToTours = $('.count-to-tours'),
            $countToAwards = $('.count-to-awards');
        $window.on("scroll load resize", function () {
            if (!show) return false;
            var w_top = $window.scrollTop(),
                e_top = $countbox.offset().top,
                w_height = $window.height(),
                d_height = $(document).height(),
                e_height = $countbox.outerHeight();
            if (w_top + w_height - e_height >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

                $countToClients.spincrement({
                    thousandSeparator: "",
                    duration: 2000
                });
                $countToMembers.spincrement({
                    thousandSeparator: "",
                    duration: 3000
                });
                $countToTours.spincrement({
                    thousandSeparator: "",
                    duration: 4000
                });
                $countToAwards.spincrement({
                    thousandSeparator: "",
                    duration: 5000
                });

                show = false;
            }
        });


        // **************************************************************************

    });
})(jQuery);



