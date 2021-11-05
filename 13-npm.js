// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>
// npm i <packageName> -D (dev dependency)
// npm i <packageName> --save-dev (alternative)

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac/linux)

// package.json - manifest file (stores important info about project/package)
// manual appraoch (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everythin default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
console.log('hello world');
