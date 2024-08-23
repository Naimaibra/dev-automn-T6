

const { add, subtract } = require('./math');
console.log(add(5, 3)); // 8



const capitalize = require('./utility');
console.log(capitalize('hello world')); 



const library = require('./library');
library.func1(); // Calling Function 1
library.func2();



const greet = require('./utility');
console.log(greet('Alice')); // 'Hello, Alice!'