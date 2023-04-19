import React from 'react';

class Header extends React.Component {



//could have a constructor function here
//could have helper functions here too.


  render() {
    // 3. log to see props 
    // console.log('props from app.js', this.props.pizza);
   
    return (
      <header>
      {/* 4. add props to h1  */}
        <h1 >Pizza of 301 {this.props.pizza}</h1>
      </header>
    );
  }
}

export default Header;
