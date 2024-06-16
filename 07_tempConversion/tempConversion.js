const convertToCelsius = function(farenheit) {
  let toCelsius = (+farenheit - 32) / 1.8
  return Math.round(toCelsius * 10) / 10
};

const convertToFahrenheit = function(celsius) {
  let toFahrenheit = celsius * 1.8 + 32
  return Math.round(toFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
