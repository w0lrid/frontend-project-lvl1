import readlineSync from "readline-sync";
import engine from "../engine.js";
import { generateRandomNumber } from "../cli.js";

const rule = `Find the greatest common divisor of given numbers.`;

const gcdGameLogic = () => {
  const max = 100;

  let a = generateRandomNumber(max);
  let b = generateRandomNumber(max);

  console.log(`Question: ${a} ${b}`);
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  const gcd = a + b;
  const answer = readlineSync.question("Your answer: ");

  if (Number(answer) === gcd) {
    return "Correct!";
  }

  return `'${answer}' is wrong answer ;(. Correct answer was '${gcd}'`;
};

const gcdGame = () => engine(rule, gcdGameLogic);

export default gcdGame;
