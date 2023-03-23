"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let promptSync = require('prompt-sync')();
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const promptSync = (0, prompt_sync_1.default)();
let englishMarks;
let mathMarks;
let scienceMarks;
englishMarks = Number(promptSync('Enter English marks: '));
mathMarks = Number(promptSync('Enter Math marks: '));
scienceMarks = Number(promptSync('Enter Science marks: '));
console.log(`English Marks: ${englishMarks}`);
console.log(`English Marks: ${mathMarks}`);
console.log(`English Marks: ${scienceMarks}`);
//output
// Enter English marks: 100
// Enter Math marks: 200
// Enter Science marks: 300
// English Marks: 100
// English Marks: 200
// English Marks: 300
