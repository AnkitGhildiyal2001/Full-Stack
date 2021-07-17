import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <HashRouter basename="/">

    <div className="App">
      <Switch>


        <Route path={['/', '/home']} exact component={Home} />

        {/* <Route path="/Continents" component={Continents} /> */}


      </Switch>
    </div>
  </HashRouter>
  );
}

export default App;
