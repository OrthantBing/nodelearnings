const { spawn, exec } = require('child_process');

const child = exec('find . -type f | xargs grep require', {
    // stdio: 'inherit',
    // shell: true,
    cwd: '/Users/antonbright/Documents'
});

// console.log(child);

child.stdout.on('data', function(data) {
    console.log(data);

});