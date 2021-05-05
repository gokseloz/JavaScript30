// start with strings, numbers and booleans
//numbers
let age = 100;
let age2 = age;
age = 200;
console.log("age", age);
console.log("age2", age2);

//strings
let name = "Shire";
let name2 = name;
name = "Mordor";
console.log("name", name);
console.log("name2", name2);

// Let's say we have an array
const players = ["Gimli", "Aragorn", "Legolas", "Boromir"];

// and we want to make a copy of it.
const team = players;
// You might think we can just do something like this:
team[3] = "Frodo";
// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!
console.log("team", team);
console.log("players", players);

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team2 = players.slice();

console.log("copied array", team2);
team2[3] = "Frodo";
console.log("copied array changed", team2);
console.log("original array", players);

// or create a new array and concat the old one in
const team3 = [].concat(players);

console.log("copied array 2", team3);
team3[3] = "Sam";
console.log("copied array 2 changed", team3);
console.log("original array", players);

// or use the new ES6 Spread
const team4 = [...players];

console.log("copied array 3", team4);
team4[3] = "Pippin";
console.log("copied array 3 changed", team4);
console.log("original array", players);

const team5 = Array.from(players);

console.log("copied array 4", team5);
team5[3] = "Merry";
console.log("copied array 4 changed", team5);
console.log("original array", players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const hobbit = {
  name: "Frodo Baggins",
  age: 250,
};

// and think we make a copy:
const orc = hobbit;
orc.number = 99;
console.log("hobbit", hobbit);
console.log("orc", orc);

// how do we take a copy instead?
const orc2 = Object.assign({}, hobbit, {
  number: 199,
  age: 12,
});
console.log("hobbit", hobbit);
console.log("orc2", orc2);

// We will hopefully soon see the object ...spread
const orc3 = {
  ...hobbit,
};
orc.number = 299;
console.log("hobbit", hobbit);
console.log("orc2", orc2);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const gandalf = {
  character: "wizard",
  strength: 50,
  armor: 30,
};

const sauron = JSON.parse(JSON.stringify(gandalf));
sauron.armor = 25;
console.log("gandalf", gandalf);
console.log("sauron", sauron);
