//objs-arrays-enum
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable | string,
  resultTypes: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultTypes === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultTypes === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineedAges = combine(30, 26, "as-number");
console.log(combineedAges);

const combineedStringAges = combine(30, 26, "as-number");
console.log(combineedStringAges);

const combeneNames = combine("Max", "Fax", "as-text");
console.log(combeneNames);

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

// For example:
type User1 = { name: string; age: number };
const u1: User1 = { name: "Max", age: 30 }; // this works!

//For example, you can simplify this code:
function greet1(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
//To:
type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
