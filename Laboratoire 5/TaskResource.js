/**
 * Created by SimonG on 2/10/2015.
 */

var TaskResource = function (url, taskRenderer) {
    var that = {};
    var renderer = taskRenderer;
    var location = url;

    var renderTaskList = function (response) {
        renderer.renderTasks(response.tasks);
    }

    var handleError = function (error) {
        alert("There was an error communicating with the RESTful API : " + error.status);
    }

    that.getTasks = function () {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: location + '/tasks',
            success: renderTaskList,
            error: handleError
        });
    };

    that.createTask = function () {
        $.ajax({
            type: 'POST',
            url: location + '/tasks',
            data: JSON.stringify({task:''}),
            dataType: 'json',
            contentType: 'application/json',
            success: renderTaskList,
            error: handleError
        });
    };

    that.updateTask = function (taskId, task) {
        $.ajax({
            type: 'PUT',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(task),
            url: location + '/tasks/' + taskId,
            success: renderTaskList,
            error: handleError
        });
    }

    that.deleteTask = function (taskId) {
        $.ajax({
            type: 'DELETE',
            dataType: 'json',
            url: location + '/tasks/' + taskId,
            success: renderTaskList,
            error: handleError
        });
    }

    return that;

}