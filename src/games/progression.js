import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const progressionLength = 10;

const rule = 'What number is missing in this progression?';

const generateQuestionAndAnswer = () => {
  const firstNumber = generateNum();
  const step = generateNum(5) + 1;
  const emptyIndex = generateNum(progressionLength);
  let question = '';

  for (let i = 0; i < progressionLength; i += 1) {
    question = (i === emptyIndex) ? `${question} ..` : `${question} ${firstNumber + (i * step)}`;
  }

  const answer = firstNumber + (emptyIndex * step);

  return cons(question, answer);
};

export default () => startGame(rule, generateQuestionAndAnswer);
