#!usr/bin/env node

import readlineSync from "readline-sync";
import { greet, generateRandomNumber, introduceRules, finishGame } from "../src/cli.js";

const max = 100;
let counter = 0;
let result = "";

const name = greet();
introduceRules(`Find the greatest common divisor of given numbers.`);

do {
  let a = generateRandomNumber(max);
  let b = generateRandomNumber(max);

  console.log(`Question: ${a} ${b}`);

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  const gcd = a + b;
  const answer = readlineSync.question("Your answer: ");

  if (Number(answer) === gcd) {
    result = "Correct!";
    counter += 1;
  } else {
    result = `'${answer}' is wrong answer ;(. Correct answer was '${gcd}'`;
  }

  console.log(result);
} while (result === "Correct!" && counter < 3);

console.log(finishGame(result, name));
