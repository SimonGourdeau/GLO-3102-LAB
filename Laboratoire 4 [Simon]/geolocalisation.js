window.setInterval(function () {
    getLocation();
}, 3000);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geolocalisation = document.getElementById('geolocalisation');
        geolocalisation.innerHTML = "Active la géolocalisation dans ton browser si tu veux que ça fonctionne";
    }
}
function showPosition(position) {
    geolocalisation = document.getElementById('geolocalisation');
    geolocalisation.innerHTML =  "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}
