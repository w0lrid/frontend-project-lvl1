import { greet, introduceRules, finishGame } from "./cli.js";

const engine = (rule, runGame) => {
  let counter = 0;
  let result = "Correct";

  const name = greet();
  introduceRules(rule);

  do {
    result = runGame();
    counter += 1;
    console.log(result);
  } while (counter < 3 && result === "Correct!");

  console.log(finishGame(result, name));
};

export default engine;
