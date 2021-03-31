//Divide and Conquer
//Involves dividing a data set into smaller chunks and repeating a process with a subset of data
//Can tremendously decrease time complexity

//Given a sorted array of integers, write a function called search that accepts a value and returns the index where the value passed to the function is located.  If the value is not found, return -1

//Break it down
    // Find the index of the specified value
//Examples
    //search([1, 2, 3, 4, 5, 6], 4)  returns 3 - index of 4 
    //search([1, 2, 3, 4, 5, 6], 6)  returns 5 - index of 6

//The array is sorted so we can choose a point in the middle and split the array
//We compare the value at the center to the search value
//We choose which half of the array will contain the search value and repeat the process -- binary search


