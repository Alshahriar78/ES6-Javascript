/* Object Property*/

/* Syntax:
Object.defineProperty(object, property, descriptor) */

const person = {
    firstName: "Al",
    lastName : "Shahoriar",
    language : "BN",
    get fullName() {
        return `${this.firstName}  ${ this.lastName}`;
    }
};
// Change a Property
Object.defineProperty(person, "firstName", {value : "Sourov"});
console.log(person.firstName);
// Add a Property
Object.defineProperty(person, "year", {value:"2008"},);
console.log(person.year);

let getProperty=Object.getOwnPropertyNames(person);
console.log(getProperty);

console.log(Object.keys(person));
console.log(person.fullName)


const arr=[1,2,3,4,5];
console.dir(arr)