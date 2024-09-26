// const car = {
//     type:"Fiat",
//     model:"500", 
//     color:"white"
// };

// //Accessing JavaScript Properties
// console.log(car.type.toUpperCase())//FIAT

// // another way to accessing properties
// console.log(car['color']); // white 

// // Adding New Properties
// car.brand='BMW'
// console.log(car) // { type: "Fiat", model: "500", color: "white", brand: "BMW" }

// // delete properties
// delete car.model
// console.log(car)
// // Displaying the Object Properties by name 
// console.log(car.type)


// //Displaying Properties in a Loop
// for(let i in car){
//     console.log(i,":",car[i]);
// }

// // Displaying the Object using Object.values()
// const array=Object.values(car)
// console.log(array)


function sayHi(){
    console.log(name);
    console.log(age)
    var name="Javascript";
    let age=27;
}

sayHi()
