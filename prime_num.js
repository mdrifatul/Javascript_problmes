//! problme 12. Check Prime Number

function prime(int){
    if(int ===1){
        return false
    }
    for(let i=2;i<=Math.sqrt(int);i++){
        if(int%i===0){
            return false
        }
    }
    return true
}
console.log(prime(7))