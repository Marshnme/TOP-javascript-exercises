const sumAll = function(one,two) {
    let firstNum = one;
    let secondNum = two
    let sum = 0;
    if(one < 0 || two < 0){
        return "ERROR"
    }
    if(typeof one !== typeof two){
        return "ERROR"
    }
    if(one>two){
        firstNum = two;
        secondNum = one
        for(firstNum;firstNum<=secondNum; firstNum++){
            sum += firstNum
        }
        return sum
    }else{
        for(one;one<=two; one++){
        sum += one
    }
        return sum
    }
    
};

// Do not edit below this line
module.exports = sumAll;
