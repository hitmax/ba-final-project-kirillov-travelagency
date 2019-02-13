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
            helpMeButton.fadeOut();
            helpMeBlock.fadeIn();
        });
        closeHelpBlock.on('click', function () {
            helpMeButton.fadeIn();
            helpMeBlock.fadeOut();
        });
        callMeButton.on('click', function () {
            helpMeButton.fadeOut();
            helpMeBlock.fadeOut();
        });
        // **************************************************************************

        // ********************* FOR smoothly ANCHORS reaction and scrolling ********

        $('a[href^="#"]').click(function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

            return false;
        });
        // **************************************************************************



    });
})(jQuery);