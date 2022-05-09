Sorting is very common so it's good to understand how it works
We should also be aware of hwo the built in methods are operating
There are many different ways to sort and they they all have advantages and disadvantages

https://www.toptal.com/developers/sorting-algorithms
https://visualgo.net/en/sorting

Common sorting methods:
    Elementary Sorting Methods
        Typically O(n^2)
        Don't scale well
            Bubble Sort
                largest items to the top
            Selection Sort
                smallest items to the bottom
            Insertion Sort
                places the current item in the correct spot
    Advanced Sorting Methods
        Much faster at scale
        Typically run at O(n log n)
            Merge Sort
            Quick Sort
            Radix Sort
       

JavaScript Array.sort()
    sorts strings well
    converts numbers to strings before sorting so they don't come back in order when not passed any arguments
    accepts an optional comparator function that tells JS how you want to sort
    Comparator looks at pairs of elements (a, b) and determines the order based on the return value
    if it returns negative, a is before b
    if it returns positive, b is before a
    if it returns 0 sort considers them to be equal

    arr.sort((a, b) => a - b) //ascending sort
    arr.sort((a, b) => b - a) //descending sort