//Also leverages the fact that arrays of 0 or 1 element are always sorted
//Selects a single element (the pivot) and find the index where the pivot should be in the array
//Moves all lowers that are lower to the left, all numbers that are larger to the right
//Once the pivot is in the right spot you can run quick sort on each half
//Best and average case are O(n log n) worst is O(n^2)

//Implementation
    //Choose your pivot
    //Find which numbers are lower than the pivot
    //Count how many numbers are lower - place it in position after those numbers

//Pivot Helper
    //It's useful to create a function that will arrange array elements on either side of a pivot
    //This function will take in an array and designate an element as the pivot
    //It should rearrange the elements so that all elements smaller are on the left and all elements larger are on the right
    //This takes place in place and returns an index
        //CHOOSING A PIVOT
            //Runtime depends on how we choose the pivot
            //Ideally it would be the median value
            //This example uses the first element

    //PSEUDOCODE
        //Accept 3 arguments, array, starting index, ending index (default to 0 and arr.length +1)
        //Get the pivot from the beginning
        //Store the pivot index
        //Loop through the array
            //If the current element is smaller than the pivot, increment the index variable and swap the current element with the element at the pivot
        //Swap the pivot with the pivot index
        //Return the pivot index

const pivot = (arr, start = 0, end = arr.length + 1) => {

    const swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }

    let pivot = arr[start]
    let pivotIndex = start

    for(let i = start + 1; i < arr.length; i++) {
        if(arr[i] < pivot){
            pivotIndex++
            swap(arr, pivotIndex, i)
        }
    }
    swap(arr, start, pivotIndex)
    return pivotIndex
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

//SORT FUNCTION
//PSEUDOCODE
    //call the pivot helper on the full array
    //recursively call quicksort on each side of the pivot point
    //base case is a subarray with less than 2 elements
        

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr, left, pivotIndex -1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))