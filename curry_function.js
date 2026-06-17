// Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5



function curry(fun){
  return function (a){
    return function(b){
      return fun(a,b)
      console.log(fun(a,b));
    }
  }
}

// const curry = (fn) => (a) => (b) => fn(a, b);

const add  = curry((a,b) => a+b)

console.log(add(2)(3));