#!/usr/bin/env node

import readlineSync from "readline-sync";
import { greet, generateRandomNumber, generateRandomArbitary, introduceRules, finishGame } from "../src/cli.js";

const max = 100,
  minCountOfDigits = 5,
  maxCountOfDigits = 10;

let counter = 0;
let result = "";

// const name = greet();
introduceRules(`What number is missing in the progression?`);

do {
  const length = generateRandomArbitary(minCountOfDigits, maxCountOfDigits);
  const hiddenNumber = generateRandomNumber(maxCountOfDigits);
  const sequence = [];
  console.log(`Question: ${sequence}`);
} while (result === "Correct!" && counter < 3);

// console.log(finishGame(result, name));
