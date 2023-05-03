import React from "react";
import { Container, ListGroup, Button, ListGroupItem } from "react-bootstrap";
import UpdateCatForm from "./UpdateCatForm";

class Cats extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      showUpdateForm: false
    }
  }
  render() {
    // console.log('PORPPPSPS',this.props.cats);
    //we will need to map() over our cats
    let cats = this.props.cats.map((cat) => (
      // pass the delete to CAT 
      <Cat  
      cat={cat} 
      key={cat._id} 
      deleteCats={this.props.deleteCats}
      updateCats={this.props.updateCats}
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
    return (
       <ListGroupItem>
        {this.props.cat.name} is {this.props.cat.color}
        <Button  variant="primary"  onClick={ () => this.props.deleteCats(this.props.cat._id)}>Delete Cats</Button>

        {/* add an update button  */}
        <Button  variant="info"  onClick={ () => this.setState({showUpdateForm: true})}>Update Cats</Button>
        {/* render or show the form  */}
         {/* need to add state in Cats to toggle the form show  */}
        {
          this.state.showUpdateForm && 
          <UpdateCatForm
           cat={this.props.cat}
           updateCats={this.props.updateCats}
            />
        }
       </ListGroupItem>
    );
  }
}


export default Cats;