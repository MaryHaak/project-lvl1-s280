import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const iterCalc = () => {
  const operand1 = generateNum();
  const operand2 = generateNum();
  const operatorsArr = '+-*';
  const operator = operatorsArr[generateNum(3)];
  const question = `${operand1} ${operator} ${operand2}`;

  let answer = null;
  switch (operator) {
    case '+':
      answer = operand1 + operand2;
      break;
    case '-':
      answer = operand1 - operand2;
      break;
    case '*':
      answer = operand1 * operand2;
      break;
    default:
      return null;
  }

  return cons(question, answer);
};

const makeCalc = (action) => {
  switch (action) {
    case 'rule':
      return 'What is the result of the expression?';
    case 'iter':
      return iterCalc();
    default:
      return null;
  }
};

export default () => startGame(makeCalc);
