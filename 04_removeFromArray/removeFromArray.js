
const removeFromArray = function(input, ...Args) {       

    for(let i = 0; i<Args.length; i++){
        for(let j = 0; j<input.length; j++){
                if(input[j] === Args[i]){
                   input.splice(j,1)
                }
            }
        }
        return input
};
// hmmm
// Do not edit below this line
module.exports = removeFromArray;
