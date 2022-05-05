//OVERVIEW

//largest values 'bubble' to the top
//not efficient or commonly used, but one of the base sorting methods

//Loops through the items and compares it to the next if the first item is larger, they swap positions
//loop is repeated until items are sorted - each time through the loop the largest item moves to the correct position
//loop length is reduced by one each time since the largest value is locked in place

//how do we swap?

//typically runs at O(n^2)
//can be slightly optimized to stop sorting if no swaps are made

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
}

const swap1 = (arr, i1, i2) => {
    [arr[i1], arr[i2]] = [arr[i2] , arr[i1]]
}

//PSEUDOCODE
//Loop from the end of the array towards the start
//Initialize an inner loop from the beginning until i - 1
//if arr[j] is greater than arr[j+ 1], swap the values
//return the sorted array

const bubbleSort = (arr) => {
    let swap
    //track if a swap has been made
    for(let i = arr.length; i > 0; i--) {
        //outer loop works backwards so that we don't check the last item
        swap = false
        //assume we aren't making a swap
        for(let j = 0; j <i - 1; j++){
            //inner loop works forwards to check the items
            if(arr[j] > arr[j+1]){
                //compare each item to the item ahead of it - if the first item is larger, swap them
                let temp = arr[j]
                //keep track of the current item
                arr[j] = arr[j+1]
                //set the current item to the next item
                arr[j+1] = temp
                //set the next item to the current item
                swap = true
                //if we've made a swap, set it to true
            }
        }
        if (swap = false) break
        //if no swaps were made, break out of the loop
    }
    return arr
}

console.log(bubbleSort([37, 45, 29, 8]))
console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))