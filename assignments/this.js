/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding
With implicit binding, a function/method is within an object.  If a function is on its own ie. not within an object, it is in window/global binding.

* 2. Implicit Binding.
using the ${} syntax, you can refer to the object when writing a function. Using 'this' means it is anonymised and the function can be used multiple times.  You can also refer to specific keys within the object eg. this.name = name

* 3. New Binding.
You can create a brand new constructor function using 'new' with the function name and the parameters needed for the funtion.  It saves people writing a lot of code multiple times.

* 4. Explicit Binding.
call or apply is used to define 'this'. 
.call is preceded by the name of a parent function. It then uses the 'this' keyword to link with the child function it is in.
.apply is similar to call but it can  accept an array as an argument, when .call cannot.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function global(){
  console.log(this);
}
global();

// Principle 2

// code example for Implicit Binding

const Scot = function (name, age){
  this.name = name,
  this.age = age,
  this.welcome = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }
}

const dave = new Scot('Dave', 50);
dave.welcome(); 

// Principle 3

// code example for New Binding

const louise = new Scot('Louise', 22);
louise.welcome();

// Principle 4

// code example for Explicit Binding

const person = {
  name: "Jill"
}

function introduce(skill1, skill2, skill3) {
    return `Hello! My name is ${this.name} and my skills are ${skill1}, ${skill2} and ${skill3}`;
}

console.log(introduce.call(person, "Singing", "Carpentry", "Bakery"));