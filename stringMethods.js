const s="Bangladesh";

let slice=s.slice(6,s.length);// extract a parts of the string
console.log(slice);


let substring=s.substring(0,6);//substring is similar to slice but it cannot except nagative indexs
console.log(substring);
let newS=s.replace("Bangladesh","Afghanisthan");// replace new text
console.log(newS);

let text1 = "   Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);//join two string

let a="        Hello world       ";
console.log(a.trim(''));// removes white spaces both sides
console.log(a.trimStart());// rempves white spaces start of the sting

let sentence="I am Al Shahoriar."
console.log(sentence.charAt(0));// returns specific index of character
console.log(sentence.charCodeAt(3))



console.log("Javascript String Seach below:");

let str="I am Al Shahoriar.";

console.log(str.indexOf("Al"));// IndexOf Method returns the index number position  of this char...

console.log(str.lastIndexOf("Shahoriar")) // LastIndexOf Method returns if  the same word is in.
// then returns  last words index number position  of char...

//Both indexOf and lastIndexOf method returns -1
// if the strings doesn't match .

console.log(str.match(/Al/)) // if matches then return

let Includes=str.includes("Saurov")// Returns true false if string is present or absent
console.log(Includes);
console.log(str.includes("Al"));

let StartWith= str.startsWith("I");// this method returns true
console.log(StartWith);//if the string begins with the values  otherwise false;

let EndWith=str.endsWith("Shahoriar.")// this method returns true
console.log(EndWith);//if the string ends with the  values  otherwise false;