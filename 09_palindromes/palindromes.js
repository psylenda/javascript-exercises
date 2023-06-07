const palindromes = function (input) {
    processed = input.toLowerCase().replace(/[^a-z]/g, "");
    reverseInput = processed.split("").reverse().join("");
    return reverseInput == processed;

};

// Do not edit below this line
module.exports = palindromes;
