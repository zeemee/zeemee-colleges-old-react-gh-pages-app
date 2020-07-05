import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CaseStudies from './components/CaseStudies';
import MoreInfoForm from './components/MoreInfoForm';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/caseStudies">Case Studies</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/caseStudies">
            <CaseStudiesPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <p>Test form</p>
      <MoreInfoForm/>
    </div>
  );
}

function CaseStudiesPage() {
  return <CaseStudies/>;
}

function Users() {
  return <h2>Users</h2>;
}
