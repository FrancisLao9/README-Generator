// TODO: Include packages needed for this application
const inquirer = require('questions');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// Questions prompting the user to enter Title, Description, Installation, etc.
const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'Enter Title:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter Description: '
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter Installation Instructions: '
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter Usage Instructions: '
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter Contributions: '
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter Tests: '
        },
        {
            type: 'list',
            name: 'license',
            choices: [
                `None`,
                `Apache License 2.0`,
                `GNU General Public License v3.0`,
                `MIT License`,
                `BSD 2-Clause Simplified License`,
                `BSD 3-Clause New or Revised License`,
                `Boost Software License 1.0`,
                `Creative Commons Zero v1.0 Universal`,
                `Eclipse Public License 2.0`,
                `GNU Affero General Public License v3.0`,
                `GNU General Public License v2.0`,
                `GNU Lesser General Public License v2.1`,
                `Mozilla Public License 2.0`,
                `The Unlicense`
            ],
            message: 'Enter License: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter GitHub Username: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter Email Address: '
        },
    ];
// TODO: Create a function to write README file
function writeToFile(filename, data) {
    inquirer
    .prompt(questions)
    .then((info)=> {
        const content = generateMarkdown(info);
        fs.writeFile(filename, content, function(error){
            if (error) {
                console.error(error);
                return;
            } else {
                console.log("File Created");
            }
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
