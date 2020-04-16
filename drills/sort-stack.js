// Write a program to sort a stack such that the smallest items are on the top (in ascending order).
// You can use an additional stack, but you may not use any other data structure (such as an array, 
// or linked list).

const { Stack } = require('./Stack');
const stack = require('./create-stack');
const helperFuncs = require('./supplemental-funcs');

const sortStack = (stack) => {
  // Setup a new stack for sorting
  let sortedStack = new Stack();

  // While we still have values on the stack
  while (stack.top) {
    // Snag the top of the stack
    let tempNode = stack.pop();

    // While we still have values in our sorted stack...
    // If the top of our sorted stack is smaller than the top of our original stack
    while (sortedStack.top && sortedStack.top.data < tempNode) {
      // Move the value to our original stack
      stack.push(sortedStack.pop());
    }

    // Add our temporary value to our sorted stack
    sortedStack.push(tempNode);
  }

  // Return the sorted stack
  return sortedStack;
};

console.log("Original Stack:");
console.log(helperFuncs.display(stack));
console.log("\nSorted Stack:");
console.log(helperFuncs.display(sortStack(stack)));