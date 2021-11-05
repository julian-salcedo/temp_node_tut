//{} allow for function calling without having to write the module in front
const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:\n${first},\n${second}`
);
console.log('done with this task');
console.log('starting next task');

