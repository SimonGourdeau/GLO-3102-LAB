$( document ).ready(function() {
    var calculator = new Calculator();
    var currentNumber = 0;
    var operator;
    var refreshNumber = false;

    $(".number").click(function() {
        if(refreshNumber) {
            $("#Result").val(this.value);
        } else {
            $("#Result").val(this.value + $("#Result").val());
        }
    });

    $(".operand").click(function() {
        currentNumber = $("#Result").val();
        operator = this.value;
        refreshNumber = true;
    });

    $("#sin").click(function() {
        currentNumber = $("#Result").val();
        currentNumber = calculator.sin(currentNumber);
        $("#Result").fadeOut("slow", function() {
            $("#Result").val(currentNumber).fadeIn();
        });
        refreshNumber = true;
    });

    $("#cos").click(function() {
        currentNumber = $("#Result").val();
        currentNumber = calculator.cos(currentNumber);
        $("#Result").fadeOut("slow", function() {
            $("#Result").val(currentNumber).fadeIn();
        });
        refreshNumber = true;
    });

    $("#tan").click(function() {
        currentNumber = $("#Result").val();
        currentNumber = calculator.tan(currentNumber);
        $("#Result").fadeOut("slow", function() {
            $("#Result").val(currentNumber).fadeIn();
        });
        refreshNumber = true;
    });

    $("#fact").click(function() {
        currentNumber = $("#Result").val();
        currentNumber = calculator.factorial(currentNumber);
        $("#Result").fadeOut("slow", function() {
            $("#Result").val(currentNumber).fadeIn();
        });
        refreshNumber = true;
    });

    $("#equal").click(function() {
       switch(operator) {
           case "+":
               currentNumber = calculator.add(parseFloat(currentNumber), parseFloat($("#Result").val()));
               break;
           case "-":
               currentNumber = calculator.substract(parseFloat(currentNumber), parseFloat($("#Result").val()));
               break;
           case "*":
               currentNumber = calculator.multiply(parseFloat(currentNumber), parseFloat($("#Result").val()));
               break;
           case "/":
               currentNumber = calculator.divide(parseFloat(currentNumber), parseFloat($("#Result").val()));
               break;
           default:
               break;
       }
        $("#Result").fadeOut("slow", function() {
            $("#Result").val(currentNumber).fadeIn();
        });
        refreshNumber = true;
    });
});

function Calculator()
{
    this.memorizedValue = 0;
}

Calculator.prototype.add = function(val1 , val2)
{
    return (val1+val2);
}

Calculator.prototype.substract = function(val1 , val2)
{
    return (val1-val2);
}

Calculator.prototype.multiply = function(val1 , val2)
{
    return (val1*val2);
}

Calculator.prototype.divide = function(val1 , val2)
{
    if(val2==0) {
        return NaN;
    }
    return (val1/val2);
}

Calculator.prototype.sin = function(n)
{
    return Math.sin(n);
}

Calculator.prototype.cos = function(n)
{
    return Math.cos(n);
}

Calculator.prototype.tan = function(n)
{
    return Math.tan(n);
}

Calculator.prototype.memorize = function(n)
{
    if(typeof n === 'number') {
        this.memorizedValue = n;
    }
}

Calculator.prototype.getMemorizedValue = function()
{
    return this.memorizedValue;
}

Calculator.prototype.factorial = function(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    if (n > 0) {
        return this.factorial(n-1) * n;
    }
}