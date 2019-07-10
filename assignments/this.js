/* The for principles of "this"; 
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window/Global Object Binding: is when the "this" keyword is targeted at the default object, which is either the window or the 
 * console. Using Josh Knell's forest analogy - you a pointing at the forest instead of just a tree.
 * 2. Implicit Binding: is when you call a specific tree (object) within the forest (window/global console). You can use the dot
 * notation to call the object that is the left to the dot. 
 * 3. New binding: is when you create a completely new tree within that same forest analogy. The New binding refers to constructor
 * function, which is not yet covered thus far in the course.
 * 4. Explicit binding: is when you use .call .apply .binding to work with arrays
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
}

console.log(sayName("Kasit Nganthavee"));

// Principle 2
// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};
myObj.sayHello('Ong');

const sayNameFunc = obj => {
    obj.sayName = function() {
        console.log(`Hello my name is ${this.name}`);
        console.log(this);
    };
};

const me = { name: 'Tim' };
const you = { name: 'Leon' };
sayNameFunc(me);
sayNameFunc(you);

//Invoke Methods on objects
me.sayName();
you.sayName();


// Principle 3
// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const bright = new CordialPerson('Alex');
const alex = new CordialPerson('Bright');

bright.speak();
alex.speak();

// Principle 4
// code example for Explicit Binding

bright.speak.call(alex);
alex.speak.call(bright);

let ultimateName = function() {
    console.log(`This is the ultimate name: ${this.name}`);
};

let kasit = {
    name: 'Kasit',
    age: 22
};

let languages = ['Javascript', 'Python', 'Ruby'];

ultimateName.call(kasit);

let ultimateSkill = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1} ${lang2} and ${lang3}`);
};

ultimateSkill.apply(kasit, languages);