import { cons, car, cdr } from 'hexlet-pairs';
import startGame from '..';

const getRule = () => 'Balance the given number.';

const getQuestion = () => Math.floor(Math.random() * 1000);

const questionToString = () => question => question;

const getMinMax = (str) => {
  let minIndex = 0;
  let maxIndex = 0;

  for (let i = 1; i < str.length; i += 1) {
    if (str[i] < str[minIndex]) {
      minIndex = i;
    }
    if (str[i] > str[maxIndex]) {
      maxIndex = i;
    }
  }
  return cons(minIndex, maxIndex);
};

const getMinIndex = str => car(getMinMax(str));

const getMaxIndex = str => cdr(getMinMax(str));

const isBalanced = (str) => {
  const min = str[getMinIndex(str)];
  const max = str[getMaxIndex(str)];

  if (max - min > 1) {
    return false;
  }

  let i = 1;
  while (i < str.length) {
    const cur = Number(str[i]);
    const prev = Number(str[i - 1]);
    if (cur >= prev) {
      i += 1;
    } else {
      return false;
    }
  }

  return true;
};

const replaceAt = (str, i, ch) => str.substring(0, i) + ch + str.substring(i + 1, str.length);

const shareOneFromMaxToMin = (str) => {
  let newStr = str;

  newStr = replaceAt(newStr, getMaxIndex(str), String(Number(str[getMaxIndex(str)]) - 1));
  newStr = replaceAt(newStr, getMinIndex(str), String(Number(str[getMinIndex(str)]) + 1));
  return newStr;
};

const sortStrNumbers = str => str.split('').sort((a, b) => (a - b)).join('');

const getCorrectAnswer = () => (question) => {
  let str = sortStrNumbers(String(question));

  while (isBalanced(str) === false) {
    str = shareOneFromMaxToMin(str);
    sortStrNumbers(str);
  }
  return str;
};

const makeBalance = (action) => {
  switch (action) {
    case 'getRule':
      return getRule();
    case 'getQuestion':
      return getQuestion();
    case 'questionToString':
      return questionToString();
    case 'getCorrectAnswer':
      return getCorrectAnswer();
    default:
      return null;
  }
};

export default () => startGame(makeBalance);
