import readlineSync from "readline-sync";
import engine from "../engine.js";
import { generateRandomNumber } from "../cli.js";

const rule = `Answer 'yes' if the number is even, otherwise answer 'no'.`;

const evenGameLogic = () => {
  const max = 100;
  const [yes, no] = ["yes", "no"];
  const number = generateRandomNumber(max);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");

  if (number % 2 === 0) {
    if (answer.toLowerCase() === yes) {
      return `Correct!`;
    }

    return `'${answer}' is wrong answer ;(. Correct answer was '${yes}'.`;
  } else {
    if (answer.toLowerCase() === "no") {
      return `Correct!`;
    }

    return `'${answer}' is wrong answer ;(. Correct answer was '${no}'.`;
  }
};

const evenGame = () => engine(rule, evenGameLogic);

export default evenGame;
