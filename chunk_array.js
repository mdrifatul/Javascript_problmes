
function chunkArray(arr, size) {
    let result = [];
    let index = 0;
    
    while(index < arr.length){
        result.push(arr.slice(index, index + size));
    }
    return result
}
console.log(chunkArray([1,2,3,4,5],2))