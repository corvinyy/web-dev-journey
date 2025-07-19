// Calculating IMC 
console.log(">>>>>Calculating IMC<<<<<");
weight = 60; // in kg
height = 1.66; // in meters
const imc = weight / (height * height);

if (imc < 18.5) {
    console.log(`Your IMC is ${imc.toFixed(2)}. You are underweight.`);
} else if (imc < 24.9) {
    console.log(`Your IMC is ${imc.toFixed(2)}. You are at a healthy weight.`);
} else if (imc < 29.9) {
    console.log(`Your IMC is ${imc.toFixed(2)}. You are overweight.`);
} else {
    console.log(`Your IMC is ${imc.toFixed(2)}. You are obese.`);
}
console.log("==========================================");

// Positive or Negative Number
console.log(">>>>>Positive or Negative Number<<<<<");
let number = -5;
if (number > 0) {
    console.log(`The number ${number} is positive.`);
} else if (number < 0) {
    console.log(`The number ${number} is negative.`);
} else {
    console.log(`The number is zero.`);
}
console.log("==========================================");

// Access Control
console.log(">>>>>Access Control<<<<<");
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Access granted to admin panel.");
} else if (isLoggedIn) {
  console.log("Access granted to user area.");
} else {
  console.log("Access denied.");
}