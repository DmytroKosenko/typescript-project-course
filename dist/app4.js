"use strict";
// unknown-never-wrap types
let userInput;
let userName;
userInput = 5;
userInput = "Hey";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured!", 500);
