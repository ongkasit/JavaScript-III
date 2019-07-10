//Constructor function example: 
// function Animal(object) {
//     this.name = object.name;
// }

// function Person(attributes) {
//     this.age = attributes.age;
//     this.name = attributes.name;
//     this.homeTown = attributes.homeTown;
//     this.hobby = attributes.hobby;
// }

// Person.prototype.speak = function() {
//     return `Hello, my name is ${this.name} and I love ${this.hobby}`;
// };

// function Child(childAttributes) {
//     Person.call(this, childAttributes); //binding this to Person
//     this.isChild = childAttributes.isChild; // this will be a special attribute to Child
// }

// Child.prototype = Object.create(Person.prototype);

// const manny = new Child({
//     age: 18,
//     name: 'Manny Prichet',
//     homeTown: 'Los Angeles',
//     hobby: 'Hitting on girls'
// })
// console.log(manny);
// console.log(manny.speak());

// const jay = new Person({
//     name: 'Jay Prichet',
//     age: 65,
//     homeTown: 'Los Angeles',
//     hobby: 'Playing with his dog, Stella'
// });

// console.log(jay);
// console.log(jay.speak());

function Fruit(attrs) {
    this.type = attrs.type;
    this.name = attrs.name;
    this.isRipe = attrs.isRipe;
    this.calories = attrs.calories;
}

Fruit.prototype.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
};

Fruit.prototype.calculateCals = function() {
    console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};

function Banana(bananaAttrs) {
    Fruit.call(this, bananaAttrs);
    this.doMonkeysLikeIt = bananAttrs.doMonkeysLikeIt;
}

Banana.prototype = Object.create(Fruit.prototype);

Banana.prototype.checkIfMonkeysLikeIt = function() {
    if (this.doMonkeysLikeIt) {
        return true;
    } else {
        return false;
    }
};

function Kiwi(kiwiAttrs) {
    Fruit.call(this, kiwiAttrs);
    this.isFuzzy = kiwiAttrs.isFuzzy;
}

Kiwi.prototype.checkIfFuzzy = function() {
    if (this.isFuzzy) {
        return true;
    } else {
        return false;
    }
};

const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
});

const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
});

newKiwi.shipped('Alaska');
newBanana.shipped('Colorado');
newBanana.checkIfMonkeysLikeIt(); // returns true
newKiwi.checkIfMonkeysLikeIt(); // won't work
newKiwi.checkIfFuzzy(); // returns true
newBanana.checkIfFuzzy(); // won't work
newBanana.calculateCals();
newKiwi.calculateCals();