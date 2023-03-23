// let promptSync = require('prompt-sync')();
import prompt from 'prompt-sync';
const promptSync = prompt();

let englishMarks: number;
let mathMarks:number; 
let scienceMarks:number; 

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
