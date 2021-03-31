//Sliding Window
    //Involves creating a window which can either be an array or a number from one position to another
    //Depending on a certain condition the window either increases or closes(and a new window is created)
    //Useful for keeping track of a subset of data in an array/string etc

//create a function that finds the longest sequence of unique characters


//write a function called maxSubarraySum which accepts an array of integers and a number called n.
//The function should calculate the maximum sum of n consecutive elements in the array

//Understand the Problem
    //return the highest sum of n consecutive numbers in an array
//Examples
    maxSubarraySum([1, 2, 3, 4, 5, 2, 8, 1, 5], 2) = 10
    //returns the highest sum of 2 consecutive numbers - 2 + 8
    maxSubarraySum([1, 2, 3, 4, 5, 2, 8, 1, 5], 4) = 17
    //returns the highest sum of 4 consecutive numbers - 2 + 5 + 2 + 8
//Break it Down
    //Create a window - the length is equal to the second argument
    //Move the window based on a condition

function maxSubarraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) return null

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    } //sums the first num digits of the array and sets to maxSum
    tempSum = maxSum
    for ( let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    } //subtracts the first number in the array and adds the number after the last -- slides the window
    return maxSum
}

