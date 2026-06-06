//! Problem 9: Capitalize First Letter of Each Word

function capitalize(str){
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalize("capitalize first letter of each word"));