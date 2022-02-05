import readlineSync from "readline-sync";

export const greet = () => {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("What's your name, hero? ");

  console.log(`Hello, ${name}`);

  return name;
};

export const generateRandomNumber = (maxBorder) => Math.floor(Math.random() * maxBorder);

export const generateRange = (min, max) => Math.floor(Math.random() * (max - min) + min);
