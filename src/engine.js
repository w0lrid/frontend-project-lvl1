import readlineSync from 'readline-sync';

const engine = (rule, getQuestion, runGame) => {
  let counter = 0;
  let result = 'Correct';

  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question("What's your name, hero? ");

  console.log(`Hello, ${name}`);
  console.log(rule);

  do {
    const question = getQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');
    result = runGame(question, answer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === 'Correct!');

  console.log(result === 'Correct!' ? `Congratulations, ${name}!` : `Let's try again, ${name}!`);
};

export default engine;
