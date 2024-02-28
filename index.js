// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const createReadMe = require("./utils/generateMarkdown");

console.log(`\x1b[36m create your own professional README!\x1b[0m`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"Create title for project?"
    },


    {
        type:"input",
        name:"description",
        message:"Write a detailed description of project and why is it important?"
    },

    {
        type:"input",
        name:"contribution",
        message:"how can users contribute to this project?"
    },

    {
        type:"input",
        name:"install",
        message:"What are the steps required to install your project?"
    },

    {
        type:"input",
        name:"intructions",
        message:"Provide instructions for use!"
    },

    {
        type:"input",
        name:"usage",
        message:"Explain usage for this project on why and what's the reason you're creating this project!",
    },

    {
        type:"checkbox",
        name:"license",
        message:"which license fits best for your project?",
        choices:["MIT","GNU","Apache","MPL","None of the above"]
    },

    {
        type:"input",
        name:"test",
        message:"Give step by step on how user can test your project!"
    },

    {
        type:"input",
        name:"contact",
        message:"what is your Github name?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
     fs.writeFile(fileName, data,err=>{
        if(err) throw(err)
        console.log(`\x1b[32m READE successfully completed!\x1b[0m`)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data)=>{
        writeToFile("README.md", createReadMe(data))
    })
}

// Function call to initialize app
init();
