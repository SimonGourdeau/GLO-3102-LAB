var TaskView = Backbone.View.extend({
    el: '#tasks',
    loader: '#loader',
    initialize: function () {
        this.template = _.template($("#task_template").html());
        var self = this;
        this.collection.fetch({
            success: function () {
                self.render();
                $(self.loader).hide();
            }
        })
    },
    events: {
        'click #btn-add': 'addTask',
        'click .delete-button': 'removeTask',
        'blur .description': 'saveTask'
    },
    render: function () {
        $(this.el).empty();
        var self = this;
        this.collection.each(function (task) {
            $(self.el).append(self.template(task.toJSON()));
        });
        $(this.el).append('<div id="btn-add" class="round-btn"><strong>+</strong></div>');
        return this;
    },
    addTask: function () {
        var self = this;
        $(this.loader).show();
        this.collection.create(new Task(), {
            success: function (taskAdded, collection) {
                self.collection.reset(collection.tasks);
                self.render();
                $(self.loader).hide();
            }
        });
    },
    removeTask: function (e) {
        var id = $(e.currentTarget).data("id");
        var taskToDelete = this.collection.get(id);
        var self = this;
        $(this.loader).show();
        taskToDelete.destroy({success:function(){
            self.collection.remove(taskToDelete);
            self.render();
            $(self.loader).hide();
        }});
    },
    saveTask: function(e){
        var id = $(e.currentTarget).data("id");
        var taskToSave = this.collection.get(id);
        taskToSave.set({task :$(e.currentTarget).text()});
        var self = this;
        taskToSave.save();
    }
});