// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// generates markdown for readme file
function generateMarkdown(data) {
  return`# ${data.title} 

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)


## Description 

${data.description} 


## Installation

${data.installation} 

## Usage Information

${data.usage} 

## License

${data.license} 


## Contribution Guidelines

${data.contribution} 


## Test Instructions

${data.test} 


## Questions

Here is my GitHub link:

${data.github}

If you would like to contact me here is my E-mail:

${data.email} 


`;
}

module.exports = generateMarkdown;
