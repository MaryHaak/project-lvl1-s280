import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const startGame = (game) => {
  console.log(`Welcome to the Brain Games!\n${game('rule')}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const levelsNum = 3;
  for (let i = 0; i < levelsNum; i += 1) {
    const gameIter = game('iter');
    const question = car(gameIter);
    const correctAnswer = cdr(gameIter);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!\n`);
};

export default startGame;
