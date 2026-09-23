
const prompt = require("prompt-sync")({ sigint: true });
const n = Math.floor(Math.random() * 100) + 1;


function startGame() {
    let count = 0;
    while (true) {
        let guess = Number(prompt("Guess the number between 1 and 100: "));
        count++;

        if (guess === n) {
            console.log(`You guessed the number ${n} in ${count} attempts!`);
            if (confirm()) {
                startGame();
            } else {
                break;
            }
        }
        else if (guess < n) {
            console.log("Too low! Try again.");
            count++;
        }
        else if (guess > n) {
            console.log("Too high! Try again.");
            count++;
        }
    }
}
function confirm() {
    let answer = prompt("Do you want to play again? (yes/no)");
    if (answer.toLowerCase() === "yes") {
        return true;
    } else if (answer.toLowerCase() === "no") {
        return false;
    } else {
        console.log("Invalid input. Please enter 'yes' or 'no'.");
        return confirm();
    }
}

startGame();