//simple function and its uses and excution
function simple(){
    let a=20;
    let b=32;
    return (a+b);
}
simple();//function execution and display output 52

//parameterized function and its uses and excution
function parameterized(x,y){
    console.log(x+y);// concatenation occur if user set parameter string otherwise its occur additon
}
parameterized('Hello',' World');//function execution and display output Hello World

//function return types
function Return(...x){
    //uses spread operator
    return x;
}
console.log(Return(1,2,3,4,5,67,230));// function execute and display its array of number
// [1,  2,   3, 4,
//     5, 67, 230
// 5, 67, 230
// ]
function array(...a){
    for(let i of a){


        return "hello"+ i;
    }

}
let abc=[12,34,54,65,756,344,33,21,44,55]
const bca=array(abc);
console.log(bca)

//anonymous function
let a= function (){
    console.log("I am Anonymous Function");
}
a();//function execute and display I am Anonymous Function


//arrow function
const user={
    username:"saurov",
    prices:180
}
const Arrow=( anyobject,...x)=>{
   let  array=x;
   
   console.log(`Username is ${user.username} and the product price is ${user.prices} and number are [${x}]`)
}// handle object in function and spread operator

Arrow(user,24,55,78,97);

function user1(){
    let user="Sourov";
    let age = 25;
    return [user,age]
    
}
console.log(user1())