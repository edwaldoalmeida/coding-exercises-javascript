#!/usr/bin/env node
"use strict";

/**
 * Challenge:
 * Your task is to make a program that prints the number 1337,
 * without using any of the characters 0123456789 in your code,
 * and independently of any external variables such as the date or time
 * or a random seed.
 * We want you to create the shortest code (counting in bytes) possible.
 */

// Solution (v2):
let array = ['a', 'aaa', 'aaa', 'aaaaaaa'];
let number = '';
array.forEach(element => number = number + element.length);
console.log(number);

// www.edwaldoalmeida.com @ 2019
