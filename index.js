//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Create an array of questions for user input using inquirier
function questions() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Project title?",
      },
      {
        type: "list",
        name: "license",
        message: "Chose license for project: ",
        choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
      },
    ]);
}
//function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.error(err) : console.log("Files Cleared!\t")
  );
}

//function to initialize app
function init() {
  const userInput = questions();
  const filename = "README.md"
  //console.log(filename);
  //writeToFile(filename, userInput);
  //generateMarkdown();
}

// Function call to initialize app
init();
