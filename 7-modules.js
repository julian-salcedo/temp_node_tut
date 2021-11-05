//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require('./3-names');
const sayHi = require('./4-utils');
const data = require('./5-alt-flavors');
require('./6-mind-grenade');

console.log(data);

sayHi('susie');
sayHi(names.john);
sayHi(names.peter);
