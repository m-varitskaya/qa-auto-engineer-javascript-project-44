import readlineSync from 'readline-sync';

var name;
function showGreeting() {
  console.log('May I have your name?');
  name = readlineSync.question('Your answer: ');
  console.log(`Hello, ${name}!`);
}

export default showGreeting;
export var name;