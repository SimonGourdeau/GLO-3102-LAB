$(document).ready(function () {
    var calculator = Calculator();
    $(".value").click(function () {
        calculator.value($(this).data('value'));
        updateScreen();
    });

    $(".operator").click(function () {
        calculator.operator($(this).data('operator'));
        updateScreen();
    });

    $("#equals").click(function () {
        calculator.equals();
        updateScreen();
    });

    $("#minus").click(function () {
        calculator.minus();
        updateScreen();
    });

    $("#clear").click(function () {
        calculator.clear();
        updateScreen();
    });

    $("#memoryAdd").click(function () {
        calculator.addMemory();
    });

    $("#memorySub").click(function () {
        calculator.subMemory();
    });

    $("#memoryClear").click(function(){
        calculator.clearMemory();
    });

    $("#memoryRecall").click(function(){
        calculator.getMemory();
        updateScreen();
    });

    $('#sin').click(function(){
        calculator.sin();
        updateScreen();
    });
    $('#cos').click(function(){
        calculator.cos();
        updateScreen();
    });
    $('#tan').click(function(){
        calculator.tan();
        updateScreen();
    });

    $("#factorial").click(function(){
        calculator.factorial();
        updateScreen()
    });

    function updateScreen() {
        $('#equation').text(calculator.getEquation());
        $('#currentValue').text(calculator.getValue());
    }
});