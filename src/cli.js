
import readlineSync from 'readline-sync';


const showGreeting = () => {
    console.log('May I have your name?');
    const name = readlineSync.question('Your answer: ');
    console.log('Hello, ' + name + '!');
    };  