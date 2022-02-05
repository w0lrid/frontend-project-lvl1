import engine from '../engine.js';
import { generateRandomNumber } from '../cli.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestion = () => {
  const max = 100;
  return generateRandomNumber(max);
};

const primeGameLogic = (number, answer) => {
  const [yes, no] = ['yes', 'no'];
  let isPrime = true;

  if (number <= 1) {
    isPrime = false;
  } else if (number > 1) {
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    return String(answer) === yes ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${yes}'.`;
  }

  return String(answer) === no ? 'Correct!' : `'${answer}' is wrong answer ;(. Correct answer was '${no}'.`;
};

const primeGame = () => engine(rule, generateQuestion, primeGameLogic);

export default primeGame;
