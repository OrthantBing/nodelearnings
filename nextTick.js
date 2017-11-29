const fs = require('fs');


// This can become synchronous.
function fileSize(fileName, callback) {
    if (typeof fileName !== 'string') {
        //return callback(new TypeError("argument should be a string"));
        return process.nextTick(
            callback,
            new TypeError("argument should be a string")
        );
    }
    fs.stat(fileName, (err, stats) => {
        if (err) {
            return callback(err);
        }

        callback(null, stats.size);
    });
}

fileSize(1, (err, size) => {
    if (err) throw err;

    console.log(`Size in KB: ${size/1024}`);
});

console.log("Hello");