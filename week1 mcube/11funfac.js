function factorial(num) {
if (num < 0) {
return undefined;
}
let fact = 1;
for (let i = 2; i <= num; i++) {
fact *= i;
}
return fact;
}
console.log(factorial(8));