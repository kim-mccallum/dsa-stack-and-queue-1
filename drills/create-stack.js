const { Stack } = require('./Stack');

let ourItems = ["Kirk", "Spock", "McCoy", "Scotty"];

let newStack = new Stack;

ourItems.forEach(item => newStack.push(item));

console.log(newStack);