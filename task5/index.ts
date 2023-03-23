// Converting AM/PM Time to Military Time in TypeScript
// Create a TypeScript program that takes a time in the hour AM/PM format as input
// from the user using the inquirer package. The program should then convert the
// time to military (24-hour) time.
// Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM
// on a 12-hour clock is 12:00:00 on a 24-hour clock.
// Use the inquirer package to prompt the user to enter a time in the hour AM/PM
// format.
// Convert the input time to military (24-hour) time using an algorithm.
// Display the converted time to the user as output.

import inquirer from 'inquirer';

inquirer.prompt(
    {
        type: 'input',
        name: 'time',
        message: 'Enter a time in the format HH:MM:SS AM/PM:',
        validate: function (input) {
            // Validate that the input is in the correct format
            const regex = /^(0?[1-9]|1[0-2]):[0-5][0-9]:[0-5][0-9] (AM|PM)$/i;
            return regex.test(input);
        },
    }
)
    .then((answers) => {
        const time = answers.time;
        const hours = Number(time.substring(0, 2));
        const minutes = Number(time.substring(3, 5));
        const seconds = Number(time.substring(6, 8));
        const period = time.substring(9, 11);

        let militaryHours = hours;
        if (period.toUpperCase() === 'PM' && hours !== 12) {
            militaryHours += 12;
        } else if (period.toUpperCase() === 'AM' && hours === 12) {
            militaryHours = 0;
        }

        const militaryTime = `${militaryHours.toString().padStart(2, '0')}:${minutes
            .toString()
            .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        console.log(`The military time is ${militaryTime}`);
    })
    .catch((err) => {
        console.log(err);
    });

export default ({})
