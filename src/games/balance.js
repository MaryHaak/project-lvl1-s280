import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const iterBalance = () => {
  const question = generateNum(1000);

  const str = String(question);
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]);
  }
  const min = Math.floor(sum / str.length);
  let remainder = sum % str.length;
  let answer = '';

  for (let i = 0; i < str.length; i += 1) {
    let curValue = min;
    if (remainder > 0) {
      curValue += 1;
      remainder -= 1;
    }
    answer = `${String(curValue)}${answer}`;
  }

  return cons(question, answer);
};

const makeBalance = (action) => {
  switch (action) {
    case 'rule':
      return 'Balance the given number.';
    case 'iter':
      return iterBalance();
    default:
      return null;
  }
};

export default () => startGame(makeBalance);
