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