function countDown(num){
    if(num <= 0) { //base case
        //if value of num is 0, log all done and return.
        console.log('All done!')
        return;
        //return is required in the base case to stop the function
    }
    console.log(num)
    //print the current value of num
    num--
    //decrement num
    countDown(num)
    //call countDown with current value of num
}


function sumRange(num){
    if(num === 1) return 1
    //base case
    return num + sumRange(num-1)
    //different input
}

sumRange(3)
  //return 3 + sumRange(2)
    //return 2 + sumRange(1)
      //sumRange(1) - return 1
    //adds functions to the stack until until num reaches 1
    //when num reaches 1, invokes all of the functions in order
    //1 + 2 + 3