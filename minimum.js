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

console.log(minimumFun(minInt));