const reverseString = require('./reverseString.js');

test('reverseString of abc', () => {
    expect(reverseString('abc')).toBe('cba');
})
test('reverseString of ""', () => {
    expect(reverseString('')).toBe('string lenght should be greaten than 1');
})