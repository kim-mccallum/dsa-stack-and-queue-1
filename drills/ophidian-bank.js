// At the Ophidian Bank, a single teller serves a long queue of people. 
// New customers join the end of the queue, and the teller will serve 
// a customer only if they have all of the appropriate paperwork. Write 
// a representation of this queue; 25% of the time (random), a customer's 
// paperwork isn't quite right, and it's back to the end of the queue. 
// Show what a few minutes of the bank's lobby would look like.

const { QueueStack } = require('./QueueStack');

// Setup for getting a line of customers
const customers = [ "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe"];
let custQueue = new QueueStack();
customers.forEach(cust => custQueue.enqueue(cust));

// Our Ophian Bank
const ophidianBank = (line) => {
  
  // Establish our current customer
  let curCust = line.dequeue();

  // While we still have a line
  while ( curCust !== null ) {
    // Make a random number
    const random = Math.random();
    // If we hit a 25% chance
    if ( random <= 0.25 ) {
      console.log(`${curCust} went to the back of the line`);
      line.enqueue(curCust);
    // Otherwise, serve the customer
    } else {
      console.log(`${curCust} was served successfully`);
    }
    // Move to the next customer
    curCust = line.dequeue();
  };

  return `All members served`;
};

console.log(ophidianBank(custQueue));