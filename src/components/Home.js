import React, { Component } from 'react'
import HomeItem from './HomeItem'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HomeItem
          header="Count My Tip"
          bill="Bill Total:"
          billPlaceholder="Enter Bill Amount"
          service="Service: %"
          servicePlaceholder="Enter % of the tip"
          partyS="Party Size:"
          partyPlaceholder="Enter number of the party"
          tip="Tip:"
          perperson="Perperson:"
          closeButton="Close"
          submitButton="Submit"
          pageVisit="This page was visit:"
          times="times."
        />
      </div>
    );
  }
}
