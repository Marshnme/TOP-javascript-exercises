const removeFromArray = function(input, ...Args) {
    let answer = input.filter(item => {
        for(let i = 0; i < Args.length; i++){
            if(item !== Args[i]){
                console.log("item",item)
                console.log("arg",Args[i])
                return item
            }
        }
        
    })
    return answer;
};

// Do not edit below this line
module.exports = removeFromArray;
