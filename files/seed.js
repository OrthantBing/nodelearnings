const fs = require('fs');
const path = require('path');
const dirname = path.join(__dirname, 'seed');

const day1 = Date.parse('Tue, 01 Aug 2017 00:00:00');
const day2 = Date.parse('Mon, 31 Jul 2017 00:00:00');

const oneday = day2 - day1;

fs.mkdirSync(dirname);

for (let i = 0; i < 10; i+=1) {
    let filePath = path.join(dirname, `file${i}`);
    fs.writeFile(filePath, i, (err) => {
        if (err) throw err;
        console.log('The file has been saved');

        const time = (Date.now() - oneday)/1000;
        fs.utimes(filePath, time, time, (err) => {
            if (err) throw err;
        });
    });
}

