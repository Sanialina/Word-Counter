#! /usr/bin/env node

import inquirer from"inquirer"
import chalk from "chalk"

console.log(chalk.bold.blue("\n \t\t Welcome To My Word Counter\n"))
console.log("*".repeat(80));

let answers = await inquirer.prompt([
    {
        name : "sentence",
        type: "input",
        message : "Enter a sentence or paragraph"
    }
])

let words = answers.sentence.trim().split(" ")

console.log(chalk.italic.blueBright("\n sentence Words\n"))
console.log(words);
console.log(chalk.bold(` \n Word count: ${chalk.bold.redBright(words.length)}\n `))