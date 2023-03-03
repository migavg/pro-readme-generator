// Creates License badge depending on license chosen
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  }
  else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  }
  else if (license === "Apache 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license === "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`
  }
  else if (license === "None") {
    return "";
  }
}
//Creates a link for type of license that is chosen
function renderLicenseLink(license) {
if (license === "MIT") {
  return `https://opensource.org/licenses/MIT`
}
else if (license === "Mozilla") {
  return `https://opensource.org/licenses/MPL-2.0`
}
else if (license === "Apache 2.0") {
  return `https://opensource.org/licenses/Apache-2.0`
}
else if (license === "ISC") {
  return `https://opensource.org/licenses/ISC`
}
else if (license === "None") {
  return "";
}
}
//Creates a license section if license type is chosen
function renderLicenseSection(license) {
  if (license !=="None") {
    return `## License
    
  ${license} ${renderLicenseLink(license)}`
  }
  else if (license === "None"){
return "";
  }
}

// generates markdown for readme file
function generateMarkdown(data) {
  return`# ${data.title} 

  ${renderLicenseBadge(data.license)}

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

## Usage

${data.usage} 


${renderLicenseSection(data.license)} 


## Contribution

${data.contribution} 


## Test

${data.test} 


## Questions

Here is my GitHub link:

${data.github}

If you would like to contact me here is my E-mail:

${data.email} 


`;
}

module.exports = generateMarkdown;
