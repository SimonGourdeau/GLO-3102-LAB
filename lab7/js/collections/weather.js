$(function() {
    WeatherCollection = Backbone.Collection.extend({
        model: WeatherModel,
        sync: function(method, model, options){
            options.timeout = 1000;
            options.dataType = "jsonp";
            return Backbone.sync(method, model, options);
        },
        parse: function(response) {
            return response.forecast.simpleforecast.forecastday.splice(0,7);
        }
    });
});