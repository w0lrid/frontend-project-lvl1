import engine from '../engine.js';
import { generateRandomNumber } from '../cli.js';

const rule = 'What is the result of the expression?';

const generateQuestion = () => {
  const mathOperations = ['+', '-', '*'];
  const max = 3;

  const a = generateRandomNumber(10);
  const b = generateRandomNumber(10);

  const operator = mathOperations[generateRandomNumber(max)];
  const mathExp = `${a} ${operator} ${b}`;
  return mathExp;
};

const calcGameLogic = (mathExp, userAnswer) => {
  const correctAnswer = eval(mathExp);

  if (Number(userAnswer) === correctAnswer) {
    return 'Correct!';
  }

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
};

export default () => engine(rule, generateQuestion, calcGameLogic);
