Exploring Concrete Examples

Can help you understand the problem better
Provide sanity checks – make sure your solution works the way it should 
 
    1. Start with simple examples 
    2. More complex examples 
    3. Empty inputs 
    4. Invalid inputs 

Write a function that takes in a string and returns a count of each character in the string 

    Simple examples 
        CharCount('aaaa') returns {a:4} 
        CharCount('hello') returns {h:1, e: 1, l:2, o:1} 
            Should we only return characters in the string or characters with a 0 count? 
    More complex examples
        'My phone number is 158741588' 
            Do we return numbers? 
            Do we need separate counts for each case? 
    Empty inputs 
        CharCount('') 
            Should we return an empty object, null, false, 0? 
    Invalid inputs 
        charCount(['a', 'b', 'c', 'd'])
            What should we return? 
 