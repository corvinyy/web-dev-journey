// reversing a string 

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("learning JavaScript"));

console.log("==========================================");

// calculating factorial 
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

console.log("==========================================");

// finding the largest number in an array
function findLargestNumber(numbers) {
  return Math.max(...numbers);
}

console.log(findLargestNumber([3, 8, 1, 22, 7]));

