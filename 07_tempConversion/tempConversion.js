const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * (5/9);
  return Math.round(conversion*10)/10;
};

const convertToFahrenheit = function(temp) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
