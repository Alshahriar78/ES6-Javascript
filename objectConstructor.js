function person(name,age,profession){
  this.name=name;
  this.age=age;
  this.profession=profession;
}
const myBrother= new person("Saikat",33,"Student")
console.log(myBrother)