"use strict";
let lname = 'John';
lname = 'TuanAnh';
console.log(lname.toLowerCase());
let age;
age = 25;
age = 23.4;
let res = parseInt("25");
let numList;
numList = [1, 2, 3, 4];
let fi = numList.filter(num => num > 2);
console.log(fi);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
})(Color || (Color = {}));
let c = Color.Green;
