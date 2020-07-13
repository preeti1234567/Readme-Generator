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
    name: "userName",
    message: "What is the github username?",
  },
  {
    type: "input",
    name: "github_url",
    message: "What is your github url?",
  }, 
  {
    type: "input",
    name: "repositary_name",
    message: "What is your repositary?",
  },  
  {
    type: "checkbox",
    message: "Select Badges",
    name: "badges",
    choices: ['Website up', 'Website down','GitHub contributors', 'GitHub stars'],
    validate: function (answer) {
      if (answer.length < 1) {
        return 'You must choose at least one badges.';
      }
      return true;
    },
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
    message: "Who all are contributor for this project(comma separted)",
  },
  {
    type: "input",
    name: "tests",
    message: "How to run the automated tests for this system ",
  },
  {
    type: "input",
    name: "questions",
    message: "Any Questions",
  }
];

async function writeToFile(data) {
  await writeFileAsync("GoodReadme.md", generateMarkdown(data));

  console.log("Successfully generated Mardown file.");
}

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    await writeToFile(answers);
  } catch (err) {
    console.log(err);
  }
}

init();
