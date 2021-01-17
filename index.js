const readLineSync = require('readline-sync');
const name = readLineSync.question('What is your name?');
console.log(`Hello ${name}`);