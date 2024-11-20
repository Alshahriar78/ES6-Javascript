const sports = ["Cricket", "Football", "Hockey", "Carom"];

sports.push("Racket"); //push() method adds a new element to an array (at the end)
sports.length// returns length of this array
sports.pop()// pop() method removes the last element from an array (at the end)
let string=sports.toString();// returns sting that converted this method
let join=sports.join(" | ") // Cricket | Football | Hockey | Carom

// console.log(string,join)//Cricket,Football,Hockey,Carom

//concat() method creates a new array by merging (concatenating) existing arrays
const myGirls = ["Cecilie", "Lone",'Linus'];
const myBoys = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];

const myChildren = myGirls.concat(myBoys);// merge or concat two array
const myChildren2 = myGirls.concat(myBoys, arr3);// merge or concat multiple  array
// console.log(myChildren,myChildren2)

//Merging an Array with Values)
    const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren3 = arr1.concat("Peter","Al Shahoriar");
// console.log(myChildren3);

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

let a=fruits.copyWithin(2, 0,2);
// console.log(a)

const myArr = [[1,2],[3,4],[5,6]];

const newArr = myArr.flat();
// console.log(newArr)


//The splice() method can be used to add new items to an array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 0, "Lemon", "Kiwi");
fruits1.splice(0, 1);// splice() method can also delete
// console.log(fruits1);


//The slice() method slices out a piece of an array into a new array
const citrus = fruits1.slice(1);// The slice() method creates a new array.
// console.log(citrus); //slice() method does not remove any elements from the source array.

const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits2.slice(1, 3);
console.log(citrus1)