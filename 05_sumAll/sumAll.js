const sumAll = function(num1, num2) {
    let largerNumber = num1;
    if (num1 <0 || num2 <0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    if (num2 > num1) {
        largerNumber = num2;
    }
    return largerNumber*(largerNumber + 1)/2;
};

// Do not edit below this line
module.exports = sumAll;
