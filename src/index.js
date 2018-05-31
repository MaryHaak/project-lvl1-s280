import readlineSync from 'readline-sync';
import makeCalc from './games/calc';
import makeEven from './games/even';

const makeGame = (type) => {
  switch (type) {
    case 'even':
      return makeEven;
    case 'calc':
      return makeCalc;
    default:
      return null;
  }
};

const getRule = game => game('getRule');

const getQuestion = game => game('getQuestion');

const questionToString = (game, question) => game('questionToString')(question);

const getCorrectAnswer = (game, question) => game('getCorrectAnswer')(question);

const startGame = (type) => {
  const game = makeGame(type);
  const rule = getRule(game);

  console.log(`Welcome to the Brain Games!\n${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const levelsNum = 3;
  for (let i = 0; i < levelsNum; i += 1) {
    const question = getQuestion(game);
    console.log(`Question: ${questionToString(game, question)}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(getCorrectAnswer(game, question));
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!\n`);
};

export default startGame;
