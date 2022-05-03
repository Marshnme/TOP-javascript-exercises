const fibonacci = function(a) {
    let n1 = 0, n2=1, nextTerm;

    if(a < 0){
        return "OOPS"
    }else{
        for(let i = 1; i<=a; i++){
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
            console.log(n1)
        }
        return n1
    }
    
    
}

// Do not edit below this line
module.exports = fibonacci;
