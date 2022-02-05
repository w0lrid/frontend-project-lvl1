import engine from '../engine.js';
import { generateRandomNumber } from '../cli.js';

const rule = `Find the greatest common divisor of given numbers.`;

const generateQuestion = () => {
  const max = 100;
  const a = generateRandomNumber(max);
  const b = generateRandomNumber(max);
  return `${a} ${b}`;
};

const gcdGameLogic = (question, answer) => {
  const numbers = question.split(' ').map(Number);
  let [a, b] = numbers;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  const gcd = a + b;

  if (Number(answer) === gcd) {
    return 'Correct!';
  }

  return `'${answer}' is wrong answer ;(. Correct answer was '${gcd}'`;
};

export default () => engine(rule, generateQuestion, gcdGameLogic);
