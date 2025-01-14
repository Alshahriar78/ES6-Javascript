let text = "Please locate where 'locate' occurs!";

//indexOf() method returns the index (position)
// or it returns -1 if the string is not found
let index = text.indexOf("locate");
console.log(index)
/* lastIndexOf() returns the index of the last
occurrence of a specified text in a string*/
let lastIndex = text.lastIndexOf("locate");
console.log(lastIndex)
/*Both methods accept a second parameter
as the starting position for the search */


// seach(),macth(),incldes(),startWith(),endsWith()
/* search() method searches a string for
        a string (or a regular expression)
and returns the position of the match*/
let Seach=text.search('where');
console.log(Seach)



//includes() method returns true
// if a string contains a specified value
console.log(text.includes('occurs'));



//startsWith() method returns true
// if a string begins with a specified value
let text1 = "Hello world, welcome to the universe.";
console.log(text1.startsWith("Hello"));

let text2 = "The rain in Spain stays mainly in the plain";
const myArr = text2.match(/ain/gi);

console.log(myArr);

/* The includes() method returns true if a string contains a specified value.

Otherwise it returns false.*/
let text3 = "Hello world, welcome to the universe.";
console.log(text3.includes("world"));

let text4 = "Hello world, welcome to the universe.";
let st=text4.startsWith("Hellos");
console.log(st);