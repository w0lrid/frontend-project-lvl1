import engine from "../engine.js";
import { generateRandomNumber, generateRange } from "../cli.js";

const rule = `What number is missing in the progression?`;
let hiddenNumber = null;
const createSequence = () => {
  const maxStep = 20;
  const minCountDigits = 5;
  const maxCountDigits = 10;

  const length = generateRange(minCountDigits, maxCountDigits);
  const positionHiddenNumber = generateRandomNumber(length);
  const stepOfSequence = generateRange(1, 10);
  const sequence = [];
  let digit = generateRandomNumber(maxStep);

  for (let i = 0; i < length; i += 1) {
    digit += stepOfSequence;
    sequence.push(digit);
  }

  hiddenNumber = sequence[positionHiddenNumber];
  sequence[positionHiddenNumber] = "..";

  return sequence;
};

const generateQuestion = () => {
  const sequence = createSequence();
  return sequence.join(" ");
};

const progressionGameLogic = (sequence, answer) => {
  return Number(answer) === hiddenNumber
    ? "Correct!"
    : `'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'`;
};

export default () => engine(rule, generateQuestion, progressionGameLogic);
