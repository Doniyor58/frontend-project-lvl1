import { getRandomInt } from '../../utils/index.js';

export const getProgression = (startProgressionInteger, progressionStep, progressionLength) =>
	new Array(progressionLength)
		.fill(startProgressionInteger)
		.map((el, index) => el + (progressionStep * index));

export const condition = 'What number is missing in the progression?';

export const getParamsForProgressionGame = () => {
	const startProgressionInteger = getRandomInt(1, 30);
	const progressionStep = getRandomInt(1, 10);
	const progressionLength = getRandomInt(5, 10);

	const progression = getProgression(startProgressionInteger, progressionStep, progressionLength);

	const randomElementInProgression = getRandomInt(0, progressionLength - 1);
	const rightAnswer = progression[randomElementInProgression];

	progression[randomElementInProgression] = '..';

	const question = progression.join(' ');

	return [question, rightAnswer];
};
