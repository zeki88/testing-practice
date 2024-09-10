const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./app');

test('capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('Reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
})

test('Add', () => {
    expect(calculator.add(1, 2)).toBe(3);
})

test('Subtract', () => {
    expect(calculator.subtract(5, 2)).toBe(3);
})

test('Multiply', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})

test('Divide', () => {
    expect(calculator.divide(10, 2)).toBe(5);
})

test('Cipher', () => {
    expect(caesarCipher('heLLo', 3)).toBe('khOOr');
})

test('Cipher 2', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('Cipher 3', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
})

test('Analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     });
})