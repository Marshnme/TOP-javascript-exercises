const findTheOldest = function(arr) {
    const key = "yearOfDeath"
    let ages = arr.map((person) =>{
        if(key in person === false){
            person[key] = new Date().getFullYear();
        }
        return person.yearOfDeath - person.yearOfBirth;
        
    })
    let maxAge = Math.max(...ages)
    return arr[ages.indexOf(maxAge)]
};

// Do not edit below this line
module.exports = findTheOldest;
