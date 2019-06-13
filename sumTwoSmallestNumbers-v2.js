#!/usr/bin/env node
"use strict";

/**
* Problem statement (codewars.com):
* Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
* For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
* [10, 343445353, 3453445, 3453545353453] should return 3453455.
* FUNDAMENTALS ARRAYS
*/

/**
* Solution logic:
* start assuming the two first positions are the lowest ones (A and B)
* take a 3rd position (C) and compare with each one of the lowests
*   if (C-A<0): C is lesser than A
*   if (C-B<0): C is lesser than B
*   should substitute the one with the bigger negative result
*     A = C if (C-A) < 0 OR (if (C-B) < 0 AND if (C-A) < (C-B))
*     B = C if (C-B) < 0 OR (if (C-A) < 0 AND if (C-B) < (C-A))
* return A + B
*/

// Solution code V2:
function sumTwoSmallestNumbers (array){

    var lowestOne = array[0];
    var lowestTwo = array[1];
    
    for (let i = 2; i < array.length; i++){
        
        let numberBeingCompared = array[i];

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

// Testing:
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([1, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 20, 42, 30, 77, 155, 1333, 2422, 35353, 353343, 2, 12313]));

// www.edwaldoalmeida.com @ 2019