import readlineSync from "readline-sync";
import engine from "../engine.js";
import { generateRandomNumber } from "../cli.js";

const rule = `What is the result of the expression?`;

const calcGameLogic = () => {
  const mathOperations = ["+", "-", "*"];
  const max = 3;

  const a = generateRandomNumber(10);
  const b = generateRandomNumber(10);

  const operator = mathOperations[generateRandomNumber(max)];
  const mathExp = `${a} ${operator} ${b}`;
  const correctAnswer = eval(mathExp);

  console.log(`Question: ${mathExp}`);
  const userAnswer = Number(readlineSync.question(`Your answer:`));

  if (userAnswer === correctAnswer) {
    return "Correct!";
  }

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};

const calcGame = () => engine(rule, calcGameLogic);

export default calcGame;
