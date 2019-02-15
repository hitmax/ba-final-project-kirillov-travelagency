;(function ($) {
    $(function () {

        let $window = $(window);

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

        let $textContainer = $('.text-container');

        $('.navbar-toggler').click(function () {
            $textContainer.toggleClass('hidden');
        });

        // ****************************************************************************

        // ********************* PARALLAX EFFECT FOR PLANE AND SHADOW ***************


        let plane = $('#plane'),
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
        let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
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

        let $subscribeButton = $('#subscribe');

        $subscribeButton.on('click', function (e) {
            e.preventDefault();
            let $email = $subscribeButton.siblings('input');

            validate($email, regExpEmail);

        });

        let $form = $('#feedback-message');

        $form.on('submit', function () {

            let $name = $form.find('#message-name'),
                $email = $form.find('#message-email'),
                $tel = $form.find('#message-tel'),
                $country = $form.find('#message-country'),
                $text = $form.find('#message-text');

            let $inputQuestion = $form.find('#inputQuestion');

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

        let show = true,
            $countbox = $(".section-awards"),
            $countToClients = $('.count-to-clients'),
            $countToMembers = $('.count-to-members'),
            $countToTours = $('.count-to-tours'),
            $countToAwards = $('.count-to-awards');
        $window.on("scroll load resize", function () {
            if (!show) return false;
            let w_top = $window.scrollTop(),
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


var map,
    infoWindowContent = document.getElementsByClassName('info-map')[0].outerHTML;

function initMap() {
    var TravelAgency = {lat: 40.748489, lng: -73.985654},
        map = new google.maps.Map(document.getElementById('g-map'), {
            center: {lat: 40.747000, lng: -73.985654},
            zoom: 14
        }),

        marker = new google.maps.Marker({
            position: TravelAgency,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'TravelAgency'
        });

}
