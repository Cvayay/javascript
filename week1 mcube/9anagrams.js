const prompt = require("prompt-sync")();
const str1 = prompt("Enter the first string: ");
const str2 = prompt("Enter the second string: ");
const sortedStr1 = str1.split("").sort().join("");
const sortedStr2 = str2.split("").sort().join("");
if (sortedStr1 === sortedStr2) {
  console.log("The two strings are anagrams!");
} else {
  console.log("The two strings are not anagrams.");
}
