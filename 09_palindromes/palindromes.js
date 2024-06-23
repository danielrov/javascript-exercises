// Write a function that determines whether or not a given string is a palindrome.

// A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:

const palindromes = function (string) {
    array = string
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"")
        .toLowerCase()
        .split("");
    arrayReverse = array.slice().reverse().join();
    array = array.join();
    return array == arrayReverse;
};

// Do not edit below this line
module.exports = palindromes;
