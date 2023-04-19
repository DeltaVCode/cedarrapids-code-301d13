import React from "react";
import "./Pizza.css";
import { Card, Button, Col } from "react-bootstrap";

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //can have several properties.
      //Count likes
      likes: 0,
      //assign default values to make state more readable.
      //global variable would update only one value and not render state is for the comp
      pizzaNeed: false,
    };
  }

  handleLikes = () => {
    //method allows us to set state
    this.setState({
      likes: this.state.likes + 1,
      //could add things to state here
      // bananas: 'Thats Bananas',
    });
  };

  pizzaNeeded = () => {
    this.setState({
      pizzaNeed: true,
    });
  };

  pizzaGot = () => {
    this.setState({
      pizzaNeed: false,
    });
  };

  helpHandleOnShow = () => {
    // this.props.handleOnShow('test!!!');
    this.props.handleOnShow(this.props.pie);
  };

  render() {
    // 8. log props of function
    // console.log("addPizza Pizza.js", this.props.addPizza);
    return (
      // 1. we need to render all pizza names and images
      <>
       
     <article>

      {/* 21 add on click to show modal  onClick={this.props.handleOnShow} */}
        {/* update to keep from being immediately invoked.  */}
       <h4 onClick={this.helpHandleOnShow}>🍕 {this.props.pie}</h4>
        <p>{this.state.likes} Likes!</p>
        <p onClick={this.handleLikes}>Click to Like this pizza?</p> 
        {/* so lets create an event handler 
            dont do normally this is made for react, not html.
        */}
        
        <img 
        src={this.props.imageURL}
        alt={this.props.pie}
        title={this.props.pie} 
        onClick={this.props.addPizza}
        />
        {/* <p>{this.state.bananas}</p> */}
        {/* <button>html button</button> */}
        {/* conditional rendering for our button */}
        {/* message to appear if pizza is awesome */}
        {/* 
        Ternary Operator
        What? True : False 
        BooleanValue ? console.log('true') : console.log('false');
        */}
        
        <div>{this.state.pizzaNeed ? 'I need this Pizza!' : ''}</div>
        <Button variant="warning" onClick={this.pizzaNeeded} className="buttonMargin">I need pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>I got this  pizza!</Button> 

       
      </article>
     
        {/* last update to the card bootstrap */}
        <Col className="mt-4 ">
          <Card className="h-100 p-3">
            <Card.Title onClick={this.helpHandleOnShow}>
              {this.props.pie}
            </Card.Title>
            <Card.Img
              className="mb-4 "
              src={this.props.imageURL}
              alt={this.props.pie}
              title={this.props.pie}
              onClick={this.props.addPizza}
            />
            <p>{this.state.likes} Likes!</p>
            <p onClick={this.handleLikes}>Click to Like this Pizza?</p>
            <div>{this.state.pizzaNeed ? 'I need this Pizza!' : ''}</div>
            <Button onClick={this.pizzaNeeded} className="buttonMargin">I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>
              I got some Pizza!
            </Button>
          </Card>
        </Col>
        </article>
      </>
    );
  }
}

export default Pizza;
