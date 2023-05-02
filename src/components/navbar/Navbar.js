import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";
import Friend from "./friend/Friend";

function Navbar(props) {
  return (
    <div className="navbar">
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/dialogs">Dialogs</NavLink>
      <NavLink to="/users">Users</NavLink>
      <div className="friends">
        <h3>Friends</h3>
        {props.navBar.friends.map(e => <Friend img={e.img} name={e.name} key={e.id} />)}
      </div>
    </div>
  )
}

export default Navbar;