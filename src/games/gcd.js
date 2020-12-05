import { getRandomInt } from '../../utils/index.js';

export const getGcd = (a, b) => {
	const biggest = a > b ? a : b;
	const smallest = a < b ? a : b;

	let gcd;

	for (let j = 1; j <= smallest; j += 1) {
		const isSmallestInteger = Number.isInteger(smallest / j);
		const isBiggestInteger = Number.isInteger(biggest / j);

		if (isSmallestInteger && isBiggestInteger) {
			gcd = j;
		}
	}

	return gcd;
};

export const condition = 'Find the greatest common divisor of given numbers.';

export const getParamsForGcdGame = () => {
	const a = getRandomInt(100);
	const b = getRandomInt(50);

	const question = `${a} ${b}`;
	const rightAnswer = getGcd(a, b);

	return [question, rightAnswer];
};
