import React, { Component } from 'react'

export default class Counter extends Component {

  componentDidMount() {
    fetch("https://api.countapi.xyz/update/choice/5ca7d089-65e9-4169-88c6-9a1f728189c5/?amount=1")
      .then(res => res.json())
      .then(res => {
        countEL.innerHTML = res.value
      })
    const countEL =
      document.getElementById('count')
  };
  render() {
    return (
      <div class="wrapper">
        <div id="footer">
          <h5  >This page was visit:  <span id="count">0</span> times.</h5>

        </div>
      </div>
    )

  }
};