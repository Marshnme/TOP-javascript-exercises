const repeatString = function(text,repeatTime) {
    if(text.length === 0){
        return ""
    }else if(repeatTime < 0){
        return "ERROR"
    }else{
        let textArray = []
        for(let i =0; i < repeatTime; i++){
            textArray.push(text)
        }
        let answer = textArray.join("")
        return answer
    }
    
};

// Do not edit below this line
module.exports = repeatString;
