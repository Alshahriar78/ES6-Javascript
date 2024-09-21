let text = "Please locate where 'locate' occurs!";

//indexOf() method returns the index (position)
let index = text.indexOf("locate");
console.log(index)

let lastIndex = text.lastIndexOf("locate");
console.log(lastIndex)

// seaach(),macth(),incldes(),startWith(),endsWith()

let Seach=text.search('locate');
console.log(Seach)

//includes() method returns true if a string contains a specified value

console.log(text.includes('occurs'));

//startsWith() method returns true if a string begins with a specified value
let text1 = "Hello world, welcome to the universe.";
text1.startsWith("Hello");