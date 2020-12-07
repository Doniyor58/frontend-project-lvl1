import readlineSync from 'readline-sync';
import cli from './cli.js';

export default (condition, getGameParams) => {
  let userCorrectAnswerCount = 0;
  const userName = cli();

  console.log(condition);

  while (userCorrectAnswerCount < 3) {
    const [question, rightAnswer] = getGameParams();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = String(userAnswer) === String(rightAnswer);

    if (!isCorrectAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    console.log('Correct!');
    userCorrectAnswerCount += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};
