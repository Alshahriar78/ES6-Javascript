//declaring array
let array=['A','B','C','D','E'];
//assessing array value with index number
console.log(array[3]);//output D

//assessing array value with index number
let array2= new Array('AB','BD','CN','SQ','ES');
console.log(array2[4]);//output ES

//multidimensional array
let BD=["Dhaka","Bogra","Rangpur"];
let IND=["Mumbai","Chennai","Kolkata"];
let China = ["Than", "Shanghai", "Hong"];
let asia=[BD,IND,China]; //declare multidimensional array

//assessing array value with index number
console.log(asia[0][1]);// output Bogra
console.log(asia[1][2]);// output Kolkata
console.log(asia[2][1]);// output Kolkata


//Array de-structuring

let Bangladesh=["Dhaka","Bogra","Rangpur","Rajshahi","Chittagong"];

let [,a,,,b]=Bangladesh;// Array de-structuring method
console.log(b);// output Chittagong after de-structuring Array


//array using in function

const array3=[200,499,900,457];

function handleArray(getArray){
    for(let item of getArray){
        console.log(item);
    }
}
handleArray(array3);


var array1=[1,2,3,4,56,78,90,34,56,32,45]
//in filter method filter  take call back function as a parameter
var result =array1.filter(function(item){
    return item>10
});
console.log(result)
//end of the filter method
//end ofthe filter method



console.log("Hello Saurov");



var a1="Al"
var arr=Array.from(a1)
console.log(arr)
//end ofthe from method




//Start of the find  method
var numArray=[30,40,50,60,70,90]


//this method find the number to follow the condition
var result=   numArray.find(function(item){
    return item>60

});
console.log(result) //end of the find   method



//Start of the find index method
var numArray=[30,40,50,60,70,90]
//this method find index to follow the  condition
var result=   numArray.findIndex(function(item){
    return item>60

});
console.log(result) //end of the find index method




console.log("FOr EAch ")




//Start of the  for each method
var numArray=[30,40,50,60,70,90]
// this mehtod take back array elemet
numArray.forEach(function(item){
    console.log(item)
})//end of the  for each method





console.log("New Program")



//start of the include method
// this method check if any is here in this array or not ang give boolean value
var arr=[10,13,24,56,78,76,54,68]
var re=arr.includes(5)
console.log(re)
// end ofthe include method



console.log("Index")



//start of the index method
// this method check if any is here in this array  then give the index   value oterwise -1
var saurov=arr.indexOf(76)
console.log(saurov)
//end of the index method



console.log("start of the reverse program")



//start of the reverse program
var reverse=[1,2,3,4,5,6,7,8,9]
var result= reverse.reverse()
console.log(result)
console.log(result[0])
//end of the reverse program




console.log(" start of the push method")




// start of the push method
var newArray=[1,2,3,4]
newArray.push(5)
newArray.push(6)
console.log(newArray)
// end of the push metheod

console.log("start of the pop method")

//start of the pop method
newArray.pop()
newArray.pop()
console.log(newArray)
//end of the pop method



// sort method arrange item in smmall to big
console.log("start of the Sort method")

let sortArray=[2,67,90,3,5,8]
console.log(sortArray.sort());


console.log("start of the Slice method")

// slice method cutt of array accordint to index
var cutSlice=[2,67,90,3,5,8]

console.log(cutSlice.slice(1,4));
//end of the slice method

// splice method can add ,remove
console.log("start of the Splice")
var spliceArray=[1,2,3,4,5,6,7,8,9]

var s=spliceArray.splice(1,1);
console.log(s)
// after deleting element
console.log(spliceArray)

// after adding element
spliceArray.splice(2,1,21)
console.log(spliceArray)
