// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?  

const { QueueDouble } = require('./QueueDouble');

let ourItems = ["Kirk", "Spock", "Uhura", "Sulu", "Checkov"];

let newQueue = new QueueDouble();

ourItems.forEach(item => newQueue.enqueue(item));

console.log(newQueue);