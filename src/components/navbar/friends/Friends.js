import React from "react";
import './friends.css'
import Friend from "./friend/Friend";
import { NavLink } from "react-router-dom";

let Friends = (props) => {
    return (
        <div className="friends">
            <NavLink to='/friends'>Friends</NavLink> 
            {props.navBar.friends.map(e => <Friend img={e.img} name={e.name} key={e.id} />)}
        </div>

    )
}


export default Friends;
