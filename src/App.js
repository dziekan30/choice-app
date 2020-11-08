import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Home from './components/Home'
// import Counter from './components/Counter'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './components/Header'
import About from './components/About'
import Polish from './components/Polish'
// import Modall from './components/Modall'




function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        {/* <Modall /> */}
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/polish" component={Polish} />
          <Route path="/Home" component={Home} />
          <Route path="/" component={Home} />
          <Route component={Error} />
        </Switch>
        {/* <Counter /> */}
      </BrowserRouter>
    </div>
  );
}

// import Modal from "./components/Modall";

// class App extends React.Component {
//   state = {
//     show: false
//   };
//   showModal = e => {
//     this.setState({
//       show: !this.state.show
//     });
//   };
//   render() {
//     return (
//       <div className="App">
//         <button
//           class="toggle-button"
//           id="centered-toggle-button"
//           onClick={e => {
//             this.showModal(e);
//           }}
//         >
//           {" "}
//           show Modal{" "}
//         </button>

//         <Modal onClose={this.showModal} show={this.state.show}>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
//           deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
//           fuga omnis a sed impedit explicabo accusantium nihil doloremque
//           consequuntur.
//         </Modal>
//       </div>
//     );
//   }
// }




export default App;
