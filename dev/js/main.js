;(function ($) {
    $(function () {

        // ***** hide/show textContainer in hero-section when burger-button clicked ***
        const $textContainer = $('.text-container');

        $('.navbar-toggler').click(() => {
            $textContainer.toggleClass('hidden');
        });
        // ****************************************************************************


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
        // ****************************************************************************


        const $root = $('html');

        // ******************************** hide/show back-to-top-button **************
        let backToTopButton = $('#back-to-top-button'),
            // firstSection = $('.hero-section'),              //cant make search of 2 first section
            // secondSection = $('.section-feature-trip'),
            $window = $(window),
            headerNavBar = $('.navbar');
        const
            // [firstSection, secondSection] = $('main > section').slice(0, 2),
            sections = $('main > section'),
            firstSection = sections.eq(0),
            secondSection = sections.eq(1),

            firstTwoSectionHeight = firstSection.height() + secondSection.height();

        // console.log([firstSection, secondSection]);
        console.log(firstSection.height());
        console.log(secondSection.height());
        console.log(firstTwoSectionHeight);




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
            debugger;
            $root.animate({
                scrollTop: 0
            }, 1000);
        //    return false;                                          // !IMPORTANT for what?!?! try to delete
        });
        // });
        //
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
        //try to slice it from array


        $window.on('mousemove', function (e) {

            // console.log('x' + e.clientX);
            // console.log('y' + e.clientY);
            // console.log('top' + shadow.position().top);
            // console.log('left' + shadow.position().left);

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

        // ********************* PARALLAX EFFECT FOR PLANE AND SHADOW ***************

        $('a[href^="#"]').click(function () {
            $root.animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);

            return false;
        });
        // **************************************************************************


    });
})(jQuery);


var map,
    infoWindowContent = document.getElementsByClassName('info-map')[0].outerHTML;

function initMap() {
    var TravelAgency = {lat: 40.748489, lng: -73.985654},
        map = new google.maps.Map(document.getElementById('g-map'), {
            center: {lat: 40.738298, lng: -73.985654},
            zoom: 14,
            styles: [
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "color": "#19a0d8"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "weight": 6
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#e85113"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#efe9e4"
                        },
                        {
                            "lightness": -40
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#efe9e4"
                        },
                        {
                            "lightness": -20
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "lightness": 100
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "lightness": -100
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon"
                },
                {
                    "featureType": "landscape",
                    "elementType": "labels",
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
                            "lightness": 20
                        },
                        {
                            "color": "#efe9e4"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "lightness": 100
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "lightness": -100
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "hue": "#11ff00"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "lightness": 100
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "hue": "#4cff00"
                        },
                        {
                            "saturation": 58
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#f0e4d3"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#efe9e4"
                        },
                        {
                            "lightness": -25
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#efe9e4"
                        },
                        {
                            "lightness": -10
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                }
            ]
        }),

        marker = new google.maps.Marker({
            position: TravelAgency,
            map: map,
            title: 'TravelAgency'
        });

    marker.setMap(map);
    // marker.initMap(map);
}
