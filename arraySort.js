const fruits = ["Banana", "Orange", "Apple", "Mango"];
let a=fruits.sort();//ascending order
// console.log("1st",a) // display ascending order
//
fruits.reverse();// descending order
//
// console.log(a)//display descending  order by reverse order

let number=[4,5,6,1,2,25,100,12839,3284329429,884548]
number.sort(function (a,b){
    return a-b;// display ascending order by this function
});
// console.log(number)

function myArrayMax(arr) { // function for a maximum element of an array
    return Math.max.apply(null, arr);
}

function myArrayMin(arr) { // function for a minimum element of an array
    return Math.min.apply(null, arr);
}
let minArray= myArrayMin(number);
let maxArray=myArrayMax(number);
// console.log(maxArray,",",minArray);

const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
];
// cars.sort(function (a,b){
//     return a.year-b.year
// });
// console.log(cars)
cars.sort(function (a,b){
    let x=a.type.toLowerCase();
    let y=b.type.toLowerCase();
    if(x>y){return 1;}
    if(x<y){return -1;}
    return 0;
})
console.log(cars)