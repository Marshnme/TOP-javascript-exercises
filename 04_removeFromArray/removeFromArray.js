
const removeFromArray = function(input, ...Args) {       
    let answer=[]
    console.log("Args",Args)
    console.log("Args[0]",Args[0])
    // for(let i = 0; i<Args.length; i++){
    //     for(let j = 0; j<input.length; j++){
    //             if(input[j] === Args[i]){
    //                input.splice(j,1)
    //             }
    //         }
    //     }

    
    // better solution! I tried this approach before but I kept returning instead of pushing
    input.forEach(item=>{
        if(!Args.includes(item)){
            answer.push(item)
        }
    })
        return answer
};
// Do not edit below this line
module.exports = removeFromArray;
