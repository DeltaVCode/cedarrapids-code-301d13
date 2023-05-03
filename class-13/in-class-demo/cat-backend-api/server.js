/* eslint-disable no-undef */
'use strict';
console.log('server log');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// USE
// implement express .get(), .use(), .post(), delete()
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(
  process.env.DB_URL
).then(() => {
  console.log('Mongo DB is connected!');
}).catch(e => console.log('errrr',e));

const Cat = require('./models/cat.js');
const PORT = process.env.PORT || 5005;

// app.whateverMethod('/endPoint', callback())
app.get('/', (req,res) =>res.status(200).send('Hello from our Server!'));
app.get('/cats', getCats); //city query/ searchQuery=seattle   req.query.searchQuery
app.post('/cats', postCats); // {}body
app.delete('/cats/:id', deleteCats);
app.put('/cats/:id', updateCats);


async function updateCats(request, response, next){
  console.log('id', request.params.id);
  //update data live in the body of the request object
  let id = request.params.id;
  let catData = request.body;
  console.log(id, catData);
  try {
    //findByIdAndUpdate() method take in 3 arguments
    //1. id of the thing we want to update
    //2. updated data object
    //3. options object, makes it a put and not a patch
    let updatedCat = await Cat.findByIdAndUpdate(id, catData, {
      new: true,
      overwrite: true
    });
    console.log('UUUUUUUUUU',updatedCat);
    response.status(200).send('ok for now');
  } catch (error) {
    next(error);
  }



  
}















async function getCats(req,res){
  // console.log('called.');
  try {
    let results = await Cat.find();
    // console.log('results',results);
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }
}
// LAB 12 - FEATURED TASKS
// Add a new route and handler function to your server, to respond to `POST` requests to `/books`. This is your book-creation end point. Verify it's working by sending a raw POST request via your REST Client.
// Be sure to include server-side error checking, in case something goes wrong. Respond with appropriate status codes, if anything goes wrong. Verify with your REST Client.
// Add a server end point to handle `DELETE` requests to `/books/:id`.

// {
//   "name": "BOB",
//   "color":"Blue",
//   "spayNeuter": true,
//   "location": "the streets"
// }
async function postCats(request, response, next){
  console.log('request: ',request.body);
  try {
    let createCat = await Cat.create(request.body);
    response.status(200).send(createCat);
  } catch (error) {
    next(error);
  }
}


async function deleteCats(req, res, next){
  //        object.key.value
  console.log(req.params.id);
  try {
    //Model.findByIdAndDelete()
    let id = req.params.id;
    await Cat.findByIdAndDelete(id);
    res.status(200).send('Cat was deleted.');
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
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
