var TaskCollection = Backbone.Collection.extend({
    url: function () {
        return 'http://localhost:5000/tasks';
    },
    parse: function(data){
        return data.tasks;
    },
    model: Task
});