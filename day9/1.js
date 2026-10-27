
const prompt = require("prompt-sync")({ sigint: true });
function analyzeNumber() {
    let num = Number(prompt("Enter a number: "));
    if (num > 0) {
        console.log(`${num} is positive.`);
    } else if (num < 0) {
        console.log(`${num} is negative.`);
    } else {
        console.log(`${num} is zero.`);
    }

    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }

    console.log(`The square of ${num} is ${num * num}.`);
    console.log(`The cube of ${num} is ${num * num * num}.`);
}




analyzeNumber();