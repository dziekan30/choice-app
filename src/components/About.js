import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

export default class About extends Component {

  render() {
    return (
      <Container>
        <div className="row about-frame">
          <div class="col col-lg-6 ">
            <img className="picture about-img" src="./kamil-camel.jpg" alt="" />
          </div>
          <div class="col col-lg-6 about-text">
            <h1>Hi I am Kamil Dziekan </h1>
            <h2>Software Engineer</h2>
            <hr />
            <br />

            <h5>
              The purpose of this app was to help people count the tip.
              I know most of the people hate doing that or don't know how.
              Soo why not help them with this app.
              I hope you will enjoy using it, like I was enjoying making it.
            </h5>
            <br />
            <div>
              <h5>Below you will find my others apps</h5>
              <a href="https://github.com/dziekan30">
                <i className="fab fa-github fa-2x icon"></i>
              </a>
              <a href="https://dziekan30.github.io/">
                <i className="fas fa-laptop-code fa-2x icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/kamil-dziekan-74510919a/">
                <i className="fab fa-linkedin fa-2x icon"></i>
              </a>
            </div>
          </div>

        </div>
      </Container>
    )

  }
};