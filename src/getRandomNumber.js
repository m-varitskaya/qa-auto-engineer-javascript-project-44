const maxNumRand = 100;
const minNumRand = 0;

const getRandomNumber = (
  minNum = minNumRand,
  maxNum = maxNumRand) => {
    return Math.floor(Math.random() * maxNum) + minNum;
  };

export default getRandomNumber;