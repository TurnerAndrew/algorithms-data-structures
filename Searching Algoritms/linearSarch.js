//Check each element one by one until we find the search term
//Built in JS methods use this - indexOf, includes, findIndex

//PSEUDOCODE
    //Loop through the array and check each item to see if it matches the search term
    //If it is, return the index
    //If it's not found return -1

const linearSearch = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === num){
            return i
        }
    } return -1
}

console.log(linearSearch([10, 15, 20, 25, 30], 15))