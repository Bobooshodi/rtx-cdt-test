const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.js');
const morgan = require('morgan');

const { seedDatabaseFromAPI } = require('./utils/seedDatabaseFromAPI');

// routes
const routes = require('./routes/index.js');

const port = config.service.port || 3000;

// 1. Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

// 2. Require our routes into the application.
app.use(routes);

app.get('*', (req, res) =>
  res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
  })
);

// 3. Server listen to port
const server = app.listen(port);

console.log('Seeding Database Please Wait.......');
const isSuccessful = seedDatabaseFromAPI().then((isSuccessful) => {
  if (isSuccessful) {
    console.log('Application running on port: ', port);
  } else {
    throw new Error('Unable to seed DB Data, Shutting Down...');
  }
}).catch((e) => {
  console.error(e);
  server.close();
});

module.exports = server;
