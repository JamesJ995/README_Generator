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
      message: "Project title?",
    },
    {
      type: "input",
      name: "description",
      message: "Project title?",
    },
    {
      type: "input",
      name: "toc",
      message: "Project title?",
    },
    {
      type: "input",
      name: "install",
      message: "Project title?",
    },
    {
      type: "input",
      name: "usage",
      message: "Project title?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose license for project: ",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Project title?",
    },
    {
      type: "input",
      name: "tests",
      message: "Project title?",
    },
    {
      type: "input",
      name: "questions",
      message: "Project title?",
    },
  ]);
}

//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("READEME.md File Generated")
  );
}

//function to initialize app
async function init() {
  const userInput = await questions();
  const fileName = "README.md";
  const readMe = await generateMarkdown(userInput);
  writeToFile(fileName, readMe);
}

// Function call to initialize app
init();
