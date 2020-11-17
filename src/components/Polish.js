import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { Container, Form } from 'react-bootstrap';
import ReactModal from 'react-modal';
import PolishCounter from './PolishCounter'


export default class Polish extends Component {
  constructor() {
    super();
    this.state = {
      total: "",
      service: "",
      partySize: 1,
      totalTip: "",
      tipPerPerson: "",
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
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
      <div>
        <Container>
          <div className="container">
            <h1>Oblicz Napiwek</h1>
            <div className="my-tip">
              <Form onSubmit={this.genTip}>
                <Form.Group className="col-12 label">
                  <i className="fas fa-dollar-sign "></i>
                  <Form.Label>Suma Rachunku:</Form.Label>
                  <Form.Control type="number" value={this.state.total} onChange={this.handleTotal} placeholder="Wpisz Sume Rachunku" />
                </Form.Group>

                <Form.Group className="col-12 label">
                  <Form.Label> Procent napiwku: %</Form.Label>
                  <Form.Control type="number" value={this.state.service} onChange={this.handleService} placeholder="Podaj procent napiwku" />
                </Form.Group>

                <Form.Group className="col-12 label">
                  <Form.Label>Ilosc osob:</Form.Label>
                  <Form.Control type="number" value={this.state.partySize} onChange={this.handleParty} placeholder="Prosze podac ilosc osob" />
                </Form.Group>
                <button className="btn btn-secondary col-12 label" onClick={this.handleOpenModal} type="submit" >Oblicz</button>
              </Form>
              <div >
                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  className="Modal"
                >
                  <button className="btn btn-secondary modal-close" type="button" onClick={this.handleCloseModal}>Zamknij</button>
                  <div>
                    <h3 className="tip">Napiwek: ${this.state.totalTip}</h3>
                    <h3 className="tip">Na Osobe: ${this.state.tipPerPerson}</h3>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>
        </Container>
        <PolishCounter />
      </div>
    );

  }
}