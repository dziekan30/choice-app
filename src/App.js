import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home'
import Counter from './components/Counter'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Polish from './components/Polish'
// import English from './components/English'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/polish" component={Polish} />
          <Route path="/Home" component={Home} />
          <Route path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        <Counter />
      </BrowserRouter>
    </div>
  );
}

export default App;
