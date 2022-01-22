import readlineSync from "readline-sync";

const greet = () => {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("What's your name, hero? ");

  console.log(`Hello, ${name}`);

  return name;
};

export default greet;
