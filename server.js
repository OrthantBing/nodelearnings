const EventEmitter = require('events');

class Server extends EventEmitter {
    constructor(client){
        process.nextTick(() => {
            this.emit('response', 'Type a command (help to  list commands)');
        })
        super();
        this.tasks = {};
        this.taskId = 1; 
        client.on('command', (command, args) => {
            console.log(`Command: ${command}`);
            switch(command){
                case 'help':
                case 'add':
                case 'delete':
                case 'ls':
                    this[command](args);
                    break;
                default:
                    this.unknown();
            } 
        })
    }

    tasksString(){
        return Object.keys(this.tasks).map(key => {
            return `${key}: ${this.tasks[key]}`;
        }).join('\n');
    }
    
    help(args) {
        this.emit('response', `Available Commands:
            add task
            ls
            delete :id
        `)
    }
    add(args) {
        this.tasks[this.taskId] = args.join(' ');
        this.emit('response', `Added task ${this.taskId}`);
        this.taskId +=1;
    }
    ls(args) {
        this.emit('response', `Tasks: \n${this.tasksString()}`);
    }
    delete(args) {
        if (Object.getOwnPropertyNames(this.tasks).indexOf(args[0]) === -1 ) {
            this.emit('response', 'Task doesn\'t exist');
        } else {
            delete(this.tasks[args[0]]);
            this.emit('response', `Deleted task ${args[0]}`);
        }
    }
    unknown(args) {
        this.emit('response', 'unknown...')
    }
}

module.exports = (client) => new Server(client);