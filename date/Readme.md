Date : To work with data and time in out applications, we use built-in Date constructor function 

let now = new Date();
console.log(now);
console.log(typeof(now)); 
Creating a Date Object without passing  any arguments to the function gives current data and time


let date1 = new Date(2024,7,15);
console.log(date1.getFullYear());
console.log(date1.getMonth())

we can also set values :
let date1 = new Date(2024,7,15);
date1.setYear(2024);
date1.setDate(1);
console.log(date1);


