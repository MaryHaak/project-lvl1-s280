import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const rule = 'What is the result of the expression?';

const generateQuestionAndAnswer = () => {
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

export default () => startGame(rule, generateQuestionAndAnswer);
