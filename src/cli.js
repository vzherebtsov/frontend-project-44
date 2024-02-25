import readlineSync from 'readline-sync';

export const userName = () => {
    console.log('May I have your name?');
    const name = readlineSync.question('Your answer: ');
    console.log(`Hello, ${name}!`);
}