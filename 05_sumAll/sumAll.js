const sumAll = function(a, b) {
if (a < 0 || !Number.isInteger(a) || b < 0 || !Number.isInteger(b)) {
     return "ERROR";
} else {
    let sum = 0
    numberA = Math.min(a,b)
    numberB = Math.max(a,b)
    while (numberA <= numberB) {
        sum = sum + numberA;
        numberA++;
        }
    return sum
}
};

// Do not edit below this line
module.exports = sumAll;
