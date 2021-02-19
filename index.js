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
            name: 'technology',
            message: 'What technologies were used to make this application?'
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
                'Apache',
                'MIT',
                'MPL',
                'Boost',
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
<h1 style="text-align: center;">${data.title}</h1>

## Table of Contents

- [Description](#Description)
- [Installation](#How-to-install-this-application.)
- [Basic Use](#What-is-the-basic-use-of-this-application?)
- [Credits](#Who-worked-on-this-proyect?)
- [Test](#How-can-this-application-be-tested?)
- [License](#Does-this-application-have-a-license?-If-so,-which-one?)
- [Contact](#Questions?-How-can-we-get-in-contact-with-you?)

## Description

    ${data.description}

## How to install this application.

    ${data.installation}

## What is the basic use of this application?

    ${data.usage}

## Who worked on this proyect?

    ${data.contribution}

## What technologies were used for this application?

    ${data.technology}

## How can this application be tested?

    ${data.test}

## Does this application have a license? If so, which one?

Click on link to see license docs 
[![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)](https://opensource.org/licenses/${data.license}-2.0)

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