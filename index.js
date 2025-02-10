// TODO: Include packages needed for this application
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
        validate: function (value) {
            const valid = /\S+@\S+\.\S+/;
            return valid.test(value) || 'Sorry the email is not valid. Please try again.'
        }
    },
    {
        type: "input",
        message: "Enter a description of the project",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "tests",
    },
    {
        type: "list",
        message: "Choose the following license:",
        name: "license",
        choices: ["MIT", "ISC", "Apache 2.0", "Boost 1.0", "EPL 1.0", "MPL 2.0"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const content = generateMarkdown(data)
    fs.writeFile(fileName, content, (err) => err ? console.error(err) : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile("./output/README.md", data)
        })
}

// Function call to initialize app
init();
