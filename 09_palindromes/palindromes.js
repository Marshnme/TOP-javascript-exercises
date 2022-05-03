const palindromes = function (string) {
    let splitString  = string.split("")
    // console.log(splitString)

    function onlyLetters(arr){
        let array2 = []
        for(let i = 0; i<arr.length; i++){
            if(arr[i].toLowerCase() != arr[i].toUpperCase()){
                array2.push(arr[i])
            }
        }
        return array2
    }

    let filteredString = onlyLetters(splitString);
    let copy = onlyLetters(splitString);
    
    if(filteredString.join().toLowerCase() === copy.reverse().join().toLowerCase()){
         return true
    }else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
