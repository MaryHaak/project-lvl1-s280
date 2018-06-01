import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const iterProgression = () => {
  const n = 10;
  const a0 = generateNum();
  const step = generateNum(5) + 1;
  const emptyIndex = generateNum(n);
  let question = '';

  for (let i = 0; i < n; i += 1) {
    question = (i === emptyIndex) ? `${question} ..` : `${question} ${a0 + (i * step)}`;
  }

  const answer = a0 + (emptyIndex * step);

  return cons(question, answer);
};

const makeProgression = (action) => {
  switch (action) {
    case 'rule':
      return 'What number is missing in this progression?';
    case 'iter':
      return iterProgression();
    default:
      return null;
  }
};

export default () => startGame(makeProgression);
