import React from "react";
import { Container, ListGroup, Button, ListGroupItem } from "react-bootstrap";

class Cats extends React.Component{

  render() {
    console.log('PORPPPSPS',this.props.cats);
    //we will need to map() over our cats
    let cats = this.props.cats.map((cat) => (
      // pass the delete to CAT 
      <Cat  
      cat={cat} 
      key={cat._id} 
      deleteCats={this.props.deleteCats}
      />
    ));
    return (
       <Container>
        <ListGroup>{cats}</ListGroup>
       </Container>
    );
  }
}


class Cat extends Cats {


  render() {
    console.log(this.props.cat._id,'GGGGGG');
    return (
       <ListGroupItem>
        {this.props.cat.name} is {this.props.cat.color}
        {/* add a button for delete next  */}
        <Button  variant="success"  onClick={ () => this.props.deleteCats(this.props.cat._id)}>Delete Cats</Button>
       </ListGroupItem>
    );
  }
}


export default Cats;