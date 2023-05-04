import React from "react";
import Friend from "./friend/Friend";

let Friends = (props) => {
    return (
        <div className="friends">
            <h3>Friends</h3>
            {props.navBar.friends.map(e => <Friend img={e.img} name={e.name} key={e.id} />)}
        </div>

    )
}


export default Friends;
