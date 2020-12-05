import { getRandomInt } from '../../utils/index.js';

export const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getParamsForParityCheckGame = () => {
	const question = getRandomInt();
	const rightAnswer = question % 2 === 0 ? 'yes' : 'no';

	return [question, rightAnswer];
};
