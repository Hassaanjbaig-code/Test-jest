const capital = require('./Capital.js');

test('First Letter', () => {
    expect(capital("hello")).toBe("Hello")
})

test('First Letter', () => {
    expect(capital("hi")).toBe("Hi")
})