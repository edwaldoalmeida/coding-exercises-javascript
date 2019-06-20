#!/usr/bin/env node
"use strict"
/**
 * Challenge: (www.codewars.com)
 * Trolls are attacking your comment section!
 * A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
 * Your task is to write a function that takes a string and return a new string with all vowels removed.
 * For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
 * Note: for this kata y isn't considered a vowel.
 * FUNDAMENTALS STRINGS DATA TYPES REGULAR EXPRESSIONS DECLARATIVE PROGRAMMING
 */

/**
 * Solution logic:
 * "When you decide to solve a problem using RegEx, you end up having (at least) two problems."
 * (Don't remember the author. Adapted by Edwaldo Almeida.)
 * I'll keep an array with the characters to disconsider when traversing the input (in this case, vowels)
 * I'll Traverse the input comparing with the array and disconsidering the matches when generating the output
 */

// Solution code
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];

function removeVowels(inputString) {
    let result = '';
    
    // traverse the string
    for (let i = 0; i < inputString.length; ++i) {
        let charToCheck = inputString.substring(i, i + 1);
        
        // compare with the vowels array
        let thereIsAMatch = false;
        let j = 0;
        while (!thereIsAMatch && j < vowels.length) {
            if (charToCheck == vowels[j]) {
                thereIsAMatch = true;
            }
            j++;
        }

        if (!thereIsAMatch) {
            result += charToCheck;
        }
    }
    return result;
}

// testing the solution
console.log(removeVowels("atest"));
console.log(removeVowels("asdfasdfasfasfdasf"));
console.log(removeVowels("aeioud"));
console.log(removeVowels("aEioUdAeLa"));
