var str = "12/5*9+9.4*2".replace(/[^-()\d/*+.]/g, '');
var Calculator = function () {
    var memory = '';
    var currentValue = '';
    var equation = '';

    var sin = Math.sin;
    var cos = Math.cos;
    var tan = Math.tan;


    this.value = function (value) {
        if (typeof value !== 'undefined') {
            currentValue += parseFloat(value);
        }
        return this;
    }

    this.getValue = function () {
        return currentValue;
    }

    this.getEquation = function () {
        return equation;
    }

    // Réinitialiser l'équation
    this.clear = function () {
        equation = '';
        currentValue = '';
        return this;
    }

    this.operator = function (operator) {
        if (currentValue !== '') {
            equation += ' ' + currentValue + ' ' + operator;
            currentValue = '';
        }
    }

    this.minus = function () {
        if (!isNaN(parseFloat(currentValue))) {
            currentValue = (-parseFloat(currentValue)).toString();
        }
    }

    this.sin = function () {
        currentValue = 'sin(' + parseFloat(currentValue) + ')';
        return this;
    }

    this.cos = function () {
        currentValue = 'cos(' + parseFloat(currentValue) + ')'
        return this;
    }

    this.tan = function () {
        currentValue = 'tan(' + parseFloat(currentValue) + ')'
        return this;
    }

    this.addMemory = function () {
        memory += parseFloat(currentValue);
    }
    this.subMemory = function () {
        memory -= parseFloat(currentValue);
    }

    this.getMemory = function () {
        currentValue = memory.toString();
    }

    this.clearMemory = function () {
        memory = '';
    }

    this.factorial = function () {
        currentValue = 'factorial(' + parseFloat(currentValue) + ')'
        return this;
    }

    var f = [];
    var factorial = function (n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        if (f[n] > 0) {
            return f[n];
        }
        return f[n] = factorial(n - 1) * n;
    }

    this.equals = function () {
        // Il faut être très prudent avec eval !!! Eval pourrait permettre d'injecter du code malicieux et l'exécuter
        // C'est pourquoi toutes nos variables 'value' sont passées dans 'parseFloat'
        equation = equation + ' ' + currentValue;
        console.log('Evaluating :', equation);
        var equationSolution = eval(equation);
        equation = '';
        currentValue = equationSolution.toString();
    }

    return this;
}
