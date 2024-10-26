Event Listeners:
JavaScript offers three ways  to add an Event Listerns to a DOM element 

1)Inline event listeners
2)onevent listeners
3)addEventListener()

1)Inline Event Listener

 <button onclick="greeting()">
            Greet
   </button>

function greeting()
{
  console.log("Hiiii");
}

2) onevent Listeners 

  <button id="greetBtn">
            Greet
        </button>

let greetBtnEl = document.getElementById("greetBtn");

greetBtnEl.onclick = function()
{
  console.log("Hi")
}


3) addEventListener()

A modern approach to add Event Listener 

element.addEventListener(event, function)

element =>html element
event =>Event name
function =>callback function

let greetBtnEl = document.getElementById("greetBtn");

greetBtnEl.addEventListener("click",function()
{
  console.log("Hi");
})




Events are the actions by which the User or Browser interact with HTML elements

Event Types:
- Keyboard Events
- Mouse Events
- Touch Events



Keyboard Events: Keyboard Event is the user interaction with the keyboard 
Keyboard Events:
- Keydown
- keyup
-keydown event occurs when a key is pressed down

Whenever an event happens, the browser creates an Event Object 
It consists of information about the event that has happened

Event Object 
->It consists of many properties and methods
- type
- target
- key
- timestamp
- stoppropagation

For any event, event-specific properties and methods will be present

For ex :
The keydown event has key property whereas the onclick event doesn't have it


let inputElement = document.createElement("input");

function printkeydown(event){
  console.log(event.type);
}

inputElement.addEventListener("keydown", printkeydown);
document.body.appendChild(inputElement);
 Keyup event :
keyup event occurs when a key is released .

element.addEventListener('keyup',function)




Not equal(!=) 
Not equal compares two values but doesn't compare types of values

Strict not equal(!==)
strict not equal compares two values including types of values