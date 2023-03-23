"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let math_it_up = {
    '+': function (x, y) { return x + y; },
    '-': function (x, y) { return x - y; },
    '/': function (x, y) { return x / y; },
    'x': function (x, y) { return x * y; },
};
inquirer_1.default
    .prompt({
    name: 'operation',
    message: "select an operations: +,-,x,/ \n",
    choices: ["+", "-", "x", "/"]
})
    .then((answers) => {
    let operation = answers.operation;
    inquirer_1.default.prompt([
        {
            type: 'number',
            name: "n1",
            message: "Enter the number 1 \n"
        },
        {
            type: 'number',
            name: "n2",
            message: "Enter the number 2 \n"
        },
    ]).then((answers) => {
        const n1 = answers.n1;
        const n2 = answers.n2;
        console.log("you chose number 1 =", n1);
        console.log("you chose number 2 =", n2);
        console.log("you chose operation =", operation);
        console.log(math_it_up[operation](n1, n2));
    })
        .catch((err) => { console.log("error", err); });
}).catch((err) => { console.log("error", err); });
//output
//     ? select an operations: +,-,x,/ 
//  +
// ? Enter the number 1 
//  10
// ? Enter the number 2 
//  30
// you chose number 1 = 10
// you chose number 2 = 30
// you chose operation = +
// 40
