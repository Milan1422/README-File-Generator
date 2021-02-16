const inquirer = require('inquirer');
const fs = require('fs');

// prompt lines for inquirer
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your proyect?'
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
]);