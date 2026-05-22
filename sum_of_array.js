//! problem 5. Sum of Array Elements

const arrSum = [8, 7, 10, 6, 4, 5]

const sum = (sum) => {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i]
  }
  return total
}

console.log(sum(arrSum));
