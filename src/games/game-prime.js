import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getCorrectAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const num = getRandomNumber();
  const question = `${num}`;
  const answer = getCorrectAnswer(question) ? 'yes' : 'no';
  return [question, answer];
};

const playGamePrime = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGamePrime;
