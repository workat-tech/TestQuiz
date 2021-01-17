const readLineSync = require('readline-sync');
const name = readLineSync.question('What is your name?\n');
console.log(`Hello ${name}`);