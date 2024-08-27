function initMap() {
    var location = { lat: -34.397, lng: 150.644 }; // Update with actual coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

