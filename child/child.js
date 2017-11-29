const { fork } = require('child_process');

const longcomputation = () => {
    let sum = 0;
    for (let i = 0; i < 1e9; i += 1 ){
        sum += 1;
    }
    return sum;
}

process.on('message', (msg) => {
    console.log("Message from parent: ", msg);

    if (msg === 'start') {
        let returnvalue = longcomputation();
        process.send(returnvalue);
    } else if (msg === 'disconnect'){
        process.disconnect();
    }
});



