import React from 'react';
import axios from 'axios';
import Header from './components/Nav.js'
import { Outlet } from 'react-router-dom';
import CreateCat from './components/CreatCat.js';
import Cats from './components/Cats.js'
let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cats: [],
    }
  }

  getCats = async () => {
    try {
      let results = await axios.get(`${SERVER}/cats`);
      this.setState({
        cats: results.data
      })
    } catch(error){
      console.log('we have an error: ', error.response.data)
    }
  }

  //handle submit from our form to be able to post target.values
  handleCatSubmit = async (event) => {
    event.preventDefault();
    let newCat = {
      name: event.target.name.value,
      color:event.target.color.value,
      spayNeuter:event.target.spayNeuter.checked,
      location:event.target.location.value,
    }
    console.log(newCat);
    this.postCat(newCat)
  };

  // add the post to create a new cat  rememeber you will pass the object via the request.body....
postCat = async (newCatObject) => {
try {
  let url = `${SERVER}/cats`;
  let createdCat = await axios.post(url, newCatObject);
  console.log("🚀 createdCat:", createdCat);

  this.setState({
    cats:[...this.state.cats, createdCat.data],
  });
  
} catch (error) {
  console.log('we have an error: ', error.response.data);
}
}

  //delete cats remember you will pass the id value in the params

deleteCats = async (id) => {
  try {
    //go to server
    let url = `${SERVER}/cats/${id}`;
    await axios.delete(url);
    //delete cat out of state now that it is out of the DB
    let updateCats = this.state.cats.filter(cat => cat._id !== id);
    this.setState({
      cats: updateCats
    })
  } catch (error) {
    console.log("we have an error: ", error.response.data);

  }
};


//add the update arrow function
//make api req to server 
//update state with updated cat 
updateCats = async (catToUpdate) => {
  console.log('function in UPdate cat comp ',catToUpdate._id);
try {
  let updateURL = `${SERVER}/cats/${catToUpdate._id}`;
  //now let make the axios call
  let newUpdatedCat = await axios.put(updateURL, catToUpdate);
  let updatedCatArray = this.state.cats.map(existingCat =>{
    return existingCat._id === catToUpdate._id
    ? newUpdatedCat.data
    : existingCat;
  });
    this.setState({
      cats:updatedCatArray
  });
 } catch (error) { }
}

  componentDidMount(){
    this.getCats();
  }


  render() {
    
    return (
      <>

       <Header />
        <main>
        {
          this.state.cats.length > 0 &&
          <>
            {/* {cats} */}
            <Cats 
            cats={this.state.cats}
            deleteCats={this.deleteCats}
            updateCats={this.updateCats} 
            />
          </>
        }
        </main>

        <CreateCat handleCatSubmit={this.handleCatSubmit} />
        <Outlet />
      </>
    );
  }
}

export default App;
