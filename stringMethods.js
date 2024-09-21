const s="Bangladesh";
//length property returns the length of a string
console.log(s.length);

//->*******************There are 4 methods for extracting string characters****************************  -->

//charAt() method returns the character at a specified index (position) in a string
let index=s.charAt(5);
console.log(index);


// at() method same as charAt() just at() allows negative indexs
let i =s.at(-2);
console.log(i)

//charCodeAt() method returns the code of the character at a specified index in a string
let indexCode=s.charCodeAt(5);
console.log(indexCode)// returns character code 


// --->********************There are 3 methods for extracting a part of a string*********************** <---
let fruits="Banana,Mango,Lichi,Apple,Date,Orange"
//slice() extracts a part of a string and returns the extracted part in a new string.  takes 2 parameters: start position, and end position (end not included)
let cut=fruits.slice(7,-24);
console.log(cut)

//substring() is similar to slice() but can not accept negative index
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);

//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part
console.log(str.substr(0,5));


// ************-->concat() joins two or more strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// trim() method removes whitespace from both sides of a string

let Trim="    Hello   ";
console.log(Trim.trim())


