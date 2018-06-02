import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rule = 'Is this number prime?';

const generateQuestionAndAnswer = () => {
  const question = generateNum();
  const answer = (isPrime(question) ? 'yes' : 'no');
  return cons(question, answer);
};

export default () => startGame(rule, generateQuestionAndAnswer);
