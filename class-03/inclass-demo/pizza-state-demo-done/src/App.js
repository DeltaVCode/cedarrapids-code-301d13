import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import "./App.css";
// 10.
import data from "./data.json";
import Modal from "react-bootstrap/Modal";

class App extends React.Component {
  //1. build constructor
  constructor(props) {
    super(props);
    this.state = {
      // PART 1 demo 
      // pizza: 'testForPizza'
      pizza: "",
      // Part 2 demo 
      //13. add show modal prop
      // add variable for modal to be able to toggle through true/ false
      // showModal: true, // to test
      showModal: false,
      // PART 4 add the selected pizza 
      selectedPizza: ''

    };
  }

  // 5 add helper function to update state with pizza
  addPizza = () => {
    this.setState({
      pizza: this.state.pizza + "🍕",
    });
  };

  //15. give to MODAL so user can close the modal. 
handleOnHide = () => {
  this.setState({
    //this will make it go away.
    showModal: false
  });

};

// 16. create function to reveal the modal 
handleOnShow = (pizzaName) => {
  this.setState({
    //this will make it appear
    showModal: true,
    selectedPizza: pizzaName
  });

};

  render() {
    return (
      <>
      {/* 17 test show modal to confirm before passing  */}
      {/* <p onClick={this.handleOnShow}>SHOW ME NOW TEST</p> */}
      <p onClick={() => {this.handleOnShow('test')}}>SHOW ME NOW TEST</p>
        {/* 2. add props to header component          6. ADD function to pass */}
        <Header pizza={this.state.pizza} />
        {/* 11. add data to props  */}
        <Main 
        addPizza={this.addPizza}
        data={data} 
        // 19 pass function as prop to MAIN
        handleOnShow={this.handleOnShow}  
        />

        <footer>DeltaV, 2022</footer>




       {/* 14. add the modal and test it in state later in lab make this the selected beast */}
        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
        {/* 18. add from web site  */}
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectedPizza}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
