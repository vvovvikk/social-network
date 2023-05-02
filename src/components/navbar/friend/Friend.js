import React from "react";
import "./friend.css";


export default function Friend(props){
    return(
        <div className="friend"> 
            <img src={props.img} alt="" />
            <span>{props.name}</span>
        </div>
    )
}