#!/usr/bin/env node

import readlineSync from "readline-sync";
import greet from "../src/cli.js";

const max = 100;
const name = greet();
console.log(`Answer 'yes' if the number is even, otherwise answer 'no'.`);

const setRandomNumber = () => Math.floor(Math.random() * max);

let counter = 0;
let result = null;

do {
  const number = setRandomNumber();
  console.log(`Question: ${number}`);

  const answer = readlineSync.question("Your answer: ");
  const [yes, no] = ["yes", "no"];

  if (![yes, no].includes(String(answer))) {
    console.log(
      `Sorry, ${name}, we've waited 'yes' or 'no' from you.\nBut you wrote '${answer}' and it's the incorrect answer.`
    );
    break;
  }

  if (number % 2 === 0) {
    if (answer.toLowerCase() === yes) {
      result = `Correct!`;
      counter += 1;
    }
    if (answer.toLowerCase() === no) {
      result = `'${no}' is wrong answer ;(. Correct answer was '${yes}'.`;
    }
  } else {
    if (answer.toLowerCase() === "no") {
      result = `Correct!`;
      counter += 1;
    }
    if (answer.toLowerCase() === "yes") {
      result = `'${yes}' is wrong answer ;(. Correct answer was '${no}'.`;
    }
  }

  console.log(result);
} while (result === "Correct!" && counter < 3);

if (result === "Correct!") {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
