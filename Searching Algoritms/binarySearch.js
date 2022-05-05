//BINARY SEARCH AKA DIVIDE & CONQUER
    //Faster than linear search
    //Eliminates half of the data at once instead of one item at a time
    //ONLY WORKS ON SORTED DATA

//Time Complexity
    //O(log n)

//Implementation
    //Find the midpoint
    //Check the search term against the midpoint
    //Find out which half of the data the term is in, throw out the other half
    //Repeat until you find the element

//PSEUDOCODE

//Create a starting pointer at the first index
//Create an end pointer at the last index
//Create the pivot which is the midpoint between first and last
//While the start pointer is less than the end
    //If the pivot is the element, return the index of the pivot
    //If the pivot is less than the element, the start pointer becomes the pivot + 1
    //If the pivot is larger than the element, the end pointer becomes the pivot - 1
    //If the element is never found, return -1

const binarySearch = (arr, elem) => {
    let start = 0
    let end = arr.length -1
    let pivot = Math.floor((start + end) / 2)

    while(arr[pivot] !== elem && start <= end){
        if(arr[pivot] < elem){
            start = pivot + 1
        } else {
            end = pivot - 1
        }
        pivot = Math.floor((start + end) / 2)
    } 
    if(arr[pivot] === elem){
        return pivot
    }
    return -1
}

//Refactored

const binarySearch1 = (arr, elem) => {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
