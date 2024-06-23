const fibonacci = function(number) {


    const array = [1 , 1];
   
    for (let index = 1; index <= +number; index++) {
        array.push(array.at(-1) + array.at(-2))
    }

    if (number == 0) {
        return 0
    } if (number < 1) {
        return "OOPS"
    } else {
        return array[number - 1]
    }

};

// Do not edit below this line
module.exports = fibonacci;
