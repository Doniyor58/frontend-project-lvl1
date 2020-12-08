import readlineSync from 'readline-sync';

export default (condition, getGameParams) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(condition);

  let userCorrectAnswerCount = 0;

  while (userCorrectAnswerCount < 3) {
    const [question, rightAnswer] = getGameParams();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = userAnswer === rightAnswer;

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
