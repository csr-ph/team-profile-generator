const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('can create new employee as an object', () => {
    const e = new Employee();
    expect(typeof(e)).toBe('object');
});

test('can set the name of an employee', () => {
    const name = 'John';
    const e = new Employee(name);
    expect(e.name).toBe('John');
});

test('can set the id of an employee', () => {
    const id = 100;
    const e = new Employee('John', id);
    expect(e.id).toBe(100);
});

test('can set the email of an employee', () => {
    const email = 'john@example.com';
    const e = new Employee('John', 100, email);
    expect(e.email).toBe('john@example.com');
});

test('can get name via the getName() method', () => {
    const name = 'John';
    const e = new Employee(name);
    expect(e.getName(name)).toBe(name);
});

test('can get email via the getEmail() method', () => {
    const email = 'john@example.com';
    const e = new Employee('John', 100, email);
    expect(e.getEmail(email)).toBe(email);
});

test('can get id via the getId() method', () => {
    const id = 100;
    const e = new Employee('John', id);
    expect(e.getId(id)).toBe(id);
});

test('getRole() returns "Employee"', () => {
    const role = 'Employee';
    const e = new Employee('John', 100, 'john@example.com');
    expect(e.getRole()).toBe(role);
});
