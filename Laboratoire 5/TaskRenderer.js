/**
 * Created by SimonG on 2/11/2015.
 */

var TaskRenderer = function () {
    var that = {};
    var template = '<div id="{id}" class="task">' +
        '<img src="delete.png" data-id="{id}" onclick="deleteTask(this)"></img>' +
        '<div class="description" data-id="{id}" contentEditable onblur="updateTask(this)">{task}</div>' +
        '</div>';

    var render = function (task) {
        var populated = template.replace(/\{id\}/g, task.id);
        populated = populated.replace(/\{task\}/g, task.task);
        return populated;
    }

    that.renderTasks = function (tasks) {
        html = '';
        $.each(tasks, function (index, task) {
            html += render(task);
        });
        $('#tasks').html(html);
        $("#content").show();
        $("#spinner").hide();
    }

    return that;

}
