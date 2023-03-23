// Task 3:
// To-Do List using inquirer
// Install the inquirer package using npm.
// Use the inquirer package to prompt the user to enter a task and add it to a list of
// tasks.
// Display the list of tasks to the user and prompt them to mark a task as completed or
// delete a task from the list.
// Display the updated list of tasks to the user after each operation.

import inquirer from 'inquirer';

const tasks: any[] = [];
const displayTasks = () => {
    console.log(tasks);
}

// Use the inquirer package to prompt the user to enter a task and add it to a list of
// tasks.
inquirer.prompt(
    {
        type: 'input',
        name: "task",
        message: "Enter a Task"
    }
)
    .then((answers) => {
        tasks.push(answers.task)
        displayTasks();
        // Display the list of tasks to the user and prompt them to mark a task as completed or Delete
        inquirer.prompt(
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: ["Mark as completed", "Delete"],
            }
        )
            .then((answers) => {
                // condition Mark as Completed
                if (answers.action === "Mark as completed") {
                    inquirer.prompt(
                        {
                            type: 'list',
                            name: 'taskIndex',
                            message: 'Select a task to mark as completed:',
                            choices: tasks,
                        }
                    )
                        .then((answers) => {
                            let index = tasks.indexOf(answers.taskIndex)
                            tasks[index] = `Completed ${answers.taskIndex}`
                            displayTasks()
                        })
                }
                // condition Delete Task
                else if (answers.action === "Delete") {
                    inquirer.prompt(
                        {
                            type: 'list',
                            name: 'taskIndex',
                            message: 'delete a task:',
                            choices: tasks,
                        }
                    )
                        .then((answers) => {
                            let index = tasks.indexOf(answers.taskIndex)
                            tasks.splice(index, 1);
                            displayTasks();
                        })
                }
            })

    })
    .catch((err) => { console.log(err) })