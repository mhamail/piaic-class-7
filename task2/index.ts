// Basic Calculator using inquirer
// Install the inquirer package using npm.
// Use the inquirer package to prompt the user to select an operation (addition,
// subtraction, multiplication, division) and enter two numbers.
// Based on the selected operation, perform the corresponding mathematical
// operation and display the result to the user as output.

import inquirer from 'inquirer';
let math_it_up : {[key: string]: (x: number, y: number) => number}={
    '+': function (x: number, y: number) { return x + y },
    '-': function (x: number, y: number) { return x - y },
    '/': function (x: number, y: number) { return x / y },
    'x': function (x: number, y: number) { return x * y },
}
inquirer
    .prompt({
        name: 'operation',
        message: "select an operations: +,-,x,/ \n",
        choices: ["+", "-", "x", "/"]
    })
    .then((answers) => {
        let operation:string = answers.operation;
        inquirer.prompt([
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
            console.log("you chose number 1 =", n1)
            console.log("you chose number 2 =", n2)
            console.log("you chose operation =", operation);
            
            console.log(math_it_up[operation](n1, n2))
        })
            .catch((err) => { console.log("error", err) })
    }).catch((err) => { console.log("error", err) })


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


