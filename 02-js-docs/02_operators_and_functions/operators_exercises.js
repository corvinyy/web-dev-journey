// Discount Eligibility
console.log(">>>>>Discount Eligibility<<<<<");
let isMember = true;
let totalSpent = 80;
let isBlocked = false;

let getsDiscount = (isMember || totalSpent > 100) && !isBlocked; 
console.log(`Gets discount: ${getsDiscount}`); 
console.log("==========================================");

// Working Hours Check
console.log(">>>>>Working Hours Check<<<<<");
let currentHour = 14; // 2 PM
let onBreak = false;

let isWorking = currentHour >= 9 && currentHour < 17 && !onBreak;
console.log(`Is working: ${isWorking}`);
console.log("==========================================");

// Dice Simulation
console.log(">>>>>Dice Simulation<<<<<");
let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let sum = die1 + die2;

console.log(`Die 1: ${die1}, Die 2: ${die2}  \nSum = ${sum}`);
console.log("==========================================");

// Seconds to HH:MM:SS Format
console.log(">>>>>Seconds to HH:MM:SS Format<<<<<");
let totalSeconds = 3672;

let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;

console.log(`${hours}h ${minutes}m ${seconds}s`); 
console.log("==========================================");

// Absolute Difference
console.log(">>>>>Absolute Difference<<<<<");
let a = 9;
let b = 17;

let diff = Math.abs(a - b);
console.log("Difference:", diff);
console.log("==========================================");
