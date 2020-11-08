import React, { Component } from 'react'
import { Card, Container } from 'react-bootstrap'

export default class About extends Component {

  render() {
    return (
      <Container>
        <Card>
          <Card.Img className="picture" variant="top" src="./kamil-camel.jpg" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
          </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>

      </Container>
    )

  }
};