const prompt = require("prompt-sync")();
let arr=[]
const size=prompt("enter size arrayy");
console.log("Enter ",size," elements in array");
for(i=0; i<size; i++){
    arr[i] = prompt();
}
arr.sort(function(a, b) { return b - a });
let secondLargest = arr[1];
console.log("second largest number is " +secondLargest);