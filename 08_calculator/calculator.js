const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(...args) {
  let answer = args[0].reduce(( prev , curr) => {
    return prev + curr
  },0)

  return answer
};

const multiply = function(...args) {
  let answer = args[0].reduce(( prev , curr) => {
    return prev * curr
  })

  return answer
};

const power = function(a,b) {
  let answer = a;
  for(let i = 0; i<b - 1; i++){
    answer = answer * a
  }
  return answer;
};

const factorial = function(a) {
  let answer = a;
  if(a === 0){
    answer = 1
  }else{
    for(let i = 1; i<a; i++){
      answer = answer * i
    }
  }
    return answer;
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
