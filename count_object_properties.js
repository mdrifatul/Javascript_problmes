// Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3

const obj = {a: 1, b: 2, c: 3} 

function countProperties(obj){
  return Object.keys(obj).length
}
console.log(countProperties(obj))