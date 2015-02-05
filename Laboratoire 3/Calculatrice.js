/**
 * Created by SimonG on 1/29/2015.
 */

var Calculator = function () {

    var memory = 0;

    var that = {};

    that.add = function (number) {
        if (isValid(number)) {
            memory = memory + number;
        }
        return that;
    }

    that.minus = function (number) {
        if (isValid(number)) {
            memory = memory - number;
        }
        return that;
    }

    that.multiply = function (number) {
        if (isValid(number)) {
            memory = memory * number;
        }
        return that;
    }

    that.divide = function (number) {
        if (isValid(number)) {
            if (number != 0) {
                memory = memory / number;
            } else {
                throw new Error("Division by zero.");
            }
        }
        return that;
    }

    that.equals = function () {
        return memory;
    }

    that.sin = function (number) {
        if (isValid(number)) {
            memory = Math.sin(number);
        }
        return that;
    }

    that.cos = function (number) {
        if (isValid(number)) {
            memory = Math.cos(number);
        }
        return that;
    }

    that.tan = function (number) {
        if (isValid(number)) {
            memory = Math.tan(number);
        }
        return that;
    }

    that.factorial = function (number) {
        if (isValid(number)) {
            if(!isInt(number)){
                throw new Error("Factorial of a float is undefined.");
            }
            if (number >= 0) {
                var total = 1;
                while (number > 0) {
                    total = total * number;
                    number--;
                }
                memory = total;
            } else {
                throw new Error("Factorial of a negative number is undefined.");
            }
        }
        return that;
    }

    that.clear = function () {
        memory = 0;
    }

    var isValid = function(number){
        if(typeof number === 'number'){
           return true;
        }
        throw new Error("Expected a number : " + number + " is not a number.");
    }

    var isInt = function(number){
        return parseInt(number) === number;
    }

    return that;
}