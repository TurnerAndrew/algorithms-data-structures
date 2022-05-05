//Counting the occurrences of a substring

//PSEUDOCODE

//Loop over the longer string
//loop over the shorter string
    //If the chars don't match, break out of the inner loop
    //If they do match, keep going
    //If you complete the inner loop and find a match, increment the count of matches
    //Return the count

const naiveSearch = (longStr, shortStr) => {
    count = 0
    for(let i = 0; i < longStr.length; i++){
        for(let j = 0; j < shortStr.length; j++){
            if(shortStr[j] !== longStr[i + j]){
                break
            } if (j === shortStr.length - 1){
                count++
            }
        }
    }
    return count
}


console.log(naiveSearch('lorie loled', 'lol'))