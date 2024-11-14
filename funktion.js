//1 Create a function called greet that logs the string "Hello, World!" to the console.

function greeting () {
    console.log("hello world!");
}

//2 Write a function named favoriteNumber that logs your favorite number (e.g., 42) to the console.
function favoriteNumber () {
    console.log("19")
}

//3 Create a function called magicEightBall that logs a random response from the following list: "Yes", "No", "Maybe", or "Ask again later".
const answers = ["yes", "no", "maybe", "ask later"]



function magicEightBall() {
    let i = Math.floor(Math.random() * answers.length);
    let a = answers[i]
    console.log(a)
}