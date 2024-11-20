// indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") ;
let position1 = fruits.lastIndexOf("Apple") ;// return last number index for the same element
//Array.includes() to arrays. This allows us to check if an element is present in an array
let position3=fruits.includes("Mango")// return true or false
console.log(position,position1,position3);

const numbers = [4, 9, 16, 30, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
    return value > 18;
}
console.log(first);

