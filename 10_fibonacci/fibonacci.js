
const fibonacci = function(input) {
    if (input == 1) {
        return 1;
    }
    else if (input == 0) {
        return 0;
    }
    return fibonacci(input-2) + fibonacci(input-1)
};

// Do not edit below this line
module.exports = fibonacci;
