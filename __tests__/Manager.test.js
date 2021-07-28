const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('can set office number', () => {
    const officeNumber = '69';
    const e = new Manager('John', 100, 'john@example.com', officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test('can get office number with getOfficeNumber() method', () => {
    const officeNumber = '69';
    const e = new Manager('John', 100, 'john@example.com', officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test('can return "Manager" with getRole() method', () => {
    const role = 'Manager';
    const e = new Manager('John', 100, 'john@example.com', 69);
    expect(e.getRole()).toBe(role);
});