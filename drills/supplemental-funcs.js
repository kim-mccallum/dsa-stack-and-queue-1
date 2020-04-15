// Using the Stack class above, implement the following helper functions outside of the class:
//  - `peek()`: allows you to look at the top of the stack without removing it
//  - `isEmpty()`: allows you to check if the stack is empty or not
//  - `display()`: to display the stack - what is the 1st item in your stack?
//  - Remove McCoy from your stack and display the stack 

const stack = require('./create-stack');

const helperFuncs = {

  // Allows you to look at the top of the stack without removing it
  peek: (stack) => {
    return stack.top;
  },

  // Allows you to check if the stack is empty or not
  isEmpty: (stack) => {
    return stack.top === null;
  },

  // To display the stack - what is the 1st item in your stack?
  display: (stack) => {
    // Get a box to gather our item values
    items = [];

    // If we have no top property, it isn't a stack or is empty
    if ( stack.top === null ) {
      return "Stack is empty";
    }

    // If there is a top property, we setup our iterations on that object
    if ( stack.top ) {
      stack = stack.top
    }

    // General case. Iterates through every item until next becomes null (end of the stack)
    while ( stack.next !== null ) {
      // Iterates all the way to the end of the stack
      // Adds the items to our box
      items.push(" - " + stack.data);
      // Sets our stack to the next node
      stack = stack.next;
    }
    // Push the last item to our box
    items.push(" - " + stack.data);
    // Return the stack with line breaks
    return items.join('\n');    
  }
};

// Disable comments to view results

// console.log("Top node:");
// console.log(helperFuncs.peek(stack));

// console.log("\nIs Empty?:");
// console.log(helperFuncs.isEmpty(stack));

// console.log("\nDisplay Stack:");
// console.log(helperFuncs.display(stack));

// console.log("\nAdding 'Hello, world!' to stack...");
// stack.push("Hello, world!");

// console.log("\nDisplay Stack:");
// console.log(helperFuncs.display(stack));

module.exports = helperFuncs;