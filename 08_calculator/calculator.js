const add = function(first,second) {
	return first+second;
};

const subtract = function(first,second) {
	return first-second;
};

const sum = function(arrInput) {
	returnValue = 0;
  if (arrInput.length == 0) {
    return 0
  }
  arrInput.forEach((item) =>{returnValue += item});

  return returnValue;
};

const multiply = function(arrInput) {
  returnValue = 1;
  arrInput.forEach((item)=> {returnValue = returnValue * item});
  return returnValue;
};

const power = function(first,second) {
  return first**second;
};

const factorial = function(input) {
	returnValue = 1;
  if (input === 0 || input == 1) {
    return 1;
  }

  else{
    for (let i = 1; i <= input; i++) {
      returnValue = returnValue * i;
    }
  }
  return returnValue;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
