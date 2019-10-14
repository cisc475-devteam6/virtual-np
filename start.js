require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE, {useMongoClient: true, useNewUrlParser:true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
mongoose.connection
  .on('connected', () => {
    console.log(`Mongoose connection open on ${process.env.DATABASE}`);
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

require('./models/Registration');
const app = require('./app');

const server = app.listen(3000, () => {
  console.log(`Express is running on port ${server.address().port}`);
});