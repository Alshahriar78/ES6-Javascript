/* Object Property*/

/* Syntax:
Object.defineProperty(object, property, descriptor) */

const person = {
    Name: {
        firstName:"Al",
        lastName : "Shahoriar"},
    
    language : "BN",
    Adress:{
        District:"Bogra",
        Thana:"Mokamtola",
        Post:"Mokamtola"
    },
    get fullName() {
        return `${this.Name.firstName}  ${ this.Name.lastName}`;
    }
};
//property value Access rule
// --->objectName.property
console.log(person.Name.firstName + ' '+person.Name.lastName);




// Change a Property
//  used to define or modify a property directly on an object.
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