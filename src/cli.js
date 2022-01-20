import readlineSync from "readline-sync";

const greet = () => {
  console.log("Welcome to the Brain Games!");

  setTimeout(() => {
    const name = readlineSync.question("What's your name, hero? ");
    console.log(`Hello, ${name}`);
  }, 500);
};

export default greet;
