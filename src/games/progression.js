import readlineSync from "readline-sync";
import engine from "../engine.js";
import { generateRandomNumber, generateRandomArbitary } from "../cli.js";

const rule = `What number is missing in the progression?`;

const progressionGameLogic = () => {
  const maxStep = 20;
  const minCountDigits = 5;
  const maxCountDigits = 10;

  const length = generateRandomArbitary(minCountDigits, maxCountDigits);
  const positionHiddenNumber = generateRandomNumber(length);
  const stepOfSequence = generateRandomArbitary(1, 10);
  const sequence = [];
  let digit = generateRandomNumber(maxStep);

  for (let i = 0; i < length; i += 1) {
    digit += stepOfSequence;
    sequence.push(digit);
  }

  const hiddenNumber = sequence[positionHiddenNumber];
  sequence[positionHiddenNumber] = "..";

  console.log(`Question: ${sequence.join(" ")}`);
  const answer = readlineSync.question("Your answer: ");

  if (Number(answer) === hiddenNumber) {
    return "Correct!";
  }

  return `'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'`;
};

const progressionGame = () => engine(rule, progressionGameLogic);

export default progressionGame;
