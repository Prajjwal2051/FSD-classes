
const prompt = require("prompt-sync")({ sigint: true });

function findMax() {
    const num1 = Number(prompt("Enter the first number: "));
    const num2 = Number(prompt("Enter the second number: "));
    const num3 = Number(prompt("Enter the third number: "));

    let max;

    if (num1 >= num2 && num1 >= num3) {
        max = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        max = num2;
    } else {
        max = num3;
    }

    console.log(`The maximum number is: ${max}`);
}

findMax();