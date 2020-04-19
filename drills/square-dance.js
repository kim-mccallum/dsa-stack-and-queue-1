// As people come to the dance floor, they should be paired off as quickly 
// as possible: man with woman, man with woman, all the way down the line. 
// If several men arrive in a row, they should be paired in the order they 
// came, and likewise if several women do. Maintain a queue of "spares" (men 
// for whom you have no women yet, or vice versa), and pair them as 
// appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance

// Grab our Queue Stack class
const { QueueStack } = require('./QueueStack');

// Setup a QueueStack for our dancers
const ourDancers = new QueueStack();

// Using an array to populate the QueueStack for simplicity
let dancerArr = [
  { gender: "F", name: "Jane" },
  { gender: "M", name: "Frank" },
  { gender: "M", name: "John" },
  { gender: "M", name: "Sherlock" },
  { gender: "F", name: "Madonna" },
  { gender: "M", name: "David" },
  { gender: "M", name: "Christopher" },
  { gender: "F", name: "Beyonce" }
];
dancerArr.forEach(dancer => ourDancers.enqueue(dancer));

// Square Dance Pairing - Queue Stack edition
const squareDance = (queue) => {

  // Setup coorelation of matches
  const map = {
    F: "M",
    M: "F"
  };

  // Setup a QueueStack for our spare people
  const spares = new QueueStack();
  // Establish our current dancer
  let currentDancer = queue.dequeue();

  // While our QueueStack isn't empty
  while ( currentDancer !== null ) {

    // If the spare queue is empty, populate it
    if ( spares.stack1.top === null ) {
      spares.enqueue(currentDancer);

    } else {
      // If our current dancer gender is opposite of the top of our queue
      if ( spares.stack1.top.data.gender === map[currentDancer.gender] ) {
        // Declare a matched dancer
        let dancerMatch = spares.dequeue();
        // Log the partnership
        console.log(`${dancerMatch.name} is dancing with ${currentDancer.name}`);
      // Otherwise, add the current dancer to our spares
      } else {
        spares.enqueue(currentDancer);
      }
    }
    // Iterate to the next available dancer
    currentDancer = queue.dequeue();
  };

  // May be left with lonely members. Let's dequeue them
  let aloneMember = spares.dequeue();
  // While we still have members to dequeue
  while ( aloneMember !== null ) {
    // Log the lonely people
    console.log(`${aloneMember.name} is standing alone.`);
    // Iterate over our spares
    aloneMember = spares.dequeue();
  };

}

squareDance(ourDancers);