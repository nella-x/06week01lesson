"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stringUtils_1 = require("./stringUtils");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sentence = "Learning Node. js opens up opportunities for programmers to work on intricate web development and software projects, and sets a solid foundation for learning other JavaScript frameworks such as React and MongoDB.";
const reversedSentence = (0, stringUtils_1.reverseString)(sentence);
fs_1.default.writeFileSync('reversed.txt', reversedSentence);
const filePath = path_1.default.join(__dirname, 'reversed.txt');
console.log(`Reversed sentence saved at: ${filePath}`);
const charCountNoSpaces = (0, stringUtils_1.countCharacters)(sentence);
const titleCasedSentence = (0, stringUtils_1.toTitleCase)(sentence);
console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count (excluding spaces):", charCountNoSpaces);
console.log("Title Case:", titleCasedSentence);
