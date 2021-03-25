// Summary
//     Formalizes fuzzy counting 
//     Allows us so talk formally about how the runtime of an algorithm grows as inputs grow 
//     Cares about trends, not details 
//     Provides a precise vocabulary for talking about how code performs 
//     Useful for discussing tradeoffs between different approaches 
//     Identifies inefficiencies and pain points 


// Definition 
//     We say that an algorithm is O(f(n)) if the number of simple operations the computer has to perform is eventually less than a constant times f(n) as n increases 
//     F = function, n = input function(input) 

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTo(n) {
    return n * (n + 1) / 2;
  } 

// Which function is 'better'? 

// What is better? 
//     Faster 
//     Less Memory Intensive 

// Time Complexity 
//     Issues with using time 
//         Different machines will report different times 
//         The same machine will report different times 
//         For very fast algorithms speed measurement may not be precise enough 

//     Instead we count the number of simple operations 
//         The second function above contains 3 operations  * + / 
//         First function 
//         One = operation to declare total 
//         One = operation to declare I 
//         One <= operation to check to compare I and n 
//         One + addition and one + assignment to increment I 
//         One + addition and one + assignment to add and assign to total for each time through the loop – once for every value up to n 
//         The total of operations grows ~proportionally with n 
 
// Arithmetic operations, variable assignments, accessing elements of arrays by index or objects by key are always constant O(1) 

// In loops – the complexity is the length of the loop times the complexity (# of operations) inside the loop 


// Space Complexity 
//     Space required by the algorithm not including inputs 
//         Primitives are constant space(booleans, numbers, undefined, null) 
//         Strings require O(n) space – n = string length 
//         Reference types (arrays & objects) are O(n) where n is the length or # of keys 

// Logarithms 
//     Inverse of exponents 
//     # of times you can divide a number by 2 before it  is <= 1 