const dns = require('dns');


dns.lookup('aggulabs.com', (err, address) => {
    console.log(address);
});

dns.resolve('aggulabs.com', 'MX', (err, address) => {
    console.log(address);
});

dns.resolve('aggulabs.com', (err, address) => {
    console.log(address);
})

dns.reverse('192.186.253.72', (err, address) => {
    console.log(address);
})