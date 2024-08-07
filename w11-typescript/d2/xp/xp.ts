// Exercise 1: Class With Access Modifiers
// How to use different access modifiers in a class (private, protected, and public).
// How to create a class with a constructor to initialize properties.
// How to create a method that returns information based on the class’s properties.
// Description: Create a class Person with private, protected, and public properties. Include a constructor to initialize the properties and a method that returns the full name of the person.
// Create a class Person with the following properties:
// A private property firstName of type string.
// A private property lastName of type string.
// A public property age of type number.
// A protected property address of type string.
// Also, include a constructor to initialize these properties and a method getFullName that returns the full name of the person.
// In this exercise, a class Person is created with different access modifiers for its properties: private for firstName and lastName, public for age, and protected for address. The constructor initializes these properties, and the method getFullName returns the full name of the person.

class Person {
    private firstName: string;
    private lastName: string;
    public age: number;
    protected address: string;
  
    constructor(firstName: string, lastName: string, age: number, address: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
    }
  
    public getFullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  }
  
  const person = new Person("John", "Doe", 30, "123 Main St");
  
  console.log("Exercise 1");
  console.log(person.getFullName()); 
  console.log(person.age + "\n"); 
  
  // Access Modifiers Demonstration
  // These lines will cause errors because of access modifiers
  // console.log(person.firstName); // Error: Property 'firstName' is private and only accessible within class 'Person'.
  // console.log(person.address); // Error: Property 'address' is protected and only accessible within class 'Person' and its subclasses.

  

// Exercise 2: Extending Interfaces
// How to create an interface with common properties and methods.
// How to extend an interface to create another interface with additional properties.
// How to implement an interface in a class.
// Description: Create an interface Vehicle with common properties and methods, then create another interface Car that extends Vehicle and includes additional properties specific to a car.
// Create an interface Vehicle with properties make and model, both of type string, and a method start that returns a string. Then create an interface Car that extends Vehicle and includes an additional property numberOfDoors of type number.
// In this exercise, an interface Vehicle is created with common properties (make and model) and a method (start). Another interface Car extends Vehicle and includes an additional property numberOfDoors. A class Sedan implements the Car interface and provides the implementation for the start method.

console.log("Exercise 2:");

interface Vehicle {
    make: string;
    model: string;
    year: number;
  
    startEngine(): void;
    stopEngine(): void;
  }

  interface Car extends Vehicle {
    numberOfDoors: number;
  
    honkHorn(): void;
  }

  class Sedan implements Car {
    make: string;
    model: string;
    year: number;
    numberOfDoors: number;
  
    constructor(make: string, model: string, year: number, numberOfDoors: number) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.numberOfDoors = numberOfDoors;
    }
  
    startEngine(): void {
      console.log(`${this.make} ${this.model} engine started.`);
    }
  
    stopEngine(): void {
      console.log(`${this.make} ${this.model} engine stopped.`);
    }
  
    honkHorn(): void {
      console.log(`${this.make} ${this.model} horn honked.`);
    }
  }

  const myCar = new Sedan("Toyota", "Camry", 2021, 4);

  myCar.startEngine(); 
  myCar.honkHorn();   
  myCar.stopEngine();  

  console.log("\n");
  


// Exercise 3: Using Intersection Types
// How to use intersection types to combine multiple types into a new type.
// How to create a function that returns an object with properties from both input objects.
// How to use the spread operator to combine properties from different objects.
// Description: Create a function that combines two objects using intersection types and returns a new object containing all properties from both objects.
// Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.
// In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types. The function uses the spread operator to combine the properties of the two objects.

console.log("Exercise 3:");

function combineObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }

  const persona = {
    pname: "Dani",
    page: 30,
  };
  
  const job = {
    ptitle: "Web developer",
    pcompany: "Tech",
  };
  
  const combined = combineObjects(persona, job);
  
  console.log(combined);
  console.log("\n");



// Exercise 4: Using Generics With Classes
// How to create a generic class that manages a stack data structure.
// How to implement methods like push, pop, and isEmpty in the stack.
// How to use generics to make the class work with different types.
// Description: Create a generic class Stack that represents a stack data structure. The class should support operations like push, pop, and isEmpty.

console.log("Exercise 4:");

class Stack<T> {
    private items: T[] = [];
  
    // add to stack
    push(item: T): void {
      this.items.push(item);
    }
  
    // remove and return the top element from stack
    pop(): T | undefined {
      return this.items.pop();
    }
  
    // check emptyn
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // view the top element
    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }
  
    // size of the stack
    size(): number {
      return this.items.length;
    }
  }

  
  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log(numberStack.pop());  
  console.log(numberStack.isEmpty());  
  console.log(numberStack.peek());  
  console.log(numberStack.size()); 

  const stringStack = new Stack<string>();
  stringStack.push("hello");
  stringStack.push("world");
  console.log(stringStack.pop());  
  console.log(stringStack.isEmpty());  
  console.log(stringStack.peek());  
  console.log(stringStack.size());