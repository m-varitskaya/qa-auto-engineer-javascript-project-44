const maxNumRand = 100;
const minNumRand = 1;

const getRandomNumber = (
  minNum = minNumRand,
  maxNum = maxNumRand) => {
    return Math.floor(Math.random() * maxNum) + minNum;
  };

export default getRandomNumber;