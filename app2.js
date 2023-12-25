function combine(input1, input2, resultTypes) {
    var result;
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
var combineedAges = combine(30, 26, "as-number");
console.log(combineedAges);
var combineedStringAges = combine(30, 26, "as-number");
console.log(combineedStringAges);
var combeneNames = combine("Max", "Fax", "as-text");
console.log(combeneNames);