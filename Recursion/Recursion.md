1. What is recursion?
    A function that calls itself
        JSON.parse / JSON.stringify are recursive functions
        document.getElementById and DOM traversal
        Object traversal
    Invoke the same function with a different input until you reach your base case
    Base case - condition where the recursion ends

2. Two essential components of a recursive function
    Base case
    Different Input(Recursive call)

3. Visualize the call stack
    Stack data structure
    Anytime a function is invoked it is placed(pushed) on the top of the call stack
    When JavaScript sees the return keyword or when the function ends the compiler will remove that  item(pop)
    Functions typically are pushed onto the call stack and popped off when they complete
    Recursive functions continue to push new functions onto the call stack.

4. Helper method recursion for more difficult problems