$(function () {
    var baseUrl = "http://api.wunderground.com/api/9a7da060f000557a";
    var forecastFeature = "/forecast10day";
    var geolocalisationFeature = "/geolookup";
    var settings = "/lang:FR";
    var query = "/q/zmw:00000.1.WCYQB";
    var format = ".json";

    var weatherCollection = new WeatherCollection({});
    weatherCollection.url = baseUrl + forecastFeature + settings + query + format;
    var weatherView = new WeatherView({
        collection: weatherCollection
    });

    weatherCollection.fetch().complete(function () {
        weatherView.render();
    });
});
