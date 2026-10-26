const { log } = require('node:console');

require('dotenv').config
const port = process.env.PORT  || 3000;
console.log('Rodando na porta', port)