const server = require('net').createServer();
let counter = 0;
let sockets = {};

server.on('connection', socket => {
    socket.id = counter += 1;
    
    console.log('Client Connected');
    socket.write("Please type your name");
    
    socket.on('data', data => {
        if (!sockets[socket.id]) {
            socket.name = data.toString().trim();
            socket.write(`Welcome ${socket.name}! \n`);
            sockets[socket.id] = socket;
            return;
        }
        
        Object.entries(sockets).forEach(([key, cs]) => {
            if (socket.id == key) return;
            cs.write(`${socket.name}:`);
            cs.write(`${data}\n`);
        })

    });

    socket.on('end', () => {
        delete sockets[socket.id];
        Object.entries(sockets).forEach(([key, cs]) => {
            cs.write(`${socket.name} was disconnected \n`);
        })
        console.log('Client disconnected');
    })
});

server.listen(8000, () => console.log('Server bound'));