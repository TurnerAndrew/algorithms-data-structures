//Use objects or sets to collect values or frequencies of values 
    // Avoids the need for nested for loops or O(n^2) operations with arrays or strings 
    // Compares multiple pieces of data / frequencies of things occurring 
        // Similar values 
        // Anagrams 
        // Value contained in another value 

// Write a function called same that accepts two arrays.  The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same  

// Understand the problem 
    // Does the second array contain the same values as the first but squared 
    // Can be in any order 
// Concrete examples 
    same([1, 2, 3], [4, 1, 9]) = true
    same([1, 2, 3], [1, 9]) = false
    same([1, 2, 1], [4, 4, 1]) = false
// Break it down 
    // Check if arrays are the same length, if not return false 
    // Create a new array that contains the values of the first array squared 
    // Compare second array to new array
//Solve or Simplify
    function same(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false}
        //if arrays aren't the same length return false
      for (let i = 0; i < arr2.length; i++) {
          //loop over arr1
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        //searches arr2 for the index equal to the square of the number at arr[i]
        if (correctIndex === -1) {
          return false
          //if the index isn't found, returns false
        }
        arr2.splice(correctIndex, 1)
        //if correctIndex is found, takes it out of the array and starts again
      } return true
    }

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    } //check lengths, if not equal return false
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    //create an object for each array to hold the frequencies
    for (let val of arr1) { //creates a val variable that is equal to occurrences and loops over arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    } //checks frequencyCounter1 for each val in arr1.  Adds or increments a counter for each item in arr1 to frequencyCounter1
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    } //performs the same as above
    for(let key in frequencyCounter1) {
        //loop over keys(#s) of frequencyCounter1
        if(!(key ** 2 in frequencyCounter2)){
            return false
            //squares each key(#) in frequencyCounter1 and checks if that is a key in frequencyCounter2
            //if the square of a key is not present in frequencyCounter2 returns false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
            //loops through frequencyCounter2 and checks the value(# of occurrences) of each key
            //if the values don't match returns false
        }
    } return true
}

//Given two strings, write a function, validAnagram, to determine if the second string is an anagram of the first.  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman. 

//Understand the problem 
    // Does the second string contain all of the same characters as the first string 
// Concrete Examples 
    // aaz, zaa = false 
    // rat, car = false 
    // anagram, nagaram = true 
    // qwerty, qeywrt = true 
// Break it Down 
    // Create an object for each string to hold the character counts 
    // Add each character from the strings to the corresponding object 
    // Compare the objects 
    // If the number of keys is different, return false 
    // If the number of keys is the same, check that the keys are equal, if not return false 
    // If keys are equal check values 
        // if values don't match return false 
    // return true 

function validAnagram(str1, str2){
    if (str1.length !== str2.length) {
          return false
      }
      let chars1 = {}
      let chars2 = {}
      for (let char of str1) {
          chars1[char] = (chars1[char] || 0) + 1 
      }
      for (let char of str2) {
          chars2[char] = (chars2[char] || 0) + 1     
          console.log(chars1, chars2)
      }
      for (let key in chars1) {
        if(chars1[key] !== chars2[key]){
          return false
        }
      } return true
  }

  function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false
    }

    const lookup = {}

    for (let i = 0; i < str1.length; i++) {
        //loop over str1
        let letter = str1[i]
        //set str[i] to a variable for clarity
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
        //if letter is in the lookup object, increment the value, if not set it to 1
    }
    
    for( let i = 0; i < str2.length; i++) {
        //loop over str2
        let letter = str2[i]
        //set str2[i] to a variable for clarity
        if (!lookup[letter]) {
        //if str2[i] is not in lookup, it is not an anagram
            return false
        } else {
            lookup[letter] -= 1
            //remove letter from lookup object and repeat with the new object
        }
    }
    return true
  }

  
  