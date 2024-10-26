Prototypical inheritance in JavaScript is a feature that allows objects to inherit properties and methods from other objects. This is different from classical inheritance (like in Java), where classes inherit from other classes. In JavaScript, objects are linked through a prototype chain, enabling inheritance of properties and methods dynamically.

How Prototypical Inheritance Works in JavaScript
Every JavaScript object has an internal property called [[Prototype]] (which can be accessed via Object.getPrototypeOf(obj) or __proto__ in older implementations). This prototype serves as a template that other objects can use to inherit properties.

If a property or method is not found on an object, JavaScript will look for it in the object's prototype chain until it either finds it or reaches the end of the chain (null).