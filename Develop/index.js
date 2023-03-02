// global variable used through the script 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown.js");
// questionst that the prompt will ask user
const questions = [
    {
        type:"input",
        name: "title",
        message: "What is your title?",
    },

    {
        type:"input",
        name: "description",
        message: "What is your description?",
    },

    {
        type:"input",
        name: "installation",
        message: "How do you install?",
    },

    {
        type:"input",
        name: "usage",
        message: "What is your usage of this project?",
    },

    {
        type:"checkbox",
        name: "license",
        message: "What license are you using?",
        choices: ["MIT", "Mozilla", "Apache 2.0", "ISC" ],
    },

    {
        type:"input",
        name: "contribution",
        message: "What are the contribution guidelines?",
    },

   {
        type:"input",
        name: "test",
        message: "What are the test instructions?",
    },

    {
        type:"input",
        name: "github",
        message: "What is your GitHub?",
    },

    {
        type:"input",
        name: "email",
        message: "What is your email?",
    },
];

// function that writes the readme 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
   err ? console.log(err) : console.log("Successfully created README.md")
    );
}

// function that initialize app by prompting questions to user then goes into the writeToFile function
function init() {
inquirer.prompt(questions)
.then(function (answers){
    console.log(answers)
    writeToFile("../sample/README.md", generateMarkDown(answers));
});

};

// Function call to initialize app
init();
