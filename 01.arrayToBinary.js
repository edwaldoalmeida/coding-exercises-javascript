#!/usr/bin/env node
"use strict";

/// Problem statement (codewars.com):
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Examples:
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

/// Solution logic:
// - traverse the array backwards (having an `exponent` var to help with the calculation)
// - if the position contains the number 1, raise 1 to the equivalent number of its position and add to the result
// - this way, it works for any array size

/// Solution code:
const binaryArrayToNumber = arr => {
    
    let result = 0;
    let exponent = 0;
    
    for (let x = arr.length-1; x >= 0; x--){
        if (arr[x] == 1){
            result = result + (2 ** exponent);
            console.log(result);
        }
        exponent++;
    }

    return result;

}

/// Testing the solution:
binaryArrayToNumber([0, 0, 0, 1]) == 1 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([0, 0, 1, 0]) == 2 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([0, 0, 1, 1]) == 3 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([0, 1, 0, 1]) == 5 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([1, 0, 0, 1]) == 9 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([1, 1, 1, 1]) == 15 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([1, 0, 1, 1]) == 11 ? console.log('right') : console.log('wrong');
binaryArrayToNumber([1, 1, 0, 1, 1]) == 27 ? console.log('right') : console.log('wrong');

