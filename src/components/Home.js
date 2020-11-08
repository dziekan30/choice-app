import React, { Component } from 'react'
import { MDBInput } from "mdbreact";
import { Container } from 'react-bootstrap';
import ReactModal from 'react-modal';
import Counter from './Counter'


export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      total: "",
      service: "",
      partySize: "",
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
            <h1>Count My Tip</h1>
            <div className="my-tip">
              <form onSubmit={this.genTip}>
                <label className="col-12 label">
                  Bill Total:
                  <i className="fas fa-dollar-sign "></i>
                  <MDBInput type="text" value={this.state.total} onChange={this.handleTotal} />
                </label>
                <label className="col-12 label">
                  Service: %
                  <MDBInput type="text" value={this.state.service} onChange={this.handleService} />
                </label>
                <label className="col-12 label">
                  Party Size:
                  <MDBInput type="text" value={this.state.partySize} onChange={this.handleParty} />
                </label>
                <input className="btn btn-secondary col-12 label" onClick={this.handleOpenModal} type="submit" />
              </form>
              <div >
                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  className="Modal"
                >
                  <button className="btn btn-secondary modal-close" type="button" onClick={this.handleCloseModal}>Close</button>
                  <div>
                    <h3 className="tip">Tip: ${this.state.totalTip}</h3>
                    <h3 className="tip">Perperson: ${this.state.tipPerPerson}</h3>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>
        </Container>
        <Counter />
      </div>
    );

  }
}