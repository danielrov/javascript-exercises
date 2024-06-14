const reverseString = function(word) {
 letters = word.length
 reverseWord = ""
 while (letters > 0) {
    reverseWord = reverseWord + word.charAt(letters-1);
    letters--
 }
 return reverseWord
};

// Do not edit below this line
module.exports = reverseString;
