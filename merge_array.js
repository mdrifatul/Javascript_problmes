// Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

//! using reduce()
function merge(...array) {
    return array.reduce((acc, curr)=>{
        return [...acc,...curr]
    },[])
}

//! using flat();
function mergeArr(...array){
    return array.flat()
}


console.log(merge( [1,2], [3,4], [5]))
console.log(mergeArr( [1,2], [3,4], [5]))