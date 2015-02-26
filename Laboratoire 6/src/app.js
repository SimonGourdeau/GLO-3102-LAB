/**
 * Created by SimonG on 2/11/2015.
 */

function updateTask(e){
    $("#spinner").show();
    $("#content").hide();
    var id = $(e).data('id');
    var task = {task: e.textContent};
};

function deleteTask(e){
    $("#spinner").show();
    $("#content").hide();
    var id = $(e).data('id');
}

$(document).ready(function () {
    $('#btn-add').click(function(){
        $("#spinner").show();
        $("#content").hide()
    })
});
