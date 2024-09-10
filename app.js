export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    return str.split('').reverse().join('');
}

export function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.split('').map(char => {
        if (alphabet.indexOf(char.toLowerCase()) === -1) return char;
        if (isupperCase(char)) {
            char = char.toLowerCase();
            const index = alphabet.indexOf(char);
            const newIndex = (index + shift) % alphabet.length;
            return alphabet[newIndex].toUpperCase();
        } else {
            const index = alphabet.indexOf(char);
            const newIndex = (index + shift) % alphabet.length;
            return alphabet[newIndex];
        }
    }).join('');
    return str;
}

function isupperCase(char) {
    if (char === char.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}

export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

export function analyzeArray(arr) {
    const average = arr.reduce((a, b) => a + b) / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const length = arr.length;
    return {
        average,
        min,
        max,
        length
    };
}
