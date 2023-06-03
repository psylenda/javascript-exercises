const repeatString = function(str,num) {
    returnVal = ""
    if (num == 0) {
        return returnVal
    }
    else if (num == 1) {
        return str
    }
    else if (num < 0) {
        return "ERROR"
    }
    for (let i = 0; i < num; i++) {
        returnVal += str
    }
    return returnVal
};

// Do not edit below this line
module.exports = repeatString;
