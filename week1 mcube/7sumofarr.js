const prompt = require("prompt-sync")();
const size = prompt("Enter the size of the array: ");
let arr = [];
console.log("Enter ", size, " elements in the array");
for (let i = 0; i < size; i++) {
  arr[i] = parseFloat(prompt(`Enter element ${i + 1}: `));
}
let sum = 0;
for (let i = 0; i < size; i++) {
  sum += arr[i];
}
console.log("The sum of the array is:", sum);

// const arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log("The sum of the array is:", sum);
