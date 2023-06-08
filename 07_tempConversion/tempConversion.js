const convertToCelsius = function(fahrenheitInput) {


  if (fahrenheitInput == 32) {
    return 0;
  }
  returnValue = (((fahrenheitInput-32) * 5) / 9);
  returnValue = Math.round(returnValue * 10) / 10;

  return returnValue;
};

const convertToFahrenheit = function(celsiusInput) {
  returnValue = ((celsiusInput/5)*9) +32;
  returnValue = Math.round(returnValue * 10) /10;

  return returnValue;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
