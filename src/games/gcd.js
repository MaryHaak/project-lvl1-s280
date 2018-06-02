import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const gcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

const rule = 'Find the greatest common divisor of given numbers.';

const generateQuestionAndAnswer = () => {
  const num1 = generateNum(100);
  const num2 = generateNum(100);
  const question = `${num1} ${num2}`;
  const answer = gcd(num1, num2);
  return cons(question, answer);
};

export default () => startGame(rule, generateQuestionAndAnswer);
