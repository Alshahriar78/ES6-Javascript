// Object.assign() method copies properties from one or more source objects to a target object
const car1={
    brand:'BMW',
    color:'White',
    weight:'400 kg',
    model:'BM120'

}
const car2={}
const copy=Object.assign(car1,car2);
console.log(copy)// { brand: "BMW", color: "White", weight: "400 kg", model: "BM120" }

const car3 = Object.create(car1);

car3.firstName = "Peter";