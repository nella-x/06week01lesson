"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toTitleCase = exports.countCharacters = exports.reverseString = void 0;
const reverseString = (str) => {
    return str.split('').reverse().join('');
};
exports.reverseString = reverseString;
const countCharacters = (str) => {
    return str.replace(/\s/g, "").length; // Räknar tecken utan mellanslag
};
exports.countCharacters = countCharacters;
const toTitleCase = (str) => {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};
exports.toTitleCase = toTitleCase;
