import React, { Component } from 'react'

export default class Index extends Component {
  render() { 
    console.log(this.props.fruits);
        const { fruits } = this.props;
        
    return (
            <div>
                <nav>
                    <a href="/fruits/new"> Create a New fruit</a>
                </nav>
          <h1> Fruits Index Page</h1> 

          {/* \*loop through the fruits array using map*\ */}
         <ul>

                 {fruits.map((fruit) => {
                              return (
                                  <li>
                                      The
                                      <a href={`/fruits/${fruit.id}`}>
                                          {fruit.name}
                                      </a>
                                      is {fruit.color} <br></br>
                                      {fruit.readyToEat
                                          ? `It is ready to eat`
                                          : `It is not ready to eat`}
                                      <br />
                                      <form action={`/fruits/${fruit.id}?_method=Delete`} method="POST">
                                        <input type='submit' value='DELETE'/>
                                      </form>
                                      <a href={`/fruits${fruit.id}/edit`}>Edit this Fruit</a>
                                  </li>
                              );
                          })}


        </ul>
        </div>
           );
        }
     }
     module.exports  = Index; 






      