// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
   err ? console.log(err) : console.log("Successfully created README.md")
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
