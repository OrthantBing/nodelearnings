const { spawn } = require('child_process');
const { StringDecoder } = require('string_decoder');

let buffer = new StringDecoder('utf-8');

//console.log(spawn.toString());

const child = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

child.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
    console.log("Number of files: " + buffer.write(data));
    console.log(`Number of files ${data}`);
})

child.on('exit', function(code, signal){
    //console.log(`child process exited with code ${code}, signal ${signal}`);
});

child.stdout.on('data', (data) => {
    //console.log(`STDOUT data: ${data}`);
});

child.stderr.on('data', (data) => {
    //console.log(`STDERR data: ${data}`);
});

