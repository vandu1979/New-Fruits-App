// const React = require('react')
import React, { component } from 'react';

class Show extends React.Component {
   render () {
    // console.log(this.props.fruit);
    const fruit = this.props.fruit;
    return (
      <div>
        <h1>Show Page</h1>
        <p> The {fruit.name} is {fruit.color}</p>
        <p>{fruit.readyToEat ?  'Its is ready to eat' : 'It is not ready to eat... Cant touch this' }</p>
      </div>
     );
    }
 }









module.exports = Show;