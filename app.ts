#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.red.bold("\n\t *********** QUIZ GAME *********** \n\t"));


interface QuizAnswer {
    Question1: string,
    Question2: string,
    Question3: string,
    Question4: string,
    Question5: string,
}

const quiz = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        message: chalk.magentaBright("Q1. How do you define a custom type in TypeScript?"),
        choices: ["interface", "type", "typedef", "Both A and C"]
    },
    {
        name: "Question2",
        type: "list",
        message: "Q2. How do you denote a variable as readonly in TypeScript?",
        choices: ["const", "static", "readonly", "fixed"]
    },
    {
        name: "Question3",
        type: "list",
        message: "Q3. How do you declare a variable that can be either a string or null in TypeScript?",
        choices: ["let variable: string || null;", "let variable: string | null;", "let variable: string & null;", "let variable: string && null;"]
    },
    {
        name: "Question4",
        type: "list",
        message: "Q4.Which TypeScript keyword allows for a child class to override a method of its parent class? ",
        choices: ["override", "super", "over", "extends"]
    },
    {
        name: "Question5",
        type: "list",
        message: "Q5. How do you define an array of strings in TypeScript? ",
        choices: ["Array<string>", "string[]", "Both A and B", "List<string>"]
    }
]);

let score: number = 0;

switch (quiz.Question1) {
    case "Both A and C":
        console.log(chalk.green("Q1.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("Q1.Wrong!"));
}

switch (quiz.Question2) {
    case "readonly":
        console.log(chalk.green("Q2.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("Q2.Wrong!"));
}

switch (quiz.Question3) {
    case "let variable: string | null;":
        console.log(chalk.green("Q3.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("Q3.Wrong!"));
}

switch (quiz.Question4) {
    case "super":
        console.log(chalk.green("Q4.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("Q4.Wrong!"));
}

switch (quiz.Question5) {
    case "Both A and B":
        console.log(chalk.green("Q5.Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.red("Q5.Wrong!"));
}

console.log(chalk.yellowBright(`Your score is: ${score}`));
