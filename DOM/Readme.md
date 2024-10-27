DOM :Document Object Model

DOm is the structural representation of the content in the document created by browser

HTML DOM :

Tree Structured representation of HTML Document created by the browser

It allows js to change the document structure, style and content

-->The DOM tree represents HTML document as nodes.

==>Each node is referred to as an Object

=>Document is the entry point of the DOM

=>To access any HTML element, you should always start with accessing the document object first

==>The getElementById() method helps to select the HTML element with a specific Id


=>To manipulate the text within the HTML element use textContetn property

=>The style property is used to get or set a specific style of an HTML element using different CSS properties

Ex: style.color ="blue"


=>Events are the actions by which the User or Browser interact with HTML elements 

Actions can be:
-->Clicking button
-->Pressing keyword keys
-->Scrolling the page etc

=>Onclick Event : onclick events occur when user clicks on an HTML element

=>Camel Case Convention :
use the camel Case naming convention (Starting letter of each word should be in uppercase except for the first word )for naming a property 

Ex: color-color
font-size -> fontSize
background-color ->backgroundColor



document.getElementById("bulbImage").src="=
 document.getElementById("switchStatus").textContent = "Switched Off";
  document.getElementById("onSwitch").style.backgroundColor = "#22c55e";


=>The parseInt() function accepts a String and convert it into an Integer

=>Math.random() :Returns a random number(float value) in range o to lessthan 1

=>Math.ceil() function always rounds a number upto the next largest integer


The Math.round() method rounds a number to the nearest integer.

2.49 will be rounded down (2), and 2.5 will be rounded up (3).


=>Value Property 

docuement.getElementById("inputelement").value;

Use value property to get the value of the HTML input element


=>Loose equal to (==):

Loose equality to (==) : Loose equality compares two values for equality but doesn't compare types of values

Strict equal to (===)
Strict quality compares two values for equality including types of values


=>Data Structures allow us to store and organize data efficiently.

This will allow us to easily access and perform operations on the data


=>IN JS, we have built in Data structures like Arrays, objects, maps, sets

=>In python :List holds an ordered sequence of items

In JS: Array holds an ordered sequence of items

=>we can also modify array item in JS

=>Creating HTML Heading Element :

document.createElement('h1')

=>Appending to document body object 
Ex: docuement.body.appendChild(h1element)

=>classList.add() - to add the css styles 
classList.remove()- to remove css styles

==>Object : An object is a collection of properties

A property is an association between a name(or key) and a value


=>Use Dot notation when the key is valid identifier
=>use bracket notation for both valid and invalid identifier

=>Object Destructing :To unpack properties from object we use Object Destructing

=>The variable name should match with the key of an object



=>For checkbox we use  id and for label we use for both id and for should be same .

if we have to create using JS then we have to htmlFor instead of normal for.


SetAttribute:
To set a value of an attribute for a specified element, we use setAttribute() method

-->If the attributes already exists, the value of the attribute gets updated



A callback is a function that is passed as an argument to another function.

function displayGreeting(displayName)
{
    console.log("Hello");
    displayName();
    console.log("welcome");
}

function displayUju(){
    console.log("Uju");
}

displayGreeting(displayUju)