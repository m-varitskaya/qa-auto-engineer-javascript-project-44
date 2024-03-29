import getRandomNumber from '../getRandomNumber.js';
import playGame from '../index.js';

const lengthProgression = 10;
const maxDiffProgression = 10;

const rule = 'What number is missing in the progression?';

const getProgression = () => {
  const firstNum = getRandomNumber();
  const progression = [];
  const diffProgression = getRandomNumber(1, maxDiffProgression);
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(firstNum + diffProgression * i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const skip = getRandomNumber(0, lengthProgression);
  const progression = getProgression();
  const answer = progression[skip];
  progression[skip] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const playGameProgression = () => {
  playGame(rule, getQuestionAndAnswer);
};

export default playGameProgression;
