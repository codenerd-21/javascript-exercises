/*
From F to C: [°F] = [°C] × ​9⁄5 + 32      
From C to F: [°C] = ([°F] − 32) × ​5⁄9
*/

const ftoc = function (degrees) {
  let celsius = ((degrees) - 32) * 5 / 9;
  let celsiusRounded = Math.round(celsius * 10) / 10;
  return celsiusRounded;
}

const ctof = function (degrees) {
  let fahrenheit = (degrees * 9 / 5) + 32;
  let fahrenheitRounded = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRounded;
}

module.exports = {
  ftoc,
  ctof
}
