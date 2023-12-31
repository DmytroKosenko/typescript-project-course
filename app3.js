"use strict";
//union-aliases-functions
function addFunction(n1, n2) {
    return n1 + n2;
}
function printResults(num) {
    console.log("Result" + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResults(addFunction(5, 12));
let combineValues;
combineValues = addFunction;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
