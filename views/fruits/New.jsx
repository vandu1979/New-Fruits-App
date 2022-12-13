import React, { Component } from 'react'

export default class New extends Component {
  render() {
    return (
      <div>
        <h1>New Fruit Page</h1>
      <form action="/fruits" method="post">
                       Name: <input type="text" name="name" /><br/>
                       Color: <input type="text" name="color" /><br/>
                       Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br/>
                       <input type="submit" name="" value="Create Fruit"/>
      </form>
      <a href="/fruits/new">Back to main Page</a>
      </div>
    )
  }
}

module.exports = New;