import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const isEven = number => (number % 2 === 0);

const iterEven = () => {
  const question = generateNum();
  const answer = (isEven(question) ? 'yes' : 'no');
  return cons(question, answer);
};

const makeEven = (action) => {
  switch (action) {
    case 'rule':
      return 'Answer "yes" if number even otherwise answer "no".';
    case 'iter':
      return iterEven();
    default:
      return null;
  }
};

export default () => startGame(makeEven);
