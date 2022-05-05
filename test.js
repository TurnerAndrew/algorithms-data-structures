function balancedSum(arr) {
    let leftSum = 0
    let rightSum = 0
    let last = arr.length - 1
    
    let leftSum = arr[0] + arr[1]
    let rightSum = last + last[last -1]
    
    if(leftSum === rightSum) {
        return indexOf(arr[last - 1])
    }
    
    for(let i = 2; i < last - 1; i++){
    if (leftSum < rightSum){
        leftSum += arr[i]            
        }
     else if (rightSum > leftSum){
        
        }
    }
}