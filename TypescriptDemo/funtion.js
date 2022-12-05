"use strict";
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
console.log(swapNumbers(2, 1));
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(add(2, 3));
console.log(add(1, 2, 3));
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers = [1, 2, 3, 4];
console.log(add2(1, 2, ...numbers));
const sub = (num1, num2) => num1 - num2;
