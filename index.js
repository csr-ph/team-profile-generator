// import classes
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// import packages
const util = require('util');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// async the fs methods
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

// define file paths
const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, 'team.html');

const render = require('./lib/generateHTML');

// initialize an empty array to hold the team data
let teamData = [];

const basicQuestion = [
    {
        type: 'list',
        message: "What would you like to do?",
        choices: ['Add Manager', 'Add Engineer', 'Add Intern'],
        name: 'startUp'
    }
];

const managerQuestions = [
    {
        type: 'input',
        message: "What is your Manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is your Manager's id number?",
        name: 'managerId'
    },
    {
        type: 'input',
        message: "What is your Manager's email?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is your Manager's office number?",
        name: 'managerOffice'
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: "What is your Engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is your Engineer's id number?",
        name: 'engineerId'
    },
    {
        type: 'input',
        message: "What is your Engineer's email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is your Engineer's GitHub name?",
        name: 'engineerGithub'
    }
];

const internQuestions = [
    {
        type: 'input',
        message: "What is your Intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is your Intern's id number?",
        name: 'internId'
    },
    {
        type: 'input',
        message: "What is your Intern's email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is your Intern's school?",
        name: 'internSchool'
    }
];

const whichKind = [
    {
        type: 'list',
        message: "What kind of team member would you like to add?",
        choices: ['Engineer', 'Intern', 'Done'],
        name: 'whichMember'
    }
];

// function to inizialize app

function init() {
    promptManager();
}

function newMember() {
    inquirer.prompt(whichKind).then((response) => {
        switch (response.whichMember) {
            case 'Engineer':
                promptEngineer();
                break;
            case 'Intern':
                promptIntern();
                break;
            case 'Done':
                console.log('Team created.');
                generateTeam();
        }
    })
}

function promptManager() {
    inquirer.prompt(managerQuestions).then((response) => {
        let name = response.managerName;
        let id = response.managerId;
        let email = response.managerEmail;
        let officeNumber = response.managerOffice;

        const manager = new Manager(name, id, email, officeNumber);
        teamData.push(manager);
        
        newMember();
    })
}

function promptEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.engineerName;
        let id = response.engineerId;
        let email = response.engineerEmail;
        let github = response.engineerGithub;

        const engineer = new Engineer(name, id, email, github);
        teamData.push(engineer);

        newMember();
    })
}

function promptIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        let name = response.internName;
        let id = response.internId;
        let email = response.internEmail;
        let school = response.internSchool;

        const intern = new Intern(name, id, email, school);
        teamData.push(intern);

        newMember();
    })

}

function generateTeam() {
    const data = render(teamData);
    writeFileAsync(outputPath, data, function(err) {
        if (err) {
            throw err;
        }
    })
}

init();