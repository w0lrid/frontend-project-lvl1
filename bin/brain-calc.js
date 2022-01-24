#!/usr/bin/env node
import readlineSync from "readline-sync";
import { finishGame, generateRandomNumber, greet, introduceRules } from "../src/cli.js";

const mathOperations = ["+", "-", "*"];
const max = 3;

const name = greet();
introduceRules(`What is the result of the expression?`);

let result = "";
let counter = 0;

do {
  const a = generateRandomNumber(10);
  const b = generateRandomNumber(10);
  const operator = mathOperations[generateRandomNumber(max)];
  const mathExp = `${a} ${operator} ${b}`;
  const correctAnswer = eval(mathExp);

  console.log(`Question: ${mathExp}`);
  const userAnswer = Number(readlineSync.question(`Your answer:`));

  if (userAnswer === correctAnswer) {
    result = "Correct!";
    counter += 1;
  } else {
    result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  }

  console.log(result);
} while (result === "Correct!" && counter < 3);

console.log(finishGame(result, name));
