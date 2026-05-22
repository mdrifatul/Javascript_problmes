//! problem 9. Fibonacci Sequence

function fibonacci(n){
  let start = [0,1]
  for(let i=2;i<n;i++){
    let next = start[i-1] + start[i-2]
    start.push(next)
  }
  return start
}

console.log(fibonacci(10));