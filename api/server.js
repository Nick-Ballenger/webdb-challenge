const express = require('express');
const helmet = require('helmet');

const projectRouter = require('../Router/projectRouter');
const actionRouter = require('../Router/actionRouter')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/project', projectRouter);
server.use('/api/action', actionRouter);

// sanity check route
server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;
