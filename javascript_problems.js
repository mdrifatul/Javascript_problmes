//! problme 1. Reverse a String

const string = 'programming'

let reversed = ""

for(let i = string.length -1; i>=0; i--){
    reversed += string[i]
}

// console.log(reversed)



//! problem 2. FizzBuzz 

let fizzbuzz = []

for (let i = 1; i + 1 <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    fizzbuzz.push("FizzBuzz")
  } else if (i % 3 === 0) {
    fizzbuzz.push("Fizz")
  } else if (i % 5 === 0) {
    fizzbuzz.push("Buzz")
  } else {
    fizzbuzz.push(i);
  }
}

// console.log(fizzbuzz);

//! problme 3. Find the Largest Number in an Array

const int = [-8, 7, -10, 6, -4, -5]

function largeNum() {
  let max = int[0];
  for (let i = 1; i < int.length; i++) {
    if (int[i] > max) {
      max = int[i];
    }
  }
  return max;
}
// console.log(largeNum(int));


//! problme 4. Check for Palindrome

const str = 'racecar'

function myfun(str){
   let palindrom = ""
    for(let i = str.length-1; i>=0; i--){
    palindrom += str[i]
    } 
    return str === palindrom
}

// console.log(myfun(str))

//! problem 5. Sum of Array Elements

const arrSum = [8, 7, 10, 6, 4, 5]

const sum = (sum) => {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i]
  }
  return total
}

// console.log(sum(arrSum));


//! problem 6. Count Vowels

const CountVowel = (word) => {
  let count = 0;
  const vowels = 'aeiou'
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++
    }
  }
  return count
}

// console.log(CountVowel("pneumonoultramicroscopicsilicovolcanoconiosis"));

//! problem 7. Factorial Calculation 

function factorial(n) {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result
}

// console.log(factorial(4));

//! problem 8

const OddEven = [2, 5, 7, 6, 10, 18, 20, 21, 23]

function even(int) {
  return int.filter((num) => num % 2 === 0)
}

// console.log(even(OddEven));

// without filter 

const OddEven = [2, 5, 7, 6, 10, 18, 20, 21, 23]
let event = [];
for(let i=0; i<=OddEven.length; i++){
    if(OddEven[i] % 2 === 0){
        event.push(OddEven[i])
    }
}
// console.log(event)

//! problem 9. Fibonacci Sequence

function fibonacci(n){
  let start = [0,1]
  for(let i=2;i<n;i++){
    let next = start[i-1] + start[i-2]
    start.push(next)
  }
  return start
}

// console.log(fibonacci(10));

//! problem 10. Multiplication Table 

let Int = 5

for(let i=1;i<=10;i++){
    console.log(`${Int} * ${i} = ${Int * i}`)  
}


//! problem 11. Find the Minimum in an Array 

const minInt = [-8, 7, -10, 6, -4, -5]

function minimumFun(int) {
  let mini = [0]
  for (let i = 0; i < int.length; i++) {
    if (int[i] < mini) {
      mini = int[i]
    }
  }
  return mini
}

// console.log(minimumFun(minInt));


