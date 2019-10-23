import React, { Component } from "react";
import Home from "./Home";
import About from "./About";
import Help from "./Help";
import Employee from "./Employee";
import Employees from "./Employees";

import { Route, Switch, Link } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <React.Fragment>
          <Route>
            <nav className="nav nav-tabs">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/emp">
                  Employee
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/employees">
                  Employees
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/help">
                  Help
                </Link>
              </li>
            </nav>
          </Route>
          <Route>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/emp" component={Employee} />
              <Route exact path="/employees" component={Employees} />
              <Route exact path="/emp/:id" component={Employee} />
              <Route exact path="/about" component={About} />
              <Route exact path="/help" component={Help} />
            </Switch>
          </Route>
        </React.Fragment>
      </div>
    );
  }
}
