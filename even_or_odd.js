//! problem 8: Even or Odd List

const OddEven = [2, 5, 7, 6, 10, 18, 20, 21, 23]

function even(int) {
  return int.filter((num) => num % 2 === 0)
}

console.log(even(OddEven));

// without filter 

const OddEven = [2, 5, 7, 6, 10, 18, 20, 21, 23]
let event = [];
for(let i=0; i<=OddEven.length; i++){
    if(OddEven[i] % 2 === 0){
        event.push(OddEven[i])
    }
}
console.log(event)