const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('can set github', () => {
    const github = 'john';
    const e = new Engineer('John', 100, 'john@example.com', github);
    expect(e.github).toBe(github);
});

test('can get github using getGithub() method', () => {
    const github = 'john';
    const e = new Engineer('John', 100, 'john@example.com', github);
    expect(e.getGithub()).toBe(github);
});

test('getRole() returns "Engineer"', () => {
    const role = 'Engineer';
    const e = new Engineer('John', 100, 'john@example.com', 'john');
    expect(e.getRole()).toBe(role);
});