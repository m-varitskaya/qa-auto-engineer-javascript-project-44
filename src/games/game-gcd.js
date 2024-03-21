import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (operand1, operand2) => {
  const minNum = operand1 > operand2 ? operand2 : operand1;
  let nod = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (operand1 % i === 0 && operand2 % i === 0) nod = i;
  }
  return nod;
};

const getQuestionAndAnswer = () => {
  const operand1 = getRandomNumber();
  const operand2 = getRandomNumber();
  const question = `${operand1} ${operand2}`;
  const answer = getCorrectAnswer(operand1, operand2);
  return [question, String(answer)];
};

const playGameNod = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGameNod;
