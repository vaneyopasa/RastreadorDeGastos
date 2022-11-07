const http = require('http');
const app = require('./app');


//creación del puerto
const PORT = process.env.PORT || 5000;

//creación del servidor
const server = http.createServer(app);

server.listen(PORT, console.log(`server is running on port ${PORT}`));