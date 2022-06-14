const app = require('../server');
const debug = require('debug');
const http = require('http');
const PORT = 6000;
const port = normalizePort(process.env.PORT || '3000');


// create port

app.listen(PORT, () => {
    console.log(`✅ PORT: ${PORT} 🌟`);
})

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
