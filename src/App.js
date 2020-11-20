import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Polish from './components/Polish'
// import Classprops from './components/Classprops'



export default class App extends Component {
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
      <div>
        {/* <Classprops id="count" /> */}
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/polish" component={Polish} />
            <Route path="/Home" component={Home} />
            <Route path="/" component={Home} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
