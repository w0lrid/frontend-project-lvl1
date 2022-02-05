import engine from '../engine.js';
import { generateRandomNumber } from '../cli.js';

const rule = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const generateQuestion = () => {
  const max = 100;
  return generateRandomNumber(max);
};

const evenGameLogic = (number, answer) => {
  const [yes, no] = ['yes', 'no'];

  if (number % 2 === 0) {
    return answer.toLowerCase() === yes ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${yes}'.`;
  }
  return answer.toLowerCase() === no ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${no}'.`;
};

export default () => engine(rule, generateQuestion, evenGameLogic);
