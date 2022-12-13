// const React = require('react')
import React, { Component } from "react";
    class Show extends React.Component {
       render () {
        console.log(this.props.fruits);
        const { fruits } = this.props;
        return (
            <div>
                <nav>
                    <a href="/fruits/new"> Create a New fruit</a>
                </nav>
          <h1> Fruits Index Page</h1> 

         <ul> \*loop through the fruits array using map*\

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
                                  </li>
                              );
                          })}


        </ul>
        </div>
           );
        }
     }
     module.exports  = Index; 



      