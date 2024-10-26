Creating Multiple Objects :
- Using Object Literals
- Using Factory Function
- Using Constructor function
- Using JS classes

Factory Function : A factory function is any function that returns a new object for every function call.
=>Function name should  fellow camelCase naming convention

=>Passing Object Properties
Ex : function createCar(color,brand){
    return {
        color:color,
        brand:brand,
        start:function(){
            console.log("started");
        }
    };
};

let car1 = createCar("blue","Audi");
let car2 =createCar("red","Tata");
let car3 =createCar("green","BMW")

console.log(car1);
console.log(car2);
console.log(car3);




Object Property Values

function createCar(color,brand){
    return {
      color,
        brand,
        start(){
            console.log("started");
        }
    };
};
let car1 = createCar("blue","Audi");
let car2 =createCar("red","Tata");
let car3 =createCar("green","BMW")
console.log(car1);
console.log(car2);
console.log(car3);




Constructor Function : A regular function that returns a new object on calling with the new operator
=>The created new object is called an instance

The new Operator : when a function is called with new, it does the following steps 
- Creates an empty object and assigns to thins
- Return this

function Car(color, brand){
    this.color =color;
    this.brand = brand;
    this.start = function(){
        console.log("Started");
    };
}

let car1 = new Car("blue", "Audi");
console.log(car1); 

- car1 is instance
- car1.start() is instance method
- car1.color, car1.brand are instance properties


actory Functions: 
- Follows camelCase notation
- No need of new operator for function calling
- Explicitly need to return the object 
Constructor Functions
- Follows PascalCase notation 
- Need new Operator for function calling 
- Created object returns implicity