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
    let a = answers[i];
    console.log(a);
}

//4 Write a function called getCurrentYear that logs the current year to the console using the Date object.
function getCurrentYear () {
   let currentyear = new Date();
    console.log(currentyear.getFullYear());
}

//5 Create a function called tellJoke that logs a random joke from a predefined list of jokes to the console.
const joke = ["Why don't skeletons fight each other? Because they don't have the guts!", "What do you call fake spaghetti? An impasta!", "Why don't eggs tell jokes? They might crack up!", "Why don't eggs tell jokes? They might crack up!" ] 

function telljoke () {
    let i = Math.floor(Math.random() * joke.length);
    let a = joke[i];
    console.log(a);
}

//------------------------------------------------------------------------- seg 2 idk ---------------------------------------------------------------------------------------------

//6 Write a function named personalGreeting that takes a name as a parameter and logs a greeting string (e.g., "Hello, [name]!") to the console.
function personalGreeting(name) {
    console.log("hello " + name + " !")
}

//7 Create a function called add that takes two numbers as parameters and logs their sum to the console.
function add(num1, num2) {
    const sum = num1 + num2 
    console.log(sum);
}

//8 Write a function named ageInMonths that takes a person's age in years as a parameter and logs their age in months (e.g., age * 12).
function ageInMonths(age) {
    const months = age * 12
    console.log(months)
}

//9 Create a function called celsiusToFahrenheit that takes a temperature in Celsius as a parameter and logs the equivalent temperature in Fahrenheit to the console.
function celsiusToFahrenheit(celcius) {
    const Fahrenheit = celcius * 2 + 30
    console.log(Fahrenheit) //nära nog 
}

//10 Write a function named getFullName that takes two parameters, firstName and lastName, and logs the full name as a single string (e.g., "John Doe") to the console.
function getFullName(firstName, lastName) {
    const fullname = firstName + " " + lastName;
    console.log(fullname)
}

//11 Create a function called calculateArea that takes the length and width of a rectangle as parameters and logs the area to the console
function calculateArea(length, width) {
const area = length * width;
return area;
}

//12 Write a function named findMax that takes two numbers as parameters and logs the larger of the two.
function findMax(num1, num2) {
if (num1> num2) {
    return num1;
} 
else {
    return num2;
}
}

//13 Create a function called countVowels that takes a string as a parameter and logs the number of vowels (a, e, i, o, u) in that string.
function countVowels(word) {
    let i = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    for (const bokstav of word.toLowerCase()) {
        if (vowels.includes(bokstav)) {
            i++
        }
    }
    return i;
}
const i = countVowels("filip");
console.log(i);

//14 Write a function named calculateDiscount that takes the original price and the discount percentage as parameters and logs the price after discount to the console.
function calculateDiscount(price, discount) {
    const difference = price - discount;
    return difference;
}

//15 Create a function called reverseString that takes a string as a parameter and logs the string reversed to the console.
function reverseString(str) {
    return str.split('').reverse().join('')
    console.log(reverseString)
}

