const fs = require('fs');

const readFileAsArray = (fileName, callback = () => {}) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
                return callback(err);
            }
            const lines = data.toString().trim().split('\n');
            resolve(lines);
            callback(null, lines);
        });
    })
    
};

// readFileAsArray(__dirname + '/m1.js', (err, lines) => {
//     if (err) throw err;
//     console.log(lines)
// });

// readFileAsArray('./m1.js')
//     .then((lines) => {
//         console.log(lines);
//     })
//     .catch((err) => {
//         console.error(err);
//     });

async function lineArray() {
    try {
        const lines = await readFileAsArray('./m1.js');
        console.log(lines);
    } catch(err) {
        console.error(err);
    }
}

lineArray();