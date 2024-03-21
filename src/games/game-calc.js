import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'What is the result of the expression?';
const punctationMark = ['+', '-', '*'];

const getCorrectAnswer = (operand1, operand2, operation) => {
  let answer;
  switch (operation) {
    case '+': answer = operand1 + operand2;
      break;
    case '-': answer = operand1 - operand2;
      break;
    case '*': answer = operand1 * operand2;
      break;
    default: break;
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const operation = punctationMark[getRandomNumber(0, punctationMark.length)];
  const question = `${operand1}${operation}${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2, operation);
  return [question, String(answer)];
};

const playGameCalc = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGameCalc();