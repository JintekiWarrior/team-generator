const inquirer = require('inquirer')

const Manager = require('./lib/Manager')

const employees = []

// Add prompts to ask employee info
const promptEmployee = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the employee id?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the employee email?'
    },
    {    
      type: 'list',
      name: 'role',
      messag: 'Select a role for the employee',
      choices: ['Engineer', 'Manager', 'Intern']
    }
  ])
}

const promptManager = (name, id, email) => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?"
    }
  ])
  // creates the manager object and pushes it into the employees array
  .then(data => {
    const manager = new Manager(name, id, email, data.officeNumber)
    console.log(manager)
    employees.push(manager)
  })
}

promptEmployee()
  .then(data => {
    if (data.role === 'Manager') {
      promptManager(data.name, data.id, data.email)
    }
  })

// Last add a prompt to allow user to select a role from a list

// depending on the role chosen other prompts will appear