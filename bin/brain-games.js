#!/usr/bin/env node
import readlineSync from 'readline-sync';

// console.log('/May I have your name?/');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question("What's your name, hero? ");

console.log(`Hello, ${name}`);
