import readlineSync from 'readline-sync';
import cli from './cli.js';
import { getRandomInt } from '../utils/index.js';

export default () => {
	let userCorrectAnswerCount = 0;
	const userName = cli();

	console.log('Answer "yes" if the number is even, otherwise answer "no".');

	while (userCorrectAnswerCount < 3) {
		const randomInt = getRandomInt();
		const isEven = randomInt % 2 === 0;

		console.log(`Question: ${randomInt}`);
		const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

		const isCorrectAnswer = (userAnswer === 'yes' && isEven) || (userAnswer === 'no' && !isEven);

		if (!isCorrectAnswer) {
			console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
			console.log(`Let's try again, ${userName}!`);

			return;
		}

		console.log('Correct!');
		userCorrectAnswerCount += 1;
	}

	console.log(`Congratulations, ${userName}!`);
};
