"use strict";

// =====Summary====

// string, number, boolean, object, array, function are the common data types
// a, b, c, d, e are variables we declared to store stuff in

let a = "something"; //string
let b = 123; //number
let c = false; //boolean

let d = {}; //object
let e = []; //array

function f() {} //function


// ========Details===============

let myString = "something"; //string
let myNumber = 123; //number
let myBoolean = false; //boolean

// --------------
let myObject = {
  first: "John",
  last: "Doe",
  age: 21,
  speak: function () {},
}; //object

// --------------
function doSomething() {
  return "something";
} //function, with return value

//catching the return value = calling the function with ()
let returnValue = doSomething();

//you can return any of the data types from a function including an object or an array

// --------------
//greeting is a parameter
function greet(greeting) {
  console.log(greeting);
} //function, that takes a parameter

greet("Hi"); //Hi

//OR

let words = "Hello";
//words is the argument passed to the function when it is called (invoked)
greet(words); //Hello
//notice the words variable is passed as an argument to the function greet
//and comes into the function as the greeting parameter

// --------------

// --------------
let myArrayOfStrings = ["I", "like", "arrays"];
let myArrayOfNumbers = [1, 2, 3, 4, 5];
let myArrayOfObjects = [
  {
    first: "James",
    last: "Dillinger",
    age: 21,
    speak: function () {},
  },
  {
    first: "Dave",
    last: "Mathews",
    age: 21,
    speak: function () {},
  },
  {
    first: "Roger",
    last: "Banister",
    age: 21,
    speak: function () {},
  },
];
