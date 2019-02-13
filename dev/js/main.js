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
