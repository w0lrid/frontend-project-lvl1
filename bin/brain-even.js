#!/usr/bin/env node

import readlineSync from "readline-sync";
import { finishGame, generateRandomNumber, greet, introduceRules } from "../src/cli.js";

const max = 100;
const name = greet();
introduceRules(`Answer 'yes' if the number is even, otherwise answer 'no'.`);

let counter = 0;
let result = "";
const [yes, no] = ["yes", "no"];

do {
  const number = generateRandomNumber(max);
  console.log(`Question: ${number}`);

  const answer = readlineSync.question("Your answer: ");

  if (![yes, no].includes(String(answer))) {
    console.log(`Sorry, ${name}, we've waited 'yes' or 'no' from you.\nBut you wrote '${answer}' and it's the incorrect answer.`);
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

console.log(finishGame(result, name));