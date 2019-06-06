#!/usr/bin/env node
"use strict";

/// Problem statement (codewars.com):
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// FUNDAMENTALS ARRAYS

/// Solution logic:
// find the two lowests
    // start assuming the two first positions are the lowest ones (A and B)
    // take a 3rd position (C) and compare with each one of the lowests
        // if (C-A<0): C is lesser than A
        // if (C-B<0): C is lesser than B
        // should substitute the one with the bigger negative result
            // A = C if (C-A) < 0 OR (if (C-B) < 0 AND if (C-A) < (C-B))
            // B = C if (C-B) < 0 OR (if (C-A) < 0 AND if (C-B) < (C-A))
// return A + B

/// Solution code V1:
function sumTwoSmallestNumbersV1 (arr){
    
    var lowestOne = arr[0];
    var lowestTwo = arr[1];
    
    for (let i = 2; i < arr.length; i++){
        
        let beingCompared = arr[i];
        
        if ((beingCompared - lowestOne < 0) && (beingCompared - lowestOne < beingCompared - lowestTwo)){
            lowestOne = beingCompared;
        } else if ((beingCompared - lowestTwo < 0) && (beingCompared - lowestTwo < beingCompared - lowestOne)){
            lowestTwo = beingCompared;
        }
    }
    
    return lowestOne + lowestTwo;
    
}

/// Solution code V2:
function sumTwoSmallestNumbersV2 (arr){

    var lowestOne = arr[0];
    var lowestTwo = arr[1];
    
    for (let i = 2; i < arr.length; i++){
        
        let numberBeingCompared = arr[i];

        let numberBeingComparedIsLesserThanLowestOne = numberBeingCompared - lowestOne < 0;
        let numberBeingComparedIsLesserThanLowestTwo = numberBeingCompared - lowestTwo < 0;

        let diffNumberBeingComparedAndLowestOne = numberBeingCompared - lowestOne;
        let diffNumberBeingComparedAndLowestTwo = numberBeingCompared - lowestTwo;

        if ((numberBeingComparedIsLesserThanLowestOne) && (diffNumberBeingComparedAndLowestOne < diffNumberBeingComparedAndLowestTwo)){
            lowestOne = numberBeingCompared;
        } else if ((numberBeingComparedIsLesserThanLowestTwo) && (diffNumberBeingComparedAndLowestTwo < diffNumberBeingComparedAndLowestOne)){
            lowestTwo = numberBeingCompared;
        }
    }

    return lowestOne + lowestTwo;

}

// Testing V1:
console.log(sumTwoSmallestNumbersV1([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbersV1([1, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbersV1([10, 20, 42, 30, 77, 155, 1333, 2422, 35353, 353343, 2, 12313]));

// Testing V2:
console.log(sumTwoSmallestNumbersV2([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbersV2([1, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbersV2([10, 20, 42, 30, 77, 155, 1333, 2422, 35353, 353343, 2, 12313]));
