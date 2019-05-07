// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let firstname = 'josemaria';
let lastname = 'nriagu';

const output = function printName() {
  nickname = 'Dr. Flynn';
  return `The name of ${nickname}'s branch is '${firstname}-${lastname}'`
}

console.log(output());

// Using IIFE method
const output2 = (() => {
  nickname = 'Dr. Flynn';
  console.log (`The name of ${nickname}'s branch is '${firstname}-${lastname}'`)
})();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  function inner() {
    count = count + 1;
    console.log(count);
  }
  return inner;
};

const newCounter = counter();

newCounter();
newCounter();
newCounter();
newCounter();

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let initial = 0;
  return () => {
    initial = initial + 1;
    console.log(initial)
  }
};
