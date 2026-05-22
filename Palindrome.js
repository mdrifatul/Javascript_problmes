//! problme 4. Check for Palindrome

const str = 'racecar'

function myfun(str){
   let palindrom = ""
    for(let i = str.length-1; i>=0; i--){
    palindrom += str[i]
    } 
    return str === palindrom
}

console.log(myfun(str))