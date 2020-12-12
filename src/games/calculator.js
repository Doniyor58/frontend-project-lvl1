import runGame from '../index.js';

import { getRandomInt } from '../utils.js';

const condition = 'What is the result of the expression?';

const getParamsForCalculatorGame = () => {
  const mathematicalOperations = ['+', '-', '*'];
  const operationsCount = mathematicalOperations.length - 1;

  const randomOperation = mathematicalOperations[getRandomInt(0, operationsCount)];

  const a = getRandomInt(0, 25);
  const b = getRandomInt(0, 25);

  let question;
  let rightAnswer;

  switch (randomOperation) {
    case '+':
      question = `${a} + ${b}`;
      rightAnswer = a + b;
      break;

    case '-':
      question = `${a} - ${b}`;
      rightAnswer = a - b;
      break;

    case '*':
      question = `${a} * ${b}`;
      rightAnswer = a * b;
      break;

    default:
      throw new Error(`Неизвестная опреация ${randomOperation}`);
  }

  return [question, String(rightAnswer)];
};

export default () => runGame(condition, getParamsForCalculatorGame);
