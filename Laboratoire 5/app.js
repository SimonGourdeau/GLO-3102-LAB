/**
 * Created by SimonG on 2/11/2015.
 */
var renderer = TaskRenderer();
var tasker = TaskResource('http://localhost:5000', renderer);

function updateTask(e){
    $("#spinner").show();
    $("#content").hide();
    var id = $(e).data('id');
    var task = {task: e.textContent};
    tasker.updateTask(id, task);
};

function deleteTask(e){
    $("#spinner").show();
    $("#content").hide();
    var id = $(e).data('id');
    tasker.deleteTask(id);
}

$(document).ready(function () {
    tasker.getTasks();
    $('#btn-add').click(function(){
        $("#spinner").show();
        $("#content").hide()
        tasker.createTask();
    })
});
