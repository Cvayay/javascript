const prompt = require("prompt-sync")();
let num = prompt("Enter the value:");
let fact = 1;

for(let i = 1; i <= num; i++) 
    fact *= i;
console.log("factorial is = "+fact);