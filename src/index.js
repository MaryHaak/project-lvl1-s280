import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const levelsNum = 3;

const startGame = (rule, generateQuestionAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < levelsNum; i += 1) {
    const gameIter = generateQuestionAndAnswer();
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
