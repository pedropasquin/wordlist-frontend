import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/words" className="nav-link" activeClassName="active">
            Words
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/add-word" className="nav-link" activeClassName="active">
            Add Word
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
