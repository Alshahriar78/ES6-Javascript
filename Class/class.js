class Person {
    constructor(name,age,profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    functionality(){
        return `${this.name} age is ${this.age} years old. His profession is ${this.profession}`;
    }
}

const sourov = new Person('Al Shahoriar',28,"Software Engineer");

console.log(sourov.functionality());