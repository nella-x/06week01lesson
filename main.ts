import { reverseString, countCharacters, toTitleCase } from "./stringUtils";
import fs from "fs";
import path from "path";

const sentence = "Learning Node. js opens up opportunities for programmers to work on intricate web development and software projects, and sets a solid foundation for learning other JavaScript frameworks such as React and MongoDB.";

const reversedSentence = reverseString(sentence);
fs.writeFileSync('reversed.txt', reversedSentence);

const filePath = path.join(__dirname, 'reversed.txt');
console.log(`Reversed sentence saved at: ${filePath}`);

const charCountNoSpaces = countCharacters(sentence);
const titleCasedSentence = toTitleCase(sentence);

console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversedSentence);
console.log("Character Count (excluding spaces):", charCountNoSpaces);
console.log("Title Case:", titleCasedSentence);
