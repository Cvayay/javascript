const prompt = require('prompt-sync')();

const inputArray = prompt('Enter an array of numbers (comma-separated): ');
const array = inputArray.split(',').map(num => parseFloat(num.trim()));

const order = prompt('Sort in ascending (A) or descending (D) order? ').toLowerCase();

if (order === 'a') {
  array.sort((a, b) => a - b);
} else if (order === 'd') {
  array.sort((a, b) => b - a);
} else {
  console.log('Invalid sorting order specified!');
  process.exit(1);
}

console.log('Sorted array: ', array);
