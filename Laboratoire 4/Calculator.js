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
