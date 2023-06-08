const sumAll = function(first,second) {
    if (!Number.isInteger(first) || !Number.isInteger(second)|| first < 0 || second < 0){
        return 'ERROR'
    }
    var returnValue = first+second;
    for (let i = Math.min(first,second)+1; i < Math.max(first,second); i++){
        returnValue += i;
    } 
    return returnValue
};

// Do not edit below this line
module.exports = sumAll;
