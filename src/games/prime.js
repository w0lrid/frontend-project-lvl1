import readlineSync from "readline-sync";
import engine from "../engine.js";
import { generateRandomNumber } from "../cli.js";

const rule = `Answer "yes" if given number is prime. Otherwise answer "no".`;

const primeGameLogic = () => {
  const max = 100;
  const [yes, no] = ["yes", "no"];
  const number = generateRandomNumber(max);
  let isPrime = true;

  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");

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
    return String(answer) === yes ? `Correct!` : `'${answer}' is wrong answer ;(. Correct answer was '${yes}'.`;
  }

  return String(answer) === no ? `Correct!` : `'${answer}' is wrong answer ;(. Correct answer was '${no}'.`;
};

const primeGame = () => engine(rule, primeGameLogic);

export default primeGame;
