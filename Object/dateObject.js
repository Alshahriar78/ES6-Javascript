const d= new Date();
console.log(d)
console.log(d.toISOString());

console.log(d.toDateString());

// js date get object
console.log(d.getFullYear());// returns  year as a four-digit number
console.log(d.getMonth());//returns  month  a number (0-11)
console.log(d.getDate());// returns day as a number (1-31)
console.log(d.getHours());//returns  hour (0-23)
console.log(d.getMinutes());//returns  minutes (0-59)
console.log(d.getSeconds());//returns  second (0-59)
console.log(d.getMilliseconds());//returns millisecond (0-999)
console.log(d.getDay())//returns weekday as a number (0-6)
console.log(d.getTime());//returns time (milliseconds since January 1, 1970)

// date set object
console.log("Date Set Object Example")
d.setFullYear(2020)
console.log(d.getFullYear());

const months = [ 'January', 'February',
    'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November',
    'December' ];
d.setMonth(11);
console.log(months[d.getMonth()]);

d.setDate(15);
console.log(d.getDate());

d.setDate(d.getDate() + 50);// js automatically returns date
// according to calendar its js smartness❤️
console.log(d.toDateString());
