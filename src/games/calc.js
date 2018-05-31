import { cons, car, cdr } from 'hexlet-pairs';

const getRule = () => 'What is the result of the expression?';

const getQuestion = () => {
  const operand1 = Math.floor(Math.random() * 10);
  const operand2 = Math.floor(Math.random() * 10);
  const operatorsArr = '+-*';
  const operator = operatorsArr[Math.floor(Math.random() * 3)];
  return cons(operator, cons(operand1, operand2));
};

const questionToString = () => question => `${car(cdr(question))} ${car(question)} ${cdr(cdr(question))}`;

const getCorrectAnswer = () => (question) => {
  const operator = car(question);
  const operand1 = car(cdr(question));
  const operand2 = cdr(cdr(question));

  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
};

const makeCalc = (action) => {
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

export default makeCalc;
