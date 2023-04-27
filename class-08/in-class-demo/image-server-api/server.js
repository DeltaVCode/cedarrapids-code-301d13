'use strict';
console.log('server running');
//requires
const axios = require('axios');
const express = require('express');
const cors = require('cors');
require('dotenv').config();


//use
const app = express();
app.use(cors());
//PORT
const PORT = process.env.PORT || 5005;


//routes
app.get('/', (req,res) => {
  res.status(200).send('Hello from our server!');
});


app.get('/photos', async (req, res, next) => {
  //look at api to get data
  console.log(req.query.searchQuery);
  try {
    let searchQueryFromTheFrontEnd = req.query.searchQuery;
  //add the call to the api
    let url = `https://api.unsplash.com/search/photos/?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQueryFromTheFrontEnd}&format=json`;
    let results = await axios.get(url);
    console.log('TTTTTTTTTTTTTT',results.data);
    //construct an image object
    let pictureInstance =  results.data.results.map(picture => new Photos(picture));
    console.log('OOOOOOOO?',pictureInstance);
    //send those objects to front end to dispay
    res.status(200).send(pictureInstance);

  } catch (error) {
    next(error);
  }
});







//CLASSES
class Photos{
  constructor(picture){
    // console.log('image source: ', picture.urls.regular);
    this.src = picture.urls.regular;
    this.alt = picture.alt_description;
    this.artist = picture.user.name;
  }
}






app.get('*', (req, res) => {
  res.status(404).send('These are not the droids your looking 404.');
});

//error handling
//ERRORS
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  console.log(error.message);
  res.status(500).send(error.message);
});

//listen to port for server
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
