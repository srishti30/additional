import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
            <div class="card-group">
            <div class="card">
              <img class="card-img-top" src="images/assemble 2.jpg" alt="Card  cap"/>
              <div class="card-body">
                <h1 class="card-title">Final Product</h1>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="images/dress4.png" alt="Card  cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
            <div class="card">
              <img class="card-img-top" src="images/dress3.jpg" alt="Card  cap"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Product made by attaching this component </p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
            </div>
        )
    }
}
