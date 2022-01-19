import readlineSync from "readline-sync";

export const greetPlayer = () => {
    console.log("Welcome to the Brain Games!");

    setTimeout(() => {
        const name = readlineSync.question("What's your name, hero? ");
        console.log(`Hello, ${name}`);
    }, 500);
};
