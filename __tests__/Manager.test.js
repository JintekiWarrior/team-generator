const Manager = require('../lib/Manager')

test('create a manager object', () => {
  const manager = new Manager('Moe', '3774775', 'moe@moe.com', '30')

  expect(manager.name).toBe('Moe')
  expect(manager.id).toBe('3774775')
  expect(manager.email).toBe('moe@moe.com')
  expect(manager.officeNumber).toBe('30')
})

test('get the office number from manager', () => {
  const manager = new Manager('Moe', '3774775', 'moe@moe.com', '30')

  expect(manager.getOfficeNumber()).toBe('30')
})

test('get the role of the manager', () => {
  const manager = new Manager('Moe', '3774775', 'moe@moe.com', '30')

  expect(manager.getRole()).toBe('Manager')
})