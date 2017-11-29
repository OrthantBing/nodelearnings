const EventEmitter = require('events');
const fs = require('fs');

class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        console.time('execute');
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', err);
            }
            this.emit('data', data);
            console.timeEnd('execute');
        });
    }
}

const withTime = new WithTime();

withTime.on('data', (data) => {
    console.log(data.length);
});

withTime.on('error', (err) => {
    console.error(err);
})

withTime.execute(fs.readFile, '');
withTime.execute(fs.readFile, './index.js');