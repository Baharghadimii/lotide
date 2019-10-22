# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bahar.ghadimi/lotide`

**Require it:**

`const _ = require('@bahar.ghadimi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: It returns the first element of an array.
* `tail(array)`: It returns the tail of an array(everything from the second index)
* `middle(array)`: It returns an array with the middle element of the passed in array in an odd array and two middle elements in an even array.
* `counterLetters(string)`: It returns an object with all the letters in passed in string and their counts in the string.
* `countOnly(allItems, itemToCount)`: It returns an object containing counts of everything that the input object listed.
* `letterPositions(sentence)`: It returns an object with all the letters in passed in string and their position in the string.
* `counterLetters(string)`: It returns an object with all the letters in passed in string and their counts in the string.
* `findKeyByValue(object, value)`: It scans the object and returns the first key which contains the given value.
* `map(array)`: It creates a new array with the results of calling a provided function on every element in the calling array.
* `flatten(array)`: It creates a flatten new array from a passed in nested array.
* `takeUtil(array, callback)`: It returns a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
* `without(array1, array2)`: It returns the array without the elements of second array.
* `findKey(object, callback)`: It returns the matched value in the passed in object by using the callback function.