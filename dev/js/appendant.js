;(function ($) {
    $(function () {

        const $root = $('html'),
            $window = $(window);

        // ********** hide/show back-to-top-button and header's padding ************

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

        // ********************* Validating form help me block  ********************
        const regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;
        callMeButton.on('click', function (e) {
            const $form = $('#form-help-me-block');
            const phone = $form.find('input').val();

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