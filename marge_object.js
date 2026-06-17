
// Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.


function mergeObjects(obj1,obj2){
    return {...obj1,...obj2}
}
console.log(mergeObjects({a:1}, {b:2} ))