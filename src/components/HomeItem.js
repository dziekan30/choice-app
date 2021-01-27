import React, { Component } from 'react'
import { Container, Form } from 'react-bootstrap';
import ReactModal from 'react-modal';
import Counter from './Counter'


export default class HomeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: "",
      service: "",
      partySize: 1,
      totalTip: "",
      tipPerPerson: "",
      showModal: false,
      header: "",
      bill: "",
      partyS: "",
      tip: "",
      perperson: "",
      billPlaceholder: "",
      servicePlaceholder: "",
      partyPlaceholder: "",
      submitButton: "",
      closeButton: "",
      pageVisit: "",
      times: ""

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
            <h1>{this.props.header}</h1>
            <div className="my-tip">
              <Form onSubmit={this.genTip}>
                <Form.Group className="col-12 label">
                  <i className="fas fa-dollar-sign "></i>
                  <Form.Label>{this.props.bill}</Form.Label>
                  <Form.Control type="number" value={this.state.total} onChange={this.handleTotal} placeholder={this.props.billPlaceholder} />
                </Form.Group>

                <Form.Group className="col-12 label">
                  <Form.Label>{this.props.service}</Form.Label>
                  <Form.Control type="number" value={this.state.service} onChange={this.handleService} placeholder={this.props.servicePlaceholder} />
                </Form.Group>

                <Form.Group className="col-12 label">
                  <Form.Label>{this.props.partyS}</Form.Label>
                  <Form.Control type="number" value={this.state.partySize} onChange={this.handleParty} placeholder={this.props.partyPlaceholder} />
                </Form.Group>
                <button className="btn btn-secondary col-12 label" onClick={this.handleOpenModal} type="submit" >{this.props.submitButton}</button>
              </Form>
              <div >
                <ReactModal
                  isOpen={this.state.showModal}
                  contentLabel="Minimal Modal Example"
                  className="Modal"
                >
                  <button className="btn btn-secondary modal-close" type="button" onClick={this.handleCloseModal}>{this.props.closeButton}</button>
                  <div>
                    <h3 className="tip">{this.props.tip} ${this.state.totalTip}</h3>
                    <h3 className="tip">{this.props.perperson} ${this.state.tipPerPerson}</h3>
                  </div>
                </ReactModal>
              </div>
            </div>
          </div>
        </Container>
        <div className="wrapper">
          <div id="footer">
            <h5> {this.props.pageVisit} <Counter /> {this.props.times}</h5>
          </div>
        </div>
      </div>

    )
  }
}
