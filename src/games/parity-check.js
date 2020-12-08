import runGame from '../index.js';

import { getRandomInt, isEven } from '../utils.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getParamsForParityCheckGame = () => {
  const question = getRandomInt();
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return [question, rightAnswer];
};

export default () => runGame(condition, getParamsForParityCheckGame);
