const car = {
    type:"Fiat",
    model:"500",
    color:"white"
};

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";/* to add  properties in object from outside
the constructor we must use prototype */
const mySelf=new Person('Al','Shahoriar',28,"Black");

console.log(mySelf.nationality);

