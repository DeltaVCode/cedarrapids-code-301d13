import React from "react";

class Pizza extends React.Component {
  render() {
    // console log some data here
    console.log("our pizza props", this.props.pie);
    return (
      <>
      {/* <img src={this.props.image_url}/> */}
        <article>
          <h2>Pizza Name: {this.props.imageURl}</h2>
          <h3>Toppings: {this.props.toppings}</h3>
          <p>CRUST: {this.props.crust}</p>
        </article>
      </>
    );
  }
}

export default Pizza;
