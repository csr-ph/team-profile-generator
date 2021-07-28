const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');

test('able to set school', () => {
    const school = 'east high';
    const e = new Intern('John', 100, 'john@example.com', school);
    expect(e.school).toBe(school);
});

test('able to get school with getSchool() method', () => {
    const school = 'east high';
    const e = new Intern('John', 100, 'john@example.com', school);
    expect(e.getSchool()).toBe(school);
});

test('return "Intern" with getRole() method', () => {
    const role = 'Intern';
    const e = new Intern('John', 100, 'john@example.com', 'east high');
    expect(e.getRole()).toBe(role);
});