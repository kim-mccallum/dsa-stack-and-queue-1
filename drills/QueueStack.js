// There are many ways to implement a queue. You have learned using singly 
// linked list, and doubly linked list. Keeping the concept of a queue in mind, 
// implement a queue using 2 stacks and no other data structure. (You are not 
// allowed to use a doubly linked list or array. Use your stack implementation 
// with a linked list from above to solve this problem.)

const { Stack } = require('./Stack');

class QueueStack {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  };

  // Add an item to the top of the stack
  enqueue(data) {
    this.stack1.push(data);
  };

  // Use a second stack to reverse the order and return the top of the reversed stack
  dequeue() {
    if ( this.stack2.top === null ) {
      if ( this.stack1.top === null ) { 
        return 'Cannot dequeue because queue is empty'; 
      }
      while ( this.stack1.top ) {
        let val = this.stack1.pop();
        this.stack2.push(val);
      }
    }
    return this.stack2.pop();
  }
};

// let newQueue = new QueueStack();
// newQueue.enqueue("Stuff");
// newQueue.enqueue("Stuff2");
// newQueue.enqueue("Stuff3");
// newQueue.enqueue("Stuff4");
// console.log(newQueue);

// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// console.log(newQueue);

// newQueue.dequeue();
// console.log(newQueue);

module.exports = {
  QueueStack
};
