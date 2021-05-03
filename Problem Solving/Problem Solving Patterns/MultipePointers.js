// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// Very efficient for solving problems with minimal space complexity

//Write a function called sumZero that accepts a sorted array of integers.  The function should find the first pair where the sum is 0.    Return an array that includes both values that sum to zero or undefined if no pair exists.

//Understand the problem
    //We will receive an array of sorted integers
    //Find the first two numbers that add up to 0
//Examples
    //sumZero([-3, -2, -1, 0, 1, 2, 3]) = [-3, 3]
    //sumZero([-2, 0, 1, 2]) = undefined
    //sumZero([1, 2, 3]) = undefined
//Break it Down
    //


//Naive Solution - Time complexity - O(N^2) Space complexity - O(1)
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        //loop over the array
        for(let j = i+1; j < arr.length; j++){
            //loop over the array again for each item in the array
            if(arr[i] + arr[j] === 0) {
                //if any number of the array(arr[j] + the number in the first loop(arr[i]) = 0, return them)
                return [arr[i], arr[j]]
            }
        }
    }
}

//Multiple Pointers
    //set a pointer at the beginning
    //set a pointer at the end
    //sum the two pointers
    //if it doesn't = 0, move the end pointer back
    //if it doesn't = 0 after that move the beginning pointer forward
    //alternate until you find the sum of 0

function sumZero(arr) {
    let left = 0
    //starts at the beginning
    let right = arr.length -1
    //starts at the end
    while(left < right) {
        let sum = arr[left] + arr[right]
        //check sum of left and right
        if( sum === 0) {
            return [arr[left], arr[right]]
            //if 0, return the two numbers
        } else if (sum > 0) {
            right --
            //if sum is > 0, move the right pointer left one 
        } else {
            left ++
            //if sum < 0, move the left pointe right one
        }
    }   
}

//Implement a function called countUniqueValues that accepts a sorted array and counts the unique values in the array.  May contain negative numbers but the array will always be sorted

    //count the number of different digits in an array
    //[1, 1, ,1, 1, 1, 1, 2] = 2
    //[1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13] = 7
    //[-2, -1, -1, 0, 1] = 4

    //set a counter to 0
    //set pointer1 at index 0
    //set pointer2 at index 1
    //compare pointer 1 and pointer 2
    //if pointer 1 = pointer 2, move both right one
    //if pointer 1 != pointer 2, increment counter, move both right one

function countUniqueValues(arr) {
    let counter = 0
    let first = 0
    let second = 1
    while (first < arr.length) {
        if(arr[first] === arr[second]) {
            first ++
            second ++
        }
        console.log(arr[first], arr[second])
        if(arr[first] !== arr[second]) {
            counter ++
            first ++
            second ++
        }
    }
    return counter
} 

function countUniqueValues(arr) {
    let i = 0
    for(let j = 1; j < arr.length; j++) {
        //iterates the array once
        if (arr[i] !== arr[j]){
            i++
            //if arr[i] and arr[j] aren't equal
            //increments i to check against j on the next iteration
            arr[i] = arr[j]
            //sets the value of arr[j] to arr[i]
        }
    }
    return i + 1
    //returns the index of i + 1 which is now equivalent to the last unique value
}
    