const Employee = require('../lib/Employee')

test('create an employee object', () => {
  const employee = new Employee('Moe', '3774775', 'moe@moe.com')

  expect(employee.name).toBe('Moe')
  expect(employee.id).toBe('3774775')
  expect(employee.email).toBe('moe@moe.com')
})

test('gets name of employee', () => {
  const employee = new Employee('Moe', '3774775', 'moe@moe.com')

  expect(employee.getName()).toBe('Moe')
})