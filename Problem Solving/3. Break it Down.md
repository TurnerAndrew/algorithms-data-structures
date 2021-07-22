Break It Down

    Explicitly write down steps you need to take 
        Forces you to think about your code before you write it 
        Catches any lingering conceptual issues or misunderstanding 


Write a function that takes in a string and returns a count of each character in the string 
The function should return letters and numbers, counts all cases as the same 


Start simple
    State your end goal

    function charCount(str) { 
        //return an object with keys that are lowercase alphanumeric characters in the string; values should be the count of the chars 
    } 


Write out your steps BEFORE you start to code
Show that you have a plan
    Even if you don't finish they will know where you were going and can see your thought process

function charCount(str) { 
    // make an object to return 
    // loop over the string 
        // start at the first character 
            // if the character is a letter or number AND if it doesn't exist in the object, add it and set value to 1 
            // if the character is a letter or number AND if it does exist in the object, add a count 
            //if character is not a letter or number, don't do anything 
    // return object 
} 