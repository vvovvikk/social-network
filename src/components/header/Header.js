import React from "react";
import logo from "../../img/logo.svg"
import "./header.css"
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
    </div>
  )
}

export default Header;