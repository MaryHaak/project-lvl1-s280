import { cons, car, cdr, toString } from 'hexlet-pairs';

const getRule = () => 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  toString(cons(num1, num2));
  return cons(num1, num2);
};

const questionToString = () => question => `${car(question)} ${cdr(question)}`;

const gcd = (a, b) => {
  let i = a;
  while (a % i !== 0 || b % i !== 0) {
    i -= 1;
  }
  return i;
};

const getCorrectAnswer = () => (question) => {
  const num1 = car(question);
  const num2 = cdr(question);
  return gcd(num1, num2);
};

const makeGCD = (action) => {
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

export default makeGCD;
