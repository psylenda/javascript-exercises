const sumAll = function(first, second) {
    finalSum = first+second
    if (!Number.isInteger(first) || !Number.isInteger(second) || first < 0 || second < 0) {
        return 'ERROR'
    }
    for (let i = Math.min(first,second)+1; i < Math.max(first,second); i++){
        finalSum += i
    }

    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
