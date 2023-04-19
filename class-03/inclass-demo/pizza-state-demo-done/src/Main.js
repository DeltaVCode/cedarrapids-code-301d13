import React from "react";
import Pizza from "./Pizza.js";
// 9. move to App.js
// import data from './data.json';
// import "./Main.css";
import { Container, Row } from "react-bootstrap";

class Main extends React.Component {
  // how do we get this data out.
  render() {
    // 7. log props of function
    // console.log("addPizza Main.js", this.props.addPizza);

    // console.log('data',data);
    // do some js stuff before we return so let build components here
    let pizzas = [];
    // 12. update the this.props for data from parent
    this.props.data.map((newPizza, index) => {
     return pizzas.push(
        <Pizza
          pie={newPizza.name}
          imageURL={newPizza.imageURL}
          key={index}
          addPizza={this.props.addPizza}
          // 20 pass to pizza as prop
          handleOnShow={this.props.handleOnShow}
        />
      );
    });

    return (
      <main>
        <Container>
          <Row lg={4} md={3} sm={2} xs={1}>
          {/* <Row> */}
            {pizzas}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
