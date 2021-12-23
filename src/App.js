import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs/Blogs';

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

          <Route path={['/blog']} exact component={Blogs} />

          <Route path='/Cases_Increase_Home_carousal' exact component={() => {
            window.location.href = 'https://www.hopkinsmedicine.org/health/conditions-and-diseases/coronavirus/first-and-second-waves-of-coronavirus';
            return null;
          }} />

          <Route path='/Social_Distance_Home_carousal' exact component={() => {
            window.location.href = 'https://kidshealth.org/en/parents/coronavirus-social-distancing.html';
            return null;
          }} />

          <Route path='/Covid_Vacination_Home_carousal' exact component={() => {
            window.location.href = 'https://ourworldindata.org/covid-vaccinations';
            return null;
          }} />

          <Route path='/Coronavirus_Home_carousal' exact component={() => {
            window.location.href = 'https://www.who.int/health-topics/coronavirus#tab=tab_1';
            return null;
          }} />

          <Route path='/Covid_India_Home_carousal' exact component={() => {
            window.location.href = 'https://www.mygov.in/covid-19';
            return null;
          }} />

          <Route path='/Impact_Home_carousal' exact component={() => {
            window.location.href = 'https://www.who.int/news-room/spotlight/the-impact-of-covid-19-on-global-health-goals';
            return null;
          }} />

        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
