import { getRandomInt } from '../../utils/index.js';

export const isPrime = (int) => {
  for (let j = 2; j < int; j += 1) {
    if (Number.isInteger(int / j)) {
      return false;
    }
  }

  return true;
};

export const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getParamsForPrimeGame = () => {
  const question = getRandomInt();
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};
