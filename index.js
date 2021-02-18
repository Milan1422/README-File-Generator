const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// prompt lines for inquirer
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your proyect?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a summary of what this project is about.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can someone install your application?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the standard use of this application?'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Who else worked on this project?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How can someone test this application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want for this application?',
            choices: [
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'Eclipse Public License',
                'None'
            ]
        },
        {
            type: 'input',
            name: 'contactgit',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'contactemail',
            message: 'What is your email?'
        },
]);
}

// README file template
function mdFileTemplate(data) {
    return `
# ${data.title}

## Table of Contents

- [Description](#usage)
- [Installation](#installation)
- [Credits](#contribution)
- [Test](#test)
- [License](#license)
- [Contact](#contact)

## Description

    ${data.description}

## How to install this application.

    ${data.installation}

## What is the basic use of this application?

    ${data.usage}

## Who worked on this proyect?

    ${data.contribution}

## How can this application be tested?

    ${data.test}

## Does this application have a license? If so, which one?

    ${data.license}

## Questions? How can we get in contact with you?

[GitHub:] https://github.com/${data.contactgit}
[Email:] ${data.contactemail}
    `
}

// function to put generated file together
async function init() {
    try {
        const data = await promptUser();
        const readMeFile = mdFileTemplate(data);
        await writeFileAsync("README.md", readMeFile);
    } catch (err) {
        console.log(err)
    }
}
init()