localStorage.setItem("name", "uju");
localStorage.setItem("gender","female");
localStorage.setItem("city","hyderabad");



let name = localStorage.getItem("name");
let gender = localStorage.getItem("gender");
let city = localStorage.getItem("city");

console.log(name);
console.log(gender);
console.log(city);


// if key is not present
let occuputaion = localStorage.getItem("occuputaion")
console.log(occuputaion)