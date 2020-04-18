// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?  

const { QueueDouble } = require('./QueueDouble');

let ourItems = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];

let newQueue = new QueueDouble();

ourItems.forEach(item => newQueue.enqueue(item));

console.log(newQueue);

while ( newQueue.head !== null ) {
  newQueue.dequeue();
  console.log("Dequeued:\n", newQueue);
}

console.log("All are dequeued: ", newQueue);

// newQueue.enqueue("Stuff");
// console.log(newQueue);

// let newerQueue = new QueueDouble();
// newerQueue.enqueue("Stuff");
// console.log(newerQueue);

// newerQueue.enqueue("Stuff2");
// console.log(newerQueue);

// newerQueue.dequeue();
// console.log(newerQueue);

// newerQueue.dequeue();
// console.log("Newer queue: ", newerQueue);

// let newnewqueue = new QueueDouble();
// console.log("New new queue: ", newnewqueue);