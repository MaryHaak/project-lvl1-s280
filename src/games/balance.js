import startGame from '..';

const getRule = () => 'Balance the given number.';

const getQuestion = () => Math.floor(Math.random() * 1000);

const questionToString = () => question => question;

const getCorrectAnswer = () => (question) => {
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
  return answer;
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
