const {add, sub, mul , divide} = require('./calculater.js');

describe('my calculator', () =>{
    test('Calculate 5 and 6', () => {
        expect(add(5,7)).toBe(12);
    })
    test('Calculate 5 and 6', () => {
        expect(sub(5,7)).toBe(-2);
    })
    test('Calculate 5 and 6', () => {
        expect(mul(5,7)).toBe(35);
    })
    test('Calculate 5 and 6', () => {
        expect(divide(5,7)).toBe(0.7142857142857143);
    })
})
describe('my calculator function 2', () =>{
    test('Calculate 100 and 5', () => {
        expect(add(100,5)).toBe(105);
    })
    test('Calculate 5 and 6', () => {
        expect(sub(100,5)).toBe(95);
    })
    test('Calculate 5 and 6', () => {
        expect(mul(100,5)).toBe(500);
    })
    test('Calculate 5 and 6', () => {
        expect(divide(100,5)).toBe(20);
    })
})
describe('my calculator function 3', () =>{
    test('Calculate 100 and 0', () => {
        expect(add(100,0)).toBe(100);
    })
    test('Calculate 5 and 6', () => {
        expect(sub(100,0)).toBe(100);
    })
    test('Calculate 5 and 6', () => {
        expect(mul(100,0)).toBe(0);
    })
    test('Calculate 5 and 6', () => {
        expect(divide(100,0)).toBe(Infinity);
    })
})
