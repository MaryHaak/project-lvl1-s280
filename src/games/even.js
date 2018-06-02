import { cons } from 'hexlet-pairs';
import generateNum from '../utils';
import startGame from '..';

const isEven = number => (number % 2 === 0);

const rule = 'Answer "yes" if number even otherwise answer "no".';

const generateQuestionAndAnswer = () => {
  const question = generateNum();
  const answer = (isEven(question) ? 'yes' : 'no');
  return cons(question, answer);
};

export default () => startGame(rule, generateQuestionAndAnswer);
