Rest Parameter :
With Rest Parameter , we can pack multiple values into an array 
Ex :function num(...args){
    console.log(args);
}
num(1,2,3)

output: [ 1, 2, 3 ]

=>Rest Parameter should be the last parameter 

Ex: function numbers(a, ...rest, b){
    console.log(a);
    console.log(b);
    console.log(rest);
}
numbers(1,2,3,4); 
gives error



Destructing Arrays &objects with Rest Parameter Syntax 
==>Arrays 
let [a,b,...rest] = [1,2,3,4,5]
console.log(a);
console.log(b);
console.log(rest);

Output : 1
2
[ 3, 4, 5 ] 

==>Objects

let {firstName ,...rest} ={
    firstName:"Rahul",
    lastName :"Attuluri",
    age :27
};

console.log(firstName);
console.log(rest);

Output : Rahul
{ lastName: 'Attuluri', age: 27 }





Template Literals(Template Strings)
Template Literals are enclosed by the backticks(`)

They are used to 
- Embed variables or expressions in the strings
- Write multiline strings
- These variables or expressions are included using dollar sign with curly braces ${}
let firstName ="ujwala";
console.log(Hello ${firstName}!)

let result = The sum of 4 and 5 is ${4+5};
console.log(result);

let person ={name:"Rahul"};
console.log(My name is ${person.name}) 



Multiline string :
let firstName ="Ujwala";
console.log(`Hello ${firstName},
Good Morning,
Have a nice day!`); 
output: Hello Ujwala,
Good Morning,
Have a nice day