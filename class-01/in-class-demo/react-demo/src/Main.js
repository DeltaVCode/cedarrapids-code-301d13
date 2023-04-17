import React from 'react';
import Pizza from './Pizza.js';

class Main extends React.Component {



  render(){
    return(
      <main>
        {/* I want pizzas here  */}
        {/* 1. create pizza component and then add some attributes or properties  */}

        {/* {
          this.pie = "Detroit"
          this.props = 
        } */}
        <Pizza 
         pie="Detroit" 
         toppings="Cheese" 
         crust="Detroit Style"
        image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
        <Pizza pie="New York This" toppings="Cheese" crust="Thin Style"/>
        {/* <Pizza pie="Chicago Deep Dish" toppings="Cheese" crust="Pizza Style"/>
        <Pizza pie="Oven Grinder" toppings="Cheese" crust="Pizza Style"/>
        <Pizza pie="Brick Oven" toppings="Cheese" crust="Pizza Style"/>
        <Pizza pie="Calzone" toppings="Cheese" crust="Pizza Style"/> */}
      </main>
    );
  }


}


export default Main;