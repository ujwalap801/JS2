// let counter = 0;
// setTimeout(function() {
//   console.log(counter);
//   counter = counter + 1;
// }, 1000);

let counter = 0;
let uniqueId = setTimeout(function() {
  console.log(counter);
  counter = counter+1;
}, 1000);

clearTimeout(uniqueId);