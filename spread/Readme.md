Spread Operator is used to unpack iterable(ex : an array) it into individaul elements 

Ex : let arr1 =[2,3]
let arr2 =[1,...arr1,4]
console.log(arr2)

Output : [ 1, 2, 3, 4 ]

1)Copy array

let arr1 =[2,3]
let arr2 =[...arr1]
console.log(arr2)

2) Concatenation 

let arr1 = [2, 3];
let arr2 = [4,5];
let arr3 =[...arr1,...arr2];
console.log(arr3);

[ 2, 3, 4, 5 ]
=>Spread Operator with Objects 

EX1 :
let person ={name:"Rahul", age:27};
let personDetails ={...person,city:"Hyderabad"};
console.log(personDetails); 
Output: { name: 'Rahul', age: 27, city: 'Hyderabad' }

Ex2: let person ={name:"Rahul", age:27};
let address ={city:"Hyderabad",pincode:500001}
let personDetails ={...person,...address};
console.log(personDetails); 

Output: { name: 'Rahul', age: 27, city: 'Hyderabad', pincode: 500001 }


Spread Operator  with  Function cells:
Spread Operator syntax can be used to pass an array of arguments to the function

Ex: function add(a, b, c){
    return a+b+c;
}
let num =[1, 2, 3];
console.log(add(...num)) 

output: 6

=>Extra values will be ignored if more arguments are passed than function parameters

Ex: function add(a, b, c){
    return a+b+c;
}
let num =[1, 2, 3, 4, 5];
console.log(add(...num))

Output: 6