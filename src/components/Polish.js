import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { Container } from 'react-bootstrap';

export default class Home extends Component {
  state = {
    total: "",
    service: "",
    partySize: "",
    totalTip: "",
    tipPerPerson: ""
  }
  handleTotal = (event) => {
    this.setState({
      total: event.target.value
    })
  }

  handleService = (event) => {
    this.setState({
      service: event.target.value
    })
  }

  handleParty = (event) => {
    this.setState({
      partySize: event.target.value
    })
  }

  genTip = (event) => {
    event.preventDefault();
    let tip = parseFloat(this.state.total * (this.state.service / 100)).toFixed(2)
    let totalTipPerPerson = parseFloat(tip / this.state.partySize).toFixed(2)
    this.setState({
      totalTip: tip,
      tipPerPerson: totalTipPerPerson
    })
  }

  render() {
    return (
      <Container>
        <div className="container">
          <h1>Oblicz Napiwek</h1>
          <div className="my-tip">
            <form onSubmit={this.genTip}>
              <label className="col-12 label">
                Suma Rachunku:
                <i class="fas fa-dollar-sign"></i>
                <MDBInput type="text" value={this.state.total} onChange={this.handleTotal} />
              </label>
              <label className="col-12 label">
                Procent napiwku: %
                <MDBInput type="text" value={this.state.service} onChange={this.handleService} />
              </label>
              <label className="col-12 label">
                Ilosc ludzi:
                <MDBInput type="text" value={this.state.partySize} onChange={this.handleParty} />
              </label>
              <input className="col-12 label" type="submit" />
            </form>
          </div>
          <p>Napiwek: ${this.state.totalTip}</p>
          <p>Na Osobe: ${this.state.tipPerPerson}</p>
        </div>
      </Container>
    );

  }
}