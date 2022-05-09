//OVERVIEW

//Builds up the sort by gradually creating a larger left portion which is sorted
//Inserts the current item in the correct spot

//PSEUDOCODE
    //Start with the second item
    //Compare that item with the one before and swap if needed
    //Continue to the next, if it isn't in the right spot iterate through the sorted portion to put it in the right spot
    //Repeat until sorted

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        //start with the second item
        let currentVal = arr[i]
        //store that item
        for(let j = i-1; j >= 0; j--){
            //look backwards at the previous item
            

        }
    }

    return arr
}


console.log(insertionSort([1, 9, 2, 76, 4]))