// Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]

function chunkArray(arr, size) {
    let result = [];
    let index = 0;
    
    while(index < arr.length){
        result.push(arr.slice(index, index + size));
    }
    return result
}
console.log(chunkArray([1,2,3,4,5],2))