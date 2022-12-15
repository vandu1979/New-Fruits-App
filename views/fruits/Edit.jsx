import React, { Component } from 'react'

export default class Edit extends Component {
  render() {
    //object distructuring freecode camp exercise
    const { fruit } = this.props;
    console.log(fruit);
    return (
      <div>
        <nav>
                    <a href="/fruits/edit"> Changes my mind </a>
                </nav>
        <h1>Edit Fruit</h1>
        {/* the form has default POST method, we override that with PUT */}

        <form action={`/fruits/${this.props.fruit.id}?_method=put`} method="POST">
                       Name: <input type="text" name="name"defaultValue={fruit.name} /><br/>
                       Color: <input type="text" name="color"defaultValue={fruit.color} /><br/>
                       Is Ready To Eat: {
                        fruit.readyToEat ?
                        <input type="checkbox" name="readyToEat" defaultChecked />:
                       <input type="checkbox" name="readyToEat" />} <br/>
                       <input type="submit" value="submit changes" />
      </form>
        </div>
    )
  }
}
module.exports = Edit;