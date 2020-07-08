import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CaseStudies from './components/CaseStudies';
import MoreInfoForm from './components/MoreInfoForm';

export default function App() {
  return React.createElement(
    Router,
    null,
    React.createElement(
      "div",
      null,
      React.createElement(
        "nav",
        null,
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/" },
              "Home"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/caseStudies" },
              "Case Studies"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              Link,
              { to: "/users" },
              "Users"
            )
          )
        )
      ),
      React.createElement(
        Switch,
        null,
        React.createElement(
          Route,
          { path: "/caseStudies" },
          React.createElement(CaseStudiesPage, null)
        ),
        React.createElement(
          Route,
          { path: "/users" },
          React.createElement(Users, null)
        ),
        React.createElement(
          Route,
          { path: "/" },
          React.createElement(Home, null)
        )
      )
    )
  );
}

function Home() {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Test form"
    ),
    React.createElement(MoreInfoForm, null)
  );
}

function CaseStudiesPage() {
  return React.createElement(CaseStudies, null);
}

function Users() {
  return React.createElement(
    "h2",
    null,
    "Users"
  );
}