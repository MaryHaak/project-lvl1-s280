import readlineSync from 'readline-sync';

const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const getCorrectAnswer = question => (isEven(question) ? 'yes' : 'no');

const isEven = number => number % 2 === 0;

const startGame = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const levelsNum = 3;

  for (let i = 0; i < levelsNum; i += 1) {
    const question = Math.floor(Math.random() * 100);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = getCorrectAnswer(question);
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
