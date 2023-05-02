import React from "react";
import "./dialog.css"
import { NavLink } from "react-router-dom";


export function DialogName(props) {
    return (
        <div className="dialog-name">
            <NavLink to={`/dialogs/${props.id}`} className="p-name">{props.name}</NavLink>
        </div>
    )
}

export function DialogMsg(props) {
    return (
        <div className="dialog-message">
            <p className="p-msg">{props.message}</p>
        </div>
    )
}
