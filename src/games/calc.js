import { cons, car, cdr, toString } from 'hexlet-pairs';

const getCalcRule = () => 'What is the result of the expression?';

const getQuestion = () => {
  const operand1 = Math.floor(Math.random() * 10);
  const operand2 = Math.floor(Math.random() * 10);
  const operatorsArr = '+-*';
  const operator = operatorsArr[Math.floor(Math.random() * 3)];
  return cons(operator,cons(operand1,operand2));
}

const questionToString = () => (question) => `${car(cdr(question))} ${car(question)} ${cdr(cdr(question))}`;

export const makeCalc = (action) => {
  switch (action) {
    case 'getRule':
      return getCalcRule();
      break;
    case 'getQuestion':
      return getQuestion();
      break;
    case 'questionToString':
      return questionToString();
      break;
  }
};
