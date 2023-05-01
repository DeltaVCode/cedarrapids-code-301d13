'use strict';
// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');

// USE
// implement express
const app = express();

// middleware its like our bouncer....
app.use(cors());

//npm install mongoose this will bring in mongoose.
const mongoose = require('mongoose');





//Make sure we can connect to our DB
//Add the actual connect call to mongo using mongoose!
// mongoose.connect(process.env.DB_URL);
mongoose.connect(
  process.env.DB_URL
)
.then(()=>console.log('Mongo DB is connected!'))
.catch(e=>console.log(e));

//we shoulds create models folder and a file for our model and schema for cats
const Cat = require('./models/cat.js');









// define PORT validate env is working
const PORT = process.env.PORT || 5005;

// ROUTES
app.get('/', (request, response) => {
  response.status(200).send('Welcome!');
});


app.get('/cats', getCats);

async function getCats(request, response, next){
  try {
    //look at the documentation
    let results = await Cat.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}













//star do?
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});

// LISTEN
app.listen(PORT, () => console.log(`listening on Port ${PORT}`));
