import { getRandomInt } from '../../utils/index.js';

export const condition = 'What is the result of the expression?';

export const getParamsForCalculatorGame = () => {
	const mathematicalOperations = ['+', '-', '*'];
	const operationsCount = mathematicalOperations.length;

	const randomOperation = mathematicalOperations[getRandomInt(operationsCount)];

	let a;
	let b;

	let question;
	let rightAnswer;

	switch (randomOperation) {
	case '+':
		a = getRandomInt(50);
		b = getRandomInt(15);

		question = `${a} + ${b}`;
		rightAnswer = a + b;
		break;

	case '-':
		a = getRandomInt();
		b = getRandomInt(20);

		question = a > b ? `${a} - ${b}` : `${b} - ${a}`;
		rightAnswer = a > b ? a - b : b - a;
		break;

	case '*':
		a = getRandomInt(30);
		b = getRandomInt(10);

		question = `${a} * ${b}`;
		rightAnswer = a * b;
		break;

	default:
		a = 25;
		b = 25;

		question = `${a} + ${b}`;
		rightAnswer = a + b;
	}

	return [question, rightAnswer];
};


