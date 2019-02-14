;(function ($) {
    $(function () {

        const $window = $(window);

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

        const $textContainer = $('.text-container');

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
        const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gm,
            regExpName = /^[a-zA-Z\s]+$/gm,
            regExpMessage = /^[a-zA-Z0-9 ]{5,}$/gm,
            regExpPhoneNumber = /^((\+380)+([0-9]){9})$/gm;

        let $subscribeButton = $('#subscribe');

        $subscribeButton.on('click', function (e) {
            e.preventDefault();
            let $form = $('#subscribe-email'),
                email = $subscribeButton.siblings('input').val(),
                emailMatched = email.match(regExpEmail);
            // emailConfirm = regExpEmail.test(email);
            // console.log(email);
            // console.log(email.match(regExpEmail));
            // console.log(emailConfirm);
            // if (emailConfirm) {
            if (emailMatched) {
                $form.find('p.not-valid').hide();
                $form.find('p.valid').show();
                console.log(1);
            } else {
                $form.find('p.not-valid').show();
                $form.find('p.valid').hide();
                console.log(2);
                // e.stopImmediatePropagation();
            }
        });


        let $sendMessage = $('#send-message'),
            $form = $('#feedback-message');

        $form.on('submit', function (e) {
            // e.stopPropagation();
            // e.preventDefault();

            let $name = $form.find('#message-name');

            if ($name.val().match(regExpName)) {
                $name.siblings('p.not-valid').hide();
                $name.siblings('p.valid').show();
            } else {
                $name.siblings('p.not-valid').show();
                $name.siblings('p.valid').hide();
            }

            let $email = $form.find('#message-email');

            if ($email.val().match(regExpEmail)) {
                $email.siblings('p.not-valid').hide();
                $email.siblings('p.valid').show();
            } else {
                $email.siblings('p.not-valid').show();
                $email.siblings('p.valid').hide();
            }

            let $tel = $form.find('#message-tel');

            if ($tel.val().match(regExpPhoneNumber)) {
                $tel.siblings('p.not-valid').hide();
                $tel.siblings('p.valid').show();
            } else {
                $tel.siblings('p.not-valid').show();
                $tel.siblings('p.valid').hide();
            }

            let $country = $form.find('#message-country');

            if ($country.val().match(regExpName)) {
                $country.siblings('p.not-valid').hide();
                $country.siblings('p.valid').show();
            } else {
                $country.siblings('p.not-valid').show();
                $country.siblings('p.valid').hide();
            }

            let $text = $form.find('#message-text');

            if ($text.val().match(regExpMessage)) {
                $text.siblings('p.not-valid').hide();
                $text.siblings('p.valid').show();
            } else {
                $text.siblings('p.not-valid').show();
                $text.siblings('p.valid').hide();
            }

            let $inputQuestion = $form.find('#inputQuestion');

            if ($inputQuestion.val() != 0) {
                $inputQuestion.siblings('p.not-valid').hide();
                $inputQuestion.siblings('p.valid').show();
            } else {
                $inputQuestion.siblings('p.not-valid').show();
                $inputQuestion.siblings('p.valid').hide();
            }


        })


        // **************************************************************************


    });
})(jQuery);


var map,
    infoWindowContent = document.getElementsByClassName('info-map')[0].outerHTML;

function initMap() {
    var TravelAgency = {lat: 40.748489, lng: -73.985654},
        map = new google.maps.Map(document.getElementById('g-map'), {
            center: {lat: 40.747000, lng: -73.985654},
            zoom: 14,
            styles: [
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "hue": 149
                        },
                        {
                            "saturation": -78
                        },
                        {
                            "lightness": 0
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "hue": -31
                        },
                        {
                            "saturation": -40
                        },
                        {
                            "lightness": 2.8
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "label",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": 163
                        },
                        {
                            "saturation": -26
                        },
                        {
                            "lightness": -1.1
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "hue": 3
                        },
                        {
                            "saturation": -24.24
                        },
                        {
                            "lightness": -38.57
                        }
                    ]
                }
            ]
        }),

        marker = new google.maps.Marker({
            position: TravelAgency,
            map: map,
            animation: google.maps.Animation.BOUNCE,
            title: 'TravelAgency'
        });

    marker.setMap(map);
    // marker.initMap(map);
}
