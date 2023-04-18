import React from 'react';
import Pizza from './Pizza.js';
import data from './data.json';
import './main.css';


class Main extends React.Component {


  render(){
    console.log(data);


    let pizzas = [];
    data.forEach((newPizza, index) => {
      pizzas.push(<Pizza pie={newPizza.name}  imageURL={newPizza.imageURL} key={index} />)
    });




    return(
      <main>
      
        {/* <Pizza 
         pie="Detroit" 
         toppings="Cheese" 
         crust="Detroit Style"
        image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
        <Pizza pie="New York This" toppings="Cheese" crust="Thin Style"/> */}
         {pizzas}
      </main>
    );
  }


}

export default Main;