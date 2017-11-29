console.log("I am in m1.js");
exports.a = {'a': 10, 'b': 20};
exports.b = [];

//exports.c = require('./m2');
exports.b.push(19);
Array.prototype.push.apply(exports.b, [5,6,7,8]);


const printStars = (stars, header) => {
    console.log("*".repeat(stars));
    console.log(header);
    console.log("*".repeat(stars));
};

