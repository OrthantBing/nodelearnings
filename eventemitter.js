const EventEmitter = require('events');

class WithLog extends EventEmitter{
    execute(taskFunc) {
        if (typeof(taskFunc) !== 'function'){
            return new TypeError("Argument passed should be a function");
        }
        console.log("Before execution");
        this.emit('begin');
        taskFunc();
        this.emit('end');
        console.log("After executing");
    }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log("About to execute"));
withLog.on('end', () => console.log("Done with execution"));

withLog.execute(() => console.log("*** Executing task ***"));

