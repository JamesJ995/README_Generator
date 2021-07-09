// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadgeReturn;
  switch(license) {
    case 'Apache':
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "Eclipse":
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
      break;
      case "GNU":
      licenseBadgeReturn = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
      break;
      case "IBM":
      licenseBadgeReturn = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      break;
      case "MIT":
      licenseBadgeReturn = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
      case "Mozilla":
      licenseBadgeReturn = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
      break;
    default:
      licenseBadgeReturn = "";
      break;
  }
  return licenseBadgeReturn;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseBadgeReturn;
  switch(license) {
    case 'Apache':
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
      break;
    case "Eclipse":
      licenseBadgeReturn = `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
      break;
      case "GNU":
      licenseBadgeReturn = `![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)`;
      break;
      case "IBM":
      licenseBadgeReturn = `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
      break;
      case "MIT":
      licenseBadgeReturn = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
      break;
      case "Mozilla":
      licenseBadgeReturn = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
      break;
    default:
      licenseBadgeReturn = "";
      break;
  }
  return licenseBadgeReturn;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(licenseBadge, licenseLink);
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#Contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${licenseBadge}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
