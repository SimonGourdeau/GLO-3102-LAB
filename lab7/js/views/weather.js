$(function() {
    WeatherView = Backbone.View.extend({
        template: _.template($('#forecast-template').html()),
        el: "#forecasts-list",
        initialize: function() {
            _.bindAll(this, 'render');

            var self = this;
            this.collection.bind('sync', function() {
                self.render();
            });
        },
        render: function() {
            this.$el.html(this.template({
                forecasts: this.collection.toJSON()
            }));
        }
    });
});