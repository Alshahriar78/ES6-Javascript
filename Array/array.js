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

let [a,b,c]=Bangladesh;// Array de-structuring method
console.log(a,b,c);// output Chittagong after de-structuring Array


//array using in function

const array3=[200,499,900,457];

function handleArray(getArray){
    for(let i=0;i<getArray.length;i++){
        console.log(getArray[i]);
    }
}
handleArray(array3);


var array1=[1,2,3,4,56,78,90,34,56,32,45]
//in filter method filter take callback function as a parameter
var result =array1.filter(num=>num>57);
console.log(result)
//end of the filter method
//end ofthe filter method



console.log("Hello Saurov");



var a1="Al"
var arr=Array.from(a1)// converted to Array from string
console.log(arr)
//end of the from method
 



//Start of the find  method

console.log("Start of the find  method");
var numArray=[30,40,25,50,60,70,90]
// retrun first element in an array that satisfies a provided testing function.
var result=   numArray.find(result=> result % 25===0);
console.log(result) //end of the find   method

//Start of the find index method
var numArray=[30,40,50,60,70,90]
//this method finds  the index of the first element in an array that satisfies a provided testing function
var result=   numArray.findIndex(f=>f==50);
console.log(result) //end of the find index method




console.log("FOr EAch ")




//Start of the  for each method
var numArray=[30,40,50,60,70,90]
// this mehtod take back array elemet
var s=0
numArray.forEach(function(value, index, array){
    console.log(value)
    // this return value index and array
    s += value;
    

})
 console.log("Sum : ",s)
 console.log("Max : ",Math.max(...numArray))
 console.log("Min : ",Math.min(...numArray))
 console.log("Avg : ",s/numArray.length)
//end of the  for each method



console.log("New Program")



//start of the include method
// this method checks if any is here in this array or not ang gives boolean value
var arr=[10,13,24,56,78,76,54,68]
var re=arr.includes(76)
console.log(re)
// end ofthe include method



console.log("start of the index method");



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


//best way to declare array
let daysOfWeek = ['Saturday','Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

//use for loop to accessing every data of javascript
console.log("use for loop to accessing every data of javascript Array:")
for(let i=0;i<daysOfWeek.length;i++){

    console.log( `${daysOfWeek[i]}`);
}
//use for of to accessing every data of javascript
console.log("for of to accessing every data of javascript Array:::")
for(let items of daysOfWeek){
    console.log(`${items}`);
}


//if we need the array (its size), we can use the length  property
console.log("we can use the length  property for the array (its size)::")
console.log(daysOfWeek.length);//length of the daysOfWeek array




// //Adding element in array using push()method
console.log("Adding element in array using push()method::")
let numbersAdd = [0,1,2,3,4,5,6,7,8,9];
console.log(numbersAdd.length)
numbersAdd.push(10);
console.log(numbersAdd.length)
numbersAdd.push(12, 13);
console.log(numbersAdd.length)
console.log(numbersAdd)
console.log(numbersAdd.length)

//Adding element in the first position at array
console.log("Adding element in the first position at array::")
for (var i=numbersAdd.length; i>0; i--){
    numbersAdd[i] = numbersAdd[i-1];
    console.log(numbersAdd[i])
}
numbersAdd[0] = 45;
console.log(numbersAdd);

console.log("Adding element in the first position at array Using unshift() method::")
numbersAdd.unshift(47);//Adding element in the first position at array using unshift() method
// numbers.unshift(-4,)
console.log(numbersAdd)

// adding element with splice() method
numbersAdd.splice(5,0,2,3,4);
console.log("After using Splice() method the new array:")
console.log(numbersAdd);

//Removing element using pop() method
let numberRemove=[3,5,67,9,34,667,8,78,4,5,7]
numberRemove.pop();
console.log(numberRemove);

//Removing an element from first position using shift() method


numberRemove.shift();
numberRemove.shift();
console.log(numberRemove);

//<---------Adding and removing elements from a specific position using splice() method----------->
console.log("Array Splice ()");
let arraySplice=[2,34,56,57,67,89,8,6876,68,76];
arraySplice.splice(5,3);//remove three elements, starting from index 5 of our array.
// This means the numbers [5],numbers [6], and numbers [7] will be removed from the numbers array.
console.log(arraySplice);
//splice(), pop(), or
// shift () methods to remove elements.

//<----------------adding element middle of the array-------------------->
console.log("arrayIndexCheck:")
let arrayIndexCheck=[2,3,4,5,6,7,8,9,10,13,41,34,56,78];

arrayIndexCheck[arrayIndexCheck.length/2-1]=255
console.log(arrayIndexCheck);

//two-dimensional array
let averageTempDay1 = [72,75,79,79,81,81];
let averageTempDay2 = [81,79,75,75,73,72];
let averageTemp = [];
averageTemp[0] = [72,75,79,79,81,81];
averageTemp[1] = [81,79,75,75,73,72];

//accessing element in two dimensional array
function printMatrix(myMatrix){
    for(let i=0;i<myMatrix.length;i++){
        for (let j=0;j<myMatrix[i].length;j++){
            console.log(myMatrix[i][j])
        }
    }
}
printMatrix(averageTemp);// call function to output array


//Array concat Method()
// this concat method join two array a store a new variable
console.log("this concat method join two array a store a new variable")
let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let result1=primeNumbers.concat(evenNumbers);
console.log(result1);




console.log(" Array sort() Method:")
const fruits = ["Banana", "Orange", "Apple", "Mango"];
//method toString() converts an array to a string of (comma separated) array values.
console.log(fruits.toString());

//join() method also joins all array elements into a string.
//
// It behaves just like toString(), but in addition you can specify the separator

console.log(fruits.join('*'));
//Array Iteration

console.log("Array Iteration")
const numbers = [45, 4, 9, 16, 25];

numbers.forEach(myFunction);

function myFunction(value, index, array) {
    console.log(value);// returns array al elements like a loops
    console.log(index);// returns array index numbers
    console.log(array);
}

// array map method()
console.log("Map of Method of Array")
let numbersMap = [2, 4, 6, 8, 10];
numbersMap.map((value, index, array)=>{
    console.log(value);// returns array al elements like a loops
    console.log(index);// returns array index numbers
    console.log(array);
})

// filter() method that's filter array different condition
console.log("Filter Method")
const numbersFilter = [45, 4, 9, 16, 25];

const over18 = numbersFilter.filter((value,index,array)=>{
    return value>5;
});
console.log(over18);
// reduce() method runs a function on
// each array element to produce (reduce it to) a single value.
const numbersReduce = [45, 4, 9, 16, 25];
let sum = numbersReduce.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total +value ;
}
console.log(sum);

