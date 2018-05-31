const getRule = () => 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => Math.floor(Math.random() * 10);

const questionToString = () => question => question;

const isEven = number => (number % 2 === 0);

const getCorrectAnswer = () => question => (isEven(question) ? 'yes' : 'no');

const makeEven = (action) => {
  console.log('MAKE EVEN!!!');
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

export default makeEven;
