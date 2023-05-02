import React from 'react';
import axios from 'axios';
import Header from './components/Nav.js'
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';
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




  componentDidMount(){
    this.getCats();
  }


  render() {
    // let cats = this.state.cats.map(cat => (
    //   <p key={cat._id}>{cat.name} is {cat.color}</p>
    // ));
    return (
      <>

       <Header />
      <Container>
        <h1>World of Cats</h1>
      </Container>
        <main>
        {
          this.state.cats.length > 0 &&
          <>
            {/* {cats} */}
            <Cats cats={this.state.cats} deleteCats={this.deleteCats}/>
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
