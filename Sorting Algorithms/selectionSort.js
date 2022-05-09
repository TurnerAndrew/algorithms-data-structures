//OVERVIEW

//similar to bubble sort, but instead of sorting the large items, we sort the small items
//find the smallest item and put it at the front of the array

//PSEUDOCODE

//Initialize the first element to the current minimum
//loop through the items and compare each to the minimum
//if the item is less, set the current minimum to that item
//when the loop is finished, swap the minimum value and the first item
//do not include the first item
//repeat until the array is sorted

//O(n^2)

const selectionSort = (arr) => {
    
    for(let i = 0; i < arr.length; i++){
        let min = i
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(i !== min){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp   
        } 
    }
    return arr
}



console.log(selectionSort([1, 3, 5, 2, 36, 12, 7]))