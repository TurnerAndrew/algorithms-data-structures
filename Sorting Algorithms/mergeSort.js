//First implementation was developed in 1948 by a mathematician
//Combination of merging and sorting
//Exploits the fact that arrays of 0 or 1 element are always sorted
//Decomposes an array into smaller arrays of 0 or 1 element, then builds up a newly sorted array - merging them back together
//O(n log n)

//IMPLEMENTATION
    //split the array in half, then split those arrays in half, continuing until all arrays have a single item
    //merge the single arrays back into larger arrays until you have the original array sorted


//Merge Helper Function
    //Given two sorted arrays, create a new array that is also sorted and contains all items of both arrays
    //Should run in O(n + m)
        //Each item in each array should only be iterated once

//PSEUDOCODE
    //create an empty array, look at the smallest values in each array
    //once counter for each array, i & j
    //While there are values we haven't looked at
        //If the value in the first array is smaller than the value in the second array, push the value in the first array to results and move on to the next value in the first array
        //If the value in the first array is larger than the value in the second array, push the value in the second array to results and move to the next value in the second array
        //When one array is complete, push the remaining values from the other array

const merge = (arr1, arr2) => {
    let res = []
    let i = 0
    let j = 0
    while (i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    while (i < arr1.length){
        res.push(arr1[i])
        i++
    }
    while (j < arr2.length){
        res.push(arr2[j])
        j++
    }
    return res
}
// console.log(merge([1, 10, 50], [2, 14, 99, 100]))
// console.log(merge([100,200], [1,2,3,5,6]))

//Sort PSEUDOCODE
//Break up the array into halves until you ahve arrays that are empty or have one element
//Use .splice in a recursive function
//Once all arrays are broken down to a single item, run the merge function
//Return the merged & sorted array

const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr
    }
    
    let middle = Math.floor(arr.length / 2)

    let firstHalf = mergeSort(arr.slice(0, middle))
    let secondHalf = mergeSort(arr.slice(middle))
    
    return merge(firstHalf, secondHalf)
}

console.log(mergeSort([10, 24, 76, 73]))
console.log(mergeSort([5, 100, 1, 3, 17, 56, 2, 12, 9, 8]))