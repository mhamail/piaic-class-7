// Task 4:
// Finding Minimum and Maximum Sum of Integers in TypeScript
// Create a TypeScript program that includes an array of five positive integers.
// Use an algorithm to find the minimum and maximum sums that can be calculated
// by summing exactly four of the five integers in the array.
// Display the respective minimum and maximum values to the user as output in a
// single line of two space-separated long integers.
// arr=[1,3,5,7,9]
// Example
// The minimum sum is 1+3+5+7=16 and
// the maximum sum is 3+5+7+9=24
// The function prints 16 24 (Required output)

let numbers: number[] = [1, 3, 5, 7, 9]

const minSum = numbers.slice(0, 4).
    reduce((acc, curr) =>
        acc + curr, 0);
const maxSum = numbers.reduce((acc, curr) =>
    acc + curr, 0);
console.log(`${minSum} ${maxSum}`);

// output 16 25