;(function ($) {
    $(function () {

        const $root = $('html'),
            $window = $(window);

        // ******************************** hide/show back-to-top-button **************

        let backToTopButton = $('#back-to-top-button'),
            // firstSection = $('.hero-section'),              //cant make search of 2 first section
            // secondSection = $('.section-feature-trip'),
            headerNavBar = $('.navbar');
        const
            // [firstSection, secondSection] = $('main > section').slice(0, 2),
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
            //    return false;
        });

        // *************************************************************************

        // ********************* HELP ME BUTTON AND BLOCK **************************
        const helpMeButton = $('#help-me-button'),
            helpMeBlock = $('#help-me-block'),
            closeHelpBlock = $('#close-block'),
            callMeButton = $('#call-me');
        helpMeBlock.hide();             // find it in html and set disp none inline
        helpMeButton.on('click', function () {
            $('p.not-valid').hide();
            helpMeButton.fadeOut();
            helpMeBlock.fadeIn();
        });
        closeHelpBlock.on('click', function () {
            helpMeButton.fadeIn();
            helpMeBlock.fadeOut();
        });
        callMeButton.on('click', function () {
            // helpMeButton.fadeOut();
            // helpMeBlock.fadeOut();
        });
        // **************************************************************************

        // ********** RegExp for phone number/email/others and ARRAYS WITH DATA *****
        const   regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;
                // regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
                // regExpName = /^[a-zA-Z\s]+$/gm,
                // regExpMessage = /^[a-zA-Z0-9 ]{5,}$/gm;




        // **************************************************************************


        // ********************* FOR smoothly ANCHORS reaction and scrolling ********

        $('a[href^="#"]').click(function () {
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
                phoneNumber.focus;
                return false;
            }
        }

        $('form#form-help-me-block').on('submit', function (e) {
            e.preventDefault();
            e.stopPropagation();
            checkPhoneNumber($(this));
        });



        // **************************************************************************

    });
})(jQuery);