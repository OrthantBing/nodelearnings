console.log("I am in m2.js");
exports.k = [];
let d = require('./m1');
console.log("m1 not loaded yet", d);
exports.k.push(10);
exports.k.push('s');


