(function() {
    WeatherModel = Backbone.Model.extend({
        parse: function(forecastday) {
            return forecastday;
        }
    });
})();

