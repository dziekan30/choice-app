import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Home from './components/Home'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Polish from './components/Polish'
import Spanish from './components/Spanish'

export default class App extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Spanish" component={Spanish} />
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
