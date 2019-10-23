import React from "react";
import { Route, Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
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
    </div>
  );
};

export default Header;
