const { default: TestRunner } = require('jest-runner');
const timesTwo = require('./timesTwo');

test('returns the number timies 2', () => {
	expect(timesTwo(10)).toBe(20);
});