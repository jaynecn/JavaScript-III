/*

  In order to do these exercises you'll need your newly acquired knowledge on
  constructor functions, methods, prototypes and the `this` keyword.
  Here's an example of an exercise:

  TASK 0:

  - Build an Airplane constructor that takes a name.
  - Give airplanes the ability to take off and land.
  - If a plane takes off, its "isFlying" property is true.
  - If a plane lands, its "isFlying" property is false.

  SOLUTION CODE:

  function Airplane(name) {
    this.name = name;
    this.isFlying = false;
  }
  Airplane.prototype.takeOff = function () {
    this.isFlying = true;
  }
  Airplane.prototype.land = function () {
    this.isFlying = false; 
  }

  HOW TO TEST OUR SOLUTION:

  const jumbo = new Airplane('Jumbo');
  console.log(jumbo.name)              // 'Jumbo'
  console.log(jumbo.isFlying)          // false
  jumbo.takeOff();
  console.log(jumbo.isFlying)          // true
  jumbo.land();
  console.log(jumbo.isFlying)          // false
*/

/*

  TASK 1

  - Build a Person Constructor that takes name and age.
  - Give persons the ability to greet by returning a string stating name and age.
  - Give persons the ability to eat edibles.
  - When eating an edible, it should be pushed into a "stomach" property which is an array.
  - Give persons the ability to poop.
  - When pooping, the stomach should empty.
  */
  function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }

  Person.prototype.greet = function() {
    return (`Name: ${this.name} Age: ${this.age}`);
  }

  Person.prototype.eat = function(edibles) {
    this.stomach.push(edibles);
    return this.stomach;
    }

  Person.prototype.poop = function() {
    this.stomach = [];
    return this.stomach;
  }

  const jayne = new Person('jayne', 21, );
  console.log(jayne.greet());
  console.log(jayne.eat('biscuits'));
  console.log(jayne.eat('chips'));
  console.log(jayne.eat('morning croissant'));
  console.log(jayne.poop());
/*
  TASK 2

  - Build a Car constructor that takes model name and make.
  - Give cars the ability to drive a distance.
  - By driving a car, the distance driven should be added to an "odometer" property.
  - Give cars the ability to crash.
  - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  - Give cars the ability to be repaired.
  - A repaired car can be driven again.
*/
function Car(model, name, make) {
  this.model = model;
  this.name = name;
  this.make = make;
  this.canDrive = true;
  this.odometer = 0;
}

Car.prototype.drive = function() {
  if (this.canDrive === true) {
    let counter = this.odometer += 20;
    return counter;
    }
  return (`I crashed at ${this.odometer} miles!`);
  };


Car.prototype.crash = function() {
  this.canDrive = false;
}

Car.prototype.repair = function() {
  this.canDrive = true;
  return (`Your ${this.make} ${this.model} called ${this.name} has been repaired.  Happy motoring!`);
}

const honda = new Car('Honda', 'Excalibur', 'red');
console.log(honda.drive());
console.log(honda.drive());

console.log(honda.crash());

console.log(honda.drive());
console.log(honda.repair());
console.log(honda.drive());


/*
  TASK 3

  - Build a Baby constructor that subclasses the Person built earlier.
  - Babies of course inherit the ability to greet, which can be strange.
  - Babies should have the ability to play, which persons don't.
  - By playing, a string is returned with some text of your choosing.
  */
function Baby (name, age, toy) {
  Person.call(this, toy);
  this.name = name;
  this.age = age;
  this.toy = toy;
}

Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return (`${this.name} likes to play with their ${this.toy}`);
}

const chico = new Baby('Chico', 2, 'ball');
console.log(chico.greet());
console.log(chico.play());
  /*

// TASK 4 HAS BEEN PLACED UNDERNEATH THE STRETCH TASK//

  STRETCH TASK

  Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject ({createdAt, name, dimensions}) {
  this.createdAt = createdAt;
  this.name = name;
  this.dimensions = dimensions
}

GameObject.prototype.destroy = function() {
    console.log(`${this.name} was removed from the game.`);
    }
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats ({createdAt, name, dimensions, healthPoints}) {
  GameObject.call(this, {createdAt, name, dimensions, healthPoints})
  this.healthPoints = healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  console.log(`${this.name} took damage.`)
}
/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
function Humanoid ({createdAt, name, dimensions, healthPoints, team, weapons, language}) {
  CharacterStats.call(this, {createdAt, name, dimensions, healthPoints, team, weapons, language})
  this.team = team;
  this.weapons = weapons;
  this.language = language
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function () {
  console.log(`${this.name} offers a greeting in ${this.language}`);
}

Humanoid.prototype.nativeTongue = function (){
  let tongue = this.language;
  return tongue;
}
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// TASK 4//
/*TASK 4

Use your imagination and come up with constructors that allow to build objects
With amazing and original capabilities. Build 3 small ones, or a very
complicated one with lots of state. Surprise us!

*/
function Villain(villainInfo) {
Humanoid.call(this, villainInfo);
this.swordOfDoom = villainInfo.swordOfDoom;
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.slay = function(victim) {
let trophy = victim.weapons.pop();
let anotherTrophy = victim.weapons.pop();
let curse = victim.weapons.push('curse of smelling really bad');
victim.healthPoints = victim.healthPoints - 20;
victim.language = victim.language +(` plus a bit of Evil after hearing ${this.name}`);
return `Your ${trophy} is no match for me and my ${this.team} ${this.weapons} ${victim.name}! ${victim.team} is doomed!`;
}

const skeletor = new Villain({
createdAt: new Date(),
dimensions: {
length: 3,
width: 4,
height: 5,
},
healthPoints: 25,
name: 'Skeletor',
team: 'Castle Greyskull',
weapons: [ 'Sword of Doom'],
language: 'Evil',
swordOfDoom: true
});


function Hero(heroInfo) {
Humanoid.call(this, heroInfo);
this.healingSword = heroInfo.healingSword;
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heal = function(victim) {
victim.weapons = [];
let amulet = victim.weapons.push("amulet of hope");
victim.healthPoints = victim.healthPoints + 30;
victim.language = 'Common Tongue';
return `I'll save you ${victim.name}! My ${this.weapons} will help you. Return to ${victim.team} a valiant warrior`;
}

const sheRa = new Hero({
createdAt: new Date(),
dimensions: {
length: 2,
width: 3,
height: 6,
},
healthPoints: 20,
name: 'SheRa',
team: 'He-Man',
weapons: ['Healing Sword'],
language: 'Common Tongue',
healingSword: true
});

console.log(skeletor.greet());
console.log(skeletor.slay(archer));
console.log(archer);

//Uncomment to reveal the power of She-ra!//
// console.log(sheRa.greet());
// console.log(sheRa.heal(archer));
// console.log(archer);
