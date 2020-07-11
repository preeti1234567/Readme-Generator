const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);
/*
 * Title
 * Description
 * Table of Contents
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * Questions
 */
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is the github url?",
  },
  {
    type: "input",
    name: "repositary",
    message: "What is the repositary?",
  },
  {
    type: "input",
    name: "username",
    message: "Github UserName",
  },
  {
    type: "password",
    name: "password",
    message: "Github Password",
  },
  {
    type: "confirm",
    message: "Would you like to add a Badge URL?",
    name: "confirmBadge",
  },
  {
    type: "input",
    name: "project_title",
    message: "Project Title",
  },
  {
    type: "input",
    name: "description",
    message: "Description of the Project",
  },
  {
    type: "input",
    name: "table_of_content",
    message: "Table Of Content(comma separted)",
  },
  {
    type: "input",
    name: "installation",
    message: "What is required to install the project",
  },
  {
    type: "input",
    name: "usage",
    message: "How to use this project",
  },
  {
    type: "input",
    name: "license",
    message: "What is the license Agreement",
    default: function () {
      return "Copyright (c) 2020 Preeti Gupta Licensed under the MIT license.";
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Who all are contributor for this project",
  },
  {
    type: "input",
    name: "tests",
    message: "tests case with example",
  },
  {
    type: "input",
    name: "questions",
    message: "Any Question",
  },  
];

async function writeToFile(data) {
    await writeFileAsync("2pac.md", generateMarkdown(data));    

    console.log("Successfully generated Mardown file.");
}

//  function init() {

//     inquirer.prompt(questions)
//     .then(answers => {
//         writeToFile(answers)
//     })
//     .catch(error => {
//         if(error.isTtyError) {
//         // Prompt couldn't be rendered in the current environment
//         } else {
//         // Something else when wrong
//         }
//   });
// }



async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    await writeToFile(answers);
  } catch (err) {
    console.log(err);
  }
}

init();
