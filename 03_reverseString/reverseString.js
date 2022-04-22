const reverseString = function(input) {
    let Arrayinput = input.split("");
    let reverseInput = []

    let i = Arrayinput.length - 1;
    for(i; i>=0;i--){
        reverseInput.push(Arrayinput[i])
    }

    let answer = reverseInput.join("")
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
