import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const balanceNumber = (num) => {
  const str = String(num);
  let sum = 0;
  for (let i = 0; i < str.length; i += 1) {
    sum += Number(str[i]);
  }
  const min = Math.floor(sum / str.length);
  let remainder = sum % str.length;
  let balancedNum = '';

  for (let i = 0; i < str.length; i += 1) {
    let curValue = min;
    if (remainder > 0) {
      curValue += 1;
      remainder -= 1;
    }
    balancedNum = `${String(curValue)}${balancedNum}`;
  }

  return balancedNum;
};

const rule = 'Balance the given number.';

const generateQuestionAndAnswer = () => {
  const question = generateNum(1000);
  const answer = balanceNumber(question);

  return cons(question, answer);
};

export default () => startGame(rule, generateQuestionAndAnswer);
