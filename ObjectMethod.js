/* General Method*/


// Object.assign(target,source)
// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = {firstName: "Al",lastName: "Shahoriar", age: 26, eyeColor: "black"};

// Assign Source to Target
Object.assign(person1, person2);

console.log(person1);

/*Object.entries() returns
 an array of the key/value pairs in an object:
 */

console.log(  (Object.entries(person1)));


/* fromEntries() method creates
an object from a list of key/value pairs. */
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(myObj); // converted Array to Object


/*Object.values() is similar to Object.entries(),
 but returns a single dimension array of the object values: */
console.log(Object.values(person1));
