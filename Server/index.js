import express from 'express';
import bodyParser from 'body-parser';
import config from './config.js';
import morgan from 'morgan';

// routes 
import routes from './routes/index.js';

const port = config.service.port || 3000;

// 1. Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));

// 2. Require our routes into the application.
app.use(routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

// 3. Server listen to port
app.listen(port, async function () {
  console.log("Application running on port: ", port);
  // console.log('Seeding Database Please Wait.......');
  // const isSuccessful = await seedDatabaseData(); 

  // if (isSuccessful) {
  //   console.log("Application running on port: ", app.get("port"));
  // } else {
  //   console.error('Unable to seed DB Data, Shutting Down...');
  // }
});

export default app;