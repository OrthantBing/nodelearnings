const fs = require('fs');
const path = require('path');

const dirname = path.join(__dirname, '..');
//console.log(dirname);

const files = fs.readdirSync(dirname);
//console.log(files);

files.forEach(filename => {
    const filenamewithpath = path.join(dirname, filename);
    fs.stat(filenamewithpath, (err, stat) => {
        console.log(stat);
    });
});