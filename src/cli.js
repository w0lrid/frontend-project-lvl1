import readlineSync from "readline-sync";

export const greet = () => {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("What's your name, hero? ");

  console.log(`Hello, ${name}`);

  return name;
};

export const introduceRules = (string) => {
  console.log(string);
};

export const generateRandomNumber = (maxBorder) => Math.floor(Math.random() * maxBorder);

export const generateRandomArbitary = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const finishGame = (result, name) => {
  const finisher = result === "Correct!" ? `Congratulations, ${name}!` : `Let's try again, ${name}!`;
  return finisher;
};
