"use strict";
function combine(input1, input2, resultTypes) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultTypes === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultTypes === "as-number") {
        return +result;
    }
    else {
        return result.toString();
    }
}
const combineedAges = combine(30, 26, "as-number");
console.log(combineedAges);
const combineedStringAges = combine(30, 26, "as-number");
console.log(combineedStringAges);
const combeneNames = combine("Max", "Fax", "as-text");
console.log(combeneNames);
const u1 = { name: "Max", age: 30 }; // this works!
//For example, you can simplify this code:
function greet1(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder1(user, checkAge) {
    return checkAge > user.age;
}
function greet(user) {
    console.log("Hi, I am " + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
