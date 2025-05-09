const http = require('http');
const net = require('net');

// Send a signal to the parent server
const options = {
    hostname: 'your_parent_server-ip-or-domin',
    port: 3000,
    path: '/signal',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
        console.log(`Response: ${chunk}`);
    });
});

req.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});

req.write(JSON.stringify({ message: 'Script executed' }));
req.end();

// Connect to netcat on port 8778
const client = new net.Socket();
client.connect(8778, '127.0.0.1', () => {
    console.log('Connected to netcat on port 8778');
    client.write('Hello, netcat!');
});

client.on('data', (data) => {
    console.log(`Received: ${data}`);
    client.destroy(); // Kill client after server's response
});

client.on('close', () => {
    console.log('Connection closed');
});

client.on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
