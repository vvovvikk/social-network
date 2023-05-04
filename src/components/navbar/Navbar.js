import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";
import Friends from "./friends/Friends";

function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
      <NavLink to="/users">Users</NavLink>
      <Friends navBar={props.navBar} />
    </div>
  )
}

export default Navbar;