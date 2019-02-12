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


        const $root = $('body,html');

        // ******************************** hide/show back-to-top-button **************
        let backToTopButton = $('#back-to-top-button'),
            firstSection = $('.hero-section'),              //cant make search of 2 first section
            secondSection = $('.section-feature-trip'),
            $window = $(window);


        // console.log(firstSection.height());
        // console.log(secondSection.height());

        backToTopButton.hide();

        $window.scroll(function () {
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
            $root.animate({
                scrollTop: 0
            }, 1000);
            // return false;                                          // !IMPORTANT for what?!?!
        });
        // });
        //
        // *************************************************************************

        // ********************* HELP ME BUTTON AND BLOCK **************************
        const helpMeButton = $('#help-me-button'),
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


        $window.on('mousemove', function (e) {
            console.log('x' + e.clientX);
            console.log('y' + e.clientY);
            console.log('top' + shadow.position().top);
            console.log('left' + shadow.position().left);
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
    var TravelAgency = {lat: 40.680191, lng: -73.902404},
        map = new google.maps.Map(document.getElementById('g-map'), {
            center: {lat: 40.670000, lng: -73.902404},
            zoom: 14,
            styles: [{
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [{"saturation": 36}, {"color": "#333333"}, {"lightness": 40}]
            }, {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#ffffff"}, {"lightness": 16}]
            }, {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#fefefe"}, {"lightness": 20}]
            }, {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#fefefe"}, {"lightness": 17}, {"weight": 1.2}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"lightness": 20}, {"color": "#ececec"}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "all",
                "stylers": [{"visibility": "on"}, {"color": "#f0f0ef"}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#f0f0ef"}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{"visibility": "on"}, {"color": "#d4d4d4"}]
            }, {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [{"visibility": "on"}, {"color": "#ececec"}]
            }, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "on"}]}, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"lightness": 21}, {"visibility": "off"}]
            }, {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#d4d4d4"}]
            }, {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#303030"}]
            }, {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [{"saturation": "-100"}]
            }, {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#dedede"}, {"lightness": 21}]
            }, {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "poi.school",
                "elementType": "geometry.stroke",
                "stylers": [{"lightness": "-61"}, {"gamma": "0.00"}, {"visibility": "off"}]
            }, {
                "featureType": "poi.sports_complex",
                "elementType": "all",
                "stylers": [{"visibility": "on"}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ffffff"}, {"lightness": 17}]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#ffffff"}, {"lightness": 29}, {"weight": 0.2}]
            }, {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 18}]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"color": "#ffffff"}, {"lightness": 16}]
            }, {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [{"color": "#f2f2f2"}, {"lightness": 19}]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#dadada"}, {"lightness": 17}]
            }]
        }),

        marker = new google.maps.Marker({
            position: TravelAgency,
            map: map,
            title: 'TravelAgency'
        });

    // marker.setMap(map);
    marker.initMap(map);
}
