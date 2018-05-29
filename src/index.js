import readlineSync from 'readline-sync';


const startGame = () => {
  const name = greetUser();

  for (let i = 0; i < 3; i++) {
    let num = Math.floor(Math.random()*100);
    let correctAnswer = getCorrectAnswer(num);
    let answer = getUserAnswer(num);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};


const greetUser = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
}


const getUserAnswer = (num) => {
  console.log(`Question: ${num}`);
  return readlineSync.question('Your answer: ');
}


const getCorrectAnswer = (num) => num % 2 === 0 ? 'yes' : 'no';


export default startGame;
