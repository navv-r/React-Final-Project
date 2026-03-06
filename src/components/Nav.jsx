import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__left">
        <Link to="/">
          <img src={logo} alt="Movie Finder Logo" className="nav__logo" />
        </Link>
      </div>

      <div className="nav__right">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <Link to="/about" className="nav__link">
          About
        </Link>
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
