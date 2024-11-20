/* The toString() method returns a number as a string.*/
console.log( typeof (43).toString())

/* this method returns a sting with a number rounded
and written exponential notation*/
let a=4.6787;
console.log( typeof a.toExponential(2));

let b=79.956756;
console.log(b.toFixed());//this method returns a sting with the  number
//written with a specified number of decimals

console.log(b.toPrecision(4));//this method returns a sting with specific value of a fraction


console.log(Number(true));
console.log(Number(false))
console.log( Number('10.99'))

console.log(Number(new Date('1996-09-13')));


console.log(parseInt('32'));
console.log(parseInt(' 10 sourov'))
console.log(parseInt('sourov'))

//parseFloat is same as parseInt


/* js number properties*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString())