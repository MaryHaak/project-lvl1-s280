import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';
import { makeCalc } from '../src/games/calc.js';

const isEven = number => number % 2 === 0;

const getCorrectAnswerEven = question => (isEven(question) ? 'yes' : 'no');

export const startEven = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const levelsNum = 3;

  for (let i = 0; i < levelsNum; i += 1) {
    const question = Math.floor(Math.random() * 10);

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    const correctAnswer = getCorrectAnswerEven(question);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!\n`);
};

const getCorrectAnswerCalc = question => {
  const operator = car(question);
  const operand1 = car(cdr(question));
  const operand2 = cdr(cdr(question));

  switch (operator) {
    case '+':
      return operand1 + operand2;
      break;
    case '-':
      return operand1 - operand2;
      break;
    case '*':
      return operand1 * operand2;
      break;
  }
}

// export const startCalc = () => {
//   // makeCalc('getRule');
//   const game = makeCalc;
//   getRule(game);
//
//   console.log('Welcome to the Brain Games!\nWhat is the result of the expression?\n');
//   const name = readlineSync.question('May I have your name? ');
//   console.log(`Hello, ${name}!\n`);
//
//   const levelsNum = 3;
//   const operatorsArr = '+-*';
//
//   for (let i = 0; i < levelsNum; i += 1) {
//     const operand1 = Math.floor(Math.random() * 10);
//     const operand2 = Math.floor(Math.random() * 10);
//     const operator = operatorsArr[Math.floor(Math.random() * 3)];
//     const question = cons(operator,cons(operand1,operand2));
//
//     console.log(`Question: ${operand1} ${operator} ${operand2}`);
//     const answer = readlineSync.question('Your answer: ');
//
//     const correctAnswer = String(getCorrectAnswerCalc(question));
//     console.log(`res = ${correctAnswer}`);
//     if (answer === correctAnswer) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
//       return;
//     }
//   }
//
//   console.log(`Congratulations, ${name}!\n`);
// };
//
// const getRule = (game) => {
//   game('getRule');
// }

const makeGame = (type) => {
  switch (type) {
    case 'calc':
      return makeCalc;
      break;
  }
}

const getRule = (game) => {
  return game('getRule');
}

const getQuestion = (game) => {
  return game('getQuestion');
}

const questionToString = (game, question) => {
  return game('questionToString')(question);
}

const getCorrectAnswer = (game,question) => {
  return game('getCorrectAnswer')(question);
}

export const startGame = (type) => {
  const game = makeGame(type);
  const rule = getRule(game);

  console.log(`Welcome to the Brain Games!\n${rule}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const levelsNum = 3;
  // const operatorsArr = '+-*';
  //
  // for (let i = 0; i < levelsNum; i += 1) {
  //   const operand1 = Math.floor(Math.random() * 10);
  //   const operand2 = Math.floor(Math.random() * 10);
  //   const operator = operatorsArr[Math.floor(Math.random() * 3)];
  const question = getQuestion(game);
  console.log(`Question: ${questionToString(game, question)}`);
  //
  //   console.log(`Question: ${operand1} ${operator} ${operand2}`);
  //   const answer = readlineSync.question('Your answer: ');
  //
  //   const correctAnswer = String(getCorrectAnswerCalc(question));
  //   console.log(`res = ${correctAnswer}`);
  //   if (answer === correctAnswer) {
  //     console.log('Correct!');
  //   } else {
  //     console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!\n`);
  //     return;
  //   }
  // }
  //
  // console.log(`Congratulations, ${name}!\n`);
};
