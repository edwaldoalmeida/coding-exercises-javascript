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

// Solution:
let one = 'a';
let three = 'aaa';
let seven = 'aaaaaaa';
let n = '';
n += one.length;
n += three.length;
n += three.length;
n += seven.length;
console.log(n);

// www.edwaldoalmeida.com @ 2019
