const express = require('express');
const cors = require('cors');


const server = express();
server.use(cors());
server.use(express.json());

//server.listen(3000, () => console.log(`\nExpress departing now from port 3000!\n`))

module.exports = server

