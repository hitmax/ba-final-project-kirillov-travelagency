;(function ($) {
    $(function () {

        const $root = $('html'),
            $window = $(window);

        // ******************************** hide/show back-to-top-button **************

        let backToTopButton = $('#back-to-top-button'),
            headerNavBar = $('.navbar');
        const
            sections = $('main > section'),
            firstSection = sections.eq(0),
            secondSection = sections.eq(1),

            firstTwoSectionHeight = firstSection.height() + secondSection.height();

        backToTopButton.hide();

        $window.scroll(function () {
            const scrollVal = $(this).scrollTop();
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

        // *************************************************************************

        // ********************* HELP ME BUTTON AND BLOCK **************************
        const helpMeButton = $('#help-me-button'),
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
        // **************************************************************************

        // ********** RegExp for phone number/email/others and ARRAYS WITH DATA *****
        const regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;
        // regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
        // regExpName = /^[a-zA-Z\s]+$/gm,
        // regExpMessage = /^[a-zA-Z0-9 ]{5,}$/gm;

        // **************************************************************************

        callMeButton.on('click', function (e) {
            const $form = $('#form-help-me-block');
            const phone = $form.find('input').val();
            // const pattern = /^((\+380)+([0-9]){9})$/gm;

            if (regExpPhoneNumber.test(phone)) {
                $form.find('p.not-valid').hide();
                helpMeButton.fadeOut();
                helpMeBlock.fadeOut();
            } else {
                $form.find('p.not-valid').show();
                e.stopImmediatePropagation();
            }
        });


        // ********************* FOR smoothly ANCHORS reaction and scrolling ********

        $('a.anchor').click(function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

            return false;
        });
        // **************************************************************************


        // ********************* Validating form-custom-package  ********************

        $('form.form-custom-package').on('submit', function (e) {
            e.preventDefault();
        });

        // **************************************************************************

        // ********************* Validating form help me block  ********************
        function checkPhoneNumber(e) {
            let phoneNumber = e.find('input[type=tel]');
            console.log(phoneNumber.val());
            if (!regExpPhoneNumber.test(phoneNumber.val())) {
                e.find('p.not-valid').show();
                // phoneNumber.focus;
                // return false;
            }
        }

        $('form#form-help-me-block').on('submit', function (e) {
            checkPhoneNumber($(this));
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        });

        // **************************************************************************

        // ********************* Validating form help me block  ********************

        // (function quantityProducts() {
        //     var $quantityArrowMinus = $(".quantity-arrow-minus");
        //     var $quantityArrowPlus = $(".quantity-arrow-plus");
        //     var $quantityNum = $(".quantity-num");
        //
        //     $quantityArrowMinus.click(quantityMinus);
        //     $quantityArrowPlus.click(quantityPlus);
        //
        //     function quantityMinus() {
        //         if ($quantityNum.val() > 1) {
        //             $quantityNum.val(+$quantityNum.val() - 1);
        //         }
        //     }
        //
        //     function quantityPlus() {
        //         $quantityNum.val(+$quantityNum.val() + 1);
        //     }
        // })();
        let $quantityNum;

        function quantityMinus(elem) {
            if (elem.val() > 0) {
                elem.val(elem.val() - 1);
            }
        }

        function quantityPlus(elem) {
            elem.val(+elem.val() + 1);
        }

        function getHotelStarsCount() {
            return $('input:radio:checked').val();
        }

        function calculateTotalSum(adults, kids, hotel, days) {
            let totalSum;
            if (hotel === 3) {
                totalSum = (adults * 100 + kids * 50) * days;
            } else if (hotel === 4) {
                totalSum = (adults * 150 + kids * 70) * days;
            } else {
                totalSum = (adults * 200 + kids * 90) * days;
            }
            return totalSum;
        }

        $('.quantity-arrow-minus').on('click', function () {
            let input = $(this).siblings('.quantity-num');
            quantityMinus(input);
        });

        $('.quantity-arrow-plus').on('click', function () {
            let input = $(this).siblings('.quantity-num');
            quantityPlus(input);
        });

        $('#calculate-it').on('click', function () {
            let adultsQuantity = +$('#adults-quantity').val(),
                kidsQuantity = +$('#kids-quantity').val(),
                hotelStars = +getHotelStarsCount(),
                amountOfDays = +$('#amount-of-days').val();

            $('#total-price').val(calculateTotalSum(adultsQuantity, kidsQuantity, hotelStars, amountOfDays));

        })

        // **************************************************************************


    });
})(jQuery);