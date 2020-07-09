import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CaseStudies from './CaseStudies';
import CollegePage from './CollegePage';
import Home from './Home';
import Partners from './Partners';

class Menu extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
            <li>
              <Link to="/caseStudies">Case Studies</Link>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"
                 href="https://www.zeemee.com/discover">Discover Feed</a>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer"
                 href="https://www.zeemee.com">For Students</a>
            </li>
            <li>Get the App</li>
            <li>Learn More</li>
            <li>
              <Link to="/plnu">College Page: PLNU</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/caseStudies">
            <CaseStudies />
          </Route>
          <Route path="/:id" component={CollegePage}/>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Menu;
