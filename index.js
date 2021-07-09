//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//Create an array of questions for user input using inquirier
function questions() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "<Your-Project-Title?>",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a short description",
    },
    {
      type: "input",
      name: "install",
      message: "What are the steps required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use.",
    },
    {
      type: "list",
      name: "license",
      message: "Chose license for project: ",
      choices: ["Apache", "Eclipse", "GNU", "IBM", "MIT", "Mozilla"],
    },
    {
      type: "input",
      name: "contributing",
      message: "List your collaborators",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide tests and examples for use.",
    },
    {
      type: "input",
      name: "questions",
      message: "How can you be reached?",
    },
  ]);
}

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File Created:\t newREADME.md")
  );
}

//function to initialize app
async function init() {
  const userInput = await questions();
  const fileName = "newREADME.md";
  const readMe = await generateMarkdown(userInput);
  writeToFile(fileName, readMe);
}

// Function call to initialize app
init();
