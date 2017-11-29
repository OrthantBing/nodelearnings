const process = require('process');

process.on('exit', (code) => {
    console.log("exiting");
});

process.stdin.resume();

console.dog();
