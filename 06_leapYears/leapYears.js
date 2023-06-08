const leapYears = function(yearInput) {
    if (!Number.isInteger(yearInput)|| yearInput < 0){
        return 'ERROR';
    }
    if (yearInput % 4 == 0 && (yearInput % 100 != 0 || yearInput % 400 == 0)) {
        return true;
    }
    else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
