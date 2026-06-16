let str = 'banana'

function myfun(str, char){
    return str.split(char).length - 1
}
// console.log(myfun(str,"a"))

function occurrence(str, char) {
  let count = 0;
  for(let i=0;i<=str.length;i++){
    if(str[i] === char){
      count++;
    }
  }
  return count
}

console.log(occurrence(str,"a"))