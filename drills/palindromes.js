// A palindrome is a word, phrase, or number that is spelled the same 
// forward and backward. For example, “dad” is a palindrome; “A man, 
// a plan, a canal: Panama” is a palindrome if you take out the spaces 
// and ignore the punctuation; and 1,001 is a numeric palindrome. We 
// can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given 
// input is palindrome or not. Use the following template as a starting 
// point.

/*

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

*/
const { Stack } = require('./Stack');

const is_palindrome = (string) => {
  // Lowercase and remove special characters from string
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  // Create a new stack
  let stack = new Stack();

  // Populate our stack with our string characters
  for ( let i = 0; i < string.length; i++ ) {
    stack.push(string[i]);
  }

  // Declare a variable to store the reverse order
  let reverseString = '';

  // While the top isn't null, pop the values off the stack
  while ( stack.top !== null ) {
    reverseString += stack.pop();
  }

  // Validate if both strings are the same
  console.log(string);
  return string === reverseString;
};

console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));