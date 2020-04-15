class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  };
};

class Stack {
  constructor() {
    this.top = null;
  };

  // Add an item to the top of the stack
  push(data) {
    // If the stack is empty, the node will be the top of the stack
    if ( this.top === null ) {
      this.top = new _Node(data, null);
      return this.top;
    };
    // If the stack already has something, make a new node,
    // add the data to the new node, and have the pointer
    // point to top
    const node = new _Node(data, this.top);
    this.top = node;
  };

  // Remove an item from the top of the stack
  pop() {
    // In order the remove the top of the stack, we have to
    // point the pointer to the next item, and that next item
    // becomes the top of the stack
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
};

module.exports = {
  Stack,
  _Node
}