import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CaseStudies from './components/CaseStudies';
import CollegePage from './components/CollegePage';
import Home from './components/Home';
import Partners from './components/Partners';

export default function App() {
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
          <li>Discover Feed</li>
          <li>For Students</li>
          <li>Get the App</li>
          <li>Learn More</li>
          <li>Get the App</li>
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
