// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github User name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide short description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what command should be run to install the dependecies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'what does the user need to know about using the repo?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please choose lisence from the below list for your project',
        choices: ['MIT','Apache2.0','GPLv3','Mozilla Public License2.0','The Unlisence']
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'what does the user need to know about contribution to the repo?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'what command should be used to run the test?',
        default: 'npm test' 
    }, 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
