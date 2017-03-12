const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = 3000;

server.listen(port, () => console.log('servidor rpodando na porta ' + port));
