const dgram = require('dgram');

const server = dgram.createSocket('udp4');

server.on('listening', () => console.log("UDP Server listening"));

server.on('message', (msg, rinfo) => {
    console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);

    console.log(rinfo);
});

const PORT = 3333;
const HOST = '127.0.0.1';
server.bind(PORT, HOST);

setInterval(() => {
    const client = dgram.createSocket('udp4');

    client.send('Kiss ma ar** putos', PORT, HOST, (err) => {
        if (err) throw err;

        console.log('UDP message sent');
        client.close();
    });
}, 5000);
 