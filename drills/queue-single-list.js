// Walk through the Queue class in the curriculum and understand it well. 
// Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

//  - Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
//  - Implement a `peek()` function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
//  - Implement a `isEmpty()` function outside the Queue class that allows you to check if the queue is empty or not
//  - Implement a `display()` function outside of the Queue class that lets you display what's in the queue.
//  - Remove Spock from the queue and display the resulting queue.  


const { QueueSingle } = require('./QueueSingle');

let ourItems = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];

let newQueue = new QueueSingle();

ourItems.forEach(item => newQueue.enqueue(item));

const helpers = {
  // Implement a `peek()` function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
  peek: (queue) => {
    return queue.first;
  },

  // Implement a `isEmpty()` function outside the Queue class that allows you to check if the queue is empty or not
  isEmpty: (queue) => {
    return queue.first === null;
  },
  // Implement a `display()` function outside of the Queue class that lets you display what's in the queue.
  display: (queue) => {
    // Get a box to gather our item values
    items = [];

    // If we have no top property, it isn't a stack or is empty
    if ( queue.first === null ) {
      return "Queue is empty";
    }

    // If there is a top property, we setup our iterations on that object
    if ( queue.first ) {
      queue = queue.first
    }

    // General case. Iterates through every item until next becomes null (end of the stack)
    while ( queue.next !== null ) {
      // Iterates all the way to the end of the stack
      // Adds the items to our box
      items.push(" - " + queue.val);
      // Sets our stack to the next node
      queue = queue.next;
    }
    // Push the last item to our box
    items.push(" - " + queue.val);
    // Return the stack with line breaks
    return items.join('\n');    
  }

};

console.log(helpers.display(newQueue));
module.exports = {
  newQueue,
  helpers
}