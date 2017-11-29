const http = require('http');
const { fork } = require('child_process');

const server = http.createServer();

server.on('request', (req, res) => {
    if(req.url === '/compute') {
        const compute = fork('child.js');
        compute.on('message', (data) => {
            res.end(`Sum is ${data}`);
            compute.send("disconnect");
        });
        compute.send('start');
    } else {
        res.end('Ok');
    }
});

server.listen(3000);
