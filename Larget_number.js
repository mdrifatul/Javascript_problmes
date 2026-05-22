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

console.log(largeNum(int));