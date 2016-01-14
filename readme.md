## Synopsis

This assignment re-implements some array methods (push, pop, shift, and unshift) without using any of the array prototype methods. Array properties, such as length, are however used. Rather than rewriting the prototype, these methods are written as functions that can be passed an array.

The second part of the assignment is to write functions that:
    1. Takes and array and returns a copy of the array with all the duplicates removed
    2. Given an array of english words, figure out what the most common letter is. Multiple occurrences of a letter in any given word do not affect the count (ex. book is considered having 'o' but not 2 of them). The function returns an array with the most common letter and its count.

## Tests

Testing is done with mocha
