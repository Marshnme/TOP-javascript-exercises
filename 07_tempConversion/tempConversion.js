const ftoc = function(f) {
  // [°C] = ([°F] − 32) × 1.8


  let answer =  (f - 32) * 0.5555; 
  console.log(answer)
  let roundedAnswer = Math.round(answer *10) / 10;

  return roundedAnswer
};

const ctof = function(c) {
  // [°F] = [°C] × 1.8 + 32

  let answer = c * 1.8 + 32;
  let roundedAnswer = Math.round(answer * 10) / 10;

  return roundedAnswer
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
