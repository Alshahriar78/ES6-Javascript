let ab=['a','b','c'];//declare array
let de=[...ab,'d,','e','f'];//join two array with spread(...) operator
console.log(de);//output [ 'a', 'b', 'c', 'd,', 'e', 'f' ]

let number1=[20,3,5];//declare array
let number2=[...number1,45,86,90];//join two array with spread(...) operator
console.log(number2);//output [ 20, 3, 5, 45, 86, 90 ]

//joining two array without spread operator

number2.push(number1);
console.log(number2);//output [ 20, 3, 5, 45, 86, 90, [ 20, 3, 5 ] ]
de.push(ab)
console.log(de);// output [ 'a', 'b', 'c', 'd,', 'e', 'f', [ 'a', 'b', 'c' ] ]
