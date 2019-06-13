#!/usr/bin/env node
"use strict";
/**
 * The museum of incredible dull things (from codewars.com)
 * Given an array of `integers`, remove the smallest value. `Do not mutate the original array/list`.
 * If there are multiple elements with the same value, remove the one with a lower index.
 * If you get an empty array/list, return an empty array/list.
 * Don't change the order of the elements that are left.
 * 
 * Examples
 * removeSmallest([1,2,3,4,5]) = [2,3,4,5]
 * removeSmallest([5,3,2,1,4]) = [5,3,2,4]
 * removeSmallest([2,2,1,2,1]) = [2,2,2,1]
 * 
 * FUNDAMENTALS LISTS DATA STRUCTURES ARRAYS
 */

/**
 * Solution Logic:
 * I'm going to have variable to hold the `lowest value` and the `lowest value index` to be able to compare with the array positions content
 * I'll just be concerned about the first position found because the task asks, in case of more than one ocurrence of the smallest,
 * to remove the lowest position, so the first position where the lowest was found is the most important.
 */

// Solution code:
function removeSmallest(numbers) {
    let lowestNumber = numbers[0];
    let lowestPosition = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
            lowestPosition = i;
        }
    }
    numbers.splice(lowestPosition,1);
    return numbers;
}

// testing:
console.log(removeSmallest([1,2,3,4,5])); // should return [2,3,4,5]
console.log(removeSmallest([5,3,2,1,4])); // should return [5,3,2,4]
console.log(removeSmallest([2,2,1,2,1])); // should return [2,2,2,1]
console.log(removeSmallest([2,2,10,2,1,4,1,1,1])); // should return [2,2,10,2,4,1,1,1]
